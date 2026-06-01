# 📐 E-Trolley — Zero-JS Hero Section Migration Plan

This implementation plan details the steps required to migrate the E-Trolley Hero section to a zero-JavaScript approach. By eliminating the JS controller, structural translations can be statically baked into distinct language HTML files, dramatically improving Core Web Vitals, FCP/LCP, and SEO indexability while maintaining top-tier aesthetics.

---

## 🛠️ Proposed Migration Steps

### 1. Delete Hero Controller
- [x] Delete `src/components/hero/hero.js` entirely.

### 2. Main Entry Point Cleanup
- [x] Edit `src/main.js` to remove the `import { initHero } from './components/hero/hero.js'` import.
- [x] Remove `activeHero` declaration, initialization, and cleanup lifecycle calls.

### 3. Symmetrize `index.html` (Pure English Markup)
- [x] Set `<html lang="en">` in `index.html` (confirm it is set).
- [x] Clean up the Hero section (`data-component="hero"`) inside `index.html`:
  - Remove all bilingual Arabic `span.i18n-block[lang="ar"]` tags inside the Hero section.
  - Simplify elements (e.g., headline, aside, rail-label, validating footnotes, CTAs) to hold only pure English text.
  - Update all language switcher triggers in `index.html` (e.g. the dropdown options and mobile menu lang buttons) to point physically to `index-ar.html` as links or standard actions.
  - Remove the module script tag `<script type="module" src="/src/main.js"></script>` from `index.html`.
  - Add `<link rel="stylesheet" href="/src/styles/main.css" />` to the `<head>` of `index.html`.

### 4. Create `index-ar.html` (Pure Arabic Markup)
- [x] Duplicate `index.html` to `index-ar.html` at the project root `etrolley/`.
- [x] Set `<html lang="ar" dir="rtl">` on `index-ar.html`.
- [x] In `index-ar.html`, edit the Hero section to hold only the Arabic copy, removing any English markup inside it.
- [x] In `index-ar.html`, ensure the language switcher buttons link back to `index.html`.
- [x] Ensure `<link rel="stylesheet" href="/src/styles/main.css" />` is loaded, and the dynamic script is removed.

### 5. Verify Build & Code Integrity
- [x] Update `docs/project_structure.md` to reflect the deleted `hero.js` and the newly created `index-ar.html`.
- [x] Run `react_doctor_diagnose` with all diagnostics enabled (`lint: true`, `dead_code: true`, `audit: true`, `typecheck: true`, `build: true`) to ensure everything compiles and builds perfectly under Vite.
- [x] Log changes in `docs/changelog.md`.

---

## 🎨 Design UX, Typography & Aesthetics Impact
- **No FOUC (Flash of Unstyled Content)**: Hiding logic that previously lived in JS is removed, elements are rendered instantly by the browser.
- **Pure CSS Layout**: Rely on native styling in `hero.css` and global variables.
- **RTL Symmetrical Scaling**: Checked by `dir="rtl"` in CSS, resolving fluid boundaries natively.

---

## ## Review

### Final Outcome Summary
- **Zero-JS Hero Execution**: Successfully migrated the above-the-fold Hero section from programmatic JavaScript generation to pure, server-rendered static HTML structures.
- **Bilingual Cleanliness**: Removed bilingual wrapper bloat inside the Hero section:
  - `index.html` contains only clean, high-performance static English text copy.
  - `index-ar.html` contains only translated, high-performance static Arabic text copy.
- **Direct CSS Linking**: Removed module script dependency from both pages, linking global CSS styles directly in `<head>` to prevent Flash of Unstyled Content (FOUC).
- **Vite Multi-Page Build**: Scaled `vite.config.js` to compile both `index.html` and `index-ar.html` as standard entry points, verifying a 100% successful production build.
- **Strict Compliance**: Fully updated documentation (`docs/project_structure.md` and `docs/changelog.md`) immediately in compliance with user global guidelines.
