/**
 * steps.js
 * ---------------------------------------------------------------
 * "Our Creative Steps" — psstudios/lunchbox-style scroll choreography:
 *
 *   1. Section enters viewport → headline lines mask-up reveal.
 *   2. Eyebrow slider knob slides from left to right (along its track).
 *   3. Cards rise from below with a stagger. Card 03 rises further
 *      (lifted state) — landing higher than its siblings.
 *   4. LET'S START circle scales-in with bounce, orbit text starts
 *      its infinite rotation immediately.
 *   5. Paragraph fades in last.
 *   6. On hover: cards lift slightly, CTA gets magnetic-pull.
 *
 * All animations run inside a gsap.context bound to the host so
 * destroy() cleans up ScrollTriggers without orphans.
 * ---------------------------------------------------------------
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { mount, qs, qsa } from '../../lib/dom.js';
import { stepsTemplate } from './steps.html.js';

gsap.registerPlugin(ScrollTrigger);

export function initSteps() {
  const host = mount('[data-component="steps"]', stepsTemplate());
  if (!host) return null;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return { el: host, destroy() { host.innerHTML = ''; } };

  const ctx = gsap.context(() => {
    const cards = qsa('.steps__card', host);
    const cardHigh = qs('.steps__card--high', host);
    const cardsLow = qsa('.steps__card--low', host);
    const mm = gsap.matchMedia();

    /* ---------- Common Initial state ---------- */
    gsap.set('.steps__title .line-inner', { yPercent: 110 });
    gsap.set('.steps__eyebrow',           { autoAlpha: 0, x: -16 });
    gsap.set('.steps__slider-knob',       { x: -38 });
    gsap.set('.steps__cta',               { autoAlpha: 0, scale: 0.8, y: 40 });
    gsap.set('.steps__paragraph',         { autoAlpha: 0, y: 24 });

    /* ---------- 1. Desktop Layout Animations (min-width: 1101px) ---------- */
    mm.add('(min-width: 1101px)', () => {
      // Card 03 is lifted up on desktop
      gsap.set(cardsLow, { autoAlpha: 0, y: 80 });
      gsap.set(cardHigh, { autoAlpha: 0, y: 80 - 180 });

      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: host,
          start: 'top 75%',
          end: 'bottom bottom',
          toggleActions: 'play none none reverse',
        },
      });

      tl
        .to('.steps__eyebrow', { autoAlpha: 1, x: 0, duration: 0.6 }, 0)
        .to('.steps__slider-knob', { x: 0, duration: 0.9, ease: 'expo.out' }, 0.1)
        .to('.steps__title .line-inner', {
          yPercent: 0,
          duration: 0.95,
          stagger: 0.15,
          ease: 'expo.out',
        }, 0.15)
        .to(cardsLow, {
          autoAlpha: 1,
          y: 0,
          duration: 0.95,
          stagger: 0.12,
          ease: 'expo.out',
        }, 0.45)
        .to(cardHigh, {
          autoAlpha: 1,
          y: -180,
          duration: 0.95,
          ease: 'expo.out',
        }, 0.69)
        .to('.steps__cta', {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        }, 0.75)
        .to('.steps__paragraph', { autoAlpha: 1, y: 0, duration: 0.8 }, 0.9);

      // Hover triggers with desktop offsets (-180px base for Card 03)
      const enterListeners = [];
      const leaveListeners = [];

      cards.forEach((card) => {
        const num = qs('.steps__num', card);
        const isHigh = card.classList.contains('steps__card--high');
        const baseVal = isHigh ? -180 : 0;
        const hoverVal = isHigh ? -188 : -8;

        const onEnter = () => {
          gsap.to(card, { y: hoverVal, duration: 0.4, ease: 'power2.out', overwrite: 'auto' });
          if (num) gsap.to(num, { rotate: 8, scale: 1.06, duration: 0.45, ease: 'back.out(2)' });
        };
        const onLeave = () => {
          gsap.to(card, { y: baseVal, duration: 0.55, ease: 'power3.out', overwrite: 'auto' });
          if (num) gsap.to(num, { rotate: 0, scale: 1, duration: 0.5, ease: 'power3.out' });
        };

        card.addEventListener('mouseenter', onEnter);
        card.addEventListener('mouseleave', onLeave);
        enterListeners.push({ card, fn: onEnter });
        leaveListeners.push({ card, fn: onLeave });
      });

      // Subtle parallax on Card 03 (desktop only)
      if (cardHigh) {
        gsap.to(cardHigh, {
          yPercent: -6,
          ease: 'none',
          scrollTrigger: {
            trigger: host,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.8,
          },
        });
      }

      return () => {
        enterListeners.forEach(({ card, fn }) => card.removeEventListener('mouseenter', fn));
        leaveListeners.forEach(({ card, fn }) => card.removeEventListener('mouseleave', fn));
      };
    });

    /* ---------- 2. Mobile/Tablet Layout Animations (max-width: 1100px) ---------- */
    mm.add('(max-width: 1100px)', () => {
      // All cards align symmetrically (no high card offset)
      gsap.set(cards, { autoAlpha: 0, y: 80 });

      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: host,
          start: 'top 80%',
          end: 'bottom bottom',
          toggleActions: 'play none none reverse',
        },
      });

      tl
        .to('.steps__eyebrow', { autoAlpha: 1, x: 0, duration: 0.6 }, 0)
        .to('.steps__slider-knob', { x: 0, duration: 0.9, ease: 'expo.out' }, 0.1)
        .to('.steps__title .line-inner', {
          yPercent: 0,
          duration: 0.95,
          stagger: 0.15,
          ease: 'expo.out',
        }, 0.15)
        .to(cards, {
          autoAlpha: 1,
          y: 0,
          duration: 0.95,
          stagger: 0.12,
          ease: 'expo.out',
        }, 0.45)
        .to('.steps__cta', {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        }, 0.8)
        .to('.steps__paragraph', { autoAlpha: 1, y: 0, duration: 0.8 }, 0.95);

      // Hover triggers with standard mobile offsets (0 base for all cards)
      const enterListeners = [];
      const leaveListeners = [];

      cards.forEach((card) => {
        const num = qs('.steps__num', card);
        const baseVal = 0;
        const hoverVal = -8;

        const onEnter = () => {
          gsap.to(card, { y: hoverVal, duration: 0.4, ease: 'power2.out', overwrite: 'auto' });
          if (num) gsap.to(num, { rotate: 8, scale: 1.06, duration: 0.45, ease: 'back.out(2)' });
        };
        const onLeave = () => {
          gsap.to(card, { y: baseVal, duration: 0.55, ease: 'power3.out', overwrite: 'auto' });
          if (num) gsap.to(num, { rotate: 0, scale: 1, duration: 0.5, ease: 'power3.out' });
        };

        card.addEventListener('mouseenter', onEnter);
        card.addEventListener('mouseleave', onLeave);
        enterListeners.push({ card, fn: onEnter });
        leaveListeners.push({ card, fn: onLeave });
      });

      return () => {
        enterListeners.forEach(({ card, fn }) => card.removeEventListener('mouseenter', fn));
        leaveListeners.forEach(({ card, fn }) => card.removeEventListener('mouseleave', fn));
      };
    });

    /* ---------- Magnetic CTA ---------- */
    const cta = qs('.steps__cta', host);
    if (cta) {
      const cleanupMagnetic = magneticHover(cta, 0.22);
      /* gsap.context picks up GSAP-tracked items only — wire the
         pointer-listener cleanup so it runs alongside ctx.revert(). */
      ctx.add(() => cleanupMagnetic);
    }
  }, host);

  return {
    el: host,
    destroy() {
      ctx.revert();
      host.innerHTML = '';
    },
  };
}

/* --------------------- Helpers --------------------- */

/**
 * Magnetic-pull hover that follows the cursor with easing.
 * Returns a cleanup function that detaches both DOM listeners so
 * callers can integrate it into a lifecycle (gsap.context, etc.).
 */
function magneticHover(el, strength = 0.25) {
  const onMove = (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    gsap.to(el, {
      x: x * strength,
      y: y * strength,
      scale: 1.08,
      duration: 0.4,
      ease: 'power3.out',
      overwrite: 'auto'
    });
  };
  const onLeave = () => {
    gsap.to(el, { x: 0, y: 0, scale: 1, duration: 0.55, ease: 'elastic.out(1, 0.5)', overwrite: 'auto' });
  };
  el.addEventListener('mousemove', onMove);
  el.addEventListener('mouseleave', onLeave);

  return () => {
    el.removeEventListener('mousemove', onMove);
    el.removeEventListener('mouseleave', onLeave);
  };
}
