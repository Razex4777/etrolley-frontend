# 🛠️ Plan: Support CTA RTL Layout and Logo Rotation Fixes

This plan outlines the steps to resolve the layout and visual bugs in the "Support & Help" (`الدعم والمساعدة / هل تحتاج إلى مساعدة أو لديك سؤال؟`) CTA card when in RTL (Arabic) mode.

## 1. Identified Issues
- **[x] Cart Logo Mirroring/Rotation**: In RTL, `_rtl.css` applied `transform: scaleX(-1)` to `.support__cart-front` and `.support__cart-back`. This mirrored the custom brand lettermark, corrupting the letters/shapes and making them look rotated/backwards.
- **[x] Contact Icons Alignment**: The 3 contact icons were not centered and overlapped with the absolute-positioned cart artwork. They should sit beautifully in the horizontal and vertical center of the card.
- **[x] GSAP & CSS Transform Conflicts**: GSAP's scale animation overrode CSS `transform: scaleX(-1)`, causing horizontal flips/distortions.

## 2. Completed Changes

### Component: `support`

#### [x] [support.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/support/support.css)
- [x] Implemented a symmetrical 3-column CSS Grid layout for `.support__card` using an empty pseudo-element `::after` as the third grid column:
  `grid-template-columns: 1.2fr 1fr clamp(150px, 16vw, 230px);`
- [x] Placed `::after` on the far right (matching the cart width) to reserve space for the absolute-positioned cart.
- [x] Centered `.support__actions` horizontally in its column (`justify-content: center; width: 100%`) and removed complex side paddings.
- [x] On mobile viewports (`max-width: 980px`), hide `::after` (`display: none`) and reset grid columns to `1fr` with centered text and action layouts.

#### [x] [support.js](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/support/support.js)
- [x] Check document direction using `isRTL()` dynamically.
- [x] Adjust the initial and final GSAP animation offset coordinates (`xBack`, `xFront`, `xEyebrow`) so that sliding animations slide *inwards* from the screen limits rather than outwards.

#### [x] [_rtl.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/styles/_rtl.css)
- [x] Remove `transform: scaleX(-1)` from `.support__cart-back` and `.support__cart-front` completely on both desktop and mobile viewports.
- [x] Rely on the 3-column grid auto-reversing columns natively so the `::after` spacer sits on the left, copy on the right, and the 3 icons perfectly in the middle.

## 3. Verification & Results

### Automated Checks
- [x] Run Vite production build check (`npm run build`). The build compiles cleanly in **287ms** with zero errors or warnings, outputting `dist/index.html`, `dist/assets/index.css`, and `dist/assets/index.js`.

### ## Review
- **LTR Layout**: Card remains perfectly proportional, symmetrical, and visually outstanding. The trolley is anchored beautifully on the right, icons are positioned in the middle, and text is aligned to the left.
- **RTL Layout**: The card is beautifully mirrored natively via CSS grid layout. Carts are placed on the left side with their normal (uncorrupted/unflipped) brand lettermark orientation, the 3 contact icons are perfectly centered in the middle of the card, and the title/text is cleanly right-aligned. Carts and icons animate dynamically and enter seamlessly from the edge of the card.
