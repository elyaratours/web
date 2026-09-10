## Context

See `proposal.md` for motivation. The current site is a static Astro app with localized routes, content collections for tours, SEO landings, and blog posts, shared SEO helpers, sitemap generation, `robots.txt`, canonical metadata, hreflang metadata, and JSON-LD.

Existing SEO landing pages are generated from `src/content/seo-landings/**/*.md` through the localized custom slug route. Blog posts are generated from `src/content/blog/**/*.md`. The shared layout delegates metadata to `SeoHead.astro`, which is the right central place for optional verification metadata.

## Goals / Non-Goals

**Goals:**

- Keep the SEO foundation static, bilingual, and GitHub Pages-compatible.
- Add crawl ownership readiness without committing private or placeholder Search Console values.
- Add localized About/Sobre authority pages with visible, approved business facts.
- Expand and deepen landing and editorial content through the existing content collection patterns.
- Preserve truthful structured data and avoid claims that require proof unless approved content is visible.

**Non-Goals:**

- No guarantee of first-page Google ranking.
- No paid SEO, backlink automation, analytics dashboard, or Search Console API integration.
- No internal booking, checkout, payment, account, or form workflow.
- No fake reviews, aggregate ratings, addresses, official-guide credentials, or awards.

## Decisions

### Use a public build variable for Search Console verification

Expose the Google verification meta tag from `SeoHead.astro` only when a public build-time variable such as `PUBLIC_GOOGLE_SITE_VERIFICATION` is present.

Alternatives considered: hard-code the token in source, store it in content frontmatter, or skip verification support. Hard-coding and content frontmatter make token handling too scattered, while skipping support leaves the site less ready for Search Console setup.

### Implement authority pages as localized static pages

Add `/es/sobre-elyara/` and `/en/about-elyara/` as static localized pages using `BaseLayout`, shared SEO helpers, breadcrumbs, and visible links to tours, contact, blog, and commercial pages.

Alternatives considered: model About pages as SEO landings or add a new content collection. Static pages are simpler because there are only two localized pages and their structure is more stable than commercial landing content.

### Continue using SEO landing Markdown entries for long-tail pages

Add or expand entries under `src/content/seo-landings/<locale>/` for high-intent topics. Use `translationKey`, `routeSlug`, `relatedTours`, `relatedArticles`, `relatedLandings`, FAQ, and the existing route generator.

Alternatives considered: add bespoke `.astro` pages per landing or merge all copy into one commercial page. Markdown entries keep content data-driven and sitemap-aware, while bespoke pages would duplicate templates and increase maintenance.

### Expand editorial content through the existing blog collection

Add localized article entries for practical Granada questions that support landing pages and tours. Use existing metadata fields, related tour links, related landing links, publication gating, and article structured data.

Alternatives considered: create a separate guide collection or place article content in landing pages only. The current blog collection already supports bilingual articles, related links, listing pages, sitemap inclusion, and structured data.

### Keep structured data conservative

Reuse existing business, website, breadcrumb, FAQ, article, item list, tour, and service graph patterns. Add or connect JSON-LD only when it is backed by visible page content and approved business facts.

Alternatives considered: add aggressive `LocalBusiness` fields, aggregate ratings, or credential markup for ranking. That would create compliance and trust risk because the site currently lacks approved visible facts for those claims.

## Risks / Trade-offs

- Competitive keywords may still rank slowly -> Mitigation: focus implementation on long-tail relevance, internal linking, Search Console submission, and publishable authority signals.
- New landing pages can become thin or duplicative -> Mitigation: require unique localized body copy, practical sections, visible links, and FAQ only where useful.
- Official-guide wording could be risky if credentials are not approved -> Mitigation: do not publish official-guide claims until the exact credential text is approved and visible.
- Search Console token may not be available during implementation -> Mitigation: make verification optional and omit the meta tag when unset.
- More content increases maintenance load -> Mitigation: use existing data collections and translation keys instead of custom templates per page.

## Migration Plan

1. Add optional Search Console verification support and configure the token outside content/source when available.
2. Add localized authority routes and links from navigation or footer where appropriate.
3. Add and deepen SEO landing entries in small groups, prioritizing high-intent pages with matching tours.
4. Add supporting editorial articles and contextual links between articles, landings, and tours.
5. Validate with `npm run check`, `npm run build`, generated HTML inspection, sitemap inspection, and `openspec validate improve-search-ranking-foundation --type change --strict`.
6. Deploy after local verification, then submit sitemap and priority URLs in Google Search Console.

Rollback is static: remove or unpublish the affected Markdown entries, remove authority routes if needed, unset the verification variable, and rebuild.

## Open Questions

- The exact Search Console verification token can be supplied later without changing the implementation approach.
- Any official-guide credential, license, membership, or review platform wording must be approved before it is added to visible copy or structured data.
