# Plan — Standalone Contact Us Page & Form Layout Completion

Complete the Figma-accurate styling for the Contact Us section and compile it as a standalone page (`contact.html` and `contact-ar.html`) rather than embedding it inside the home page. Update all navbar and footer references to link directly to this page.

## Proposed Changes

### contact component

#### [MODIFY] [contact.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/contact/contact.css)
- Implement layout styles for `.contact__map-section` (Block 2):
  - Desktop: flex container (`justify-content: space-between`, `align-items: center`, `gap: 40px`).
  - Mobile: vertical column stack.
  - Image block `.contact__map-box` styled with width `100%`, max-width `795px`, height `309px`, and `border-radius: 10px`.
  - Address title ".contact__address-title" styled with `font-size: 36px`, weight `700`, color `#316C6B`.
  - Address divider ".contact__address-divider" with width `100%`, max-width `673px`, color `#9AB5AD`, height `0`.
  - Info items (`(+974)50988700` and emails) styled with `font-size: 24px`, weight `500`, color `#121212`, aligning SVG icons and text cleanly.
- Implement layout styles for `.contact__complaints-section` (Block 3):
  - Row header layout for the complaints title/intro:
    - Image `.contact__complaints-image`: `512px × 388px` on desktop, auto on mobile.
    - Eyebrow ".contact__complaints-eyebrow" styled with a line slider and text `complaints` (`font-size: 24px`, color `#212121`).
    - Heading `.contact__complaints-heading`: `font-size: 40px`, weight `600`, line-height `50px`, color `#121212`.
  - Form inputs grid `.contact__complaints-fields`:
    - 2-column grid (`grid-template-columns: repeat(2, 1fr)`) with `gap: 24px` on desktop.
    - Stacks to 1-column on mobile.
    - Fields styled matching Figma specifications: `height: 101px`, `border-radius: 5px`, padding `15px 20px`, box-shadow `0px 0px 20px 0px #DFDFDF`, background `#FFFFFF`.
    - Textarea message wrapper `.contact__field--fullwidth` spans both columns (`grid-column: 1 / -1`) with height `189px`.
    - Custom select dropdown styling: hiding browser default arrow, inserting brand SVG arrow (`.contact__select-arrow`) aligned using `inset-inline-end`.
    - Submit button `.contact__complaints-submit-btn`: background `#316C6B`, height `102px`, border-radius `8px`, font-size `18px`, color `#FFFFFF`, width `100%`, max-width `473px`.

### page integration & routing

#### [NEW] [contact.base.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/contact.base.html)
- Create a base page shell template for compiling the contact pages. It will import `main.css` and contain `<!-- INSERT: contact -->`.

#### [MODIFY] [navbar.en.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/navbar/navbar.en.html)
- Change Contact link `href` from `#contact` to `contact.html`.

#### [MODIFY] [navbar.ar.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/navbar/navbar.ar.html)
- Change Contact link `href` from `#contact` to `contact-ar.html`.

#### [MODIFY] [footer.en.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/footer/footer.en.html)
- Change Contact link `href` from `#contact` to `contact.html`.

#### [MODIFY] [footer.ar.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/footer/footer.ar.html)
- Change Contact link `href` from `#contact` to `contact-ar.html`.

#### [MODIFY] [index.base.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/index.base.html)
- Remove the contact page insertion tag `<!-- INSERT: contact -->`.

#### [MODIFY] [compile-templates.mjs](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/scripts/compile-templates.mjs)
- Remove `contact` from `indexComponents`.
- Add compilation process for `contact.html` and `contact-ar.html` using a dedicated `contactComponents = ['navbar', 'contact', 'footer']` array.
- Implement URL replacements inside the compiled navbar and footer templates (e.g. replacing `#services` with `index.html#services` when compiled on the contact page, and setting `is-active` class to the Contact menu item).

## Verification Plan

### Automated Verification
- Run template compiler: `node scripts/compile-templates.mjs`
- Run production build: `npm run build`

### Manual Verification
- Verify that `index.html` and `index-ar.html` no longer contain the Contact Us section.
- Verify clicking "Contact Us" links on the Navbar and Footer correctly routes to `contact.html` / `contact-ar.html` from all pages.
- Verify active states and links on `contact.html` / `contact-ar.html`.
