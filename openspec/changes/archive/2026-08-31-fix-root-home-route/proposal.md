## Why

The root home page at `/` can show an outdated introductory hero with copy the site owner does not want visitors to see. This creates an inconsistent first impression compared with the approved localized Spanish and English home pages.

## What Changes

- Remove the standalone root landing experience as a visitor-facing page.
- Make visits to `/` resolve to the approved Spanish home experience at `/es/`.
- Preserve the localized Spanish and English home pages, navigation, catalog, reservation behavior, and SEO metadata.
- Ensure the unwanted copy `Rutas con historia, calma y mirada local.` and its body text no longer appears on the public root experience.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `static-tourism-site`: Root URL behavior changes from displaying a separate landing page to resolving visitors to the localized Spanish home page.

## Impact

- Affected code: `src/pages/index.astro` and any tests or checks that assert root home content.
- Affected public behavior: `/` no longer presents separate root-only marketing copy and instead lands on `/es/`.
- No new dependencies, backend services, booking flows, or content model changes are required.
