# 📐 E-Trolley — Zero-JS Services Section Migration Plan

This plan outlines the steps to migrate the "Services we provide" section from dynamic JavaScript scrolling and layout controls to a high-performance, 100% pure CSS and HTML implementation.

---

## 🛠️ Proposed Migration Steps

### 1. Delete Services JS Controller & JS Template
- [x] Delete `src/components/services/services.js` entirely.
- [x] Delete `src/components/services/services.html.js` entirely.

### 2. Main Entry Point Cleanup
- [x] Edit `src/main.js` to remove the `import { initServices } from './components/services/services.js'` import.
- [x] Remove `activeServices` declaration, initialization, and cleanup lifecycle calls.

### 3. Update HTML Markups (`index.html` and `index-ar.html`)
- [x] Update the section header `.services__index` block:
  - Replace the static `<span class="services__index-active" id="services-index-active">1</span>` with a nested vertical scroller structure:
    ```html
    <span class="services__index-active-wrapper">
      <span class="services__index-active-list">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
      </span>
    </span>
    ```
- [x] Add global declarative scroll reveal selectors (`data-reveal="..."`):
  - `data-reveal="scale"` on `.services__cart-back` and `.services__cart-front`.
  - `data-reveal="fade-up"` on `.services__eyebrow` (eyebrow heading wrapper).
  - `data-reveal="fade-up" data-reveal-delay="0.1"` on `.services__title`.
  - `data-reveal="fade-up" data-reveal-delay="0.15"` on `.services__desc`.
  - `data-reveal="scale" data-reveal-delay="0.2"` on `.services__index`.
  - `data-reveal-group data-reveal-group-stagger="0.12"` on `.services__track`.
  - `data-reveal="fade-up"` on each of the 4 cards: `.services__card`.

### 4. Update Stylesheets (`src/components/services/services.css`)
- [x] Implement pure CSS Scroll-driven timelines:
  - Add scroll-timeline properties to `.services__track`:
    ```css
    scroll-timeline-name: --services-track;
    scroll-timeline-axis: inline;
    ```
  - Style the scroller index wrapper and digit list:
    ```css
    .services__index-active-wrapper {
      display: inline-block;
      height: clamp(28px, 2.6vw, 42px); /* match font size/line height of .services__index */
      overflow: hidden;
      vertical-align: bottom;
    }
    .services__index-active-list {
      display: flex;
      flex-direction: column;
      height: 100%;
      will-change: transform;
      animation: services-scroll-index linear both;
      animation-timeline: --services-track;
    }
    .services__index-active-list span {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
    ```
  - Add `@keyframes services-scroll-index` to translate the active index list:
    ```css
    @keyframes services-scroll-index {
      0% { transform: translateY(0); }
      100% { transform: translateY(-75%); } /* assuming 4 items, we scroll up 3 slots (3/4 of the height) */
    }
    ```
- [x] Remove JS-only selectors:
  - Remove `cursor: grab;` and `user-select: none;` from `.services__track` since dragging is no longer handled by JS. Keep the standard scrollbar for easy desktop navigation.
  - Remove the `.is-dragging` styles.

### 5. Verify Build & Code Integrity
- [x] Run Vite development/build script to verify successful compilation with zero warnings or errors.
- [x] Update `docs/project_structure.md` to reflect structure changes (deleted services JS/HTML files).
- [x] Append the change description to `docs/changelog.md` and keep it within limits.

---

## ## Review

### Migration Results
- All project requirements were fully met: the services section has been migrated to a zero-JS component.
- Build compiled successfully in 647ms using Vite, creating production assets for both English and Arabic layouts.
- Dynamic index slide counter is updated in pure CSS using Scroll Timeline APIs.
