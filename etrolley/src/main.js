/**
 * main.js — App bootstrap.
 *
 * Order matters:
 *   1. Apply persisted language to <html lang/dir> BEFORE first paint.
 *   2. Mount components (so their DOM exists for animations).
 *   3. Wire language-change listener — re-mount on every change.
 *   4. Init smooth scroll (Lenis) + GSAP-Lenis bridge.
 *   5. Init declarative scroll-reveal layer (data-reveal="…").
 *   6. Play the first-paint intro choreography (splash + navbar drop-in).
 */

import './styles/main.css';

import { applyDocAttrs, onLangChange } from './lib/i18n.js';
import { initSmoothScroll } from './lib/smooth-scroll.js';
import { initReveal, destroyReveal } from './lib/reveal.js';
import { playPageIntro } from './lib/page-intro.js';
import { initNavbar } from './components/navbar/navbar.js';
import { initHero } from './components/hero/hero.js';
import { initSteps } from './components/steps/steps.js';
import { initDifferent } from './components/different/different.js';
import { initServices } from './components/services/services.js';

let activeNavbar = null;
let activeHero = null;
let activeSteps = null;
let activeDifferent = null;
let activeServices = null;

function mountAll() {
  activeNavbar?.destroy?.();
  activeHero?.destroy?.();
  activeSteps?.destroy?.();
  activeDifferent?.destroy?.();
  activeServices?.destroy?.();
  destroyReveal();

  activeNavbar = initNavbar();
  activeHero = initHero();
  activeSteps = initSteps();
  activeDifferent = initDifferent();
  activeServices = initServices();

  /* Initialise the declarative scroll-reveal AFTER components have
     rendered, so any [data-reveal] markup they ship is picked up. */
  initReveal();
}

function boot() {
  applyDocAttrs();
  mountAll();

  onLangChange(() => {
    mountAll();
  });

  initSmoothScroll();
  /* Page-intro waits for the first paint to settle so the splash
     doesn't fight FOUC. requestAnimationFrame guarantees layout
     has been computed at least once. */
  requestAnimationFrame(() => {
    playPageIntro();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}
