/**
 * designs.js — "Distinctive Designs" Section Controller
 * ---------------------------------------------------------------
 * Handles:
 *   1. Dynamic HTML mounting and destruction.
 *   2. Prev/Next button scrolling of the template viewport.
 *   3. Touch/pointer momentum drag scrolling (matching clients & services).
 *   4. GSAP entrance triggers for watermarks, circles, and card stagger.
 * ---------------------------------------------------------------
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { mount, qs, qsa } from '../../lib/dom.js';
import { isRTL } from '../../lib/i18n.js';
import { designsTemplate } from './designs.html.js';

gsap.registerPlugin(ScrollTrigger);

const FRICTION = 0.92;
const MIN_VELOCITY = 0.3;
const DRAG_THRESHOLD = 6;

export function initDesigns() {
  const host = mount('[data-component="designs"]', designsTemplate());
  if (!host) return null;

  const track = qs('#designs-track', host);
  const cards = qsa('.designs__card', host);
  const prevBtn = qs('.designs__arrow[data-dir="prev"]', host);
  const nextBtn = qs('.designs__arrow[data-dir="next"]', host);

  /* ---------------- Arrow controls ---------------- */
  const rtl = isRTL();
  const dir = rtl ? -1 : 1;

  function step(amount) {
    if (!track) return;
    track.scrollBy({ left: amount * dir, behavior: 'smooth' });
  }

  function getStepDistance() {
    if (cards.length === 0) return 280;
    const cardW = cards[0].getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 24;
    return cardW + gap;
  }

  const onPrev = () => step(-getStepDistance());
  const onNext = () => step(+getStepDistance());

  prevBtn?.addEventListener('click', onPrev);
  nextBtn?.addEventListener('click', onNext);

  /* ---------------- Touch Drag-to-scroll ---------------- */
  const drag = bindDragScroll(track);

  /* ---------------- Entrance Animations ---------------- */
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let ctx = null;

  if (!reduced) {
    ctx = gsap.context(() => {
      /* -------- Initial hidden states -------- */
      gsap.set('.designs__watermark',      { autoAlpha: 0, scale: 0.75, rotate: -28 });
      gsap.set('.designs__eyebrow',        { autoAlpha: 0, x: -24 });
      gsap.set('.designs__circle--solid',   { scale: 0, transformOrigin: 'center center' });
      gsap.set('.designs__circle--hollow',  { scale: 0, transformOrigin: 'center center' });
      gsap.set('.designs__title',          { autoAlpha: 0, y: 36, clipPath: 'inset(0 0 100% 0)' });
      gsap.set('.designs__arrow',          { autoAlpha: 0, scale: 0.8 });
      gsap.set('.designs__card',           { autoAlpha: 0, y: 55, scale: 0.92 });
      gsap.set('.designs__card-label',     { autoAlpha: 0, y: 12 });

      /* -------- Timeline -------- */
      gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: host,
          start: 'top 82%',
          toggleActions: 'play none none reverse',
        },
      })
        .to('.designs__watermark', {
          autoAlpha: 0.18, scale: 1, rotate: -10,
          duration: 1.4, ease: 'elastic.out(1, 0.7)',
        }, 0)
        .to('.designs__eyebrow',       { autoAlpha: 1, x: 0, duration: 0.7 }, 0.1)
        .to('.designs__circle--solid',  { scale: 1, duration: 0.65, ease: 'elastic.out(1, 0.6)' }, 0.2)
        .to('.designs__circle--hollow', { scale: 1, duration: 0.65, ease: 'elastic.out(1, 0.6)' }, 0.28)
        .to('.designs__title', {
          autoAlpha: 1, y: 0,
          clipPath: 'inset(0 0 0% 0)',
          duration: 0.9, ease: 'expo.out',
        }, 0.3)
        .to('.designs__arrow', {
          autoAlpha: 1, scale: 1,
          duration: 0.6, stagger: 0.12,
          ease: 'back.out(1.6)',
        }, 0.45)
        .to('.designs__card-label', {
          autoAlpha: 1, y: 0,
          duration: 0.55,
          stagger: { each: 0.08, from: 'start' },
        }, 0.5)
        .to('.designs__card', {
          autoAlpha: 1, y: 0, scale: 1,
          duration: 0.85,
          stagger: { each: 0.1, from: 'start' },
          ease: 'power3.out',
        }, 0.5);
    }, host);
  }

  return {
    el: host,
    destroy() {
      prevBtn?.removeEventListener('click', onPrev);
      nextBtn?.removeEventListener('click', onNext);
      drag?.destroy();
      ctx?.revert();
      host.innerHTML = '';
    },
  };
}

/* ============================================================= */
/* Momentum Drag Scroll Binding                                  */
/* ============================================================= */
function bindDragScroll(track) {
  if (!track) return null;

  let isDown = false;
  let startX = 0;
  let startScroll = 0;
  let lastX = 0;
  let lastT = 0;
  let velocity = 0;
  let momentumRAF = null;
  let didDrag = false;

  function onPointerDown(e) {
    if (e.pointerType === 'touch') return;

    isDown = true;
    didDrag = false;
    track.classList.add('is-dragging');

    startX = e.pageX;
    lastX = e.pageX;
    lastT = performance.now();
    startScroll = track.scrollLeft;
    velocity = 0;

    cancelAnimationFrame(momentumRAF);
    track.setPointerCapture?.(e.pointerId);
  }

  function onPointerMove(e) {
    if (!isDown) return;
    e.preventDefault();

    const dx = e.pageX - startX;
    if (Math.abs(dx) > DRAG_THRESHOLD) didDrag = true;
    track.scrollLeft = startScroll - dx;

    /* Sample velocity with stale-frame guard */
    const now = performance.now();
    const dt = now - lastT;
    if (dt > 0 && dt < 100) {
      /* Blend previous velocity to avoid spikes from dropped frames */
      const instantVel = (lastX - e.pageX) / dt * 16;
      velocity = velocity * 0.3 + instantVel * 0.7;
    } else if (dt >= 100) {
      /* Pointer was idle too long — kill stale momentum */
      velocity = 0;
    }
    lastX = e.pageX;
    lastT = now;
  }

  function onPointerUp(e) {
    if (!isDown) return;
    isDown = false;
    track.classList.remove('is-dragging');
    track.releasePointerCapture?.(e.pointerId);

    if (didDrag) {
      const suppress = (ev) => { ev.preventDefault(); ev.stopPropagation(); };
      track.addEventListener('click', suppress, { capture: true, once: true });
    }

    /* Kick off momentum with capped initial velocity */
    cancelAnimationFrame(momentumRAF);
    const maxVel = 30;
    velocity = Math.max(-maxVel, Math.min(maxVel, velocity));

    function tick() {
      track.scrollLeft += velocity;
      velocity *= FRICTION;
      if (Math.abs(velocity) > MIN_VELOCITY) {
        momentumRAF = requestAnimationFrame(tick);
      }
    }
    if (Math.abs(velocity) > MIN_VELOCITY) momentumRAF = requestAnimationFrame(tick);
  }

  function onPointerCancel() {
    isDown = false;
    track.classList.remove('is-dragging');
  }

  track.addEventListener('pointerdown', onPointerDown);
  track.addEventListener('pointermove', onPointerMove, { passive: false });
  track.addEventListener('pointerup', onPointerUp);
  track.addEventListener('pointercancel', onPointerCancel);
  track.addEventListener('dragstart', (e) => e.preventDefault());

  return {
    el: track,
    destroy() {
      cancelAnimationFrame(momentumRAF);
      track.removeEventListener('pointerdown', onPointerDown);
      track.removeEventListener('pointermove', onPointerMove);
      track.removeEventListener('pointerup', onPointerUp);
      track.removeEventListener('pointercancel', onPointerCancel);
    },
  };
}
