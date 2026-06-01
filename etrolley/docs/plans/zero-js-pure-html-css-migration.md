# Implementation Plan — Zero-JS Pure HTML/CSS Migration

This plan details the complete removal of JavaScript (`.js` files, GSAP, and Lenis) from the E-Trolley codebase, converting it into a 100% pure HTML and CSS project. 

The website will be split into two static, fully compiled HTML files:
1. [index.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/index.html) — Pure English version (`<html lang="en">`).
2. [index-ar.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/index-ar.html) — Pure Arabic version (`<html lang="ar" dir="rtl">`).

Both files will load a single linked stylesheet `/src/styles/main.css` which aggregates all styles. Language switching will be handled natively via hyperlink anchors (`href="index-ar.html"` and `href="index.html"`).

## User Review Required

> [!IMPORTANT]
> - **No JavaScript**: All `.js` script files and dependencies (`gsap`, `lenis`) are completely uninstalled and deleted. All animation states (such as staggered reveals, stack deck pinnings, or card glides) are removed. Everything is instantly visible on load.
> - **CSS-Only Mobile Menu**: The responsive mobile toggle menu will be implemented elegantly using the standard CSS Checkbox Hack (`<input type="checkbox" id="menu-toggle">` + CSS selectors).
> - **Split Pages**: We will deliver two separate files: `index.html` (English) and `index-ar.html` (Arabic).

---

## Proposed Changes

- [ ] Uninstall GSAP & Lenis Dependencies
- [ ] Implement CSS-Only Mobile Menu in styles
- [ ] Migrate index.html to English-only (Remove Arabic tags & JS scripts, Link style directly)
- [ ] Create index-ar.html with Arabic-only content
- [ ] Link language flag selector buttons between pages
- [ ] Delete all behavioral `.js` files and utility scripts
- [ ] Audit build and verify browser loadability

---

### UI Shell & CSS

#### [MODIFY] [package.json](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/package.json)
- Remove `gsap` and `lenis` dependencies. Keep only `vite` in devDependencies to allow local development and static bundling.

#### [MODIFY] [navbar.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/navbar/navbar.css)
- Implement CSS-only dropdown behaviors on hover for desktop, and CSS checkbox hack for the mobile toggle:
  ```css
  #menu-toggle:checked ~ .nav__links {
    display: flex;
    opacity: 1;
    transform: translateY(0);
  }
  ```

---

### Page Content & Language Splitting

#### [MODIFY] [index.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/index.html)
- Clean all bilingual blocks to keep **only** the English text.
- Link stylesheet directly: `<link rel="stylesheet" href="/src/styles/main.css" />`
- Remove the `<script>` tag pointing to `main.js`.
- Wire the Arabic switcher to: `href="index-ar.html"`.

#### [NEW] [index-ar.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/index-ar.html)
- Duplicate `index.html` and configure `<html lang="ar" dir="rtl">`.
- Clean all bilingual blocks to keep **only** the Arabic text.
- Wire the English switcher to: `href="index.html"`.

---

### Clean Up & Deletion

#### [DELETE] Behavioral JS scripts
- Delete `main.js` and all behavioral controllers:
  - `src/components/navbar/navbar.js`
  - `src/components/navbar/mobile-menu.js`
  - `src/components/hero/hero.js`
  - `src/components/steps/steps.js`
  - `src/components/different/different.js`
  - `src/components/services/services.js`
  - `src/components/clients/clients.js`
  - `src/components/designs/designs.js`
  - `src/components/support/support.js`
  - `src/components/footer/footer.js`
- Delete `src/lib/` utilities completely.

---

## Verification Plan

### Automated Build
- Run `npm run build` using Vite to verify that it compiles into pure HTML and CSS perfectly.

### Manual Inspection
- Double click both `index.html` and `index-ar.html` directly in the browser to ensure the layout fits the screen flawlessly, language switching shifts LTR/RTL instantly, and hover actions operate correctly without any errors or dependencies.
