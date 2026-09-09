## Context

The site is an Astro static website with localized routes under `src/pages/[locale]/`, shared layout/navigation in `BaseLayout.astro`, localized copy and route helpers in `src/lib/i18n.ts`, and data-driven tour detail pages generated from `src/content/tours/<locale>/*.md` through `src/pages/[locale]/tours/[slug].astro`.

Existing visual primitives are global Tailwind component classes: `section-shell`, `eyebrow`, `card`, `btn-primary`, and `btn-secondary`. The design should reuse those primitives and the existing serif/sans font pairing, Alhambra color palette, card layout, and external WhatsApp/email reservation patterns.

## Goals / Non-Goals

**Goals:**

- Add a distinct day-trip section while keeping day-trip detail pages data-driven through content entries.
- Preserve the existing site look and page responsiveness with minimal new styling.
- Keep Spanish and English URLs, navigation labels, metadata, and content aligned.
- Make day-trip pages feel configurable: choose a Granada experience, then optional complements.
- Keep all pricing and booking inquiry-based.

**Non-Goals:**

- No internal booking form, checkout, payment flow, availability engine, restaurant menu, or fixed transport supplier workflow.
- No redesign of the home page, tour cards, navigation visual language, typography, or color system.
- No promise of guaranteed Alhambra or monument access without available tickets.

## Decisions

### Use the existing `tours` collection with a lightweight category field

Day trips should be content entries, not copied full pages, because the current architecture already generates localized tour detail pages from Markdown. Add a lightweight category/type field to tour frontmatter, such as `category: "day-trip"`, while existing Granada walking routes remain the default local route category.

Alternatives considered:

- New `dayTrips` content collection: cleaner separation, but duplicates tour schema, helpers, card behavior, detail rendering, and sitemap logic.
- Hardcoded pages only: fastest initially, but conflicts with the current data-driven content pattern and would make future origins harder to add.
- Infer category from slug or translation key: minimal schema change, but brittle and harder to maintain.

### Add a dedicated localized landing page for day trips

Create a reusable `DayTripsPage.astro` component with Spanish and English route wrappers, matching the existing pattern used by commercial/tailor-made pages. The page should use existing `card`, hero, CTA, and grid patterns and list the initial origin entries.

Proposed public landing URLs:

- `/en/day-trips-granada/`
- `/es/excursiones-un-dia-granada/`

Alternatives considered:

- Add only an anchor section on the home page: visible but weaker for SEO and less clear as a new service line.
- Add only a section inside private tours: lower implementation cost, but the user wants this as a new type of travel, not just a sub-card.

### Keep detail URLs under `/tours/`

The existing detail generator already handles localized tour content, metadata, WhatsApp/email CTAs, related links, and sitemap inclusion. Keeping day trips under `/tours/` avoids duplicating routing while the category landing gives the new service its own top-level entry point.

Proposed detail URLs:

- `/en/tours/day-trip-malaga-granada/`
- `/en/tours/day-trip-cordoba-granada/`
- `/es/tours/excursion-malaga-granada/`
- `/es/tours/excursion-cordoba-granada/`

Alternatives considered:

- Detail pages under `/day-trips/`: semantically nice, but requires a second detail route or special routing logic. It can be revisited later if day trips become a larger product family.

### Extend the shared tour detail page conditionally

The day-trip detail page needs sections that standard walking tours do not need: `Choose your Granada experience`, `Make your day complete`, origin-specific logistics, and availability/pricing notes. Add conditional rendering driven by day-trip metadata/content rather than creating two separate full templates.

The conditional section can be implemented with localized helper data keyed by translation key or with structured optional frontmatter. Prefer the smallest schema change that keeps content maintainable: category for filtering plus shared localized copy for repeated cards; detailed city-specific body copy remains in Markdown.

Alternatives considered:

- Put all special sections in Markdown body: simplest code, but cards/CTA visual hierarchy would be weaker and less reusable.
- Create a separate day-trip detail component: clearer separation, but more duplication of hero, metadata cards, CTAs, FAQ, SEO, and calendar behavior.

### Reuse existing contact behavior with day-trip-specific inquiry copy

The CTAs should continue to use approved WhatsApp and email channels. If adding new helper copy, use localized WhatsApp text that identifies the selected day trip and invites the user to provide date, group size, pickup city, preferred experience, transport, and lunch preferences.

Alternatives considered:

- Use generic tour inquiry text: minimal, but misses important day-trip variables.
- Add a form: outside current product direction and explicitly not needed.

### SEO stays truthful and page-based

Use localized page titles, descriptions, canonical paths, alternates, breadcrumbs, item lists for visible listings, and service/tour structured data based only on visible facts. Do not add unsupported prices, ratings, restaurants, schedules, or guaranteed ticket claims.

## Risks / Trade-offs

- New category field could affect existing tour filtering if defaults are wrong -> Mitigate by keeping existing tours in the current catalog and filtering day trips only where explicitly needed.
- Day trips may appear in the existing home tour catalog if filtering is not applied consistently -> Mitigate with a clear helper for standard tours vs day trips.
- Conditional detail sections could make the shared detail page harder to read -> Mitigate by keeping day-trip-specific rendering in small, clearly bounded blocks.
- Alhambra wording could imply guaranteed monument access -> Mitigate by repeating ticket availability constraints in both visible copy and FAQs.
- Header navigation may become crowded on desktop -> Mitigate with short labels: `Day Trips` and `Excursiones de un dia`.

## Migration Plan

1. Add localized day-trip route/copy helpers and navigation labels.
2. Add category support and day-trip content entries.
3. Add the category landing page and links from navigation and relevant tour areas.
4. Add conditional day-trip sections to detail pages.
5. Verify build, Astro check, sitemap output, localized links, and responsive layouts.

Rollback is straightforward because the change is additive: remove the new landing routes, remove day-trip content entries, and remove navigation/helper additions.
