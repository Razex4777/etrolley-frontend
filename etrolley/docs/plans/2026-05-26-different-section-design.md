# 📐 'What Makes Us Different?' Section Implementation Plan

We will implement the next section, **"What Makes Us Different?"**, directly after the steps section. This section features a vertically stacking slide deck animated with GSAP and ScrollTrigger on desktop, and a mobile-friendly vertical flow on screens below 768px.

## Checklists
- [ ] Add translation keys for `different.*` to `src/lib/i18n.js`.
- [ ] Create `different.html.js` template with structure, SVG decorative elements, and translations.
- [ ] Create `different.css` with responsive off-white slide layouts and colors.
- [ ] Create `different.js` with ScrollTrigger animations for sliding layers and the eyebrow.
- [ ] Mount the section in `index.html`.
- [ ] Initialize the component in `src/main.js`.
- [ ] Import `different.css` in `src/styles/main.css`.
- [ ] Run `npm run build` to verify no errors.

## Proposed Changes

### 1. Translations (`src/lib/i18n.js`)
Add localized texts for titles and the three slides.

### 2. Styles and Templates (`src/components/different/`)
Build layout, responsive CSS, and GSAP controller.

### 3. Integration
Connect the component to `index.html` and `main.js`.
