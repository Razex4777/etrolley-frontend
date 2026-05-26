/**
 * steps.html.js — "Our Creative Steps"
 * ---------------------------------------------------------------
 * Bold, psstudios-flavored, light-themed.
 * Each card holds a single sentence — the WHOLE description IS the
 * step. No invented sub-titles. The big outlined number is the
 * visual anchor.
 *
 *   ┌─Build a store ────────────────────────────────────────────┐
 *   │                                                            │
 *   │   Our                                                      │
 *   │   Creative                                                 │
 *   │   Steps                                                    │
 *   │                                                            │
 *   │  ┌──[01]──┐  ┌──[02]──┐  ┌────[03]────┐  ┌──[04]──┐       │
 *   │  │ icon   │  │ icon   │  │   icon     │  │ icon   │       │
 *   │  │ "Select│  │ "Pick  │  │  "Enter    │  │ "Now…" │       │
 *   │  │  the   │  │ a      │  │   your     │  │        │       │
 *   │  │ pkg…"  │  │ design"│  │   details" │  │        │       │
 *   │  └────────┘  └────────┘  └────────────┘  └────────┘       │
 *   │                          ◯ LET'S START                     │
 *   │                                                            │
 *   │                                       [paragraph]          │
 *   └────────────────────────────────────────────────────────────┘
 * ---------------------------------------------------------------
 */

import { t } from '../../lib/i18n.js';

export const stepsTemplate = () => {
  const titleLines = t('steps.title')
    .split('\n')
    .map((l) => `<span class="line"><span class="line-inner">${l}</span></span>`)
    .join('');

  const ctaLines = t('steps.cta')
    .split('\n')
    .map((l) => `<span>${l}</span>`)
    .join('');

  return /* html */ `
    <div class="steps">
      <div class="steps__bg" aria-hidden="true"></div>

      <div class="steps__inner">
        <!-- Eyebrow with slider knob -->
        <div class="steps__eyebrow">
          <span class="steps__slider" aria-hidden="true">
            <span class="steps__slider-track"></span>
            <span class="steps__slider-knob"></span>
          </span>
          <span class="steps__eyebrow-text">${t('steps.eyebrow')}</span>
        </div>

        <!-- Headline -->
        <h2 class="steps__title">${titleLines}</h2>

        <!-- Card grid -->
        <div class="steps__grid">
          ${cardHTML(1, 'low')}
          ${cardHTML(2, 'low')}
          ${cardHTML(3, 'high')}
          ${cardHTML(4, 'low')}

          <button class="steps__cta" type="button" aria-label="${t('steps.cta').replace('\n', ' ')}">
            <span class="steps__cta-bg" aria-hidden="true"></span>
            <span class="steps__cta-text">${ctaLines}</span>
          </button>
        </div>

        <!-- Footer area containing the promo illustration and the closing paragraph -->
        <div class="steps__footer">
          <div class="steps__promo" aria-hidden="true">
            <div class="steps__promo-green">
              <svg width="200" height="128" viewBox="0 0 200 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g transform="rotate(-14 100 64)">
                  <rect x="15" y="30" width="150" height="24" rx="12" fill="#316C6B"/>
                  <rect x="35" y="60" width="145" height="24" rx="12" fill="#316C6B"/>
                  <rect x="20" y="90" width="130" height="24" rx="12" fill="#316C6B"/>
                </g>
              </svg>
            </div>
            <div class="steps__promo-message">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 22C40 31.3888 31.7157 39 21.5 39C18.6653 39 15.9866 38.3976 13.6272 37.3195C11.5878 38.8028 8.87113 40.1691 5.92683 40.8504C5.3951 40.9734 4.90807 40.4851 5.03456 39.9575C6.01258 35.8778 6.77258 31.8488 5.75338 29.8395C3.39958 25.197 4.29819 19.1678 9.5 14.5C14.5097 9.99347 21.5 9 21.5 9C31.7157 9 40 12.6112 40 22Z" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="#FFFFFF"/>
                <circle cx="16" cy="20" r="2.5" fill="#000000"/>
                <circle cx="27" cy="20" r="2.5" fill="#000000"/>
                <path d="M15 27C17 30.5 24.5 30.5 26.5 27" stroke="#000000" stroke-width="3" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="steps__promo-pill">
              <span class="steps__promo-text">${t('steps.promo.text')}</span>
            </div>
          </div>
          <p class="steps__paragraph">${t('steps.paragraph')}</p>
        </div>
      </div>
    </div>
  `;
};

function cardHTML(idx, position /* 'low' | 'high' */) {
  return /* html */ `
    <article class="steps__card steps__card--${position}" data-step="${idx}">
      <span class="steps__num" aria-hidden="true">${pad(idx)}</span>

      <p class="steps__copy">${t(`steps.card.${idx}`)}</p>

      <span class="steps__corner" aria-hidden="true"></span>
    </article>
  `;
}

const pad = (n) => String(n).padStart(2, '0');
