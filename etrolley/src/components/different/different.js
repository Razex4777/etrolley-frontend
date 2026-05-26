/**
 * different.js
 * ---------------------------------------------------------------
 * Scroll-pinned deck stacking animation for "What Makes Us Different?"
 * ---------------------------------------------------------------
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { mount, qsa, qs } from '../../lib/dom.js';
import { differentTemplate } from './different.html.js';

gsap.registerPlugin(ScrollTrigger);

export function initDifferent() {
  const host = mount('[data-component="different"]', differentTemplate());
  if (!host) return null;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return { el: host, destroy() { host.innerHTML = ''; } };

  const ctx = gsap.context(() => {
    /* ---------- Eyebrow slider entrance ---------- */
    gsap.set('.different__eyebrow',     { autoAlpha: 0, x: -16 });
    gsap.set('.different__slider-knob', { x: -38 });

    gsap.timeline({
      scrollTrigger: {
        trigger: host,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      }
    })
    .to('.different__eyebrow', { autoAlpha: 1, x: 0, duration: 0.6 })
    .to('.different__slider-knob', { x: 0, duration: 0.9, ease: 'expo.out' }, '-=0.45');

    /* ---------- Stacking Deck Scroll Animation ---------- */
    const slides = qsa('.different__slide', host);
    if (slides.length <= 1) return;

    // Position subsequent cards down and hide them initially to prevent overflow rendering
    slides.forEach((slide, idx) => {
      if (idx > 0) {
        gsap.set(slide, { yPercent: 100, autoAlpha: 0 });
      }
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: host,
        start: 'top top',
        end: `+=${slides.length * 60}%`, // Snappy scroll distance
        pin: true,
        scrub: 0.4,
        anticipatePin: 1,
      }
    });

    // Create the sequential card deck cover steps (no scaling/shifting to avoid visual clutter)
    slides.forEach((slide, idx) => {
      if (idx === 0) return;
      
      tl.to(slide, {
        yPercent: 0,
        autoAlpha: 1, // Fade in and show as it enters
        ease: 'none',
      }, `slide-${idx}`);
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
