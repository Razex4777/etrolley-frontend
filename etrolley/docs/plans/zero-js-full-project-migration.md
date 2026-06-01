# 📐 E-Trolley — Complete Zero-JS Project Migration Plan

This plan details the steps required to migrate all remaining JavaScript controllers and utilities into pure, high-performance HTML/CSS, removing every `.js` file from the repository. By making the project 100% JavaScript-free, we maximize loading speed, Core Web Vitals, and SEO efficiency.

---

## 🛠️ Proposed Migration Steps

### 1. Motion & Scroll Reveals (CSS-Only)
- [ ] Update `src/styles/_motion.css` to animate elements with `[data-reveal]` automatically.
- [ ] Set default state to hidden, and run keyframe `revealOnLoad` with a duration of `0.85s` and an easing curve.
- [ ] Delay the animation dynamically: `calc(1.8s + var(--reveal-delay, 0s))`, since the splash curtain clears at `1.8s`.
- [ ] Map child indices inside `[data-reveal-group]` to staggered delays using CSS `:nth-child` selectors, supporting up to 8 cards.

### 2. Navbar Scroll Transitions (CSS-Only)
- [ ] Update `src/components/navbar/navbar.css` to define `@keyframes navbarScroll` that transitions background color, blur, and shadows.
- [ ] Attach the animation to `.nav` using `animation-timeline: scroll(root)` and `animation-range: 0px 50px`.
- [ ] Set default `.nav` background to a premium `rgba(255, 255, 255, 0.85)` with blur to serve as a stunning, reliable fallback.

### 3. Services Horizontal Gallery (CSS-Only)
- [ ] Remove programmatic grab listeners and cursors in `src/components/services/services.css`.
- [ ] Ensure services track scroll snap is enabled natively in `src/components/services/services.css`.
- [ ] Set `cursor: default` on `.services__track`.

### 4. Remove Script Imports & Delete JS Files
- [ ] Remove `<script type="module" src="/src/main.js"></script>` from `src/index.base.html`.
- [ ] Delete `src/main.js`.
- [ ] Delete `src/lib/reveal.js`.
- [ ] Delete `src/lib/dom.js`.
- [ ] Delete `src/components/services/services.js`.

### 5. Verify Build & Code Integrity
- [ ] Update `docs/project_structure.md` to reflect the deleted JS files.
- [ ] Run `npm run build` using Vite to verify that it compiles into pure HTML and CSS perfectly.
- [ ] Log changes in `docs/changelog.md`.
