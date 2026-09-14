## Context

The site already has canonical metadata, hreflang alternates, sitemap generation, robots instructions, JSON-LD business/page/tour/article entities, SEO landing pages, editorial content, and route detail pages. The Google Business Profile is in verification, and there are no real approved reviews yet.

This change should improve local SEO readiness without adding unsupported social proof. The safest path is to strengthen visible authority content, internal links, and editorial depth while keeping structured data limited to facts that are already visible or approved.

## Goals / Non-Goals

**Goals:**

- Make local trust signals clearer to visitors and crawlers using approved facts.
- Prepare the site to link to a verified Google Business Profile later without hard-coding an unapproved URL now.
- Provide Spanish and English post-tour review request copy for future real customers.
- Add or expand long-tail editorial content that can rank before broad competitive terms.
- Keep every commercial path connected to external WhatsApp/email reservation actions.

**Non-Goals:**

- No fake testimonials, ratings, aggregate ratings, awards, credentials, or review schema.
- No Google Business Profile URL until the profile URL is approved for publication.
- No internal booking, payment, review submission, or account system.
- No thin SEO pages that repeat existing tour descriptions.

## Decisions

### Decision: Treat Google Business Profile as optional approved data

Do not publish or structure a Google Business Profile URL until verification is complete and the URL is approved. If the URL is added later, keep it in one shared config/copy location and surface it visibly before including it in `sameAs` or other structured data.

Alternatives considered:

- Hard-code a pending profile URL now: rejected because it could point to an unverified or incorrect listing.
- Skip GBP readiness entirely: rejected because the site should be ready to connect once verification completes.

### Decision: Use visible trust content instead of review substitutes

Authority content should emphasize public facts: Elyara name, Granada service area, languages, guide-led cultural route style, WhatsApp/email reservation, and private group availability. It should not use vague testimonial-like copy as a replacement for reviews.

Alternatives considered:

- Add placeholder review sections: rejected because placeholders weaken trust and risk misleading structured data.
- Keep trust content only in JSON-LD: rejected because structured data should be backed by visible page content.

### Decision: Prepare review request copy outside public review schema

Add Spanish and English post-tour review request copy as site/project content or a small reusable helper only for future customer follow-up. Public review sections and schema remain absent until real approved reviews exist.

Alternatives considered:

- Build a public reviews system now: deferred because there are no real reviews to display.
- Add aggregate rating schema without reviews: rejected as misleading.

### Decision: Prioritize editorial clusters over more landing pages

Long-tail articles should answer real visitor questions and then link to existing routes, SEO landings, contact, or tailor-made inquiry paths. This supports search coverage without multiplying near-duplicate landing pages.

Alternatives considered:

- Create many keyword pages: rejected because thin pages can dilute quality.
- Only update metadata: rejected because content depth and helpfulness are more important at this stage.

## Risks / Trade-offs

- Local ranking may still be limited until GBP verification and real reviews exist -> Mitigation: prepare consistent business facts, review request copy, and useful content now.
- Adding too many similar articles could create keyword cannibalization -> Mitigation: give each article a distinct search intent and link to the canonical landing or tour page for that intent.
- GBP URL handling could become scattered later -> Mitigation: centralize the approved URL if/when it becomes available.
- Review request copy could sound incentivized -> Mitigation: keep wording voluntary, honest, and non-compensated.

## Migration Plan

1. Add or update visible authority/trust content on high-value pages using only approved facts.
2. Add review request copy for future real customers without publishing review UI/schema.
3. Add or expand bilingual long-tail editorial articles for private guide choice, Alhambra visit planning, Albaicin route planning, and free-tour/private-visit comparison.
4. Strengthen internal links from those articles to relevant tours, SEO landings, contact, and tailor-made inquiry paths.
5. Validate OpenSpec, Astro content checks, and static build.

Rollback: remove the new trust content, review request copy, and new/expanded editorial entries while leaving existing technical SEO foundations unchanged.

## Open Questions

- The verified Google Business Profile URL can be added later without changing this plan.
- Real review display can be implemented later once approved review text and attribution exist.
