## MODIFIED Requirements

### Requirement: External reservation flow
The system SHALL start reservations through email links to `elyaratours@gmail.com` rather than WhatsApp, internal booking forms, checkout, or payment flows.

#### Scenario: Visitor selects reserve action
- **WHEN** a visitor activates a general reservation call to action that is not tied to a concrete tour or scheduled date
- **THEN** the system opens a clean `mailto:elyaratours@gmail.com` link without prefilled subject or body text

#### Scenario: Visitor sees a general home reserve action
- **WHEN** a visitor views the localized home hero reservation call to action
- **THEN** the system displays `elyaratours@gmail.com` next to the reservation action so the address can be copied directly

#### Scenario: Visitor selects a concrete tour reserve action
- **WHEN** a visitor activates a reservation call to action for a specific published tour that is not tied to a scheduled calendar date
- **THEN** the system opens a `mailto:elyaratours@gmail.com` link with a prefilled subject containing only the selected tour name
- **AND** the system does not prefill dates, group size, number of people, language, itinerary details, or body text
- **AND** the system does not force the email link to open in a new browser tab or window

#### Scenario: Visitor sees a concrete tour reserve action
- **WHEN** a visitor views a published tour detail page reservation call to action
- **THEN** the system displays `elyaratours@gmail.com` next to the reservation action so the address can be copied directly

#### Scenario: Visitor selects a scheduled calendar reservation action
- **WHEN** a visitor activates a reservation call to action for a scheduled calendar date
- **THEN** the system opens a `mailto:elyaratours@gmail.com` link with prefilled subject or body text containing the selected tour name, date, time, and language
- **AND** the email body prompts the visitor to provide at least name and number of people

#### Scenario: Visitor sees a scheduled calendar reservation action
- **WHEN** a visitor views a scheduled-date reservation card in the home or tour detail reservation calendar
- **THEN** the system displays `elyaratours@gmail.com` directly below the `Reservar esta fecha` or `Reserve this date` action so the address can be copied directly

#### Scenario: Visitor completes no internal checkout
- **WHEN** a visitor browses tour pages or scheduled calendar availability
- **THEN** the system does not require account creation, payment processing, internal form submission, or internal checkout to start a reservation
