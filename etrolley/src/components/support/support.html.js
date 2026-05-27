/**
 * support.html.js — "Support & Help" CTA card
 * ---------------------------------------------------------------
 * A wide, pill-shaped card with the eyebrow slider + a 2-line
 * headline on the left, three contact buttons (WhatsApp / Phone /
 * Gmail) in the middle, and the trolley artwork on the right —
 * yellow back layer behind the section, teal front layer on top
 * of the card (mirrors the services cart pattern).
 *
 *   ┌──────────────────────────────────────────────╲          ╲
 *   │  ─◯◯ Support & Help                           ╲   teal   ╲
 *   │  Are you in need of assistance              [📱][📞][📧] ╲ on top
 *   │  or have a question?                                       ╲
 *   ╲___________________________________________________________╲
 *           yellow back peeks out behind everything →
 * ---------------------------------------------------------------
 */

import { t } from '../../lib/i18n.js';

/* Default placeholders — easy to swap when client provides real
   contact details. The href is wired off these values. */
const CONTACTS = {
  whatsapp: 'https://wa.me/97400000000',
  phone:    'tel:+97400000000',
  email:    'mailto:support@etrolley.qa',
};

export const supportTemplate = () => /* html */ `
  <div class="support">
    <div class="support__inner">

      <!-- Yellow back layer is a SIBLING of the card so it paints
           behind the card's background. Where it overlaps the card,
           the card hides it. Where it extends past the card's edges,
           it shows through to the section bg. -->
      <div class="support__cart-back" aria-hidden="true">
        ${cartBackSVG()}
      </div>

      <div class="support__card">
        <div class="support__copy">
          <div class="support__eyebrow">
            <span class="support__slider" aria-hidden="true">
              <span class="support__slider-track"></span>
              <span class="support__slider-knob"></span>
            </span>
            <span class="support__eyebrow-text">${t('support.eyebrow')}</span>
          </div>

          <h2 class="support__title" data-reveal="fade-up">${t('support.title')}</h2>
        </div>

        <div class="support__actions" role="group" aria-label="${t('support.aria.contacts')}">
          <a class="support__btn support__btn--whatsapp"
             href="${CONTACTS.whatsapp}"
             target="_blank" rel="noopener noreferrer"
             aria-label="${t('support.aria.whatsapp')}">
            ${whatsappGlyph()}
          </a>

          <a class="support__btn support__btn--phone"
             href="${CONTACTS.phone}"
             aria-label="${t('support.aria.phone')}">
            ${phoneGlyph()}
          </a>

          <a class="support__btn support__btn--gmail"
             href="${CONTACTS.email}"
             aria-label="${t('support.aria.email')}">
            ${gmailGlyph()}
          </a>
        </div>
      </div>

      <!-- Teal front layer is a SIBLING of the card too so it paints
           on top of everything (z-index: 10). -->
      <div class="support__cart-front" aria-hidden="true">
        ${cartFrontSVG()}
      </div>

    </div>
  </div>
`;

/* --------------------------------------------------------------- */
/* Glyphs                                                          */
/* --------------------------------------------------------------- */

function whatsappGlyph() {
  /* WhatsApp mark — green-gradient rounded tile + the iconic
     speech-bubble-with-handset glyph in white. Built on a 24×24
     viewBox (Material grid) for crispness, then mapped to the
     92×91 tile via translate + uniform scale. */
  return /* html */ `
    <svg viewBox="0 0 92 91" width="92" height="91" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="wa-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stop-color="#5BD066"/>
          <stop offset="100%" stop-color="#27B43E"/>
        </linearGradient>
      </defs>
      <rect width="92" height="91" rx="25" fill="url(#wa-bg)"/>
      <g transform="translate(20 19.7) scale(2.18)" fill="#FFFFFF">
        <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91
                 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21
                 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zM12.04 20.15
                 c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264
                 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86
                 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22
                 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12
                 -.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99
                 -1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11
                 .25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34
                 -.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31
                 -.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67
                 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07
                 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z"/>
      </g>
    </svg>
  `;
}

function phoneGlyph() {
  /* Phone mark — solid teal tile + the canonical Bootstrap-style
     "telephone-fill" handset centered and pointing up-right perfectly. */
  return /* html */ `
    <svg viewBox="0 0 92 91" width="92" height="91" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="92" height="91" rx="25" fill="#316C6B"/>
      <g transform="translate(26 25.5) scale(2.5)" fill="#FFFFFF">
        <path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
      </g>
    </svg>
  `;
}

function gmailGlyph() {
  /* Gmail mark — canonical Material 4-color rendition.
     Anchored on a 48×48 inner box, centred on the 92×91 white tile
     by scaling/translating the whole group. Result: crisp at any DPR. */
  return /* html */ `
    <svg viewBox="0 0 92 91" width="92" height="91" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="92" height="91" rx="25" fill="#FFFFFF"/>
      <g transform="translate(22 21.5)">
        <path fill="#4CAF50" d="M45 16.2l-5 2.75-5 4.75V40h7c1.657 0 3-1.343 3-3V16.2z"/>
        <path fill="#1E88E5" d="M3 16.2l3.614 1.71L13 23.7V40H6c-1.657 0-3-1.343-3-3V16.2z"/>
        <polygon fill="#E53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"/>
        <path fill="#C62828" d="M3 12.298V16.2l10 7.5V11.2L9.876 8.859C9.132 8.301 8.228 8 7.298 8h0C4.924 8 3 9.924 3 12.298z"/>
        <path fill="#FBC02D" d="M45 12.298V16.2l-10 7.5V11.2l3.124-2.341C38.868 8.301 39.772 8 40.702 8h0C43.076 8 45 9.924 45 12.298z"/>
      </g>
    </svg>
  `;
}

/* --------------------------------------------------------------- */
/* Trolley artwork — TWO separate layers                            */
/*                                                                 */
/*   - cartBackSVG  (yellow #F5C99A): 293 × 392 — sits BEHIND the  */
/*     card via z-index: -1 inside the card's isolation context.   */
/*     Visible only where it extends past the card's rounded edge. */
/*   - cartFrontSVG (teal #316C6B):  299 × 266 — sits ABOVE the    */
/*     card via z-index: 10. Always visible.                       */
/*                                                                 */
/* The original Figma artwork is preserved verbatim in each SVG —  */
/* zero edits to the path data. Alignment is handled in CSS via a  */
/* shared right-edge anchor and proportional widths.               */
/* --------------------------------------------------------------- */
function cartBackSVG() {
  return /* html */ `
    <svg viewBox="0 0 293 392" width="293" height="392" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M292.705 4.16571V36.0504C292.705 38.3297 290.871 40.1637 288.591 40.1637H215.69C213.856 40.1637 212.231 41.3951 211.733 43.1504L143.13 284.63L131.678 324.846C131.18 326.628 129.556 327.833 127.721 327.833H7.70439C5.03153 327.833 3.06619 325.344 3.6951 322.75L31.4457 206.582C31.8912 204.696 33.5945 203.386 35.5074 203.412L76.1245 204.015C78.8236 204.067 80.7627 206.661 80.029 209.255L60.1135 279.364C59.3536 281.984 61.3451 284.604 64.0704 284.604H92.581C94.4153 284.604 96.04 283.373 96.5379 281.617L166.347 35.7884L175.676 2.98673C176.174 1.20517 177.798 0 179.633 0H288.565C290.845 0 292.679 1.83396 292.679 4.11331L292.705 4.16571Z" fill="#F5C99A"/>
      <path d="M25.0778 391.026C38.9278 391.026 50.1555 379.801 50.1555 365.953C50.1555 352.106 38.9278 340.88 25.0778 340.88C11.2277 340.88 0 352.106 0 365.953C0 379.801 11.2277 391.026 25.0778 391.026Z" fill="#F5C99A"/>
      <path d="M93.3141 391.026C107.164 391.026 118.392 379.801 118.392 365.953C118.392 352.106 107.164 340.88 93.3141 340.88C79.464 340.88 68.2363 352.106 68.2363 365.953C68.2363 379.801 79.464 391.026 93.3141 391.026Z" fill="#F5C99A"/>
    </svg>
  `;
}

function cartFrontSVG() {
  return /* html */ `
    <svg viewBox="0 0 299 266" width="299" height="266" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M294.303 40.1375H53.8242C51.2037 40.1375 49.2384 42.5478 49.7887 45.1154L56.8115 77.6813C57.2308 79.5676 58.9079 80.93 60.847 80.93H183.668C185.948 80.93 187.782 82.7639 187.782 85.0433V116.928C187.782 119.207 185.948 121.041 183.668 121.041H71.2764C68.656 121.041 66.6906 123.452 67.2409 126.019L74.2375 158.585C74.6568 160.471 76.3339 161.834 78.273 161.834H161.158C163.438 161.834 165.272 163.668 165.272 165.947V197.832C165.272 200.111 163.438 201.945 161.158 201.945H45.858C43.9188 201.945 42.2418 200.583 41.8225 198.696L33.8825 161.808L25.104 120.989L16.4565 80.8514L7.65173 40.0327L0.104818 4.97789C0.0524091 4.6897 0 4.4015 0 4.11331C0 1.83396 1.83432 0 4.11412 0H294.277C296.557 0 298.391 1.83396 298.391 4.11331V35.998C298.391 38.2773 296.557 40.1113 294.277 40.1113L294.303 40.1375Z" fill="#316C6B"/>
      <path d="M70.8043 265.216C84.6544 265.216 95.8821 253.991 95.8821 240.144C95.8821 226.296 84.6544 215.071 70.8043 215.071C56.9543 215.071 45.7266 226.296 45.7266 240.144C45.7266 253.991 56.9543 265.216 70.8043 265.216Z" fill="#316C6B"/>
    </svg>
  `;
}
