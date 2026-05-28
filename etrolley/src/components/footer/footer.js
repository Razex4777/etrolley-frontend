/**
 * footer.js
 * ---------------------------------------------------------------
 * Animation & lifecycle controller for the E-Trolley footer.
 * Sets up mounting and GSAP ScrollTrigger timeline entrance reveals.
 * ---------------------------------------------------------------
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { mount, qs, qsa } from '../../lib/dom.js';
import { footerTemplate } from './footer.html.js';

gsap.registerPlugin(ScrollTrigger);

export function initFooter() {
  const host = mount('[data-component="footer"]', footerTemplate());
  if (!host) return null;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let ctx = null;

  if (!reduced) {
    ctx = gsap.context(() => {
      // Set initial states
      gsap.set('.footer__col', { autoAlpha: 0, y: 40 });
      gsap.set('.footer__logo-box', { scale: 0.8, rotate: -5 });
      gsap.set('.footer__social-btn', { scale: 0, autoAlpha: 0 });
      gsap.set('.footer__cta-btn', { scale: 0.94, y: 30, autoAlpha: 0 });
      gsap.set('.footer__bottom', { autoAlpha: 0, y: 20 });

      // Symmetrical scroll trigger timeline
      gsap.timeline({
        scrollTrigger: {
          trigger: host,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      })
        // Staggered reveal of columns
        .to('.footer__col', {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.12,
        })
        // Staggered bounce pop for social icons
        .to('.footer__social-btn', {
          scale: 1,
          autoAlpha: 1,
          duration: 0.6,
          ease: 'back.out(1.8)',
          stagger: 0.08,
        }, '-=0.5')
        // Logo bounce reveal
        .to('.footer__logo-box', {
          scale: 1,
          rotate: 0,
          duration: 0.8,
          ease: 'back.out(1.5)',
        }, '-=0.7')
        // Gigantic wide CTA button elastic pop
        .to('.footer__cta-btn', {
          scale: 1,
          y: 0,
          autoAlpha: 1,
          duration: 1.0,
          ease: 'back.out(1.2)',
        }, '-=0.6')
        // Bottom copyright bar fade up
        .to('.footer__bottom', {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
        }, '-=0.5');

    }, host);
  } else {
    // Graceful fallback for prefers-reduced-motion
    gsap.set('.footer__col, .footer__logo-box, .footer__social-btn, .footer__cta-btn, .footer__bottom', {
      autoAlpha: 1,
      scale: 1,
      y: 0,
      rotate: 0
    });
  }

  return {
    el: host,
    destroy() {
      ctx?.revert();
      host.innerHTML = '';
    },
  };
}
