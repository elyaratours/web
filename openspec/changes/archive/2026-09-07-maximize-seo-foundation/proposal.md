## Why

The public site has solid basic SEO metadata, but it does not yet fully express Elyara as a local tourism business with rich structured data, robust sitemap signals, FAQ content, and search-intent landing pages. Improving this now strengthens indexability, local relevance, social previews, and organic discovery before more tours and articles are added.

## What Changes

- Add richer global SEO entities for the site, organization, local tourism business, contact channels, languages, service area, and social profiles.
- Expand structured data beyond current tour and article JSON-LD with breadcrumbs, item lists, FAQs, and stronger tour/business relationships.
- Make sitemap generation more robust by using the configured production site URL consistently and adding useful freshness metadata where source content provides dates.
- Improve page metadata completeness for public pages, including stronger social metadata and image alt signals for previews.
- Add data-driven FAQ support for tours and relevant commercial pages, exposed both visibly and as valid FAQ structured data.
- Add or strengthen commercial search landing behavior for private tours and guided visits in Granada, preserving localized Spanish and English routing.
- Improve SEO-oriented internal linking between home, tours, tailor-made trips, contact, blog articles, and related tour pages.
- Improve image SEO and performance signals for important public imagery without changing the static hosting model.

## Capabilities

### New Capabilities

- `local-seo-presence`: Local business, service-area, contact, social-profile, breadcrumb, FAQ, and listing structured-data behavior for the tourism website.

### Modified Capabilities

- `static-tourism-site`: Strengthen search metadata, sitemap generation, public commercial landing behavior, internal linking, and image performance expectations for the static tourism site.
- `editorial-blog`: Strengthen editorial SEO metadata, article structured data relationships, and editorial-to-tour discovery behavior.

## Impact

- Affects SEO helpers, layout/head metadata, sitemap generation, public localized pages, content collection schemas, tour Markdown, blog Markdown, and image usage.
- No backend, booking system, payment flow, or server-only rendering is introduced.
- No breaking routing changes are intended; existing public URLs should remain stable.
- May require new content fields for FAQ entries, SEO titles, social image metadata, or freshness dates.
- May require adding or converting selected public image assets to modern formats for performance-sensitive surfaces.
