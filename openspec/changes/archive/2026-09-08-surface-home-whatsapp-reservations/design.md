## Context

The localized Home page renders the published tour catalog through the shared `TourCard` component. General WhatsApp reservation URLs and tour-specific WhatsApp reservation URLs already exist in i18n helpers, and Tailor-made inquiry URLs already use a separate localized WhatsApp message.

## Goals / Non-Goals

**Goals:**

- Expose a direct WhatsApp reservation action on each Home tour card without removing route-detail discovery.
- Reuse the existing localized WhatsApp URL helpers so Home card behavior matches tour-detail reservation behavior.
- Replace the generic Tailor-made Home `WhatsApp` label with localized reservation/inquiry wording.
- Preserve the existing external-only reservation model and responsive tourism-style presentation.

**Non-Goals:**

- Introduce internal booking forms, checkout, payment, account creation, or backend handling.
- Add new reservation channels, new WhatsApp numbers, or new email behavior.
- Change tour content, schedules, public tour URLs, or structured data output.

## Decisions

- Use the existing tour-specific WhatsApp helper for Home tour-card reservation actions. This keeps the selected tour name in the localized prefilled WhatsApp message and avoids duplicating URL construction.
- Pass only the data needed by the tour-card component to render a reservation CTA. This preserves the shared data-driven tour card pattern and avoids hardcoding tour-specific links in the Home page.
- Keep the tour detail link as the primary card navigation while adding a separate WhatsApp action inside the card content. This supports both browsing and immediate reservation without turning the whole card into a reservation trigger.
- Add localized Tailor-made Home CTA text to the existing Tailor-made content copy rather than hardcoding `Reservar por WhatsApp` / `Reserve by WhatsApp` in the component. This keeps Spanish and English copy centralized with the rest of the section.

## Risks / Trade-offs

- More actions on each tour card could increase visual density on mobile -> keep the card layout compact and preserve large tap targets.
- Nested interactive elements are invalid if a button/link is placed inside a card-wide anchor -> restructure the card so the detail link and WhatsApp link are sibling interactive elements.
- Reusing the tour-card component outside Home could surface the new reservation action anywhere cards are used -> make the behavior explicit through component props if non-Home card contexts should remain discovery-only.

## Migration Plan

- Update localized copy and components in one static-site change.
- Build-time output remains static and rollback is a normal code revert.
