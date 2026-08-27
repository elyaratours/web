## ADDED Requirements

### Requirement: Granada Between Two Worlds approved image
The system SHALL display the provided `centro-albayzin.jpg` image as the public tour image for the Spanish `Granada entre dos mundos` tour and the English `Granada Between Two Worlds` tour wherever those tours' images are rendered.

#### Scenario: Visitor sees the Spanish Granada entre dos mundos tour in the catalog
- **WHEN** a visitor views a Spanish tour catalog or listing that includes the `Granada entre dos mundos` tour
- **THEN** the tour card displays the provided `centro-albayzin.jpg` image as that tour's image

#### Scenario: Visitor opens the Spanish Granada entre dos mundos tour detail page
- **WHEN** a visitor opens the Spanish `Granada entre dos mundos` tour detail page
- **THEN** the page displays the provided `centro-albayzin.jpg` image as the tour's main image

#### Scenario: Visitor sees the English Granada Between Two Worlds tour in the catalog
- **WHEN** a visitor views an English tour catalog or listing that includes the `Granada Between Two Worlds` tour
- **THEN** the tour card displays the provided `centro-albayzin.jpg` image as that tour's image

#### Scenario: Visitor opens the English Granada Between Two Worlds tour detail page
- **WHEN** a visitor opens the English `Granada Between Two Worlds` tour detail page
- **THEN** the page displays the provided `centro-albayzin.jpg` image as the tour's main image

#### Scenario: Other tour imagery remains unchanged
- **WHEN** visitors view other tours
- **THEN** the system preserves their existing configured tour images unless they explicitly reference the same approved image
