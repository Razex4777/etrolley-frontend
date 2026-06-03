# Services Carousel Auto-Scroll Plan

Implement horizontal auto-scrolling for the home page services slider (`#services-track`) that automatically transitions from card 1 to 8, loops back smoothly to the first slide upon completion, updates the active index indicator (1 to 8), and synchronizes with manual scrolling.

## Proposed changes

- **Modify [services.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/services/services.css)**:
  - Disable CSS scroll timeline animation `.services__index-active-list` which causes RTL glitches and lacks cross-browser support.
  - Add a smooth transition (`transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)`) to `.services__index-active-list` for smooth number cycling.
- **Modify [services.en.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/services/services.en.html)**:
  - Add a `<script>` tag at the bottom of the section containing the horizontal auto-scrolling, manual scrolling synchronizer, and event listeners.
- **Modify [services.ar.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/services/services.ar.html)**:
  - Add the same `<script>` tag at the bottom of the section (optimized for RTL context if needed, though the JS logic will be bi-directional by design).

---

## Technical Details

### JavaScript Auto-Scroller logic:
1. **Selection**: Select the carousel track container (`#services-track`), the list of cards (`.services__card`), and the active index list element (`.services__index-active-list`).
2. **Bi-Directional Calculation**:
   - Determine direction (LTR vs RTL) using `document.documentElement.dir === 'rtl'`.
   - Calculate target `scrollLeft` positions using `cards[i].offsetLeft - cards[0].offsetLeft`. This translates to positive offsets in LTR and negative offsets in RTL, matching modern browser coordinates.
3. **Autoplay Loop**:
   - Scroll every 3.5 seconds to the next index (`activeIndex = (activeIndex + 1) % 8`).
   - If index loops back to 0, scroll back to 0.
4. **Manual Sync**:
   - Attach a scroll listener to the track.
   - Calculate the active card on scroll by finding the card whose boundary is closest to the viewport's start boundary (left in LTR, right in RTL).
   - Dynamically update the index translation.
5. **Autoplay Pause**:
   - Pause the autoplay interval when the user hovers over the track (`mouseenter`, `touchstart`) and resume when they leave (`mouseleave`, `touchend`).

---

## Verification Plan

### Manual Verification
- Deploy using Vite dev server (`npm run dev`) and test:
  1. Horizontal slider scrolls automatically to the next item every 3.5 seconds.
  2. Slide index (1 to 8) updates dynamically to match the scrolled card.
  3. When reaching card 8, the slider smoothly loops back to card 1.
  4. Manual swiping/scrolling correctly updates the slide index.
  5. Hovering/touching pauses the auto-scroll.
  6. Verify RTL layout in Arabic (`index-ar.html`) and LTR layout in English (`index.html`).
