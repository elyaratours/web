## ADDED Requirements

### Requirement: Alma de Granada approved image
The system SHALL display the provided `almagranada.jpg` image as the public tour image for the Spanish `El alma de Granada` tour and the English `Albaicin and Hidden Viewpoints` tour wherever those tours' images are rendered.

#### Scenario: Visitor sees the Spanish El alma de Granada tour in the catalog
- **WHEN** a visitor views a Spanish tour catalog or listing that includes the `El alma de Granada` tour
- **THEN** the tour card displays the provided `almagranada.jpg` image as that tour's image

#### Scenario: Visitor opens the Spanish El alma de Granada tour detail page
- **WHEN** a visitor opens the Spanish `El alma de Granada` tour detail page
- **THEN** the page displays the provided `almagranada.jpg` image as the tour's main image

#### Scenario: Visitor sees the English Albaicin and Hidden Viewpoints tour in the catalog
- **WHEN** a visitor views an English tour catalog or listing that includes the `Albaicin and Hidden Viewpoints` tour
- **THEN** the tour card displays the provided `almagranada.jpg` image as that tour's image

#### Scenario: Visitor opens the English Albaicin and Hidden Viewpoints tour detail page
- **WHEN** a visitor opens the English `Albaicin and Hidden Viewpoints` tour detail page
- **THEN** the page displays the provided `almagranada.jpg` image as the tour's main image

#### Scenario: Other tour imagery remains unchanged
- **WHEN** visitors view other tours
- **THEN** the system preserves their existing configured tour images unless they explicitly reference the same approved image
