## Context

The localized home page uses `copy.heroTitle` and `copy.heroText` from `src/lib/i18n.ts` for the visible hero. `heroTitle` is also passed to `BaseLayout` and becomes part of the SEO title and Open Graph title. `BaseLayout.astro` currently reuses `copy.heroText` in the global footer, so changing only `heroText` would unintentionally change footer copy.

## Goals / Non-Goals

**Goals:**
- Update the Spanish hero title and body text to the approved copy.
- Update the English hero title and body text to the approved copy.
- Preserve the current footer intro copy in both languages.
- Keep localized home SEO title behavior tied to the updated `heroTitle`.

**Non-Goals:**
- Change footer visual design or footer structure.
- Change hero image, layout, buttons, spacing, or section order.
- Change page routes, tour data, blog data, contact data, booking flow, APIs, or backend behavior.

## Decisions

- Add a footer-specific localized copy key, such as `footerIntro`, for the existing footer text.
  Alternative considered: leave `BaseLayout.astro` using `heroText`. Rejected because the user explicitly does not want the new hero body copy to appear in the footer.

- Update only the existing localized copy object instead of creating a separate hero content module.
  Alternative considered: introduce a new home content object. Rejected because the current `localeConfig` already owns this home-level copy and a larger restructure is unnecessary.

- Keep the Spanish accented title as requested.
  Alternative considered: normalize to ASCII as many current `i18n.ts` strings do. Rejected because the user provided approved public copy with accents, and visible Spanish marketing copy should preserve it.

## Risks / Trade-offs

- The Spanish title introduces non-ASCII characters in `src/lib/i18n.ts`, but the file already supports UTF-8 source and public Spanish copy benefits from correct accents.
- Updating `heroTitle` changes the localized home SEO title and Open Graph title, which is intended for this copy update.
- A missing `footerIntro` value would fail TypeScript if the localized config shape is updated consistently.
