# Plan — Align About Us First Section with Figma Mockup

This plan outlines the steps to align the first section of the About Us page (`about.html` and `about-ar.html`) with the Figma design exactly, removing unnecessary list elements, styling text blocks, and cleaning up the eyebrow slider graphics.

## User Review Required

> [!IMPORTANT]
> - **Question Indentation & Spacing**: The two questions ("Do you want to create an online store?" and "Do you want to sell products online?") will be grouped inside a dedicated container to indent them and keep them close together without the default paragraph gap.
> - **Text Boldings**: Specific phrases will be bolded using `<strong>` to match the Figma mockup:
>   - **English**:
>     - `Welcome to the <strong>eTrolley Network Platform</strong>!...`
>     - `...setting up an <strong>online store or app</strong>,...`
>     - `With the <strong>eTrolley Network Platform</strong>,...`
>     - `...customize your <strong>online store</strong> or app...`
>   - **Arabic**:
>     - `مرحباً بكم في <strong>منصة شبكة إي ترولي</strong>!...`
>     - `...إعداد <strong>المتجر الإلكتروني أو التطبيق</strong>،...`
>     - `من خلال <strong>منصة شبكة إي ترولي</strong>،...`
>     - `...تخصيص <strong>متجرك الإلكتروني</strong> أو تطبيقك...`
> - **Slider Track Line Removal**: The horizontal track line in the eyebrow graphics (`.about__slider-track`) will be hidden or removed to match the overlapping circles in Figma.

## Proposed Changes

### Component Authoring

- [ ] **English about.en.html**:
  - Remove the slider track line element: `<span class="about__slider-track"></span>`.
  - Add `<strong>` tags to the designated phrases.
  - Group the two questions into a `.about__indented-group` container to indent them and keep them tight.

- [ ] **Arabic about.ar.html**:
  - Remove the slider track line element: `<span class="about__slider-track"></span>`.
  - Replace the `<ul>` / `<li>` list for questions with plain text paragraphs grouped in `.about__indented-group`.
  - Standardize all text elements to `<p class="about__text">` (removing `.about__lead`).
  - Add `<strong>` tags to the designated phrases.

### Stylesheets

- [ ] **Styles about.css**:
  - Hide or remove `.about__slider-track` styles.
  - Add styling for `.about__indented-group` and `.about__indented-question`:
    - Indent with `padding-left: 24px` (LTR) and `padding-right: 24px` (RTL).
    - Use a tight vertical line height or small gap (e.g., `gap: 6px` or `margin-bottom: 6px`) to keep them together.
  - Clean up obsolete `.about__lead` and `.about__questions` rules.

### Compilation & Build

- [ ] **Compile Templates**:
  - Run `node scripts/compile-templates.mjs` to regenerate `about.html` and `about-ar.html`.

- [ ] **Production Build Check**:
  - Run `npm run build` to verify code compiles correctly without errors.

## Verification Plan

### Manual Verification
- View compiled pages `about.html` and `about-ar.html` to confirm that:
  - The eyebrow has only two overlapping circles without a horizontal line connecting them.
  - The paragraph copy matches the Figma screenshot spacing, font weight, and bolded terms.
  - The two questions are indented and grouped close together without huge paragraph gaps.
  - No bullet points, circles, or horizontal lines exist on the text.
