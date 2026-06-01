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

