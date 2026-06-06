# Plan — Unpin Pricing Table Headers & Mobile Responsive Card Accordion

Prevent the pricing comparison table header row from staying pinned or sticky on scroll. Additionally, implement an interactive mobile-optimized card accordion layout for small resolutions (tablet/mobile).

## User Review Required

> [!NOTE]
> For mobile viewports, the desktop side-by-side comparison table is hidden. Instead, we introduce a vertical stack of individual plan cards. Each card displays the plan details, a "Subscribe Now" button, a list of its features (hidden by default), and a toggle link ("View More" / "View Less" or "عرض المزيد" / "عرض أقل") to expand/collapse the features list.

## Proposed Changes

### pricespage component

#### [MODIFY] [pricespage.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/pricespage/pricespage.css)
- [x] Explicitly enforce `position: relative` (non-sticky) on `.pricespage__plan-header` and `.pricespage__plan-header--platinum`.
- [x] Ensure `.pricespage__corner` is non-sticky.
- [x] Style the mobile cards container `.pricespage__mobile-cards` and individual card layout `.pricespage__mobile-card` to match the design (border-radius, shadows, alignment, and spacing).
- [x] Style the inline features list inside the mobile card `.pricespage__mobile-card-features` with vertical rows, text-left/right, and checkmarks/unavailable icons.
- [x] Add media queries to hide the desktop table wrap (`.pricespage__table-wrap`) and show the mobile cards container (`.pricespage__mobile-cards`) on mobile viewports (e.g. `max-width: 880px` or `max-width: 980px`).

#### [MODIFY] [pricespage.en.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/pricespage/pricespage.en.html)
- [x] Add the mobile cards HTML markup below the desktop table wrap.
- [x] Include the 34 features mapped to checkmarks/unavailable icons inside each mobile card's feature block.
- [x] Add a simple vanilla JS toggle script at the bottom of the component to expand/collapse the mobile feature blocks and swap the toggle link text ("View More" / "View Less").

#### [MODIFY] [pricespage.ar.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/pricespage/pricespage.ar.html)
- [x] Add the mirrored RTL mobile cards HTML markup with Arabic translations.
- [x] Add the same simple vanilla JS toggle script with localized text swaps ("عرض المزيد" / "عرض أقل").

## Verification Plan

### Automated Build Verification
- [x] Compile template pages via `node scripts/compile-templates.mjs`.
- [x] Execute standard Vite production build: `npm run build` to verify there are no compilation or syntax errors.

### Manual Verification
- [x] On desktop, scroll the pricing table and verify headers scroll out of view naturally.
- [x] On mobile/small viewports (resize browser or inspect device mode), verify:
  - The side-by-side grid is hidden.
  - The vertical stack of plan cards is displayed.
  - Clicking "View More" expands the specific plan features list with checkmarks.
  - Clicking "View Less" collapses it back.

