## ADDED Requirements

### Requirement: Traveler reviews approved client photos
The system SHALL display the provided client photos `foto-clientes-1.jpeg`, `Foto-clientes-2.jpeg`, and `Foto-clientes-3.jpeg` as the photo items in the localized traveler reviews mosaic, replacing the previous group photo assets.

#### Scenario: Spanish visitor sees approved client photos in traveler reviews
- **WHEN** a visitor views the Spanish home page and reaches the `Opiniones de nuestros viajeros` section
- **THEN** the mosaic displays photo items using `/images/foto-clientes-1.jpeg`, `/images/Foto-clientes-2.jpeg`, and `/images/Foto-clientes-3.jpeg`

#### Scenario: English visitor sees approved client photos in traveler reviews
- **WHEN** a visitor views the English home page and reaches the `Travelers who walked Granada with us` section
- **THEN** the mosaic displays photo items using `/images/foto-clientes-1.jpeg`, `/images/Foto-clientes-2.jpeg`, and `/images/Foto-clientes-3.jpeg`

#### Scenario: Visitor opens an approved client photo
- **WHEN** a visitor activates one of the traveler review mosaic photo items
- **THEN** the popup displays the enlarged approved client photo with appropriate accessible text for the current language

#### Scenario: Existing reviews mosaic behavior remains unchanged
- **WHEN** the traveler reviews section is displayed after the photo update
- **THEN** the system preserves existing review cards, localized section copy, popup behavior, and responsive mosaic layout
