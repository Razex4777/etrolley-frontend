# 📐 E-Trolley — Partners Marquee Seamless Loop Plan

This plan details how to make the Partners marquee loop perfectly continuous and seamless by removing flexbox gap calculations and using item-level padding instead.

---

## 🛠️ Proposed Changes

### 1. Update CSS Stylesheet
- Update `src/components/clients/clients.css`:
  - Set `gap: 0;` on `.partners__logos-track` to eliminate fractional gap offset issues.
  - Set `padding-inline-end: clamp(40px, 5.5vw, 90px);` on `.partners__logo-item` to apply spacing natively to each element, ensuring that a `-50%` or `+50%` translation shifts the track by exactly one full set of items (including spacing) for a seamless infinite loop.
