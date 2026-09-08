## 1. SEO Landing Content Model

- [x] 1.1 Add a localized SEO landing content collection with required fields for locale, translation key, route slug, title, heading, intro, SEO description, image, image alt, target intent, related tours, related articles, FAQ, and publication state; verify `npm run check` validates the schema.
- [x] 1.2 Add path and lookup helpers for published SEO landing entries and verify Spanish and English landing paths are generated from content rather than hardcoded page copies.
- [x] 1.3 Create the shared localized SEO landing page template and verify one template can render all published SEO landing entries with hero content, related tours, related articles, FAQ, contact links, and external WhatsApp/email inquiry actions.

## 2. Initial High-Intent Landing Pages

- [x] 2.1 Publish Spanish landing content for guided visits in Granada and verify the generated page links to relevant Spanish tours and inquiry actions.
- [x] 2.2 Publish Spanish landing content for free-tour Granada intent and verify the page explains the external reservation model without adding internal checkout, payment, or booking forms.
- [x] 2.3 Publish Spanish landing content for private Alhambra and Albaicin guided-visit intents and verify each page links to the matching Spanish tour pages and related discovery content.
- [x] 2.4 Publish English landing content for Granada walking tours and free-tour Granada intent and verify each page uses English copy, metadata, and external inquiry actions.
- [x] 2.5 Publish English landing content for private Alhambra and Albaicin guided-walk intents and verify each page links to the matching English tour pages and related discovery content.

## 3. Metadata and Alternates

- [x] 3.1 Extend shared SEO metadata rendering with Open Graph locale alternates and verify localized pages with translations expose alternate locale metadata.
- [x] 3.2 Extend shared SEO metadata rendering with known image dimensions for Open Graph/Twitter previews and verify pages with images expose production image URLs, alt text, and dimensions when available.
- [x] 3.3 Add article publication and modification meta tags for blog detail pages and verify published article pages expose dates that match content metadata.
- [x] 3.4 Verify canonical, hreflang, x-default, Open Graph, Twitter, and JSON-LD URLs use `https://elyaratours.com` after `npm run build`.

## 4. Sitemap Improvements

- [x] 4.1 Extend sitemap generation to include SEO landing pages and verify published landing URLs appear in `/sitemap.xml`.
- [x] 4.2 Add sitemap `xhtml:link` hreflang alternates for localized home, tours, blog posts, contact, tailor-made, commercial, and SEO landing pages with known translations; verify untranslated entries are not given invented alternates.
- [x] 4.3 Verify `/sitemap.xml` remains valid XML and references only production-domain URLs.

## 5. Structured Data Enrichment

- [x] 5.1 Extend structured data helpers for SEO landing service/list entities and verify landing pages connect service, visible tour list, page URL, and Elyara business identity.
- [x] 5.2 Enrich tour structured data without inventing ratings, addresses, unavailable tickets, or unsupported schedules and verify tour detail JSON-LD remains tied to visible tour content.
- [x] 5.3 Represent approved contact channels consistently in business/service structured data and verify no unapproved address, business hours, payment method, aggregate rating, or review count is emitted.
- [x] 5.4 Verify all page JSON-LD remains parseable JSON and does not include unpublished tours, unpublished articles, or hidden FAQ entries after `npm run build`.

## 6. Tour FAQ Coverage

- [x] 6.1 Add localized FAQ entries to every published Spanish tour that lacks them and verify each Spanish tour detail page displays visible FAQ content.
- [x] 6.2 Add localized FAQ entries to every published English tour that lacks them and verify each English tour detail page displays visible FAQ content.
- [x] 6.3 Verify tour FAQ structured data matches the visible FAQ entries on each published tour detail page.

## 7. Internal Linking and Editorial Clusters

- [x] 7.1 Add relationships from SEO landing pages to relevant tours, articles, contact, tailor-made, and inquiry actions and verify every published landing page has useful visible internal links.
- [x] 7.2 Add visible links from relevant tour detail pages back to matching SEO landing or commercial discovery pages and verify links stay within the active locale.
- [x] 7.3 Add visible links from relevant blog articles to matching SEO landing or commercial discovery pages and verify existing related tour links and reservation actions remain visible.
- [x] 7.4 Publish or expand localized editorial content for at least one additional Granada search-intent cluster in Spanish and English and verify blog listings include the published entries only.

## 8. Validation

- [x] 8.1 Run `npm run check` and verify Astro, TypeScript, and content collection validation pass.
- [x] 8.2 Run `npm run build` and verify all localized homes, tours, blog pages, contact pages, tailor-made pages, commercial pages, SEO landing pages, and sitemap build successfully.
- [x] 8.3 Inspect representative built HTML for Spanish and English Home, one SEO landing, one tour detail, one article, and sitemap to verify metadata, links, JSON-LD, and external reservation behavior.
- [x] 8.4 Run `openspec validate maximize-seo-presence --type change --strict` and verify the change artifacts pass strict validation.
