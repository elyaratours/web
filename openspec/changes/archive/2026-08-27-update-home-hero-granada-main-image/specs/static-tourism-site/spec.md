## ADDED Requirements

### Requirement: Localized home approved hero image
The system SHALL display the provided `Granada-main.jpeg` image as the main hero image on the Spanish and English localized home pages, with localized accessible text.

#### Scenario: Spanish visitor sees approved home hero image
- **WHEN** a visitor opens the Spanish home page at `/es/`
- **THEN** the hero displays `/images/Granada-main.jpeg` as the main image
- **AND** the hero image uses Spanish accessible text

#### Scenario: English visitor sees approved home hero image
- **WHEN** a visitor opens the English home page at `/en/`
- **THEN** the hero displays `/images/Granada-main.jpeg` as the main image
- **AND** the hero image uses English accessible text

#### Scenario: Localized home behavior remains unchanged
- **WHEN** the localized home page is displayed after the hero image update
- **THEN** the system preserves the existing localized hero copy, calls to action, tour catalog, tailor-made section, traveler reviews section, and routing behavior

#### Scenario: Root landing page remains unchanged
- **WHEN** a visitor opens the root landing page at `/`
- **THEN** the system preserves the existing root landing page image unless that page is explicitly updated by a separate change
