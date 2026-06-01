# Plan — Pure CSS Sticky Card Stacking for "What Makes Us Different?" Section

This plan outlines the changes required to convert the "What Makes Us Different?" section to 100% pure HTML and CSS sticky card stacking, replacing the GSAP pinning logic that was removed.

## 🎯 Goal
Ensure that:
1. Cards (Card 01 through Card 05) stack naturally one on top of another as the user scrolls, replicating the premium card deck overlay transition.
2. The section does not require any JavaScript.
3. The visual appearance remains premium, high-resolution, and perfectly aligned on both desktop and mobile viewports.

---

## 🔍 Technical Approach
1. **Layout Flow Conversion**:
   - Change `.different__track` from a fixed-aspect-ratio container to a vertical flex container (`display: flex; flex-direction: column;`).
   - Remove `position: absolute` from `.different__slide` so they layout sequentially in vertical space.
2. **CSS Sticky Mechanics**:
   - Set `.different__slide` to `position: sticky; top: calc(var(--nav-h) + clamp(20px, 4vh, 60px));`.
   - Apply a responsive height to `.different__slide` (e.g., `height: 75vh` or `height: clamp(400px, 70vh, 750px)`).
   - Add a margin-bottom scroll runway (e.g., `margin-bottom: 25vh`) to each slide (except the last one `:last-child { margin-bottom: 0 }`).
   - Retain existing `z-index` assignments (`z-index: 1` through `z-index: 5`) so cards naturally overlay on top of each other.
3. **Mobile Adaptability**:
   - Apply sticky stacking on mobile viewports as well, adjusting height to `70vh` or `65vh` and margins accordingly to ensure elements fit on small screens without clipping.
4. **Header Flow**:
   - Allow the section title and eyebrow (`.different__header`) to scroll away naturally before the cards begin to stack.

---

## 🛠️ Proposed Changes

### Component: "What Makes Us Different?" (`different` component)

#### [MODIFY] [different.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/different/different.css)
- Reset track and slide dimensions to support natural vertical flow.
- Add sticky properties, height limitations, and scroll runway margins.
- Ensure correct styles on mobile viewports for clean scrolling/stackivity.

---

## 📋 Steps to Execute
- [ ] Create/Update the implementation plan
- [ ] Modify `different.css` to implement pure CSS sticky stacking on desktop
- [ ] Calibrate mobile styles in `different.css` to support sticky stacking on mobile
- [ ] Verify the layout and stacking behavior on both desktop and mobile
- [ ] Update `project_structure.md` and `changelog.md` to document the changes

---

## 📐 Verification Plan

### Manual Verification
1. Run Vite development server (`npm run dev`) and test the section in the browser.
2. Scroll to the "What Makes Us Different?" section.
3. Verify that cards stack smoothly on top of each other as you scroll down, and unstack when you scroll up.
4. Verify that no text, borders, or images are clipped at the edges of the screen on both desktop and mobile.
5. Run `npm run build` to ensure the project compiles and builds successfully without errors.
