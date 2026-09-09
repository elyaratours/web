## Why

The tour catalog needs a dedicated family-oriented discovery path so visitors traveling with children can quickly find routes adapted to their pace, attention span, and interests. Starting with `Granada en familia` creates the first children's tour while keeping the existing data-driven tour model.

## What Changes

- Add a `Niños` / `Kids` subsection inside the localized Home tours area for routes adapted to children and families.
- Add a published Spanish children's tour named `Granada en familia`.
- Add a published English version named `Granada for Families`.
- Present the route as a family-friendly Historic Center walk about the transformation from Muslim medina to Christian city, adapted for children.
- Set the price as `7 EUR per person`, with children under 6 free, localized in Spanish and English.
- Set the duration as 1 hour to 1 hour and 15 minutes, localized in Spanish and English.
- Use `/images/Niños.jpg` as the public tour image with localized alternative text.
- Preserve the external WhatsApp/email reservation model and shared tour detail/card patterns.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `static-tourism-site`: Adds a localized children/family tour subsection and a bilingual family route to the public tour catalog and tour detail pages.

## Impact

- Affected routes: localized Home pages and the generated Spanish/English tour detail pages for the family route.
- Affected content: two localized tour entries using the existing Astro Content Collections structure.
- Affected code: tour category schema/filtering, Home tour section rendering, localized labels, reservation copy where needed, sitemap/listing behavior through existing tour generation.
- Dependencies: no new backend, booking, payment, or account system.
