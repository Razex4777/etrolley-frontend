# Implementation Plan — Static About Us Page (Zero-JS)

This plan outlines the architecture and execution steps for building the brand new **About Us** page for E-Trolley in LTR English (`about.html`) and RTL Arabic (`about-ar.html`). The page will be fully static (pure HTML/CSS, zero JavaScript runtime).

## User Review Required

> [!IMPORTANT]
> **Page Entry Points**: Rollup configuration inside `vite.config.js` will be updated to bundle `about.html` and `about-ar.html` along with the standard landing pages.
> **Asset Optimization**: The provided Figma illustration `C:\Users\MSI-PC\Downloads\about-us.png` will be copied and converted to high-performance WebP (`about-us.webp`) inside `public/images/` to maintain the fast speed of the site.

## Proposed Changes

### Build & Compilation Configuration

#### [MODIFY] [vite.config.js](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/vite.config.js)
- Add new multi-page entry points to `rollupOptions.input`:
  - `about: './about.html'`
  - `about_ar: './about-ar.html'`

#### [MODIFY] [compile-templates.mjs](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/scripts/compile-templates.mjs)
- Extend compilation to compile both `index` pages and the new `about` pages.
- Create `src/about.base.html` to act as the shell template for the About Us pages (loading Navbar, About Us content, Support, and Footer).

### Components & Layout Authering

#### [NEW] [about.base.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/about.base.html)
- A dedicated base shell page for the About Us pages, containing:
  - `<html lang="[LANG]" dir="[DIR]">`
  - Global CSS sheets linked directly in the `<head>` (zero-JS loading).
  - Main container `<main>` holding compiled templates:
    - Navbar component
    - About Us content component
    - Support CTA component
    - Parallax Footer component

#### [NEW] [about.en.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/about/about.en.html)
- Sourced text: *"Ideas are transformed into beautiful things by E-Trolley."* (H1 title) and description columns.
- Layout contains:
  - **No-container full-screen block** spanning exactly flush to edge (no side margins).
  - Left content block with Display Outfit headline + double-paragraph columns.
  - Right content block with the optimized `about-us.webp` illustration.

#### [NEW] [about.ar.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/about/about.ar.html)
- Authored static Arabic translation of the About Us section mirroring LTR perfectly.
- Mirrored columns: text aligned right, layout flipped for RTL reading order.

#### [NEW] [about.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/about/about.css)
- A high-end styling file containing:
  - Full-width screen layouts (no structural `.container` or container margins on the parent block).
  - Balanced typography with Outfit display hierarchy.
  - Mirrored grids and flex directions inside `[dir="rtl"]`.
  - Responsive media breakpoints down to small screen sizes.

#### [MODIFY] [main.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/styles/main.css)
- Import the new `src/components/about/about.css` stylesheet in the aggregator.

## Verification Plan

### Automated Build Check
- Run `node scripts/compile-templates.mjs` to ensure the new static output compiles flawlessly.
- Run `npm run build` to verify the Rolldown compiler successfully bundles both pages under `dist/` with optimized static styles.

### Manual Verification
- Validate the LTR/RTL page layout visually.
- Verify the first section block expands flush to the edge.
- Confirm the parallax footer behaves perfectly and links are 100% responsive.

## Review

- **Implementation**: Fully implemented the English (`about.html`) and Arabic (`about-ar.html`) static pages, converted Figma `about-us.png` to optimized `about-us.webp`, and integrated language switchers.
- **Link Integrity**: Section anchors in navbar and footer correctly rewrite to target landing page anchors (`index.html#section` / `index-ar.html#section`), while language dropdown menu items correctly target `about.html` and `about-ar.html`.
- **Zero-JS Requirement**: All interactive features (dropdowns, mobile menu, language toggling, layouts) are driven purely by CSS and static HTML templates with no JavaScript.
- **Build Status**: Verified local compilation and Vite production build succeeds flawlessly.

