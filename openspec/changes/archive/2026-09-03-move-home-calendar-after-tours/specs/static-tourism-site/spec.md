## MODIFIED Requirements

### Requirement: Localized home reservation calendar
The system SHALL display a localized reservation calendar on the Spanish and English home pages after the home tour catalog, presenting scheduled tour availability for the next 2 months.

#### Scenario: Spanish visitor sees home reservation calendar
- **WHEN** a visitor opens `/es/`
- **THEN** the system displays a Spanish calendar section with scheduled availability for the next 2 months
- **AND** Spanish-language scheduled dates identify `El alma de Granada` at 10:00

#### Scenario: English visitor sees home reservation calendar
- **WHEN** a visitor opens `/en/`
- **THEN** the system displays an English calendar section with scheduled availability for the next 2 months
- **AND** English-language scheduled dates identify `The Soul of Granada` at 10:00

#### Scenario: Visitor sees calendar after the tour catalog
- **WHEN** a visitor opens a localized home page
- **THEN** the system displays the reservation calendar after the home tour catalog
- **AND** the calendar remains before the Tailor-made/Viajes a medida section and traveler reviews section

#### Scenario: Visitor selects an available home calendar date
- **WHEN** a visitor selects a date with scheduled availability on the localized home calendar
- **THEN** the system displays the available route name, date, time, language, and a reservation email action for that date

#### Scenario: Visitor views a day without scheduled availability
- **WHEN** a visitor views or selects a day without scheduled availability
- **THEN** the system does not present that day as bookable
