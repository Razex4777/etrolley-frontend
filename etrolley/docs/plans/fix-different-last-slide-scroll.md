# 📐 E-Trolley — Stacking Cards Scroll Track Spacing Fix Plan

This plan details how to resolve the "half-match" stacking cards scroll bug in the differentiators section by unifying the scroll track depth for the final card.

---

## 🛠️ Proposed Changes

### 1. Update CSS Stylesheet
- Update `src/components/different/different.css`:
  - Remove the `.different__slide:last-child { margin-bottom: 0; }` override on desktop (around line 149) so the 5th card retains the standard `margin-bottom: 22vh;`.
  - Remove the `.different__slide:last-child { margin-bottom: 0; }` override inside the mobile `@media (max-width: 768px)` block (around line 335) so the 5th card retains the standard `margin-bottom: 18vh;` on smaller viewports.
  - This ensures the browser has sufficient scroll depth to stack card 5 completely over card 4 before entering the next section.
