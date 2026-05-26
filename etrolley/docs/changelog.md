# 📜 E-Trolley — Changelog

> Append-only history. Trim oldest entries when this file approaches 500 lines.

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
