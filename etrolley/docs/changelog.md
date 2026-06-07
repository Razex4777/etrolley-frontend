# 📜 E-Trolley — Changelog

> Append-only history. Trim oldest entries when this file approaches 500 lines.

# 2026-06-07 07:06

- **Adjusted Desktop Illustration Container Size**:
  - Resized the right illustration column (`.createstore__right`) on desktop to a balanced `720px` width (originally `820px`, scaled down to `650px`, then tuned up to `720px`) to prevent vertical page scrolling while keeping images visible and premium.

# 2026-06-07 07:02

- **Updated Hero CTA Routing**:
  - Linked the English home hero page CTA button directly to the standalone `create-store.html` page.
  - Linked the Arabic home hero page CTA button directly to the standalone `create-store-ar.html` page.

# 2026-06-07 07:00

- **Optimized Mobile Responsiveness and Alignments for Login & Registration 3**:
  - Removed hardcoded inline style attributes from `login.en.html` and `login.ar.html` input fields to allow them to inherit the clean, responsive `.createstore__field` styles defined in `createstore.css` (height scaling to 80px/70px and auto-scaling flex gap).
  - Centered all form components inside the 600px form width container to match Registration 2 updates.

# 2026-06-07 06:59

- **Optimized Mobile Responsiveness and Alignments for Registration Steps 2 & 3**:
  - Aligned all form boxes (`.createstore__cost-box`, `.createstore__field--coupon`, `.createstore__domain-row`) to start (left in LTR, right in RTL) on mobile by replacing `margin: 0 auto` centering with dynamic `margin: 0 0 20px 0`.
  - Refactored mobile submit buttons (`.createstore__submit-btn` and `.createstore.is-register-page .createstore__submit-btn`) to use compact layout properties: changed `width` from `100%` to `auto` with `min-width: 240px` and `max-width: 100%` preventing full-width layout stretching.
  - Centered the root form container (`.createstore__form` and `.createstore.is-register-page .createstore__form`) at `max-width: 600px; margin: 0 auto;` on mobile/tablet viewports. This resolves misalignment where registration fields centered, but lower slug blocks/links and action buttons stayed left-aligned.

# 2026-06-07 06:56

- **Reduced Spacing Between Registration Fields and Store Domain Link on Mobile**:
  - Decreased the vertical empty space between the `Confirm Password*` field block and the `https://etrolley.net/store` link on mobile.
  - Reduced `.createstore.is-register-page .createstore__register-grid` margin-bottom from `25px` to `10px` inside the `1180px` media query.
  - Reduced `.createstore.is-register-page .createstore__form` flex gap from `25px` to `15px` on mobile viewports.
  - Set `.createstore.is-register-page .createstore__slug-block` margin-top from `15px` to `5px` on mobile resolutions.

# 2026-06-07 06:48

- **Implemented Login Pages & Fixed Checkbox Text Wrap**:
  - Created standalone Login pages `login.html` and `login-ar.html` using a modular component layout structure.
  - Linked entry points in `vite.config.js` and registered the template compilation paths inside `compile-templates.mjs`.
  - Added CSS rule `white-space: nowrap;` to `.createstore__domain-text` on desktop screens to force the domain checkbox text to render in one line, resetting to `white-space: normal;` on mobile breakpoints.

# 2026-06-07 06:45

- **Implemented Registration V3 Pages & Checkbox Redirect Routing**:
  - Created Arabic step 3 component `registration3.ar.html` and layout base template `registration3.base.html`.
  - Configured template compiler script `compile-templates.mjs` to auto-compile `registration3.html` and `registration3-ar.html`.
  - Added new build outputs `registration3` and `registration3_ar` within `vite.config.js`.
  - Implemented custom styling for expanded cost summary details `.createstore__cost-box.is-expanded` and custom domain cost warnings `.createstore__domain-hint` matching figma typography.
  - Linked onclick redirects to checkbox input elements to simulate prototype navigation behavior toggling between V2 and V3 pages.

# 2026-06-07 06:33

- **Split Multistep Wizard into Separate Page Routes**:
  - Split the single-page wizard into `create-store.html`, `verification.html`, and `registration.html` (and their respective `-ar.html` Arabic mirrors).
  - Used `localStorage` to pass the validated phone number from Step 1 (`create-store.html`) to Step 2 (`verification.html`) for dynamic localization.
  - Implemented exact Figma dimensions for registration form: fields styled with `height: 100px`, `border-radius: 5px`, `padding: 15px 20px`, and box shadow `0px 0px 20px 0px #DFDFDF`.
  - Structured the Slug section to layout side-by-side matching the Figma layout grid, aligning the `https://etrolley.net/store` link on the left column and the `Slug*` input on the right column.
  - Configured Vite and layout templates compiler to bundle the 4 new pages.

# 2026-06-07 06:28

- **Expanded Registration Step to Full Width & Hid Right-Side Graphics**:
  - Modified wizard step transition logic in `createstore.en.html` and `createstore.ar.html` to toggle a dynamic class `.is-register-active` on the root section container when the active step is `#step-register`.
  - Added CSS rules in `createstore.css` to hide the right-side graphics column completely (`.createstore__right`) and expand the form container (`.createstore__left`) to `100%` width.
  - Set `.createstore__register-grid` columns to double width on desktop for registration fields layout spread.

# 2026-06-07 06:25

- **Implemented Interactive Multistep Store Creation Flow**:
  - Structured step panels with horizontal transition slide animations in `createstore.css` to allow contents on the left to slide dynamically while keeping right side illustrations static.
  - Implemented Step 2 (Verification layout): added 6-digit verification code inputs with automatic focus shift forwards/backwards, a 22-second resend countdown timer, and validation requiring code `11111` or `111111` to proceed.
  - Implemented Step 3 (Registration layout): added owner name, localized store names, password fields, custom select dropdown block, base URL text with inline SVG warning icon `!`, and dynamic Slug input.
  - Integrated javascript routing in templates to capture validation on `+974 3343 3313` and redirect wizard steps.

# 2026-06-07 06:00

- **Optimized Create Store Page Responsiveness**:
  - Hid the right column illustration graphics, banner overlays, and carts artwork completely on viewports under `1180px` (`display: none !important`).
  - Centered all form elements, title headings, subtitles, checkbox rows, helper labels, and Continue CTAs on mobile/tablet viewports to match Figma spec mockups.
  - scaled down padding, margins, phone validation input containers, and button sizes progressively across multiple breakpoints (tablet, standard mobile, and extra small screens) for premium fluid rendering.

# 2026-06-07 05:58

- **Removed Brand Footer from Create Store Page**:
  - Excluded the `'footer'` component template from the compile pipeline arrays in [compile-templates.mjs](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/scripts/compile-templates.mjs) for `createStoreComponents`.
  - Removed `<!-- INSERT: footer -->` comment marker from [create-store.base.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/create-store.base.html).
  - Recompiled page templates to update static HTML build files.

# 2026-06-07 05:45

- **Implemented Create Store Design Subpages**:
  - Created standalone pages `create-store.html` and `create-store-ar.html` via compiler script.
  - Implemented custom country code phone prefix dropdown widget.
  - Symmetrical columns matching Figma dimensions with glassmorphism (blur 67px) banner overlay.
  - Sourced homepage services cart SVGs into the right-hand corner decoration.
  - Updated global navbars and footers to route CTA clicks to the new store creation flow.

# 2026-06-07 05:40

- **Fixed Top Navbar Padding Overlap**:
  - Increased top padding of `.contact` section to `clamp(120px, 10vw, 160px)` on desktop and `120px` on mobile viewports. This ensures the page title "KEEP IN TOUCH" clears the fixed top navigation bar layout elements and renders beautifully without overlapping.

# 2026-06-07 05:38

- **Optimized Mobile Sizing & Hidden Illustrations on Mobile**:
  - Hidden illustrations in Block 1 (`contact-illustration.webp`) and Block 3 (`complaints-illustration.webp`) on viewports below `980px` (`display: none;`) to keep mobile forms clean and clean.
  - Sized down mobile contact fields card container heights from `101px` to `80px` and text placeholder sizes to `16px`.
  - Scaled down textarea height to `140px` and primary submit buttons to `72px` height on mobile viewports for compact screen fitting.
  - Trimmed down display typography headings (Title, Address, Info rows, and Complaints heading) to balanced sizes on mobile.

# 2026-06-07 05:35

- **Implemented Modern Custom Dropdown & Centered Field Placeholders**:
  - Replaced native select dropdowns with a premium custom UI select dropdown trigger (`.contact__select-custom`) that matches the exact vertical alignment of the SVG arrow and text placeholder on a single horizontal line.
  - Centered input placeholders vertically inside the `101px` height card fields with a larger `20px` typography and `#757575` color.
  - Hidden labels visually using `.sr-only` to match Figma mockup structure where only centered placeholder text is present inside the fields.
  - Injected lightweight event syncing logic in `contact.base.html` to toggle the custom options list listbox, update option selections, and sync with hidden select forms.

# 2026-06-07 05:30

- **Created Standalone Contact Page and Completed Form Styling**:
  - Moved the contact form out of the home page (`index.html`/`index-ar.html`) into dedicated pages `contact.html` and `contact-ar.html`.
  - Created a base HTML template `src/contact.base.html` for compiling the contact pages.
  - Completed Figma-accurate CSS layout and styling for Map & Address (Block 2) and Complaints Form (Block 3) in `contact.css`.
  - Updated all navigation and footer menu links in EN/AR files to route directly to `contact.html`/`contact-ar.html` instead of `#contact`.
  - Registered contact pages in `vite.config.js` and updated the template compiler to build them successfully.

# 2026-06-07 05:19

- **Figma-Aligned Submit Button & Removed Input Placeholders**:
  - Resized the contact form `.contact__submit-btn` to matches Figma specifications: `width: 100%`, `max-width: 473px`, `height: 102px`, and `border-radius: 8px` with `14px 30px` padding.
  - Set the button text style to Noto Sans Arabic with regular weight `400` and size `18px`.
  - Removed all `placeholder` attributes from input and textarea elements inside [contact.en.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/contact/contact.en.html) and [contact.ar.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/contact/contact.ar.html) to matches Figma.
  - Recompiled templates and built Vite assets cleanly.

# 2026-06-07 05:17

- **Aligned Contact Us Form Inputs and Placeholders with Figma Mockup**:
  - Replaced `justify-content: space-between` with `justify-content: flex-start` and a clean `gap: 8px` on `.contact__field` elements. This shifts input fields immediately below their labels to eliminate excessive whitespace gaps.
  - Set `opacity: 1` and changed color to `#9E9E9E` for `::placeholder` targets on inputs and textareas inside `contact.css`, preventing browser default opacity overrides from making placeholder text invisible.
  - Capitalized the message field label to `Message Here..` in `contact.en.html`.
  - Recompiled templates and built Vite assets cleanly.

# 2026-06-07 05:15

- **Added Figma-Accurate Contact Us Form Section**:
  - Created a new `contact` component with templates `contact.en.html`, `contact.ar.html`, and `contact.css` matching all Figma specifications (dimensions, shadows, typography, and line separators).
  - Converted the source PNG contact illustration to web-optimized WebP format using `sharp` at `public/images/contact-illustration.webp`.
  - Registered the component in `compile-templates.mjs` and inserted it into `index.base.html`.
  - Imported `contact.css` inside `main.css`.
  - Recompiled templates and built Vite assets cleanly.

# 2026-06-07 05:08

- **Made Desktop Pricing Grid Elements Fluid and Fully Responsive**:
  - Changed `.pricespage__subscribe-btn` width from a fixed `242px` to a fluid `width: 100%; max-width: 242px;`. This ensures that on smaller desktop/laptop viewports where column widths shrink below `242px`, the buttons scale down nicely instead of overflowing column dividers.
  - Converted plan titles, pricing amounts, currency labels, and feature row text labels to use fluid CSS `clamp()` font sizes (e.g. `clamp(14px, 1.2vw, 18px)` and `clamp(24px, 2.5vw, 35px)`), preventing text overflows or wrapping issues on smaller desktop resolutions.
  - Recompiled templates and built Vite assets cleanly.

# 2026-06-07 05:05

- **Fixed Pricing Page Responsiveness & Table Overflow Across Viewports**:
  - Increased the mobile cards breakpoint from `880px` to `1180px` in `pricespage.css` to prevent the desktop comparison grid from overflowing or being clipped on medium/tablet viewports (like iPad Pro/Air and small laptops).
  - Redesigned the mobile card container `.pricespage__mobile-cards` to use a responsive CSS grid:
    - 1-column layout on small mobile screens (`<600px`).
    - 2-column grid layout on tablets and intermediate screens (`600px` to `1180px`), creating a clean 2x2 square-shaped layout for the 4 plans instead of overly stretched cards.
  - Recompiled templates and built Vite assets cleanly.

# 2026-06-07 00:07

- **Removed Horizontal Separator Lines from Mobile Features Accordion**:
  - Removed `border-top` from `.pricespage__mobile-card-features` and `border-bottom` (dashed separators) from `.pricespage__mobile-feature-row` inside `pricespage.css`.
  - Recompiled page templates and built Vite production assets successfully.

# 2026-06-07 00:06

- **Refined Mobile Card Borders to Match Figma Corner-only Left/Right Lines**:
  - Replaced card-level border definitions in `pricespage.css` with dynamic `::before` (top cap) and `::after` (bottom cap) pseudo-elements.
  - Sized pseudo-elements to `height: 60px` and set borders on three sides (`border-top`/`border-bottom` and `border-left`/`border-right`) to draw corner curves and let the vertical border segments extend downwards/upwards for exactly `60px` before terminating cleanly, matching the `App Store (Pro)` border style.
  - Recompiled templates and built Vite assets cleanly.

# 2026-06-07 00:05

- **Styled Mobile Pricing Cards to be Full-Width and Borderless on Left and Right**:
  - Removed vertical border lines (`border-left: none` and `border-right: none`) from `.pricespage__mobile-card` and `.pricespage__mobile-card--platinum` class rules in `pricespage.css` while keeping the `border-radius: 25px` property so corners curve naturally.
  - Set `max-width: 100%` on mobile pricing cards to make them stretch full-width.
  - Updated the toggle click event handler in both English (`pricespage.en.html`) and Arabic (`pricespage.ar.html`) component templates to toggle the `.is-expanded` class on the parent `.pricespage__mobile-card` container element.
  - Successfully recompiled all HTML templates and completed the production build.

# 2026-06-06 23:35

- **Unpinned Pricing Table Headers and Created Mobile Accordion Layouts**:
  - Enforced `position: relative` layout on plan headers and disabled any sticky/pinned behavior in the viewport.
  - Implemented responsive styles under `@media (max-width: 880px)` to hide the wide desktop comparison grid and display individual collapsible cards.
  - Formatted mobile cards for Mini, Pro, App, and Platinum packages including a localized "View More" / "View Less" button linking a simple toggle script.
  - Recompiled all page templates and generated production Vite assets cleanly.

# 2026-06-06 19:03

- **Forced Left Border Priority on Platinum Card in RTL Mode**:
  - Appended `!important` to the `border-left` and `border-right` rules of the Platinum header card overrides inside [pricespage.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/pricespage/pricespage.css). This overrides the higher specificity of the standard sibling adjacent selector, restoring the leftmost card outline in RTL.
  - Recompiled page templates and completed the production assets build cleanly.

# 2026-06-06 19:00

- **Fixed RTL Header Card Text Alignment & Restored Platinum Left Border**:
  - Corrected the flex cross-axis alignment selector `html[dir="rtl"] .pricespage__plan-header` in [pricespage.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/pricespage/pricespage.css) from `align-items: flex-end` to `align-items: flex-start`. This properly aligns plan details (name, price, period) to the right side of the card in RTL layout mode.
  - Added an explicit border selector for `.pricespage__plan-header--platinum` in RTL to preserve both the left and right border lines on the Platinum header card, preventing adjacent sibling overrides from removing its leftmost column boundary.
  - Recompiled pages and completed the production build.

# 2026-06-06 18:59

- **Aligned Platinum Card "New" / "جديد" Badge with Plan Info Layout**:
  - Refactored `.pricespage__new-badge-container` in [pricespage.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/pricespage/pricespage.css) to align left (flex-start) in LTR and right (flex-start inside RTL context) in RTL.
  - Set padding to match card headers (`clamp(16px, 1.8vw, 28px)`), ensuring the "New" badge aligns cleanly above the "Platinum" title.
  - Recompiled page templates and ran Vite production assets build.

# 2026-06-06 18:58

- **Fixed Right Boundary Clipping of Platinum Plan Card Rounded Corners**:
  - Added `padding-right: 13px` to the scrollable comparison container `.pricespage__table-wrap` in [pricespage.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/pricespage/pricespage.css) to match the left side padding.
  - Removed the asymmetric RTL override layout rule so both LTR and RTL directions maintain symmetrical spacing, preventing parent element border-radius clipping of the outermost columns.
  - Recompiled pages and ran the production assets build cleanly.

# 2026-06-06 18:57

- **Removed Bottom Rounded Corners from Pricing Grid**:
  - Deleted border-radius rules targeting the last cells and the overall grid in [pricespage.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/pricespage/pricespage.css) to prevent the bottom-right or bottom-left corners of the comparison table from being rounded.
  - Recompiled page templates and completed the production build successfully.

# 2026-06-06 18:54

- **Centered Feature Check Icons and Added Vertical Grid dividers**:
  - Added `justify-content: center` to `.pricespage__feature-check` in [pricespage.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/pricespage/pricespage.css) to center both checkmarks and unavailable crosses inside the middle of their respective columns.
  - Implemented vertical grid borders between comparison columns by adding `border-right: 1px solid #9FB9B3` to `.pricespage__feature-check` in LTR and swapping to `border-left: 1px solid #9FB9B3` in RTL layout configurations.
  - Recompiled all page templates and ran the production assets build successfully.

# 2026-06-06 18:45

- **Styled Unavailable Feature Icons on Prices Comparison Table**:
  - Added CSS style rule for `.pricespage__unavailable-icon` in [pricespage.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/pricespage/pricespage.css) to enforce the original `24px` by `24px` SVG dimensions, preventing stretching and aspect-ratio distortion caused by the default `30px` width and `25px` height applied to checkmark icons.
  - Verified package feature availability matrix matches the user's plan.
  - Recompiled page templates and ran Vite build.

# 2026-06-06 18:24

- **Refined Prices Table Staggered Line Extensions & Selector Fix**:
  - Fixed CSS selector targeting the last label cell by using `:nth-last-child(5)` instead of tag-specific `:last-of-type` (which was matching nothing since check cells are also `div`s).
  - Increased the leftmost vertical accent line (1st line) extension length to `200px` below the last row.
  - Extended the vertical line between the label column and Column 1 (2nd line) by `40px` past the bottom of the table using a dynamic `::before` pseudo-element.
  - Adjusted the staircase offset logic across remaining column dividers (3rd line stops 3 rows early, 4th stops 6 rows early, 5th stops 9 rows early, and 6th stops 12 rows early) to form a perfect staircase going up.
  - Recompiled page templates and ran production build successfully.

# 2026-06-06 18:22

- **Matched Prices Table Borders & Staggered Lines with Figma Mockup**:
  - Removed all horizontal row line borders from checkmark cells (`.pricespage__feature-check`) to make comparison area clean.
  - Implemented a vertical extension using a `::after` pseudo-element on the last `.pricespage__feature-label` to carry the leftmost accent line 100px past the bottom of the table.
  - Aligned and staggered all columns' vertical dividers dynamically at the bottom, including the outer boundary of the Platinum column.
  - Executed production Vite compilation and build.

# 2026-06-06 18:20

- **Expanded Pricing Comparison Table & Removed Eyebrow Slider**:
  - Populated the comparison table in both English (`pricespage.en.html`) and Arabic (`pricespage.ar.html`) with the full expanded list of 34 features.
  - Mapped features logically across Web Store (Mini), Web Store (Pro), App Store (Pro), and Platinum tiers with checkmarks and dashes.
  - Removed the horizontal slider track and knob from the eyebrow next to "compare packages" / "مقارنة الباقات" as requested.
  - Hid the horizontal scrollbar visually from `.pricespage__table-wrap` using CSS properties (`scrollbar-width: none`, `display: none` for Webkit scrollbars) to keep the table container neat while retaining horizontal touch scroll functionality.
  - Implemented staggered bottom endpoints (stepped vertical dividers) for the table's internal column lines in CSS to match Figma (each successive column line stops higher up).
  - Ran the production Vite compile and build to output updated HTML pages.

# 2026-06-06 18:10

- **Fixed Prices Table Menu Topics Layout & Accent Circles**:
  - Aligned double-circle decorative elements next to Compare Packages with the exact 25px by 25px sizes and 1px border specs from the homepage Support component.
  - Removed grid-level borders and background from `.pricespage__corner` to completely clear out the top-left empty block, rendering it transparent and borderless.
  - Implemented cell-specific borders (top, bottom, outer right/left boundaries) to enclose only active plan columns and comparison check rows, matching Figma specs exactly.
  - Removed absolute `.pricespage__accent-line` elements and nested the double-circle knob inside the first feature label cell, using the cell's left/right border to draw the vertical accent line dynamically starting exactly from the header/button line downwards.
  - Added a vertical line extension above the top circle of the accent knob (`::before` pseudo-element on `.pricespage__accent-knob`) matching the Figma illustration.
  - Resolved RTL styling inconsistencies on the corner cell `.pricespage__corner` by mirroring borders (left border instead of right border in RTL).

# 2026-06-06 18:00

- **Redesigned Prices Table Headers & Checkmarks**:
  - Restructured `pricespage.css` to remove grid container `overflow: hidden`, keeping the first three plan headers flat (non-rounded) and same height.
  - Made the Platinum plan header stand out taller (`margin-top: -24px`) with custom rounded top corners (`border-radius: 20px 20px 0 0`) and clean shadow effects.
  - Added `padding-top: 24px` to the `.pricespage__table-wrap` container and aligned the accent line `.pricespage__accent-line` to `top: 24px` to prevent the parent overflow-x scroll container from clipping the rounded top corners of the Platinum card.
  - Refactored the Platinum "New" badge container style: removed the border-bottom horizontal line entirely to match the Figma original card design, creating a single continuous header card with "New" text at the top and "Platinum" details below, with rounded top corners.
  - Aligned plan header text left (`align-items: flex-start`, `text-align: left`) for English (LTR) and right (`align-items: flex-end`, `text-align: right`) for Arabic (RTL) while keeping the action button perfectly centered in the middle of each card.
  - Set exact Figma inspect fonts: plan name (`Web Store (Pro)`) to `18px` bold `#316C6B` and price amount (`1699 QAR`) to `35px` bold `#121212` with `40px` line-height.
  - Sized the subscribe action buttons `.pricespage__subscribe-btn` to exact Figma specifications: `width: 242px`, `height: 42px`, `border-radius: 7px`, and `padding: 10px 0`.
  - Updated verified checkmark checkboxes to the new combined single SVG (`30x25` viewport) consisting of both the green square frame and the checkmark path vector.
  - Recompiled page templates and ran the production build successfully.

# 2026-06-06 17:55

- **Aligned Prices Page Eyebrow circles slider with support section**:
  - Replaced the line-and-circles eyebrow layout in both English (`pricespage.en.html`) and Arabic (`pricespage.ar.html`) prices page templates with the slider track and double-circle knob pattern from the homepage's "Support & Help" block.

# 2026-06-06 17:45

- **Added Standalone Prices Comparison Page**:
  - Created new `pricespage` component with comparison table showing Web Store (Mini), Web Store (Pro), App Store (Pro), and Platinum packages.
  - Styled with custom CSS grid (`pricespage.css`), column/row dividers, custom teal checkmarks, and a gold-themed highlight layout with bottom curved border for the Platinum plan matching Figma specifications.
  - Built localized English (`pricespage.en.html`) and Arabic RTL (`pricespage.ar.html`) markup.
  - Linked "Prices" from navigation bar, mobile menu drawer, and footers directly to `prices.html` and `prices-ar.html`.
  - Added compile logic in `compile-templates.mjs` and successfully built all templates.

# 2026-06-06 16:58

- **Scaled Down Clients and Distinctive Designs Cards on Mobile**:
  - Reduced clients carousel card width from `70vw` to `140px` and label font-size to `14px` on mobile viewports in `clients.css`.
  - Reduced distinctive designs carousel card width from `65vw` to `160px`, graphic-circle to `76px`, card-title to `14px`, and card-label to `11px` on mobile viewports in `designs.css`.
  - Fixed mobile menu `04` item numbering font style by extending the menu number styling (`font-style: normal;`, letter-spacing, sand color) to the `mobile-menu__submenu-trigger i` class in `mobile-menu.css`.
  - Recompiled all HTML page templates.

# 2026-06-06 14:16

- **Increased Gravity Slide Distance on Services Carousel**:
  - Increased `MAX_SLIDE` from `200` to `600` and `SLIDE_DAMP` from `300` to `800` in both English and Arabic versions to allow a longer elastic drag distance at boundaries.
  - Recompiled page templates to update the live sites.

# 2026-06-06 13:55

- **Converted WhatsApp and Gmail Icons to Official Simple Icons SVGs**:
  - Replaced custom/image-based icons with exact official SVG vector paths from the Simple Icons library for WhatsApp and Gmail.
  - Positioned, scaled, and color-tuned the paths to match the premium, professional flat aesthetic (WhatsApp Green `#25D366` and Gmail Red `#EA4335`) on white rounded-rectangle button templates.
  - Recompiled English and Arabic templates globally.

# 2026-06-06 13:52

- **Removed Background Container Block from "What Makes Us Different" Slides**:
  - Removed `background: #F8F9FA` from `.different__slide` in `different.css` to fix the rectangular background container block overlaying slides during the scroll pinning transition.
  - Recompiled HTML templates across English and Arabic sites to synchronize the style updates.

# 2026-06-06 13:17

- **Fixed "What Makes Us Different" Scroll Pinning and Slide 5 Stacking Match**:
  - Added a targeted style rule `.different__slide:last-child { margin-bottom: 100vh; }` in `different.css` to prevent the parent tracking container from running out of scrollable space prematurely. This allows the final card (Slide 5) to scroll all the way up to its sticky coordinate and fully align with and cover Slide 4 before unpinning.

- **Squared Creative Steps Cards on Mobile Viewports**:
  - Replaced the mobile landscape card configuration (`min-height: 220px`, `aspect-ratio: unset`) under the `max-width: 768px` and `max-width: 480px` media queries inside `_steps_responsive.css` with a square aspect ratio layout (`aspect-ratio: 1 / 1`, `min-height: auto`).
  - Adjusted the layout border-radius to `20px` to match card designs.

# 2026-06-04 18:53

- **Updated Stacking Breakpoint and Swapped Mobile/Tablet Card Themes in "What Makes Us Different" Section**:
  - Increased card stacking breakpoint from `max-width: 768px` to `max-width: 1024px` to ensure iPad and smaller landscape/tablet views display stacked layouts (photo on top, text card at bottom) instead of squeezed desktop columns.
  - Swapped mobile/tablet slide panel background colors: Slide 1, 3, 5 are now White theme, and Slide 2, 4 are Teal theme (matching the mobile Figma designs).
  - Fixed description text alignments on mobile/tablet stack: set English text to align left in `different.css`, and Arabic text to align right inside `_rtl.css` with a mirrored `flex-direction: row-reverse` layout.

# 2026-06-04 18:45

- **Resolved Steps Section Circle CTA Overlaps and Refactored Codebase**:
  - Split `steps.css` (648 lines) into `_steps_base.css` and `_steps_responsive.css` to comply with the project's strict 500-line file size rule.
  - Fixed "LET'S START NOW" circular CTA button overlap with the bottom edge of Card 03 by shifting its absolute `bottom` offset downward to `-80px` on desktop and `-65px` on mid-desktop viewports.
  - Increased `.steps__grid`'s bottom margin to `clamp(100px, 10vw, 160px)` to accommodate the lowered CTA button without collisions.

# 2026-06-04 18:40

- **Resolved Hero Responsive Layout Across Viewports and Refactored Codebase for Project Integrity**:
  - Split `hero.css` (732 lines) into `_hero_base.css` and `_hero_responsive.css` to comply with the project's strict 500-line file size rule.
  - Resolved laptop illustration `.hero__image` overlap with the CTA button on common medium/small desktop displays (1181px–1440px) by shrinking the image dynamically and scaling down its translation offsets.
  - Handled tablet viewport (881px–1180px) aside column squeeze by shrinking the QR aside (`max-width: 170px`) and footnote validate font-size/max-width to prevent overflow.
  - Adjusted the background watermark scaling and RTL overrides for watermark and images dynamically under media queries.
  - Trimmed the changelog history to remain below the 500-line limit constraint.

# 2026-06-04 18:33

- **Fixed Steps CTA Circle Overflow and Hero Side CTA on Responsive**:
  - Shrunk the "LET'S START NOW" CTA circle progressively across responsive breakpoints to prevent overlapping with the 3rd card:
    - Mid-desktop (1101-1500px): 120px with adjusted bottom offset
    - Tablet (≤1100px): 110px, flush left with 28px top margin
    - Mobile (≤768px): 120px
    - Small mobile (≤480px): 100px
  - Text sizes scaled proportionally at each breakpoint for legibility.
  - Hidden the floating `.hero__side-cta` button at the `max-width: 1180px` breakpoint (where the follow rail goes horizontal) to prevent layout conflicts.
  - Overrode the desktop `padding-right: 56px` on `.hero__rail` at tablet/mid-desktop viewports so the horizontal follow rail stretches edge-to-edge.

# 2026-06-03 14:58

- **Fixed Steps CTA Hover Background Overflow, Alignment, and Size on Tablet/Mobile**:
  - Changed `.steps__cta` position from `static` to `relative` and added `left: auto` and `bottom: auto` under the `@media (max-width: 1100px)` and `@media (max-width: 768px)` breakpoints.
  - This ensures that the absolute-positioned hover background circle (`.steps__cta-bg`) is contained relative to the button boundary, and resets the desktop `left: 62.5%` and `bottom: -30px` offsets so the button sits naturally under the cards in the grid layout without shifting upwards or sideways.
  - Resolved steps card text overlap with background numbers (`03`/`04`) on intermediate responsive viewports (1100px - 1300px) by setting `z-index: 2` on `.steps__copy` (text) and `z-index: 1` on `.steps__num` (number) so the text sits on top.
  - Sized down font-size dynamically and set `max-width: 100%` under `1300px` to allow fluid text wrapping and prevent overlaps.
  - Shrunk the tablet CTA button size from `160px` to `130px` and increased its top margin to `36px` to prevent visual overlap with the bottom of the third card.

# 2026-06-03 14:47

- **Fixed Hero Responsive Layout on Tablet Viewports**:
  - Hidden the laptop illustration `.hero__image` starting from the `max-width: 1180px` breakpoint to prevent layout overcrowding on small screen/tablet devices.
  - Adjusted `.hero__row` on viewport sizes under `1180px` to use a single-column layout, resolving the empty right-side blank space.
  - Set the social links follow rail `.hero__rail` to display horizontally at the bottom of the hero section for all viewports under `1180px`, aligned to the left (flex-start) directly under the QR code aside and validation footnote.
  - Updated `_rtl.css` media queries to apply the horizontal rail label alignment to match the `1180px` breakpoint.

# 2026-06-03 13:51

- **Implemented Magnetic Hover Attraction for Steps CTA Button**:
  - Added custom butter-smooth JavaScript to `steps.en.html` and `steps.ar.html` that attracts the "LET'S START NOW" CTA button towards the user's mouse cursor using `requestAnimationFrame` and linear interpolation (lerp).
  - Designed the magnetic pull to trigger within a 180px threshold, translating the button up to 35px, and applying a lighter 40% offset to the inner text layer for a subtle parallax depth effect.
  - Automatically resets translation offsets on mouse exit and disables tracking on viewports under 1100px or devices without fine pointer/hover capabilities to prevent mobile collisions.
  - Removed `transform` from the transition lists and disabled hover translations in `steps.css` to prevent layout lag or jittering during dynamic JS animation.
  - Recompiled all page templates and successfully built the production build.

# 2026-06-03 13:04

- **Corrected Hero Content Downward Shift**:
  - Set `.hero__content` `padding-top` to `100px` on desktop to shift the main headline ("Your store will be...") and CTA button downwards.
  - Reverted the `.hero__aside` validation footnote gap (`gap: clamp(60px, 7vw, 110px)`) back to its default position so the footnote remains static and aligns perfectly with the shifted button baseline.

# 2026-06-03 13:02

- **Shifted Hero Content Downwards**:
  - Added `padding-top: 70px` to `.hero__content` under the desktop media query. This shifts the display headline and CTA button downwards to create better top breathing space.
  - Increased `.hero__aside` gap to `90px` to keep the validation footnote vertically aligned with the shifted CTA button.

# 2026-06-03 13:01

- **Shifted Hero Illustration Leftwards**:
  - Changed `.hero__image img`'s transform in `hero.css` from `translate(-50px, -70px)` to `translate(-120px, -70px)` on desktop. This pulls the laptop and shopping bags illustration closer to the CTA button.
  - Mirrored this shift in `_rtl.css` with `translate(120px, -70px)`.

# 2026-06-03 13:00

- **Enlarged and Shifted Background Watermark**:
  - Increased `.hero__watermark`'s width clamp to `clamp(840px, 105vw, 2000px)` to expand the background "e-trolley" watermark text significantly on all screens.
  - Shifted the watermark further left by setting `left: -120px` relative to `.hero__content` on desktop to allow its lettering to extend beyond the start of the headline and button.
  - Removed the `<div class="hero__dream-pill">` pill from both `hero.en.html` and `hero.ar.html`.
  - Shortened the social rail label from "Follow us" to "Follow" (and "تابع" in Arabic).

# 2026-06-03 12:51

- **Aligned Follow Rail to Watermark Letter "y"**:
  - Added a negative margin-left offset (`margin-left: -280px`) on `.hero__rail` under the desktop media query. This shifts the vertical "Follow us" rail leftwards to sit directly on top of the ending letter "y" of the background "e-trolley" watermark as shown in Figma.
  - Implemented the corresponding RTL mirrored override (`margin-right: -280px`) in `_rtl.css`.

# 2026-06-03 12:47

- **Aligned Footnote Vertically with the CTA Button**:
  - Reduced `.hero__aside`'s gap to `20px` under the desktop media query. This shifts the 3-line validation footnote upwards by ~90px, aligning its horizontal baseline perfectly with the main "build your store now" CTA button as shown in Figma.

# 2026-06-03 12:42

- **Aligned Hero Headline, CTA Button, and Watermark to the Right**:
  - Shifted the desktop hero content container `.hero__content` to the right by increasing the first column of `.hero__inner` to `450px` and matching aside padding.
  - Aligned `.hero__watermark` exactly at `left: 0` to match the left edge of the headline text and the CTA button wrapper, ensuring all three elements align perfectly along the same vertical line.
  - Successfully recompiled all page templates and rebuilt the production assets.

# 2026-06-03 12:38

- **Aligned Hero Checkmark Icon and Wrapped Validation Text to 3 Lines**:
  - Replaced the simple double-circle check SVG inside `hero.en.html` with a custom-designed rosette checkmark seal badge icon matching the Figma mockup.
  - Adjusted the validation text container width `.hero__validate` from `345px` to `380px` on desktop viewports. This allows the lowercase "etrolley" validation message to wrap cleanly into exactly 3 lines without cutting off.

# 2026-06-03 12:37

- **Fixed QR Aside Container Overlapping with Hero Headline**:
  - Restructured the desktop inner grid `.hero__inner` to use a dedicated first column width of `352px` (`grid-template-columns: 352px 1fr minmax(60px, 5%)`) on viewports `min-width: 1181px`.
  - Scoped the fixed QR container (`305px × 388px`) and footnote (`345px`) widths under the desktop media query, letting them fallback to fluid, auto-sizing widths and aspect-ratio layouts on smaller screens to prevent collision with the headline text.

# 2026-06-03 12:35

- **Aligned Homepage Hero QR Code & Validation Text to Figma Offsets**:
  - Shifted the entire left hero aside container `.hero__aside` to the right using dynamic layout padding to center it according to Figma's horizontal bounds.
  - Sized the QR wrapper `.hero__qr` to exact width/height parameters (`305px × 388px`) on desktop viewports.
  - Sized the validation footnote `.hero__validate` to a clean width of `345px` with a matching `8px` rightward offset relative to the QR block.
  - Formatted the footnote text to `20px` font-size and `27.4px` line-height with 'Noto Sans Arabic' regular weight, and updated the English copy.
  - Ensured fluid responsive overrides for the aside components are preserved on mobile/tablet viewports.

# 2026-06-03 12:33

- **Updated Homepage Hero CTA Button Style to Exact Figma Specs**:
  - Resized the main CTA link `.hero__cta` in `hero.css` to exact dimensions: `width: 459px; height: 90px;` with `border-radius: 15px;`.
  - Added precise internal paddings: `18.5px` top/bottom and `22.2px` left/right.
  - Set bold `24px` font size with `16px` line-height for typography layer on the text.
  - Updated English button content to "build your store now" and Arabic translation to "أنشئ متجرك الآن".

# 2026-06-03 12:03

- **Scoped Sticky Parallax Footer Reveal Back to Desktop Only**:
  - Reverted `position: sticky` and reveal parallax styling back to desktop-only (`min-width: 981px`) inside `_footer_reveal.css`. Because the mobile footer stacks vertically and is taller than typical phone screens, a sticky layout causes the top part (Logo, Quick Links, Site Map) to be permanently cut off and unreachable. Making the footer static on mobile allows users to scroll and see the entire footer content naturally.
  - Mirrored the interactive carousel scroll scripts and arrow preventDefault actions into `designs.ar.html` to align its functionality with the English version.
  - Adjusted support action buttons `.support__btn` to size down gracefully to `56px` on tablet (`max-width: 980px`) and `48px` on mobile (`max-width: 640px`) to prevent oversized icons.

# 2026-06-03 11:58

- **Polished Homepage Support Section Mobile Layout**:
  - Completely hid the overlapping absolute trolley/cart line art illustrations (`.support__cart-back` and `.support__cart-front`) on screens under `980px` to resolve the visual text overlap corruption.
  - Centered all text content (`text-align: center`) and social contact buttons (`justify-content: center`) inside `.support__card`.
  - Scaled down the decorative double circles in the eyebrow slider to matching compact `18px` knob sizes to fit mobile layouts.
  - Reduced section padding (`30px` top and `40px` bottom) and cleared negative margin offsets.




