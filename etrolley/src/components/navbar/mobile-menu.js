/**
 * mobile-menu.js
 * ---------------------------------------------------------------
 * GSAP-powered full-screen mobile menu.
 *
 * Choreography (open):
 *   1. Backdrop fades in + blurs                (180ms)
 *   2. Panel slides in from right (overshoot)   (520ms, expo.out)
 *   3. Brand + close button fade-in             (320ms)
 *   4. Link items mask-up reveal, staggered     (each 480ms)
 *   5. Footer fades in last                     (320ms)
 *
 * Closing reverses with a tighter timeline so dismissal feels
 * decisive (no slow-mo when the user wants to leave).
 *
 * Honors prefers-reduced-motion: instant show/hide, no transforms.
 * ---------------------------------------------------------------
 */

import { gsap } from 'gsap';
import { qs, qsa } from '../../lib/dom.js';
import { isRTL } from '../../lib/i18n.js';

let openTl = null;
let isOpen = false;
let activeBurger = null;

export function initMobileMenu(host) {
  const menu = qs('.mobile-menu', host);
  if (!menu) return;

  const panel = qs('.mobile-menu__panel', menu);
  const backdrop = qs('.mobile-menu__backdrop', menu);
  const items = qsa('.mobile-menu__item', menu);
  const top = qs('.mobile-menu__top', menu);
  const foot = qs('.mobile-menu__foot', menu);
  const burger = qs('.nav__burger', host);

  if (!panel || !backdrop || !burger) return;

  activeBurger = burger;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Pre-set the closed state so nothing flashes on first open.
  const slideOffset = isRTL() ? -100 : 100;
  gsap.set(menu, { autoAlpha: 0 });
  gsap.set(panel, { xPercent: slideOffset });
  gsap.set(backdrop, { autoAlpha: 0 });
  gsap.set([top, foot], { autoAlpha: 0, y: 20 });
  gsap.set(items, { autoAlpha: 0, yPercent: 100 });

  // Build the timeline once, replay it on each open.
  openTl = gsap.timeline({
    paused: true,
    defaults: { ease: 'power3.out' },
  });

  if (reduced) {
    openTl
      .to(menu, { autoAlpha: 1, duration: 0.001 })
      .to([backdrop, panel, top, foot, items], { autoAlpha: 1, xPercent: 0, yPercent: 0, y: 0, duration: 0.001 });
  } else {
    openTl
      .to(menu, { autoAlpha: 1, duration: 0.001 })
      .to(backdrop, { autoAlpha: 1, duration: 0.45, ease: 'power2.out' }, 0)
      .to(panel, { xPercent: 0, duration: 0.65, ease: 'expo.out' }, 0.05)
      .to(top, { autoAlpha: 1, y: 0, duration: 0.5 }, 0.25)
      .to(
        items,
        {
          autoAlpha: 1,
          yPercent: 0,
          duration: 0.55,
          stagger: 0.07,
          ease: 'expo.out',
        },
        0.32,
      )
      .to(foot, { autoAlpha: 1, y: 0, duration: 0.45 }, 0.6);
  }

  // ----- Wire up triggers -----
  const onBurgerClick = () => {
    isOpen ? close(menu) : open(menu);
  };
  burger.addEventListener('click', onBurgerClick);

  // Close: backdrop + close button + nav links + Esc
  const closeTargets = qsa('[data-menu-close]', menu);
  const onCloseClick = () => close(menu);
  closeTargets.forEach((el) => el.addEventListener('click', onCloseClick));

  const onKeydown = (e) => {
    if (e.key === 'Escape' && isOpen) close(menu);
  };
  document.addEventListener('keydown', onKeydown);

  // Close if viewport jumps to desktop
  const desktopMQ = window.matchMedia('(min-width: 981px)');
  const onMediaChange = (e) => {
    if (e.matches && isOpen) close(menu, { instant: true });
  };
  desktopMQ.addEventListener('change', onMediaChange);

  // Expose a destroy hook so callers can tear down listeners on
  // re-mount (language switch, etc.) without leaking handlers.
  return {
    destroy() {
      if (isOpen) close(menu, { instant: true });
      burger.removeEventListener('click', onBurgerClick);
      closeTargets.forEach((el) => el.removeEventListener('click', onCloseClick));
      document.removeEventListener('keydown', onKeydown);
      desktopMQ.removeEventListener('change', onMediaChange);
    },
  };
}

function open(menu) {
  if (isOpen) return;
  isOpen = true;
  document.body.classList.add('is-menu-open');
  menu.classList.add('is-open');
  menu.setAttribute('aria-hidden', 'false');
  activeBurger?.setAttribute('aria-expanded', 'true');
  openTl?.timeScale(1).play(0);

  // Focus the close button for keyboard users
  setTimeout(() => qs('.mobile-menu__close', menu)?.focus(), 350);
}

function close(menu, { instant = false } = {}) {
  if (!isOpen) return;
  isOpen = false;

  const panel = qs('.mobile-menu__panel', menu);
  const backdrop = qs('.mobile-menu__backdrop', menu);

  document.body.classList.remove('is-menu-open');
  activeBurger?.setAttribute('aria-expanded', 'false');

  if (instant) {
    openTl?.pause(0);
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden', 'true');
    activeBurger?.focus();
    return;
  }

  // Fast, decisive dismissal.
  const slideOffset = isRTL() ? -100 : 100;
  gsap
    .timeline({
      defaults: { ease: 'power3.in' },
      onComplete: () => {
        openTl?.pause(0);
        menu.classList.remove('is-open');
        menu.setAttribute('aria-hidden', 'true');
        activeBurger?.focus();
      },
    })
    .to(panel, { xPercent: slideOffset, duration: 0.45, ease: 'power3.in' })
    .to(backdrop, { autoAlpha: 0, duration: 0.3 }, 0.1);
}
