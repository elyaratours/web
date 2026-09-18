## Why

Elyara already covers the main broad Granada tour searches, but the next SEO opportunity is closer to reservation intent: visitors comparing Alhambra private guide cost, official-guide confidence, and what to do when Alhambra tickets are unavailable. The sitemap also uses a fixed sitewide freshness date for tours and SEO landings, which limits accurate crawl signals after commercial content changes.

## What Changes

- Add page-specific freshness support for published tour and SEO landing content so sitemap `lastmod` can reflect reliable content updates when available.
- Expand high-intent Alhambra SEO coverage in Spanish and English around private guide pricing/cost, official guide trust, and sold-out ticket planning.
- Connect the new or updated high-intent content to relevant tour detail pages, SEO landing pages, authority pages, contact paths, and external WhatsApp/email inquiry actions.
- Preserve the existing static GitHub Pages architecture, localized URL structure, and external reservation model.
- Avoid unsupported claims about guaranteed search rankings, ticket availability, ratings, awards, addresses, or unapproved credentials.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `static-tourism-site`: public sitemap freshness behavior and SEO landing/tour metadata support change for updated commercial content.
- `editorial-blog`: high-intent editorial cluster coverage expands to include Alhambra price/cost, official-guide, and sold-out ticket planning questions.
- `local-seo-presence`: commercial SEO and guide authority signals are strengthened for Alhambra buying-intent searches while preserving truthful claim constraints.

## Impact

- Affected content schemas: `src/content.config.ts` for optional tour and SEO landing update dates.
- Affected sitemap generation: `src/pages/sitemap.xml.ts` for page-specific `lastmod` values.
- Affected content: localized SEO landing and/or blog Markdown entries under `src/content/seo-landings/` and `src/content/blog/`.
- Affected internal linking: related article, landing, tour, authority, contact, and inquiry links where matching localized pages exist.
- No new runtime dependencies, APIs, server rendering, booking forms, or payment flows are expected.
