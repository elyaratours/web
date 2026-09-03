## Why

Visitors need a clearer way to see scheduled route availability before contacting Elyara. A lightweight calendar on the home page and tour detail pages can make recurring guided routes feel bookable while preserving the current no-payment, email-based reservation flow.

## What Changes

- Add a reservation calendar section to localized home pages showing upcoming scheduled dates for the next 2 months.
- Add route-specific upcoming dates to the relevant tour detail pages.
- Generate recurring availability for `El alma de Granada` in Spanish on Tuesdays, Thursdays, and Saturdays at 10:00.
- Generate recurring availability for `The Soul of Granada` in English on Wednesdays, Fridays, and Sundays at 10:00.
- Allow date-specific reservation email links from calendar availability, with prefilled tour, date, time, language, and visitor details prompt.
- Preserve the existing no-account, no-internal-form, no-checkout, and no-payment reservation model.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `static-tourism-site`: Adds recurring reservation calendar behavior to the public tourism website and extends email reservation links for date-specific calendar selections.

## Impact

- Affects localized home page presentation, tour detail page reservation areas, shared tour/calendar data utilities, i18n copy, and email link generation.
- No backend, database, payment provider, account system, or internal booking form is introduced.
- The static build must generate the visible availability window from recurrence rules for the next 2 months.
