## 1. Crawl Ownership And Metadata

- [x] 1.1 Add optional `PUBLIC_GOOGLE_SITE_VERIFICATION` handling in the shared SEO head and verify a build without the variable emits no placeholder verification meta tag.
- [x] 1.2 Verify a build with a sample local verification value emits `<meta name="google-site-verification">` on generated localized public pages without adding the token to content entries.
- [x] 1.3 Inspect generated `robots.txt`, `/sitemap.xml`, canonical URLs, and hreflang URLs after build to verify they continue using `https://elyaratours.com`.

## 2. Authority Pages

- [x] 2.1 Add localized authority content and routes for `/es/sobre-elyara/` and `/en/about-elyara/`, then verify both pages render approved business identity, Granada service area, language support, and WhatsApp/email contact actions.
- [x] 2.2 Add authority page metadata, language alternates, breadcrumb structured data, and business entity relationships, then verify generated HTML includes production canonical URLs and no unapproved address, rating, award, or credential claims.
- [x] 2.3 Add visible internal links from authority pages to relevant tours, commercial pages, blog content, and contact pages, then verify links resolve in the production build.
- [x] 2.4 Add authority page discovery links from shared navigation or footer where appropriate, then verify desktop and mobile navigation/footer still render correctly.

## 3. SEO Landing Content

- [x] 3.1 Audit current SEO landing entries and deepen thin pages with unique localized visitor-facing copy, then verify content collection validation passes.
- [x] 3.2 Add localized landing entries for private guide/tour, Cathedral/Royal Chapel, Albaicin/Sacromonte or historic-center intent, family tours with kids, and Malaga/Cordoba day-trip intent where matching tours or inquiry paths exist; verify routes generate for ES and EN entries that are marked published.
- [x] 3.3 Configure `relatedTours`, `relatedArticles`, `relatedLandings`, and FAQ only where relevant, then verify landing pages display visible contextual links and matching FAQ structured data.
- [x] 3.4 Verify landing page generated HTML exposes unique title, description, canonical URL, language alternates where translations exist, social metadata, and truthful service or breadcrumb JSON-LD.

## 4. Editorial Expansion

- [x] 4.1 Add localized blog articles for practical Granada search intents that support the new landing topics, then verify each published article includes required metadata, body content, category, and sitemap inclusion.
- [x] 4.2 Add visible contextual links from new articles to relevant tours, SEO landings, and inquiry paths, then verify those links render on article detail pages.
- [x] 4.3 Add reciprocal supporting links from relevant landing pages to articles where useful, then verify landing pages keep existing tour and reservation links.
- [x] 4.4 Verify published article generated HTML includes article metadata, canonical URL, language alternates when translations exist, breadcrumb JSON-LD, article JSON-LD, and social preview metadata based on visible content.

## 5. Validation And SEO Readiness

- [x] 5.1 Run `npm run check` and verify TypeScript, Astro, and content collection validation pass.
- [x] 5.2 Run `npm run build` and verify all localized authority, landing, tour, blog, sitemap, and robots outputs are generated successfully.
- [x] 5.3 Inspect generated HTML for priority pages to verify no fake rankings, ratings, reviews, addresses, awards, official-guide claims, or unsupported business facts were introduced.
- [x] 5.4 Run `openspec validate improve-search-ranking-foundation --type change --strict` and verify the change passes strict validation.
- [ ] 5.5 After deployment, submit the sitemap and priority URLs in Google Search Console and verify indexing can be requested for the production domain.
