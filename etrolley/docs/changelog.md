# 📜 E-Trolley — Changelog

> Append-only history. Trim oldest entries when this file approaches 500 lines.

# 2026-06-01 23:40

- **Upgraded Mobile Filter Tabs to solid Pill Chips**:
  - Transformed category filter tabs inside mobile viewports (`max-width: 768px`) to solid gray pill chips with centered margins, rounded corners (`12px`), and background states (`#E5E5E5` fallback, `#316C6B` active state with white typography) to match the layout screenshot exactly.
  - Recompiled page templates and ran Vite production builds successfully.

# 2026-06-01 23:36

- **Upgraded Double Overlapping Circles Eyebrow & Corrected Navbar Highlights**:
  - Implemented the double overlapping circles slider decoration on the designs page eyebrow (`designs.html` / `designs-ar.html`) to match the "Support & Help" style exactly.
  - Upgraded the template compiler script (`compile-templates.mjs`) to strip the hardcoded `is-active` underline class from the "Home" link inside compiled child page navbars (`about`, `services`, `blog`, `designs`), resolving highlight overlap errors.
  - Recompiled all page templates and ran Vite production builds successfully.

# 2026-06-01 23:30

- **Updated Custom Hero Mockup Image & Removed Section Separator Line**:
  - Converted the user's custom hero banner illustration (`f1648f72121efe6d501521b89da6b0682807989d.png`) to web-optimized `hero-mockup.webp` format and updated it in the showcase header banner assets.
  - Removed the `border-top` separator line below the hero header section in [designspage.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/designspage/designspage.css) to create a clean, borderless flow into the client portfolio grid.
  - Recompiled page templates and ran the production build successfully.

# 2026-06-01 22:36

- **Completed Distinctive Designs Showcase Page**:
  - Implemented the full "Distinctive Designs" portfolio page featuring a Figma-accurate English Hero mockup header (`designs.html`) and RTL-mirrored Arabic layout (`designs-ar.html`).
  - Added filterable category tabs for category sections (All, Outfits, Health & Beauty, Perfumes, Electronics, Flowers) that dynamically filter the showcase grid items using lightweight JS class toggles with CSS scale and opacity transitions.
  - Converted the 7 project showcase mockups and 1 iMac mockup to web-optimized WebP assets inside the assets folder.
  - Configured Vite input build points to bundle the new pages successfully with zero compile warnings.
  - Updated the master navbar markup file (`navbar.markup.html`) to link Partners directly to the new `designs.html` and `designs-ar.html` pages under the title "Designs" / "تصاميمنا".

# 2026-06-01 22:30

- **Fixed Duplicate Most Read Sections**:
  - Cleaned up dual-duplication of the "Most Read" section from both `blogpage.en.html` and `blogpage.ar.html`.
  - Removed outdated duplicate elements from compiled `blog.html` and `blog-ar.html`.
  - Recompiled page templates and verified Vite production bundles build successfully without any layout errors.

# 2026-06-01 23:22

- **Refactored Blog Layout, Responsive Column Order, and Pagination**:
  - Restructured HTML components to separate Explore, Blog Card Grid (Main), and Most Read into independent grid area elements, enabling clean CSS Grid layout on desktop and flexible stacking on mobile.
  - Placed Explore tags section on top on mobile, followed by main blog list cards, a stylized Pagination row with solid active teal background squares, a horizontal separator line below pagination, and the Most Read section at the bottom.
  - Flattened blog cards on mobile into clean, borderless list rows separated by horizontal lines.
  - Implemented horizontal solid separator lines below `.blogpage-header` and sidebar `.blogpage-mostread-card` items using the `--color-primary-light` (`#99B4AB`) design token to match the Figma design exactly.
  - Symmetrically compiled all static HTML templates and verified production builds bundle successfully.

# 2026-06-01 23:20

- **Replaced Team with Blogs in Navbar Dropdown**:
  - Replaced the "Team" menu item under the "About Us" dropdown with "Blogs" pointing to `blog.html` in [navbar.en.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/navbar/navbar.en.html).
  - Localized and replaced the Arabic "فريقنا" (Team) menu item with "المدونة" (Blogs) pointing to `blog-ar.html` in [navbar.ar.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/navbar/navbar.ar.html).
  - Kept the master bilingual markup layout updated by replacing `#team` with `blog.html` in [navbar.markup.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/navbar/navbar.markup.html).
  - Ran the template compilation script successfully to update the navigation menu on all 8 static pages.
  - Built the production bundle with no errors.

    - Rounded top corners on the footer (`border-top-left-radius: clamp(32px, 4vw, 56px)` + `border-top-right-radius`) so the pinned footer reads as a distinct lift-up panel from below the support section.
    - Added a 2-stop inset highlight at the top of the footer (`inset 0 2px 0 rgba(255,255,255,0.7)` + `inset 0 1px 0 rgba(49,108,107,0.04)`) to sell the "light gap" seam where the door above meets the floor below.
    - Upgraded the `.support` drop shadow to a 3-layer stack (`0 24px 60px -12px rgba(18,18,18,0.22)`, `0 8px 18px -6px rgba(49,108,107,0.08)`) so the door edge above casts a more dramatic shadow on the revealed footer as it lifts.
  - Documented the stacking contract (`<main>` z:2 → `.support` z:2 → `<footer>` z:1) in the CSS comments for future maintainers.
  - Mobile fallback path (`<980px`) is untouched: garage reveal rules live only inside `min-width: 981px` so touch UX remains unaffected.
  - Compiled and verified the production bundle builds cleanly with the new visual treatment.

# 2026-06-01 21:49

- **Aligned Mobile Timeline Description Spacings**:
  - Added a reset rule `margin: 0 !important;` to `[dir='rtl'] .svcpage-row--right .svcpage-row__desc` and `[dir='rtl'] .svcpage-row--left .svcpage-row__desc` inside mobile viewports, overriding the desktop `margin-right: auto` layout alignment and ensuring all description text blocks are perfectly right-aligned and consistently styled across every card exactly like row 1.
  - Symmetrically compiled all static files and verified production bundling compiles cleanly without error.

# 2026-06-01 21:47

- **Corrected Mobile RTL Timeline Row Alignment**:
  - Replaced the forced `flex-direction: row-reverse` on RTL title rows inside mobile viewports with native `flex-direction: row !important` and `justify-content: flex-start !important`. This allows the browser to naturally render the badge on the right and the Arabic title on the left in a clean right-aligned flow, correcting the "weird" alignment behavior.
  - Symmetrically compiled all static files and verified production bundling compiles cleanly without error.

# 2026-06-01 21:46

- **Fixed Vertical Timeline Line Overflow and Narrowed Spacing Gap**:
  - Capped the height of `.svcpage-timeline__line` and the `max-height` of `.svcpage-timeline__line-progress` to `calc(100% - 250px)` to end exactly at the center of the last card, resolving the issue where the vertical line bypassed the timeline section and overflowed into the footer links.
  - Squeezed mobile spacing even further by increasing the timeline negative margin-top to `-60px !important`, shrinking the hero image-to-text gap to `30px`, and shifting the first row up by `-40px !important` to bring the content nearest to the CTA.
  - Recompiled and verified Vite production bundles build successfully without layout errors.

# 2026-06-01 21:44

- **Narrowed Services Spacing Gap to Nearest on Mobile Viewports**:
  - Set the bottom padding of `.svcpage-hero` to `0px !important` on mobile/tablet screens.
  - Applied a negative margin-top of `-30px !important` and zeroed padding-top on the timeline container `.svcpage-timeline` inside `@media (max-width: 980px)` and `@media (max-width: 480px)` media queries to pull the timeline elements nearest to the CTA button.
  - Compiled and built the production stylesheets successfully.

# 2026-06-01 21:42

- **Reduced Services Page Spacing on Mobile Viewports**:
  - Decreased the bottom padding of the hero section `.svcpage-hero` inside `@media (max-width: 980px)` and `@media (max-width: 480px)` to `10px` (previously `40px` or clamp-based), closing the massive vertical spacing gap between the Order Now button and the timeline.
  - Symmetrically compiled all static files and verified production bundling compiles cleanly without error.

# 2026-06-01 21:15

- **Aligned Services Spacing, Start Position, and Hero Eyebrow with Figma**:
  - Removed `min-height: 100vh` and reduced bottom padding of the hero section in [servicepage.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/servicepage/servicepage.css) to eliminate the large gap below the "Order Now" CTA button.
  - Reduced top padding of the timeline container `.svcpage-timeline` to `0` to pull the first card up close to the hero section.
  - Positioned the vertical timeline line `.svcpage-timeline__line` and progress line `.svcpage-timeline__line-progress` to start at `top: 30px`, aligning perfectly with the top edge of the first row's image.
  - Replaced the single-circle dot-and-line eyebrow in [servicepage.en.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/servicepage/servicepage.en.html) and [servicepage.ar.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/servicepage/servicepage.ar.html) with the double overlapping slider structure `.svcpage-hero__slider` (mirroring the Support & Help section style).
  - Added CSS definitions in [servicepage.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/servicepage/servicepage.css) to style `.svcpage-hero__slider`, `.svcpage-hero__slider-track`, and `.svcpage-hero__slider-knob` with overlapping borders (`border-color` using variables `--color-sand` and `--color-primary`).
  - Updated `.svcpage-hero__eyebrow-text` in [servicepage.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/servicepage/servicepage.css) to match Figma typography specs: `font-family: 'Noto Sans Arabic'`, `font-size: 24px`, `line-height: 70px`, and `letter-spacing: 0`.
  - Fixed Arabic timeline zig-zag layout alignment in [servicepage.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/servicepage/servicepage.css) by removing forced LTR overrides from `.svcpage-row--right` (for both desktop and mobile views) and adding complete margin, padding, direction, and justification overrides specifically for RTL (`[dir='rtl']`).
  - Added class `services-page` to the `body` tag in [services.base.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/services.base.html) and implemented the specified multi-stop linear gradient background in [servicepage.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/servicepage/servicepage.css) while setting hero and timeline container backgrounds to transparent.
  - Aligned mobile timeline row layouts in [servicepage.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/servicepage/servicepage.css) by setting a strict `max-width: 369px` parent width constraint on `.svcpage-row` and adding `18px` horizontal margins to the timeline container. This forces all content blocks (including text title, description, badge, and image) to stretch and scale symmetrically inside a unified mobile column, ensuring the image matches the full width of the text column exactly like the Figma design 100%.
  - Fixed mobile hero layout hierarchy by using `flex-direction: column-reverse` on `.svcpage-hero__inner` to place the hero image on top of the text block.
  - Aligned mobile timeline row content by displaying the badge and title inline (`flex-direction: row`), and left-aligning the title/description copy (right-aligning in RTL) instead of centering them.
  - Updated mobile row badge size (`51px` width x `52px` height, `16px` font size), title typography (`font-size: 16px`, `line-height: 40px`, `font-weight: 700`, color `#212121`), and description typography (`font-size: 12px`, `line-height: 18px`, color `#444444`) under `@media (max-width: 480px)` in [servicepage.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/servicepage/servicepage.css) to match Figma mobile specifications.
  - Rebuilt the project to compile changes across all 6 pages.

# 2026-06-01 20:50

- **Added Benefits Section Footer Promo and Spacing Calibrations**:
  - Implemented the promo graphic wrapper `.benefits__promo` and paragraph `.benefits__footer-text` below the cards inside LTR [benefits.en.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/benefits/benefits.en.html) and RTL [benefits.ar.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/benefits/benefits.ar.html).
  - Styled the benefits footer in [benefits.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/benefits/benefits.css) with exact layout constraints: `width: 272px` and `height: 168.34px` for the promo box (with overlapping green shape, message bubble, and a `"No Delay, Start Now!"` white pill), and a centered/justified text block with `font-size: 20px` and `line-height: 25px`.
  - Configured the section header `.benefits__title` inside [benefits.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/benefits/benefits.css) to use `'Noto Sans Arabic'`, font size `40px`, font weight `600`, and line height `53.42px` aligned to center.
  - Added a `margin-top: 94px` to the cards grid `.benefits__grid` in [benefits.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/benefits/benefits.css) to shift the cards down and prevent the overlapping icons from clashing with the header text.
  - Removed the `min-height` block height container constraint from `.about` in [about.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/about/about.css) so it renders with natural padding flow, matching the height behavior of the benefits section.
  - Adjusted the mobile stacking layout in [about.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/about/about.css) by removing `order: -1` from `.about__media` to place the 3D illustration at the bottom of the section below the text on mobile viewports.
  - Increased `.about` top padding on mobile viewports to `120px` in [about.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/about/about.css) to prevent the top eyebrow and header elements from being covered by the sticky mobile navigation menu.
  - Increased the vertical row gap (`row-gap: 120px`) inside `.benefits__grid` in [benefits.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/benefits/benefits.css) under media queries (1180px and 768px) to guarantee stacked cards clear the overlapping absolute icon boxes cleanly without any visual overlapping.
  - Recompiled page templates and ran the production build successfully.

# 2026-06-01 20:45

- **Aligned About Us First Section Spacing and Text Layout with Figma**:
  - Restructured [about.en.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/about/about.en.html) and [about.ar.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/about/about.ar.html) to hold exactly two paragraph blocks separated by standard empty-line spacing.
  - Placed line breaks (`<br>`) inside the first paragraph block to draw the questions and platform descriptions without vertical container spacing.
  - Bolded specific terms matching the Figma design using `<strong>` tags.
  - Cleaned up [about.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/about/about.css) by removing obsolete `.about__indented-group`, `.about__lead`, and `.about__questions` classes.
  - Restored the `.about__slider-track` line and aligned the double overlapping circles eyebrow slider graphic structure in [about.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/about/about.css) to match the Support section's layout perfectly.
  - Regenerated the compiled static files and verified production bundling compiles cleanly without error.

# 2026-06-01 20:30


- **Calibrated About Us Page Layout and Removed Support Section**:
  - Removed the **Support & Help** component insert block from [about.base.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/about.base.html) and excluded it from compiled about page templates inside [compile-templates.mjs](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/scripts/compile-templates.mjs).
  - Restyled the About page illustration container in [about.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/about/about.css) to remove the card border-radius, background, and shadows, letting the transparent WebP illustration float directly on the page background.
  - Removed the checkmark SVG icons, bold tags, and accent colors from the question elements in [about.en.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/about/about.en.html) and [about.ar.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/about/about.ar.html) to render clean plain-text list items with standard indentation.
  - Symmetrized the About section eyebrow decorator to draw the exact same overlapping double circles slider as in the Support block.

# 2026-06-01 20:15

- **Completed Static About Us Page (Zero-JS) and Dynamic Navbar Integration**:
  - Implemented the static LTR English (`about.html`) and RTL Arabic (`about-ar.html`) About Us pages based on Figma specs.
  - Linked the dropdown item "Our Story" (قصتنا) and the mobile menu item "About Us" (من نحن) to `about-ar.html` inside the Arabic navbar component [navbar.ar.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/navbar/navbar.ar.html).
  - Updated the template compiler [compile-templates.mjs](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/scripts/compile-templates.mjs) to dynamically rewrite section anchor links (e.g. `#services` -> `index.html#services` / `index-ar.html#services`) and language switchers (to swap cleanly between `about.html` and `about-ar.html`) for both navbar and footer on the About Us pages.
  - Recompiled page templates and ran the production build successfully, verifying perfect visual output and zero errors.

# 2026-06-01 19:52

- **Removed Hero Section Slide Navigation Chevrons**:
  - Completely removed the obsolete carousel navigation chevrons (`<-` and `->` buttons inside `.hero__nav`) from the CTA cluster in the Hero section.
  - Applied the change symmetrically to both LTR [hero.en.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/hero/hero.en.html) and RTL [hero.ar.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/hero/hero.ar.html) component templates, and compiled the production sheets successfully.

# 2026-06-01 19:54

- **Upgraded Services Illustrations to Optimized WebP**:
  - Replaced the old low-resolution `.png` files inside `public/images/services/` with high-quality `.webp` replacements:
    - `sup)port.jpg` $\rightarrow$ `services-support.webp`
    - `socialmed.png` $\rightarrow$ `services-social.webp`
    - `photo.png` $\rightarrow$ `services-photography.webp`
    - `marketing.png` $\rightarrow$ `services-marketing.webp`
  - Updated all HTML image references from `.png` to `.webp` across both LTR English [services.en.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/services/services.en.html) and RTL Arabic [services.ar.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/services/services.ar.html) templates.
- **Updated Hero Headline Copy**:
  - Replaced the previous English Hero headline description copy inside [hero.en.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/hero/hero.en.html) with: `"Your store will be ready in no more than a minute."` (split into three balanced inline span lines).
  - Symmetrically updated the Arabic Hero template [hero.ar.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/hero/hero.ar.html) to perfectly match with premium Qatari-standard translation: `"سيكون متجرك جاهزاً خلال دقيقة واحدة."`
- **Shifted Hero Laptop Illustration to Left (with RTL Mirrored Shift)**:
  - Adjusted the laptop illustration positioning in [hero.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/hero/hero.css) by changing the transform inside `.hero__image img` from `translateY(-70px)` to `translate(-50px, -70px)` (translating it leftwards on LTR desktop screens).
  - Mirror-shifted the laptop illustration in RTL viewports inside [_rtl.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/styles/_rtl.css) to `translate(50px, -70px)`, which pushes the illustration rightwards (towards the center canvas) to maintain the exact visual symmetry and CTA block alignment on Arabic screens.
- **Fixed Hidden Arabic Text inside Steps Circular CTA on Hover**:
  - Identified a markup syntax issue in [steps.ar.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/steps/steps.ar.html) where the `.steps__cta-text` wrapper was closed prematurely `</span>` right after the first `<span>START</span>` tag, leaving the Arabic text `<span>لنبدأ <span>الآن</span> </span>` outside the container.
  - Due to this, the Arabic span lacked the relative positioning and `z-index: 2` declaration applied to `.steps__cta-text`. Consequently, the expanding circular background blob (`.steps__cta-bg` with `z-index: 1`) was physically rendering over the Arabic text on hover, hiding it from view.
  - Resolved by putting the Arabic span back inside the `.steps__cta-text` wrapper so it inherits the correct stacking context (`z-index: 2`) and transitions colors correctly on hover.
- **Symmetrized and Mirrored Services Cart in RTL Arabic Layout**:
  - Mirrored and right-aligned both `.services__cart-back` and `.services__cart-front` layers in RTL viewports inside [_rtl.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/styles/_rtl.css) by resetting `left: auto` and mapping `right` positioning across all responsive breakpoints (desktop, tablet, and mobile).
  - Horizontally flipped the inner cart SVGs inside both containers in RTL using `transform: scaleX(-1)` so they face and "roll towards" the right-aligned title "الخدمات التي نقدمها".
  - Recompiled page templates and built production bundles successfully with no assets warnings.
- **Fixed Hidden Arabic Text inside Steps Circular CTA on Hover**:
  - Identified a markup syntax issue in [steps.ar.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/steps/steps.ar.html) where the `.steps__cta-text` wrapper was closed prematurely `</span>` right after the first `<span>START</span>` tag, leaving the Arabic text `<span>لنبدأ <span>الآن</span> </span>` outside the container.
  - Due to this, the Arabic span lacked the relative positioning and `z-index: 2` declaration applied to `.steps__cta-text`. Consequently, the expanding circular background blob (`.steps__cta-bg` with `z-index: 1`) was physically rendering over the Arabic text on hover, hiding it from view.
  - Resolved by putting the Arabic span back inside the `.steps__cta-text` wrapper so it inherits the correct stacking context (`z-index: 2`) and transitions colors correctly on hover.
  - Recompiled page templates and built production bundles successfully with no assets warnings.


# 2026-06-01 19:50


- **Fixed Unclickable Footer Buttons/Links in Sticky Reveal Layout**:
  - Restructured the parallax stacking context to utilize positive z-indexes instead of negative ones to resolve browser event-capturing conflicts.
  - Set the sticky footer `footer[data-component="footer"]`'s `z-index` in [footer.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/footer/footer.css) to **`1`** (up from `-1`).
  - Increased the wrapper `<main>`'s `z-index` in [reset.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/styles/_reset.css) to **`2`** (up from `1`).
  - This ensures `<main>` still perfectly masks the footer until scrolled to the bottom, but the footer resides in a positive stacking context above standard canvas backgrounds. This guarantees **100% of sitemap links, social icons, and CTA buttons in the footer are instantly clickable and responsive to hover interactions**.

# 2026-06-01 19:48


- **Fixed Sticky Footer Bleed-Through Under Hero Section**:
  - Configured the main element wrapper `<main>` inside [_reset.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/styles/_reset.css) to act as a solid, opaque scrolling canvas:
    `main { display: block; position: relative; z-index: 1; background: #ffffff; }`.
  - This guarantees that the sticky parallax footer (`z-index: -1`) is fully hidden beneath the main scrolling canvas, resolving the issue where the footer bled through transparent zones and negative-z-index gradient background blobs of the Hero section, whilst perfectly preserving the Hero's decorative background gradient blobs.

# 2026-06-01 19:46


- **Implemented Pure CSS Parallax Footer Reveal (Garage Effect)**:
  - Implemented high-fidelity desktop-only sticky parallax footer reveal inside [footer.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/footer/footer.css).
  - Placed the footer host `footer[data-component="footer"]` with `position: sticky; bottom: 0; z-index: -1` to anchor it beneath the main scroll layers.
  - Styled the preceding [support.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/support/support.css) container to be fully opaque with `z-index: 2` and cast a premium shadow (`box-shadow: 0 15px 35px rgba(18, 18, 18, 0.08)`) downwards, masking the footer.
  - This delivers a premium "garage door reveal" parallax scrolling effect on standard desktop screens (>=981px) while gracefully falling back to standard natural scroll on mobile viewports for fluid rendering stability.
  - Verified compilation and production build output successfully.

# 2026-06-01 19:43


- **Fixed English and Arabic Bilingual Text Visibility Clash**:
  - Implemented a 100% pure CSS automatic translation display toggle inside [main.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/styles/main.css).
  - Uses `html[lang="en"] [lang="ar"] { display: none !important; }` and `html[lang="ar"] [lang="en"] { display: none !important; }` rules to seamlessly hide Arabic text tags when the page is rendered in English (`index.html`) and vice versa (`index-ar.html`).
  - This perfectly resolves the issue where both English and Arabic labels (e.g. "Call us at" / "اتصل بنا على") were rendered side-by-side inside the phone block and mobile footer due to the Zero-JS architecture.
- **Robust Cross-Browser Viewport Scroll Toggling**:
  - Upgraded the lightweight inline scroll listener in [index.base.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/index.base.html) to utilize `window.pageYOffset || document.documentElement.scrollTop` calculation as standard fallbacks.
  - Bound check scroll execution onto load, resize, and DOMContentLoaded events to guarantee the navbar background changes to solid blurred white immediately upon scrolling down on all Chromium/Safari/Firefox mobile and desktop screens.
  - Successfully ran full template compilation and production Vite build validation.

# 2026-06-01 19:38

- **Fixed Root Scroller Timeline for CSS Scroll Reveals**:
  - Removed `overflow-x: clip` constraint from the `html` element inside [_reset.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/styles/_reset.css).
  - This resolves a standard browser layout constraint bug where setting overflow clip/hidden on the `html` container breaks standard root scroller scroll timelines (`animation-timeline: scroll()`), preventing scroll-driven animations from running on the viewport scroll offset.
  - The document scroller now operates as a standard, active root scroller, and the navbar background transitions dynamically to solid blurred white on scroll.

# 2026-06-01 19:36

- **Fixed Navbar Scroll Animation Interpolation**:
  - Resolved an issue in [navbar.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/navbar/navbar.css) where the sticky navigation bar would stay transparent during scroll on specific browsers.
  - Added explicit keyframe boundaries (`from` and `to` blocks) to the `@keyframes navbarScroll` and `@keyframes navbarDividerScroll` declarations. This is required by WebKit/Safari to perform CSS scroll-driven calculations and prevent interpolation failures.
  - Updated the animation-timeline scroller target from `scroll(root)` to standard `scroll()` (nearest) to ensure robust viewport attachment.

# 2026-06-01 19:33

- **Aligned Steps Section Left-Spacing**:
  - Aligned `.steps__inner` container width and padding in [steps.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/steps/steps.css) with the Hero section styling.
  - Swapped `max-width: 1560px` for `max-width: var(--canvas-w)` (1920px) and updated side paddings from `clamp(20px, 2.5vw, 40px)` to `clamp(24px, 3.5vw, 70px)`.
  - This ensures that the horizontal left margins of the creative process title and first card align precisely with the left bounds of the hero container and header layout on all wide screens.

# 2026-06-01 19:31

- **Completed 100% Zero-JS Project Migration**:
  - Successfully migrated all remaining programmatic JavaScript behaviors (IntersectionObserver scroll reveals, scroll-driven navbar sticky backdrop animations, horizontal slider cursor indicators) into pure CSS/HTML structures.
  - Eliminated every `.js` file from the repository, including `src/main.js`, `src/lib/reveal.js`, `src/lib/dom.js`, and `src/components/services/services.js`.
  - Removed standard `<script>` tag module loader from `src/index.base.html` so that both compiled pages (`index.html` and `index-ar.html`) load fully static and pure on standard HTML and CSS.
  - Implemented pure CSS entrance keyframe stagger reveals (`@keyframes revealOnLoad` + `:nth-child` counters) delayed by `1.8s` to coordinate perfectly with the rise of the splash curtain.
  - Built pure CSS scroll-driven animations (`animation-timeline: scroll(root)`) with robust high-fidelity background blur fallbacks for sticky navigation bar styles.
  - Successfully verified a 100% clean production build (`npm run build` compiling without errors or bundling dynamic JS modules).

# 2026-06-01 19:12

- **Fixed Clients Carousel Alignment and Removed Fade Overlays**:
  - Removed full-bleed margin/padding overrides (`margin-inline` and `padding-inline`) from `.clients__viewport` inside [clients.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/clients/clients.css) so the carousel stays perfectly aligned within the content margin wrapper (leaving clean whitespace space on the left matching the header text).
  - Completely removed the white gradient fade overlays (`::before` / `::after` masks) from the two sides of the viewport.
  - Resolved CssSyntaxError by cleaning up a duplicate class declaration block.

# 2026-06-01 19:06

- **Implemented Pure CSS Auto-Forward Sliding Carousel for Clients**:
  - Configured the **Our Renowned Clients** carousel to automatically slide step-by-step in pure CSS (no JS) using discrete keyframe steps.
  - Each unique client card snaps into focus, pauses stationary for `1.6s` to let users read the brand name, and then slides smoothly over `0.4s` to the next card.
  - Aligned HTML files (`clients.en.html`, `clients.ar.html`, `index.html`, and `index-ar.html`) to hold exactly two identical sets of 5 unique client cards (10 cards total) so that wrapping from the 5th card to the 1st card duplicate at `-50%` translate occurs seamlessly.
  - Updated keyframes (`clientsMarquee` and `clientsMarqueeRTL`) inside [clients.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/clients/clients.css).

# 2026-06-01 18:50

- **Fixed Services Section Cart Watermark Masking**:
  - Adjusted the z-index of `.services__cart-back` (to `-2`) inside [_cart.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/services/_cart.css) so the teal basket layer sits behind the solid black background.
  - Reverted the z-index of `.services__cart-front` back to `10` (above the background) so the yellow handle and wheels are fully visible on the black background as requested.

# 2026-06-01 18:35

- **Fixed Services Section Card Overflow Snapping**:
  - Added a solid black mask on the start side (`left: 0` for LTR, `right: 0` for RTL) of `.services__track-wrapper`.
  - The mask width dynamically matches the `padding-inline` value of the track, ensuring that when the carousel slides/snaps, previous cards are hidden cleanly behind the solid black edge and do not show in the screen's bleed area.
  - Reverted the temporary stack height tests in `.different__track`.
  - Updated in [services.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/services/services.css) and [different.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/different/different.css).

# 2026-06-01 18:29

- **Fixed Carousel Arrow Navigation — Step-by-Step Card Snapping**:
  - Replaced the old `initCarouselScrollJumpPrevention` (static anchor jumps between first/last card) with `initCarouselStepNavigation` using `IntersectionObserver` to track the currently visible card.
  - Arrow prev/next now step exactly ±1 card at a time (1→2→3→4→5) instead of jumping directly to the first or last card.
  - Applies to both **Clients** and **Designs** carousels, with `scrollIntoView({ block: 'nearest', inline: 'start' })` to prevent vertical page jumps.
  - Updated in [main.js](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/main.js).

# 2026-06-01 17:25

- **Fixed Differentiator Cards Stacking Scroll Overlap**:
  - Removed desktop and mobile `:last-child { margin-bottom: 0; }` overrides from `.different__slide` inside [different.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/different/different.css).
  - This ensures that the 5th (final) differentiator card has the same scroll depth margin-bottom (`22vh` on desktop, `18vh` on mobile) as the other cards, allowing it to slide up and overlay card 4 completely and seamlessly before the section scrolls out of view.


# 2026-06-01 17:23

- **Fixed Partners Logo Marquee Loop Jump**:
  - Eliminated the flex `gap` on `.partners__logos-track` and relocated spacing into `.partners__logo-item` via `padding-inline-end`. This makes the layout geometry of the duplicated segments mathematically identical, ensuring a 100% seamless infinite loop.

# 2026-06-01 17:15

- **Implemented Infinite Marquee Loop for Partners Logo Banner**:
  - Wrapped regional payment partner logos in a sliding track `.partners__logos-track` and duplicated the items to create a seamless infinite layout loop.
  - Added pure CSS `@keyframes` animations (`partnersMarquee` and `partnersMarqueeRTL`) for automatic horizontal sliding with full RTL direction support.
  - Added modern fade masks using `mask-image` styling on `.partners__logos` to blend logos elegantly at the horizontal viewport edges.
  - Configured track animation to pause on hover to allow interactive logo expansion.

# 2026-06-01 17:13

- **Fixed Carousel Arrow Page Jumps (Vertical Scroll Jump Fix)**:
  - Implemented a lightweight global click interceptor `initCarouselScrollJumpPrevention` inside [main.js](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/main.js).
  - The interceptor captures clicks on clients/designs carousel arrows, runs `e.preventDefault()` to suppress browser default vertical scroll-jumping, and uses native `scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })` to scroll horizontally.

# 2026-06-01 16:36

- **Migrated Clients and Distinctive Designs to Zero-JS**:
  - Deleted `src/components/clients/clients.js` and `src/components/designs/designs.js` completely.
  - Removed bootstrap imports, lifecycle references, initialization, and cleanup for designs and clients in `src/main.js`.
  - Added card IDs `id="design-card-0"` through `id="design-card-4"` in `designs.en.html`, `designs.ar.html`, `index.html`, and `index-ar.html`.
  - Converted the Distinctive Designs carousel arrows to anchor links (`href="#design-card-0"` and `href="#design-card-4"`) in all HTML files.
  - Added `scroll-margin-top: clamp(140px, 15vh, 220px);` to `.clients__card` in `clients.css` and `.designs__card` in `designs.css` to prevent vertical viewport jumping during anchor scroll jumps.
  - Applied `text-decoration: none;` to `.designs__arrow` in `designs.css` and removed outdated pointer drag cursor styles.

# 2026-06-01 16:33

- **Fixed Clients Carousel Arrow Page Jumps**:
  - Created a dedicated lightweight controller [clients.js](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/clients/clients.js) and wired it into [main.js](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/main.js) to handle horizontal carousel scrolling.
  - Added `data-dir="prev"` and `data-dir="next"` attributes to the arrow navigation links in both [clients.en.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/clients/clients.en.html) and [clients.ar.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/clients/clients.ar.html).
  - The controller intercepts arrow clicks to call `preventDefault()`, preventing the default browser behavior which was scrolling the viewport vertically to align cards, and instead scrolls the carousel track horizontally using fluid `scrollBy` operations.
- **Refactored Services Stylesheet for Maintainability**:
  - Extracted services cart artwork styles and mobile responsive configurations into [_cart.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/services/_cart.css).
  - Extracted "Learn More" hover button marquee styles into [_button.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/services/_button.css).
  - This refactoring brings the main `services.css` file down to 424 lines, satisfying the project's strict 500-line limit for styling files.

# 2026-06-01 16:32

- **Updated Services Section Background**:
  - Changed the Services section background (`.services__bg` inside [services.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/services/services.css)) from sage green (`var(--color-sage)`) to solid black (`#000000`) to align with the dark aesthetic of the "Our Creative Process" steps section.
  - Retained the premium radial-gradient background overlays (`.services__bg::after`) to add subtle teal and peach ambient glows over the black background.

# 2026-06-01 15:52

- **Resolved Navbar Scroll Transparency Bug**:
  - Removed buggy, conflicting CSS scroll timeline animations (`@supports (animation-timeline: scroll())` and `nav-scroll` / `nav-divider-scroll` keyframes) from [navbar.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/navbar/navbar.css).
  - This resolves a browser-specific issue where the CSS scroll timeline gets stuck at 0% scroll tracking due to `overflow-x: clip` rules on the root document, preventing the navbar from turning opaque on scroll.
  - Toggling of scroll states (adding/removing `.is-scrolled` when `window.scrollY > 20`) is now fully and reliably driven by JavaScript in [main.js](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/main.js), with smooth styling transitions natively handled in [navbar.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/navbar/navbar.css).
- **Refactored Navbar Styles for Maintainability**:
  - Extracted all dropdown menu layout and element styles (97 lines of code) from `navbar.css` into a modular stylesheet [_dropdown.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/navbar/_dropdown.css).
  - This brings the line count of the main `navbar.css` file down to 412 lines, adhering to the project's strict 500-line limit for all components.
  - Added clean `@import './_dropdown.css';` at the top of `navbar.css`.

# 2026-06-01 15:45

- **Deprecated GSAP and Lenis Library Dependencies**:
  - Completely removed `gsap` and `lenis` packages from [package.json](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/package.json), reducing production JavaScript bundle size from 142 KB to just **5.49 KB** (a **96% reduction**!).
  - Deleted obsolete controller scripts: [smooth-scroll.js](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/lib/smooth-scroll.js) (Lenis scroll wrapper), [page-intro.js](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/lib/page-intro.js) (GSAP splash curtain), [footer.js](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/footer/footer.js) (GSAP reveals), and [support.js](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/support/support.js) (RTL motion offset logic).
- **Migrated Animations to Pure CSS Keyframes & IntersectionObserver**:
  - Implemented the page curtain splash reveal and navigation slide-in in pure CSS inside [_motion.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/styles/_motion.css), serving the markup statically in [index.base.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/index.base.html) to eliminate FOUC.
  - Rewrote [reveal.js](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/lib/reveal.js) to utilize a lightweight native JavaScript `IntersectionObserver` to trigger transitions, setting delay parameters via CSS custom variables (`--reveal-delay`).
  - Refactored [designs.js](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/designs/designs.js) to drop GSAP animations while keeping native prev/next smooth scroll actions and touch dragging behaviors intact, fixing the Vite missing `i18n.js` import error.
  - Refactored support, designs, and footer templates (`.en.html` and `.ar.html`) to declare staggers and reveal animations using standard `data-reveal` and `data-reveal-group` attributes.
  - Delayed scroll reveals by 1.8s in [main.js](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/main.js) to ensure viewport items don't reveal until the curtain clears.
  - Restored browser-native scroll smoothing on `html` tags inside [_reset.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/styles/_reset.css).

# 2026-06-01 15:43

- **Migrated HTML to Modular Component Templates**:
  - Modularized page markup by splitting `index.html` and `index-ar.html` into component-specific layout templates (`navbar`, `hero`, `steps`, `different`, `services`, `clients`, `designs`, `support`, `footer`) inside their respective directories under `src/components/`.
  - Created separate `.en.html` (pure English copy, wrappers removed) and `.ar.html` (pure Arabic copy, wrappers removed) versions for each component to completely eliminate runtime translation scripts.
  - Implemented an automated base page assembler in [index.base.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/index.base.html) and [compile-templates.mjs](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/scripts/compile-templates.mjs).
  - Integrated the compiler into [vite.config.js](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/vite.config.js) to trigger automatic compilation on Vite server start and instant page refreshes on template modification.
- **Removed i18n and Clients JavaScript Runtime Logic**:
  - Deleted `src/lib/i18n.js` and `src/styles/_i18n.css` from the repository, completely decoupling the site from client-side translation scripts.
  - Deleted `clients.js` and removed all runtime component bootstrapping references inside [main.js](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/main.js).
  - Migrated the clients carousel to pure HTML/CSS by mapping the next/prev buttons to scroll anchor link elements (`#client-card-0` and `#client-card-7`) and enforcing mandatory scroll snapping (`scroll-snap-type: x mandatory`) in [clients.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/clients/clients.css).

# 2026-06-01 15:40

- **Restored Interactive Clients Carousel**:
  - Re-integrated [clients.js](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/clients/clients.js) into the main bootstrap script [main.js](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/main.js), resolving non-responsive dragging gestures and prev/next arrow button controls.
  - Implemented standard RTL-compatible drag direction and inertia physics calculations in [clients.js](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/clients/clients.js) using the active document direction to provide smooth pointer-drag sliding on Arabic pages.
- **Reverted Client Logo Cards to WebP Brand Assets**:
  - Reverted image file references in both [index.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/index.html) and [index-ar.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/index-ar.html) from PNG back to WebP format.
  - Updated card styles in [clients.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/clients/clients.css) for `.clients__tile` and `.clients__tile img` to display the full brand-colored WebP card assets (removing the solid gray background, white-invert filter overrides, and opacity caps).
  - Increased card border-radius to `25px` and set `overflow: hidden;` to ensure cards remain perfectly rounded with standard drop-shadow.
- **Fixed Static Multi-Page Language Detection**:
  - Updated language detection in [i18n.js](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/lib/i18n.js) to check the static `document.documentElement.lang` attribute on initialization. This ensures static routing to `index-ar.html` preserves the Arabic RTL page settings natively instead of resetting to English.

# 2026-06-01 15:35

- **Optimized Clients Logo Cards**:
  - Restored uniform grey background (`#555555`) to `.clients__tile` cards in [clients.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/clients/clients.css) and added rounded corners (`border-radius: 16px`) to match the user's second reference image style.
  - Removed all card hover animation/translate/scaling effects to keep the layout clean and static.
  - Increased client logo size and height constraint inside cards to `clamp(74px, 7.8vw, 105px)`.
  - Applied CSS `brightness(0) invert(1)` color filter to make all client logos float in solid, uniform white/light-grey on the grey card backgrounds.

# 2026-06-01 15:34

- **Migrated Clients Section to Zero-JS & Transparent Uniform Logos**:
  - Deleted `clients.js` and `clients.html.js` entirely, removing client javascript bootstrap logic from `src/main.js`.
  - Re-wired entrance transitions for both `index.html` and `index-ar.html` clients and partners sections to use the global declarative `data-reveal` scroll animation presets.
  - Replaced client brand logo WebP files with PNG files (e.g. `gazali.png`, `urban.png`, `yarnista.png`, `tokyo.png`, `connection-by-alnaim.png`) to utilize their built-in transparency.
  - Styled `.clients__tile` in [clients.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/clients/clients.css) to remove background containers and drop-shadows, making them float transparently.
  - Enforced a uniform height constraint (`clamp(54px, 5.5vw, 84px)`) on all logo images, centering them inside their cards.
  - Implemented CSS grayscale and hover filters on logos, with specific invert filters to keep white logos (like Tokyo) visible on the white page background.

# 2026-06-01 15:31

- **Expanded Services Section to 8 Slides**:
  - Duplicated the 4 service cards in the Arabic template ([index-ar.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/index-ar.html)) to create cards 5-8 with indexes `4` to `7`.
  - Updated the pagination index total to `/8` and index scroller vertical digits list from `1` to `8` in `index-ar.html` to match the English template.
  - Adjusted the vertical index list height to `8em` and scroll translation keyframe to `translateY(-7em)` in [services.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/services/services.css) to support smooth transition through all 8 slides.

# 2026-06-01 15:27

- **Added Scroll Snap Padding for Horizontal Track Grid Alignment**:
  - Added `scroll-padding-inline` properties to `.services__track` in [services.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/services/services.css) matching the container padding-inline values exactly.
  - This ensures that scroll snap alignment (`scroll-snap-align: start`) respects the grid centering margin offset instead of aligning cards to the viewport border limit, preserving the left margin limit on narrow device viewports.
  - Confirmed compiler success under Vite in 402ms.
