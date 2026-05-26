/**
 * reveal.js
 * ---------------------------------------------------------------
 * Lightweight, declarative scroll-reveal layer driven by GSAP +
 * ScrollTrigger. Mark any element with `data-reveal="<preset>"`
 * (and optionally `data-reveal-delay`, `data-reveal-stagger`) and
 * it gets animated when it enters the viewport.
 *
 * Presets:
 *   fade-up     — opacity 0 → 1, y 28 → 0
 *   fade        — opacity 0 → 1
 *   slide-left  — opacity 0 → 1, x  40 → 0
 *   slide-right — opacity 0 → 1, x -40 → 0
 *   scale       — opacity 0 → 1, scale 0.94 → 1
 *   blur-in     — opacity 0 → 1, filter blur(12px) → blur(0)
 *
 * Group reveal:
 *   data-reveal-group           on parent → children stagger
 *   data-reveal-group-stagger   override stagger (default 0.08)
 *
 * All animations honor prefers-reduced-motion (set final state and bail).
 *
 * Usage:
 *   import { initReveal } from '@lib/reveal.js';
 *   initReveal();
 *   <h2 data-reveal="fade-up">Title</h2>
 *   <ul data-reveal-group>
 *     <li data-reveal="fade-up">A</li>
 *     <li data-reveal="fade-up">B</li>
 *   </ul>
 * ---------------------------------------------------------------
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PRESETS = {
  'fade-up':     { from: { autoAlpha: 0, y: 28 },           to: { autoAlpha: 1, y: 0 } },
  'fade':        { from: { autoAlpha: 0 },                  to: { autoAlpha: 1 } },
  'slide-left':  { from: { autoAlpha: 0, x: 40 },           to: { autoAlpha: 1, x: 0 } },
  'slide-right': { from: { autoAlpha: 0, x: -40 },          to: { autoAlpha: 1, x: 0 } },
  'scale':       { from: { autoAlpha: 0, scale: 0.94 },     to: { autoAlpha: 1, scale: 1 } },
  'blur-in':     { from: { autoAlpha: 0, filter: 'blur(12px)' }, to: { autoAlpha: 1, filter: 'blur(0px)' } },
};

const DEFAULT_DURATION = 0.85;
const DEFAULT_EASE = 'power3.out';

let inited = false;
const triggers = new Set();

export function initReveal(root = document) {
  if (typeof window === 'undefined') return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Solo elements ---- */
  root.querySelectorAll('[data-reveal]').forEach((el) => {
    if (el.closest('[data-reveal-group]')) return;   // handled by the group
    bindOne(el, reduced);
  });

  /* ---- Groups (parent staggers its data-reveal children) ---- */
  root.querySelectorAll('[data-reveal-group]').forEach((group) => {
    bindGroup(group, reduced);
  });

  inited = true;
}

/** Tear down all triggers created by this module (e.g. on hot reload). */
export function destroyReveal() {
  triggers.forEach((trig) => trig.kill());
  triggers.clear();
  inited = false;
}

/* --------------------------- internals --------------------------- */

function bindOne(el, reduced) {
  const presetName = el.dataset.reveal || 'fade-up';
  const preset = PRESETS[presetName] || PRESETS['fade-up'];
  const delay = parseFloat(el.dataset.revealDelay) || 0;

  if (reduced) {
    gsap.set(el, preset.to);
    return;
  }

  gsap.set(el, preset.from);

  const trig = ScrollTrigger.create({
    trigger: el,
    start: 'top 88%',
    once: true,
    onEnter: () => {
      gsap.to(el, {
        ...preset.to,
        duration: DEFAULT_DURATION,
        ease: DEFAULT_EASE,
        delay,
      });
    },
  });
  triggers.add(trig);
}

function bindGroup(group, reduced) {
  const items = group.querySelectorAll('[data-reveal]');
  if (!items.length) return;

  const presetName = items[0].dataset.reveal || 'fade-up';
  const preset = PRESETS[presetName] || PRESETS['fade-up'];
  const stagger = parseFloat(group.dataset.revealGroupStagger) || 0.08;

  if (reduced) {
    items.forEach((el) => gsap.set(el, preset.to));
    return;
  }

  items.forEach((el) => gsap.set(el, preset.from));

  const trig = ScrollTrigger.create({
    trigger: group,
    start: 'top 85%',
    once: true,
    onEnter: () => {
      gsap.to(items, {
        ...preset.to,
        duration: DEFAULT_DURATION,
        ease: DEFAULT_EASE,
        stagger,
      });
    },
  });
  triggers.add(trig);
}
