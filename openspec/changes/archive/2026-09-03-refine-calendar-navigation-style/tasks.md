## 1. Calendar Styling

- [x] 1.1 Add a reusable burgundy/wine theme color with value `#8a1538`; verify Tailwind can reference the color from calendar classes.
- [x] 1.2 Update available-day, selected-day, date label, focus, hover, and reservation emphasis styling in `ReservationCalendar.astro` to use burgundy/wine instead of brown/terracotta; verify the component no longer uses brown/terracotta as the primary reservation color.

## 2. Monthly Navigation

- [x] 2.1 Update the calendar month markup so each generated month is a navigable panel with previous and next arrow controls; verify month labels and controls are accessible in the rendered HTML.
- [x] 2.2 Extend the calendar enhancement script to show one month at a time, move to adjacent generated months with arrows, and disable navigation at the first and last month; verify only one month panel is visible after JavaScript enhancement.
- [x] 2.3 Keep the no-JavaScript fallback usable by rendering all generated months and reservation email actions in the static HTML; verify availability remains present before enhancement.
- [x] 2.4 Ensure selected-date availability cards stay aligned with the visible month when navigating; verify selecting dates and changing months shows the correct route/date/time/language cards.

## 3. Verification

- [x] 3.1 Run `npm run check` and verify it succeeds.
- [x] 3.2 Run `npm run build` and verify it succeeds.
- [x] 3.3 Inspect generated or previewed `/es/`, `/en/`, `/es/tours/albaicin/`, and `/en/tours/albaicin/`; verify the calendar shows one month with arrows, available reservations use burgundy/wine, and email reservation links still work.
