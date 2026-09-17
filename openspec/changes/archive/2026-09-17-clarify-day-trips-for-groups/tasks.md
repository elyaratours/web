## 1. Content Updates

- [x] 1.1 Update the Spanish Malaga and Cordoba day-trip Markdown entries so their titles, SEO descriptions, and introductory copy explicitly say the excursions are for groups, and verify the routeSlug, image, pricing, languages, and reservationUrl fields are unchanged.
- [x] 1.2 Update the English Malaga and Cordoba day-trip Markdown entries so their titles, SEO descriptions, and introductory copy explicitly say the excursions are for private groups, and verify the routeSlug, image, pricing, languages, and reservationUrl fields are unchanged.

## 2. Verification

- [x] 2.1 Run `npm run check` and verify the content collection schema accepts the updated entries.
- [x] 2.2 Run `npm run build` and verify the static pages build successfully with the longer localized titles.
- [x] 2.3 Review the affected generated/public page content in the built or dev-rendered output and verify the Malaga and Cordoba day-trip pages display the new group wording in Spanish and English without changing public URLs.
