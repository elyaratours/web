## Why

The localized Home and reservation calendar currently expose the WhatsApp number and email address as visible text near reservation actions. The desired public experience is cleaner: visitors should see only the reservation buttons in those areas while the buttons keep opening the approved external WhatsApp and email flows.

## What Changes

- Hide the visible phone number `+34 611 126 979` and email address `elyaratours@gmail.com` from the Spanish and English Home hero reservation area.
- Hide the visible phone number and email address from scheduled-date cards in the Spanish and English reservation calendar.
- Keep the `Reservar por WhatsApp` / `Reserve by WhatsApp` and `Reservar por email` / `Reserve by email` buttons visible and functional.
- Preserve approved contact details in other public areas such as the footer, contact pages, tour pages, landing pages, structured data, and generated external links unless separately changed.
- Preserve the external reservation model with no internal booking, checkout, payment, account, or form workflow.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `static-tourism-site`: Update reservation display requirements for Home and reservation calendar surfaces so direct contact values are not shown as visible copy there, while external reservation buttons remain available.

## Impact

- Affected UI: localized Home hero reservation area and shared reservation calendar scheduled-date cards.
- Affected routes: `/es/`, `/en/`, and any localized page rendering the shared reservation calendar.
- Affected behavior: visible copy changes only; WhatsApp and email button destinations continue to use the approved contact channels.
- No dependency, data model, route, SEO metadata, or structured data changes are intended.
