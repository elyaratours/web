## Why

The Spanish `Viajes a medida` and English `Tailor-made` experiences need to use the provided `mapa.png` artwork instead of the current generic Granada cathedral image, so the custom-trip offer is represented by a visual map of Granada neighborhoods and landmarks.

## What Changes

- Reuse the existing public image asset `public/images/mapa.png`.
- Update the Tailor-made home section image to reference `/images/mapa.png`.
- Update the standalone Tailor-made/Viajes a medida page image and social preview image to reference `/images/mapa.png`.
- Add localized accessible text for the map image in the Tailor-made content config.
- Keep the existing Tailor-made copy, calls to action, routing, layout, and responsive behavior unchanged.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `static-tourism-site`: The localized Tailor-made/Viajes a medida home section and standalone pages must display the approved `mapa.png` image with localized accessible text.

## Impact

- Affected component: `src/components/TailorMadeHomeSection.astro`.
- Affected page: `src/pages/[locale]/[customSlug].astro`.
- Affected copy: Tailor-made content in `src/lib/i18n.ts`.
- Affected asset: uses existing `public/images/mapa.png` with case-sensitive public URL.
- No changes to root landing page, tour pages, blog pages, contact pages, routing, dependencies, booking, payment, API, or backend behavior.
