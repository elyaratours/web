# local-seo-presence Specification

## Purpose

Provides local SEO presence signals for Elyara Tours Granada so search engines can understand the business identity, service area, contact channels, page hierarchy, FAQs, public listings, and trustworthy visitor proof.

## Requirements

### Requirement: Local business structured data
The system SHALL expose structured data that identifies Elyara Tours Granada as a Granada tourism business with its approved public name, website URL, contact email, served area, available languages, approved public social profiles, and approved non-review trust facts.

#### Scenario: Search engine reads localized public page business data
- **WHEN** a crawler reads a localized public page
- **THEN** the page exposes structured data identifying `Elyara Tours Granada` as the public business entity
- **AND** the structured data references the configured production website URL rather than a placeholder domain
- **AND** the structured data includes `elyaratours@gmail.com` as the contact email
- **AND** the structured data includes Granada as the served tourism area
- **AND** the structured data includes Spanish and English as supported visitor languages
- **AND** the structured data may expose `EUR` as a broad approved price range signal without inventing specific unavailable prices

#### Scenario: Approved social profile is available
- **WHEN** a crawler reads business structured data
- **THEN** the structured data references `https://instagram.com/elyaratours` as an approved public profile
- **AND** the structured data does not invent unapproved phone numbers, physical addresses, payment details, additional social profiles, ratings, review counts, awards, credentials, or business hours

#### Scenario: Search engine reads business imagery
- **WHEN** a crawler reads business structured data
- **THEN** logo and business image references use approved public image URLs
- **AND** those image references may include structured image details such as content URL and known dimensions

### Requirement: Website and page structured data
The system SHALL expose structured data for the public website and each public page entity, connecting both to the Elyara business identity.

#### Scenario: Search engine reads website entity data
- **WHEN** a crawler reads a localized public page
- **THEN** the page exposes structured data identifying the public website name as `Elyara Tours Granada`
- **AND** the website entity URL uses the configured production site URL
- **AND** the website entity is associated with the Elyara business entity

#### Scenario: Search engine reads public page entity data
- **WHEN** a crawler reads any indexable public page
- **THEN** the page exposes a `WebPage` structured data node with a stable page URL and entity identifier
- **AND** the page entity includes localized name, description, language, publisher, website relationship, and Elyara business relationship
- **AND** the page entity references the visible primary image or approved fallback share image when page-specific imagery is unavailable
- **AND** the page image reference may include structured image details such as content URL and known dimensions

### Requirement: Breadcrumb structured data
The system SHALL expose breadcrumb structured data on public pages where the visitor's location in the site hierarchy is more specific than a localized home page.

#### Scenario: Search engine reads a tour detail breadcrumb
- **WHEN** a crawler reads a published localized tour detail page
- **THEN** the page exposes breadcrumb structured data from the localized home page to the tours area and then to the current tour page
- **AND** every breadcrumb URL uses the configured production site URL

#### Scenario: Search engine reads an editorial article breadcrumb
- **WHEN** a crawler reads a published localized blog article page
- **THEN** the page exposes breadcrumb structured data from the localized home page to the localized blog listing and then to the current article page
- **AND** every breadcrumb URL uses the configured production site URL

#### Scenario: Search engine reads a commercial page breadcrumb
- **WHEN** a crawler reads a localized contact, tailor-made, or commercial tour landing page
- **THEN** the page exposes breadcrumb structured data from the localized home page to the current page
- **AND** every breadcrumb URL uses the configured production site URL

### Requirement: FAQ structured data
The system SHALL expose FAQ structured data only for public pages that display matching visitor-facing FAQ content on the page.

#### Scenario: Search engine reads a tour FAQ
- **WHEN** a published tour detail page displays one or more localized FAQ entries
- **THEN** the page exposes matching FAQ structured data with the same visible questions and answers

#### Scenario: Search engine reads a commercial page FAQ
- **WHEN** a localized tailor-made, contact, or commercial tour landing page displays one or more localized FAQ entries
- **THEN** the page exposes matching FAQ structured data with the same visible questions and answers

#### Scenario: Page has no visible FAQ content
- **WHEN** a public page does not display FAQ entries
- **THEN** the page does not expose FAQ structured data for hidden or unavailable questions

### Requirement: Public listing structured data
The system SHALL expose list structured data for public pages that visibly list tours or editorial articles.

#### Scenario: Search engine reads the localized home tour catalog
- **WHEN** a crawler reads a localized home page with a visible tour catalog
- **THEN** the page exposes structured data describing the visible published tours as an ordered public list
- **AND** each listed item URL points to the corresponding localized tour detail page

#### Scenario: Search engine reads a localized blog listing
- **WHEN** a crawler reads a localized blog listing page with visible published articles
- **THEN** the page exposes structured data describing the visible published articles as an ordered public list
- **AND** each listed item URL points to the corresponding localized article detail page

### Requirement: Review structured data constraints
The system SHALL expose review structured data only for real approved visitor reviews that are displayed on the same page and can be attributed without inventing ratings or platform data.

#### Scenario: Search engine reads visible visitor proof
- **WHEN** the localized home page displays approved visitor review text
- **THEN** any review structured data uses only the visible approved review text and attribution available on that page
- **AND** the structured data does not invent star ratings, aggregate ratings, review counts, review platforms, or reviewer details not present in the approved content

#### Scenario: Approved review data is insufficient for schema
- **WHEN** approved review content cannot be represented truthfully as structured data
- **THEN** the system preserves the visible visitor proof without emitting misleading review structured data

#### Scenario: Search engine reads home while traveler reviews are hidden
- **WHEN** a crawler reads a localized home page where traveler reviews are not displayed
- **THEN** the page does not emit review structured data for the hidden traveler reviews

### Requirement: Connected tourism service structured data
The system SHALL expose structured data that connects Elyara's localized tourism services, public landing pages, tour lists, and business identity without inventing unsupported business facts.

#### Scenario: Search engine reads a commercial tourism landing page
- **WHEN** a crawler reads a localized commercial or SEO landing page for Granada tourism services
- **THEN** the page exposes structured data describing the visible tourism service offered on that page
- **AND** the service is connected to the Elyara business identity and the Granada service area
- **AND** the structured data uses only approved public contact channels and visible page content

#### Scenario: Search engine reads a tour listing relationship
- **WHEN** a crawler reads a public page that visibly lists tours for a localized search intent
- **THEN** the page exposes structured data that represents the visible list and points each item to its corresponding localized tour detail page

### Requirement: Tourism entity relationships
The system SHALL use truthful tourism-oriented structured data relationships for tours, places, services, offers, itinerary points, and articles where the page content supports those entities.

#### Scenario: Search engine reads a tour detail entity
- **WHEN** a crawler reads a published tour detail page
- **THEN** the tour structured data identifies the tour as a visitor experience in Granada
- **AND** it connects the tour to Elyara as provider and to the page URL as the public entity URL
- **AND** it may include duration and route-point itinerary metadata only when derived from visible tour content or approved tour metadata
- **AND** it may include EUR offer metadata only when derived from visible price text, preserving descriptive price text when no numeric price is available
- **AND** it does not invent ratings, review counts, physical addresses, unavailable tickets, unsupported schedules, route stops, or unavailable booking/payment capabilities

#### Scenario: Search engine reads content about a Granada place
- **WHEN** a public page visibly discusses a specific Granada place, monument, or neighborhood as part of the service or editorial content
- **THEN** any place-oriented structured data remains consistent with that visible content
- **AND** it does not claim Elyara owns, operates, or is physically located at that place

#### Scenario: Search engine reads service or article imagery
- **WHEN** a crawler reads structured data for a public service, landing page, tour, or editorial article with an approved image
- **THEN** image references use production URLs and may include structured image details such as content URL and known dimensions
- **AND** image structured data remains aligned with the visible or approved fallback page image

### Requirement: Approved contact channel structured data
The system SHALL represent approved public contact and reservation channels in structured data without adding unapproved contact details.

#### Scenario: Search engine reads business contact data
- **WHEN** a crawler reads structured data for Elyara's business identity or services
- **THEN** the structured data includes `elyaratours@gmail.com` as the approved email contact channel
- **AND** it may represent WhatsApp contact using `+34 611 126 979` only as an approved direct inquiry channel
- **AND** it does not introduce a physical address, unsupported phone number, payment method, business hours, aggregate rating, or review count unless those facts are approved and visible

### Requirement: Structured data consistency validation
The system SHALL keep SEO structured data consistent with visible content and production URLs across all public pages.

#### Scenario: Static build generates structured data
- **WHEN** the site builds public pages for production
- **THEN** JSON-LD nodes use `https://elyaratours.com` URLs for public pages, images, and entity identifiers
- **AND** page-specific JSON-LD does not reference unpublished tours, unpublished articles, hidden FAQ entries, invented route stops, or unsupported business facts
- **AND** structured image, offer, itinerary, article, website, webpage, service, and business nodes remain derived from page content or approved shared metadata

#### Scenario: Search engine reads multiple page entities
- **WHEN** a crawler reads any public page with multiple JSON-LD nodes
- **THEN** the business, website, page-specific, breadcrumb, list, article, FAQ, offer, itinerary, image, and service entities remain connected with stable identifiers where applicable

#### Scenario: Search engine reads local metadata signals
- **WHEN** a crawler reads public page metadata
- **THEN** local geo metadata may identify Granada as the served place
- **AND** that metadata does not introduce a physical street address, unsupported ownership claim, review rating, or unapproved credential

### Requirement: Search ranking improvement constraints
The system SHALL improve crawlability, relevance, and trust signals without presenting search ranking guarantees as public or structured data claims.

#### Scenario: Public page discusses search-relevant services
- **WHEN** a public page targets a Granada tourism search intent
- **THEN** the content remains visitor-facing and service-relevant
- **AND** it does not claim guaranteed Google rankings, first-page placement, review scores, awards, or third-party endorsements that are not approved and visible

#### Scenario: Structured data is generated for ranking-oriented pages
- **WHEN** a crawlable public page includes structured data
- **THEN** each structured data node is supported by visible content or approved business facts
- **AND** it does not invent address, aggregate rating, review count, official-guide credential, business hours, price ranges, or social profiles

### Requirement: Authority signal consistency
The system SHALL keep authority-oriented content and metadata consistent across localized authority pages, contact pages, landing pages, tour pages, and business structured data.

#### Scenario: Search engine reads authority-oriented business data
- **WHEN** a crawler reads authority-oriented page metadata or structured data
- **THEN** Elyara's public name, production website URL, Granada service area, approved email, approved WhatsApp inquiry number, and approved Instagram profile remain consistent with the business identity

#### Scenario: Approved credentials become available
- **WHEN** an official-guide credential, license, association membership, award, review platform, physical address, or other trust signal is approved for publication
- **THEN** the system may expose that fact only on pages where it is visible to visitors
- **AND** matching structured data may include the fact only when it can be represented truthfully

#### Scenario: Trust signal is not approved
- **WHEN** a trust signal has not been approved for publication
- **THEN** the system does not publish it in page copy, metadata, structured data, sitemap entries, or hidden machine-readable content

### Requirement: Search ownership readiness
The system SHALL support search ownership setup with production-safe verification and sitemap discovery metadata.

#### Scenario: Search Console verifies the production domain
- **WHEN** the configured production site is built with an approved Search Console token
- **THEN** the public pages expose the verification token in a crawler-readable way
- **AND** the sitemap and robots instructions continue to point to production URLs on `https://elyaratours.com`

#### Scenario: Search ownership is not configured yet
- **WHEN** no approved Search Console token is available
- **THEN** public pages, sitemap, robots instructions, canonical metadata, hreflang metadata, and structured data remain production-ready without placeholder verification values

### Requirement: Local trust without review claims
The system SHALL strengthen local trust signals using approved public facts without displaying reviews, ratings, awards, credentials, or Google Business Profile claims that are not yet approved and visible.

#### Scenario: Visitor reads local trust content before reviews exist
- **WHEN** a visitor reads authority, contact, tailor-made, or commercial discovery content before real reviews are approved
- **THEN** the page may explain Elyara's Granada service area, languages, direct WhatsApp/email reservation flow, guide-led approach, private group availability, and cultural route focus
- **AND** the page does not display star ratings, review counts, testimonial quotes, awards, official credentials, or third-party endorsements that are not approved and visible

#### Scenario: Search engine reads local trust structured data before reviews exist
- **WHEN** a crawler reads structured data before real reviews are approved
- **THEN** the structured data remains limited to approved business facts, visible page content, contact channels, service area, languages, and page relationships
- **AND** it does not emit `Review`, `AggregateRating`, rating values, review counts, awards, physical address, business hours, or official credentials unless those facts are approved and visible

### Requirement: Google Business Profile readiness
The system SHALL be ready to connect the website with Elyara's Google Business Profile after verification while avoiding unverified profile claims before approval.

#### Scenario: Google Business Profile is not verified yet
- **WHEN** the Google Business Profile URL or verification state is not approved for publication
- **THEN** public pages do not claim that the Google profile is verified
- **AND** public pages do not link to an unapproved Google Business Profile URL
- **AND** the website still exposes consistent business name, production URL, email, WhatsApp inquiry number, Granada service area, and Spanish/English language support

#### Scenario: Google Business Profile becomes verified
- **WHEN** an approved Google Business Profile URL is available
- **THEN** the system may expose that URL as an approved public profile only on pages where the link is visible to visitors
- **AND** matching structured data may include that profile URL only when it does not conflict with visible page content or approved public facts

### Requirement: Review readiness without fake social proof
The system SHALL support collecting real post-tour reviews without publishing review signals until approved reviews exist.

#### Scenario: No real reviews are approved
- **WHEN** no real visitor reviews are approved for publication
- **THEN** public pages do not display a review section, star rating, aggregate rating, review count, or testimonial carousel as if reviews existed
- **AND** structured data does not include review or aggregate rating nodes

#### Scenario: Post-tour review request copy is prepared
- **WHEN** Elyara needs to request feedback after a real tour
- **THEN** the project may provide Spanish and English review request copy that asks for honest voluntary feedback through approved external channels
- **AND** the copy does not offer incentives, request fake reviews, or ask visitors to mention claims that were not part of their real experience

#### Scenario: Real reviews become approved later
- **WHEN** real visitor reviews are approved for publication in the future
- **THEN** the system may display only the approved review text and attribution visible on the page
- **AND** any matching structured data must remain consistent with the visible approved review content and must not invent ratings or review counts

### Requirement: Approved Google Business Profile publication
The system SHALL publish Google Business Profile links and structured data relationships only after the profile URL is approved for public use and visible to visitors.

#### Scenario: Approved Google Business Profile URL is available
- **WHEN** an approved verified Google Business Profile URL is configured for publication
- **THEN** public trust, contact, or authority surfaces may display a visible link to that profile
- **AND** business structured data may include the profile URL only when the same approved profile is visibly linked on public pages

#### Scenario: Google Business Profile URL is not approved
- **WHEN** no approved Google Business Profile URL is available
- **THEN** public pages do not link to a Google Business Profile, claim verified profile status, or include an unapproved profile URL in structured data
- **AND** the website continues to expose consistent approved business facts: public name, production URL, email, WhatsApp inquiry number, Granada service area, Instagram profile, and Spanish/English support

#### Scenario: Visitor compares public business facts across pages
- **WHEN** a visitor or crawler reads authority, contact, landing, tour, and structured data business information
- **THEN** Elyara's public name, approved contact channels, service area, supported languages, and public profile links remain consistent across those surfaces
- **AND** unapproved physical address, business hours, ratings, review counts, awards, or official credentials are not introduced as hidden metadata

### Requirement: Local SEO performance and trust signals
The system SHALL improve local search readiness through visible useful content, production-safe metadata, and performance-friendly public assets without presenting SEO outcomes as guarantees.

#### Scenario: Visitor opens a locally focused commercial page
- **WHEN** a visitor opens a localized page targeting a Granada tourism search intent
- **THEN** the page provides visible visitor-facing content about Granada service area, route fit, language support, direct inquiry channels, and relevant planning context
- **AND** the page avoids claims of first-page rankings, guaranteed Google placement, review scores, awards, credentials, or third-party endorsements unless those facts are approved and visible

#### Scenario: Search engine reads locally focused metadata
- **WHEN** a crawler reads metadata or structured data for a locally focused public page
- **THEN** the metadata uses production URLs, approved business facts, visible page content, and truthful page relationships
- **AND** it does not invent physical address, business hours, aggregate rating, review count, ticketing capability, ranking outcome, or official-guide credential

#### Scenario: Large public images are optimized for local SEO pages
- **WHEN** a locally focused page uses public imagery as part of its main visitor presentation
- **THEN** optimized public image assets preserve meaningful alt text and page-image metadata consistency
- **AND** image optimization does not hide textual content or replace visitor-facing guidance with image-only content

### Requirement: Home search intent metadata
The system SHALL expose localized Home page titles, descriptions, and visible introductory copy that reflect the main Granada guided-tour search intents supported by the public site without guaranteeing search ranking outcomes.

#### Scenario: Crawler reads localized Home metadata
- **WHEN** a crawler reads the Spanish or English Home page metadata
- **THEN** the title and description describe Granada guided tours, private routes, and supported Granada route areas such as Alhambra, Albaicin, Sacromonte, or the historic center
- **AND** the metadata does not promise first-page rankings, top placement, review scores, awards, credentials, or third-party endorsements that are not approved and visible

#### Scenario: Visitor reads localized Home introductory copy
- **WHEN** a visitor opens the Spanish or English Home page
- **THEN** the visible hero and catalog copy explain the guided-tour service area and private route options in visitor-facing language
- **AND** the copy does not replace useful visitor guidance with keyword-only text

### Requirement: Home commercial discovery links
The system SHALL provide visible localized Home links to existing SEO landing pages for major Granada tourism search intents supported by Elyara's public content.

#### Scenario: Visitor compares Home planning links
- **WHEN** a visitor opens the Spanish or English Home planning/discovery section
- **THEN** the section links to existing localized landing pages for guided visits, private Alhambra tours, private guides, Albaicin, Albaicin and Sacromonte, Cathedral and Royal Chapel, family tours, day trips, and free-tour comparison intent where those pages are published
- **AND** each link points to a real localized public URL rather than a placeholder or unpublished route

#### Scenario: Crawler reads Home discovery list structured data
- **WHEN** a crawler reads the Home planning/discovery structured data
- **THEN** it describes the same published SEO landing pages that are visible in the Home planning/discovery section
- **AND** it does not include unpublished landings or ranking guarantee claims

### Requirement: Business service catalog structured data
The system SHALL connect the Elyara business structured data to a catalog of approved public Granada tourism services using existing landing URLs and approved business facts.

#### Scenario: Crawler reads business service catalog data
- **WHEN** a crawler reads business structured data on a public page
- **THEN** the business entity may expose an offer catalog for real public service groups such as Granada guided walking tours, private Alhambra tours, Albaicin walks, and family tours
- **AND** each catalog item links to an existing public landing URL and identifies Granada as the served area
- **AND** the catalog does not invent unavailable prices, ratings, review counts, physical address, business hours, payment methods, awards, official credentials, or unsupported booking capabilities

### Requirement: SEO improvement measurement readiness
The system SHALL make SEO improvements easy to validate through generated pages and public metadata without requiring private analytics data or making ranking guarantees.

#### Scenario: Static build is inspected after SEO expansion
- **WHEN** the site is built after expanded SEO content is added
- **THEN** generated Spanish and English tour, landing, and editorial pages expose indexable metadata, visible internal links, and production-safe structured data
- **AND** the generated output does not contain placeholder Search Console tokens, fake reviews, aggregate ratings, unapproved GBP links, or ranking guarantee claims

#### Scenario: Future external SEO data becomes available
- **WHEN** Search Console, Google Business Profile, or real review data becomes available later
- **THEN** the website can incorporate only approved public facts into visible content and structured data
- **AND** any data that remains private, unverified, or unsupported is not published as public page content or hidden machine-readable claims

### Requirement: Operational search ownership readiness
The system SHALL support production Search Console setup and sitemap discovery without publishing placeholder verification values or requiring code changes for each approved token update.

#### Scenario: Approved verification token is configured
- **WHEN** the production site is built with an approved Search Console verification token
- **THEN** public indexable pages expose that token in crawler-readable metadata
- **AND** canonical URLs, hreflang URLs, sitemap URLs, robots instructions, Open Graph URLs, and structured-data URLs continue to use `https://elyaratours.com`

#### Scenario: Verification token is absent
- **WHEN** no approved Search Console verification token is configured
- **THEN** public pages omit verification metadata rather than publishing a placeholder
- **AND** the sitemap and robots instructions remain valid for the production domain

### Requirement: Approved external profile publication
The system SHALL publish external local-trust profiles only after the exact profile URL is approved for public use and displayed to visitors.

#### Scenario: Approved Google Business Profile URL is configured
- **WHEN** an approved Google Business Profile URL is configured for publication
- **THEN** public contact, authority, or footer surfaces display a visible link to that profile
- **AND** business structured data may include the same profile URL only because it is visible on public pages
- **AND** the page copy does not claim review counts, rating values, rankings, awards, or verification details beyond the approved visible profile link

#### Scenario: Approved Google Business Profile URL is absent
- **WHEN** no approved Google Business Profile URL is configured
- **THEN** public pages and structured data do not include a Google Business Profile URL or claim profile verification status
- **AND** the website continues to expose approved contact channels, service area, languages, Instagram profile, and reservation flow

### Requirement: Trust signal intake constraints
The system SHALL allow future trust signals to be added only when they are approved, visible, and representable truthfully.

#### Scenario: Approved credential or review source becomes available
- **WHEN** an official credential, association membership, award, review source, physical address, or business-hours fact is approved for public use
- **THEN** the fact may be added only to visitor-facing content where it is visible and contextually accurate
- **AND** matching structured data may include the fact only when the visible content supports it

#### Scenario: Trust signal remains unapproved
- **WHEN** a trust signal is not approved, not verifiable, or not visible to visitors
- **THEN** the site does not publish it in page copy, metadata, footer links, sitemap entries, or hidden machine-readable structured data

### Requirement: Verified Google Business Profile publication
The system SHALL publish the verified Google Business Profile URL `https://maps.app.goo.gl/9bterUh4xSYH5jCf6` as an approved public local-trust profile only where the link is visible to visitors.

#### Scenario: Visitor sees verified Google profile link
- **WHEN** a visitor reads a public trust, contact, footer, or authority surface where external profiles are shown
- **THEN** the page displays a visible link to `https://maps.app.goo.gl/9bterUh4xSYH5jCf6`
- **AND** the page does not claim review counts, rating values, rankings, awards, or verification details beyond the approved visible profile link

#### Scenario: Crawler reads business profile structured data
- **WHEN** a crawler reads business structured data on a page where the verified Google profile is visibly linked
- **THEN** the business `sameAs` data may include `https://maps.app.goo.gl/9bterUh4xSYH5jCf6`
- **AND** the structured data does not include hidden-only Google profile claims, aggregate ratings, review counts, awards, business hours, physical address, or unsupported credentials

### Requirement: Approved real traveler reviews
The system SHALL publish only real traveler reviews that are approved for public use, visible to visitors, and represented without inventing ratings or unsupported platform facts.

#### Scenario: Approved review entries are available
- **WHEN** one or more approved real review entries are configured for publication
- **THEN** public review content displays the approved review text, approved display attribution, source as Google Business Profile, and original language or approved translation state
- **AND** each visible review remains traceable to an approved source entry rather than placeholder, generated, or anonymous fake content

#### Scenario: Review translation is used
- **WHEN** a review is displayed in a locale different from its original language
- **THEN** the page indicates or stores that the displayed text is an approved translation or localized rendering of the original review
- **AND** the translation does not add claims, ratings, route details, or endorsements absent from the approved source text

#### Scenario: Review data is incomplete or unapproved
- **WHEN** a review lacks approved text, approved attribution, source, publication approval, or translation permission when needed
- **THEN** the system does not display that review publicly
- **AND** the review is not emitted in metadata, structured data, sitemap entries, or hidden machine-readable content

### Requirement: Review structured data constraints after real reviews
The system SHALL keep review-related structured data conservative even after real reviews are approved.

#### Scenario: Crawler reads pages with visible real reviews
- **WHEN** a public page displays approved real review excerpts
- **THEN** structured data may omit review nodes entirely or represent only visible approved review text and attribution when it can be done truthfully
- **AND** it does not invent `AggregateRating`, rating values, review counts, review platforms, reviewer details, or business facts not visible on the page

#### Scenario: Approved rating summary is unavailable
- **WHEN** no approved public rating summary has been provided for publication
- **THEN** the site does not display or emit aggregate star ratings, rating values, or review counts

### Requirement: Ethical review request flow
The system SHALL support requesting honest voluntary post-tour feedback through approved external channels without incentives or scripted claims.

#### Scenario: Elyara requests feedback after a real tour
- **WHEN** Elyara sends a review request after a completed visit
- **THEN** the request asks for honest voluntary feedback and may point to the verified Google Business Profile
- **AND** the request does not offer incentives, pressure the visitor, ask for a specific rating, or ask the visitor to mention claims that were not part of their real experience

### Requirement: Competitive commercial SEO targeting
The system SHALL strengthen visible commercial SEO targeting for priority Granada tourism search intents while keeping all ranking, trust, and business claims truthful and visitor-facing.

#### Scenario: Crawler reads strengthened Home metadata
- **WHEN** a crawler reads the Spanish or English localized Home page
- **THEN** the page title and description emphasize Granada guided tours, private tours, Alhambra, Albaicin, and cultural walking routes in the selected language
- **AND** the metadata avoids guaranteed ranking claims, fake review claims, invented credentials, unsupported address data, and unavailable booking or payment promises

#### Scenario: Visitor reads strengthened Home content
- **WHEN** a visitor opens the localized Home page
- **THEN** the visible hero and introductory planning copy explain the main services in commercial visitor language rather than only poetic brand language
- **AND** the copy preserves Elyara's cultural tone and direct WhatsApp/email inquiry flow

#### Scenario: Visitor opens a priority SEO landing page
- **WHEN** a visitor opens a localized commercial landing for guided visits, private Alhambra, private guide, Albaicin, Albaicin and Sacromonte, day trips, family tours, or free-tour comparison intent
- **THEN** the page provides substantial useful planning content for that intent, including route fit, practical considerations, group/private suitability where relevant, and direct inquiry guidance
- **AND** the page links visibly to relevant tours, related landings, editorial context, and contact actions when matching public pages exist

#### Scenario: Search engine reads strengthened local trust signals
- **WHEN** a crawler reads pages with approved Google Business Profile, reviews, contact, or authority content
- **THEN** visible content and structured data use only approved public facts, real approved review text, approved profile links, service area, language support, and direct contact channels
- **AND** the page does not emit hidden-only review, rating, ranking, award, address, business-hours, or credential claims

#### Scenario: Visitor follows commercial discovery links
- **WHEN** a visitor uses Home, landing, tour, or article discovery links
- **THEN** the links form clear paths between high-intent planning pages, relevant tour detail pages, editorial guides, and external reservation actions
- **AND** each link points to a published localized page or approved external contact/profile destination
