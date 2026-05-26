/**
 * hero.html.js
 * ---------------------------------------------------------------
 * Hero section template.
 * Layout mirrors the Figma frame (1920×1007):
 *   ┌──────────────────────────────────────────────┐
 *   │                  [navbar]                    │
 *   ├─[QR]──[ HEADLINE + brand watermark ]─[Follow]┤
 *   │       [ description + CTA + arrows ]         │
 *   │       [ laptop+bags hero image      ]        │
 *   └────────────────────────────────[Send msg ▶]──┘
 *
 * Decorative blurred gradient blob is rendered as a CSS pseudo-
 * element on `.hero` to avoid an extra image request.
 * ---------------------------------------------------------------
 */

export const heroTemplate = () => /* html */ `
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
      <!-- Left: QR + footnote -->
      <aside class="hero__aside">
        <div class="hero__qr">
          <img
            src="/images/qr-theqa.png"
            alt="THEQA — Verified by the Qatari Ministry of Communications"
            width="305"
            height="388"
            loading="eager"
          />
        </div>
        <p class="hero__validate">
          <span class="hero__validate-icon" aria-hidden="true">
            ${validateSVG()}
          </span>
          <span>etrolley is a platform that has been officially validated by the Qatari Ministry of Communications.</span>
        </p>
      </aside>

      <!-- Center: copy + CTA + image -->
      <div class="hero__content">
        <div class="hero__dream-pill" aria-hidden="true">
          <span>DreamWD</span>
        </div>

        <h1 class="hero__headline" id="hero-headline">
          <span class="line">Your store will be</span>
          <span class="line">ready in no more</span>
          <span class="line">than a minute.</span>
        </h1>

        <div class="hero__row">
          <div class="hero__cta-wrap">
            <span class="hero__cta-eyebrow">Link</span>
            <a class="hero__cta" href="#create-store">
              <span>build your store now</span>
            </a>
            <div class="hero__nav" role="group" aria-label="Slide navigation">
              <button class="hero__nav-btn" type="button" aria-label="Previous slide">
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" aria-hidden="true">
                  <path d="M14 7H2M2 7l5-5M2 7l5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <button class="hero__nav-btn" type="button" aria-label="Next slide">
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" aria-hidden="true">
                  <path d="M2 7h12M14 7l-5-5M14 7l-5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          <div class="hero__image">
            <img
              src="/images/hero-laptop-bags.png"
              alt="Online store on a laptop with shopping bags"
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
        <span class="hero__rail-label">Follow</span>
        <ul class="hero__socials" role="list">
          <li><a href="#" aria-label="Facebook" class="hero__social hero__social--fb"><span class="hero__social-tag">face...</span>${socialSVG('fb')}</a></li>
          <li><a href="#" aria-label="Twitter"  class="hero__social hero__social--tw"><span class="hero__social-tag">twit...</span>${socialSVG('tw')}</a></li>
          <li><a href="#" aria-label="LinkedIn" class="hero__social hero__social--in"><span class="hero__social-tag">link...</span>${socialSVG('in')}</a></li>
          <li><a href="#" aria-label="Instagram"class="hero__social hero__social--ig"><span class="hero__social-tag">inst...</span>${socialSVG('ig')}</a></li>
        </ul>
      </aside>
    </div>

    <!-- Floating side CTA -->
    <a class="hero__side-cta" href="#contact" aria-label="Send a message">
      <span>Send a message</span>
    </a>
  </div>
`;

function validateSVG() {
  return /* html */ `
    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" aria-hidden="true">
      <!-- Sparkle/scalloped outer ring built from a dashed stroke
           (math-perfect, no hand-drawn coordinates). -->
      <circle
        cx="14.5" cy="14.5" r="13"
        stroke="#316C6B" stroke-width="2"
        stroke-dasharray="1.2 2.6"
        stroke-linecap="round"
        fill="none"
      />
      <!-- Inner solid ring -->
      <circle cx="14.5" cy="14.5" r="9" stroke="#316C6B" stroke-width="1.4" fill="none"/>
      <!-- Checkmark -->
      <path
        d="M10.2 14.7 L13.1 17.6 L18.9 11.6"
        stroke="#316C6B" stroke-width="2.2"
        stroke-linecap="round" stroke-linejoin="round"
        fill="none"
      />
    </svg>
  `;
}

function socialSVG(kind) {
  // Minimal monoline social icons — colored via CSS for theming.
  const paths = {
    fb: '<path d="M22 12a10 10 0 1 0-11.6 9.9V14.9H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7C18.1 21.4 22 17.1 22 12z" fill="currentColor"/>',
    tw: '<path d="M19.6 7.7c.6-.4 1.1-1 1.4-1.7-.6.4-1.3.6-2 .8a3.2 3.2 0 0 0-5.5 2.9 9 9 0 0 1-6.5-3.3 3.2 3.2 0 0 0 1 4.2 3 3 0 0 1-1.4-.4 3.2 3.2 0 0 0 2.5 3.1c-.4.1-.9.2-1.4.1.4 1.2 1.5 2.1 2.9 2.1A6.4 6.4 0 0 1 5 16.8a9 9 0 0 0 4.9 1.4c5.9 0 9.1-4.9 9.1-9.1v-.4c.6-.5 1.2-1 1.6-1.6a6.4 6.4 0 0 1-1.8.5l-.2.1z" fill="currentColor"/>',
    in: '<path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.3 18.3H5.7v-8h2.6v8zM7 9.2A1.5 1.5 0 1 1 7 6.2a1.5 1.5 0 0 1 0 3zm11.3 9.1h-2.6v-3.9c0-.9 0-2.2-1.3-2.2-1.3 0-1.5 1-1.5 2.1v4h-2.6v-8h2.5v1.1a2.7 2.7 0 0 1 2.5-1.4c2.7 0 3.2 1.8 3.2 4v4.3z" fill="currentColor"/>',
    ig: '<path d="M12 2.2c2.7 0 3 0 4.1.1 1 0 1.5.2 1.9.4.5.2.8.4 1.2.8.4.4.6.7.8 1.2.2.4.3.9.4 1.9 0 1 .1 1.4.1 4.1s0 3-.1 4.1c0 1-.2 1.5-.4 1.9-.2.5-.4.8-.8 1.2-.4.4-.7.6-1.2.8-.4.2-.9.3-1.9.4-1 0-1.4.1-4.1.1s-3 0-4.1-.1c-1 0-1.5-.2-1.9-.4-.5-.2-.8-.4-1.2-.8-.4-.4-.6-.7-.8-1.2-.2-.4-.3-.9-.4-1.9 0-1-.1-1.4-.1-4.1s0-3 .1-4.1c0-1 .2-1.5.4-1.9.2-.5.4-.8.8-1.2.4-.4.7-.6 1.2-.8.4-.2.9-.3 1.9-.4 1 0 1.4-.1 4.1-.1zM12 7.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm5.8-7.8a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2z" fill="currentColor"/>',
  };
  return /* html */ `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">${paths[kind]}</svg>
  `;
}
