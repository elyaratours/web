## Why

The Home page and global business structured data should make Elyara's main Granada tourism services easier for crawlers and visitors to understand without making ranking guarantees. The change strengthens local search relevance through accurate metadata, visible internal discovery links, and truthful service-catalog JSON-LD.

## What Changes

- Refine Spanish and English Home titles, hero copy, catalog intro, and meta descriptions around high-intent Granada guided tour searches.
- Expand the Home planning/discovery links to point to more existing SEO landing pages for Alhambra, Albaicin, Sacromonte, Cathedral, family, day-trip, private-guide, and free-tour intents.
- Add a business-level service catalog to JSON-LD using existing public landing URLs and approved service descriptions.
- Keep all SEO content truthful: no ranking promises, fake reviews, aggregate ratings, unapproved physical address, business hours, awards, or official credentials.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `local-seo-presence`: Strengthens Home search-intent metadata, internal discovery links, and business service-catalog structured data while preserving existing truthfulness constraints.

## Impact

- Affected code: `src/lib/i18n.ts`, `src/pages/[locale]/index.astro`, and `src/lib/seo.ts`.
- No route URLs, content collection schemas, reservation flows, booking/payment behavior, or external dependencies change.
- Search performance is not guaranteed; the implementation improves crawlability and relevance signals only.
