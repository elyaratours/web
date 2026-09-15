## Context

See `proposal.md` for motivation. The site is a static Astro app with localized `/es/` and `/en/` routes, shared SEO metadata in `SeoHead.astro`, JSON-LD helpers in `src/lib/seo.ts`, localized copy in `src/lib/i18n.ts`, and a generated `sitemap.xml.ts`. The repo already avoids fake reviews, aggregate ratings, unapproved Google Business Profile links, unsupported credentials, physical addresses, and business hours.

The implementation should extend those existing patterns rather than add a new SEO framework. It must remain GitHub Pages compatible and keep reservations as WhatsApp/email links.

## Goals / Non-Goals

**Goals:**

- Add localized legal/trust pages using the existing BaseLayout and SEO primitives.
- Keep Search Console verification configurable via approved production environment values only.
- Allow a verified Google Business Profile URL to be configured later and published only when visible to visitors.
- Add footer/sitemap discovery for trust pages without weakening the existing tourism conversion path.
- Resolve the localized home copy tension by using approved visitor-facing hero copy while allowing metadata to retain concise guided-tour intent.

**Non-Goals:**

- No internal booking, checkout, payment, or availability system.
- No invented legal identity data, address, business hours, ratings, review counts, awards, or guide credentials.
- No new third-party analytics or cookie banner dependency unless a real tracking/cookie requirement is introduced later.
- No guarantee or public claim that the site will rank first in Google.

## Decisions

1. Use static localized pages for legal/trust content.

   Create route/content pairs for Spanish and English legal notice, privacy, and cookie pages. Keep copy concise and factual, and link back to contact/reservation flows. This follows the existing static routing model and avoids server-only features.

   Alternative considered: one generic legal page per language. Rejected because privacy, cookies, and legal notice have different visitor intents and footer labels; separate pages are clearer and easier to index or update.

2. Centralize legal/trust route metadata in shared helpers.

   Add route/copy helpers near the existing i18n path helpers so footer links and sitemap entries derive from one source. This reduces mismatch risk between visible links, canonicals, sitemap entries, and hreflang alternates.

   Alternative considered: hard-code footer and sitemap paths independently. Rejected because this repo already uses shared path helpers for localized contact, day trips, authority, and commercial routes.

3. Keep Search Console verification environment-driven.

   Continue using a public environment token only when present, and verify generated pages omit the meta tag when the token is absent. This supports deployment without placeholder leakage.

   Alternative considered: committing a placeholder token. Rejected because placeholders weaken production trust signals and existing specs require omitting unavailable verification values.

4. Gate Google Business Profile publication by visibility.

   Introduce a single approved GBP URL config value and expose it visibly in contact/authority/footer before including it in business `sameAs`. Structured data should mirror visible content, not lead it.

   Alternative considered: adding the GBP URL only to JSON-LD. Rejected because hidden-only profile claims conflict with the local SEO presence rules.

5. Treat home hero copy and metadata as separate surfaces.

   Use the approved route-first hero title/body for visitors, while allowing the page title/OG title to include concise search intent. This preserves brand positioning on the page and keeps metadata commercially descriptive.

   Alternative considered: make the visible H1 fully keyword-first. Rejected because the existing product direction favors a tourism/storytelling site rather than a generic SEO landing page.

## Risks / Trade-offs

- Legal copy may be incomplete for a final launch jurisdiction -> Keep the content factual and lightweight, then have the owner/legal advisor review before launch if needed.
- Adding legal pages can dilute footer focus -> Place legal links in a compact footer area separate from high-intent tourism discovery links.
- GBP URL may be configured before approval -> Use an explicit approved-public config value and verify absent config produces no link or JSON-LD entry.
- Metadata can become keyword-stuffed -> Keep home metadata concise and verify visible copy remains useful visitor guidance.
- Sitemap/hreflang drift can confuse crawlers -> Derive localized trust page paths from shared helpers and inspect generated sitemap output.

## Migration Plan

1. Add localized trust page copy and route helpers.
2. Add static localized pages and footer links.
3. Add sitemap entries and metadata alternates.
4. Add approved GBP config support, visible links, and conditional JSON-LD `sameAs` inclusion.
5. Update localized home hero and metadata copy according to the spec.
6. Build and inspect representative generated HTML plus sitemap/robots output.

Rollback is low risk: remove trust-page links and sitemap entries, unset GBP/Search Console config values, and the site returns to the previous public SEO surface without data migration.
