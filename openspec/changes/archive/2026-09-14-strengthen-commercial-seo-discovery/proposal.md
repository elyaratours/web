## Why

The site has strong content depth and technical metadata, but the highest-value discovery paths can be made clearer for crawlers and visitors. Commercial search terms such as guided tours, private Alhambra tours, private guide, Albaicin walks, and Granada cultural guides should be reflected in page titles and durable internal links without creating unsupported ranking claims.

## What Changes

- Use more intent-specific SEO titles and descriptions for localized home and blog listing pages while preserving visible H1 content and editorial positioning.
- Add localized footer discovery links to high-intent SEO landing pages so those pages receive consistent sitewide internal links.
- Enrich tour structured data with visible duration and route point itinerary details when meeting and ending points exist.
- Preserve external WhatsApp/email reservation behavior and all constraints against fake reviews, ratings, ranking guarantees, credentials, unapproved Google Business Profile links, internal checkout, or invented business facts.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `static-tourism-site`: strengthens commercial discovery metadata and global internal links for high-intent localized pages.
- `local-seo-presence`: strengthens tour structured data relationships using visible route duration and route-point facts.

## Impact

- Affected code: `src/lib/i18n.ts`, `src/layouts/BaseLayout.astro`, `src/lib/seo.ts`, `src/pages/[locale]/index.astro`, `src/pages/[locale]/blog/index.astro`.
- No new dependencies, URLs, content collection fields, booking flow, payment flow, or third-party integrations.
- Generated static HTML receives stronger on-page relevance and internal linking while remaining GitHub Pages-compatible.
