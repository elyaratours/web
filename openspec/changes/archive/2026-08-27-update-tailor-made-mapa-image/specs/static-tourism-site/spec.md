## ADDED Requirements

### Requirement: Tailor-made approved map image
The system SHALL display the provided `mapa.png` image in the localized Tailor-made/Viajes a medida home section and standalone pages, with localized accessible text.

#### Scenario: Spanish visitor sees approved map image in Viajes a medida home section
- **WHEN** a visitor views the Spanish home page and reaches the `Viajes a medida` section
- **THEN** the section displays `/images/mapa.png` as its image
- **AND** the image uses Spanish accessible text

#### Scenario: English visitor sees approved map image in Tailor-made home section
- **WHEN** a visitor views the English home page and reaches the `Tailor-made` section
- **THEN** the section displays `/images/mapa.png` as its image
- **AND** the image uses English accessible text

#### Scenario: Spanish visitor opens Viajes a medida page
- **WHEN** a visitor opens `/es/viajes-a-medida/`
- **THEN** the page displays `/images/mapa.png` as its main image and social preview image
- **AND** the main image uses Spanish accessible text

#### Scenario: English visitor opens Tailor-made page
- **WHEN** a visitor opens `/en/tailor-made-trips/`
- **THEN** the page displays `/images/mapa.png` as its main image and social preview image
- **AND** the main image uses English accessible text

#### Scenario: Tailor-made behavior remains unchanged
- **WHEN** the Tailor-made/Viajes a medida image update is applied
- **THEN** the system preserves existing localized copy, calls to action, routes, layout, and reservation behavior
