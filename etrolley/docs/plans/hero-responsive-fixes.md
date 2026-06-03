# Hero Responsive Fixes Implementation Plan

We need to resolve the following layout issues in the Hero section on tablet/smaller desktop viewports:
1. **Empty space on the right**: Under tablet breakpoints (where the image is hidden), `.hero__row` still defines a two-column grid (`minmax(260px, auto) 1fr`), leaving a massive empty space on the right of the CTA button.
2. **Missing Follow & Social media icons**: The social links vertical rail is completely hidden on tablet (`max-width: 1180px`), leaving no way to follow on social media. We will display them horizontally at the bottom of the hero section, similar to the mobile layout.
3. **Hero Laptop Image visibility**: Ensure that the hero laptop and shopping bags illustration image is hidden cleanly on responsive tablet viewports where it starts to overflow or crowd the layout (from `max-width: 1180px` or `max-width: 1024px` depending on layout constraints).

## Proposed Changes

### 1. Style Changes
#### [MODIFY] [hero.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/hero/hero.css)
- Update `.hero__row` under media queries where the image is hidden (e.g., `max-width: 1180px` or `max-width: 880px`) to collapse to a single column (`grid-template-columns: 1fr;` or `display: flex; flex-direction: column; align-items: center;` depending on alignment).
- Allow `.hero__rail` (social links) to display as a horizontal bar at the bottom for tablet viewports (`max-width: 1180px` or `max-width: 880px`) instead of being completely hidden, or display it in `.hero__inner` stacking order.
- Ensure the hero laptop image is hidden properly at the tablet breakpoint.

## Verification Plan
1. Compile HTML pages by running `node scripts/compile-templates.mjs`.
2. Run bundle build `npm run build` to verify no compilation errors.
3. Verify that the CSS compiles and works correctly.
