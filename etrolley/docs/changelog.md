# 📜 E-Trolley — Changelog

> Append-only history. Trim oldest entries when this file approaches 500 lines.

# 2026-06-03 12:57

- **Resized and Shifted Background Watermark**:
  - Increased `.hero__watermark`'s width clamp to `clamp(740px, 92vw, 1750px)` to expand the background "e-trolley" watermark text.
  - Shifted the watermark to the left by setting `left: -40px` relative to `.hero__content` on desktop to allow its lettering to extend beyond the start of the headline and button.
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

# 2026-06-02 19:23

- **Implemented Services Slider Horizontal Auto-Scroll and Index Synchronization**:
  - Replaced buggy CSS-only scroll timeline animation on `.services__index-active-list` with a smooth JS-driven translation (`transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)`).
  - Injected a bidirectional javascript block in [services.en.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/services/services.en.html) and [services.ar.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/services/services.ar.html) that handles horizontal auto-scrolling to next index every 3.5s.
  - Set slider to loop back to slide 1 upon reaching the end of the carousel.
  - Synchronized auto-scroll index dynamically with manual drag/scroll gesture using relative scroll boundaries.
  - Configured hover and touch event observers to pause autoplay during active user interaction.
  - Recompiled all pages and ran production Vite builds successfully.

# 2026-06-02 19:19

- **Fixed CTA Hover Text Contrast (Color Transition)**:
  - Changed `.steps__cta-text` color from hardcoded `#FFFFFF` to `inherit` and added a `0.25s` transition. This allows the text to smoothly transition to black (`#000000`) on hover when the white background slide fills, making it clearly readable.
  - Recompiled pages and built production Vite bundle successfully.

# 2026-06-02 19:18

- **Calculated Pixel-Perfect CTA Position under Card 3**:
  - Replaced manual static percentages on `.steps__cta` with a dynamic CSS `calc()` formula (`left: calc(2 * 360px + 2 * var(--steps-gap) + 180px)`) that tracks card widths and current grid gaps exactly, aligning the circle perfectly to the center line of Card 3 regardless of screen size.
  - Implemented the corresponding RTL mathematical formula (`left: calc(360px + var(--steps-gap) + 180px)`) in [_rtl.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/styles/_rtl.css).
  - Recompiled pages and built production Vite bundle successfully.

# 2026-06-02 19:17

- **Shifted CTA Circle Slightly Right**:
  - Adjusted steps CTA circle horizontal positioning (`left: 63.8%` for LTR and `left: 36.2%` for RTL in `_rtl.css`) to shift the circle slightly to the right on desktop layouts.
  - Recompiled pages and built production Vite bundle successfully.

# 2026-06-02 19:13

- **Positioned CTA Circle precisely under Card 03 (Percentage Centered)**:
  - Configured absolute percentage positioning (`left: 62.8%` for LTR and `left: 37.2%` for RTL in `_rtl.css`) with `transform: translateX(-50%)` to ensure the CTA circle centers exactly below Card 03 regardless of the layout structure or screen width.
  - Recompiled pages and built production Vite bundle successfully.

# 2026-06-02 19:12

- **Positioned CTA Circle Under Card 3 and Lowered to Prevent Overlap**:
  - Matched steps grid columns exactly to card widths (`repeat(4, 360px)`) on desktop to eliminate grid size mismatches.
  - Positioned the CTA circle using grid coordinates (`grid-column: 3; justify-self: center; left: auto; transform: none;`) to center it precisely under Card 3.
  - Set `bottom: -60px` on `.steps__cta` to shift it lower down so it does not overlap with Card 2 or Card 3.
  - Recompiled pages and built production Vite bundle successfully.

# 2026-06-02 19:11

- **Reduced Card Sizes & Centered CTA Circle Horizontally**:
  - Decreased steps card size to `360px` width and `356px` height (with aspect-ratio of `360 / 356`) on desktop to prevent the last card (Card 04) from overflowing or getting cut off.
  - Centered the "LET'S START NOW" CTA circle horizontally in the exact middle of the section using absolute alignment (`left: 50%; transform: translateX(-50%)`), and decreased its size to `190px` with a matching `34px` typography hierarchy.
  - Recompiled pages and built production Vite bundle successfully.

# 2026-06-02 19:09

- **Shifted Cards Grid Back to Normal Margin**:
  - Reset `.steps__grid`'s `margin-inline-start` back to `0` in [steps.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/steps/steps.css) to shift the cards slightly rightward, restoring normal alignment with page guidelines.
  - Recompiled pages and built production Vite bundle successfully.

# 2026-06-02 19:06

- **Shifted Steps Cards Grid to Page Edge (Negative Margin)**:
  - Applied a fluid negative margin `margin-inline-start: calc(-1 * clamp(24px, 3.5vw, 70px))` to `.steps__grid` in [steps.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/steps/steps.css) to shift the cards grid all the way to the screen boundary on desktop viewports.
  - Recompiled pages and built production Vite bundle successfully.

# 2026-06-02 19:05

- **Grid Positioned CTA Circle Exactly under Card 3**:
  - Refactored `.steps__cta` in [steps.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/steps/steps.css) to use grid-positioning (`grid-column: 3; justify-self: center; left: auto; transform: none;`) to keep it perfectly centered under Card 3 regardless of container margins.
  - Updated [_rtl.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/styles/_rtl.css) to map `.steps__cta` to `grid-column: 2` in RTL.
  - Fixed `:active` style to scale without translation offsets.
  - Recompiled pages and built production Vite bundle successfully.

# 2026-06-02 19:04

- **Applied Figma Card Dimensions and Left Grid Margin**:
  - Configured steps cards (`.steps__card`) to have an exact size of `422px` width, `418px` height, and `25px` `border-radius` on desktop viewports.
  - Set steps cards grid (`.steps__grid`) to start at `margin-inline-start: 68px` (representing `left: 68px` in Figma inspect).
  - Recompiled pages and built production Vite bundle successfully.

# 2026-06-02 19:01

- **Shifted Steps Eyebrow and Title to the Left**:
  - Decreased `margin-inline-start` on `.steps__eyebrow` ("Build a store") and `.steps__title` ("OUR CREATIVE PROCESS") to `clamp(60px, 8vw, 160px)` in [steps.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/steps/steps.css) to shift them leftwards.
  - Recompiled pages and built production Vite bundle successfully.

# 2026-06-02 19:00

- **Aligned Steps Cards Grid and CTA Circle to the Left Margin**:
  - Set `.steps__grid`'s `margin-inline-start` to `0` to align the cards grid exactly with the left boundary of the container, matching the QR code's left alignment above.
  - Recompiled pages and built production Vite bundle successfully.

# 2026-06-02 18:56

- **Shifted Steps Cards Grid and CTA Circle to the Left**:
  - Decreased `.steps__grid`'s `margin-inline-start` to `clamp(30px, 4vw, 80px)` to shift the cards grid and the absolute positioned "LET'S START NOW" CTA circle further to the left (to the right in RTL) as requested by the user.
  - Recompiled pages and built production Vite bundle successfully.

# 2026-06-02 18:55

- **Shifted Steps Headers to the Right and Reduced Size**:
  - Shifted `.steps__eyebrow` ("Build a store") and `.steps__title` ("OUR CREATIVE PROCESS") further to the right (to the left in RTL) by setting `margin-inline-start` to `clamp(120px, 16vw, 320px)`.
  - Reduced font sizes for both `.steps__eyebrow` (to `clamp(12px, 1vw, 17px)`) and `.steps__title` (to `clamp(32px, 3.8vw, 54px)`).
  - Recompiled pages and built production Vite bundle successfully.

# 2026-06-02 18:52

- **Increased Card Sizes, Raised Card 3, and Offset Circle CTA**:
  - Increased `.steps__grid`'s `max-width` to `1480px` to enlarge the cards slightly.
  - Set `.steps__card--high` vertical shift to `translateY(-200px)` (up from `-160px`) to lift Card 3 higher.
  - Offset the circle `.steps__cta` position downward to `bottom: -20px` to completely clear any overlap with Card 3's description text ("process.").
  - Recompiled pages and successfully rebuilt production Vite bundle.

# 2026-06-02 18:51

- **Increased Gaps between Cards & Confirmed Circle Alignment**:
  - Doubled the layout gap on `.steps__grid` in [steps.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/steps/steps.css) to `clamp(32px, 3.5vw, 64px)` to space the cards further apart as requested.
  - Confirmed and finalized circle `.steps__cta` centering under Card 3 (`left: 62.5%`).
  - Recompiled templates and rebuilt Vite assets cleanly.

# 2026-06-02 18:49

- **Reduced Size of Steps Cards and CTA Circle**:
  - Decreased `.steps__grid`'s `max-width` to `1380px` and set padding to `clamp(20px, 1.8vw, 30px)` on `.steps__card` to reduce square card sizes.
  - Reduced circular CTA `.steps__cta` size from `242px` to `210px` and changed text size to `40px` inside `.steps__cta-text`.
  - Moved `.steps__cta` positioning to `left: 62.5%` to center it exactly under Card 3.
  - Recompiled page templates and ran Vite production build successfully.

# 2026-06-02 18:45

- **Shifted Creative Steps Eyebrow and Title to the Right**:
  - Increased `margin-inline-start` on `.steps__eyebrow` and `.steps__title` in [steps.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/steps/steps.css) to `clamp(40px, 6vw, 120px)` to shift the English headers rightwards (and Arabic headers leftwards) on desktop viewports.
  - Recompiled page templates and ran Vite production build successfully.

# 2026-06-02 18:23

- **Fixed Responsive Mobile Horizontal Layout Scroll Bug & Pinned Sticky Animations**:
  - Removed `overflow-x: hidden` from the `html` element while keeping it on the `body` and setting it explicitly on the `main` layout element in [_reset.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/styles/_reset.css). This fully stops mobile viewports from sliding left/right while perfectly preserving standard window viewport scroll tracking for all sticky card decks and parallax features.
  - Recompiled page files and ran build successfully.

# 2026-06-02 00:05

- **Added CSS-Only Expandable Contact Us Drawer**:
  - Implemented a Figma-accurate premium Contact Us side drawer modal panel (`#contact-drawer`) inside [index.base.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/index.base.html) containing inputs for Name, Email, Phone Number, and Message.
  - Linked the floating "Send a message" / "أرسل رسالة" CTA buttons on the Home Hero section to target `#contact-drawer` directly.
  - Styled the panel in a new stylesheet [contact-drawer.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/hero/contact-drawer.css) with elegant backdrop-filters, custom inputs, rounded borders, shadows, focus glows, and bidirectional RTL mirroring.
  - Recompiled and ran production Vite build cleanly.

# 2026-06-02 00:00

- **Fixed Responsive Mobile FAQs Overlap with Navbar**:
  - Increased top padding on the `.faqs` section in `src/components/faqs/faqs.css` to `clamp(140px, 12vw, 200px)` to safely clear the sticky top navbar.
  - Adjusted the mobile-specific media query padding override under `max-width: 768px` from `60px 20px` to `120px 20px 60px 20px` to preserve a safe top clearance on small viewports.
  - Recompiled and ran production Vite build cleanly.

# 2026-06-01 23:59

- **Expanded FAQ Accordion to 9 Items and Set First Opened by Default**:
  - Rearranged the English and Arabic FAQ components to place "What is the importance of creating an online store?" / "ما أهمية إنشاء متجر إلكتروني؟" as the first item in the list.
  - Set the first accordion card to be opened by default using the `checked` state on the pure CSS accordion input toggle.
  - Added a 9th item in total to align exactly with the Figma design specification and order.
  - Recompiled and bundled all HTML templates and Vite production files cleanly.

# 2026-06-01 23:55

- **Created Separate FAQs Page & Refactored Navbar/Mobile Sidebars**:
  - Moved the FAQ Accordion section out of the About page (`about.html` / `about-ar.html`) into its own standalone pages: `faqs.html` (English) and `faqs-ar.html` (Arabic).
  - Created a new base layout template `src/faqs.base.html` for compilation.
  - Updated all desktop dropdowns and mobile sidebar accordion menus in `navbar.markup.html`, `navbar.en.html`, and `navbar.ar.html` to direct to `faqs.html` and `faqs-ar.html` instead of anchor hash hashes.
  - Registered the new page entries in `vite.config.js` and updated the `docs/project_structure.md` architecture snapshot.
- **Fixed Distinctive Designs RTL Hero Eyebrow Alignment**:
  - Shifted the "تصاميم مميزة" eyebrow slider in `designs-ar.html` to align with the right-most margin of the content column, mirroring the English layout exactly.
  - Added `align-items: flex-start` to `.designspage-hero__content` and updated RTL layout rules in `designspage.css`.

# 2026-06-01 23:52

- **Added FAQs to Desktop Dropdowns and Mobile Accordions**:
  - Registered and localized the "FAQs" / "الأسئلة الشائعة" links under the "About Us" / "من نحن" dropdown menus.
  - Linked the English dropdown/sidebar item to `about.html#faqs` in `navbar.en.html`.
  - Linked the Arabic dropdown/sidebar item to `about-ar.html#faqs` in `navbar.ar.html`.
  - Recompiled all static HTML layouts cleanly via standard compiler script and verified Vite builds successfully.

# 2026-06-01 23:49

- **Added Premium FAQs Accordion Section to About Us Page**:
  - Scraped live FAQ content from `https://etrolleystore.com/new/E-Trolley/faqs.html` to obtain the official translated question and answer sets.
  - Implemented a custom premium accordion component (`src/components/faqs/`) with high-fidelity custom animations and pure CSS toggle checks.
  - Sized the titles, descriptions, separators, and card shadows according to the exact Figma specifications (e.g. 75px titles, white cards, 12px border radius, 0.75px sage border line).
  - Maintained bidirectional alignment mapping for English LTR (`about.html`) and Arabic RTL (`about-ar.html`) viewports.
  - Registered and recompiled the pages template, running Vite production builds cleanly.

# 2026-06-01 23:43

- **Fixed Mobile Navbar Sidebar Collapsible About Us Submenu**:
  - Replaced the simple static link for "About Us" under list item `04` in the mobile sidebar panel with a high-fidelity pure CSS accordion toggle submenu.
  - Implemented hidden toggle inputs and interactive label controls matching the exact look-and-feel (large display typography, hover slide shifts, text underlines, chevron rotation) of other menu links.
  - Supported LTR and RTL viewports, ensuring sub-menu items (Our Story, Blogs, Designs) indent and animate beautifully with correct chevron mirror directions.
  - Updated master `navbar.markup.html` and language-specific component mockups (`navbar.en.html`, `navbar.ar.html`).
  - Recompiled all page templates and ran Vite production builds successfully.

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
