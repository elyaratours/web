## ADDED Requirements

### Requirement: Localized home approved hero copy
The system SHALL display the approved Spanish and English hero title and body copy on the localized home pages while preserving the previous footer intro copy.

#### Scenario: Spanish visitor sees approved hero copy
- **WHEN** a visitor opens the Spanish home page at `/es/`
- **THEN** the hero title displays `Granada, más allá de la postal`
- **AND** the hero body displays `Tours privados y rutas a pie para descubrir la historia, los personajes y los rincones que dan sentido a la ciudad.`

#### Scenario: English visitor sees approved hero copy
- **WHEN** a visitor opens the English home page at `/en/`
- **THEN** the hero title displays `Granada, beyond the postcard`
- **AND** the hero body displays `Private tours and walking experiences that reveal the history, characters and hidden corners behind the city`

#### Scenario: Footer intro copy remains unchanged
- **WHEN** a visitor views the footer after the localized hero copy update
- **THEN** the footer preserves the previous localized intro copy instead of reusing the new hero body copy

#### Scenario: Localized home SEO title follows approved hero title
- **WHEN** the localized home page metadata is generated
- **THEN** the SEO title and Open Graph title use the approved localized hero title

#### Scenario: Localized home behavior remains unchanged
- **WHEN** the localized home page is displayed after the hero copy update
- **THEN** the system preserves the existing hero image, calls to action, tour catalog, Tailor-made section, traveler reviews section, routing behavior, and reservation behavior
