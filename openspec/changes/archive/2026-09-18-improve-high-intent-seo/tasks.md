## 1. Content Freshness Infrastructure

- [x] 1.1 Add optional `updatedDate` support to tour and SEO landing content schemas and verify `npm run check` accepts existing content without requiring the new field
- [x] 1.2 Update sitemap generation to prefer page-specific update dates for tours, SEO landings, and blog articles before the sitewide fallback, and verify the generated sitemap keeps canonical URLs and hreflang alternates intact with `npm run build`
- [x] 1.3 Add reliable update dates only to content entries changed by this work and verify unchanged tour and landing entries still use the sitewide fallback in the generated sitemap

## 2. High-Intent Alhambra Content

- [x] 2.1 Add Spanish editorial content answering private Alhambra guide price/cost questions and verify it appears in `/es/blog/`, has article metadata, and links to relevant Spanish Alhambra, authority, contact, or inquiry paths
- [x] 2.2 Add English editorial content answering private Alhambra guide cost/pricing questions and verify it appears in `/en/blog/`, has article metadata, and links to relevant English Alhambra, authority, contact, or inquiry paths
- [x] 2.3 Add Spanish and English editorial guidance for sold-out or unavailable Alhambra tickets and verify the content does not promise ticket access, resale, internal checkout, or guaranteed monument entry
- [x] 2.4 Ensure any official-guide wording in the new or updated content matches the approved Laura Hdez. León authority facts and verify no license number, jurisdiction, award, rating, or third-party endorsement is introduced

## 3. Internal Linking And Commercial Discovery

- [x] 3.1 Update related-content frontmatter so Alhambra SEO landings surface the new supporting articles, and verify the landing pages show localized related article links after build
- [x] 3.2 Link new Alhambra articles to relevant localized tour detail pages, SEO landings, authority pages, contact pages, tailor-made inquiry pages, or external WhatsApp/email actions, and verify all internal links resolve in the static build
- [x] 3.3 Preserve existing tour, landing, blog, and reservation behavior while adding the new discovery paths, and verify no internal booking, payment, or ticket purchase flow is introduced

## 4. Validation

- [x] 4.1 Run `openspec validate improve-high-intent-seo --type change --strict` and verify the change passes
- [x] 4.2 Run `npm run check` and verify TypeScript, Astro content schemas, and content collection validation pass
- [x] 4.3 Run `npm run build` and verify generated public pages, sitemap output, metadata, and JSON-LD build successfully
