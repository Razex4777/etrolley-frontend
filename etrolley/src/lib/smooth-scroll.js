/**
 * smooth-scroll.js
 * ---------------------------------------------------------------
 * Single-source-of-truth for site-wide smooth scrolling.
 * Wraps Lenis and bridges it to GSAP's ScrollTrigger so both
 * stay in lockstep (same RAF, same scroll positions).
 *
 * Usage:
 *   import { initSmoothScroll } from '@lib/smooth-scroll.js';
 *   const lenis = initSmoothScroll();   // call once at boot
 * ---------------------------------------------------------------
 */

import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenisInstance = null;

export function initSmoothScroll() {
  if (lenisInstance) return lenisInstance;

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  lenisInstance = new Lenis({
    duration: prefersReducedMotion ? 0 : 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: !prefersReducedMotion,
    wheelMultiplier: 1,
    touchMultiplier: 1.4,
    lerp: prefersReducedMotion ? 1 : 0.1,
  });

  // Bridge Lenis -> ScrollTrigger so pinning/timelines stay in sync.
  lenisInstance.on('scroll', ScrollTrigger.update);

  // Hand control of the RAF loop to GSAP's ticker (single loop, no jitter).
  gsap.ticker.add((time) => {
    lenisInstance.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  return lenisInstance;
}

export function getLenis() {
  return lenisInstance;
}
