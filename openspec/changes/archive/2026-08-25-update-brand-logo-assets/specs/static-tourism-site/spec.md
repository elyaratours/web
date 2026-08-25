## ADDED Requirements

### Requirement: Elyara brand logo presentation
The system SHALL present Elyara's approved brand logos in the browser tab and global header.

#### Scenario: Browser displays Elyara favicon
- **WHEN** a visitor opens any public page in a browser tab
- **THEN** the browser tab uses the circular Elyara logo as the site favicon

#### Scenario: Header displays Elyara brand identity
- **WHEN** a visitor views the global header on a public page
- **THEN** the header displays the Elyara logo without the circle next to the text `Elyara Tours Granada` on one line

#### Scenario: Header brand link remains accessible
- **WHEN** a visitor activates the header brand area
- **THEN** the system navigates to the localized home page and exposes `Elyara Tours Granada` as the accessible brand name

#### Scenario: Header remains responsive with logo
- **WHEN** a visitor views the global header on mobile or desktop
- **THEN** the header keeps the logo, brand text, navigation, and reservation call to action usable without visual overlap
