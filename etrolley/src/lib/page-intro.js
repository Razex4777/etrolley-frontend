/**
 * page-intro.js
 * ---------------------------------------------------------------
 * First-paint intro choreography:
 *
 *   1. A full-screen splash with the brand mark fades in fast.
 *   2. Brand mark scales down to nothing while the splash wipes
 *      upward, revealing the page underneath.
 *   3. The navbar drops in from above.
 *
 * The hero, steps, services, etc. each run their own entrance
 * timeline triggered by ScrollTrigger — this module owns ONLY the
 * framing curtain + navbar fly-in.
 *
 * Honours prefers-reduced-motion: instant reveal, no animation.
 * ---------------------------------------------------------------
 */

import { gsap } from 'gsap';

let played = false;

export function playPageIntro() {
  if (played) return Promise.resolve();
  played = true;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    document.body.classList.add('intro-done');
    return Promise.resolve();
  }

  const splash = ensureSplashEl();
  const nav = document.querySelector('.nav');

  /* Lock scroll while the curtain is up. */
  const prevOverflow = document.body.style.overflow;
  document.body.style.overflow = 'hidden';

  return new Promise((resolve) => {
    const tl = gsap.timeline({
      defaults: { ease: 'expo.inOut' },
      onComplete: () => {
        document.body.style.overflow = prevOverflow;
        document.body.classList.add('intro-done');
        splash.remove();
        resolve();
      },
    });

    /* Initial states */
    if (nav) {
      gsap.set(nav, { yPercent: -100, autoAlpha: 0 });
    }
    gsap.set(splash, { autoAlpha: 1 });
    gsap.set('.page-intro__mark', { autoAlpha: 0, y: 16, scale: 0.92 });

    /* Sequence */
    tl.to('.page-intro__mark', {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: 'power3.out',
    });

    tl.to('.page-intro__mark', {
      scale: 0.7,
      autoAlpha: 0,
      duration: 0.45,
      ease: 'power2.in',
    }, '+=0.35');

    tl.to(splash, {
      yPercent: -100,
      duration: 0.95,
      ease: 'expo.inOut',
    }, '-=0.1');

    if (nav) {
      tl.to(nav, {
        yPercent: 0,
        autoAlpha: 1,
        duration: 0.7,
        ease: 'expo.out',
      }, '-=0.5');
    }
  });
}

/* ----------------- helpers ----------------- */
function ensureSplashEl() {
  let splash = document.querySelector('.page-intro');
  if (splash) return splash;

  splash = document.createElement('div');
  splash.className = 'page-intro';
  splash.setAttribute('aria-hidden', 'true');
  splash.innerHTML = `
    <div class="page-intro__mark">
      <img src="/images/logo-etrolley-28bffb.png" alt="" />
    </div>
  `;
  document.body.appendChild(splash);
  return splash;
}
