## ADDED Requirements

### Requirement: Reservation calendar monthly navigation and styling
The system SHALL present reservation calendar availability one month at a time with accessible previous and next month navigation, using burgundy/wine styling for available reservation dates and reservation emphasis.

#### Scenario: Calendar shows a single month initially
- **WHEN** a visitor views a reservation calendar with more than one generated month
- **THEN** the system displays only one calendar month grid initially
- **AND** the system does not display all generated month grids at the same time

#### Scenario: Visitor navigates to another generated month
- **WHEN** a visitor activates the next or previous month control on a reservation calendar
- **THEN** the system displays the adjacent generated calendar month
- **AND** the selected-date availability cards remain tied to dates in the visible calendar month

#### Scenario: Visitor reaches the edge of generated months
- **WHEN** a visitor views the first or last generated calendar month
- **THEN** the system prevents navigation beyond the available generated months

#### Scenario: Calendar works without JavaScript
- **WHEN** JavaScript is unavailable or fails to run
- **THEN** the system still exposes scheduled route availability and reservation email actions in the rendered page content

#### Scenario: Available dates use burgundy reservation styling
- **WHEN** a visitor views available calendar dates or selected reservation emphasis
- **THEN** the system uses a burgundy/wine visual treatment rather than brown or terracotta as the primary reservation color

## MODIFIED Requirements

### Requirement: Localized home reservation calendar
The system SHALL display a localized reservation calendar on the Spanish and English home pages after the home tour catalog, presenting scheduled tour availability for the next 2 months one month at a time.

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

#### Scenario: Visitor sees one home calendar month at a time
- **WHEN** a visitor views the localized home reservation calendar
- **THEN** the system displays one calendar month grid at a time
- **AND** the system provides month navigation controls when another generated month is available

#### Scenario: Visitor selects an available home calendar date
- **WHEN** a visitor selects a date with scheduled availability on the localized home calendar
- **THEN** the system displays the available route name, date, time, language, and a reservation email action for that date

#### Scenario: Visitor views a day without scheduled availability
- **WHEN** a visitor views or selects a day without scheduled availability
- **THEN** the system does not present that day as bookable

### Requirement: Tour detail reservation calendar
The system SHALL display route-specific upcoming availability on tour detail pages one month at a time while preserving email-based reservation behavior for tours without scheduled dates.

#### Scenario: Visitor opens Spanish Soul of Granada route
- **WHEN** a visitor opens the Spanish tour detail page for `El alma de Granada`
- **THEN** the system displays upcoming scheduled dates for that route within the next 2 months
- **AND** each scheduled date is shown at 10:00 in Spanish

#### Scenario: Visitor opens English Soul of Granada route
- **WHEN** a visitor opens the English tour detail page for `The Soul of Granada`
- **THEN** the system displays upcoming scheduled dates for that route within the next 2 months
- **AND** each scheduled date is shown at 10:00 in English

#### Scenario: Visitor sees one tour calendar month at a time
- **WHEN** a visitor views route-specific upcoming availability with more than one generated month
- **THEN** the system displays one calendar month grid at a time
- **AND** the system provides month navigation controls when another generated month is available

#### Scenario: Visitor opens a tour without scheduled availability
- **WHEN** a visitor opens a published tour detail page that has no scheduled dates in the next 2 months
- **THEN** the system preserves a clear email reservation or inquiry action for that tour
- **AND** the system does not display unrelated dates from other tours as bookable for that tour
