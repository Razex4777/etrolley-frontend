# Plan — Build Contact Us Form Section from Figma Specs

Implement a new Contact Us section at the bottom of the home page (index.html / index-ar.html) based on Figma specifications, featuring input fields (Name, Email, Phone Number, Message), title, description, and converted WebP illustration.

## Proposed Changes

### contact component

#### [NEW] [contact.en.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/contact/contact.en.html)
- [x] Create English contact form markup containing the header, divider line, name, email, phone, message inputs, and CTA.

#### [NEW] [contact.ar.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/contact/contact.ar.html)
- [x] Create Arabic contact form markup with mirrored RTL direction and translated text strings.

#### [NEW] [contact.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/contact/contact.css)
- [x] Style the layout using Flexbox, applying Figma specs for dimensions, typography (Noto Sans Arabic, Outfit), border-radius, background, box shadow, and divider line.
- [x] Design fluid typography and padding sizes using `clamp()`.
- [x] Implement media queries to stack columns vertically on mobile and tablet screens.

### core integration

#### [MODIFY] [main.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/styles/main.css)
- [x] Add `@import '../components/contact/contact.css';` to import the new component styles.

#### [MODIFY] [index.base.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/index.base.html)
- [x] Add `<!-- INSERT: contact -->` placeholder right after the support section.

#### [MODIFY] [compile-templates.mjs](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/scripts/compile-templates.mjs)
- [x] Register the `contact` component in the `indexComponents` array to bundle it during template compilation.

### asset processing

#### [NEW] [contact-illustration.webp](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/public/images/contact-illustration.webp)
- [x] Convert the source PNG illustration using `sharp` to a web-optimized WebP asset.

## Verification Plan

### Automated Build Verification
- [x] Run `node scripts/compile-templates.mjs` to rebuild HTML files.
- [x] Run `npm run build` to verify the Vite asset pipeline is fully functional.

### Manual Verification
- [x] Check the bottom of the home page on desktop and mobile viewports to verify that the layout and alignment match the mockup.
- [x] Click the "Contact Us" links in the navbar on different pages and confirm it successfully navigates and scrolls to the `#contact` section.
