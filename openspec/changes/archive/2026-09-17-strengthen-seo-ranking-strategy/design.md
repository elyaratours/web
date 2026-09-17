## Context

The current site already has static generation, localized routing, content collections, SEO landings, editorial blog posts, sitemap generation, canonical metadata, hreflang alternates, JSON-LD, approved Google Business Profile links, and approved review display. The remaining SEO opportunity is primarily content architecture and relevance: make the most important commercial intents more explicit, deepen pages that already target those intents, and connect editorial content to commercial pages.

## Goals / Non-Goals

**Goals:**

- Improve the localized Home page's commercial search intent without losing the cultural tourism voice.
- Deepen priority SEO landings so they answer practical search questions and guide visitors toward relevant tours or inquiry actions.
- Add or expand editorial content around high-intent Granada planning topics and link those articles into the commercial page graph.
- Keep metadata, visible copy, structured data, and internal links aligned with real published content.

**Non-Goals:**

- Do not promise first-page rankings, top placement, or guaranteed SEO outcomes.
- Do not invent ratings, aggregate review counts, awards, credentials, physical addresses, business hours, or platform claims.
- Do not add an internal booking, checkout, payment, or account flow.
- Do not change public URLs for existing pages unless a new editorial article is intentionally created.

## Decisions

- Prioritize content and internal linking over new technical SEO infrastructure.
  - Rationale: the technical foundation is already present; relevance and authority signals are the current bottleneck.
  - Alternative considered: add more schema types first. Rejected because unsupported structured data without visible content would be risky and less useful.

- Strengthen existing high-value pages before creating many new pages.
  - Rationale: existing landings already have routes, sitemap entries, and internal links, so improving depth and intent match compounds current value.
  - Alternative considered: create a large batch of thin keyword pages. Rejected because thin pages can dilute quality and conflict with the visitor-first tone.

- Use editorial clusters selectively.
  - Rationale: articles should answer real visitor questions and then guide readers to relevant commercial pages.
  - Alternative considered: publish blog posts for every keyword variation. Rejected because it risks duplicate or low-value content.

- Keep local trust signals conservative and visible.
  - Rationale: Google Business Profile and real reviews are valuable, but only approved visible facts should appear in structured data or copy.
  - Alternative considered: emit aggregate ratings or review counts from assumptions. Rejected because those claims are not safely supported by the current approved data model.

## Risks / Trade-offs

- More commercial Home copy could weaken brand personality -> retain cultural phrasing while making services clearer in title, description, hero, and planning copy.
- Longer landing pages can feel repetitive -> vary sections by intent and add practical guidance rather than boilerplate.
- New articles require quality content and internal links -> publish only complete localized posts with metadata, imagery where available, and related links.
- SEO gains are not immediate or guaranteed -> validate build output and metadata now, then measure later through Search Console and Google Business Profile data.

## Migration Plan

- Update content and metadata in place for existing pages, preserving current URLs.
- Add new editorial entries only when they have complete localized metadata and visitor-facing body content.
- Run project checks and static build, then inspect generated metadata and public links for priority pages.
