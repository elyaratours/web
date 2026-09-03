## Context

The site is a static Astro application with localized tour entries in `src/content/tours/<locale>/`. The Soul of Granada route already exists as the localized `albaicin` tour with `translationKey: albaicin`, Spanish title `El alma de Granada`, and English title `The Soul of Granada`. Reservations currently use `mailto:` links and the site must remain compatible with GitHub Pages static hosting.

## Goals / Non-Goals

**Goals:**

- Generate a static, localized reservation calendar from recurring weekly rules.
- Reuse existing tour content and URLs instead of duplicating route data.
- Display calendar availability on both localized home pages and route-specific tour detail pages.
- Keep reservation start as an email link with no backend, checkout, payment, or internal form submission.
- Keep the UI close to the tourism-calendar pattern: month grid, marked available days, and selected-date availability cards.

**Non-Goals:**

- No real-time availability, seat inventory, cancellation management, admin UI, or payment flow.
- No external calendar provider or embedded third-party widget.
- No change to tour URL structure or localized tour content storage.

## Decisions

### Use local recurring schedule data

Represent scheduled availability as a small local data module keyed by locale and tour `translationKey`, for example:

- Spanish `albaicin`: weekdays Tuesday, Thursday, Saturday; time `10:00`; language `Español`.
- English `albaicin`: weekdays Wednesday, Friday, Sunday; time `10:00`; language `English`.

Rationale: the requested schedule is recurring and predictable, so generating concrete dates at build time is simpler than maintaining individual date entries. Keying by `translationKey` avoids brittle title matching and preserves the existing localized tour route slugs.

Alternative considered: individual Markdown entries per date. This would be better for irregular one-off tours, but it adds maintenance overhead for a fixed weekly schedule.

### Generate a rolling two-month window at build time

Generate departures from the static build date through the same calendar day two months later, excluding past dates. The UI can group resulting dates by calendar month so visitors see a monthly grid while the data remains a rolling availability window.

Rationale: a rolling two-month window matches the requested scope and avoids publishing stale availability. Because the site is static, refreshing the window depends on rebuilds/deploys.

Alternative considered: current month plus next calendar month. This is visually simpler but can show significantly less than two months of future availability late in a month.

### Build a reusable Astro calendar component

Create a shared component that accepts locale, tours, and an optional tour filter:

```
Home page
  -> all localized generated departures

Tour detail page
  -> generated departures filtered to current tour
```

The component should render the month grid server-side and use a small client-side script only for date selection and toggling the visible availability cards. Without JavaScript, the page should still expose upcoming availability in the rendered markup.

Rationale: this keeps the implementation compatible with static generation and avoids introducing a frontend framework dependency for simple interactivity.

### Generate date-specific mailto links

Keep existing generic and tour-level reservation links unchanged unless the visitor is reserving a scheduled calendar date. Calendar reservation actions should generate a `mailto:elyaratours@gmail.com` URL with localized subject/body containing tour, date, time, language, and prompts for visitor name and number of people.

Rationale: scheduled availability needs enough detail to avoid follow-up ambiguity, while existing generic tour CTAs should preserve their current lightweight behavior.

## Risks / Trade-offs

- Static availability can become stale if the site is not rebuilt regularly -> Document that the two-month window updates on build/deploy and keep generation deterministic.
- Recurring rules cannot express cancellations or special dates -> Keep the first version focused on the approved weekly pattern; add exceptions later only if needed.
- Date formatting can vary by locale and environment -> Use explicit locale-aware formatting for Spanish and English labels, and keep machine-readable dates in ISO format.
- Calendar interaction may be inaccessible if implemented as visual-only buttons -> Use semantic buttons/links, visible focus states, labels for available dates, and rendered fallback availability cards.

## Migration Plan

1. Add local schedule generation utilities and localized reservation email helpers.
2. Add the reusable calendar component and integrate it into the localized home pages.
3. Add the route-filtered calendar display to tour detail pages.
4. Run the existing project checks and build.
5. Rollback is straightforward: remove the component integrations and schedule utilities; existing tour pages and email CTAs remain available.
