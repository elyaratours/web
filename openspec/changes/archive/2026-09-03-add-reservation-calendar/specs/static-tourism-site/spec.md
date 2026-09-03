## ADDED Requirements

### Requirement: Localized home reservation calendar
The system SHALL display a localized reservation calendar on the Spanish and English home pages that presents scheduled tour availability for the next 2 months.

#### Scenario: Spanish visitor sees home reservation calendar
- **WHEN** a visitor opens `/es/`
- **THEN** the system displays a Spanish calendar section with scheduled availability for the next 2 months
- **AND** Spanish-language scheduled dates identify `El alma de Granada` at 10:00

#### Scenario: English visitor sees home reservation calendar
- **WHEN** a visitor opens `/en/`
- **THEN** the system displays an English calendar section with scheduled availability for the next 2 months
- **AND** English-language scheduled dates identify `The Soul of Granada` at 10:00

#### Scenario: Visitor selects an available home calendar date
- **WHEN** a visitor selects a date with scheduled availability on the localized home calendar
- **THEN** the system displays the available route name, date, time, language, and a reservation email action for that date

#### Scenario: Visitor views a day without scheduled availability
- **WHEN** a visitor views or selects a day without scheduled availability
- **THEN** the system does not present that day as bookable

### Requirement: Tour detail reservation calendar
The system SHALL display route-specific upcoming availability on tour detail pages while preserving email-based reservation behavior for tours without scheduled dates.

#### Scenario: Visitor opens Spanish Soul of Granada route
- **WHEN** a visitor opens the Spanish tour detail page for `El alma de Granada`
- **THEN** the system displays upcoming scheduled dates for that route within the next 2 months
- **AND** each scheduled date is shown at 10:00 in Spanish

#### Scenario: Visitor opens English Soul of Granada route
- **WHEN** a visitor opens the English tour detail page for `The Soul of Granada`
- **THEN** the system displays upcoming scheduled dates for that route within the next 2 months
- **AND** each scheduled date is shown at 10:00 in English

#### Scenario: Visitor opens a tour without scheduled availability
- **WHEN** a visitor opens a published tour detail page that has no scheduled dates in the next 2 months
- **THEN** the system preserves a clear email reservation or inquiry action for that tour
- **AND** the system does not display unrelated dates from other tours as bookable for that tour

### Requirement: Recurring Soul of Granada availability
The system SHALL generate recurring public availability for the localized Soul of Granada routes according to the approved weekly schedule.

#### Scenario: Spanish recurring availability is generated
- **WHEN** the static site generates calendar availability
- **THEN** `El alma de Granada` is scheduled every Tuesday, Thursday, and Saturday at 10:00 for the next 2 months
- **AND** the scheduled availability links to the Spanish `El alma de Granada` tour detail page

#### Scenario: English recurring availability is generated
- **WHEN** the static site generates calendar availability
- **THEN** `The Soul of Granada` is scheduled every Wednesday, Friday, and Sunday at 10:00 for the next 2 months
- **AND** the scheduled availability links to the English `The Soul of Granada` tour detail page

#### Scenario: Monday has no recurring Soul of Granada availability
- **WHEN** the static site generates calendar availability
- **THEN** Mondays do not receive recurring `El alma de Granada` or `The Soul of Granada` availability from this schedule

## MODIFIED Requirements

### Requirement: External reservation flow
The system SHALL start reservations through email links to `elyaratours@gmail.com` rather than WhatsApp, internal booking forms, checkout, or payment flows.

#### Scenario: Visitor selects reserve action
- **WHEN** a visitor activates a general reservation call to action that is not tied to a concrete tour or scheduled date
- **THEN** the system opens a clean `mailto:elyaratours@gmail.com` link without prefilled subject or body text

#### Scenario: Visitor selects a concrete tour reserve action
- **WHEN** a visitor activates a reservation call to action for a specific published tour that is not tied to a scheduled calendar date
- **THEN** the system opens a `mailto:elyaratours@gmail.com` link with a prefilled subject containing only the selected tour name
- **AND** the system does not prefill dates, group size, number of people, language, itinerary details, or body text

#### Scenario: Visitor selects a scheduled calendar reservation action
- **WHEN** a visitor activates a reservation call to action for a scheduled calendar date
- **THEN** the system opens a `mailto:elyaratours@gmail.com` link with prefilled subject or body text containing the selected tour name, date, time, and language
- **AND** the email body prompts the visitor to provide at least name and number of people

#### Scenario: Visitor completes no internal checkout
- **WHEN** a visitor browses tour pages or scheduled calendar availability
- **THEN** the system does not require account creation, payment processing, internal form submission, or internal checkout to start a reservation
