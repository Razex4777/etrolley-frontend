# 📐 E-Trolley — Partners & Designs Section Zero-JS Migration Plan

This plan details the steps required to migrate the **Clients/Partners** carousel and the **Distinctive Designs** carousel components to a pure HTML/CSS zero-JavaScript approach, removing `clients.js` and `designs.js` files completely.

---

## 🛠️ Proposed Migration Steps

### 1. Update Distinctive Designs Templates
- [ ] Add `id="design-card-0"` through `id="design-card-4"` to each template card in the Distinctive Designs carousel across:
  - `src/components/designs/designs.en.html`
  - `src/components/designs/designs.ar.html`
  - `index.html` (inside the designs section)
  - `index-ar.html` (inside the designs section)
- [ ] Convert the prev/next controllers from `<button>` to `<a>` tags:
  - Prev arrow: change `<button>` to `<a href="#design-card-0" class="designs__arrow" data-dir="prev" aria-label="...">`
  - Next arrow: change `<button>` to `<a href="#design-card-4" class="designs__arrow" data-dir="next" aria-label="...">`
  - Update this in all four files listed above.

### 2. Add Smooth Anchor Scroll & Jump Prevention Styling
- [ ] In `src/components/clients/clients.css`:
  - Add `scroll-margin-top: clamp(140px, 15vh, 220px);` to `.clients__card` to align the card with the viewport when targeted, preventing large vertical page jumps.
- [ ] In `src/components/designs/designs.css`:
  - Add `scroll-margin-top: clamp(140px, 15vh, 220px);` to `.designs__card` to align the card with the viewport when targeted.
  - Add `text-decoration: none;` to `.designs__arrow` to prevent anchor link underlines.
  - Change cursor style from `cursor: grab;` to default or remove dragging states/selectors since JavaScript dragging is removed.

### 3. Remove JavaScript Code Files
- [ ] Delete `src/components/clients/clients.js`.
- [ ] Delete `src/components/designs/designs.js`.

### 4. Main Entry Point Cleanup
- [ ] Edit `src/main.js` to remove imports:
  - Remove `import { initDesigns } from './components/designs/designs.js';`
  - Remove `import { initClients } from './components/clients/clients.js';`
- [ ] In `src/main.js`, remove `activeDesigns` and `activeClients` lifecycle variables, initialization (`initDesigns()`, `initClients()`), and cleanup calls.

### 5. Verify Build & Project Integrity
- [ ] Run `npm run build` to verify Vite builds cleanly with zero compilation warnings or errors.
- [ ] Re-run `react_doctor_understand` or equivalent check to make sure the project structure is healthy.
- [ ] Update `docs/project_structure.md` to reflect the deleted `.js` files.
- [ ] Update `docs/changelog.md` to record these changes.

---

## 🎨 Design UX, Typography & Aesthetics Impact
- **No JS Overhead**: Eliminating these controllers removes runtime execution for carousel sliding, improving FCP/LCP and making the site fully functional for users with JS disabled.
- **Scroll Snapping**: Horizontal tracks continue to scroll smoothly and snap natively using CSS `scroll-snap-type: x mandatory` and `scroll-behavior: smooth`.
- **RTL Mirroring**: Supported natively by CSS `dir="rtl"` scroll alignment.
