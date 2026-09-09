## Why

The home page currently shows a traveler reviews mosaic in Spanish and English, but the business wants to hide that visitor-proof section for now. Removing the visible section should also remove matching review structured data so search metadata stays aligned with visible page content.

## What Changes

- Hide the traveler reviews mosaic from both localized home pages at `/es/` and `/en/`.
- Preserve the rest of the home discovery flow: hero, tour catalog, reservation calendar, Tailor-made/Viajes a medida section, footer, and external WhatsApp/email calls to action.
- Remove review structured data from localized home pages while the review content is not displayed.
- Keep the existing reviews component and review data available in the codebase for potential future reuse or reactivation.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `static-tourism-site`: localized home pages no longer display the traveler reviews mosaic section.
- `local-seo-presence`: localized home pages no longer emit review structured data when traveler reviews are hidden.

## Impact

- Affected home page composition: `src/pages/[locale]/index.astro`.
- Affected structured data generation on localized home pages.
- No routing, tour content, reservation behavior, dependencies, or public APIs change.
