# 🚀 Remove GSAP and Lenis Dependencies (Zero-JS Transitions)

This plan outlines the steps to completely decouple the project from **GSAP** and **Lenis** scroll-smoothing libraries. All smooth-scrolling behaviors will be handled natively via CSS `scroll-behavior: smooth`, and all scroll-triggered reveal animations will be migrated to a lightweight, zero-dependency `IntersectionObserver` helper and pure CSS transition rules.

## User Review Required

> [!IMPORTANT]
> - We are deprecating **GSAP** and **Lenis** runtime dependencies. This will reduce the bundled JS size significantly and eliminate third-party library overhead.
> - The page curtain/splash intro will now be powered by **pure CSS keyframe animations** loaded directly in the initial HTML paint to prevent any FOUC (Flash of Unstyled Content).
> - Scroll-triggered animations (`data-reveal` and `data-reveal-group`) will be handled by a clean native JS `IntersectionObserver` that sets CSS custom properties (`--reveal-delay`) and toggles classes.

## Proposed Changes

### Central / Global Configuration

#### [MODIFY] [package.json](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/package.json)
- Remove `gsap` and `lenis` from the `dependencies` block.

#### [MODIFY] [index.base.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/index.base.html)
- Add the `.page-intro` splash screen markup directly into the HTML `<body>` statically. This ensures the curtain is visible from the very first paint before any JS compiles.
- Remove the unused `#smooth-wrapper` and `#smooth-content` container wrapper divs.

#### [MODIFY] [main.js](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/main.js)
- Remove imports of `initSmoothScroll` (from `smooth-scroll.js`), `playPageIntro` (from `page-intro.js`), and component controllers `initSupport` (from `support.js`), `initFooter` (from `footer.js`).
- Delay `initReveal()` call using a `setTimeout` of 1800ms so that the Hero section elements animate in sync with the curtain sliding up.
- Clean up active mount pointers.

#### [DELETE] [smooth-scroll.js](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/lib/smooth-scroll.js)
- Remove the file completely.

#### [DELETE] [page-intro.js](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/lib/page-intro.js)
- Remove the file completely.

---

### Styles & Motion Infrastructure

#### [MODIFY] [_reset.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/styles/_reset.css)
- Remove all `html.lenis` and `.lenis-smooth` overrides.
- Ensure `html { scroll-behavior: smooth; }` is active and unmodified.

#### [MODIFY] [_motion.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/styles/_motion.css)
- Implement pure CSS animations for `.page-intro` (curtain sliding up) and `.page-intro__mark` (logo fade-in and scale-down) using keyframes.
- Add CSS transition declarations for `[data-reveal]` and `[data-reveal].is-revealed` states (presets like `fade-up`, `scale`, `fade`, etc.).

---

### Component Refactoring

#### [MODIFY] [reveal.js](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/lib/reveal.js)
- Rewrite `reveal.js` to utilize a lightweight `IntersectionObserver` instead of GSAP and ScrollTrigger.
- Add support for stagger delays via setting CSS custom property `--reveal-delay`.

#### [MODIFY] [designs.js](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/designs/designs.js)
- Remove `gsap` and `ScrollTrigger` imports and implementation.
- Replace `isRTL` import from `i18n.js` with a local check: `const isRTL = () => document.documentElement.dir === 'rtl';`.
- Keep arrow click event listeners and inertial drag scroll handling intact.

#### [MODIFY] [designs.en.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/designs/designs.en.html) & [designs.ar.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/designs/designs.ar.html)
- Add `data-reveal` and `data-reveal-group` declarations to sections, headers, and card lists to run animations via the IntersectionObserver.

#### [MODIFY] [footer.en.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/footer/footer.en.html) & [footer.ar.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/footer/footer.ar.html)
- Add `data-reveal` and `data-reveal-group` tags to columns, social icons, logos, CTAs, and copyrights.

#### [DELETE] [footer.js](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/footer/footer.js)
- Remove the file completely.

#### [DELETE] [support.js](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/support/support.js)
- Remove the file completely (and add `data-reveal` inside support HTML templates).

---

## Verification Plan

### Automated Tests
- Run `npm run build` to verify rollup compiles successfully without `gsap` and `lenis`.
- Check for zero console errors in the browser.

### Manual Verification
- Verify the splash curtain animations load instantly and wipe out smoothly.
- Scroll down the page to ensure all component cards reveal themselves gracefully.
- Test carousel navigation buttons and touch-dragging behaviors.
