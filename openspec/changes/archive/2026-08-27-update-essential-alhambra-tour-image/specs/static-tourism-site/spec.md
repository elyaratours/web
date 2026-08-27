## ADDED Requirements

### Requirement: Essential Alhambra approved image
The system SHALL display the provided `alhambra.jpg` image as the public tour image for the Spanish `Alhambra: símbolos, poder y belleza` tour and the English `Essential Alhambra at Sunset` tour wherever those tours' images are rendered.

#### Scenario: Visitor sees the Spanish Alhambra símbolos poder y belleza tour in the catalog
- **WHEN** a visitor views a Spanish tour catalog or listing that includes the `Alhambra: símbolos, poder y belleza` tour
- **THEN** the tour card displays the provided `alhambra.jpg` image as that tour's image

#### Scenario: Visitor opens the Spanish Alhambra símbolos poder y belleza tour detail page
- **WHEN** a visitor opens the Spanish `Alhambra: símbolos, poder y belleza` tour detail page
- **THEN** the page displays the provided `alhambra.jpg` image as the tour's main image

#### Scenario: Visitor sees the English Essential Alhambra at Sunset tour in the catalog
- **WHEN** a visitor views an English tour catalog or listing that includes the `Essential Alhambra at Sunset` tour
- **THEN** the tour card displays the provided `alhambra.jpg` image as that tour's image

#### Scenario: Visitor opens the English Essential Alhambra at Sunset tour detail page
- **WHEN** a visitor opens the English `Essential Alhambra at Sunset` tour detail page
- **THEN** the page displays the provided `alhambra.jpg` image as the tour's main image

#### Scenario: Other tour imagery remains unchanged
- **WHEN** visitors view other tours
- **THEN** the system preserves their existing configured tour images unless they explicitly reference the same approved image
