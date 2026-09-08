## MODIFIED Requirements

### Requirement: External reservation flow
The system SHALL start reservations through external WhatsApp links to `+34 611 126 979` and email links to `elyaratours@gmail.com` rather than internal booking forms, checkout, or payment flows.

#### Scenario: Visitor selects reserve action
- **WHEN** a visitor activates a general reservation call to action that is not tied to a concrete tour or scheduled date
- **THEN** the system opens the selected external channel: `https://wa.me/34611126979` with localized prefilled inquiry text or a clean `mailto:elyaratours@gmail.com` link without prefilled subject or body text
- **AND** the selected channel does not require account creation, internal form submission, checkout, or payment processing

#### Scenario: Visitor sees a general home reserve action
- **WHEN** a visitor views the localized home hero reservation call to action
- **THEN** the system displays WhatsApp and email as available external reservation channels
- **AND** the system displays `+34 611 126 979` and `elyaratours@gmail.com` near the reservation actions so either contact value can be copied directly

#### Scenario: Visitor sees home tour-card reserve actions
- **WHEN** a visitor views published tour cards in the localized home tour catalog
- **THEN** each tour card displays a localized WhatsApp reservation action for that specific tour
- **AND** each tour card preserves a visible path to the corresponding tour detail page

#### Scenario: Visitor selects a home tour-card WhatsApp reserve action
- **WHEN** a visitor activates a WhatsApp reservation action from a tour card in the localized home tour catalog
- **THEN** the system opens `https://wa.me/34611126979` with localized prefilled text that identifies the selected tour name
- **AND** the system does not require account creation, internal form submission, checkout, or payment processing

#### Scenario: Visitor selects a concrete tour reserve action
- **WHEN** a visitor activates a reservation call to action for a specific published tour that is not tied to a scheduled calendar date
- **THEN** the selected WhatsApp action opens `https://wa.me/34611126979` with localized prefilled text that identifies the selected tour name
- **AND** the selected email action opens a `mailto:elyaratours@gmail.com` link with a prefilled subject containing only the selected tour name
- **AND** the system does not prefill dates, group size, number of people, language, itinerary details, or payment details unless they are part of the selected scheduled-date context
- **AND** the system does not force the email link to open in a new browser tab or window

#### Scenario: Visitor sees a concrete tour reserve action
- **WHEN** a visitor views a published tour detail page reservation call to action
- **THEN** the system displays WhatsApp and email reservation actions for that tour
- **AND** the system displays `+34 611 126 979` and `elyaratours@gmail.com` near the reservation actions so either contact value can be copied directly

#### Scenario: Visitor selects a scheduled calendar reservation action
- **WHEN** a visitor activates a reservation call to action for a scheduled calendar date
- **THEN** the selected WhatsApp action opens `https://wa.me/34611126979` with localized prefilled text containing the selected tour name, date, time, and language
- **AND** the selected email action opens a `mailto:elyaratours@gmail.com` link with prefilled subject or body text containing the selected tour name, date, time, and language
- **AND** the message prompts the visitor to provide at least name and number of people

#### Scenario: Visitor sees a scheduled calendar reservation action
- **WHEN** a visitor views a scheduled-date reservation card in the home or tour detail reservation calendar
- **THEN** the system displays WhatsApp and email reservation actions for that scheduled date
- **AND** the system displays `+34 611 126 979` and `elyaratours@gmail.com` near the reservation actions so either contact value can be copied directly

#### Scenario: Visitor completes no internal checkout
- **WHEN** a visitor browses tour pages or scheduled calendar availability
- **THEN** the system does not require account creation, payment processing, internal form submission, or internal checkout to start a reservation

### Requirement: Tailor-made external inquiry flow
The system SHALL start tailor-made trip and route inquiries through external WhatsApp links to `+34 611 126 979` and email links to `elyaratours@gmail.com` rather than internal forms, account flows, checkout, or payment processing.

#### Scenario: Visitor starts tailor-made inquiry
- **WHEN** a visitor activates a tailor-made inquiry call to action
- **THEN** the selected WhatsApp action opens `https://wa.me/34611126979` with localized prefilled text for a tailor-made trip or route inquiry
- **AND** the selected email action opens a clean `mailto:elyaratours@gmail.com` link without prefilled subject or body text

#### Scenario: Visitor sees tailor-made home WhatsApp inquiry action
- **WHEN** a visitor views the Tailor-made/Viajes a medida section on a localized home page
- **THEN** the section displays a localized WhatsApp inquiry action label rather than only the unlocalized word `WhatsApp`
- **AND** the action remains tied to the tailor-made inquiry WhatsApp flow

#### Scenario: Visitor browses tailor-made offer
- **WHEN** a visitor browses the tailor-made home section or standalone page
- **THEN** the system does not require account creation, internal form submission, payment processing, or internal checkout to begin the inquiry
