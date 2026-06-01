# 📐 E-Trolley — Expand Services Section to 8 Slides Plan

This plan details the steps to expand the "Services We Provide" card track from 4 cards to 8 cards.

---

## 🛠️ Proposed Changes

### 1. Duplicate Cards in `index-ar.html`
- [x] Duplicate Card 1 (Marketing), Card 2 (Photography), Card 3 (Support), and Card 4 (Social Media) inside the `.services__track` container in [index-ar.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/index-ar.html).
- [x] Set `data-index` attributes for the duplicated cards to `4` (Marketing), `5` (Photography), `6` (Support), and `7` (Social Media).

### 2. Update Index Indicator in `index-ar.html`
- [x] Update the total cards indicator `.services__index-total` to `8` in `index-ar.html`.
- [x] Add digits `5`, `6`, `7`, and `8` to the vertical scroller list `.services__index-active-list` in `index-ar.html`.

### 3. Update CSS Animation in `services.css`
- [x] Update `.services__index-active-list` height to `8em` (for 8 elements) in [services.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/services/services.css).
- [x] Modify `@keyframes services-scroll-index` to translate `translateY(-7em)` at `100%` scroll progression.

### 4. Verify Compilation & Behavior
- [x] Check Vite dev server logs to ensure correct compilation.
- [x] Update [project_structure.md](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/docs/project_structure.md) to add this plan to the file list.
- [x] Append the change log entries to [changelog.md](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/docs/changelog.md).

---

## ## Review

### Results
- Successfully duplicated all 4 service cards in the Arabic page, completing the 8-card track setup bilingual synchronization.
- Updated both index trackers (`services__index-total` to `8` and scroller digit ranges `1` to `8`).
- Set stylesheet height limits and keyframe transforms to dynamically scroll all 8 indicators via pure CSS scroll-driven timelines.
- Verified that Vite compiled successfully with zero build or runtime script warnings.
