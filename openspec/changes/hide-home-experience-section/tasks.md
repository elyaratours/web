## 1. Home Page Removal

- [x] 1.1 Remove the localized Experience/La experiencia three-card section from the home page template and verify `/es/` and `/en/` no longer render the historical context, walkable pace, or direct booking cards.
- [x] 1.2 Verify the home page still renders the hero, tour catalog, reservation calendar, tailor-made section, traveler reviews, footer, and WhatsApp/email reservation actions after the section removal.

## 2. Navigation Cleanup

- [x] 2.1 Remove desktop navigation links that point to `#experience` and verify localized desktop navigation still includes tours, private tours, tailor-made, blog, contact, and language switching.
- [x] 2.2 Remove mobile navigation links that point to `#experience` and verify the mobile menu still includes the remaining localized navigation links and reservation actions.

## 3. Code Cleanup and Validation

- [x] 3.1 Remove now-unused Experience/La experiencia copy keys and icon imports when they are no longer referenced, then verify `npm run check` passes.
- [x] 3.2 Run `npm run build` and verify the localized home pages and shared navigation build successfully.
- [x] 3.3 Run `openspec validate hide-home-experience-section --type change --strict` and verify the change artifacts pass strict validation.
