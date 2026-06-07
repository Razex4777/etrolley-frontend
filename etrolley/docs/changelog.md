# 📜 E-Trolley — Changelog

> Append-only history. Trim oldest entries when this file approaches 500 lines.

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

# 2026-06-03 11:57

- **Polished Homepage Designs Section Layout on Mobile**:
  - Hid the large background paint bucket/oil bottle watermark illustration (`.designs__watermark`) on mobile screens to prevent messy text overlaps.
  - Reduced overall section padding on mobile to a compact `30px` top and `40px` bottom, down from the desktop clamp, making the section footprint cleaner.
  - Decreased spacing margins inside the header to `24px` to pull the title closer to the cards.

# 2026-06-03 11:47

- **Figma-Aligned Mobile Responsive Filter Tabs on Designs Page**:
  - Restructured `.designspage-tabs` to use a centering flex layout with wrap (`display: flex; flex-wrap: wrap; justify-content: center`) instead of rigid grid boxes.
  - Sized tabs to fit their content dynamically (`width: auto; padding: 10px 14px`) and forced text to stay on a single line (`white-space: nowrap !important`) so that long categories like "Health and Beauty" display their full name without truncation or wrapping into jagged boxes.
  - Restored the horizontal divider line below the tabs on mobile viewports using the primary-light sage stroke.

# 2026-06-03 11:42

- **Fixed Blog Page Mobile Layout Card Shifting & Horizontal Overflow**:
  - Identified that the desktop-sized pagination buttons (`56px` wide) and gap spacings on the mobile view were creating a minimum pagination row width of `420px`. This overflowed the viewport and forced the main content column to stretch and shift to the right.
  - scaled down mobile pagination buttons to `36px` and font sizes to `15px` with a tighter `4px` gap, ensuring pagination occupies only `260px` max-width.
  - Forced `.blogpage` container to `width: 100% !important; max-width: 100% !important;` on mobile to prevent layout shifting.

# 2026-06-03 11:41

- **Fixed Mobile/Tablet Hero-Timeline Spacing & White Space**:
  - Identified root cause where `.svcpage-hero__content`'s desktop `flex-basis: 832px` was being interpreted as a height constraint in mobile's vertical flex layout (`flex-direction: column-reverse`). Overrode it with `flex: none !important` to release the spacing.
  - Forced `height: auto !important` and `flex: none !important` with minimal constraints on the hero image container (`.svcpage-hero__image`) to avoid inheriting desktop's fixed `618px` heights.
  - Reduced the mobile hero top padding (`padding-top: clamp(80px, 10vw, 100px) !important;`) to minimize spacing between header and page content.
  - Decreased spacing inside `.svcpage-hero__inner` and minimized paddings/margins on `.svcpage-timeline` to create a compact, seamless layout flow on mobile screen sizes.

# 2026-06-03 11:35

- **Redesigned Service Page Hero Section Responsive Layout**:
  - Split `servicepage.css` into `_servicepage_base.css` and `_servicepage_responsive.css` to satisfy the strict 500-line limit rule, converting the main file to a clean aggregator.
  - Corrected mobile/tablet viewports layout to be left-aligned (`text-align: start; align-items: flex-start;`) instead of centered to match the Figma mockups.
  - Scaled down the overlapping circles slider decoration on mobile: reduced knob sizes from `25px` to `18px` and slider width from `160px` to `80px`.
  - Adjusted the eyebrow label font size to a compact `15px` with normal line-height so it flows next to the slider on a single line.
  - Sized the primary "Order Now" CTA button to fit content dynamically instead of stretching full-width.
  - Recompiled all page templates and ran the production build successfully.

# 2026-06-03 11:32

- **Upgraded Responsive Footer Design & Layout**:
  - Separated the "Social" section into its own markup block (`.footer__social-block`) inside [footer.en.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/footer/footer.en.html) and [footer.ar.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/footer/footer.ar.html) to allow flexible responsive stacking and grid placements.
  - Defined explicit desktop layout grid coordinates (`grid-column` / `grid-row`) under `@media (min-width: 981px)` in [footer.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/footer/footer.css) to preserve the original 4-column desktop layout.
  - Completely redesigned mobile and tablet responsive layouts (`max-width: 980px`):
    - Changed main footer background color to white (`#ffffff`) as requested.
    - Preserved side-by-side dual-column layouts for Quick Links and Site Map on mobile screens.
    - Set contact details to remain in horizontal row formats with soft circular background badges.
    - Aligned the "Social" title and borderless social icon SVGs side-by-side on a single row.
    - Applied a full-width background bar using Qatari sand-sage canvas (`hsl(165, 12%, 96.5%)`) for the bottom copyright section.
    - Adjusted the primary CTA button border-radius to a clean `12px` card corner with soft shadows.
  - Successfully recompiled all page templates and ran the production build.

# 2026-06-03 11:26

- **Fixed Broken Sticky Animation in "What Makes Us Different" Section**:
  - **Root Cause**: The previous session added `overflow-x: clip` to the `html` element in [_reset.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/styles/_reset.css). This property breaks `position: sticky` for ALL descendant elements, killing the stacking card scroll animation.
  - **Fix**: Removed `overflow-x: clip` from `html` and added a protective comment explaining why it must never be added back. The `body` element already has `overflow-x: hidden` which handles horizontal scroll containment without breaking sticky.

# 2026-06-03 11:24

- **Mobile Menu Overflow Fix (from previous session)**:
  - Added `overflow: hidden` to the `.mobile-menu` overlay wrapper in [mobile-menu.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/navbar/mobile-menu.css) to clip the offscreen menu panel (`transform: translateX(100%)`) when closed.
  - Removed the outdated linear-gradient override on `.support__card` in [_rtl.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/styles/_rtl.css) to allow it to inherit the new Figma gradient directly.

  - Recompiled page templates and ran the production build successfully.

# 2026-06-03 11:19

- **Updated Support & Help Card to Match Figma Specs and Icons**:
  - Implemented Figma properties on `.support__card` in [support.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/support/support.css): `max-width: 1567px`, `min-height: 376px`, and `border-radius: 25px`.
  - Applied the exact Figma linear gradient directly on the `.support__card` background with `background-color: #FFFFFF`. This keeps the card container 100% solid and fully opaque (no transparency or mix-blend-mode), ensuring a premium, clear visual appearance.
  - Converted the downloaded Figma PNGs for WhatsApp and Gmail using Node.js `sharp` library into web-optimized WebP images (`whatsapp.webp` and `gmail.webp`) and saved them to the `public/images/` directory.
  - Replaced the inline SVGs for WhatsApp and Gmail inside [support.en.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/support/support.en.html) and [support.ar.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/support/support.ar.html) with the new WebP images.
  - Sized the contact buttons to exactly `92px × 91px` on desktop with `border-radius: 25px` and `opacity: 1` as per specifications.
  - Successfully ran local Vite production build and verified compiled files.

# 2026-06-03 11:08

- **Aligned Final Services Slide to the Left with Empty Space**:
  - Defined CSS custom properties (`--services-card-w` and `--services-pad-start`) to calculate pixel-perfect spacing dynamically.
  - Set `padding-inline-end` on `.services__track` to `calc(100vw - var(--services-card-w) - var(--services-pad-start))` in [services.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/services/services.css). This allows slide 8/8 to align completely to the far left of the viewport on scroll while leaving the right side empty as requested.
  - Rebuilt production assets successfully.

# 2026-06-03 11:06

- **Enabled Drag-to-Scroll & Expanded Hover Autoplay Pause for Services Carousel**:
  - Implemented interactive mouse drag-to-scroll handling (`mousedown`, `mousemove`, `mouseup`, `mouseleave`) in [services.en.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/services/services.en.html) and [services.ar.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/services/services.ar.html) that pauses autoplay and allows users to click, hold, and drag cards horizontally.
  - Dynamically disables/enables CSS scroll-snapping and smooth scroll behaviors during drag states to ensure 1:1 mouse tracking.
  - Linked hover observers to the parent `.services` container so autoplay pauses if the cursor is anywhere on the services section.
  - Added `cursor: grab` and `cursor: grabbing` styling on the carousel track.
  - Recompiled pages and verified production Vite bundle build successfully.

# 2026-06-03 11:04

- **Customized Partners Marquee Scroll Boundaries and Transition**:
  - Removed linear-gradient opacity masks (`mask-image` and `-webkit-mask-image`) on `.partners__logos` in [clients.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/clients/clients.css) to eliminate visual fade-outs and enforce sharp, TV-news-style instant boundaries.
  - Increased `.partners` container layout gap using a fluid `clamp(60px, 7vw, 120px)` to shift the scroll start and stop points further to the right.
  - Recompiled all pages and verified production build completes successfully.

# 2026-06-03 11:00

- **Placed Floating Side CTA Above Everything**:
  - Increased `z-index` of `.hero__side-cta` from `var(--z-side)` to `99999` in [hero.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/hero/hero.css) to guarantee the floating "Send a message" button stays on top of all visual sections, margins, and layout elements on scroll.
  - Recompiled page templates and ran the production build successfully.

# 2026-06-03 10:59

- **Shifted Support Card Block Upwards**:
  - Decreased top padding on `.support` to `clamp(20px, 2vw, 40px)` and applied a negative `margin-top` (`clamp(-100px, -8vw, -50px)`) in [support.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/support/support.css) to pull the support card container up closer to the designs section.
  - Recompiled page templates and ran the production build successfully.

# 2026-06-03 10:57

- **Removed Support Section Wrapper Background and Restored Card Block**:
  - Reverted block card container styles (`background-color`, `background-image`, `box-shadow`, `padding`, and `border-radius`) on `.support__card` in [support.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/support/support.css) to preserve the original Figma card container layout.
  - Changed `.support` section wrapper background from white (`#FFFFFF`) to `transparent` so that the card container integrates cleanly on top of continuous page backgrounds.
  - Recompiled page templates and ran the production build successfully.




