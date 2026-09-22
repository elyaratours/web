## Context

The site stores localized tour metadata in Astro content collection Markdown files. Shared catalog and detail templates render the `price` field directly, so this change only needs localized content updates plus a matching spec delta.

## Goals / Non-Goals

**Goals:**
- Keep the Spanish and English Alhambra tour price aligned at the new group price.
- Preserve the existing ticket-exclusion wording in both locales.
- Use the current data-driven content pattern without template changes.

**Non-Goals:**
- Change Alhambra ticket handling, availability, reservation channels, or booking/payment behavior.
- Change tour titles, slugs, duration, images, descriptions, SEO metadata, or related landing links.
- Introduce dynamic pricing or locale-specific price calculation.

## Decisions

- Update only localized Markdown frontmatter.
  Alternative considered: add pricing logic to shared components. Rejected because this is a fixed content price and the site already renders tour metadata from content entries.

- Preserve the existing currency wording per locale.
  Alternative considered: normalize both locales to the same currency format. Rejected to avoid unrelated copy changes and keep the current localized style.

## Risks / Trade-offs

- Other pages with manually written Alhambra pricing copy could become stale if they exist outside the tour entries. Mitigation: rely on shared tour cards/detail pages for the primary price display and keep broader pricing pages descriptive unless they render the content field.
