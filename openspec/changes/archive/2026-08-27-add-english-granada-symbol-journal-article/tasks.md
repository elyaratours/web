## 1. Content Entry

- [x] 1.1 Add `src/content/blog/en/en-granada-pomegranates.md` with `locale: en`, `translationKey: granada-symbol`, `postSlug: why-are-there-pomegranates`, published metadata, related tour `granada-new-world`, and English body copy; verify the file matches the blog collection schema.
- [x] 1.2 Preserve the existing Spanish article unchanged and verify both localized entries share `translationKey: granada-symbol`.

## 2. Public Behavior

- [x] 2.1 Verify `/en/blog/` includes the English pomegranate article in the Journal listing.
- [x] 2.2 Verify `/en/blog/why-are-there-pomegranates/` renders the English title, excerpt, category, date, image, body copy, and related tour prompt.
- [x] 2.3 Verify the Spanish and English article pages expose language alternates through the shared translation key.

## 3. Validation

- [x] 3.1 Run `openspec validate add-english-granada-symbol-journal-article --type change --strict` and verify it passes.
- [x] 3.2 Run `npm run check` and verify Astro content validation passes.
- [x] 3.3 Run `npm run build` and verify the static site builds with the new English article route.
