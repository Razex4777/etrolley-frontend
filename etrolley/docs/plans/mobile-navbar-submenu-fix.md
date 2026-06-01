# Mobile Navbar Submenu Fix Implementation Plan

We need to resolve the issue where mobile users cannot open or access the sub-sections of "About Us" (Our Story, Blogs, Designs) from the mobile sidebar navigation panel. 

## Proposed Changes

We will convert the static "About Us" mobile sidebar link into a pure CSS collapsible accordion/sub-menu.

### 1. Style Changes
#### [MODIFY] [mobile-menu.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/navbar/mobile-menu.css)
- Add CSS rules for accordion toggle utilizing hidden checkboxes.
- Define `.mobile-menu__submenu-toggle`, `.mobile-menu__submenu-trigger`, `.mobile-menu__submenu` and `.mobile-menu__chevron`.
- Match high-fidelity micro-interactions (staggers, hover slide shifts, text underlines, chevron rotation).
- Mirror direction alignments correctly for LTR and RTL viewports.

### 2. Markup Changes
#### [MODIFY] [navbar.markup.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/navbar/navbar.markup.html)
- Replace static "About Us" list item `04` with a toggle checkbox, styled trigger label, and nested submenu link list (`Our Story`, `Blogs`, `Designs`).

#### [MODIFY] [navbar.en.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/navbar/navbar.en.html)
- Reflect English version of the collapsible sub-menu.

#### [MODIFY] [navbar.ar.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/navbar/navbar.ar.html)
- Reflect Arabic version of the collapsible sub-menu.

## Verification Plan
1. Compile pages by running `node scripts/compile-templates.mjs`.
2. Run bundle build `npm run build` to verify no compilation errors.
