# 📐 E-Trolley — Partners Marquee Loop Plan

This plan details the implementation of a smooth, infinite CSS marquee loop for the payment partners banner inside the Clients component.

---

## 🛠️ Proposed Changes

### 1. Update HTML Markup
- Duplicate the partners logo items inside `<div class="partners__logos">` to create a seamless looping track:
  - Wrap the logo items in a `<div class="partners__logos-track">` element.
  - Duplicate the set of 5 logos inside the track to form a 10-logo track.
  - Apply this to both `clients.en.html`, `clients.ar.html`, `index.html`, and `index-ar.html`.

### 2. Update CSS Stylesheet
- Update `src/components/clients/clients.css`:
  - Set `.partners__logos` to `overflow: hidden` with a mask image gradient overlay to fade logos out at the edges.
  - Style `.partners__logos-track` to flow horizontally with `width: max-content` and apply the marquee translation keyframes.
  - Define standard `@keyframes` for LTR and RTL to translate `-50%` smoothly.
