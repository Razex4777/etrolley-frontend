# Plan — "What Makes Us Different?" Stacking Card Section Header & Bottom Overlap Correction (V3)

This plan outlines the specific steps required to resolve the visual clipping and header visibility issue in the differentiators section when pinned, without breaking ScrollTrigger's pin calculations.

## 🎯 Goal
1. Hide the header/title ("What Makes Us Different?") completely when the cards are pinned (`.is-pinned`).
2. Prevent the cards from overlapping the `.services` section below it by shifting the card track upward when pinned, freeing up space at the bottom.
3. Maximize the card sizes (extend them more) so they take up a large portion of the viewport.

---

## 🔍 Root Cause Analysis
1. **Header Remains in Flow**: When the cards pin, the header was still taking up space in the normal document flow. Even if it was hidden, its height pushed the card deck down, causing the cards to overflow the bottom of the `100vh` section and overlap with the `.services` section.
2. **Dynamic Height Changes Break ScrollTrigger**: Any dynamic CSS transitions on the layout height, padding, or margins of the `.different` container during scrolling will break ScrollTrigger's pin-spacer calculations, causing layout shifts and overlap.
3. **Card Track Size**: The card track height was constrained, making the cards feel too small when the viewport was constrained.

---

## 🛠️ Proposed Changes

### Component: "What Makes Us Different?" (`different` component)

#### [MODIFY] [different.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/different/different.css)
- Add a smooth transition to `.different__header` for opacity, visibility, and transform.
- Hide `.different__header` when pinned:
  ```css
  [data-component="different"].is-pinned .different__header {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-40px);
    pointer-events: none;
  }
  ```
- Set `.different__track` to have a smooth transform transition.
- Increase the card track `max-height` to `80vh` on desktop (`min-width: 769px`) to make the cards larger (extend them more).
- Shift the card track `.different__track` upward when pinned using `transform: translateY()` (which is layout-safe and does not break ScrollTrigger):
  ```css
  [data-component="different"].is-pinned .different__track {
    transform: translateY(-130px);
  }
  ```
  *(On mobile, we will shift it up by `-70px` since the header is smaller).*

#### [MODIFY] [different.js](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/different/different.js)
- No functional changes needed in JS, since the `onToggle` hook already correctly adds and removes the `.is-pinned` class.

---

## 📐 Verification Plan

### Manual Verification
1. Open the project in the browser.
2. Scroll to the "What Makes Us Different?" section.
3. Verify that the moment the section pins, the section header fades out smoothly and disappears.
4. Verify that the cards slide up to a perfectly centered, high-resolution position on the screen, and the bottom does not overlap with the `.services` section.
5. Confirmed layout compiles successfully with `npm run build`.
