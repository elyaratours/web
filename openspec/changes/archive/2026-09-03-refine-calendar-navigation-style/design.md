## Context

The shared `ReservationCalendar.astro` component currently receives generated calendar months from `src/lib/schedule.ts` and renders every month grid in a responsive grid. It already includes a small client-side enhancement script for selecting available dates, while the server-rendered markup exposes availability as a fallback.

## Goals / Non-Goals

**Goals:**

- Show only one generated month at a time when JavaScript enhances the calendar.
- Provide previous and next arrow controls for navigating generated months.
- Keep scheduled availability and reservation email actions accessible without JavaScript.
- Use a burgundy/wine color for available dates, selected dates, and reservation emphasis instead of the current terracotta/brown color.

**Non-Goals:**

- No changes to the two-month availability window, recurring schedule rules, tour filtering, email content, or page placement.
- No new frontend framework or external calendar dependency.
- No backend availability or booking state.

## Decisions

### Progressive enhancement for month navigation

Render all month grids and all availability cards in the initial HTML, then let the existing component script hide non-active months after enhancement. This keeps the no-JavaScript fallback complete while providing the requested one-month interface for normal visitors.

Alternative considered: render only the first month server-side. This would meet the visual goal but would hide later-month availability from visitors without JavaScript and from simple crawlers.

### Add scoped month controls inside the calendar component

Add previous and next buttons near the visible month title. The script should track the active month index, update visible month panels, and disable controls at the first and last generated month.

Alternative considered: use anchor links to each month. This is simpler but does not satisfy the one-month-at-a-time interaction as cleanly.

### Add a named burgundy theme color

Add a reusable `alhambra.wine` color, recommended value `#8a1538`, and use it for available-day borders, dots, selected day state, reservation date labels, and scheduled reservation call-to-action emphasis where appropriate.

Alternative considered: inline hex values in the component. A named theme color keeps the palette reusable and avoids scattered magic values.

## Risks / Trade-offs

- The no-JavaScript fallback will still show all generated months -> This is intentional so availability remains accessible without client-side behavior.
- More calendar script state can introduce mismatches between month and selected date -> Initialize the selected date from the first available date in the active month and update cards when navigating.
- Burgundy contrast must remain accessible -> Use white text on burgundy fills and dark text with burgundy accents on light backgrounds.

## Migration Plan

1. Add the burgundy theme color.
2. Update `ReservationCalendar.astro` markup with month panels and arrow controls.
3. Extend the existing script to manage active month navigation and selected availability cards.
4. Replace brown/terracotta reservation emphasis in the calendar with burgundy styling.
5. Run project checks and build, then inspect generated home and tour calendar output.
