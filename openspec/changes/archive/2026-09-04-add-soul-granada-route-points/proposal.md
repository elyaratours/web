## Why

Visitors booking `El alma de Granada` / `The Soul of Granada` need clear practical route logistics before reserving. Showing the meeting point and route ending point in a small card below the route description makes this information easy to find without mixing it into the main descriptive text.

## What Changes

- Add optional structured tour fields for meeting point and route ending point.
- Populate those fields for the Spanish and English Soul of Granada tour entries only.
- Render a separate small information card below the main route description card when a tour provides those fields.
- Preserve the existing route description content, reservation sidebar, calendar, tour catalog, and layout behavior for tours without route-point fields.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `static-tourism-site`: Adds optional practical route-point information to tour detail pages, starting with the localized Soul of Granada route.

## Impact

- Affects the tour content schema with optional fields.
- Affects Spanish and English Soul of Granada tour content entries.
- Affects the shared tour detail page template by rendering an additional card only when route-point data exists.
- Does not change reservation URLs, pricing, schedule generation, calendars, backend behavior, accounts, checkout, or payments.
