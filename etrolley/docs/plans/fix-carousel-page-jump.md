# 📐 E-Trolley — Carousel Page Jump Fix Plan

This plan details the fix for the vertical page jump issue that occurs when clicking the clients/designs horizontal carousel arrows.

---

## 🛠️ Proposed Fix

### 1. Implement Global Carousel Arrow Interceptor in `main.js`
- [ ] Add a global event listener to `document` in `src/main.js` to intercept clicks on `.clients__arrow` and `.designs__arrow`.
- [ ] In the event listener:
  - Call `e.preventDefault()` to stop the default browser vertical jump.
  - Locate the target card using the `href` attribute.
  - Horizontally scroll the parent track container to the card's position smoothly.

### 2. Verify Build
- [ ] Run `npm run build` to verify Vite compiles cleanly.
- [ ] Verify that clicking the navigation arrows on both English and Arabic pages scrolls the track horizontally but does NOT jump the window scroll position vertically.
