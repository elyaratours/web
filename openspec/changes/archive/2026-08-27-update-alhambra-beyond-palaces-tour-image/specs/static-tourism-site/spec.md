## ADDED Requirements

### Requirement: Alhambra beyond the palaces approved image
The system SHALL display the provided `puerta-del-vino-01.jpg` image as the public tour image for the Spanish `La Alhambra más allá de los palacios` tour and the English `The Alhambra Beyond the Palaces` tour wherever those tours' images are rendered.

#### Scenario: Visitor sees the Spanish La Alhambra más allá de los palacios tour in the catalog
- **WHEN** a visitor views a Spanish tour catalog or listing that includes the `La Alhambra más allá de los palacios` tour
- **THEN** the tour card displays the provided `puerta-del-vino-01.jpg` image as that tour's image

#### Scenario: Visitor opens the Spanish La Alhambra más allá de los palacios tour detail page
- **WHEN** a visitor opens the Spanish `La Alhambra más allá de los palacios` tour detail page
- **THEN** the page displays the provided `puerta-del-vino-01.jpg` image as the tour's main image

#### Scenario: Visitor sees the English The Alhambra Beyond the Palaces tour in the catalog
- **WHEN** a visitor views an English tour catalog or listing that includes the `The Alhambra Beyond the Palaces` tour
- **THEN** the tour card displays the provided `puerta-del-vino-01.jpg` image as that tour's image

#### Scenario: Visitor opens the English The Alhambra Beyond the Palaces tour detail page
- **WHEN** a visitor opens the English `The Alhambra Beyond the Palaces` tour detail page
- **THEN** the page displays the provided `puerta-del-vino-01.jpg` image as the tour's main image

#### Scenario: Other tour imagery remains unchanged
- **WHEN** visitors view other tours
- **THEN** the system preserves their existing configured tour images unless they explicitly reference the same approved image
