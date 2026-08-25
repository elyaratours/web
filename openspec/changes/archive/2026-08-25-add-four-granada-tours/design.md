## Context

See proposal.md for motivation. Tours are already modeled as localized Markdown entries in the `tours` content collection and are rendered through shared catalog/detail templates. Current Spanish and English entries use matching `translationKey` values, localized `routeSlug` values, and external WhatsApp reservation URLs.

## Goals / Non-Goals

**Goals:**

- Add four new tour pairs as content entries only.
- Keep existing tour entries and generated page templates unchanged.
- Provide Spanish and English content for every new tour from the start.
- Use stable localized slugs and unique `translationKey` values.
- Keep the new tours ordered after existing tours and non-featured initially.

**Non-Goals:**

- Do not remove or rename existing tour pages.
- Do not introduce a booking/payment system, contact form, account flow, or backend integration.
- Do not add a new content collection or route template.
- Do not require new images before the tours can be published.

## Decisions

- Create one Spanish and one English Markdown entry for each new tour.
  - Rationale: this follows the existing bilingual content architecture and ensures generated URLs are available in both locales.
  - Alternative considered: add Spanish only first. Rejected because the site already presents ES/EN as first-class public experiences.

- Use new `translationKey` values that describe the route concept, not the localized title.
  - Rationale: stable keys make bilingual pairing independent from future title copy changes.
  - Alternative considered: reuse existing keys for related tours. Rejected because these are additional tours, not replacements.

- Use localized route slugs that mirror the proposed titles.
  - Rationale: descriptive slugs improve clarity and SEO while avoiding Astro's reserved frontmatter `slug` behavior.
  - Alternative considered: use shorter generic slugs. Rejected because these tour names are specific and search-friendly.

- Reuse available public images for the first implementation unless new approved images are supplied before implementation.
  - Rationale: the content model requires an image path and the repo already has Granada/Alhambra imagery suitable as placeholders.
  - Alternative considered: block implementation until new image assets exist. Rejected because the proposal allows existing imagery.

- Set `featured: false` and order the tours after the existing entries.
  - Rationale: the home/catalog can expand without pushing current core tours out of their highlighted positions.
  - Alternative considered: feature all new tours. Rejected because it could overload the featured section.

## Risks / Trade-offs

- Tour concepts overlap with existing routes -> Use distinct titles, slugs, SEO descriptions, and body copy to make each new route's angle clear.
- Reused imagery may make cards feel repetitive -> Treat image reuse as acceptable until approved tour-specific imagery is added.
- Missing exact commercial details could make draft content inaccurate -> Use conservative default durations/prices aligned with existing tours and keep them easy to revise before launch.

## Migration Plan

- Add eight localized Markdown entries under the existing tours collection.
- Assign orders after the existing tours, likely `4` through `7` for both locales.
- Use external WhatsApp reservation URLs with tour-specific prefilled text.
- Run content/type checks and production build to verify generated catalog and detail pages.
- Rollback by removing the new Markdown entries if the expanded catalog should not ship.
