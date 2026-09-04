## Why

Some visitors' systems route `mailto:` links through Brave or another browser instead of opening their preferred email client. Showing the contact email next to reservation calls to action lets visitors copy the address directly, while avoiding forced new tabs reduces browser handoff friction for tour reservation links.

## What Changes

- Display `elyaratours@gmail.com` next to the localized home reservation call to action.
- Display `elyaratours@gmail.com` next to the tour detail reservation call to action.
- Stop forcing tour detail email reservation links to open in a new browser tab/window.
- Preserve existing `mailto:` reservation targets, subject-prefill behavior for concrete tours, calendar reservation email behavior, and the static no-checkout reservation model.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `static-tourism-site`: Makes reservation email contact details visible near reservation CTAs and prevents tour detail email links from forcing a new tab/window.

## Impact

- Affects localized home hero reservation CTA presentation.
- Affects tour detail sidebar reservation CTA presentation and link attributes.
- Does not change content collection schema, tour reservation URLs, calendar email body/subject generation, backend behavior, deployment configuration, payments, accounts, or internal forms.
