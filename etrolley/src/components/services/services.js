/**
 * services.js
 * ---------------------------------------------------------------
 * Interaction & animation layer for the "Services We Provide" deck:
 *
 *   1. Click-and-drag horizontal scrolling with inertial momentum
 *      (rAF-driven). Touch swipe is handled natively by the browser.
 *   2. Active slide index updates live (1/4 indicator).
 *   3. GSAP entrance choreography (eyebrow → title → cards stagger)
 *      bound to a single ScrollTrigger.
 * ---------------------------------------------------------------
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { mount, qsa, qs } from '../../lib/dom.js';
import { servicesTemplate } from './services.html.js';

gsap.registerPlugin(ScrollTrigger);

const FRICTION = 0.92;          // higher = longer glide
const MIN_VELOCITY = 0.3;       // px / frame to keep gliding
const DRAG_THRESHOLD = 6;       // px of movement before we treat as drag

export function initServices() {
  const host = mount('[data-component="services"]', servicesTemplate());
  if (!host) return null;

  const track = qs('#services-track', host);
  const indexActive = qs('#services-index-active', host);
  const cards = qsa('.services__card', host);

  /* ---------------- Active-slide indicator ---------------- */
  function updateActiveIndex() {
    if (!track || !indexActive || cards.length === 0) return;

    const trackRect = track.getBoundingClientRect();
    const trackCenter = trackRect.left + trackRect.width / 2;

    let activeIndex = 0;
    let minDistance = Infinity;

    cards.forEach((card, idx) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const distance = Math.abs(cardCenter - trackCenter);

      if (distance < minDistance) {
        minDistance = distance;
        activeIndex = idx;
      }
    });

    indexActive.textContent = activeIndex + 1;
  }

  if (track) {
    track.addEventListener('scroll', updateActiveIndex, { passive: true });
  }

  /* ---------------- Click-and-drag with inertia ---------------- */
  const drag = bindDragScroll(track);

  /* ---------------- Entrance animations ---------------- */
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let ctx = null;

  if (!reduced) {
    ctx = gsap.context(() => {
      gsap.set('.services__watermark', { autoAlpha: 0, scale: 0.85 });
      gsap.set('.services__cart-back, .services__cart-front', { autoAlpha: 0, scale: 0.85, transformOrigin: 'center bottom' });
      gsap.set('.services__eyebrow', { autoAlpha: 0, x: -25 });
      gsap.set('.services__title', { autoAlpha: 0, y: 35 });
      gsap.set('.services__desc', { autoAlpha: 0, y: 25 });
      gsap.set('.services__index', { autoAlpha: 0, scale: 0.8 });
      gsap.set('.services__card', { autoAlpha: 0, y: 50 });

      gsap.timeline({
        scrollTrigger: {
          trigger: host,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })
        .to('.services__watermark', { autoAlpha: 0.15, scale: 1, duration: 1.2, ease: 'power3.out', stagger: 0.25 })
        .to('.services__cart-back, .services__cart-front', { autoAlpha: 1, scale: 1, duration: 1.2, ease: 'power3.out', stagger: 0.08 }, '-=1.0')
        .to('.services__eyebrow', { autoAlpha: 1, x: 0, duration: 0.8, ease: 'power3.out' }, '-=0.8')
        .to('.services__title', { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
        .to('.services__desc', { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
        .to('.services__index', { autoAlpha: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' }, '-=0.6')
        .to('.services__card', { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15 }, '-=0.5');
    }, host);
  }

  return {
    el: host,
    destroy() {
      if (track) {
        track.removeEventListener('scroll', updateActiveIndex);
      }
      drag?.destroy();
      ctx?.revert();
      host.innerHTML = '';
    },
  };
}

/* ============================================================= */
/*  Drag-to-scroll with inertial momentum                        */
/*  Pure JS, rAF-driven. Activates on pointerdown, glides after  */
/*  pointerup using a friction model (vel *= FRICTION).          */
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
    /* Don't hijack vertical/touch scroll; let the browser handle it */
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

    /* Capture so we keep getting events even if we leave the element */
    track.setPointerCapture?.(e.pointerId);
  }

  function onPointerMove(e) {
    if (!isDown) return;
    e.preventDefault();

    const dx = e.pageX - startX;
    if (Math.abs(dx) > DRAG_THRESHOLD) didDrag = true;

    track.scrollLeft = startScroll - dx;

    /* Sample instantaneous velocity */
    const now = performance.now();
    const dt = now - lastT;
    if (dt > 0) {
      velocity = (lastX - e.pageX) / dt * 16; /* px per ~frame */
    }
    lastX = e.pageX;
    lastT = now;
  }

  function onPointerUp(e) {
    if (!isDown) return;
    isDown = false;
    track.classList.remove('is-dragging');
    track.releasePointerCapture?.(e.pointerId);

    /* If we dragged, suppress the click that would normally fire */
    if (didDrag) {
      const suppress = (ev) => { ev.preventDefault(); ev.stopPropagation(); };
      track.addEventListener('click', suppress, { capture: true, once: true });
    }

    /* Kick off momentum */
    cancelAnimationFrame(momentumRAF);
    function step() {
      track.scrollLeft += velocity;
      velocity *= FRICTION;
      if (Math.abs(velocity) > MIN_VELOCITY) {
        momentumRAF = requestAnimationFrame(step);
      }
    }
    if (Math.abs(velocity) > MIN_VELOCITY) momentumRAF = requestAnimationFrame(step);
  }

  function onPointerCancel() {
    isDown = false;
    track.classList.remove('is-dragging');
  }

  track.addEventListener('pointerdown', onPointerDown);
  track.addEventListener('pointermove', onPointerMove);
  track.addEventListener('pointerup', onPointerUp);
  track.addEventListener('pointercancel', onPointerCancel);

  /* Block native image dragging which interferes with our drag */
  const onDragStart = (e) => e.preventDefault();
  track.addEventListener('dragstart', onDragStart);

  return {
    destroy() {
      cancelAnimationFrame(momentumRAF);
      track.removeEventListener('pointerdown', onPointerDown);
      track.removeEventListener('pointermove', onPointerMove);
      track.removeEventListener('pointerup', onPointerUp);
      track.removeEventListener('pointercancel', onPointerCancel);
      track.removeEventListener('dragstart', onDragStart);
    },
  };
}
