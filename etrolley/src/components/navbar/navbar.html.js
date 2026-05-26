/**
 * navbar.html.js
 * Template for the top navigation bar.
 * Markup mirrors the Figma layout (1920×122 design frame).
 * Inline SVGs are used instead of <img> for chevron + phone icon
 * to keep network requests low and allow CSS color theming.
 */

export const navbarTemplate = () => /* html */ `
  <nav class="nav" aria-label="Primary">
    <div class="nav__inner">
      <!-- Logo -->
      <a class="nav__logo" href="/" aria-label="E-Trolley home">
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
        <li><a href="#home" class="nav__link is-active">Home</a></li>
        <li><a href="#services" class="nav__link">Services</a></li>
        <li><a href="#prices" class="nav__link">Prices</a></li>
        <li class="nav__item nav__item--menu">
          <button class="nav__link nav__link--menu" type="button" aria-haspopup="menu" aria-expanded="false" data-menu="about">
            <span>About Us</span>
            ${chevronSVG()}
          </button>
          <ul class="nav__dropdown" role="menu" aria-label="About menu">
            <li role="none"><a role="menuitem" class="nav__dropdown-item" href="#our-story">Our Story</a></li>
            <li role="none"><a role="menuitem" class="nav__dropdown-item" href="#team">Team</a></li>
            <li role="none"><a role="menuitem" class="nav__dropdown-item" href="#partners">Partners</a></li>
          </ul>
        </li>
        <li><a href="#contact" class="nav__link">Contact Us</a></li>
        <li class="nav__item nav__item--menu">
          <button class="nav__link nav__link--menu nav__link--lang" type="button" aria-haspopup="menu" aria-expanded="false" data-menu="lang">
            <span data-current-lang>English</span>
            ${chevronSVG()}
          </button>
          <ul class="nav__dropdown" role="menu" aria-label="Choose language">
            <li role="none">
              <button role="menuitemradio" type="button" data-lang="en" aria-checked="true" class="nav__dropdown-item is-active">
                <span class="nav__dropdown-flag" aria-hidden="true">🇬🇧</span>
                <span>English</span>
              </button>
            </li>
            <li role="none">
              <button role="menuitemradio" type="button" data-lang="ar" aria-checked="false" class="nav__dropdown-item">
                <span class="nav__dropdown-flag" aria-hidden="true">🇶🇦</span>
                <span>العربية</span>
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
          <span class="nav__phone-label">Call us at:</span>
          <a class="nav__phone-num" href="tel:+97450988700">(+974)50988700</a>
        </div>
      </div>

      <!-- CTA -->
      <a class="nav__cta" href="#create-store">
        <span>Create a store</span>
      </a>

      <!-- Mobile hamburger -->
      <button class="nav__burger" type="button" aria-label="Open menu" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <span class="nav__divider" aria-hidden="true"></span>
  </nav>
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
