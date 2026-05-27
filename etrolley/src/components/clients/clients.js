/**
 * clients.js — "Our Renowned Clients"
 * ---------------------------------------------------------------
 *   1. Click-and-drag horizontal scrolling with inertial momentum
 *      (rAF-driven, mirrors the services drag implementation).
 *   2. Prev/Next arrow buttons scroll one card-width at a time.
 *   3. GSAP entrance choreography: eyebrow slider → title → desc →
 *      arrows → card stagger.
 *
 * All animations live inside a gsap.context bound to the host so
 * destroy() cleans everything up — no orphan ScrollTriggers.
 * ---------------------------------------------------------------
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { mount, qs, qsa } from '../../lib/dom.js';
import { isRTL } from '../../lib/i18n.js';
import { clientsTemplate } from './clients.html.js';

gsap.registerPlugin(ScrollTrigger);

const FRICTION = 0.92;
const MIN_VELOCITY = 0.3;
const DRAG_THRESHOLD = 6;

export function initClients() {
  const host = mount('[data-component="clients"]', clientsTemplate());
  if (!host) return null;

  const track = qs('#clients-track', host);
  const cards = qsa('.clients__card', host);
  const prevBtn = qs('.clients__arrow[data-dir="prev"]', host);
  const nextBtn = qs('.clients__arrow[data-dir="next"]', host);

  /* ---------------- Arrow controls ---------------- */
  const rtl = isRTL();
  const dir = rtl ? -1 : 1;

  function step(amount) {
    if (!track) return;
    track.scrollBy({ left: amount * dir, behavior: 'smooth' });
  }
  function getStepDistance() {
    if (cards.length === 0) return 320;
    const cardW = cards[0].getBoundingClientRect().width;
    const gap   = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 24;
    return cardW + gap;
  }

  const onPrev = () => step(-getStepDistance());
  const onNext = () => step(+getStepDistance());

  prevBtn?.addEventListener('click', onPrev);
  nextBtn?.addEventListener('click', onNext);

  /* ---------------- Drag-to-scroll with inertia ---------------- */
  const drag = bindDragScroll(track);

  /* ---------------- Entrance animations ---------------- */
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let ctx = null;

  if (!reduced) {
    ctx = gsap.context(() => {
      /* -------- Initial hidden states -------- */
      gsap.set('.clients__eyebrow',        { autoAlpha: 0, x: -24 });
      gsap.set('.clients__slider-knob',    { scale: 0, transformOrigin: 'center center' });
      gsap.set('.clients__circle--solid',   { scale: 0, transformOrigin: 'center center' });
      gsap.set('.clients__circle--hollow',  { scale: 0, transformOrigin: 'center center' });
      gsap.set('.clients__title',          { autoAlpha: 0, y: 36, clipPath: 'inset(0 0 100% 0)' });
      gsap.set('.clients__desc',           { autoAlpha: 0, y: 22 });
      gsap.set('.clients__arrows',         { autoAlpha: 0, scale: 0.85 });
      gsap.set('.clients__card',           { autoAlpha: 0, y: 50, scale: 0.94 });
      gsap.set('.partners',                { autoAlpha: 0, y: 30 });
      gsap.set('.partners__title',         { autoAlpha: 0, y: 20 });
      gsap.set('.partners__logo-item',     { autoAlpha: 0, y: 24, scale: 0.85 });

      /* -------- Main section entrance -------- */
      gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: host,
          start: 'top 82%',
          toggleActions: 'play none none reverse',
        },
      })
        .to('.clients__eyebrow',       { autoAlpha: 1, x: 0, duration: 0.7 }, 0)
        .to('.clients__slider-knob',   { scale: 1, duration: 0.7, ease: 'back.out(1.8)' }, 0.1)
        .to('.clients__circle--solid',  { scale: 1, duration: 0.6, ease: 'elastic.out(1, 0.6)' }, 0.15)
        .to('.clients__circle--hollow', { scale: 1, duration: 0.6, ease: 'elastic.out(1, 0.6)' }, 0.22)
        .to('.clients__title', {
          autoAlpha: 1, y: 0,
          clipPath: 'inset(0 0 0% 0)',
          duration: 0.9, ease: 'expo.out',
        }, 0.25)
        .to('.clients__desc',          { autoAlpha: 1, y: 0, duration: 0.7 }, 0.4)
        .to('.clients__arrows',        { autoAlpha: 1, scale: 1, duration: 0.6, ease: 'back.out(1.6)' }, 0.5)
        .to('.clients__card', {
          autoAlpha: 1, y: 0, scale: 1,
          duration: 0.8,
          stagger: { each: 0.09, from: 'start' },
          ease: 'power3.out',
        }, 0.55);

      /* -------- Partners banner entrance (own trigger) -------- */
      const partnersEl = host.querySelector('.partners');
      if (partnersEl) {
        gsap.timeline({
          defaults: { ease: 'power3.out' },
          scrollTrigger: {
            trigger: partnersEl,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        })
          .to('.partners',         { autoAlpha: 1, y: 0, duration: 0.7 }, 0)
          .to('.partners__title',  { autoAlpha: 1, y: 0, duration: 0.7, ease: 'expo.out' }, 0.15)
          .to('.partners__logo-item', {
            autoAlpha: 1, y: 0, scale: 1,
            duration: 0.65,
            stagger: { each: 0.1, from: 'start' },
            ease: 'back.out(1.4)',
          }, 0.25);
      }
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
/*  Drag-to-scroll with inertial momentum                        */
/*  Same friction model used in the services row — keeps the     */
/*  drag feel consistent across the landing page.                */
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
    destroy() {
      cancelAnimationFrame(momentumRAF);
      track.removeEventListener('pointerdown', onPointerDown);
      track.removeEventListener('pointermove', onPointerMove);
      track.removeEventListener('pointerup', onPointerUp);
      track.removeEventListener('pointercancel', onPointerCancel);
    },
  };
}
