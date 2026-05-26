# 📐 'Services We Provide' Section Implementation Plan

We will implement the next section, **"Services We Provide"** (also known as the "Additional" services section), directly after the "What Makes Us Different" section. This section features a horizontal scrolling gallery of service cards (Marketing, Photography, Support, Social Media) in a sage-green background (`#9AB5AD`) container, decorated with premium brand watermarks and a pagination slide index ("1/4").

## Checklists
- [ ] Add translation keys for `services.*` to `src/lib/i18n.js`.
- [ ] Generate premium visual assets for cards (`marketing.png`, `photography.png`, `support.png`, `social.png`).
- [ ] Create `services.html.js` template with structure, SVG decorative elements, and translations.
- [ ] Create `services.css` with responsive layout, horizontal scroll track, and colors.
- [ ] Create `services.js` with dynamic pagination index update on scroll.
- [ ] Mount the section in `index.html`.
- [ ] Initialize the component in `src/main.js`.
- [ ] Import `services.css` in `src/styles/main.css`.
- [ ] Run `npm run build` to verify no errors.

## Proposed Changes

### 1. Translations (`src/lib/i18n.js`)

We will add translation keys for the new section's titles, descriptions, and card titles in both English and Arabic locales.

#### [MODIFY] [i18n.js](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/lib/i18n.js)

Add keys under `services.*`:
*   `services.eyebrow`: "Additional" / "خدمات إضافية"
*   `services.title`: "Services we provide" / "الخدمات التي نقدمها"
*   `services.desc`: "Our support services are available in this section to help you integrate the work of your store and find everything you need in one place." / "خدمات الدعم لدينا متوفرة في هذا القسم لمساعدتك على دمج أعمال متجرك والعثور على كل ما تحتاجه في مكان واحد."
*   `services.learnMore`: "Learn More" / "معرفة المزيد"
*   `services.card.marketing`: "Marketing" / "التسويق"
*   `services.card.photography`: "Photography" / "التصوير الفوتوغرافي"
*   `services.card.support`: "Support" / "الدعم الفني"
*   `services.card.social`: "Social Media" / "وسائل التواصل الاجتماعي"
*   `services.card.desc`: "Now that your store is ready for sale, add your products" / "الآن متجرك جاهز للبيع، أضف منتجاتك"

---

### 2. Markup and Structure (`src/components/services/`)

We will create the new component `services` with HTML, CSS, and JS controllers.

#### [NEW] [services.html.js](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/services/services.html.js)

Returns the structural markup for the section. It will contain:
*   An eyebrow container with the double-circle slider decoration and the text "Additional".
*   The `h2` title "Services we provide".
*   The description paragraph.
*   The active slide indicator ("1/4" / "2/4" etc.).
*   Watermark SVGs (`Group 141` in the top left, and `Group 140` in the bottom right) flipped horizontally using CSS.
*   A scrollable slider track `.services__track` housing 4 card blocks (`.services__card`):
    *   Top image container `.services__card-img` with custom generated graphic assets.
    *   Content container `.services__card-body` with the card title, standard description, and a "Learn More" button.

#### [NEW] [services.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/services/services.css)

Contains pixel-anchored layout styling matching the design specifications:
*   Section background: `#9AB5AD` (sage-green).
*   Watermarks: absolute position, flipped using `transform: scaleX(-1)`.
*   Eyebrow layout: inline-flex with the horizontal slider track and overlapping white circles.
*   Track container: `overflow-x: auto` with custom premium scrollbar styles (scrollbar is hidden or matches a clean, minimal design).
*   Cards layout: flex row inside the track, each card sized at `width: 380px` (or scaled proportionally).
*   Card styles: White background, rounded corners (`16px`), shadow, and proper alignment for text and buttons.
*   Button styles: Teal background (`#316C6B`), white text, hover lift-up, and scale changes.
*   Mobile media queries:
    *   Smooth horizontal swiping layout remains active or snaps elements.
    *   Adapts margins, margins-inline, font-sizes, and padding for mobile viewports.

#### [NEW] [services.js](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/services/services.js)

Initializes the component:
*   Listens to horizontal scroll events on the track to update the active slide index indicator ("1/4" to "4/4") dynamically.
*   Handles clean mounting and unmounting inside `destroy()`.

---

### 3. Generated Visual Assets (`public/images/services/`)

We will generate four high-quality custom graphics to serve as the card header images.

*   `public/images/services/marketing.png` - Analytics dashboard/checklist theme
*   `public/images/services/photography.png` - Flatlay camera product session theme
*   `public/images/services/support.png` - Customer care smartphone support interface theme
*   `public/images/services/social.png` - Social media profile manager theme

---

### 4. Integration & Entrypoints

We will integrate the component into the main application.

#### [MODIFY] [index.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/index.html)

Add `<section data-component="services"></section>` immediately after the "different" section:
```html
<section data-component="different"></section>
<section data-component="services"></section>
```

#### [MODIFY] [main.js](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/main.js)

Import and mount/destroy `initServices`:
```javascript
import { initServices } from './components/services/services.js';
// ...
let activeServices = null;
// ...
activeServices?.destroy?.();
activeServices = initServices();
```

#### [MODIFY] [main.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/styles/main.css)

Import the new component stylesheet:
```css
@import '../components/services/services.css';
```

---

## Verification Plan

### Automated Tests
*   Run `npm run build` to verify the Vite assembly compiles correctly with no errors.

### Manual Verification
*   Check scroll interactions: horizontal scroll of cards updates the pagination index from "1/4" to "4/4".
*   Verify rendering of watermarks, custom graphics, and colors under both English (LTR) and Arabic (RTL) locales.
