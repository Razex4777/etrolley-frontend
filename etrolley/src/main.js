/**
 * main.js — App bootstrap.
 *
 * Order matters:
 *   1. Apply persisted language to <html lang/dir> BEFORE first paint.
 *   2. Mount components (so their DOM exists for animations).
 *   3. Wire language-change listener to re-render templates.
 *   4. Init smooth scroll (Lenis) + GSAP-Lenis bridge.
 */

import './styles/main.css';

import { applyDocAttrs, onLangChange } from './lib/i18n.js';
import { initSmoothScroll } from './lib/smooth-scroll.js';
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
  activeNavbar = initNavbar();
  activeHero = initHero();
  activeSteps = initSteps();
  activeDifferent = initDifferent();
  activeServices = initServices();
}

function boot() {
  applyDocAttrs();   // sync html lang + dir from storage
  mountAll();

  // Re-render whenever the language changes — simplest source-of-truth model.
  onLangChange(() => {
    mountAll();
  });

  initSmoothScroll();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}
