## 1. Schedule Data And Generation

- [x] 1.1 Add local recurring schedule data for Spanish `albaicin` on Tuesday, Thursday, and Saturday at 10:00 and English `albaicin` on Wednesday, Friday, and Sunday at 10:00; verify the data references existing localized tour entries by `translationKey` and locale.
- [x] 1.2 Implement a departure generation utility for the rolling next-2-month window; verify generated dates exclude past dates and include only the configured weekdays.
- [x] 1.3 Add localized date/time and language labels plus date-specific `mailto:elyaratours@gmail.com` URL generation; verify generated email URLs include tour name, date, time, language, name prompt, and number-of-people prompt.

## 2. Calendar Presentation

- [x] 2.1 Build a reusable Astro reservation calendar component with month grids, available-day markers, and selected-date availability cards; verify rendered markup exposes route name, date, time, language, tour link, and reservation email action.
- [x] 2.2 Add accessible interaction for selecting available calendar dates and revealing matching availability; verify keyboard focus, button labels, and a non-JavaScript rendered fallback remain usable.
- [x] 2.3 Style the component to match the existing tourism visual language and work on mobile and desktop; verify responsive layout manually in the browser or via built output inspection.

## 3. Page Integration

- [x] 3.1 Add the localized reservation calendar to `/es/` and `/en/`; verify Spanish home shows `El alma de Granada` on Tuesday, Thursday, and Saturday at 10:00 and English home shows `The Soul of Granada` on Wednesday, Friday, and Sunday at 10:00.
- [x] 3.2 Add route-filtered upcoming availability to tour detail pages; verify the Spanish `El alma de Granada` page and English `The Soul of Granada` page show only their own scheduled dates.
- [x] 3.3 Preserve clear email reservation behavior for tours without scheduled dates; verify unrelated tour pages do not show Soul of Granada availability and still provide an email reservation or inquiry action.

## 4. Verification

- [x] 4.1 Run `npm run check` and verify it succeeds.
- [x] 4.2 Run `npm run build` and verify the static site builds successfully.
- [x] 4.3 Inspect generated or previewed `/es/`, `/en/`, and both localized `albaicin` tour pages; verify calendar dates, tour links, and scheduled email links match the approved behavior.
