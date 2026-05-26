/**
 * hero.js
 * ---------------------------------------------------------------
 * Entrance choreography:
 *   1. Headline lines mask-up reveal (staggered, like Lunchbox/PSStudios).
 *   2. QR + validate footnote fade-in from left.
 *   3. CTA + arrows pop-in.
 *   4. Hero image floats up + scales subtly.
 *   5. Follow rail slides in from right.
 *   6. Watermark scales in last (subtle).
 *
 * Scroll behaviors:
 *   - Watermark drifts horizontally on scroll for parallax depth.
 *   - Hero image lifts on scroll-into-view.
 *
 * Honors prefers-reduced-motion automatically (set via tokens.css
 * + a guard here for transform-based animations).
 * ---------------------------------------------------------------
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { mount, qs, qsa } from '../../lib/dom.js';
import { heroTemplate } from './hero.html.js';

gsap.registerPlugin(ScrollTrigger);

export function initHero() {
  const host = mount('[data-component="hero"]', heroTemplate());
  if (!host) return null;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return { el: host };

  const ctx = gsap.context(() => {
    // -------- Initial state (set immediately to avoid FOUC) --------
    gsap.set('.hero__headline .line', { yPercent: 110 });
    gsap.set('.hero__aside, .hero__cta-wrap, .hero__rail, .hero__image, .hero__dream-pill, .hero__side-cta', {
      opacity: 0,
    });
    gsap.set('.hero__aside', { x: -40 });
    gsap.set('.hero__rail', { x: 40 });
    gsap.set('.hero__image', { y: 30, scale: 0.97 });
    gsap.set('.hero__cta-wrap', { y: 24 });
    gsap.set('.hero__dream-pill', { y: -10, scale: 0.85 });
    /* Watermark: GSAP-managed centering (xPercent/yPercent: -50)
       so scroll-driven transforms don't kill our centering. */
    gsap.set('.hero__watermark', {
      xPercent: -50,
      yPercent: -50,
      opacity: 0,
      scale: 1.05,
    });

    // -------- Entrance timeline --------
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      delay: 0.15,
    });

    tl.to('.hero__watermark', { opacity: 1, scale: 1, duration: 1.4, ease: 'expo.out' }, 0)
      .to(
        '.hero__headline .line',
        {
          yPercent: 0,
          duration: 0.95,
          stagger: 0.09,
          ease: 'expo.out',
        },
        0.1,
      )
      .to('.hero__dream-pill', { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'back.out(1.8)' }, 0.45)
      .to('.hero__aside', { opacity: 1, x: 0, duration: 0.9 }, 0.55)
      .to('.hero__cta-wrap', { opacity: 1, y: 0, duration: 0.8 }, 0.7)
      .to('.hero__image', { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: 'expo.out' }, 0.55)
      .to('.hero__rail', { opacity: 1, x: 0, duration: 0.8 }, 0.85)
      .to('.hero__side-cta', { opacity: 1, duration: 0.6 }, 1.05);

    // -------- Scroll-driven parallax (desktop only — keep mobile static) --------
    const isDesktop = window.matchMedia('(min-width: 881px)').matches;

    if (isDesktop) {
      gsap.to('.hero__watermark', {
        /* Drift slightly off-center as user scrolls; xPercent base is -50
           so this becomes a small relative shift, not a teleport. */
        xPercent: -54,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to('.hero__image', {
        y: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6,
        },
      });

      gsap.to('.hero__bg', {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }

    // -------- Magnetic CTA hover (subtle pull toward cursor) --------
    const cta = qs('.hero__cta', host);
    if (cta) magneticHover(cta, 0.25);

    // -------- Carousel arrow nudge (placeholder behavior) --------
    qsa('.hero__nav-btn', host).forEach((btn) => {
      btn.addEventListener('click', () => {
        gsap.fromTo(
          btn,
          { scale: 0.92 },
          { scale: 1, duration: 0.35, ease: 'back.out(2)' },
        );
      });
    });
  }, host);

  return {
    el: host,
    destroy() {
      ctx.revert();
      host.innerHTML = '';
    },
  };
}

/**
 * Apply a small magnetic-pull effect on hover.
 * @param {HTMLElement} el
 * @param {number} strength  0..1 — fraction of distance to follow
 */
function magneticHover(el, strength = 0.3) {
  const onMove = (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    gsap.to(el, {
      x: x * strength,
      y: y * strength,
      duration: 0.35,
      ease: 'power3.out',
    });
  };
  const onLeave = () => {
    gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' });
  };
  el.addEventListener('mousemove', onMove);
  el.addEventListener('mouseleave', onLeave);
}
