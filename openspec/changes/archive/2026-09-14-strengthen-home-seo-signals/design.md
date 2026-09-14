## Context

The site already has localized pages, canonicals, hreflang, sitemap, robots, SEO landing content, and JSON-LD. The remaining low-risk opportunity is to better connect the Home page with existing high-intent landing pages and describe the business service catalog using approved public facts.

## Goals / Non-Goals

**Goals:**
- Improve Home metadata and visible copy for Granada guided-tour search intent.
- Increase crawlable internal links from Home to existing SEO landing pages.
- Describe Elyara's real service groups in business JSON-LD without inventing unsupported claims.
- Preserve the existing no-fake-review and no-ranking-guarantee constraints.

**Non-Goals:**
- Do not claim first-page ranking, top placement, review scores, awards, credentials, or endorsements.
- Do not add internal booking/payment functionality.
- Do not add new URLs or content collection fields.
- Do not expose unapproved physical address, business hours, Google Business Profile URLs, or rating data.

## Decisions

- Use existing localized landing pages for the Home planning links so authority flows to already indexable pages rather than creating duplicate content.
- Keep Home title/meta copy concise and service-oriented around Granada guided tours, private routes, Alhambra, Albaicin, Sacromonte, and the historic center.
- Add `hasOfferCatalog` to the existing business JSON-LD so the global business entity references real public services and approved landing URLs.

## Risks / Trade-offs

- More Home discovery links add visual density. Mitigation: keep them in the existing planning section and switch to a three-column desktop grid.
- Service-catalog JSON-LD can become stale if landing URLs change. Mitigation: use only stable existing URLs and verify with the static build.
