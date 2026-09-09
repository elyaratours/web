## Why

The localized home pages currently include a three-card Experience/La experiencia section that repeats value propositions already covered by the hero, tour catalog, tailor-made area, and reservation calls to action. Removing it makes the home page more direct and avoids keeping navigation links to a low-value anchor.

## What Changes

- Remove the Experience/La experiencia three-card section from the Spanish and English localized home pages.
- Remove desktop and mobile navigation links that point to the hidden `#experience` home anchor.
- Keep the rest of the home flow intact: hero, tour catalog, reservation calendar, tailor-made section, traveler reviews, footer, and external WhatsApp/email reservation behavior.
- Clean up now-unused localized copy and icon imports when they are no longer referenced.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `static-tourism-site`: The localized home experience-card requirement is removed, and public navigation must no longer expose links to that removed section.

## Impact

- Affected routes: `/es/`, `/en/`, and the shared navigation shown on localized public pages.
- Affected code: localized home page layout, shared base layout navigation, and possibly localized copy keys/imports made unused by the removal.
- Dependencies: none.
