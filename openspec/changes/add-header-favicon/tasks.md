## 1. Header Brand Update

- [x] 1.1 Update the brand link in `src/layouts/BaseLayout.astro` to render `/favicon.svg` immediately before `{siteName}`, and verify the favicon and title share the same home link.
- [x] 1.2 Style the brand link with flex alignment, spacing, and a constrained icon size, and verify the header keeps the current visual hierarchy on desktop width.
- [x] 1.3 Mark the favicon as decorative for assistive technology, and verify the brand link accessible name remains the site title without duplicate favicon text.

## 2. Responsive And Quality Checks

- [x] 2.1 Check the header at mobile width and verify the favicon and title remain aligned without obstructing navigation or the reservation CTA.
- [x] 2.2 Run `npm run check` and verify the project reports no TypeScript, Astro, or lint-style errors from the header change.
