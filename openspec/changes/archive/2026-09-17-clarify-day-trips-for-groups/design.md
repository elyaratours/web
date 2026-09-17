## Context

The day-trip content is data-driven through localized Markdown tour entries. The shared tour card, detail page, SEO helpers, and structured data consume those entries, so changing the relevant entry fields is enough to update the public surfaces without template changes.

## Goals / Non-Goals

**Goals:**

- Make the Malaga and Cordoba day-trip titles explicitly communicate group/private-group positioning in Spanish and English.
- Keep SEO descriptions and introductory copy consistent with the visible title wording.
- Preserve current localized URLs, images, request CTAs, and inquiry-based pricing.

**Non-Goals:**

- Do not add a new tour category, booking flow, payment flow, or internal reservation form.
- Do not change the day-trip landing page layout or shared tour rendering components unless validation reveals an existing display issue.
- Do not introduce compatibility aliases or route redirects because public route slugs remain unchanged.

## Decisions

- Update localized tour content entries rather than templates.
  - Rationale: the requested behavior is editorial positioning for two origin-specific offers, and the existing templates already surface title, SEO description, and body copy on cards/detail pages.
  - Alternative considered: add a generic day-trip badge in `TourCard.astro`. Rejected because the requested wording is specific to Malaga and Cordoba excursion content and should remain under content control.

- Keep `routeSlug` values unchanged.
  - Rationale: the change should not affect public URLs, existing links, sitemap paths, or localized alternate relationships.
  - Alternative considered: include `group` in route slugs. Rejected because it would create unnecessary URL churn for a copy clarification.

## Risks / Trade-offs

- Title wording becomes longer on cards and detail headers -> verify layout with the existing build/check commands.
- English and Spanish wording could drift -> update both locale entries in the same implementation pass and compare the corresponding fields.
