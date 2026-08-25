## Context

See proposal.md for motivation. The current shared layout renders the brand link with `/favicon.svg` and visible site text, while `SeoHead.astro` declares `/favicon.svg` as the browser favicon. The desired logo files already exist under `public/images/` with spaces in their filenames.

## Goals / Non-Goals

**Goals:**

- Use distinct brand images for browser favicon and header identity.
- Keep the header brand text visible and on one line beside the logo.
- Use public asset paths that are stable and do not contain spaces.
- Preserve the localized home link and accessible brand name.

**Non-Goals:**

- Do not redesign the full header navigation.
- Do not remove the `Elyara Tours Granada` text from the header.
- Do not add new icon libraries, image processing dependencies, or runtime asset generation.
- Do not change site routes, content collections, reservations, or contact behavior.

## Decisions

- Use the circular logo for the favicon and the logo without the circle for the header.
  - Rationale: the circular mark is better suited to small browser-tab display, while the uncircled logo reads better beside text in the header.
  - Alternative considered: use the same circular logo in both places. Rejected because it consumes more horizontal space and makes the header brand feel heavier.

- Introduce clean public asset paths such as `/images/elyara-favicon.png` and `/images/elyara-header-logo.png`.
  - Rationale: paths without spaces are easier to reference, cache, and inspect in generated HTML.
  - Alternative considered: reference the existing filenames directly. Rejected because URLs with spaces are less robust and harder to maintain.

- Keep the logo image decorative in the header when visible text is present.
  - Rationale: the brand link already exposes `Elyara Tours Granada`; adding logo alt text would duplicate the accessible name.
  - Alternative considered: use descriptive alt text on the image. Rejected to avoid repeated brand text for assistive technologies.

- Keep the header text on one line with responsive sizing rather than hiding the text on mobile.
  - Rationale: the user explicitly wants `Elyara Tours Granada` beside the logo in one line.
  - Alternative considered: hide part of the name on mobile. Rejected because it changes the requested brand presentation.

## Risks / Trade-offs

- Long brand text plus navigation and CTA may crowd smaller widths -> Use constrained logo sizing, `whitespace-nowrap` for the brand text, and existing responsive navigation behavior.
- PNG favicon may not cover every legacy browser case -> Use a standards-compliant PNG favicon link and rely on the existing static hosting model.
- Detailed header logo may lose detail at small sizes -> Choose a slightly larger header logo size than the previous favicon mark while preserving header height.

## Migration Plan

- Rename or duplicate the existing logo images to clean public asset paths.
- Update favicon metadata to point to the circular logo asset.
- Update the shared header brand image to point to the uncircled logo asset.
- Verify desktop and mobile header behavior with production build output.
- Rollback by restoring the previous `/favicon.svg` references and removing unused renamed logo assets if needed.
