## ADDED Requirements

### Requirement: Header brand favicon
The system SHALL display the site favicon as a brand mark immediately to the left of the site title in the public header while preserving the title text and navigation access.

#### Scenario: Visitor views the desktop header
- **WHEN** a visitor opens a public page on a desktop-width viewport
- **THEN** the header displays the favicon to the left of the `Elyara Tours Granada` title as part of the site brand presentation

#### Scenario: Visitor views the mobile header
- **WHEN** a visitor opens a public page on a mobile-width viewport
- **THEN** the favicon and title remain visually aligned and do not obstruct navigation links or header readability

#### Scenario: Visitor uses assistive technology
- **WHEN** a visitor navigates the header with assistive technology
- **THEN** the favicon does not introduce redundant or confusing accessible text separate from the existing site title
