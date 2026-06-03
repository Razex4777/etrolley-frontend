# Plan: Support Card Figma Match (Completed)

This plan outlines the changes to apply the exact Figma properties to the "Support & Help" card component (`.support__card`) to match the designer's specification.

## Checklist

- [x] Convert WhatsApp PNG icon to `/images/whatsapp.webp` using `sharp`
- [x] Convert Gmail PNG icon to `/images/gmail.webp` using `sharp`
- [x] Replace inline SVGs in `support.en.html` with new WebP images
- [x] Replace inline SVGs in `support.ar.html` with new WebP images
- [x] Apply Figma dimensions, border-radius, and background gradient to `.support__card` in `support.css`
- [x] Retain solid, opaque background (no transparency) for `.support__card` per user guidelines
- [x] Apply Figma size (`92px` × `91px`), border-radius (`25px`), and opacity (`1`) to `.support__btn`
- [x] Build the production environment successfully (`npm run build`)
- [x] Update project documentation (`docs/project_structure.md` and `docs/changelog.md`)

## Proposed Changes

### Support Component CSS

#### [MODIFY] [support.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/support/support.css)

Update `.support__card` selector style:
- Set `max-width: 1567px` and ensure it is centered (`width: 100%; margin: 0 auto;`).
- Set `min-height: clamp(320px, 20vw, 376px)`.
- Update `border-radius` to `25px` (from `48px`).
- Kept the card solid and fully opaque (no transparency or mix-blend-mode) as requested.
- Applied the gradient directly to the card:
  `background-image: linear-gradient(277.69deg, rgba(154, 181, 172, 0.1) -42.5%, #FEFFFF 44.45%, #FFFFFF 72.21%, rgba(245, 201, 154, 0.1) 108.19%)` with `background-color: #FFFFFF`.

Update `.support__btn` selector style:
- Set `width` to `clamp(64px, 6.4vw, 92px)` and `height` to `clamp(63px, 6.32vw, 91px)` (reaches exactly `92px` width and `91px` height on desktop).
- Set `border-radius` to `25px`.
- Ensure opacity is `1`.

### Image Asset Conversions
- Converted `"C:\Users\MSI-PC\Downloads\60bbc75598a25be17599e9a0cc9809932be2c6c5 (1).png"` to `public/images/whatsapp.webp` using `sharp`.
- Converted `"C:\Users\MSI-PC\Downloads\7bf40d0b3a053d8b846377ac6ecd5660e594bba4.png"` to `public/images/gmail.webp` using `sharp`.

### Support Component HTML

#### [MODIFY] [support.en.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/support/support.en.html)
- Replaced inline SVG inside `.support__btn--whatsapp` with an `<img>` referencing `/images/whatsapp.webp`.
- Replaced inline SVG inside `.support__btn--gmail` with an `<img>` referencing `/images/gmail.webp`.

#### [MODIFY] [support.ar.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/support/support.ar.html)
- Replaced inline SVG inside `.support__btn--whatsapp` with an `<img>` referencing `/images/whatsapp.webp`.
- Replaced inline SVG inside `.support__btn--gmail` with an `<img>` referencing `/images/gmail.webp`.

## Verification Plan

### Automated Build Check
- Ran `npm run build` successfully (Vite output compiled all pages to `dist/` with 0 warnings or errors).

## Review

All modifications have been successfully completed. The Support & Help block matches the Figma artboard dimensions and gradient style, features solid non-transparent background rendering per request, and uses the newly converted premium WebP icons for WhatsApp and Gmail contacts.
