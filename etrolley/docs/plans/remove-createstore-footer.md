# Plan: Remove Footer from Create Store page

This plan removes the sticky brand footer from the Create Store standalone pages (`create-store.html` and `create-store-ar.html`) while keeping navbars and core forms intact.

## Proposed Changes

### Build Scripts

#### [MODIFY] [compile-templates.mjs](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/scripts/compile-templates.mjs)
- Remove `'footer'` from `createStoreComponents` list:
  ```javascript
  const createStoreComponents = [
    'navbar',
    'createstore'
  ];
  ```

### HTML Templates

#### [MODIFY] [create-store.base.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/create-store.base.html)
- Remove the `<!-- INSERT: footer -->` comment injection point.

## Checklist
- [ ] Modify `createStoreComponents` in [compile-templates.mjs](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/scripts/compile-templates.mjs) to exclude `'footer'`
- [ ] Remove `<!-- INSERT: footer -->` in [create-store.base.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/create-store.base.html)
- [ ] Run compiler script (`node scripts/compile-templates.mjs`) to generate new `create-store.html` and `create-store-ar.html`
- [ ] Verify that the generated HTML pages no longer contain the footer block.
