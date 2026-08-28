## MODIFIED Requirements

### Requirement: Localized home approved hero image
The system SHALL display `/images/alhambra-clouds.jpeg` as the main hero image on the Spanish and English localized home pages, with localized accessible text and appropriate framing.

#### Scenario: Spanish visitor sees approved home hero image
- **WHEN** a visitor opens the Spanish home page at `/es/`
- **THEN** the hero displays `/images/alhambra-clouds.jpeg` as the main image
- **AND** the hero image uses Spanish accessible text describing the Alhambra beneath clouds

#### Scenario: English visitor sees approved home hero image
- **WHEN** a visitor opens the English home page at `/en/`
- **THEN** the hero displays `/images/alhambra-clouds.jpeg` as the main image
- **AND** the hero image uses English accessible text describing the Alhambra beneath clouds

#### Scenario: Sunset image is not used on localized home pages
- **WHEN** a visitor opens the Spanish or English localized home page
- **THEN** the hero does not display `/images/alhambra-sunset.jpeg`

#### Scenario: Localized home behavior remains unchanged
- **WHEN** the localized home page is displayed after the hero image update
- **THEN** the system preserves the existing localized hero copy, calls to action, tour catalog, tailor-made section, traveler reviews section, and routing behavior

#### Scenario: Root landing page remains unchanged
- **WHEN** a visitor opens the root landing page at `/`
- **THEN** the system preserves the existing root landing page image unless that page is explicitly updated by a separate change
