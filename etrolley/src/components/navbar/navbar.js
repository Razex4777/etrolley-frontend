/**
 * navbar.js
 * ---------------------------------------------------------------
 * Mounts the navbar template, wires:
 *   1. Smart show/hide on scroll.
 *   2. Soft scrolled-state shadow.
 *   3. Dropdown menus (About, Language) — ARIA-correct.
 *   4. Language switcher → calls i18n.setLang which triggers a
 *      full re-mount in main.js.
 *   5. Mobile menu (delegated to mobile-menu.js).
 * ---------------------------------------------------------------
 */

import { mount, qs, qsa } from '../../lib/dom.js';
import { getLang, setLang } from '../../lib/i18n.js';
import { navbarTemplate } from './navbar.html.js';
import { initMobileMenu } from './mobile-menu.js';

const SCROLL_DELTA = 8;
const REVEAL_THRESHOLD = 80;

export function initNavbar() {
  const host = mount('[data-component="navbar"]', navbarTemplate());
  if (!host) return null;

  const nav = qs('.nav', host);
  if (!nav) return null;

  // Reflect current language in both the dropdown selection and the
  // language radios in the mobile menu.
  syncLangActiveState(host);

  const cleanups = [
    bindScrollBehavior(nav),
    bindDropdowns(host),
    bindLanguageSwitcher(host),
    bindMobileLangSwitcher(host),
  ];

  /* The mobile menu manages its own listeners + GSAP timeline; it
     returns a destroy hook we call before re-mounting. */
  const mobileMenu = initMobileMenu(host);
  if (mobileMenu?.destroy) cleanups.push(mobileMenu.destroy);

  return {
    el: nav,
    destroy() {
      cleanups.forEach((fn) => typeof fn === 'function' && fn());
      host.innerHTML = '';
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
  return () => window.removeEventListener('scroll', onScroll);
}

/* --------------------------- Dropdowns --------------------------- */
function bindDropdowns(host) {
  const triggers = qsa('.nav__link--menu', host);
  if (!triggers.length) return () => {};

  const closeAll = (except) => {
    triggers.forEach((t) => {
      if (t === except) return;
      t.setAttribute('aria-expanded', 'false');
      t.parentElement?.classList.remove('is-open');
    });
  };

  const onTriggerClick = (e) => {
    const trigger = e.currentTarget;
    e.stopPropagation();
    const expanded = trigger.getAttribute('aria-expanded') === 'true';
    closeAll(trigger);
    trigger.setAttribute('aria-expanded', String(!expanded));
    trigger.parentElement?.classList.toggle('is-open', !expanded);
  };

  triggers.forEach((t) => t.addEventListener('click', onTriggerClick));

  const onDocClick = (e) => { if (!host.contains(e.target)) closeAll(); };
  const onKey = (e) => { if (e.key === 'Escape') closeAll(); };

  document.addEventListener('click', onDocClick);
  document.addEventListener('keydown', onKey);

  return () => {
    triggers.forEach((t) => t.removeEventListener('click', onTriggerClick));
    document.removeEventListener('click', onDocClick);
    document.removeEventListener('keydown', onKey);
  };
}

/* ------------------------ Desktop language switcher ------------------------ */
function bindLanguageSwitcher(host) {
  const items = qsa('.nav__dropdown-item[data-lang]', host);
  if (!items.length) return () => {};

  const onClick = (e) => {
    const btn = e.currentTarget;
    e.stopPropagation();
    setLang(btn.dataset.lang);
    // The whole navbar re-renders via main.js on lang change, so no
    // need to manually update aria-checked here.
  };

  items.forEach((b) => b.addEventListener('click', onClick));
  return () => items.forEach((b) => b.removeEventListener('click', onClick));
}

/* ------------------------ Mobile-menu language switcher ------------------------ */
function bindMobileLangSwitcher(host) {
  const items = qsa('.mobile-menu__lang-btn[data-lang]', host);
  if (!items.length) return () => {};

  const onClick = (e) => {
    setLang(e.currentTarget.dataset.lang);
  };

  items.forEach((b) => b.addEventListener('click', onClick));
  return () => items.forEach((b) => b.removeEventListener('click', onClick));
}

/* ------------------------ Reflect active lang in markup ------------------------ */
function syncLangActiveState(host) {
  const code = getLang();
  qsa('[data-lang]', host).forEach((btn) => {
    const active = btn.dataset.lang === code;
    btn.classList.toggle('is-active', active);
    if (btn.getAttribute('role') === 'menuitemradio') {
      btn.setAttribute('aria-checked', String(active));
    }
  });
}
