## ADDED Requirements

### Requirement: Footer contact information
The system SHALL present direct business contact information in the global footer on public pages.

#### Scenario: Visitor sees footer contact details
- **WHEN** a visitor views the footer on any public page
- **THEN** the footer displays `elyaratours@gmail.com` and Instagram handle `@elyaratours`

#### Scenario: Visitor activates email contact
- **WHEN** a visitor activates the footer email contact
- **THEN** the system opens a `mailto:elyaratours@gmail.com` link

#### Scenario: Visitor activates Instagram contact
- **WHEN** a visitor activates the footer Instagram contact
- **THEN** the system opens `https://instagram.com/elyaratours` as an external link

#### Scenario: Footer keeps lightweight contact scope
- **WHEN** the footer contact area is displayed
- **THEN** the system does not introduce additional social network links, newsletter signup, internal forms, backend contact handling, account creation, checkout, or payment flow
