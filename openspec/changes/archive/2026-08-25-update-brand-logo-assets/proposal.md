## Why

The site currently uses the generic favicon mark in the header and browser tab, but the brand now has distinct logo assets for each use. Updating these placements improves brand recognition while preserving the existing one-line site identity in the header.

## What Changes

- Use the circular Elyara logo as the browser tab favicon.
- Use the Elyara logo without the circle in the global header.
- Keep the header brand text visible as `Elyara Tours Granada` on the same line as the header logo.
- Rename or introduce logo asset paths without spaces for reliable public URLs.
- Preserve the existing home link behavior and accessible brand name.
- Keep the header responsive so the logo, brand text, navigation, and reservation CTA do not overlap on mobile or desktop.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `static-tourism-site`: Update global brand presentation in the browser tab and shared header.

## Impact

- Affected shared UI: `src/layouts/BaseLayout.astro` header brand link.
- Affected metadata: `src/components/SeoHead.astro` favicon link.
- Affected assets: public logo image paths for favicon and header display.
- No new dependencies, backend behavior, routes, content collections, checkout, or payment flow.
