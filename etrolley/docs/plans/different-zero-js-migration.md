# Plan — "What Makes Us Different?" Zero-JS Pure HTML & CSS Migration

This plan outlines the specific steps required to migrate the "What Makes Us Different?" section to 100% pure static HTML and CSS sticky stacking, completely removing all JavaScript logic and ScrollTrigger pinning dependencies.

## 🎯 Goal
1. Convert the differentiators card deck into static, semantic HTML inside `index.html` (English) and `index-ar.html` (Arabic).
2. Remove the JavaScript file `different.js` and template generator `different.html.js`.
3. Achieve smooth card stacking using pure CSS `position: sticky` with margin-bottom scroll runways.
4. Eliminate any layout shifts or bottom overlaps with the `.services` section by using natural CSS layout flow (`height: auto`).

---

## 🛠️ Proposed Changes

### 1. English Layout (`index.html`)
- Replace `<section data-component="different"></section>` with the full static English layout of the title and 5 differentiator slides.
- Use direct English text matching the keys in `i18n.js`.

### 2. Arabic Layout (`index-ar.html`)
- Replace `<section data-component="different"></section>` with the full static Arabic layout of the title and 5 differentiator slides.
- Use direct Arabic text matching the keys in `i18n.js`.

### 3. Styling (`different.css`)
- Remove `.different` fixed `height: 100vh` and set it to `height: auto` so it grows with vertical flow.
- Convert `.different__track` into a vertical flexbox container (`display: flex; flex-direction: column`).
- Position `.different__slide` with `position: sticky` and assign a bottom margin scroll runway (`24vh` on desktop, `18vh` on mobile) so subsequent cards stack overlay-style as the user scrolls.
- Set slides to `height: 78vh` (desktop) and `height: 52vh` (mobile).
- Remove all JS-driven `.is-pinned` classes and rules, letting the header naturally scroll out of the viewport.

### 4. Bootstrap (`main.js`)
- Remove `import { initDifferent }` and references to `activeDifferent`, `initDifferent()` and cleanup.

### 5. File Deletions
- Delete `src/components/different/different.js`.
- Delete `src/components/different/different.html.js`.

---

## 📐 Verification Plan
- Run `npm run build` to verify the production compilation.
- Manually scroll to verify cards stack overlay-style natively and the bottom section does not overlap.
