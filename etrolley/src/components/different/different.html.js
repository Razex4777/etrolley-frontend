/**
 * different.html.js — "What Makes Us Different?"
 * ---------------------------------------------------------------
 * Scroll-pinned stacking deck of 3 premium differentiator cards.
 * ---------------------------------------------------------------
 */

import { t } from '../../lib/i18n.js';

const SLIDES = [
  { id: 1, theme: 'gray',  image: '/images/different/different-slide-1.png' },
  { id: 2, theme: 'black', image: '/images/different/different-slide-2.png' },
  { id: 3, theme: 'white', image: '/images/different/different-slide-3.png' },
];

export const differentTemplate = () => {
  const slidesHTML = SLIDES.map((s, i) => slideHTML(s, i)).join('');

  return /* html */ `
    <div class="different">
      <div class="different__inner">
        <!-- Header -->
        <div class="different__header">
          <div class="different__eyebrow">
            <span class="different__slider" aria-hidden="true">
              <span class="different__slider-track"></span>
              <span class="different__slider-knob"></span>
            </span>
            <span class="different__eyebrow-text">${t('different.eyebrow')}</span>
          </div>
          <h2 class="different__title">${t('different.title')}</h2>
        </div>

        <!-- Stacking deck (pinned + scroll-driven) -->
        <div class="different__deck" data-deck>
          <div class="different__viewport">
            <div class="different__track" data-track>
              ${slidesHTML}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};

function slideHTML(slide, idx) {
  const titleLines = t(`different.slide.${slide.id}.title`)
    .split('\n')
    .map((l) => `<span class="line"><span class="line-inner">${l}</span></span>`)
    .join('');

  const num = String(idx + 1).padStart(2, '0');

  return /* html */ `
    <article class="different__slide different__slide--${slide.theme}" data-slide="${idx}">
      <div class="different__photo">
        <img src="${slide.image}" alt="" loading="lazy" decoding="async" />
      </div>

      <div class="different__panel">
        <div class="different__panel-decor" aria-hidden="true"></div>
        <h3 class="different__slide-title">${titleLines}</h3>
        <div class="different__slide-foot">
          <span class="different__num" aria-hidden="true">${num}</span>
          <p class="different__slide-desc">${t(`different.slide.${slide.id}.desc`)}</p>
        </div>
      </div>
    </article>
  `;
}
