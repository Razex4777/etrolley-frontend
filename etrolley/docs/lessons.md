# 🧠 Lessons Learned & Best Practices

## Animation & Stacking Behavior

- **GSAP ScrollTrigger vs Pure CSS Sticky**:
  - CSS-only sticky stacking card layouts (`position: sticky`) can result in jumping, overlapping, and broken reverse-scrolling transitions on certain viewports. For complex deck animations, GSAP ScrollTrigger is highly reliable and provides smooth control over layering and pinning.
  - Do not migrate interactive components to pure HTML/CSS unless explicitly requested by the user.
  - **Never transition dimensions (height, padding, margin) of the pinned element** during ScrollTrigger pinning. Dynamic padding transitions will alter container height asynchronously, causing incorrect pin spacer offset calculations and causing the next section to creep up and overlap the cards.

- **Title/Header Readability**:
  - When pinning a section with stacking cards, avoid fading out the section header/title unless requested. Keeping the section title fixed at the top of the viewport provides constant brand and context visibility while the cards stack underneath.

## HTML Layout & Copy Formatting

- **Inline Breaks vs Paragraph Blocks**:
  - To display copy segments on separate lines without vertical paragraph gaps/margins (especially within flexboxes with gaps), group the text segments within a single `<p>` tag separated by `<br>` line breaks, rather than wrapping them in separate `<p>` tags.
  - This ensures that lines stack natively on top of each other without empty line spaces, while standard block margins/gaps are preserved between different paragraphs.

## Scroll-Driven Styling & Containment Conflicts

- **CSS Scroll-Driven Animations (`animation-timeline: scroll()`) vs. JS Scroll Listeners**:
  - Avoid mixing CSS-only scroll-driven animations with JavaScript scroll-triggered class selectors. CSS animation frames take precedence in the rendering cascade and will override class rules.
  - If there are `overflow-x: clip` or `overflow-x: hidden` rules defined on root nodes (`html` or `body`), browsers may fail to resolve the nearest scroll container for `scroll()`. This freezes the animation at `0%` progress (e.g., permanent transparency), completely overriding class changes applied by JS.
  - For universal cross-browser reliability (such as on Safari or Firefox viewports where CSS scroll timelines might be buggy or unsupported), use a simple JavaScript `scrollY` scroll listener to toggle a CSS class (e.g., `.is-scrolled`), allowing standard CSS transitions to handle the animation.

- **CRITICAL: NEVER add `overflow-x: clip` or `overflow-x: hidden` to the `html` element**:
  - `overflow-x: clip` / `overflow-x: hidden` on `html` creates a new scroll container that **breaks `position: sticky` for ALL descendant elements across the entire page**. This includes the stacking card deck in "What Makes Us Different" section.
  - Horizontal scroll containment should ONLY be applied to `body { overflow-x: hidden; }` — this is safe for sticky.
  - Individual sections that need overflow clipping should use `overflow: clip` at the section level (e.g., `.support { overflow: clip; }`), not at root level.
  - This is a browser-engine constraint, not a bug. The CSS spec says sticky positioning requires an unbroken chain of scrollable ancestors.

## Pure-CSS "Garage Door" Footer Reveal

- **Sticky + z-index layering is enough — no JS required**:
  - A premium "garage door" reveal where the footer sits pinned to the bottom of the viewport and the page content above slides up to reveal it can be achieved with zero JavaScript by combining:
    1. `<footer>` set to `position: sticky; bottom: 0; z-index: 1` (desktop only, gated by `@media (min-width: 981px)` to avoid mobile scroll-container glitches).
    2. `<main>` set to `position: relative; z-index: 2; background: #ffffff` in `_reset.css` so it forms an opaque white lid above the sticky footer.
    3. The last content section (`.support`) also at `z-index: 2` with a wide soft drop shadow so the seam between "door" and "floor" reads as the door lifting away.
  - Visual polish: round the footer's top corners with a fluid `border-top-left-radius` / `border-top-right-radius` (`clamp(32px, 4vw, 56px)`) so the footer reads as a distinct "door panel" lifting up. Add a 2-stop inset highlight at the top edge to sell the "light gap" where the door above meets the floor below.
  - Mobile (≤980px): **do not** apply the sticky footer rule. The viewport scroll container behaves erratically when nested sticky elements with z-index live inside it; keep the footer's natural document flow on touch devices.
  - Avoid `overflow: hidden` on `<main>` while using `position: sticky` inside it — `overflow: hidden` (and to a lesser degree `overflow: clip`) can break sticky positioning depending on the browser. Use `isolation: isolate` on individual sections that need a fresh stacking context instead.

- **Support Section Block Container vs Section Background**:
  - When the user asks to "remove block container" of the support section, they might be referring to the heavy section-level box-shadow and background applied in the global footer reveal rule (e.g. `.support` in `footer.css`) which defines the "lid" of the garage-door reveal, rather than the inner `.support__card` container itself.
  - Always cross-reference screenshot drawings with container boundaries (like shadows and white background boundaries) before altering component-level card container layouts.

