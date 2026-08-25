## Context

The global footer lives in the shared base layout and appears across public pages. It currently contains the brand description and a small set of navigation/language links, so the contact addition should preserve the lightweight footer structure.

## Goals / Non-Goals

**Goals:**

- Add a visible contact area to the shared footer without changing page-specific layouts.
- Keep the email and Instagram links accessible, readable, and consistent across locales.
- Preserve existing footer navigation and language links.

**Non-Goals:**

- Do not add any social network other than Instagram.
- Do not add contact forms, newsletter signup, backend handling, tracking widgets, payment, checkout, or account flows.
- Do not create a separate contact page in this change.

## Decisions

- Add the contact details directly in `BaseLayout.astro`.
  - Rationale: the footer is shared globally, and the contact details are fixed business information.
  - Alternative considered: create a dedicated contact component. Rejected as unnecessary unless the footer grows further.

- Use `mailto:elyaratours@gmail.com` for email and `https://instagram.com/elyaratours` for Instagram.
  - Rationale: both are direct links matching the user's requested contact channels.
  - Alternative considered: display plain text only. Rejected because clickable links are more useful and testable.

- Localize only the contact heading label.
  - Rationale: the email and Instagram handle are brand/contact data and do not need translation.
  - Alternative considered: hard-code a Spanish heading. Rejected because the footer appears on English pages too.

## Risks / Trade-offs

- Footer could become visually crowded -> Use the existing responsive grid and keep the contact block short.
- Instagram handle could be misread as a non-clickable label -> Show it as a link with clear external-link behavior.
- Email scraping risk from public mailto link -> Acceptable for this change because the user explicitly wants the email visible in the footer.

## Migration Plan

- Add localized footer contact label copy.
- Add the contact block to the shared footer.
- Verify links, responsive layout, and build/check commands.
- Rollback is removal of the contact block and related localized label.
