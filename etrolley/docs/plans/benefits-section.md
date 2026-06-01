# Plan — Add Benefits Section to About Us Page

This plan outlines the steps to build and integrate the brand new **Benefits** section on the About Us page (`about.html` and `about-ar.html`) with three feature cards, responsive grid, custom theme-compliant inline SVGs, and 100% pure static HTML/CSS.

## Proposed Changes

### Component Layout & Markup

- [ ] **English benefits.en.html**:
  - Create [benefits.en.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/benefits/benefits.en.html) with:
    - Section eyebrow: "Benefits"
    - Section title: "What can we provide for you?"
    - Three cards of size `545px` x `499px` containing:
      - **Card 1**: "easy-to-use interface"
        - Paragraph text: *"Even if you don't have experience building an online store or app, our platform makes it easy for you to get started..."*
        - SVG background with laptop/smiley face sketch illustration.
      - **Card 2**: "e-trolley network platform is flexibility."
        - Paragraph text: *"We offer a range of pricing plans to suit businesses of all sizes, from startups to established enterprises..."*
        - SVG background with laptop/graph/flexibility sketch illustration.
      - **Card 3**: "range of marketing tools to help you"
        - Paragraph text: *"But that's not all - the e-trolley network platform also offers a range of marketing tools to help you promote your online store or app..."*
        - SVG background with document checklist/thumbs-up sketch illustration.

- [ ] **Arabic benefits.ar.html**:
  - Create [benefits.ar.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/benefits/benefits.ar.html) with Arabic translated copy mirrored for RTL:
    - Section eyebrow: "الميزات" (Benefits)
    - Section title: "ماذا يمكننا أن نقدم لك؟"
    - **Card 1**: "واجهة سهلة الاستخدام" (easy-to-use interface)
      - Text: *"حتى لو لم تكن لديك خبرة في إنشاء متجر إلكتروني أو تطبيق، فإن منصتنا تسهل عليك البدء..."*
    - **Card 2**: "منصة شبكة إي ترولي تمتاز بالمرونة" (e-trolley network platform is flexibility)
      - Text: *"نقدم مجموعة من خطط الأسعار التي تناسب جميع أحجام المشاريع، من الشركات الناشئة إلى المؤسسات الكبرى..."*
    - **Card 3**: "مجموعة من أدوات التسويق لمساعدتك" (range of marketing tools to help you)
      - Text: *"ولكن هذا ليس كل شيء - توفر منصة شبكة إي ترولي أيضاً مجموعة من أدوات التسويق لمساعدتك في الترويج..."*

### Styling

- [ ] **Stylesheet benefits.css**:
  - Create [benefits.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/benefits/benefits.css) with:
    - Grid layout for the three cards: `grid-template-columns: repeat(auto-fit, minmax(320px, 1fr))` on mobile, and pixel-locked dimensions `545px` x `499px` on desktop.
    - Card styling: white background, subtle border, smooth hover translation, border radius `36px` or `48px`, and light shadow.
    - Font styles matching the Outfit typography and Qatari-flavored design colors.
    - SVGs sizing: centered illustrations with circle/ellipse backdrops `#FCF3EB`.

- [ ] **Stylesheet Integration**:
  - Import the new stylesheet in [main.css](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/styles/main.css): `@import '../components/benefits/benefits.css';`.

### Build & Compilation

- [ ] **Template Compiler Update**:
  - Update `aboutComponents` list in [compile-templates.mjs](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/scripts/compile-templates.mjs) to compile `benefits` right between `about` and `footer`.

- [ ] **Compile & Build**:
  - Run `node scripts/compile-templates.mjs`
  - Run `npm run build`

## Verification Plan

### Manual Verification
- Visual layout check of the Benefits cards on both English (`about.html`) and Arabic (`about-ar.html`) pages.
- Check card size, layout, text styles, and alignment of icons.
- Ensure direction switching (LTR to RTL) flips the layout grid and text alignment perfectly.
