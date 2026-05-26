# 📜 E-Trolley — Changelog

> Append-only history. Trim oldest entries when this file approaches 500 lines.

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
