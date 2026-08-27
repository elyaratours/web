## Context

The site is a static Astro tourism website with localized, data-driven tour entries. The Spanish tour `1492 Nuevo Orden Mundial` currently uses `/images/granada-cathedral.webp`, while the matching Spanish artwork is already available locally as `public/images/1492-esp.png`.

## Goals / Non-Goals

**Goals:**
- Use the approved Spanish `1492 Nuevo Orden Mundial` artwork for the Spanish tour entry.
- Prefer a web-optimized public asset, such as `1492-nuevo-orden-mundial.webp`, derived from the existing Spanish PNG source.
- Update only the Spanish tour entry's `image` and matching accessible alt text.
- Preserve the English `Granada and the New World` image that already uses the English artwork.

**Non-Goals:**
- Redesign tour cards, detail pages, image cropping, or shared templates.
- Change English tour content or imagery.
- Add new routes, booking behavior, dependencies, or backend features.

## Decisions

- Keep using content metadata for tour imagery.
  Alternative considered: hard-code image selection in the tour card or detail component. Rejected because it would undermine the data-driven tour architecture.

- Derive a Spanish WebP asset from `public/images/1492-esp.png` rather than using the PNG directly.
  Alternative considered: reference the existing PNG. Rejected as the preferred path because the PNG is larger and the project direction favors WebP/AVIF for tour imagery.

- Use a Spanish descriptive filename, for example `1492-nuevo-orden-mundial.webp`.
  Alternative considered: keep `1492-esp.png` as the final referenced path. Rejected because the final asset path should be descriptive and format-specific for long-term maintenance.

## Risks / Trade-offs

- WebP conversion could soften the text in the artwork -> Use high-quality conversion and visually inspect the generated image.
- The Spanish PNG is currently untracked in git -> Ensure the implementation includes the final WebP asset and either intentionally includes or leaves out the source PNG based on repository asset policy.
- Public deployment can lag behind local changes -> Verify the built output references the new path and ensure the final changes are committed/deployed after implementation.
