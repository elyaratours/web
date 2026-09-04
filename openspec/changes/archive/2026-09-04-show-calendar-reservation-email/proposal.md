## Why

Visitors can miss the direct email address when reserving from the calendar because the scheduled-date CTA only exposes a `mailto:` link. If the visitor's device routes `mailto:` through a browser or another unwanted app, showing `elyaratours@gmail.com` directly below `Reservar esta fecha` gives them a clear copyable fallback at the exact point of reservation.

## What Changes

- Display `elyaratours@gmail.com` directly below each scheduled calendar reservation button.
- Apply the same behavior to the shared reservation calendar wherever it appears: localized home pages and tour detail pages.
- Reuse the shared contact email constant instead of duplicating the address in the component.
- Preserve existing scheduled reservation `mailto:` URLs, prefilled subject/body content, calendar navigation, availability rules, and no-checkout reservation flow.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `static-tourism-site`: Makes the scheduled-date reservation email address visible directly below calendar reservation CTAs on home and tour detail calendars.

## Impact

- Affects `src/components/ReservationCalendar.astro` only.
- Affects calendar instances rendered from `src/pages/[locale]/index.astro` and `src/pages/[locale]/tours/[slug].astro` through the shared component.
- Does not change schedule generation, tour content, route URLs, reservation email content, backend behavior, deployment configuration, payments, accounts, or internal forms.
