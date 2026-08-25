## 1. Asset Preparation

- [x] 1.1 Add clean public asset paths for the circular favicon logo and the uncircled header logo; verify `public/images/elyara-favicon.png` and `public/images/elyara-header-logo.png` exist.
- [x] 1.2 Remove or leave unused legacy logo filenames only if safe; verify no source file references paths with spaces for these logo assets.

## 2. Favicon Update

- [x] 2.1 Update the browser favicon metadata to use `/images/elyara-favicon.png`; verify generated HTML contains the PNG favicon link.
- [x] 2.2 Verify the previous `/favicon.svg` header/tab usage is no longer used for the visible brand update unless retained for another explicit purpose.

## 3. Header Brand Update

- [x] 3.1 Update the global header brand image to use `/images/elyara-header-logo.png`; verify the image appears inside the existing localized home link.
- [x] 3.2 Keep the visible brand text as `Elyara Tours Granada` on one line beside the logo; verify the brand text uses a no-wrap layout and remains visible.
- [x] 3.3 Keep the header logo decorative for assistive technology; verify the brand link accessible name remains `Elyara Tours Granada` without duplicate logo text.
- [x] 3.4 Tune header logo and text sizing for mobile and desktop; verify the brand, navigation, and reservation CTA do not visually overlap.

## 4. Verification

- [x] 4.1 Run `npm run check` and verify it succeeds.
- [x] 4.2 Run `npm run build` and verify it succeeds with the updated favicon and header logo in generated output.
- [x] 4.3 Run `openspec validate update-brand-logo-assets --type change --strict` and verify the change is valid.
