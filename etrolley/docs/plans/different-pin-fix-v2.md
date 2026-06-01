# Plan — Heading Pinning & Sticky Card Stacking Alignment

This plan outlines the specific changes required to align the card stacking and pinning behavior of the "What Makes Us Different?" section to match the reference video.

## 🎯 Goal
1. Pin the section header ("What Makes Us Different?") at the top of the viewport underneath the fixed navbar.
2. Stack the feature cards (Card 01 through Card 05) stickily right below the pinned header, preventing any clipping under the navbar.
3. Fix the grammatical error in the section header ("What Make Us Different?" -> "What Makes Us Different?").
4. Ensure the cards and headers fit on all viewports (desktop, tablet, mobile) without overlapping or vertical clipping.

---

## 🔍 Technical Approach
1. **Header Sticky Pinning**:
   - Apply `position: sticky; top: var(--nav-h); z-index: 10;` to `.different__header`.
   - Set a solid background color (`background: #F8F9FA;`) on the header with padding to mask scrolling cards and prevent bleed-through.
2. **Card Stacking Clearance**:
   - Set the sticky `top` for `.different__slide` to `calc(var(--nav-h) + clamp(100px, 14vh, 160px))` on desktop to position them perfectly below the pinned header.
   - Adjust card height to `clamp(380px, 58vh, 550px)` to guarantee cards and their titles remain fully visible within the viewport.
   - For mobile screens, pin the header at `top: var(--nav-h)` and cards at `top: calc(var(--nav-h) + clamp(70px, 10vh, 100px))` with height `clamp(400px, 60vh, 520px)`.
3. **Grammar Correction**:
   - Replace "What Make Us Different?" with "What Makes Us Different?" in both `index.html` and `index-ar.html`.

---

## 🛠️ Proposed Changes

### Component: "What Makes Us Different?"

#### [MODIFY] [different.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/different/different.css)
- Implement sticky pinning on `.different__header` with solid mask styling.
- Recalibrate `top` offset and heights for `.different__slide` on both desktop and mobile viewports.

#### [MODIFY] [index.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/index.html)
- Correct the grammatical typo in the heading.

#### [MODIFY] [index-ar.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/index-ar.html)
- Correct the grammatical typo in the heading.

---

## 📋 Steps to Execute
- [ ] Create/Update the plan docs
- [ ] Correct grammar in `index.html` and `index-ar.html`
- [ ] Update `.different__header` to be sticky in `different.css`
- [ ] Update card sticky `top` and height scales in `different.css` for desktop and mobile
- [ ] Verify build and scroll layout correctness

---

## 📐 Verification Plan
1. Open the dev server in the browser and scroll the section.
2. Verify that the header pins beneath the navbar and stays visible.
3. Verify that all cards scroll and stack neatly below the header, showing titles clearly.
4. Verify there are no overlapping or cut-off elements.
