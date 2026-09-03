## Context

The reservation calendar component already exists and is rendered on localized home pages and relevant tour detail pages. On the home page, the only needed change is the section order: the calendar should follow the tour catalog instead of appearing before it.

## Goals / Non-Goals

**Goals:**

- Move the home page `ReservationCalendar` render after the `#tours` section.
- Preserve the calendar component implementation, schedule generation, localized text, email reservation URLs, and tour detail page placement.
- Keep the Tailor-made/Viajes a medida and traveler reviews sections after the calendar.

**Non-Goals:**

- No changes to schedule rules, date generation, styling, routes, tour content, or email content.
- No deployment or GitHub Pages configuration changes.

## Decisions

### Reorder the existing home component call only

Move the existing home page `ReservationCalendar` component invocation to immediately after the tour catalog section in `src/pages/[locale]/index.astro`.

Rationale: this is the smallest change that matches the desired visitor flow and avoids duplicating the calendar or altering data behavior.

Alternative considered: render a second calendar below tours and keep the current one. This would create duplicate booking UI and confuse visitors.

## Risks / Trade-offs

- Visitors may need to scroll farther to reach dates -> The order is intentional because they should see available routes first.
- The `#reservas` anchor moves lower on the page -> This matches the new desired placement and does not change the anchor name.

## Migration Plan

1. Move the home calendar component call below the tour catalog section.
2. Verify `/es/` and `/en/` render tours before the calendar.
3. Run the existing project checks and build.
