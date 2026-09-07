## 1. Shared SEO Foundation

- [x] 1.1 Centralize production site, business, contact, language, and social identity data in SEO/i18n helpers and verify no generated SEO URL uses `web-elyara.example` in `npm run build` output.
- [x] 1.2 Extend JSON-LD helper support for graph output, stable entity IDs, absolute URLs, and page-specific entities and verify existing tour and article pages still emit valid JSON-LD scripts after `npm run build`.
- [x] 1.3 Update the shared SEO head to emit complete social metadata for title, description, URL, image, image alt when available, and Twitter previews and verify representative built pages contain the expected meta tags.
- [x] 1.4 Update `.env.example` or documented configuration defaults so local setup does not conflict with the production URL guard and verify `npm run check` still passes.

## 2. Local SEO Structured Data

- [x] 2.1 Add global Organization/LocalBusiness-style structured data using only approved business facts and verify localized public pages identify Elyara Tours Granada, Granada as served area, Spanish/English support, email, and Instagram without invented phone/address data.
- [x] 2.2 Add WebSite structured data connected to the business entity and verify built localized public pages include the website entity with the configured production URL.
- [x] 2.3 Add breadcrumb structured data for tour detail, blog detail, contact, tailor-made, and commercial landing pages and verify representative built pages include localized breadcrumb URLs.
- [x] 2.4 Add ItemList structured data for the localized home tour catalog and localized blog listings and verify each list item URL matches its visible card link.
- [x] 2.5 Add constrained review structured data only if the visible approved review data can be represented truthfully and verify no star ratings, aggregate ratings, platform names, or unsupported reviewer details are emitted.

## 3. FAQ Content

- [x] 3.1 Extend the tour content schema to support optional localized FAQ entries and verify all existing tour content still validates with `npm run check`.
- [x] 3.2 Add visible FAQ rendering to tour detail pages when entries exist and verify a tour with FAQs displays questions and answers while a tour without FAQs shows no empty FAQ section.
- [x] 3.3 Add FAQ JSON-LD that exactly mirrors visible FAQ content and verify built tour pages with FAQs include matching FAQ structured data.
- [x] 3.4 Add localized FAQ content to priority tour entries and verify Spanish and English tour pages render only their own localized questions and answers.
- [x] 3.5 Add visible FAQ support and matching FAQ JSON-LD to contact, tailor-made, or commercial landing pages where localized FAQ content is provided and verify pages without visible FAQs emit no FAQ schema.

## 4. Commercial Landing Pages

- [x] 4.1 Define localized commercial landing content for private or guided tours in Granada and verify Spanish and English routes generate without changing existing tour, contact, blog, or tailor-made URLs.
- [x] 4.2 Implement localized commercial landing pages with useful visitor-facing sections, relevant tour links, tailor-made/contact links, email inquiry CTA, metadata, alternates, breadcrumbs, and service/business schema and verify both pages in the built output.
- [x] 4.3 Add visible navigation or contextual discovery paths to the commercial landing pages from relevant localized public surfaces and verify crawlers can reach the pages through rendered links.
- [x] 4.4 Add commercial landing URLs to sitemap generation and verify `dist/sitemap.xml` includes both localized commercial landing pages after `npm run build`.

## 5. Internal Linking And Editorial SEO

- [x] 5.1 Add contextual links from tour detail pages to relevant same-locale editorial, commercial, tailor-made, or contact content when available and verify the links render visibly on representative tour pages.
- [x] 5.2 Add contextual links from article detail pages to same-locale commercial landing pages when the article topic supports that intent and verify existing related tour links remain visible.
- [x] 5.3 Strengthen blog listing structured data and article JSON-LD relationships to the Elyara publisher/business identity and verify built blog listing and detail pages include the expected JSON-LD.
- [x] 5.4 Add or expand priority Granada discovery articles in Spanish and English and verify localized blog listings show a broader set of published discovery topics with excerpts, images when available, categories, and detail links.
- [x] 5.5 Verify unpublished editorial drafts remain absent from generated public listings, detail pages, sitemap entries, and structured list data.

## 6. Sitemap, Robots, And URL Consistency

- [x] 6.1 Refactor sitemap generation to derive absolute URLs from the same configured production site URL used by canonical metadata and verify `dist/sitemap.xml` uses `https://elyaratours.com` consistently.
- [x] 6.2 Add sitemap freshness metadata where published or updated content dates are reliable and verify dated blog entries emit expected `lastmod` values.
- [x] 6.3 Verify `public/robots.txt` and generated metadata still declare the production sitemap URL and public crawling behavior.
- [x] 6.4 Verify root, localized home, tour, blog, contact, tailor-made, and commercial landing URLs remain unique and canonical in the generated sitemap.

## 7. Image SEO And Performance

- [x] 7.1 Audit priority public images used for hero, tour cards, tour detail, blog cards, blog detail, contact, tailor-made, and reviews and verify each non-decorative image has meaningful localized alt text.
- [x] 7.2 Add dimensions or stable layout information for important images and verify representative built pages avoid avoidable image layout shift in markup/layout.
- [x] 7.3 Use optimized WebP/AVIF versions for priority images where suitable assets are available and verify page metadata references relevant visible images.
- [x] 7.4 Preserve lazy loading for below-the-fold images and appropriate priority loading for above-the-fold images and verify home, tour detail, and blog detail markup reflects those choices.

## 8. Verification

- [x] 8.1 Run `npm run check` and verify Astro/TypeScript/content validation succeeds.
- [x] 8.2 Run `npm run build` and verify the static site builds successfully with sitemap and localized pages generated.
- [x] 8.3 Inspect representative built HTML for `/es/`, `/en/`, one Spanish tour, one English tour, one blog listing, one blog detail, contact, tailor-made, and commercial landing pages and verify titles, descriptions, canonicals, hreflang, Open Graph, Twitter metadata, and JSON-LD meet the specs.
- [x] 8.4 Run `openspec validate maximize-seo-foundation --type change --strict` and verify the change validates strictly.
