## 1. Localized Trust Content

- [x] 1.1 Add shared localized legal/trust page copy and route helpers for legal notice, privacy, and cookies; verify each locale exposes titles, descriptions, route slugs, body sections, and alternates from one shared source.
- [x] 1.2 Create Spanish and English static legal notice pages using the existing layout and SEO metadata; verify `/es/aviso-legal/` and `/en/legal-notice/` render approved contact facts and no unsupported address, ratings, awards, credentials, or review claims.
- [x] 1.3 Create Spanish and English privacy pages using the existing layout and SEO metadata; verify `/es/privacidad/` and `/en/privacy/` render approved data/contact information and no unsupported trust claims.
- [x] 1.4 Create Spanish and English cookie pages using the existing layout and SEO metadata; verify `/es/cookies/` and `/en/cookies/` explain current static-site cookie behavior without adding a tracking dependency or unsupported cookie banner claim.

## 2. Discovery, Metadata, And Sitemap

- [x] 2.1 Add compact localized footer links to legal notice, privacy, and cookies; verify existing tourism discovery, contact, language, WhatsApp, and email links remain visible and functional.
- [x] 2.2 Add legal/trust page entries to `sitemap.xml.ts`; verify the generated sitemap includes production URLs and hreflang alternates with Spanish `x-default` for each translated pair.
- [x] 2.3 Verify representative legal/trust pages expose localized title, description, canonical, Open Graph metadata, hreflang, and JSON-LD connected to Elyara without review, rating, address, opening-hours, payment, or credential claims.

## 3. Search Ownership And External Profiles

- [x] 3.1 Keep Search Console verification environment-driven and production-safe; verify a build without `PUBLIC_GOOGLE_SITE_VERIFICATION` emits no placeholder verification meta tag.
- [x] 3.2 Add a single approved Google Business Profile URL configuration path; verify absent configuration produces no public GBP link and no GBP URL in JSON-LD.
- [x] 3.3 Display the approved GBP link visibly on contact, authority, or footer surfaces when configured; verify business structured data includes that same URL in `sameAs` only when the visible link is rendered.
- [x] 3.4 Search source and built output for fake reviews, aggregate ratings, unapproved GBP links, unsupported credentials, physical addresses, business hours, awards, and ranking guarantees; verify none are introduced.

## 4. Home Copy And SEO Positioning

- [x] 4.1 Update localized home hero title and body copy to the approved route-first Spanish and English copy; verify `/es/` and `/en/` display the required visitor-facing text.
- [x] 4.2 Update localized home SEO title/OG title to include approved positioning plus concise guided-tour intent; verify metadata remains readable and avoids keyword-only text or ranking guarantees.
- [x] 4.3 Verify localized home behavior remains unchanged after copy updates by checking hero image, primary CTAs, tour catalog, planning links, Tailor-made section, and reservation calendar still render.

## 5. Validation

- [x] 5.1 Run `npm run check` and verify Astro/TypeScript validation passes.
- [x] 5.2 Run `npm run build` and verify the static production build succeeds.
- [x] 5.3 Inspect generated HTML for `/es/`, `/en/`, one legal page pair, contact, authority, and `/sitemap.xml`; verify production URLs, canonicals, hreflang, sitemap entries, Search Console behavior, GBP gating, and structured-data constraints match the specs.
- [x] 5.4 Run `openspec validate "strengthen-seo-trust-foundation" --type change --strict` and verify the change passes.
