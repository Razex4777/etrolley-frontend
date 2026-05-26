/**
 * main.js — App bootstrap.
 *
 * Order matters:
 *   1. Mount components (so their DOM exists for animations).
 *   2. Init smooth scroll (Lenis) + GSAP-Lenis bridge.
 *   3. Init component behaviors (navbar scroll, hero choreography).
 */

import './styles/main.css';

import { initSmoothScroll } from './lib/smooth-scroll.js';
import { initNavbar } from './components/navbar/navbar.js';
import { initHero } from './components/hero/hero.js';

function boot() {
  initNavbar();
  initHero();
  initSmoothScroll();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}
