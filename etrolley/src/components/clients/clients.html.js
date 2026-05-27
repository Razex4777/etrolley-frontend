/**
 * clients.html.js — "Our Renowned Clients" & "Our Partners"
 * ---------------------------------------------------------------
 * Horizontal carousel of brand-logo tiles. Header on top with the
 * eyebrow slider + title on the left, and a paragraph + arrow
 * controls on the right.
 *
 * Appended bottom banner: "Our Partners" block displaying premium
 * regional payment provider SVGs (My Fatoorah, Pass, Sadad, Jeyaad, EdfaPay).
 * ---------------------------------------------------------------
 */

import { t, getLang, isRTL } from '../../lib/i18n.js';

/* Real WebP images uploaded by the user are referenced here. */
const BRANDS = [
  { id: 'gazali',    name: getLang() === 'ar' ? 'غزالي للعود والعطور' : 'Gazali for Oudh & Perfumes',  image: 'gazali.webp' },
  { id: 'urban',     name: 'URBAN',         image: 'urban.webp' },
  { id: 'yarnista',  name: 'YARNISTA',      image: 'yarnista.webp' },
  { id: 'tokyo',     name: 'TOKYO',         image: 'tokyo.webp' },
  { id: 'fcoll',     name: 'CONNECTION BY ALNAIM', image: 'connection-by-alnaim.webp' },
  { id: 'gazali2',   name: getLang() === 'ar' ? 'غزالي للعود والعطور' : 'Gazali for Oudh & Perfumes',  image: 'gazali.webp' },
  { id: 'urban2',    name: 'URBAN',         image: 'urban.webp' },
  { id: 'yarnista2', name: 'YARNISTA',      image: 'yarnista.webp' },
];

export const clientsTemplate = () => {
  const cardsHTML = BRANDS.map((b, i) => cardHTML(b, i)).join('');
  const rtl = isRTL();

  return /* html */ `
    <div class="clients">
      <div class="clients__inner">

        <!-- Header -->
        <header class="clients__header">
          <div class="clients__header-left">
            <div class="clients__eyebrow" aria-hidden="true">
              <span class="clients__eyebrow-line"></span>
              <span class="clients__eyebrow-circles">
                <span class="clients__circle clients__circle--solid"></span>
                <span class="clients__circle clients__circle--hollow"></span>
              </span>
              <span class="clients__eyebrow-line"></span>
              <span class="clients__eyebrow-text">${t('clients.eyebrow')}</span>
            </div>
            <h2 class="clients__title">${t('clients.title')}</h2>
          </div>

          <div class="clients__header-right">
            <p class="clients__desc">${t('clients.desc')}</p>
            <div class="clients__arrows" role="group" aria-label="${t('clients.aria.controls')}">
              <button class="clients__arrow" data-dir="prev" type="button" aria-label="${t('clients.aria.prev')}">
                ${chevron(rtl ? 'right' : 'left')}
              </button>
              <button class="clients__arrow" data-dir="next" type="button" aria-label="${t('clients.aria.next')}">
                ${chevron(rtl ? 'left' : 'right')}
              </button>
            </div>
          </div>
        </header>

        <!-- Carousel -->
        <div class="clients__viewport">
          <div class="clients__track" id="clients-track" role="list">
            ${cardsHTML}
          </div>
        </div>

        <!-- Partners Banner Block -->
        <div class="partners">
          <div class="partners__title-box">
            <h3 class="partners__title">${t('partners.title')}</h3>
          </div>
          <div class="partners__logos">
            <div class="partners__logo-item">
              <img src="/images/partners/my-fatoorah.webp" alt="My Fatoorah" class="partners__logo-img" />
            </div>
            <div class="partners__logo-item">
              <img src="/images/partners/pass.webp" alt="Pass" class="partners__logo-img" />
            </div>
            <div class="partners__logo-item">
              <img src="/images/partners/sadad.webp" alt="Sadad" class="partners__logo-img" />
            </div>
            <div class="partners__logo-item">
              <img src="/images/partners/jeyaad.webp" alt="Jeyaad" class="partners__logo-img" />
            </div>
            <div class="partners__logo-item">
              <img src="/images/partners/edfapay.webp" alt="EdfaPay" class="partners__logo-img" />
            </div>
          </div>
        </div>

      </div>
    </div>
  `;
};

/* --------------------------------------------------------------- */
/* Card                                                            */
/* --------------------------------------------------------------- */

function cardHTML(brand, idx) {
  return /* html */ `
    <div class="clients__card" role="listitem" data-card="${idx}">
      <span class="clients__label">${t('clients.storeName')}</span>
      <div class="clients__tile" aria-hidden="true">
        <img src="/images/clients/${brand.image}" alt="${brand.name}" loading="lazy" />
      </div>
    </div>
  `;
}

/* --------------------------------------------------------------- */
/* Chevron — used in arrow buttons.                                */
/* --------------------------------------------------------------- */
function chevron(dir) {
  const path = dir === 'left'
    ? 'M14 6 L8 12 L14 18'
    : 'M10 6 L16 12 L10 18';
  return /* html */ `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="${path}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
}
