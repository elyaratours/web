## Context

The localized home page reads hero copy from `src/lib/i18n.ts`. The hero title is also passed into the base layout as page metadata, while the footer uses a separate `footerIntro` key and must remain independent from the hero body.

## Goals / Non-Goals

**Goals:**
- Keep the approved Spanish and English hero title/body copy in the centralized locale config.
- Let existing home page and SEO metadata wiring consume the updated hero title without layout changes.
- Preserve footer-specific intro copy via the existing `footerIntro` key.

**Non-Goals:**
- No visual redesign, route changes, reservation-flow changes, content collection changes, or new localization system.

## Decisions

- Update only the locale copy values used by the hero.
  Rationale: the home page already renders `copy.heroTitle` and `copy.heroText`, so changing the source strings is the smallest correct implementation.
  Alternative considered: hard-code copy in the home page. Rejected because it would bypass the existing Spanish/English localization structure.

- Preserve the existing footer separation.
  Rationale: the footer should continue reading `copy.footerIntro`, so the new hero body does not unintentionally replace the broader footer positioning.
  Alternative considered: reuse `heroText` in the footer. Rejected because the approved hero body is specific to the top marketing message.

## Risks / Trade-offs

- Translation nuance could need later marketing review -> Keep the English string centralized so future copy changes remain a one-line localization update.
- SEO titles change with the hero title -> This is intentional because the localized home page title follows the approved hero positioning.
