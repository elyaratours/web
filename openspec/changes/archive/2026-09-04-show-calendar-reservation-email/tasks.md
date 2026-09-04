## 1. Calendar Reservation Email Visibility

- [x] 1.1 Import the shared `contactEmail` constant in `src/components/ReservationCalendar.astro`.
- [x] 1.2 Display `elyaratours@gmail.com` directly below each `Reservar esta fecha` / `Reserve this date` button in the calendar departure card.
- [x] 1.3 Verify the email address is rendered from the shared constant and remains copyable/selectable.

## 2. Scope Verification

- [x] 2.1 Verify the localized home reservation calendar shows the email below scheduled-date reservation buttons.
- [x] 2.2 Verify tour detail reservation calendars show the email below scheduled-date reservation buttons.
- [x] 2.3 Verify scheduled reservation `mailto:` URLs still include the selected tour name, date, time, language, and visitor prompts as before.

## 3. Validation

- [x] 3.1 Run `npm run check` and verify there are no Astro, TypeScript, or content collection errors.
- [x] 3.2 Run `npm run build` and verify the production build succeeds.
- [x] 3.3 Run `openspec validate show-calendar-reservation-email --type change --strict` and verify the OpenSpec change is valid.
