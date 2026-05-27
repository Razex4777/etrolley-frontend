# Plan — "What Makes Us Different?" Stacking Card Section Pin & Scroll Visibility Correction

This plan outlines the specific steps required to resolve the visual clipping and header visibility issue in the differentiators section when pinned.

## 🎯 Goal
Ensure that when the "What Makes Us Different?" section pins for its scroll-deck stacking animation:
1. The section eyebrow and title ("What Make Us Different?") are completely hidden.
2. The card track is repositioned significantly upward on the screen, centered vertically in the viewport, and fully visible without any bottom clipping or overlap from the desktop taskbar/dock.
3. The transitions are perfectly smooth and performant.

---

## 🔍 Root Cause Analysis
1. **Selector Discrepancy**: The ScrollTrigger toggles the class `.is-pinned` on the `host` element (`<section data-component="different">`). However, the CSS was using the selector `.different.is-pinned`, which expects `.is-pinned` to be on the inner `div.different`. Therefore, the header never faded out and the track never translated upward on scroll pin.
2. **Layout Space Contraction**: When the header fades out, it remains in the normal flow and still occupies its physical height (`~160px`), pushing the deck down. We need to completely collapse its height or shift the track up to reclaim this vertical space.
3. **Viewport Height Constraints**: On standard laptop viewports (`1080px` and below), the combination of high vertical section padding (`180px` top and bottom) and the header height pushes the `78vh` cards off the screen, causing them to clip at the bottom. Shrinking padding and translating the deck on pin resolves this.

---

## 🛠️ Proposed Changes

### Component: "What Makes Us Different?" (`different` component)

#### [MODIFY] [different.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/different/different.css)
- Update `.different.is-pinned` to `[data-component="different"].is-pinned .different` and `[data-component="different"].is-pinned .different__header` / `[data-component="different"].is-pinned .different__track`.
- Add a smooth transition to `.different`'s padding so it can shrink dynamically on scroll-pin:
  ```css
  .different {
    ...
    transition: padding 0.5s cubic-bezier(0.25, 1, 0.5, 1);
  }
  ```
- Reduce the padding-top and padding-bottom of `.different` when the section is pinned:
  ```css
  [data-component="different"].is-pinned .different {
    padding-top: clamp(24px, 4vh, 48px);
    padding-bottom: clamp(24px, 4vh, 48px);
  }
  ```
- Make the header fade out, transform upward, and set `visibility: hidden` so it's completely inactive:
  ```css
  [data-component="different"].is-pinned .different__header {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-40px);
    pointer-events: none;
  }
  ```
- Shift the cards container `.different__track` up by `translateY(-160px)` on pin to center it beautifully in the viewport:
  ```css
  @media (min-width: 769px) {
    [data-component="different"].is-pinned .different__track {
      transform: translateY(-160px);
    }
  }
  ```

#### [MODIFY] [different.js](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/different/different.js)
- Maintain the robust toggling of the `is-pinned` class inside ScrollTrigger's `onToggle` hook.
- Ensure the animations use clean GSAP contexts for absolute reliability.

---

## 📐 Verification Plan

### Manual Verification
1. Open the project in the browser at [http://localhost:5173/](http://localhost:5173/).
2. Scroll to the "What Makes Us Different?" section.
3. Verify that the moment the section pins, the section header fades out smoothly and disappears.
4. Verify that the cards slide up to a perfectly centered, high-resolution position on the screen.
5. Scroll through all three cards and confirm that no text or imagery is clipped at the bottom of the screen.
