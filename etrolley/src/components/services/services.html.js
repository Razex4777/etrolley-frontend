/**
 * services.html.js
 * ---------------------------------------------------------------
 * Template for the 'Services We Provide' section.
 * Contains the slide grid, SVGs, and responsive structures.
 * ---------------------------------------------------------------
 */

import { t } from '../../lib/i18n.js';

export const servicesTemplate = () => /* html */ `
  <div class="services">
    <!-- Section background — extracted as a separate layer so the
         teal cart can sit BEHIND it (z-index -1) and get clipped by
         the section's top edge naturally. -->
    <div class="services__bg" aria-hidden="true"></div>

    <!-- Cart: teal basket layer (BEHIND the section background) -->
    <div class="services__cart-back" aria-hidden="true">${cartTealSVG()}</div>

    <!-- Cart: yellow handle + wheels (IN FRONT of everything) -->
    <div class="services__cart-front" aria-hidden="true">${cartYellowSVG()}</div>

    <div class="services__inner">
      <!-- Top header layout: Title block, description, pagination index -->
      <div class="services__header">
        <div class="services__header-left">
          <!-- Eyebrow with white line and overlapping circles -->
          <div class="services__eyebrow" aria-hidden="true">
            <span class="services__eyebrow-line"></span>
            <span class="services__eyebrow-circles">
              <span class="services__circle services__circle--solid"></span>
              <span class="services__circle services__circle--hollow"></span>
            </span>
            <span class="services__eyebrow-line"></span>
            <span class="services__eyebrow-text">${t('services.eyebrow')}</span>
          </div>
          <h2 class="services__title">${t('services.title')}</h2>
        </div>

        <div class="services__header-right">
          <p class="services__desc">${t('services.desc')}</p>
          <div class="services__index" id="services-index">
            <span class="services__index-active" id="services-index-active">1</span>
            <span class="services__index-divider">/</span>
            <span class="services__index-total">4</span>
          </div>
        </div>
      </div>

      <!-- Scrollable cards track (Figma: Frame 118) -->
      <div class="services__track-wrapper">
        <div class="services__track" id="services-track" role="region" aria-label="${t('services.title')}">
          <!-- Card 1: Marketing -->
          <div class="services__card" data-index="0">
            <div class="services__card-img">
              <img src="/images/services/services-marketing.png" alt="${t('services.card.marketing')}" loading="lazy" />
            </div>
            <div class="services__card-body">
              <span class="services__card-eyebrow">${t('services.label.service')} • ${t('services.label.marketing')}</span>
              <h3 class="services__card-title">${t('services.card.marketing')}</h3>
              <p class="services__card-text">${t('services.card.marketing.desc')}</p>
              ${learnMoreBtn(t('services.learnMore'))}
            </div>
          </div>

          <!-- Card 2: Photography -->
          <div class="services__card" data-index="1">
            <div class="services__card-img">
              <img src="/images/services/services-photography.png" alt="${t('services.card.photography')}" loading="lazy" />
            </div>
            <div class="services__card-body">
              <span class="services__card-eyebrow">${t('services.label.service')} • ${t('services.label.photography')}</span>
              <h3 class="services__card-title">${t('services.card.photography')}</h3>
              <p class="services__card-text">${t('services.card.photography.desc')}</p>
              ${learnMoreBtn(t('services.learnMore'))}
            </div>
          </div>

          <!-- Card 3: Support -->
          <div class="services__card" data-index="2">
            <div class="services__card-img">
              <img src="/images/services/services-support.png" alt="${t('services.card.support')}" loading="lazy" />
            </div>
            <div class="services__card-body">
              <span class="services__card-eyebrow">${t('services.label.service')} • ${t('services.label.support')}</span>
              <h3 class="services__card-title">${t('services.card.support')}</h3>
              <p class="services__card-text">${t('services.card.support.desc')}</p>
              ${learnMoreBtn(t('services.learnMore'))}
            </div>
          </div>

          <!-- Card 4: Social Media -->
          <div class="services__card" data-index="3">
            <div class="services__card-img">
              <img src="/images/services/services-social.png" alt="${t('services.card.social')}" loading="lazy" />
            </div>
            <div class="services__card-body">
              <span class="services__card-eyebrow">${t('services.label.service')} • ${t('services.label.social')}</span>
              <h3 class="services__card-title">${t('services.card.social')}</h3>
              <p class="services__card-text">${t('services.card.social.desc')}</p>
              ${learnMoreBtn(t('services.learnMore'))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

function cartTealSVG() {
  /* The teal basket layer — Figma export (Group 141 inside the
   * combined 262×215 frame). Sits at z-index -1 so the section's
   * sage background clips its bottom half. */
  /* The teal basket layer — Figma export (Group 141 inside the
   * combined 262×215 frame). Sits at z-index -1 so the section's
   * sage background clips its bottom half. */
  return /* html */ `
    <svg viewBox="0 0 262 215" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <path d="M100.429 67.2482H232.45C233.888 67.2482 234.967 68.5714 234.665 69.981L230.81 87.8593C230.58 88.8949 229.659 89.6428 228.594 89.6428H161.167C159.915 89.6428 158.908 90.6496 158.908 91.9009V109.405C158.908 110.657 159.915 111.663 161.167 111.663H222.869C224.307 111.663 225.386 112.987 225.084 114.396L221.243 132.275C221.013 133.31 220.092 134.058 219.028 134.058H173.525C172.273 134.058 171.266 135.065 171.266 136.316V153.821C171.266 155.072 172.273 156.079 173.525 156.079H236.823C237.888 156.079 238.808 155.331 239.039 154.295L243.397 134.044L248.217 111.635L252.964 89.5996L257.798 67.1906L261.941 47.9459C261.97 47.7877 261.999 47.6295 261.999 47.4713C261.999 46.22 260.992 45.2131 259.74 45.2131H100.444C99.1921 45.2131 98.1851 46.22 98.1851 47.4713V64.9756C98.1851 66.227 99.1921 67.2338 100.444 67.2338L100.429 67.2482Z" fill="#316C6B"/>
      <path d="M223.128 190.814C215.524 190.814 209.36 184.651 209.36 177.049C209.36 169.447 215.524 163.285 223.128 163.285C230.731 163.285 236.895 169.447 236.895 177.049C236.895 184.651 230.731 190.814 223.128 190.814Z" fill="#316C6B"/>
    </svg>
  `;
}

function arrowSVG() {
  /* Right-pointing arrow used inside the Learn More button.
   * Hidden until the button is hovered (CSS reveals it). */
  return /* html */ `
    <svg viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M1 7h16M11 1l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
}

/**
 * Lunchbox-style "Learn More" button — full-width centered pill.
 *
 *   IDLE  : black pill, single centered "Learn More"
 *   HOVER : yellow pill, the centered label fades out, and a
 *           SINGLE bold "Learn More" cycles through:
 *             · enters from the right
 *             · passes through center
 *             · exits to the left
 *             · iteration restart snaps it back off-right (invisible)
 *             · re-enters from the right
 *
 * Only ONE label is ever visible. Pure CSS — one animated element.
 */
function learnMoreBtn(label) {
  return /* html */ `
    <a href="#contact" class="services__card-btn">
      <span class="services__card-btn-static">${label}</span>
      <span class="services__card-btn-marquee" aria-hidden="true">
        <span class="services__card-btn-item">${label}</span>
      </span>
      <span class="visually-hidden">${label}</span>
    </a>
  `;
}

function cartYellowSVG() {
  /* The yellow handle + chassis + wheels (Group 140 in Figma).
   * Same coordinate frame as the teal layer (262×215), drawn on
   * top so they overlap exactly like the merged Figma group. */
  return /* html */ `
    <svg viewBox="0 0 262 215" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <path d="M0 2.28693V19.7913C0 21.0426 1.007 22.0494 2.25859 22.0494H42.2805C43.2875 22.0494 44.1794 22.7254 44.4528 23.6891L82.1154 156.259L88.402 178.337C88.6754 179.315 89.5673 179.977 90.5743 179.977H156.462C157.93 179.977 159.009 178.61 158.663 177.186L143.429 113.411C143.184 112.376 142.249 111.657 141.199 111.671L118.9 112.002C117.419 112.031 116.354 113.455 116.757 114.878L127.69 153.368C128.107 154.806 127.014 156.244 125.518 156.244H109.866C108.859 156.244 107.967 155.568 107.694 154.605L69.3694 19.6474L64.2479 1.63968C63.9746 0.661626 63.0827 0 62.0756 0H2.27299C1.02141 0 0.0143738 1.00682 0.0143738 2.25816L0 2.28693Z" fill="#F5C99A"/>
      <path d="M146.923 214.669C139.32 214.669 133.156 208.506 133.156 200.904C133.156 193.302 139.32 187.139 146.923 187.139C154.527 187.139 160.691 193.302 160.691 200.904C160.691 208.506 154.527 214.669 146.923 214.669Z" fill="#F5C99A"/>
      <path d="M109.462 214.669C101.858 214.669 95.6942 208.506 95.6942 200.904C95.6942 193.302 101.858 187.139 109.462 187.139C117.065 187.139 123.229 193.302 123.229 200.904C123.229 208.506 117.065 214.669 109.462 214.669Z" fill="#F5C99A"/>
    </svg>
  `;
}
