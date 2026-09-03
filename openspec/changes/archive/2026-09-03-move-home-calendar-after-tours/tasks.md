## 1. Home Section Order

- [x] 1.1 Move the localized home page `ReservationCalendar` component invocation to immediately after the `#tours` section in `src/pages/[locale]/index.astro`; verify the source order is hero, experience, tours, calendar, tailor-made, traveler reviews.
- [x] 1.2 Verify the home calendar still receives the same `locale` and `tours` props and that tour detail calendar usage remains unchanged.

## 2. Verification

- [x] 2.1 Run `npm run check` and verify it succeeds.
- [x] 2.2 Run `npm run build` and verify it succeeds.
- [x] 2.3 Inspect generated `/es/` and `/en/` home HTML or preview output and verify tour cards appear before `Calendario de reservas`/`Booking calendar`.
