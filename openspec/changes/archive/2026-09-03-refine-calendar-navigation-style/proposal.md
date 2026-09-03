## Why

The reservation calendar currently shows every generated month at once, which makes the section feel long and visually dense. Showing one month at a time with navigation arrows creates a cleaner booking experience, and using a burgundy reservation color better matches the desired visual tone than the current brown/terracotta styling.

## What Changes

- Update the reservation calendar so only one month is visible at a time.
- Add previous and next month arrow controls for moving between generated calendar months.
- Disable or hide month navigation when there is no previous or next generated month.
- Change available-date and reservation emphasis color from brown/terracotta to burgundy/wine.
- Preserve the existing two-month availability window, scheduled routes, email reservation links, home placement below tours, and tour detail calendar behavior.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `static-tourism-site`: Refines the public reservation calendar interaction and reservation color styling.

## Impact

- Affects the shared reservation calendar component, calendar interaction script, calendar styling, and potentially the Tailwind theme color palette.
- Does not change schedule rules, tour content, route URLs, reservation email content, backend behavior, deployment configuration, or payment/account scope.
