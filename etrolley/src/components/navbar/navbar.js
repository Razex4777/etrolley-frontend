/**
 * navbar.js
 * ---------------------------------------------------------------
 * Behaviors:
 *   1. Smart show/hide on scroll (hide on scroll-down, reveal on
 *      scroll-up) — feels native, doesn't fight the user.
 *   2. Adds .is-scrolled class for the soft drop-shadow once we
 *      leave the very top of the page.
 *   3. Dropdown menus (About, Language) — open on click, close on
 *      outside click / Esc / focus loss. Roving aria-expanded.
 *   4. Language switcher updates the trigger label and persists
 *      choice to localStorage. (Actual locale wiring deferred.)
 * ---------------------------------------------------------------
 */

import { mount, qs, qsa } from '../../lib/dom.js';
import { navbarTemplate } from './navbar.html.js';

const SCROLL_DELTA = 8;
const REVEAL_THRESHOLD = 80;
const LANG_STORAGE_KEY = 'etrolley:lang';

export function initNavbar() {
  const host = mount('[data-component="navbar"]', navbarTemplate());
  if (!host) return null;

  const nav = qs('.nav', host);
  if (!nav) return null;

  bindScrollBehavior(nav);
  bindDropdowns(host);
  bindLanguageSwitcher(host);

  return {
    el: nav,
    destroy() {
      // Listeners are scoped to the host; gc on unmount.
    },
  };
}

/* ------------------------- Scroll show/hide ------------------------- */
function bindScrollBehavior(nav) {
  let lastY = window.scrollY;
  let ticking = false;

  const onScroll = () => {
    if (ticking) return;
    ticking = true;

    requestAnimationFrame(() => {
      const y = window.scrollY;
      const dy = y - lastY;

      nav.classList.toggle('is-scrolled', y > 12);

      if (Math.abs(dy) > SCROLL_DELTA && y > REVEAL_THRESHOLD) {
        nav.classList.toggle('is-hidden', dy > 0);
      } else if (y <= REVEAL_THRESHOLD) {
        nav.classList.remove('is-hidden');
      }

      lastY = y;
      ticking = false;
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
}

/* --------------------------- Dropdowns --------------------------- */
function bindDropdowns(host) {
  const triggers = qsa('.nav__link--menu', host);
  if (!triggers.length) return;

  const closeAll = (except) => {
    triggers.forEach((t) => {
      if (t === except) return;
      t.setAttribute('aria-expanded', 'false');
      t.parentElement?.classList.remove('is-open');
    });
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const expanded = trigger.getAttribute('aria-expanded') === 'true';
      closeAll(trigger);
      trigger.setAttribute('aria-expanded', String(!expanded));
      trigger.parentElement?.classList.toggle('is-open', !expanded);
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!host.contains(e.target)) closeAll();
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAll();
  });
}

/* ------------------------ Language switcher ------------------------ */
function bindLanguageSwitcher(host) {
  const items = qsa('[data-lang]', host);
  const label = qs('[data-current-lang]', host);
  if (!items.length || !label) return;

  // Restore previous choice
  const stored = localStorage.getItem(LANG_STORAGE_KEY);
  if (stored) applyLang(items, label, stored);

  items.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const code = btn.dataset.lang;
      applyLang(items, label, code);
      localStorage.setItem(LANG_STORAGE_KEY, code);

      // Close the menu
      const menu = btn.closest('.nav__item--menu');
      const trigger = menu?.querySelector('.nav__link--menu');
      trigger?.setAttribute('aria-expanded', 'false');
      menu?.classList.remove('is-open');
    });
  });
}

function applyLang(items, label, code) {
  items.forEach((btn) => {
    const active = btn.dataset.lang === code;
    btn.setAttribute('aria-checked', String(active));
    btn.classList.toggle('is-active', active);
    if (active) {
      const text = btn.querySelector('span:last-child')?.textContent ?? code;
      label.textContent = text;
    }
  });
  // Reflect direction in the document for future Arabic content.
  document.documentElement.lang = code;
  document.documentElement.dir = code === 'ar' ? 'rtl' : 'ltr';
}
