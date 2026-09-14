## Why

The site already has substantial localized SEO content, but the technical discovery layer can be made more complete for crawlers and social platforms. Strengthening sitemap freshness, localized alternates, page image metadata, and structured data improves crawlability without adding unsupported claims.

## What Changes

- Add complete sitemap freshness metadata for public route, landing, home, contact, authority, tailor-made, blog, and commercial pages.
- Expose localized `x-default` alternate relationships for equivalent Spanish pages instead of pointing every page to the Spanish home page.
- Add crawler-readable sitemap discovery, local geo metadata, theme color, and image MIME type metadata in public page heads.
- Provide a default social image for public pages that do not supply page-specific imagery.
- Enrich JSON-LD image, business, article, service, and tour nodes with truthful `ImageObject` details, approved business facts, author URL, and parsed EUR offer metadata when available.
- Preserve the existing constraints against fake reviews, rankings, unapproved Google Business Profile links, ratings, credentials, internal booking, checkout, or unsupported business facts.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `static-tourism-site`: public sitemap, alternate-link, social preview, and image metadata requirements are strengthened for localized static pages.
- `local-seo-presence`: structured data requirements are strengthened for truthful entity relationships, image objects, approved business facts, and local metadata safeguards.

## Impact

- Affected code: `src/components/SeoHead.astro`, `src/layouts/BaseLayout.astro`, `src/lib/seo.ts`, `src/pages/sitemap.xml.ts`.
- No new dependencies, routes, public booking flow, payment flow, content collection schema fields, or external APIs.
- Generated static pages and sitemap receive richer metadata while remaining GitHub Pages-compatible.
