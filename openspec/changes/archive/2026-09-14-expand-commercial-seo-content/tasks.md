## 1. Baseline Audit And Scope Control

- [x] 1.1 Inspect `git status --short`, active OpenSpec changes, and existing archived SEO work; verify the implementation plan clearly separates this change from unrelated pending work before editing content.
- [x] 1.2 Audit current tour, SEO landing, blog, metadata, internal-link, and image-size gaps; verify the audit identifies priority Spanish/English pages, thin pages, overlong/short metadata, missing cluster links, and large public assets.
- [x] 1.3 Select the first implementation batch of priority pages for this change; verify the selected batch covers paired Spanish/English commercial intents and avoids creating duplicate keyword pages.

## 2. Tour Detail Content Depth

- [x] 2.1 Expand priority Spanish tour detail entries with route focus, visitor fit, pace, cultural context, reservation expectations, FAQs, and relevant internal links; verify generated Spanish tour pages expose substantial visible content and preserve external WhatsApp/email reservation actions.
- [x] 2.2 Expand matching English tour detail entries with equivalent intent coverage, localized wording, FAQs, and relevant internal links; verify generated English tour pages expose substantial visible content and preserve external WhatsApp/email reservation actions.
- [x] 2.3 Review related-tour differentiation across expanded tour pages; verify overlapping routes explain practical differences and link to related tours, landings, articles, contact, or tailor-made paths when available.

## 3. Commercial Landing Content Depth

- [x] 3.1 Expand priority Spanish SEO landing entries for private guide/tours, walking tours, Alhambra, Albaicin/Sacromonte, Cathedral/Royal Chapel, family, day-trip, or free-tour comparison intents; verify each page has distinct visitor-facing guidance, matching CTAs, and contextual links.
- [x] 3.2 Expand matching English SEO landing entries for the same priority intent groups; verify each page has distinct visitor-facing guidance, matching CTAs, and contextual links.
- [x] 3.3 Verify landing metadata and structured data remain truthful after expansion by inspecting representative built pages for unique localized title/description/canonical/hreflang and no unsupported review, ranking, credential, ticketing, or GBP claims.

## 4. Editorial Cluster Expansion

- [x] 4.1 Expand or add Spanish editorial articles for priority planning topics such as private guide choice, Alhambra planning, Albaicin/Sacromonte route choice, free-tour/private-visit comparison, family routes, day trips, or first-day Granada planning; verify published articles include localized metadata, substantial body content, and visible links to relevant Spanish tours/landings/inquiry paths.
- [x] 4.2 Expand or add matching English editorial articles for the same priority planning topics; verify published articles include localized metadata, substantial body content, and visible links to relevant English tours/landings/inquiry paths.
- [x] 4.3 Strengthen cluster navigation between articles, tours, and landing pages; verify representative Spanish and English cluster journeys have visible same-locale links in both directions where matching pages exist.

## 5. Image Optimization And Metadata Consistency

- [x] 5.1 Create optimized WebP or AVIF variants for selected large public images used by priority pages; verify new assets are materially smaller while preserving the intended subject and accessibility meaning.
- [x] 5.2 Update priority page image references, dimensions, and image metadata to use optimized assets where appropriate; verify visible images, Open Graph/Twitter metadata, and structured data remain aligned on representative generated pages.
- [x] 5.3 Verify static build output still works for GitHub Pages and that optimized image changes do not remove required visible text, alt text, or layout dimensions from priority pages.

## 6. Google Business Profile Readiness

- [x] 6.1 If an approved verified Google Business Profile URL is provided, add it in one shared configuration/content location and surface it visibly on appropriate trust/contact/authority surfaces; verify structured data includes it only where visibly supported.
- [x] 6.2 If no approved Google Business Profile URL is provided, preserve the no-GBP-link state; verify source and built output contain no unapproved GBP link or verified-profile claim.
- [x] 6.3 Verify public business facts remain consistent across contact, authority, landing, tour, and structured data surfaces: name, production URL, email, WhatsApp inquiry number, Granada service area, Instagram profile, and Spanish/English support.

## 7. Validation

- [x] 7.1 Run `openspec validate "expand-commercial-seo-content" --type change --strict` and verify the change passes.
- [x] 7.2 Run `npm run check` and verify Astro, TypeScript, and content validation pass.
- [x] 7.3 Run `npm run build` and inspect representative generated Spanish and English tour, landing, blog, sitemap, and metadata output for indexability, internal links, optimized images, and absence of fake reviews/ratings/ranking claims/unapproved GBP links.
- [x] 7.4 Re-run the content/image audit after implementation; verify priority pages improved in content depth and selected large images no longer force multi-megabyte originals on SEO-critical surfaces.
