## Context

See `proposal.md` for motivation. The localized home page is generated from `src/pages/[locale]/index.astro`, which currently imports the traveler reviews component, derives review JSON-LD from shared review data, and renders the mosaic after the Tailor-made/Viajes a medida section.

The review component and review data are self-contained and are not needed by other visible home sections.

## Goals / Non-Goals

**Goals:**

- Remove the visible traveler reviews mosaic from both localized home pages through the shared localized home template.
- Remove home review JSON-LD so structured data matches visible page content.
- Leave the existing review component, data, images, and popup behavior available for future reuse.

**Non-Goals:**

- Delete review data, review images, or the traveler reviews component.
- Add a feature flag or CMS setting for toggling the section.
- Change tour cards, reservation calendar behavior, Tailor-made/Viajes a medida content, or routes.

## Decisions

- Remove the reviews section at the localized home composition level.
  - Rationale: the section is rendered once from the shared `/[locale]/` home template, so removing that render hides it consistently for Spanish and English.
  - Alternative considered: hide the component with CSS. Rejected because hidden content and popup markup would still ship to the page.

- Remove review JSON-LD from the localized home JSON-LD array.
  - Rationale: review structured data must describe visible review content on the same page; hiding the section makes review schema misleading.
  - Alternative considered: keep JSON-LD for SEO. Rejected because it conflicts with the site's structured data constraints.

- Keep review assets and data in place.
  - Rationale: the request is to hide the section, not permanently delete the content or prevent a future reactivation.
  - Alternative considered: delete the component and data. Rejected because it creates unnecessary churn and makes rollback harder.

## Risks / Trade-offs

- Visitor proof is no longer visible on the home page -> Accept as the intended business decision for now.
- Unused imports may remain if only the render line is removed -> Verify with `npm run check`.
- Search previews lose review structured data for the home page -> Required to keep structured data truthful when reviews are hidden.

## Migration Plan

- Apply the template-level home change and structured-data cleanup.
- Run `npm run check` and `npm run build`.
- Verify generated `/es/` and `/en/` HTML do not include the review section titles, `id="reviews"`, or review JSON-LD.
- Rollback by restoring the home render and review JSON-LD imports if the section should be shown again later.
