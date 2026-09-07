## Context

See `proposal.md` for motivation. The site is a static Astro app with localized routes under `/es/` and `/en/`, tour and blog content collections, a shared `BaseLayout`, a dedicated `SeoHead`, helper functions in `src/lib/seo.ts`, a generated sitemap route, and a static `robots.txt`. Current SEO already covers titles, descriptions, canonical URLs, hreflang, Open Graph basics, tour JSON-LD, article JSON-LD, sitemap output, and public crawling.

The implementation must preserve GitHub Pages-compatible static generation, root-path custom-domain routing, localized content, and email-only reservation/inquiry flows. Existing public URLs should remain stable.

## Goals / Non-Goals

**Goals:**

- Centralize SEO entity construction so public pages reuse consistent production URLs, site identity, business identity, language, social, and image behavior.
- Add structured data in layers: global entities, page-specific entities, breadcrumbs, item lists, FAQs, and constrained review data.
- Keep FAQ and commercial landing content data-driven and localized rather than hard-coded into many copied pages.
- Improve sitemap confidence by deriving URLs from the same production site configuration used by canonical metadata and adding freshness when reliable source data exists.
- Improve organic discovery paths through visible internal links, not metadata-only relationships.
- Improve image SEO and performance without introducing server rendering or a runtime image service.

**Non-Goals:**

- No internal booking, payment, account, form backend, CRM, review API, or analytics implementation.
- No unapproved phone number, physical address, Google profile, Tripadvisor profile, or social network should be invented.
- No route migrations for existing tours, blog articles, contact pages, or tailor-made pages.
- No dynamic sitemap generation requiring server hosting.

## Decisions

### Use a shared SEO model rather than ad hoc per-page objects

Add or extend SEO helpers around a small shared model for site identity, business identity, page URLs, images, and JSON-LD graph composition. Pages should pass page-specific facts, while common facts such as site name, configured URL, email, Instagram profile, area served, and supported languages are defined once.

Alternative considered: build every JSON-LD object directly inside page components. Rejected because local business, breadcrumb, FAQ, and listing entities would duplicate details across many pages and increase drift risk.

### Emit JSON-LD as a graph when pages need multiple entities

Allow a page to emit one JSON-LD graph containing global and page-specific entities. This avoids several disconnected scripts competing to describe the same business, website, tour, article, or page.

Alternative considered: keep one JSON-LD script per entity. That is simpler initially, but it makes identity linking and future validation harder.

### Keep structured data truthful and conservative

Business schema should include only approved public facts. Review schema should be emitted only when it can represent visible, real, approved review content without inventing ratings, counts, or platforms. FAQ schema should only mirror visible FAQ content.

Alternative considered: add aggressive rich-result fields such as aggregate ratings or detailed local business address. Rejected because unsupported structured data is a trust and policy risk.

### Extend content collections for FAQ and optional SEO fields

Tour entries should support localized FAQ items. Blog entries and commercial pages can optionally support stronger SEO titles, social image metadata, and update dates where useful. Defaults should remain simple so existing content can keep building while new SEO content is added gradually.

Alternative considered: store all FAQ and landing content in TypeScript dictionaries. Rejected for tour FAQs because tour content already lives in content collections and should remain editorially data-driven.

### Add commercial landing pages as localized public content

Create a small localized landing surface for high-intent searches around private tours and guided visits in Granada. It should link to existing tour details, tailor-made content, contact content, and relevant articles rather than duplicating full tour pages.

Alternative considered: rely only on the home page and tour cards. Rejected because the home page is broad and less targeted for transactional search phrases.

### Improve internal links as visible UX

Related tour, editorial, and commercial links should be rendered as visible content. JSON-LD can describe relationships, but it should not be the only connection between pages.

Alternative considered: only add schema relationships. Rejected because crawlers and users both benefit more from visible, crawlable links.

### Optimize images with static assets first

Use selected WebP/AVIF versions for important imagery when assets are available, add explicit dimensions or stable aspect-ratio layout, and keep lazy loading for below-the-fold imagery. Avoid adding a new image pipeline unless static asset management becomes too manual.

Alternative considered: adopt a full image optimization integration immediately. Rejected because the current public asset setup can be improved with smaller, lower-risk changes first.

## Risks / Trade-offs

- [Risk] Search engines may ignore or delay rich result enhancements → Mitigation: prioritize truthful, valid structured data and visible content improvements rather than chasing rich snippets only.
- [Risk] Over-optimizing copy can weaken the site voice → Mitigation: keep commercial pages useful and local, with keyword intent integrated naturally.
- [Risk] New content fields can break existing entries if required too aggressively → Mitigation: introduce optional fields first except where the spec requires visible FAQ behavior only when entries exist.
- [Risk] Review structured data can become misleading if source data is incomplete → Mitigation: emit no review schema unless the approved visible data is sufficient.
- [Risk] Multiple SEO entities can create duplicate or inconsistent URLs → Mitigation: build all absolute URLs from the configured site URL through shared helpers.
- [Risk] Adding commercial pages can create thin pages if copy is too short → Mitigation: include real visitor-facing sections, FAQs, and contextual links before publishing them.

## Migration Plan

1. Add shared SEO constants/helpers and update existing structured data to use stable entity IDs and production URL helpers.
2. Add global business and website entities through the shared layout/head path.
3. Add page-specific breadcrumbs, item lists, FAQ output, and constrained review output.
4. Extend content schemas and content entries for tour FAQs and any optional SEO fields.
5. Add localized commercial landing pages and connect them from navigation or relevant discovery surfaces.
6. Update sitemap generation to share production URL behavior and add freshness where available.
7. Optimize priority images and verify generated HTML, sitemap, and production build.

Rollback is removing the added SEO helpers/content fields/pages and restoring prior page metadata behavior. Because this change is static and has no persisted user data, rollback does not require data migration.

## Open Questions

- The site currently has no approved physical address, phone number, Google Business Profile, Tripadvisor profile, or legal business identifier. These can be added later if the business approves them.
- The final public domain appears to be `https://elyaratours.com`; if that changes before launch, the configured production site URL and robots sitemap declaration must be updated together.
