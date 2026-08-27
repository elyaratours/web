## Context

The editorial blog already uses Astro Content Collections with localized Markdown entries under `src/content/blog/<locale>/`. Blog listings filter published entries by `locale`, detail pages are generated from `postSlug`, and language alternates are derived from shared `translationKey` values.

## Goals / Non-Goals

**Goals:**

- Add the English article as a normal content collection entry.
- Preserve the existing Spanish article and connect both localized versions through `translationKey: granada-symbol`.
- Keep related-tour discovery working through the existing `relatedTours` translation key lookup.

**Non-Goals:**

- Do not change blog routing, listing templates, detail templates, SEO helpers, or the content schema.
- Do not require every blog article to have both Spanish and English versions.

## Decisions

- Use a new Markdown file in `src/content/blog/en/` rather than adding special-case logic to the blog listing.
  - Rationale: The current data-driven model already publishes localized entries when they exist.
  - Alternative considered: Duplicating or translating content inside a component, rejected because it would bypass the content collection pattern.
- Use `postSlug: "why-are-there-pomegranates"` for the English public URL.
  - Rationale: It is short, descriptive, and matches the article question naturally in English.
  - Alternative considered: A longer slug such as `why-are-there-pomegranates-all-over-granada`, rejected as less concise.
- Reuse the Spanish article image unless a specific English-approved image is later provided.
  - Rationale: The existing image already fits the Granada city-center context and avoids introducing an asset requirement.

## Risks / Trade-offs

- English copy may need editorial review before launch -> Keep the implementation limited to a single Markdown entry so copy can be adjusted easily.
- Reusing the existing image may be less symbol-specific than a pomegranate detail image -> Replace only if an approved asset is provided later.
