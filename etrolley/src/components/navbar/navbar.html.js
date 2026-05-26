/**
 * navbar.html.js
 * ---------------------------------------------------------------
 * Template for the top navigation bar + the mobile menu shell.
 * Markup mirrors the Figma layout (1920×122 design frame).
 * All user-visible strings come from i18n — no hardcoded English.
 * Inline SVGs avoid extra network requests and allow CSS theming.
 * ---------------------------------------------------------------
 */

import { t } from '../../lib/i18n.js';

export const navbarTemplate = () => /* html */ `
  <nav class="nav" aria-label="${t('nav.aria.primary')}">
    <div class="nav__inner">
      <!-- Logo -->
      <a class="nav__logo" href="/" aria-label="E-Trolley">
        <img
          src="/images/logo-etrolley-28bffb.png"
          alt="E-Trolley"
          width="196"
          height="83"
          loading="eager"
          fetchpriority="high"
        />
      </a>

      <!-- Primary links -->
      <ul class="nav__links" role="list">
        <li class="nav__item"><a href="#home" class="nav__link is-active">${t('nav.home')}</a></li>
        <li class="nav__item"><a href="#services" class="nav__link">${t('nav.services')}</a></li>
        <li class="nav__item"><a href="#prices" class="nav__link">${t('nav.prices')}</a></li>
        <li class="nav__item nav__item--menu">
          <button class="nav__link nav__link--menu" type="button" aria-haspopup="menu" aria-expanded="false" data-menu="about">
            <span>${t('nav.about')}</span>
            ${chevronSVG()}
          </button>
          <ul class="nav__dropdown" role="menu" aria-label="${t('nav.aria.about')}">
            <li role="none"><a role="menuitem" class="nav__dropdown-item" href="#our-story">${t('nav.about.story')}</a></li>
            <li role="none"><a role="menuitem" class="nav__dropdown-item" href="#team">${t('nav.about.team')}</a></li>
            <li role="none"><a role="menuitem" class="nav__dropdown-item" href="#partners">${t('nav.about.partners')}</a></li>
          </ul>
        </li>
        <li class="nav__item"><a href="#contact" class="nav__link">${t('nav.contact')}</a></li>
        <li class="nav__item nav__item--menu">
          <button class="nav__link nav__link--menu nav__link--lang" type="button" aria-haspopup="menu" aria-expanded="false" data-menu="lang">
            <span data-current-lang>${t('nav.lang')}</span>
            ${chevronSVG()}
          </button>
          <ul class="nav__dropdown" role="menu" aria-label="${t('nav.aria.lang')}">
            <li role="none">
              <button role="menuitemradio" type="button" data-lang="en" class="nav__dropdown-item">
                <span class="nav__dropdown-flag" aria-hidden="true">🇬🇧</span>
                <span>${t('lang.en')}</span>
              </button>
            </li>
            <li role="none">
              <button role="menuitemradio" type="button" data-lang="ar" class="nav__dropdown-item">
                <span class="nav__dropdown-flag" aria-hidden="true">🇶🇦</span>
                <span>${t('lang.ar')}</span>
              </button>
            </li>
          </ul>
        </li>
      </ul>

      <!-- Phone block -->
      <div class="nav__phone">
        <span class="nav__phone-icon" aria-hidden="true">
          ${phoneIconSVG()}
        </span>
        <div class="nav__phone-text">
          <span class="nav__phone-label">${t('nav.callus')}</span>
          <a class="nav__phone-num" href="tel:+97450988700"><bdi>(+974)50988700</bdi></a>
        </div>
      </div>

      <!-- Right cluster: CTA + hamburger pinned together -->
      <div class="nav__right">
        <a class="nav__cta" href="#create-store">
          <span>${t('nav.cta')}</span>
        </a>

        <button class="nav__burger" type="button" aria-label="${t('nav.aria.menuOpen')}" aria-expanded="false" aria-controls="mobile-menu">
          <span class="nav__burger-line nav__burger-line--top"></span>
          <span class="nav__burger-line nav__burger-line--mid">
            <span class="nav__burger-dot" aria-hidden="true"></span>
          </span>
          <span class="nav__burger-line nav__burger-line--bot"></span>
        </button>
      </div>
    </div>

    <span class="nav__divider" aria-hidden="true"></span>
  </nav>

  <!-- =======================================================
       Mobile menu — full-screen overlay with staggered reveals.
       ======================================================= -->
  <div class="mobile-menu" id="mobile-menu" aria-hidden="true">
    <div class="mobile-menu__backdrop" data-menu-close></div>

    <aside class="mobile-menu__panel" role="dialog" aria-modal="true" aria-label="${t('nav.aria.dialog')}">
      <div class="mobile-menu__top">
        <a class="mobile-menu__brand" href="/" data-menu-close>
          <img src="/images/logo-etrolley-28bffb.png" alt="E-Trolley" />
        </a>
        <button class="mobile-menu__close" type="button" aria-label="${t('nav.aria.menuClose')}" data-menu-close>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>

      <nav class="mobile-menu__nav" aria-label="${t('nav.aria.mobile')}">
        <ul class="mobile-menu__list" role="list">
          <li class="mobile-menu__item"><a href="#home"     data-menu-close><span>${t('nav.home')}</span><i><bdi>01</bdi></i></a></li>
          <li class="mobile-menu__item"><a href="#services" data-menu-close><span>${t('nav.services')}</span><i><bdi>02</bdi></i></a></li>
          <li class="mobile-menu__item"><a href="#prices"   data-menu-close><span>${t('nav.prices')}</span><i><bdi>03</bdi></i></a></li>
          <li class="mobile-menu__item"><a href="#about"    data-menu-close><span>${t('nav.about')}</span><i><bdi>04</bdi></i></a></li>
          <li class="mobile-menu__item"><a href="#contact"  data-menu-close><span>${t('nav.contact')}</span><i><bdi>05</bdi></i></a></li>
        </ul>
      </nav>

      <div class="mobile-menu__foot">
        <div class="mobile-menu__lang" role="group" aria-label="${t('nav.aria.lang')}">
          <button class="mobile-menu__lang-btn" type="button" data-lang="en">EN</button>
          <span aria-hidden="true">/</span>
          <button class="mobile-menu__lang-btn" type="button" data-lang="ar">العربية</button>
        </div>

        <a class="mobile-menu__phone" href="tel:+97450988700" data-menu-close>
          <span class="mobile-menu__phone-label">${t('nav.callus')}</span>
          <span class="mobile-menu__phone-num"><bdi>(+974) 50988700</bdi></span>
        </a>

        <ul class="mobile-menu__socials" role="list">
          <li><a href="#" aria-label="Facebook">${social3D('fb')}</a></li>
          <li><a href="#" aria-label="Twitter">${social3D('x')}</a></li>
          <li><a href="#" aria-label="LinkedIn">${social3D('linkedin')}</a></li>
          <li><a href="#" aria-label="Instagram">${social3D('instagram')}</a></li>
        </ul>
      </div>
    </aside>
  </div>
`;

function chevronSVG() {
  return /* html */ `
    <svg class="nav__chevron" width="9" height="6" viewBox="0 0 9 6" fill="none" aria-hidden="true">
      <path d="M1 1l3.5 3.5L8 1" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
}

function phoneIconSVG() {
  return /* html */ `
    <svg width="55" height="55" viewBox="0 0 55 55" fill="none" aria-hidden="true">
      <circle cx="27.5" cy="27.5" r="27.5" fill="#F5C99A"/>
      <path d="M37.5 32.7v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.4 19.4 0 0 1-6-6 19.7 19.7 0 0 1-3-8.6 2 2 0 0 1 2-2.2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.2L23 26.2a16 16 0 0 0 6 6l1.9-1.9a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.5.6a2 2 0 0 1 1.7 2v.3z"
            stroke="#316C6B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
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
