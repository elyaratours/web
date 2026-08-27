## Why

The localized Spanish and English home pages need to use the provided `Granada-main.jpeg` image as their main hero image, replacing the current generic Albaicin lane image. The hero image should also have localized accessible text instead of a single hardcoded English `alt` value.

## What Changes

- Reuse the existing public image asset `public/images/Granada-main.jpeg`.
- Update the localized home hero image in `src/pages/[locale]/index.astro` to reference `/images/Granada-main.jpeg`.
- Add localized `heroImageAlt` copy in `src/lib/i18n.ts` for Spanish and English.
- Render the hero image `alt` from localized copy for both `/es/` and `/en/`.
- Keep the existing hero layout, calls to action, copy, routing, and shared home sections unchanged.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `static-tourism-site`: The localized home hero must display the approved `Granada-main.jpeg` image with localized accessible text.

## Impact

- Affected page: localized home page in `src/pages/[locale]/index.astro`.
- Affected copy: localized config in `src/lib/i18n.ts`.
- Affected assets: uses existing `public/images/Granada-main.jpeg` with case-sensitive public URL.
- No changes to the root `/` landing page, tour pages, blog pages, routing, dependencies, booking, payment, API, or backend behavior.
