## Context

See `proposal.md` for motivation. The site is a static Astro project with content collections for tours, SEO landings, and blog articles. Blog entries already support optional `updatedDate`; tour and SEO landing entries currently do not. The sitemap uses a fixed sitewide content date for tours and SEO landings, while article pages can use article update dates.

Existing commercial SEO coverage is broad, so this change should deepen the Alhambra cluster rather than create another generic Granada tours page. Existing guide authority content already publishes Laura Hdez. León as a guide and must remain the source of truth for credential wording.

## Goals / Non-Goals

**Goals:**

- Support reliable page-specific sitemap `lastmod` values for updated tour and SEO landing content.
- Add focused Spanish and English high-intent Alhambra content around cost, official-guide confidence, and sold-out ticket planning.
- Strengthen internal links across articles, SEO landings, tours, authority pages, contact pages, and external inquiry actions.
- Keep all trust, ticket, and pricing claims aligned with visible approved content.

**Non-Goals:**

- No internal booking engine, ticket resale flow, payment flow, or availability guarantee.
- No fabricated reviews, ratings, awards, addresses, license numbers, business hours, or ranking promises.
- No redesign of the shared landing, tour, or blog page layouts unless needed to expose existing related-content relationships.
- No change to custom-domain GitHub Pages routing or production URL behavior.

## Decisions

### Add optional update dates to commercial content entries

Add optional `updatedDate` metadata to tour and SEO landing collection schemas, matching the blog pattern. The sitemap should prefer page-specific `updatedDate` for tours, SEO landings, and existing blog articles, then fall back to the existing sitewide SEO update date.

Alternative considered: update the fixed sitewide sitemap date after every content change. This is simpler but less precise and makes unchanged pages look freshly updated.

### Use editorial articles for nuanced Alhambra questions

Use localized blog articles for nuanced questions such as cost expectations and sold-out ticket planning because they require explanatory guidance, caveats, and internal links. Use SEO landing updates only where the query is directly commercial and should move visitors quickly toward inquiry.

Alternative considered: create separate SEO landing pages for each query. That risks thin, overlapping pages for price, official guide, and tickets; editorial pages can answer questions more naturally while supporting the existing private Alhambra landing.

### Keep authority claims centralized and conservative

When content mentions Laura as a guide, reuse the approved public wording already reflected in authority content. Link to the authority page where fuller context is useful. Avoid more specific claims such as license number, jurisdiction, association membership, awards, or rating signals unless those are separately approved later.

Alternative considered: add richer credential schema immediately. That would increase trust signals but risks publishing unsupported or hidden claims.

### Preserve content-collection relationships

Use existing `relatedTours`, `relatedArticles`, and `relatedLandings` relationships where possible so new content appears through the existing shared components and JSON-LD relationships. Add frontmatter relationships rather than adding bespoke hard-coded page sections unless the existing model cannot express a necessary link.

Alternative considered: hard-code links in component templates. That would be fast for one query but less maintainable for future bilingual SEO clusters.

## Risks / Trade-offs

- Thin or repetitive SEO pages -> Prefer substantial editorial guidance and update existing Alhambra landing relationships instead of creating many narrow landing pages.
- Misleading ticket claims -> State ticket constraints and inquiry paths without promising access, resale, or internal ticket purchase.
- Overclaiming guide authority -> Keep credential wording aligned with approved visible authority content and avoid unsupported specifics.
- Sitemap freshness misuse -> Only use explicit page-level dates when content actually changes; otherwise preserve the sitewide fallback.

## Migration Plan

1. Extend content schemas to accept optional update dates for tours and SEO landings.
2. Update sitemap generation to use page-specific update dates where available.
3. Add or update localized Alhambra-focused content and related-content frontmatter.
4. Run project checks and build to validate content schemas, generated routes, metadata, and sitemap output.
5. Roll back by removing the new content entries/frontmatter fields and restoring the previous sitemap date behavior if validation exposes regressions.
