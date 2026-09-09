## 1. Home Composition

- [x] 1.1 Remove the traveler reviews mosaic render from the shared localized home page and verify `/es/` and `/en/` no longer include the visible reviews section.
- [x] 1.2 Remove now-unused home imports for the traveler reviews component and review data and verify `npm run check` reports no unused or type errors.

## 2. Structured Data

- [x] 2.1 Remove review JSON-LD generation from localized home pages and verify generated `/es/` and `/en/` HTML no longer emits review structured data for hidden reviews.
- [x] 2.2 Preserve tour list structured data on localized home pages and verify generated HTML still includes the home tour ItemList data.

## 3. Verification

- [x] 3.1 Run `npm run check` and verify it completes successfully.
- [x] 3.2 Run `npm run build` and verify it completes successfully.
- [x] 3.3 Inspect generated Spanish and English home HTML and verify it contains the hero, tour catalog, reservation calendar, Tailor-made/Viajes a medida section, footer, and external WhatsApp/email reservation actions, without `id="reviews"`, `Opiniones de nuestros viajeros`, or `Travelers who walked Granada with us`.
- [x] 3.4 Run `openspec validate hide-home-traveler-reviews --type change --strict` and verify the change is valid.
