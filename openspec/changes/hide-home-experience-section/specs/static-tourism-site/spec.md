## ADDED Requirements

### Requirement: Localized home without experience section
The system SHALL omit the introductory Experience/La experiencia card section from Spanish and English localized home pages while preserving the rest of the home discovery flow.

#### Scenario: Spanish visitor opens home without experience cards
- **WHEN** a visitor opens `/es/`
- **THEN** the page does not display the three-card `La experiencia` section for historical context, walkable pace, and direct booking
- **AND** the page still displays the localized hero, tour catalog, reservation calendar, tailor-made section, traveler reviews, footer, and external WhatsApp/email reservation actions

#### Scenario: English visitor opens home without experience cards
- **WHEN** a visitor opens `/en/`
- **THEN** the page does not display the three-card `Experience` section for historical context, walkable pace, and direct booking
- **AND** the page still displays the localized hero, tour catalog, reservation calendar, tailor-made section, traveler reviews, footer, and external WhatsApp/email reservation actions

### Requirement: Navigation excludes removed experience anchor
The system SHALL not expose localized navigation links to the removed home Experience/La experiencia section.

#### Scenario: Visitor sees desktop navigation
- **WHEN** a visitor views the desktop navigation on a localized public page
- **THEN** the navigation does not display a `La experiencia` or `Experience` link that points to `#experience`
- **AND** the remaining localized navigation links continue to provide access to tours, private tours, tailor-made content, blog, contact, and the alternate language

#### Scenario: Visitor sees mobile navigation
- **WHEN** a visitor opens the mobile navigation menu on a localized public page
- **THEN** the menu does not display a `La experiencia` or `Experience` link that points to `#experience`
- **AND** the remaining localized navigation links and reservation actions remain available

## REMOVED Requirements

### Requirement: Localized home experience cards
**Reason**: The section is being removed because its three cards duplicate messages already covered by the hero, tour catalog, tailor-made content, and reservation calls to action.
**Migration**: Home page discovery continues through the hero, tour catalog, reservation calendar, tailor-made section, traveler reviews, footer, and direct reservation links; navigation links to `#experience` are removed rather than redirected.
