/**
 * hero.html.js
 * ---------------------------------------------------------------
 * Hero section template — i18n-driven (no hardcoded copy).
 * Layout mirrors the Figma frame (1920×1007).
 * The headline string contains \n line-breaks; we split it into
 * masked-line spans so GSAP can stagger-reveal them.
 * ---------------------------------------------------------------
 */

import { t } from '../../lib/i18n.js';

export const heroTemplate = () => {
  const headlineLines = t('hero.headline')
    .split('\n')
    .map((line) => `<span class="line">${line}</span>`)
    .join('');

  return /* html */ `
    <div class="hero">
      <!-- Decorative background gradient blob (CSS only) -->
      <div class="hero__bg" aria-hidden="true"></div>

      <!-- Brand 3D watermark behind headline (sourced from Figma) -->
      <img
        class="hero__watermark"
        src="/images/etrolley-watermark.png"
        alt=""
        aria-hidden="true"
        width="1319"
        height="348"
      />

      <div class="hero__inner">
        <!-- QR + footnote -->
        <aside class="hero__aside">
          <div class="hero__qr">
            <img
              src="/images/qr-theqa.png"
              alt="${t('hero.aria.qr')}"
              width="305"
              height="388"
              loading="eager"
            />
          </div>
          <p class="hero__validate">
            <span class="hero__validate-icon" aria-hidden="true">
              ${validateSVG()}
            </span>
            <span>${t('hero.validate')}</span>
          </p>
        </aside>

        <!-- Center: copy + CTA + image -->
        <div class="hero__content">
          <div class="hero__dream-pill" aria-hidden="true">
            <span>DreamWD</span>
          </div>

          <h1 class="hero__headline" id="hero-headline">
            ${headlineLines}
          </h1>

          <div class="hero__row">
            <div class="hero__cta-wrap">
              <span class="hero__cta-eyebrow">${t('hero.linkLabel')}</span>
              <a class="hero__cta" href="#create-store">
                <span>${t('hero.cta')}</span>
              </a>
              <div class="hero__nav" role="group" aria-label="Slide navigation">
                <button class="hero__nav-btn" type="button" aria-label="${t('hero.aria.prev')}">
                  ${arrowSVG('prev')}
                </button>
                <button class="hero__nav-btn" type="button" aria-label="${t('hero.aria.next')}">
                  ${arrowSVG('next')}
                </button>
              </div>
            </div>

            <div class="hero__image">
              <img
                src="/images/hero-laptop-bags.png"
                alt="${t('hero.aria.heroImg')}"
                width="492"
                height="401"
                loading="eager"
                fetchpriority="high"
              />
            </div>
          </div>
        </div>

        <!-- Right rail: Follow + socials -->
        <aside class="hero__rail">
          <span class="hero__rail-label">${t('hero.follow')}</span>
          <ul class="hero__socials" role="list">
            <li><a href="#" aria-label="Facebook"  class="hero__social"><span class="hero__social-tag">Facebook</span>${social3D('fb')}</a></li>
            <li><a href="#" aria-label="Twitter"   class="hero__social"><span class="hero__social-tag">Twitter</span>${social3D('x')}</a></li>
            <li><a href="#" aria-label="LinkedIn"  class="hero__social"><span class="hero__social-tag">LinkedIn</span>${social3D('linkedin')}</a></li>
            <li><a href="#" aria-label="Instagram" class="hero__social"><span class="hero__social-tag">Instagram</span>${social3D('instagram')}</a></li>
          </ul>
        </aside>
      </div>

      <!-- Floating side CTA -->
      <a class="hero__side-cta" href="#contact" aria-label="${t('hero.sideCta')}">
        <span>${t('hero.sideCta')}</span>
      </a>
    </div>
  `;
};

function arrowSVG(dir) {
  return dir === 'prev'
    ? /* html */ `<svg width="16" height="14" viewBox="0 0 16 14" fill="none" aria-hidden="true"><path d="M14 7H2M2 7l5-5M2 7l5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    : /* html */ `<svg width="16" height="14" viewBox="0 0 16 14" fill="none" aria-hidden="true"><path d="M2 7h12M14 7l-5-5M14 7l-5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}

function validateSVG() {
  return /* html */ `
    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" aria-hidden="true">
      <circle cx="14.5" cy="14.5" r="13" stroke="#316C6B" stroke-width="2" stroke-dasharray="1.2 2.6" stroke-linecap="round" fill="none"/>
      <circle cx="14.5" cy="14.5" r="9" stroke="#316C6B" stroke-width="1.4" fill="none"/>
      <path d="M10.2 14.7 L13.1 17.6 L18.9 11.6" stroke="#316C6B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    </svg>
  `;
}

function social3D(type) {
  const gradientIds = {
    fb: 'fb-bg-' + Math.random().toString(36).substr(2, 4),
    x: 'x-bg-' + Math.random().toString(36).substr(2, 4),
    linkedin: 'li-bg-' + Math.random().toString(36).substr(2, 4),
    instagram: 'ig-bg-' + Math.random().toString(36).substr(2, 4)
  };

  const gradients = {
    fb: /* html */ `
      <radialGradient id="${gradientIds.fb}" cx="50%" cy="40%" r="50%" fx="50%" fy="30%">
        <stop offset="0%" stop-color="#3A90F8"/>
        <stop offset="70%" stop-color="#1460D4"/>
        <stop offset="100%" stop-color="#08388C"/>
      </radialGradient>`,
    x: /* html */ `
      <radialGradient id="${gradientIds.x}" cx="50%" cy="40%" r="50%" fx="50%" fy="30%">
        <stop offset="0%" stop-color="#4A4A4D"/>
        <stop offset="70%" stop-color="#18181A"/>
        <stop offset="100%" stop-color="#000000"/>
      </radialGradient>`,
    linkedin: /* html */ `
      <radialGradient id="${gradientIds.linkedin}" cx="50%" cy="40%" r="50%" fx="50%" fy="30%">
        <stop offset="0%" stop-color="#3598F5"/>
        <stop offset="70%" stop-color="#0D64BA"/>
        <stop offset="100%" stop-color="#063870"/>
      </radialGradient>`,
    instagram: /* html */ `
      <radialGradient id="${gradientIds.instagram}" cx="35%" cy="30%" r="70%" fx="30%" fy="25%">
        <stop offset="0%" stop-color="#FFDD73"/>
        <stop offset="25%" stop-color="#F25B5C"/>
        <stop offset="60%" stop-color="#D12C79"/>
        <stop offset="100%" stop-color="#426BEB"/>
      </radialGradient>`
  };

  const logoPaths = {
    fb: `<path d="M30 13.5h-4.5c-2.5 0-4.5 2-4.5 4.5V21.5h-3v4h3v10h4v-10h3.5l0.5-4h-4v-3.5c0-0.8 0.7-1.5 1.5-1.5H30v-4z" fill="#FFFFFF" />`,
    x: `<path d="M30.25 14h3.2l-6.8 7.8 8 10.6H28.15l-5.3-7-5.9 7H13.75l7.2-8.3-7.6-10.1h6.5l4.5 6 5.9-6zm-1.1 16.5h1.7L20.55 15.7h-1.7l10.2 14.8z" fill="#FFFFFF" />`,
    linkedin: `<path d="M16 22h3v12h-3V22zm1.5-5.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM21 22h3v1.8c.8-1.2 2-2 4-2 3.5 0 4.5 2.2 4.5 5.2V34h-3v-8.5c0-2-0.8-3-2.5-3-1.8 0-2.5 1.2-2.5 3V34h-3V22z" fill="#FFFFFF" />`,
    instagram: `
      <rect x="14" y="14" width="20" height="20" rx="5.5" stroke="#FFFFFF" stroke-width="2" fill="none" />
      <circle cx="24" cy="24" r="4.5" stroke="#FFFFFF" stroke-width="2" fill="none" />
      <circle cx="29.5" cy="18.5" r="1.2" fill="#FFFFFF" />
    `
  };

  const bgGradient = gradients[type];
  const logo = logoPaths[type];
  const bgId = gradientIds[type];

  return /* html */ `
    <svg class="social-3d" width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block; width: 100%; height: 100%;">
      <defs>
        ${bgGradient}
        <linearGradient id="gloss-${bgId}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.0"/>
        </linearGradient>
        <linearGradient id="rim-${bgId}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#000000" stop-opacity="0.5"/>
        </linearGradient>
        <filter id="shadow-${bgId}" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2.5" stdDeviation="1.5" flood-color="#000000" flood-opacity="0.35"/>
        </filter>
      </defs>
      
      <!-- Outer Rim (Glass effect border) -->
      <circle cx="24" cy="24" r="22" stroke="url(#rim-${bgId})" stroke-width="0.8" />
      
      <!-- Bubble Body -->
      <circle cx="24" cy="24" r="21" fill="url(#${bgId})" filter="url(#shadow-${bgId})" />
      
      <!-- Internal glow ring -->
      <circle cx="24" cy="24" r="20.5" stroke="#FFFFFF" stroke-opacity="0.22" stroke-width="0.6" />

      <!-- Center Logo -->
      ${logo}

      <!-- Top Gloss Overlay (Sheen reflection) -->
      <ellipse cx="24" cy="14" rx="14" ry="7.5" fill="url(#gloss-${bgId})" />
    </svg>
  `;
}
