## Context

See `proposal.md` for motivation. The current site already has localized static pages, content collections for tours/blog/SEO landings, sitemap and hreflang output, JSON-LD helpers, and an existing local SEO foundation. The next implementation should deepen existing pages rather than create many near-duplicate keyword pages.

There is also existing SEO-related work in the repo history/worktree around local trust and review constraints. This change should be implemented as a separate phase and should not silently absorb unrelated unfinished cleanup.

## Goals / Non-Goals

**Goals:**

- Prioritize depth on pages that can realistically answer commercial search intent.
- Keep Spanish and English content paired where a page has a matching translation.
- Preserve truthful structured data: visible facts first, JSON-LD second.
- Improve large image delivery without changing the visitor meaning of each page.
- Make a verified Google Business Profile URL easy to add later from one approved source.

**Non-Goals:**

- Do not guarantee first-page rankings or make public ranking claims.
- Do not add fake testimonials, fake ratings, aggregate rating schema, invented credentials, or unapproved business address/hours.
- Do not build an internal booking, payment, ticketing, account, or review submission system.
- Do not create many thin landing pages to chase keyword variants.
- Do not publish an unapproved Google Business Profile URL.

## Decisions

### Decision: Deepen existing commercial pages before adding new pages

Expand priority tour detail pages, existing SEO landings, and existing editorial articles before adding new URLs. This concentrates authority and avoids cannibalization between pages targeting similar Granada intents.

Alternatives considered:

- Add many keyword-specific pages: rejected because thin/overlapping pages can dilute quality and create maintenance overhead.
- Only tune metadata: rejected because the audit showed content depth is the larger gap.

### Decision: Use content clusters, not isolated blog posts

Each priority article should have a clear relationship to one or more tours, SEO landings, contact, or tailor-made inquiry paths. Landing pages should link back to supporting articles when useful.

Alternatives considered:

- Publish broad blog posts without commercial links: rejected because they do not support route discovery.
- Turn every article into a sales page: rejected because editorial pages should answer visitor questions first.

### Decision: Optimize public image assets conservatively

Large JPEG/PNG assets should gain optimized public variants for pages where they matter. References should be updated only when the optimized image preserves the same subject, alt meaning, and page metadata relationship.

Alternatives considered:

- Replace every image at once: rejected because it increases review surface and risk of visual regressions.
- Keep originals everywhere: rejected because several assets are multi-megabyte and can hurt page experience.

### Decision: Centralize any future Google Business Profile URL

If the verified profile URL becomes available during implementation, store it in one shared configuration/content location and surface it visibly before adding it to structured data `sameAs` or equivalent profile relationships.

Alternatives considered:

- Hard-code profile links into individual pages: rejected because it scatters approval state.
- Add GBP structured data before visible links: rejected because structured data should reflect visible or approved public facts.

## Risks / Trade-offs

- Expanded content may become repetitive across tours and landings -> Mitigation: assign each page a distinct intent and include page-specific route/context details.
- Bilingual content can drift -> Mitigation: update Spanish and English counterparts in the same task and verify alternates still match.
- Image optimization can break metadata or visual crops -> Mitigation: update image paths, alt text, dimensions, and built metadata together for representative pages.
- GBP approval may not be ready -> Mitigation: keep the integration path prepared but do not publish links or structured data until approval exists.
- Existing uncommitted SEO work can confuse review -> Mitigation: inspect worktree state before implementation and keep this change scoped to its own artifacts/tasks.

## Migration Plan

1. Confirm the previous SEO change/worktree state before implementation and avoid mixing unrelated changes.
2. Audit current tour, landing, blog, image, and metadata gaps using generated output and content entries.
3. Expand priority content in paired Spanish/English groups, starting with highest commercial intent.
4. Add or update internal links so each cluster connects tours, landings, editorial, and inquiry paths.
5. Optimize large public image assets used by priority pages and update metadata/dimensions consistently.
6. Add GBP URL handling only if an approved verified URL is available; otherwise preserve the no-GBP-link state.
7. Run OpenSpec validation, Astro checks, static build, and representative generated HTML inspections.

Rollback: revert the content, link, image, and optional GBP changes from this change; the existing static SEO foundation remains intact.

## Open Questions

- The verified Google Business Profile URL can be added during implementation only if the approved URL is provided.
- Real review display remains a future change after real approved reviews and attribution exist.
