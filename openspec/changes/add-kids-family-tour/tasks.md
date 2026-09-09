## 1. Tour Model and Helpers

- [x] 1.1 Add `kids` as an allowed tour category and verify content collection validation accepts `local`, `day-trip`, and `kids` entries.
- [ ] 1.2 Add a helper for published children's tours and verify regular local tours, day trips, and children's tours can be filtered without overlap.

## 2. Family Tour Content

- [x] 2.1 Add the Spanish `Granada en familia` tour entry with category `kids`, route slug, `7 EUR por persona; menores de 6 años gratis`, duration, `/images/Niños.jpg`, FAQ, SEO description, and body copy about the Historic Center transformation from Muslim medina to Christian city.
- [x] 2.2 Add the English `Granada for Families` tour entry with category `kids`, translated route slug, `7 EUR per person; children under 6 free`, duration, `/images/Niños.jpg`, FAQ, SEO description, and matching body copy.
- [ ] 2.3 Verify the generated Spanish and English family tour detail pages display the image, price, duration, localized description, FAQ, and external WhatsApp/email reservation actions.

## 3. Home Tours Subsection

- [x] 3.1 Add localized Home copy for the `Niños` / `Kids` subsection and verify the labels and intro text are available in Spanish and English.
- [ ] 3.2 Render the children tours subsection inside the Home tours area only when published children's tours exist and verify `Granada en familia` / `Granada for Families` appears there without duplicating in the general tour list.
- [ ] 3.3 Verify the existing Home tour catalog, reservation calendar, tailor-made section, navigation, sitemap behavior, and day-trip pages remain functional.

## 4. Validation

- [x] 4.1 Run `npm run check` and verify Astro, TypeScript, and content collection validation pass.
- [ ] 4.2 Run `npm run build` and verify the localized Home pages and family tour detail pages build successfully.
- [ ] 4.3 Inspect representative built HTML for Spanish and English Home and family tour pages to verify children subsection content, image path, price, duration, FAQ, metadata, and external reservation behavior.
- [ ] 4.4 Run `openspec validate add-kids-family-tour --type change --strict` and verify the change artifacts pass strict validation.
