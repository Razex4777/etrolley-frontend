# 📋 Plan: Replace Team with Blogs in Navbar

Replace the "Team" menu item under the "About Us" dropdown in the navbar with "Blogs" in both English and Arabic versions of the site.

## Proposed Changes

### Navbar Component

#### [MODIFY] [navbar.en.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/navbar/navbar.en.html)
- `[x]` Replace `<a role="menuitem" class="nav__dropdown-item" href="#team"> Team </a>` with `<a role="menuitem" class="nav__dropdown-item" href="blog.html"> Blogs </a>`.

#### [MODIFY] [navbar.ar.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/navbar/navbar.ar.html)
- `[x]` Replace `<a role="menuitem" class="nav__dropdown-item" href="#team"> فريقنا </a>` with `<a role="menuitem" class="nav__dropdown-item" href="blog-ar.html"> المدونة </a>`.

#### [MODIFY] [navbar.markup.html](file:///c:/Users/MSI-PC/OneDrive/Documents/freelancing/e-trolley/etrolley/src/components/navbar/navbar.markup.html)
- `[x]` Replace the `#team` link item with a link to `blog.html` (or `blog-ar.html` for Arabic).

## Verification Plan

### Automated Steps
- `[x]` Compile templates: `node scripts/compile-templates.mjs`
- `[x]` Run production build: `npm run build` to verify there are no compilation or bundling errors.

### Manual Steps
- `[x]` Verify compiled HTML files contain the correct links (`blog.html` for EN, `blog-ar.html` for AR).

## Review
- Modified all 3 navigation menu template files (`navbar.en.html`, `navbar.ar.html`, `navbar.markup.html`).
- Ran template compilation successfully, outputting all 8 static pages correctly updated.
- Verified production build compiled completely with 0 errors.
- Pushed changes to repository successfully.
