/**
 * support.js — "Support & Help" CTA card
 * ---------------------------------------------------------------
 * Lightweight: just an entrance choreography. The buttons are
 * plain anchors so navigation/accessibility behave natively
 * (right-click, copy-link, deep-link to wa.me / tel: / mailto:).
 * ---------------------------------------------------------------
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { mount } from '../../lib/dom.js';
import { supportTemplate } from './support.html.js';

gsap.registerPlugin(ScrollTrigger);

export function initSupport() {
  const host = mount('[data-component="support"]', supportTemplate());
  if (!host) return null;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    return { el: host, destroy() { host.innerHTML = ''; } };
  }

  const ctx = gsap.context(() => {
    /* Initial state */
    gsap.set('.support__card',         { autoAlpha: 0, y: 60 });
    gsap.set('.support__eyebrow',      { autoAlpha: 0, x: -20 });
    gsap.set('.support__slider-knob',  { scale: 0, transformOrigin: 'center center' });
    gsap.set('.support__title',        { autoAlpha: 0, y: 24 });
    gsap.set('.support__btn',          { autoAlpha: 0, y: 28, scale: 0.85 });
    gsap.set('.support__cart-back',    { autoAlpha: 0, x: 60 });
    gsap.set('.support__cart-front',   { autoAlpha: 0, x: 40, scale: 0.92, transformOrigin: 'center center' });

    gsap.timeline({
      defaults: { ease: 'power3.out' },
      scrollTrigger: {
        trigger: host,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    })
      .to('.support__card',        { autoAlpha: 1, y: 0, duration: 0.9, ease: 'expo.out' }, 0)
      .to('.support__cart-back',   { autoAlpha: 1, x: 0, duration: 1.1, ease: 'expo.out' }, 0.05)
      .to('.support__cart-front',  { autoAlpha: 1, x: 0, scale: 1, duration: 1.1, ease: 'expo.out' }, 0.18)
      .to('.support__eyebrow',     { autoAlpha: 1, x: 0, duration: 0.6 }, 0.25)
      .to('.support__slider-knob', { scale: 1, duration: 0.55, ease: 'back.out(1.8)' }, 0.3)
      .to('.support__title',       { autoAlpha: 1, y: 0, duration: 0.7 }, 0.4)
      .to('.support__btn', {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.55,
        stagger: 0.08,
        ease: 'back.out(1.4)',
      }, 0.55);
  }, host);

  return {
    el: host,
    destroy() {
      ctx.revert();
      host.innerHTML = '';
    },
  };
}
