## Context

The project is a static Astro site with Spanish and English routes, data-driven tours, a small editorial blog, SEO helpers, sitemap generation, and existing JSON-LD for business, website, tours, articles, breadcrumbs, FAQs, lists, and services. The current SEO foundation is strong technically, but the site has limited high-intent landing coverage, limited tour FAQ coverage, and only basic multilingual sitemap/social metadata signals.

## Goals / Non-Goals

**Goals:**

- Build a scalable SEO acquisition layer while staying static and GitHub Pages-compatible.
- Add localized landing pages for commercially useful Granada tourism intents without copying full Astro page templates per intent.
- Centralize SEO metadata, structured data, and alternate-link behavior so new pages inherit consistent signals.
- Expand truthful schema connections without fabricating ratings, addresses, business hours, unavailable tickets, or unsupported contact channels.
- Improve internal linking so crawlers and visitors can move between Home, commercial landings, tours, blog, tailor-made, and contact pages.

**Non-Goals:**

- Add a backend, CMS, search service, booking engine, payment flow, account system, or dynamic server-only SEO behavior.
- Guarantee rankings or fabricate commercial facts to satisfy schema fields.
- Add unapproved addresses, ratings, review counts, opening hours, or external profiles.
- Replace the existing tour content architecture or remove current public URLs.

## Decisions

- Create a dedicated localized SEO landing content model instead of hardcoding each landing page. Alternatives considered: individual Astro pages per landing, which would be faster for one page but scales poorly and risks duplicated SEO/JSON-LD behavior.
- Generate landing pages from localized content entries with `locale`, `translationKey`, `routeSlug`, title, hero copy, SEO metadata, target-intent copy, related tours, related articles, FAQ, and image fields. This mirrors the existing tours/blog pattern and supports adding new long-tail pages without new templates.
- Start with a focused landing set rather than every possible keyword. Initial candidates should cover Spanish guided visits, Spanish free-tour intent, Spanish private Alhambra, Spanish Albaicin guided visit, English Granada walking tours, English free-tour intent, English private Alhambra, and English Albaicin guided walk.
- Keep free-tour intent pages transparent. They should capture search demand but must not imply an internal free booking/payment system; they should explain the reservation/contact model and point to relevant routes.
- Extend SEO helpers rather than scattering metadata logic across pages. The shared SEO layer should support Open Graph locale alternates, image dimensions when known, article meta tags, richer service/list schema, and stable entity IDs.
- Add sitemap alternate relationships from known translation keys across homes, tours, blog posts, contact, tailor-made, commercial pages, and SEO landing pages. Entries without known translations should remain indexable without invented alternates.
- Expand tour FAQ content in frontmatter first. The tour detail template already displays FAQ and emits FAQ JSON-LD, so broad SEO gains can come from better content coverage without a new rendering system.
- Use internal-link modules/data relationships instead of freeform copy-only links where possible. Landing entries and articles should reference related tours/articles/landings by keys so broken or cross-locale links are easier to avoid.

## Risks / Trade-offs

- Thin landing pages could hurt quality signals -> require substantial localized body copy, relevant tour/article links, FAQ, and honest visitor guidance before a landing is published.
- Keyword cannibalization between Home, private-tours landing, and new SEO landings -> give each landing a distinct intent, title, canonical path, and internal-link role.
- Schema overreach can create misleading SEO signals -> only emit structured data backed by visible content or approved public business facts.
- Sitemap hreflang mistakes can confuse localization -> derive alternates from explicit translation keys and omit alternates when a counterpart is unknown.
- More content increases maintenance cost -> use content collections and shared components so new SEO pages follow one pattern.
- Free-tour intent may be commercially sensitive -> phrase pages transparently around available routes and direct inquiry rather than promising an unsupported free-tour product.

## Migration Plan

- Add the SEO landing content model and shared route/template first, then publish the initial localized landing set.
- Extend SEO helpers and sitemap generation after the content relationships exist, so alternates and JSON-LD can derive from real entries.
- Add tour FAQs and editorial cluster links in content, then validate that visible FAQ and JSON-LD remain aligned.
- Run `npm run check`, `npm run build`, and OpenSpec validation before archiving.
- Rollback is a normal code/content revert because the site remains static.
