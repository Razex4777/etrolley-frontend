# Plan: Add "Our Partners" Block and Update First Client Card

This plan outlines the design and implementation steps to refine the **Our Renowned Clients** section and introduce the **Our Partners** banner block directly underneath it, matching the user's Figma screenshot exactly.

---

## Proposed Changes

### 1. Translations (`etrolley/src/lib/i18n.js`)
* Add localization keys for the partners section title (`Our Partners` in English / `شركاؤنا` in Arabic).

### 2. Clients Template (`etrolley/src/components/clients/clients.html.js`)
* Change the first client card `etrolley` to `gazali` (`Gazali for Oudh & Perfumes` / `غزالي للعود والعطور`).
* Set up its SVG container to load `/images/clients/gazali.png` inside a rounded `<rect>` (`rx="25"`), matching the Figma card size of `239`x`205`. Provide a beautiful SVG graphic fallback if the file is not yet present.
* Append the new **Our Partners** banner section (`<div class="partners">`) at the bottom of the template.
* Create high-fidelity, styled inline SVG representations of Qatari/regional payment partners:
  * **My Fatoorah**
  * **Pass**
  * **Sadad**
  * **Jeyaad**
  * **EdfaPay**

### 3. Styling & Layout (`etrolley/src/components/clients/clients.css`)
* Style the `.partners` container as a horizontal banner spanning full width with a soft gray-to-beige linear-gradient backdrop.
* Align "Our Partners" text cleanly to the start (left on LTR, right on RTL), styled with outfits/Unbounded medium typography.
* Distribute partner brand logos evenly with flexbox, ensuring responsiveness, clean spacing, and scaling.
* Implement smooth transitions, accessibility tags, and RTL text adjustments (`dir="rtl"`).

---

## Checklist

- [ ] Add translation keys for `'partners.title'` to `etrolley/src/lib/i18n.js`.
- [ ] Modify `etrolley/src/components/clients/clients.html.js` to change the first brand to Gazali.
- [ ] Add the Partners banner markup and inline SVG logo models inside `clients.html.js`.
- [ ] Add CSS styling for the Partners banner in `etrolley/src/components/clients/clients.css` (flexible layouts, modern background gradient, sizing).
- [ ] Run Vite development diagnostics to ensure everything compiles flawlessly.
