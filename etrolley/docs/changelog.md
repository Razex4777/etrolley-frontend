# 📜 E-Trolley — Changelog

> Append-only history. Trim oldest entries when this file approaches 500 lines.

# 2026-05-28 14:52

- 📐 **Brand Footer Component Design, Implementation & Mounting**:
  - **Symmetrical 4-Column Layout**: Structured a semantic, mobile-first responsive HTML layout in [footer.html.js](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/footer/footer.html.js). Includes Quick Links, a dynamic Site Map, circular Qatari contact badges, and staggered social links.
  - **Premium Brand Cart Logo**: Replaced the placeholder logo inside [footer.html.js](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/footer/footer.html.js) with the user's high-fidelity custom outline cart logo SVG, using a highly optimized, high-performance image reference to [logo-etrolley-28bffb.png](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/public/images/logo-etrolley-28bffb.png) to keep javascript bundle sizes lightweight. Added `#0A3130` dark teal background to the logo box in [footer.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/footer/footer.css).
  - **Responsive CSS Layout & Interactive Lifts**: Implemented a responsive grid (`1.2fr 1fr 1fr 1.5fr`) in [footer.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/footer/footer.css) that adapts elegantly to mobile. Embedded micro-animations on interactive sitemap links and contact indicators.
  - **Wide Dark Teal CTA Pill**: Integrated the full-width `"build your store now"` button, complete with radial-gradient glow hover masks (`.footer__cta-glow`) and GSAP elastic scale transitions.
  - **GSAP ScrollTrigger Entrance Revelations**: Configured staggered timeline staggers inside [footer.js](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/footer/footer.js) to elegantly animate columns, circular social badges, the giant CTA, and the copyright bar upon scrolling down.

# 2026-05-27 18:15

- 📐 **Services We Provide Card Horizontal Alignment & Space Calibration**:
  - **Dynamic Centered Grid Offset Formula**: Upgraded the `margin-inline-start` on `.services__card:first-child`, `margin-inline-end` on `.services__card:last-child`, and the scrollbar track's `margin` to a mathematically bulletproof centering offset formula: **`max(clamp(24px, 3.5vw, 70px), calc((100vw - var(--canvas-w)) / 2 + clamp(24px, 3.5vw, 70px)))`** in [services.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/services/services.css).
  - **Perfect Left Alignment under Section Title**: On ultra-wide or centered resolutions where the parent `.services__inner` bounds are centered, the first card now aligns perfectly under the padded grid boundary of the section title. On standard, laptop, and mobile resolutions, the first card automatically snaps back to a gorgeous, fluid edge margin, resolving the "stuck in the max left" layout alignment issue completely.

# 2026-05-27 18:08

- 🛠️ **Services We Provide Card Sizing & Viewport Calibration**:
  - **Dynamic Card Sizing Formula**: Replaced `.services__card`'s fixed bounds with a mathematically precise responsive calculation: **`flex: 0 0 clamp(360px, calc((100vw - 2 * clamp(24px, 3.5vw, 70px) - 84px) / 3.5), 520px)`** in [services.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/services/services.css#L296-L311). This formula dynamically sizes the cards so that exactly 3.5 cards are visible at standard desktop resolutions (3 fully visible cards + 4th card exactly 50% cut off at the right edge) for a high-end horizontal scroll affordance.
  - **Zero Viewport Horizontal Bleed**: Changed `.services__track-wrapper` from a negative margin to `width: 100vw; margin-left: calc(50% - 50vw)` in [services.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/services/services.css#L234-L237). This mathematically stretches the track wrapper exactly flush to the screen edges with zero horizontal bleed, resolving page horizontal overflow and guaranteeing that the first card always aligns perfectly under the padded grid title on LTR and keeps a beautiful padding-left gap from the screen limit.
  - **Proportional Footer Body**: Standardized the vertical padding of `.services__card-body` to a highly readable **`32px 32px 30px`** and gap spacing to **`16px`** to maintain a premium visual scale.
  - **Satisfying CTA Buttons**: Calibrated the "Learn More" circular button height parameter `--btn-h` to **`64px`** and font-size to **`16px`**, keeping a robust, proportional display.
  - **Aligned Button Marquee Text**: Set the marquee loop text font-size in `.services__card-btn-item` to **`20px`** for outstanding legibility and perfect vertical centering.

# 2026-05-27 17:58

- 🛠️ **What Makes Us Different? Section Header Hiding & Card Centering Pin Corrected**:
  - **Fixed Selector Bug**: Corrected `.different.is-pinned` selectors to `[data-component="different"].is-pinned` in [different.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/different/different.css). Since ScrollTrigger toggles `.is-pinned` on the section host component rather than the inner container class, this selector bug previously prevented the CSS overrides from taking effect.
  - **Absolute Header Position on Desktop**: Positioned `.different__header` absolutely (`position: absolute; top: clamp(60px, 5vw, 100px); left: 50%; transform: translateX(-50%)`) specifically on desktop screens (`min-width: 769px`). This takes the header out of the normal layout flow, eliminating any vertical layout shifts or jumping when it fades out on pin.
  - **Static Parent Containment**: Set `.different__inner` to `position: static` inside the `@media (min-width: 769px)` query to remove the relative positioning context. This ensures the absolutely positioned header aligns relative to the outer `.different` section container instead of `.different__inner`, preventing the cards from overlapping the title in unpinned scrolling states.
  - **Premium Fade-Out Transition**: Styled the absolute header to fade out smoothly to `opacity: 0; visibility: hidden; pointer-events: none; transform: translate(-50%, -40px)` when pinned.
  - **Dynamic Fixed-Navbar Clearance**: Modified `.different`'s padding on desktop when `.is-pinned` is active to dynamically calculate clearance below the fixed navbar: `padding-top: calc(var(--nav-h) + clamp(20px, 2.5vw, 40px)); padding-bottom: clamp(20px, 2.5vw, 40px)`. This ensures that the active cards clear the fixed navbar perfectly with an elegant margin and are positioned in the absolute vertical middle of the screen with zero clipping at the top.
  - **Zeroed Pinned Transform**: Reverted the previous manual track `translateY(-160px)` to `translateY(0)` when pinned, letting the padding transition perfectly and naturally shift the deck.
  - **Off-Screen Starting Position & Visible Overflow**: Changed the initial position of subsequent cards in [different.js](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/different/different.js) from `yPercent: 100` to `yPercent: 180` to completely hide them below the viewport's bottom edge initially. Concurrently changed `.different__deck` to `overflow: visible` in [different.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/different/different.css) to allow cards to slide in seamlessly from the very bottom of the screen without clipping.

# 2026-05-27 17:50

- 🛠️ **What Makes Us Different? Slide Stacking Transition & Layout Optimization**:
  - **Opaque Card Stacking**: Modified the scroll animation in [different.js](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/different/different.js#L37-L79) so that subsequent slides have `autoAlpha: 1` set instantly upon initial layout. Animating only `yPercent` during scroll ensures cards slide upward with 100% solid opacity, eliminating the transparent overlap ghost effect.
  - **Full-Resolution Slide Scaling**: Increased the slides' container max-height threshold inside [different.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/different/different.css#L130-L141) on desktop viewports from `64vh` to **`78vh`** (matching the exact layout style of `psstudios.co`). The slides now show in magnificent full resolution and capture a much larger portion of the viewport height.
  - **Pin-Triggered Header Hide & Shift**: Added an `onToggle` event listener on the main ScrollTrigger to dynamically apply an `.is-pinned` class to the section when it locks in place for card scrolling. Inside [different.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/different/different.css#L37-L44), this class fades out the section eyebrow and headline (`opacity: 0; transform: translateY(-30px)`) immediately upon pinning. Concurrently, shifted the entire card deck upward by **`translateY(-90px)`** when pinned to completely lift the layout away from the bottom of the viewport/taskbar, providing outstanding visibility and ensuring zero card clipping.

# 2026-05-27 17:40

- 📐 **Our Creative Process Component Layout Symmetrization & Section Scaling**:
  - **Perfect Square 1:1 Aspect Ratio**: Updated the card styling inside [steps.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/steps/steps.css#L147-L162) to use `aspect-ratio: 1 / 1` and set `min-height: auto` across all screen resolutions (desktop, tablet, and mobile). All four cards are now perfectly symmetrical and match frame sizes flawlessly.
  - **Card 03 Lift Restoration**: Re-implemented the `-180px` upward displacement for the 3rd card (Card 03) specifically on desktop viewports. This prevents the circular "LET'S START" button from overlapping and colliding with the text copy inside Card 03, maintaining the premium, layout-balanced overlap.
  - **Section Scale and Padding Optimization**: Decreased the vertical padding of the creative steps section to ensure full visibility at standard desktop resolutions. Set a perfectly balanced `max-width: 1560px` on `.steps__inner` and minimized side margins via `padding: 0 clamp(20px, 2.5vw, 40px)` so that the cards expand to maximum possible width on desktop displays, scaling up the headline font-size to `clamp(40px, 5.2vw, 76px)`, and card padding to `clamp(24px, 2.2vw, 36px)`.
  - **Bright White Outlined Card Numbers**: Restored the blocky brand-identity **`Unbounded`** font family for the card numbers (01-04) to perfectly match the original visual mockup. Fixed the dark/faded appearance of the outline by setting a crisp, high-contrast, solid bright white stroke (`-webkit-text-stroke: 1.5px #FFFFFF`) on a solid dark card-blending background fill (`color: #161616`), making the outline stand out beautifully.
  - **Removed Card Hover Animations**: Cleaned up the CSS and JS hover rules. Completely removed all `.steps__card:hover` transform translations, soft gradient hover wash pseudo-elements, and the number scaling/rotation animations from both CSS and [steps.js](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/steps/steps.js). 

# 2026-05-27 07:46

- 🛠️ **Support & Help CTA Card Overhaul**:
  - **Trolley Layering Fix**: Adjusted `z-index` values so the yellow/peach background cart `.support__cart-back` has `z-index: 1` and the card wrapper `.support__inner` has `z-index: 2`. This guarantees the yellow cart sits *behind* the white card block while remaining *above* the section's white background tones, resolving GSAP-induced stacking conflicts.
  - **Premium Drop Shadow**: Added a gorgeous, pronounced 3-layer drop shadow to `.support__card` (`box-shadow: 0 40px 90px rgba(18, 18, 18, 0.12), 0 10px 30px rgba(49, 108, 107, 0.06), 0 0 1px rgba(18, 18, 18, 0.1)`) for a premium frame appearance.
  - **Standardized Call Icon**: Replaced the previous phone handset SVG path with the canonical Bootstrap `telephone-fill` path, scaled (`scale(2.5)`) and centered (`translate(26, 25.5)`) perfectly to point up-right for a native, balanced look.
  - **Contact Icons Position Adjustment**: Shifted the three social/contact action buttons further leftwards on desktop by increasing `.support__actions`'s `padding-inline-end` to `clamp(240px, 28vw, 460px)` (up from `180px` to `380px`), creating a tighter, more cohesive integration with the copy.

# 2026-05-26 23:47

- 📐 **Hero Section Image Shift Upward** — Shifted the hero section illustration/image upward by `70px` by applying `transform: translateY(-70px)` directly to the inner `.hero__image img` element. This prevents GSAP's entrance and parallax timeline (which animates the parent `.hero__image` container's `transform: translateY(0)`) from overriding the style, satisfying the user's styling request seamlessly.

# 2026-05-27 00:41

- 🎬 **GSAP Scroll Animation Overhaul — Clients, Partners & Designs** — Upgraded the entrance choreography for all three sections with cinematic ScrollTrigger timelines:
  - **Clients**: eyebrow slide → circles elastic pop → title clipPath wipe reveal → description fade → arrows bounce-in → cards scale-up stagger.
  - **Partners** (NEW): dedicated ScrollTrigger fires when the banner enters viewport — title slides up with `expo.out`, each logo item staggers in with `back.out(1.4)` bounce for a premium cascade effect.
  - **Designs**: watermark elastic spin-in → eyebrow slide → circles elastic pop → title clipPath reveal → arrows bounce → card labels fade → cards scale-up stagger.
- 🐛 **Fixed `data-reveal` double-animation conflict** — removed redundant `data-reveal="fade-up"` attributes from `.clients__title`, `.designs__title`, `.partners`, and all `.partners__logo-item` elements that were *also* animated by component-level GSAP timelines, preventing the global `reveal.js` system from double-hiding elements.
- ✨ **Enhanced animation techniques**: added `clipPath: inset(0 0 100% 0) → inset(0 0 0% 0)` wipe reveal on section titles, `elastic.out(1, 0.6)` on eyebrow circles, and `scale: 0.92 → 1` on cards for a more dimensional entrance.

- 🖼️ **"Our Partners" & "Distinctive Designs" Real WebP Image Integration** — converted all the user's uploaded payment partner PNG logos (`my-fatoorah`, `pass`, `sadad`, `jeyaad`, and `edfapay`) and distinctive designs template category PNG illustrations (`health-beauty`, `perfumes`, `electronics`, `flowers`, and `outfits`) to highly optimized WebP format and deleted the original PNG source files.
- 🎨 **Code Cleanup & SVG Illustration Pruning** — removed the massive inline SVG code for both the payment partners and distinctive designs illustrations, replacing them with high-performance WebP image elements (`<img>` with `loading="lazy"`).
- 📐 **Responsive Sizing & Micro-Interactions** — styled the new images using fluid `clamp()` sizing for smooth scaling across all devices and implemented a premium micro-scale hover effect on the designs category graphics for an immersive, interactive touch.
- ⚙️ **Vite Compilation Success** — successfully built the Vite production bundle with zero warnings or errors.

# 2026-05-26 23:24

- 🖼️ **"Our Renowned Clients" Real WebP Logo Integration** — converted all the user's uploaded client logo PNG files (`gazali`, `tokyo`, `yarnista`, `urban`, and `connection-by-alnaim`) into highly optimized WebP format with an average file size reduction of **88%** (reducing page load size from 552 KB to just 49 KB!). Updated the `clients.html.js` template to cleanly render actual `<img>` tags for the carousel cards, and styled the logos in `clients.css` with container padding and `object-fit: contain` for a premium, distortion-free branding display.
- 📐 **"Clients" & "Distinctive Designs" Vertical Gap Spacing Fix** — resolved the huge white gap between the payment partners banner and the designs title. Removed the bottom padding of the clients section completely (`padding-bottom: 0`), letting the partners banner rest flush at the bottom edge. Tightened the top padding of the designs section (`padding-top: clamp(40px, 5vw, 80px)`), pulling the entire section up close to the partners block for a compact, integrated layout.
- 🎨 **"Distinctive Designs" Seamless Background Blending** — removed the section divider line (`border-top`) in `designs.css` to allow the clients section background and designs section background to blend seamlessly into a single white canvas.
- 🌐 **"Success Stories" & "Distinctive Designs" Carousel Navigation RTL Fix** — resolved the reversed chevron directions and layout mismatch for LTR/RTL button rows in both the clients success stories and designs carousels. Dynamically check `isRTL()` to render the left-pointing chevron (`<`) on the physically left next-button, and the right-pointing chevron (`>`) on the physically right prev-button when in Arabic RTL orientation.
- 📐 **"Distinctive Designs" Navigation Buttons Alignment** — aligned the carousel forward/backward button stack (`.designs__header-right`) to sit directly above the last card (`Outfits`) rather than floating in empty whitespace on the right screen edge. Achieved by applying a symmetrical `margin-inline-end: clamp(120px, 16vw, 280px)` that mirrors the left-side text offset exactly, with dynamic reset to `0` inside the mobile media query.
- 📐 **"Distinctive Designs" Carousel Alignment** — moved the templates card carousel further to the right on desktop, aligning it perfectly under the shifted `Distinctive Designs` title text rather than the left watermark. Done by applying a precise `padding-inline-start` and matching `scroll-padding-inline-start` calculation (`calc(clamp(120px, 16vw, 280px) + clamp(24px, 4vw, 80px))`) directly on the `.designs__track` scroll container. Handled clean responsive resets to default margin paddings for mobile viewports below 980px.

# 2026-05-26 23:22

- 📐 **"Our Partners" Flat Block Design** — updated the `.partners` banner block in `clients.css` to use sharp corners (`border-radius: 0`) instead of rounded corners as requested by you, providing a clean flat container backdrop.
- 📐 **Generous and Consistent Section Paddings** — standardized and enlarged vertical paddings across all key sections including the Above-the-fold Hero container (`.hero__inner`), Stacking Slide Deck (`.different`), Success Stories Carousel (`.clients`), and Distinctive Designs Carousel (`.designs`) to match the spacious, premium, high-impact padding parameters used in the "Our Creative Process" (`.steps`) and "Services We Provide" (`.services`) layouts.

# 2026-05-26 23:12

- 📐 **"Distinctive Designs" Section Block** — designed, built, and mounted the brand new store templates category carousel component under `src/components/designs/`. Follows the Figma specifications: light backdrop, symmetrical margins, double overlapping circles eyebrow ("Select one"), horizontal category carousel, and mobile drag-to-scroll compatibility.
- 🎨 **Tilted Qatari Perfume Bottle Watermark & Header Alignment** — copy-pasted and integrated the exact high-fidelity vector outline SVG for the tilted perfume bottle provided by you on the left side of the header. Increased its layout opacity to `0.7` in CSS and internal path group opacity to `0.85` in the template to make the golden essential oils details extremely distinct and clear. Shifted the watermark rightward (`left: clamp(20px, 4vw, 80px)`) and the title block `.designs__header-left` (containing `SELECT ONE` and `Distinctive Designs`) heavily to the right (`margin-inline-start: clamp(120px, 16vw, 280px)`) in LTR, providing outstanding layout balance and zero overlap. Configured a responsive margin reset to `0` for mobile viewports.
- 🎨 **High-Fidelity 3D/Flat Vector Category Graphics** — drew highly detailed, premium custom SVGs representing each design category inside soft-tinted colored backings:
  * **Health & Beauty** (blue delivery truck carrying orange heart-badge parcel, `#EBF2FF` backing)
  * **Perfumes** (lavender `#F7F2FA` backing, indigo delivery van and gold spray bottle lockup)
  * **Electronics** (light blue `#F0F4FF` backing, 3D isometric tech cube displaying NFT and circuit nodes)
  * **Flowers** (soft rose `#FFF0F2` backing, slate tablet/phone displaying pulsing heart/blossom and Wi-Fi waves)
  * **Outfits** (light blue `#F0F4FF` backing, open laptop displaying heart badge and floating pink hearts)
- 📐 **Figma Centered Container Labels** — positioned the card display labels above each deck card (`designs.container` translated as `Container` / `حاوية`) in primary-light sage green, matching the Figma layout screenshot exactly.
- 📐 **"Our Partners" Section Block Banner** — designed and implemented a full-width bottom banner section styled as an elegant payment partner block underneath the clients carousel. Implemented a beautiful, smooth gray-to-beige linear gradient backdrop matching the Figma screenshot exactly.
- 🎨 **High-Fidelity Payment Vector Logos** — created custom, accurate, and highly detailed inline SVG logo models for the 5 key regional payment partners: **My Fatoorah** (stacked cyan/blue card swipe lines + typography), **Pass** (teal location pin check + lowercase typography), **Sadad** (red/maroon vector arrow S icon + bi-directional typography), **Jeyaad** (sleek royal blue horse outline contour + typography), and **EdfaPay** (diagonal green parallel slash badges + typography). These act as high-fidelity models before the user uploads their own PNG assets.
- 🎨 **First Client Card Update to Gazali** — replaced E-Trolley with **Gazali for Oudh & Perfumes** (`غزالي للعود والعطور`) in the first slot and repeated in the sixth slot of the clients carousel. Created a gorgeous, luxury vector illustration in pure SVG to depict a stylized golden gazelle outline on a deep purple background with bi-lingual typography so that the card renders perfectly without placeholders.
- 📐 **Figma Centered Placeholder Labels** — updated `clients.html.js` to render the translated "Store Name" (`اسم المتجر` / `Store Name`) above all carousel cards, matching the placeholder labels visible in the user's Figma design screenshot.

# 2026-05-26 19:46

- 🎨 **Clients Eyebrow Design Alignment** — replaced the old slider-track/slider-knob in `.clients__eyebrow` with the premium lines-and-overlapping-circles layout used in the "Services We Provide" section, matching the design mockups precisely. The circles now render at 36px diameter with a 4px border (sand-colored solid on the left, teal hollow on the right) overlapping transparently over a light background.
- 🌐 **SVG Flag Icons Dropdown** — replaced native Unicode flag emojis in the language dropdown with high-fidelity, color-accurate inline SVG flags for both the United Kingdom (English) and Qatar (Arabic). This fixes Windows compatibility issues (where standard flag emojis render as plain text 'GB' and 'QA') and guarantees consistent, crisp flag rendering on all operating systems.
- 🎨 **Horizontal Pagination & Description Alignment** — modified `services.css` to align the sage-green services section description and `1/4` slide pagination indicator side-by-side on the same horizontal row, matching the Figma reference layout.
- 🗑️ **Hero CTA Cleanup** — removed the link label text (`hero.linkLabel` eyebrow) from the main hero section container to streamline the CTA block.

# 2026-05-26 18:40

- 🎨 **Services Section Top Border Standing Cart** — added top offset margin (`100px`) and set section overflow to `visible` to allow the shopping cart symbol to stand over the top border. Created a multi-layered, absolute-positioned cart container: the beige chassis frame is layered in front (`z-index: 2`) and the dark teal basket is behind it (`z-index: 1`) in a unified aspect-ratio viewBox coordinate system. Applied a scale-X flip transform to position the handle grip on the left, matching the design mockups. Integrated reveal animations in the GSAP timeline.
- 📐 **"Services We Provide" Section Implementation** — built and mounted the new sage-green (`#9AB5AD`) services section featuring a horizontal swipe gallery of cards (Marketing, Photography, Support, Social Media) scroll-snapped with custom webkit scrollbar rules. Integrated the brand's flipped shopping cart watermarks (`Group 141` and `Group 140`) and the white double-circle eyebrow slider decorations. Added full translation keys in `i18n.js` and hooked up a scroll listener that dynamically updates the pagination index (`1/4` to `4/4`) based on direction-agnostic card centering. Generated 4 custom visual card graphics.

# 2026-05-26 18:35

- 🎨 **Hero Section Social Icons Upgrade** — updated the flat social media links in the hero section's right rail to use the premium 3D glossy bubble icon design (`fb`, `x`, `linkedin`, `instagram`) from the navbar. Replaced background fills with transparent backdrops and integrated the new dynamic `social3D` SVG rendering. Adjusted dimensions to `40px` on both desktop and mobile viewports with lift-up and brightness filter hover animations.
- 🎨 **Side Navbar Social Icons & Centering Fix** — aligned the social icons in the mobile menu's footer horizontally in the center. Fixed the vector paths and geometry for all four 3D glossy bubble social icons (`fb`, `x`, `linkedin`, `instagram`) to center their logos perfectly. Replaced the corrupted, complex path for the Instagram icon with clean, standard SVG shapes (camera border rectangle, lens circle, and flash dot) to resolve rendering and cutout bugs.

# 2026-05-26 18:32

- 📐 **What Makes Us Different? Mobile Card Dimensions & Aspect Ratio Fix** — increased the card deck track width constraint to `min(100%, 480px)` and changed the aspect ratio to `350 / 430` in the mobile media query in `different.css`. This widens the cards to fill the mobile viewport screen, forming clean horizontal-rectangle shapes (matching the style of the "Our Creative Process" cards) rather than narrow vertical boxes.

# 2026-05-26 18:31

- 📱 **What Makes Us Different? Stacking Scroll & Pinning on All Resolutions** — restored ScrollTrigger pinning and card stacking overlays on all viewport sizes including mobile and tablets. Made `.different` height (`100vh`) and vertical-centering layout global in `different.css`. Set a responsive vertical 9:16 aspect ratio (`360 / 640`) on the track (`.different__track`) below `768px` so that cards fit the vertical viewport and stack neatly without layout clipping. Configured the slides to use vertical grid rows (`1.1fr 1fr`) on mobile to stack the photo on top of the text panel.

# 2026-05-26 18:29

- 📱 **What Makes Us Different? Responsive Scroll Animations Fix** — restricted ScrollTrigger pinning and card stacking animations in `different.js` to desktop viewports (`min-width: 769px`) using `gsap.matchMedia()`. On mobile/tablet viewports (`max-width: 768px`), all GSAP style overrides are cleared (`clearProps: "all"`) and replaced with a clean, standard scroll fade-up stagger animation to prevent page scroll locks, scroll gaps, and layout overlap.

# 2026-05-26 18:27

- 🎨 **Our Creative Process? CTA Button Reordering on Mobile** — adjusted the layout order in `steps.css` for viewports below `880px` (mobile/tablet). Used CSS Grid `order` properties to position the circular "LET'S START" button visually between Card 03 and Card 04. Added a logical start margin (`margin-inline-start: -20px`) and set `justify-self: start` to align the button to the start edge and overlap it slightly, matching the Figma design.

# 2026-05-26 18:25

- 📱 **Our Creative Process? Mobile Grid & Stacking Fix** — resolved the layout corruption and overlapping cards issue on tablet and mobile viewports. Modified `steps.js` to use `gsap.matchMedia()`: on viewports above `1100px` (desktop), Card 03 retains its `-180px` pop-up offset and scroll parallax; on viewports below `1100px` (tablet/mobile), all cards align symmetrically at `y: 0` with uniform `-8px` hovers and no parallax. Increased the mobile single-column stacking breakpoint in `steps.css` from `600px` to `880px` to ensure cards stack vertically in a clean single column on all mobile and portrait tablet screens.

# 2026-05-26 18:22

- 🎨 **What Makes Us Different? Slider Circles Alignment** — updated the section eyebrow slider track and overlapping sand/teal circles in `different.css` to match the design, width (`176px`), height (`25px`), circle diameter (`36px`), border-width (`4px`), and overlap offsets (`18px`) of the slider in the "Our Creative Process" section, adapting the background fill color to the light-themed background (`#F8F9FA`).

# 2026-05-26 18:20

- 🎨 **What Makes Us Different? Gray Card Contrast & Visibility Fix** — resolved the contrast issue of Card 1 blending in with the light gray (`#F8F9FA`) background of the section. Changed Card 1's gray panel background from `#F5F5F7` to `#E8E8ED` (a richer, Apple-style light-medium gray) and added a subtle border (`1px solid rgba(18, 18, 18, 0.08)`). Also added subtle outlines to the photo containers for both the gray and white theme slides to cleanly demarcate card boundaries.

# 2026-05-26 18:18

- 🖼️ **What Makes Us Different? Card 3 Image Replacement** — replaced the dashboard-themed mockup image (`different-slide-3.png`) with a new premium commercial product photograph representing physical business/e-commerce tools (minimalist cardboard box, scanner, and contactless payment terminal) on a concrete tabletop to avoid showing software dashboard screens as requested by the user.

# 2026-05-26 18:14

- 📐 **What Makes Us Different? Card Deck Horizontal Centering Fix** — resolved the layout alignment bug where the card deck shifted left by `50px`. Set `width: auto` on `.different__deck` (instead of `width: 100%`) so that the negative margin (`margin: -50px`) expands the container symmetrically on both left and right sides.


# 2026-05-26 18:12

- 📐 **What Makes Us Different? Card Centering and Size Optimization** — centered `.different__track` horizontally inside `.different__inner` by adding `margin: 0 auto`. Increased the maximum height constraint on desktop from `62vh` to `75vh` to scale up the cards and fill the viewport with a premium layout.


# 2026-05-26 18:11

- 📐 **What Makes Us Different? Viewport Alignment & Height Constraining** — fixed viewport clipping and the bottom white-bar bleed on smaller screen sizes. Set the `.different` host section to `height: 100vh; padding: 0;` and centered layout vertically on desktop. Triggered GSAP pinning on `host` starting at `top top` to lock it perfectly in the viewport. Constrained `.different__track` width using `width: min(100%, calc(1788 / 798 * 62vh))` to ensure cards scale proportionally and never overflow the vertical height of the screen.


# 2026-05-26 18:07

- 🐛 **What Makes Us Different? Pin Spacer and Stacking Layout Fixes** — fixed the "white spacer gap" bug below the section by pinning the entire `.different` host section (trigger: `host`) instead of pinning just the deck, ensuring background `#F8F9FA` remains locked in the viewport. Fixed the "card bounciness" bug by removing individual aspect ratios on grid cells and setting `grid-template-columns: 1fr 1fr` to divide width symmetrically. Added explicit z-index values on cards to ensure flawless stacking order.


# 2026-05-26 18:03

- 🐛 **What Makes Us Different? visual overflow & stacking bugfixes** — resolved the card overlap and peaking issues on high resolution or zoomed out viewports. Set `overflow: hidden` on `.different__deck` with a `50px` padding/negative-margin offset to prevent clipping the card box-shadows while hiding the cards waiting below. Configured GSAP to use `autoAlpha: 0` for non-active cards initially and transition them to `autoAlpha: 1` as they slide up. Simplified the timeline by removing the previous slides scale-down and y-translation animations, ensuring the new active card covers the previous ones completely.


# 2026-05-26 18:02

- ⚡ **What Makes Us Different? E-Trolley Content & Scroll Optimization** — restored the correct E-Trolley copywriting (Easy online store, Designs that match, Powerful tools) in `i18n.js` and regenerated e-commerce template and dashboard mockup images for Card 2 and Card 3. Card 1 image uses the correct laptop bureau photo (`online-store-2.png`). Optimized ScrollTrigger scroll length from `360%` to `180%` and tuned the scrub response to `0.4` to resolve heavy/sluggish scrolling.


# 2026-05-26 17:58

- 🎨 **What Makes Us Different? 3-Card Stack & Theme Customization** — implemented three stacked cards with custom alternating themes (1st is gray, 2nd is black, and 3rd is white) to match the new Figma designs. Applied the bold, geometric `Unbounded` font to card titles and numbers. Rendered numbers `01`, `02`, `03` as transparent with solid stroke outlines. Generated custom premium mockup assets for Card 2 and Card 3, copied them to the assets folder, and updated English and Arabic translation dictionaries in `i18n.js`. Re-enabled the ScrollTrigger pinning and sequence deck stacking timeline.


# 2026-05-26 17:55

- 📐 **What Makes Us Different? single banner layout implementation** — converted the section to display a single premium banner card based on Figma Component 18. Removed the slider progress indicators, navigation, and ScrollTrigger deck pinning logic. Set the photo to use the correct `online-store-2.png` image displaying the laptop bureau desk without overlap, and configured the teal container on the right with the number `01` and description, aligned symmetrically with a responsive gap.


# 2026-05-26 17:26

- 🗑️ **What Makes Us Different? banner styling cleanup** — removed all unused/dead CSS classes related to the deleted slide banners, slide transitions, content containers, descriptions, outlined numbers, and responsive slides styling from `different.css`. Simplified `.different` padding to be symmetric and set header `margin-bottom` to 0. Updated file descriptions in `project_structure.md`.


# 2026-05-26 17:22

- 📐 **"What Makes Us Different?" section implementation** — created the stacking deck slideshow component under `src/components/different/`. It contains a translatable slide template, styling for alternating light-theme slides (Teal, White, Teal), and a GSAP ScrollTrigger timeline that pins and stacks slides vertically on desktop. Added localized texts in `i18n.js` and mounted it in `index.html` and `main.js`.
- 🎨 **Layout & Typography Refactoring** — removed the image column from the slides completely, centered the eyebrow and title headings, and updated all typography to use the display font (`Outfit`/`Inter`) rather than `Unbounded` to match the exact font and layout in the design reference.

# 2026-05-26 15:26

- 📐 **Promo illustration repositioning** — adjusted `.steps__promo` and `.steps__paragraph` in `steps.css` to position the "No technical skills required" illustration directly next to the steps closing paragraph on desktop, resolving the wide gap. Set `margin-inline-start: auto` and a clamped `margin-inline-end` on the promo to pull it rightward, matching the paragraph's 50% width alignment.

# 2026-05-26 15:16

- 🔠 **Unbounded font integration** — updated `index.html` to load the geometric sans-serif `Unbounded` (weights 300 to 900) from Google Fonts. Codified `--font-unbounded` in `_tokens.css`.
- 🎨 **Steps typography match** — updated the interactive steps headline (`OUR CREATIVE PROCESS`) and numbers (`01` through `04`) to use the brand font `Unbounded` to match the exact visual style of the `psstudios.co` reference section.
- 📐 **Outline styling refinement** — adjusted title outlined stroke width to `1.5px` and made the numbers transparent filled with `1.5px` stroke outline.
- 🔠 **Typography stroke outline overlap fix** — resolved the variable font glyph overlap issue on the letter `R` (and card numbers like `03`) when using `-webkit-text-stroke` by applying solid background fills (`#000000` for title, `#161616`/`#1f1f1f` for card numbers) with `paint-order: stroke fill;`. This forces the browser to render the outline behind the filled glyph body, masking internal intersecting paths.
- 🔘 **"LET'S START" button redesign** — redesigned the CTA button structure and styling to match the original design layout. The button features a hollow circle (transparent background, 1.5px solid white border) with centered two-line white text (`LET'S` and `START` in `Unbounded` font). On hover, a solid white circular background (`.steps__cta-bg`) expands smoothly from the center to fill the button (using a `620ms` decelerating transition ease), transitioning the text to black. Includes a GSAP-driven magnetic hover offset and smooth scale-up animation.
- 📐 **Paragraph horizontal alignment & overlap fix** — resolved the absolute CTA overlap by keeping the steps closing paragraph outside `.steps__grid` in `steps.html.js` and styling it with logical properties (`margin-inline-start: 50%`, `width: 50%`) in `steps.css`. This starts the paragraph text horizontally aligned under Card 03/the "LET'S START" button position and spans it to the right edge of the section, while completely separating it vertically from the absolutely positioned button. Handled proper responsive resets (`margin-inline-start: auto`, `width: auto`) in media queries.
- 🎨 **Promo illustration integration** — added the `Group 119` Figma promo illustration to the left side of the steps footer (`.steps__footer`). Created a hand-drawn smile speech bubble SVG (`.steps__promo-message`), layered three slanted brush stroke shapes (`.steps__promo-green`), and added a high-contrast white rounded pill (`.steps__promo-pill`) displaying the localized tagline "No technical skills required." (in English and Arabic). The layout naturally divides 50/50 on desktop (promo left, paragraph right) and stacks vertically on mobile devices.

# 2026-05-26 15:06

- 🎨 **Steps slider adjustment** — resized overlapping circles to 36px, set matching 4px borders, and centered the pair exactly in the middle of the slider track with a 50% overlap. Thickened the slider track to 4px with solid opacity.
- 🔠 **Steps typography redesign** — changed steps headline to use a bold, modern display font (`Outfit`/`Inter` at weight 900) in all uppercase to match the reference design. Styled the three lines as requested: Line 1 (`OUR`) is outlined with transparent fill, Line 2 (`CREATIVE`) is filled with premium cool gray, and Line 3 (`PROCESS`) is filled with the theme's ink color at a smaller, tracked-out size. Updated translations accordingly.
- 🔠 **Typography R outline fix** — resolved the variable font overlapping glyph path bug (visible on the letter 'R') by setting `paint-order: stroke fill;`, increasing the stroke to `4px`, and using a solid fill (`#000000` to match the dark background), causing the fill to paint on top of and mask any internal overlapping outlines.
- 🕶️ **Steps dark theme & positioning redesign** — changed the section background to solid `#000000` and text colors to white/gray. Styled cards as premium dark containers (`#161616` background, white copy, subtle borders and dark shadow). Removed icons from cards to match original design.
- 📐 **Card grid spacing and alignment** — moved the card grid closer to the headline by reducing the headline's margin-bottom and the grid's padding-top. Elevated Card 03 by `-180px` and aligned the "LET'S START" button at `bottom: 0px` so its bottom aligns perfectly on the same line as the other cards.
- 🎬 **Headline mask & card animations** — wrapped headline text lines in static overflow-hidden containers (`line` and `line-inner`) and adjusted GSAP animations to translate the inner spans, creating a clean mask-up clip reveal. Resolved the GSAP inline transform override bug by migrating card hover lifts (`translateY` to `-180px` / `-188px` on hover for Card 03) to GSAP listeners. Optimized the "LET'S START" entrance scale and fade-up slide.
- 💪 **Visual weight & font thickness increase** — increased font-weights of card descriptions (`800`), paragraph text (`600`), eyebrow text (`700`), and outer rotating orbit text (`800`) to make the section content much bolder. Thickened the borders of cards to `2px` and the border of the "LET'S START" button to `2px` to project a robust, premium look. Made card outline numbers heavier with a `2.5px` text stroke.
- 🔠 **Card numbers outline overlap fix** — applied the solid background color fill (`#161616` default, `#1f1f1f` on hover) and `paint-order: stroke fill` combined with a `5px` stroke to the card numbers (`.steps__num`), resolving the variable font overlapping sub-path lines (such as inside the number '3') to match the clean white outline design of the original section.

# 2026-05-26 13:50

- ✨ **Project bootstrap** — scaffolded with Vite (vanilla template), removed boilerplate (counter.js, default style.css, sample assets, favicon.svg).
- 📦 **Dependencies installed** — `gsap` + `lenis` (animation + smooth-scroll stack matching client reference sites psstudios.co and lunchbox.io).
- 🎨 **Design system extracted from Figma** — pulled tokens (colors, type, shadows, layout) from file `WexLQwaKjrmjFlP3jb6HwI` via Framelink Figma MCP and codified them in `src/styles/_tokens.css`.
- 🖼️ **Assets pulled from Figma** — `logo-etrolley-28bffb.png`, `hero-laptop-bags-eb2750.png`, `qr-theqa.png` saved into `public/images/`.
- 🧱 **Architecture set up** — `vite.config.js` with `@`, `@components`, `@styles`, `@lib` aliases.
- 🌐 **HTML shell** (`index.html`) — preconnects + Google Fonts (Noto Sans Arabic, Outfit), `<header>` + `<main>` placeholders driven by `data-component` attributes, `#smooth-wrapper`/`#smooth-content` for Lenis.
- 🛠️ **Lib layer** — `lib/dom.js` (qs/qsa/mount helpers), `lib/smooth-scroll.js` (Lenis + GSAP ticker bridge so ScrollTrigger stays in sync).
- 🧭 **Navbar component** — `components/navbar/{navbar.html.js, navbar.css, navbar.js}` with logo, primary links (Home / Services / Prices / About Us / Contact Us / English), inline SVG chevron + phone icon, phone block (label + tel link), green CTA pill ("Create a store"), hairline divider, smart hide-on-scroll-down + reveal-on-scroll-up behavior, ARIA-correct dropdown toggles.
- 🦸 **Hero component** — `components/hero/{hero.html.js, hero.css, hero.js}` with QR + validation footnote aside, "DreamWD" overlap pill, three-line "Your store will be ready in no more than a minute." headline, brand watermark behind copy, CTA + carousel arrows, hero illustration (laptop + bags), Follow rail with FB/TW/IN/IG socials, fixed rotated "Send a message" side CTA.
- 🎬 **Hero choreography** — GSAP timeline: watermark scale-in → headline lines mask-up (staggered) → DreamWD pill back-out pop → QR aside slide-from-left → CTA stack rise → image float-in → Follow rail slide-from-right → side-CTA fade. ScrollTrigger parallax on watermark, image, and bg blob. Magnetic-pull hover on CTA.
- ♿ **A11y** — skip-link, focus-visible rings, `prefers-reduced-motion` early-return in hero animations and zeroed motion durations in tokens.
- ✅ **Build verified** — `vite build` succeeds: 17 modules, 142 kB JS / 12 kB CSS (53 kB / 3.4 kB gzipped), 179 ms.
- 🚀 **Dev server** — running at http://localhost:5173/ (HMR active).
