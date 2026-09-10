## Context

See `proposal.md` for motivation. The current Astro site renders localized Home reservation actions in the Home page template and scheduled reservation actions through the shared reservation calendar component. Both surfaces currently include visible contact values in addition to reservation buttons.

## Goals / Non-Goals

**Goals:**

- Remove visible phone and email copy from the localized Home hero reservation area.
- Remove visible phone and email copy from shared scheduled-date calendar cards.
- Keep WhatsApp and email reservation buttons, labels, and external destinations working in Spanish and English.

**Non-Goals:**

- Do not change approved contact constants, structured data, footer contact details, contact pages, tour detail non-calendar reservation panels, SEO landing pages, or authority pages.
- Do not change reservation URL generation, scheduled availability rules, calendar month navigation, or the external reservation model.

## Decisions

### Remove only visible helper text from targeted surfaces

Delete or stop rendering the visible contact-value elements in the Home hero and reservation calendar cards. Keep the existing button links because they are the intended reservation actions and still need the approved contact values internally.

Alternatives considered: remove contact constants globally or change reservation URLs. That would break unrelated pages and the external reservation behavior, so the scope stays limited to targeted visible copy.

### Treat the shared calendar consistently

Apply the calendar display change in the shared reservation calendar component so both Spanish and English calendar cards follow the same rule wherever that component renders scheduled availability.

Alternatives considered: special-case only the Home calendar. That would leave the same visible contact values in tour calendar contexts and make the shared component inconsistent.

## Risks / Trade-offs

- Visitors lose copyable contact values in the Home hero and calendar cards -> Mitigation: keep prominent WhatsApp/email buttons and preserve contact details in footer and contact pages.
- Accidental removal from unrelated pages -> Mitigation: verify footer/contact/tour-detail non-calendar surfaces still expose contact values where currently intended.
- Button labels or external URLs could regress -> Mitigation: inspect generated Spanish and English Home/calendar HTML and run the standard check/build commands.

## Migration Plan

1. Remove visible contact-value rendering from the localized Home hero reservation block.
2. Remove visible contact-value rendering from scheduled-date cards in the shared reservation calendar.
3. Verify Spanish and English generated pages keep reservation buttons and no longer show the direct phone/email values in the targeted surfaces.
4. Rollback is static: restore the removed visible contact-value elements and rebuild.
