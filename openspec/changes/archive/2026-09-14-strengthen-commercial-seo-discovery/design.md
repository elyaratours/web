## Context

SEO-critical rendering is centralized in shared layout, metadata copy, and JSON-LD helpers. The change can therefore improve many pages through shared title selection, footer links, and tour entity output rather than duplicating markup across pages.

## Goals / Non-Goals

**Goals:**
- Improve commercial query relevance for the home page and blog listing through explicit SEO titles and descriptions.
- Create durable internal links to priority SEO landing pages from every public page footer.
- Add richer tour structured data from existing visible route fields.

**Non-Goals:**
- No guarantee of Google rankings or first-page placement.
- No fake review, rating, aggregate rating, award, credential, business-hour, physical-address, or Google Business Profile claims.
- No internal booking/payment behavior and no new product catalog.

## Decisions

- Separate SEO titles from visible H1 copy for home and blog listing pages. This keeps the brand tone visible to visitors while allowing search snippets to target commercial and informational intent more directly.
- Put high-intent discovery links in the footer rather than adding another home-only block. Footer links create consistent crawl paths across the static site and remain visible to visitors.
- Add tour JSON-LD duration and itinerary only from existing content fields. If a route has no meeting or ending point, no itinerary is invented.

## Risks / Trade-offs

- Footer discovery links can feel repetitive if over-expanded. Mitigation: keep the list limited to five high-value links per locale.
- SEO titles become more commercial than visible hero copy. Mitigation: H1 and body copy remain unchanged, so the visitor-facing tone is preserved.
- Structured itinerary is only as complete as the available frontmatter. Mitigation: omit missing points rather than creating placeholders.

## Migration Plan

- Deploy through the normal static build.
- If search snippets or footer UX need adjustment, edit localized copy/link arrays without changing routing or content collections.
