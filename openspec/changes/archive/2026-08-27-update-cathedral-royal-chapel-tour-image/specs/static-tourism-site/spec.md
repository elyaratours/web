## ADDED Requirements

### Requirement: Cathedral and Royal Chapel approved image
The system SHALL display the provided `23.jpg` image as the public tour image for the Spanish `Catedral y Capilla Real` tour and the English `Cathedral and Royal Chapel` tour wherever those tours' images are rendered.

#### Scenario: Visitor sees the Spanish Catedral y Capilla Real tour in the catalog
- **WHEN** a visitor views a Spanish tour catalog or listing that includes the `Catedral y Capilla Real` tour
- **THEN** the tour card displays the provided `23.jpg` image as that tour's image

#### Scenario: Visitor opens the Spanish Catedral y Capilla Real tour detail page
- **WHEN** a visitor opens the Spanish `Catedral y Capilla Real` tour detail page
- **THEN** the page displays the provided `23.jpg` image as the tour's main image

#### Scenario: Visitor sees the English Cathedral and Royal Chapel tour in the catalog
- **WHEN** a visitor views an English tour catalog or listing that includes the `Cathedral and Royal Chapel` tour
- **THEN** the tour card displays the provided `23.jpg` image as that tour's image

#### Scenario: Visitor opens the English Cathedral and Royal Chapel tour detail page
- **WHEN** a visitor opens the English `Cathedral and Royal Chapel` tour detail page
- **THEN** the page displays the provided `23.jpg` image as the tour's main image

#### Scenario: Other tour imagery remains unchanged
- **WHEN** visitors view other tours
- **THEN** the system preserves their existing configured tour images unless they explicitly reference the same approved image
