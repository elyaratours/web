## Context

The website uses a shared localized home page at `src/pages/[locale]/index.astro`. Most home copy comes from `getLocaleConfig(locale)` in `src/lib/i18n.ts`, but the three `experience` cards near the top of the home page are still hardcoded in Spanish. Because the same Astro page renders `/es/` and `/en/`, those hardcoded strings appear in Spanish on the English home page.

## Goals / Non-Goals

**Goals:**
- Keep the three experience cards in Spanish on `/es/`.
- Render English translations for the same cards on `/en/`.
- Move the card titles and descriptions into the existing localized copy config.
- Preserve existing card icons, layout, spacing, section id, and order.

**Non-Goals:**
- Redesign the home page or cards.
- Change the hero, tour catalog, Tailor-made section, traveler reviews section, footer, routes, or images.
- Change booking, payment, APIs, dependencies, or backend behavior.

## Decisions

- Store each card title and text as simple localized fields in `localeConfig`.
  Alternative considered: introduce a reusable array of card objects. Rejected because only three fixed cards exist and simple fields are the smallest safe change.

- Keep the Spanish copy semantically equivalent to the current text.
  Alternative considered: rewrite the Spanish copy with broader marketing changes. Rejected because the requested issue is English localization, not Spanish copywriting.

- Keep the component structure inline in `src/pages/[locale]/index.astro`.
  Alternative considered: extract a dedicated component. Rejected because the block is small and extraction is unnecessary for this bug fix.

## Risks / Trade-offs

- Adding several localized fields increases the size of `localeConfig`, but keeps the existing localization pattern consistent.
- If future locales are added, the new fields must be supplied for each locale because the config is typed as a complete locale record.
