## Purpose

Provides a multilingual public editorial blog for Granada stories, news, curiosities, recommendations, and cultural context that supports discovery of Elyara's tours.

## Requirements

### Requirement: Editorial blog listing
The system SHALL provide a public localized blog listing page that presents published editorial articles for the selected language.

#### Scenario: Visitor opens the Spanish blog listing
- **WHEN** a visitor navigates to `/es/blog/`
- **THEN** the system displays Spanish published articles with article titles, summaries, imagery when available, category labels, and links to article detail pages

#### Scenario: Visitor opens the English blog listing
- **WHEN** a visitor navigates to `/en/blog/`
- **THEN** the system displays English published articles with article titles, summaries, imagery when available, category labels, and links to article detail pages

#### Scenario: Draft article exists
- **WHEN** an editorial article is marked as unpublished
- **THEN** the system does not include that article in public blog listings or generate a public article detail page for it

### Requirement: Editorial article detail pages
The system SHALL provide a statically generated public detail page for each published editorial article.

#### Scenario: Visitor opens an article detail page
- **WHEN** a visitor opens a published localized article URL
- **THEN** the system displays the article title, editorial category, publication date, summary or introduction, imagery when available, and the article body content

#### Scenario: Visitor opens an unpublished article URL
- **WHEN** a visitor attempts to open an unpublished editorial article URL
- **THEN** the system does not expose the unpublished article as a public generated page

### Requirement: Editorial content model
The system SHALL support data-driven editorial article entries with structured metadata suitable for a personality-led Granada journal.

#### Scenario: Published article entry exists
- **WHEN** a published article entry exists with required metadata and body content
- **THEN** the system can present that article in the blog listing and article detail page without requiring a manually copied full page template

#### Scenario: Article has an editorial category
- **WHEN** an article is categorized as news, curiosity, recommendation, story, legend, history, or route inspiration
- **THEN** the system displays the category in the public article presentation

### Requirement: Editorial imagery framing
The system SHALL present available editorial article imagery with framing that keeps the intended subject recognizable in localized blog listing cards and article detail pages.

#### Scenario: Vertical article image appears in blog listing
- **WHEN** a published Spanish or English editorial article uses a vertical image
- **THEN** the localized blog listing displays that article image in a way that keeps the meaningful subject visible rather than cropping to an uninformative area

#### Scenario: Vertical article image appears on detail page
- **WHEN** a visitor opens a published Spanish or English editorial article detail page that uses a vertical image
- **THEN** the article detail image displays with framing that keeps the meaningful subject visible rather than cropping to an uninformative area

#### Scenario: Existing article image metadata remains aligned
- **WHEN** an editorial article image is displayed with adjusted framing
- **THEN** the page metadata and structured data continue to reference the same selected image used by the visible article presentation

#### Scenario: Other editorial images retain usable presentation
- **WHEN** published editorial articles use existing horizontal or square images
- **THEN** their listing and detail imagery remains visibly meaningful and does not lose the article title, category, summary, publication date, links, or language behavior

### Requirement: Multilingual editorial experience
The system SHALL support Spanish and English editorial article content, navigation labels, metadata, and language alternates.

#### Scenario: Article has translated versions
- **WHEN** Spanish and English article entries represent the same editorial topic
- **THEN** the system exposes language-aware alternate metadata between the localized article URLs

#### Scenario: Article exists in only one language
- **WHEN** an editorial article exists in one language but has no translated counterpart
- **THEN** the system still publishes the available localized article without requiring a matching article in the other language

### Requirement: Editorial SEO and structured data
The system SHALL provide search engine metadata for blog listing and article detail pages, including structured data for article pages and relevant listing relationships.

#### Scenario: Search engine reads the blog listing
- **WHEN** a crawler reads a localized blog listing page
- **THEN** the page exposes an appropriate title, description, canonical URL, language-aware metadata, and social metadata
- **AND** the page exposes structured data describing the visible published articles as a public list

#### Scenario: Search engine reads an article detail page
- **WHEN** a crawler reads a published editorial article detail page
- **THEN** the page includes title, description, canonical URL, open graph metadata, and JSON-LD structured data describing the article
- **AND** the article structured data includes publication and modification dates when available
- **AND** the article structured data is connected to the Elyara business or publisher identity
- **AND** the page exposes breadcrumb structured data for the localized blog hierarchy

### Requirement: Editorial-to-tour discovery
The system SHALL allow editorial articles to connect readers to relevant published tours, commercial discovery pages, and external WhatsApp and email reservation actions without introducing an internal booking or payment flow.

#### Scenario: Article references related tours
- **WHEN** a published article is associated with one or more published tours in the same language
- **THEN** the article detail page presents links or calls to action to those related tour pages
- **AND** those links are visible page content rather than metadata-only relationships

#### Scenario: Article supports a commercial search intent
- **WHEN** a published article relates to a topic served by a localized commercial tour landing page
- **THEN** the article detail page provides a contextual link to that commercial landing page for the same locale

#### Scenario: Visitor follows a reservation call to action from editorial content
- **WHEN** a visitor activates a reservation-oriented action from editorial content that is not tied to one concrete tour
- **THEN** the selected WhatsApp action opens `https://wa.me/34611126979` with localized prefilled inquiry text rather than an internal checkout or booking conversation
- **AND** the selected email action opens a clean `mailto:elyaratours@gmail.com` link rather than an internal checkout or booking conversation
- **AND** the email action does not prefill subject or body text

#### Scenario: Visitor reserves a specific related tour
- **WHEN** a visitor reaches a specific related tour and activates that tour's reservation action
- **THEN** the system offers external WhatsApp and email reservation actions for the selected tour rather than an internal checkout or booking conversation
- **AND** the WhatsApp action identifies the selected tour name in localized prefilled text
- **AND** the email action opens a `mailto:elyaratours@gmail.com` link with a prefilled subject containing only the selected tour name

### Requirement: Editorial topic clusters for Granada discovery
The system SHALL support published localized editorial content that targets useful Granada visitor search intents and connects those topics to relevant Elyara routes.

#### Scenario: Visitor reads a Granada guide article
- **WHEN** a visitor opens a published localized article about Granada neighborhoods, monuments, routes, practical visit planning, local symbols, legends, or cultural context
- **THEN** the article provides substantial visitor-facing content in the selected language
- **AND** the article can connect the topic to relevant published tours when those tours exist

#### Scenario: Blog listing presents discovery breadth
- **WHEN** a visitor opens a localized blog listing with published articles from multiple Granada discovery topics
- **THEN** the listing presents those articles with titles, excerpts, imagery when available, category labels, and links to article detail pages

#### Scenario: Search engine reads article image metadata
- **WHEN** a published editorial article has a visible article image
- **THEN** the article metadata and structured data reference the same selected image used by the visible article presentation

### Requirement: Granada pomegranate symbol article localization
The system SHALL publish the Granada pomegranate symbol editorial topic in both the Spanish `Cuaderno` and the English `Journal`.

#### Scenario: English visitor sees the Granada pomegranate symbol article in Journal
- **WHEN** a visitor navigates to `/en/blog/`
- **THEN** the system displays a published English article about why pomegranates appear throughout Granada

#### Scenario: English visitor opens the Granada pomegranate symbol article
- **WHEN** a visitor opens `/en/blog/why-are-there-pomegranates/`
- **THEN** the system displays the English article title, summary, category, publication date, image when available, and article body content

#### Scenario: Granada pomegranate symbol article exposes language alternates
- **WHEN** Spanish and English visitors view either localized Granada pomegranate symbol article page
- **THEN** the system exposes language-aware alternate metadata between the Spanish and English article URLs

### Requirement: Selected imagery for localized editorial article pairs
The system SHALL use the selected sunset photo for the localized Albaicin sunset article pair and the selected granado photo for the localized Granada pomegranate article pair, with localized alternative text for each article.

#### Scenario: Spanish Albaicin article uses sunset photo
- **WHEN** a visitor views the Spanish `Cuaderno` listing or opens `/es/blog/albaicin-atardecer/`
- **THEN** the article `El Albaicin al atardecer: una forma lenta de entrar en Granada` displays the selected sunset photo with Spanish alternative text

#### Scenario: English Albaicin article uses sunset photo
- **WHEN** a visitor views the English `Journal` listing or opens `/en/blog/albaicin-sunset/`
- **THEN** the article `The Albaicin at sunset: a slower way into Granada` displays the selected sunset photo with English alternative text

#### Scenario: Spanish pomegranate article uses granado photo
- **WHEN** a visitor views the Spanish `Cuaderno` listing or opens `/es/blog/por-que-hay-granadas/`
- **THEN** the article `Por que hay granadas por toda Granada` displays the selected granado photo with Spanish alternative text

#### Scenario: English pomegranate article uses granado photo
- **WHEN** a visitor views the English `Journal` listing or opens `/en/blog/why-are-there-pomegranates/`
- **THEN** the article `Why are there pomegranates all over Granada?` displays the selected granado photo with English alternative text

#### Scenario: Article metadata uses selected photos
- **WHEN** search engines or social platforms read any updated article page
- **THEN** the page metadata references the same selected photo shown as that article's visible image

### Requirement: Editorial SEO topic clusters
The system SHALL support Spanish and English editorial topic clusters that target useful Granada visitor search intents and connect those topics to relevant tours and commercial discovery pages.

#### Scenario: Spanish visitor reads a Granada search-intent article
- **WHEN** a visitor opens a Spanish article about Granada neighborhoods, monuments, routes, practical planning, local symbols, legends, or cultural context
- **THEN** the article provides substantial Spanish visitor-facing content for that search intent
- **AND** it links to relevant Spanish tours or commercial discovery pages when those pages exist

#### Scenario: English visitor reads a Granada search-intent article
- **WHEN** a visitor opens an English article about Granada neighborhoods, monuments, routes, practical planning, local symbols, legends, or cultural context
- **THEN** the article provides substantial English visitor-facing content for that search intent
- **AND** it links to relevant English tours or commercial discovery pages when those pages exist

#### Scenario: Blog listing presents clustered discovery paths
- **WHEN** a visitor opens a localized blog listing
- **THEN** the listing presents published editorial articles across multiple Granada discovery topics
- **AND** articles keep localized metadata, category labels, summaries, imagery when available, and links to article detail pages

### Requirement: Editorial-to-commercial SEO linking
The system SHALL expose visible contextual links between editorial articles and localized SEO landing pages when an article supports a commercial or route-discovery search intent.

#### Scenario: Article supports a commercial landing topic
- **WHEN** a published article discusses a topic served by a localized SEO or commercial landing page
- **THEN** the article detail page links to that localized landing page as visible content
- **AND** the link does not replace existing related tour links or external reservation actions

#### Scenario: Commercial page references relevant editorial context
- **WHEN** a localized SEO or commercial landing page is connected to published editorial context
- **THEN** the landing page links to relevant published articles for the same locale

### Requirement: Editorial metadata depth
The system SHALL expose article metadata that supports search and social previews for published blog content.

#### Scenario: Search engine reads a published article
- **WHEN** a crawler reads a published editorial article page
- **THEN** the page exposes title, description, canonical URL, language alternates when a translation exists, article publication metadata, article modification metadata when available, and article structured data

#### Scenario: Article has social imagery
- **WHEN** a published article has a visible image
- **THEN** the article page metadata references the same image for search and social preview
- **AND** the metadata includes localized alternative text when available

### Requirement: Editorial content expansion safeguards
The system SHALL keep new editorial SEO content useful, localized, and connected without publishing thin or placeholder pages.

#### Scenario: New editorial article is published
- **WHEN** a new editorial article is marked as published
- **THEN** the article contains localized body content, a localized summary, SEO description, publication date, category, and relevant internal links when matching pages exist

#### Scenario: Editorial article is not ready
- **WHEN** an editorial article lacks sufficient localized visitor-facing content or is marked unpublished
- **THEN** the system does not expose that article in public listings, sitemap entries, or generated article detail pages

### Requirement: Editorial search-intent expansion
The system SHALL publish localized editorial articles that answer useful Granada visitor questions and connect those answers to relevant Elyara routes or commercial discovery pages.

#### Scenario: Spanish visitor reads expanded Granada guidance
- **WHEN** a visitor opens a Spanish editorial article created for Granada planning, neighborhoods, monuments, routes, family travel, day-trip decisions, legends, symbols, or cultural context
- **THEN** the article provides substantial Spanish visitor-facing guidance for that topic
- **AND** it links to relevant Spanish tours, SEO landing pages, or inquiry paths when those pages exist

#### Scenario: English visitor reads expanded Granada guidance
- **WHEN** a visitor opens an English editorial article created for Granada planning, neighborhoods, monuments, routes, family travel, day-trip decisions, legends, symbols, or cultural context
- **THEN** the article provides substantial English visitor-facing guidance for that topic
- **AND** it links to relevant English tours, SEO landing pages, or inquiry paths when those pages exist

#### Scenario: Editorial content supports landing pages
- **WHEN** a localized article explains a topic served by a localized SEO landing page
- **THEN** the article includes visible contextual links to that landing page
- **AND** the matching landing page may link back to the article as supporting visitor context

### Requirement: Editorial SEO publication safeguards
The system SHALL keep expanded editorial SEO content localized, useful, and safe to index.

#### Scenario: New SEO article is published
- **WHEN** a new localized SEO-oriented article is marked as published
- **THEN** it includes a localized title, summary, SEO description, publication date, category, body content, canonical metadata, and visible internal links when relevant matches exist
- **AND** it appears in the localized blog listing and sitemap

#### Scenario: SEO article is incomplete
- **WHEN** a localized SEO-oriented article lacks substantial visitor-facing content, required metadata, or publication approval
- **THEN** the system does not expose it in public listings, sitemap entries, generated article pages, or structured data

#### Scenario: Search engine reads expanded editorial metadata
- **WHEN** a crawler reads a published expanded editorial article
- **THEN** the page exposes article metadata, language alternates when a translation exists, breadcrumb structured data, article structured data, and social preview metadata based on visible page content

### Requirement: Local SEO long-tail editorial coverage
The system SHALL publish useful localized editorial content for long-tail Granada guide and route search intents that supports discovery of Elyara routes without duplicating thin landing pages.

#### Scenario: Spanish visitor researches choosing a private guide in Granada
- **WHEN** a Spanish visitor opens editorial content about choosing a private guide or private guided visit in Granada
- **THEN** the article provides substantial visitor-facing guidance about what a private guide can include, route focus, language, pace, group needs, and booking by WhatsApp or email
- **AND** it links to relevant Spanish tour pages, SEO landing pages, or inquiry paths when those pages exist

#### Scenario: English visitor researches choosing a private guide in Granada
- **WHEN** an English visitor opens editorial content about choosing a private guide or private guided visit in Granada
- **THEN** the article provides substantial visitor-facing guidance about what a private guide can include, route focus, language, pace, group needs, and booking by WhatsApp or email
- **AND** it links to relevant English tour pages, SEO landing pages, or inquiry paths when those pages exist

#### Scenario: Visitor researches an Alhambra guided visit before booking
- **WHEN** a visitor opens localized editorial content about guided Alhambra visits or private Alhambra tours
- **THEN** the article explains visitor-relevant booking considerations such as tickets, timing, realistic itinerary planning, private-group fit, and alternatives if access is unavailable
- **AND** it does not promise unavailable access, internal ticket sales, or checkout inside the website

#### Scenario: Visitor researches an Albaicin route or guided walk
- **WHEN** a visitor opens localized editorial content about an Albaicin tour, guided walk, viewpoints, or Albaicin and Sacromonte route choice
- **THEN** the article provides practical and cultural guidance about route focus, slopes, timing, viewpoints, group pace, and how the route connects to Granada's history
- **AND** it links to matching Albaicin tours, SEO landing pages, or related editorial context when those pages exist

#### Scenario: Visitor compares free tour and private guided visit options
- **WHEN** a visitor opens localized editorial content comparing free tours, cultural guided routes, and private guided visits in Granada
- **THEN** the article explains differences in pricing model, group size, flexibility, route depth, booking expectations, and fit for different travelers
- **AND** it remains factual and visitor-facing rather than claiming Elyara is the best option without approved evidence

### Requirement: Editorial local authority safeguards
The system SHALL keep local SEO editorial content trustworthy by avoiding fake authority signals while Google Business Profile verification and real reviews are not yet available.

#### Scenario: Editorial content references business trust
- **WHEN** an editorial article mentions Elyara as a guide-led Granada route provider
- **THEN** it may reference approved facts such as public name, Granada service area, Spanish/English support, direct WhatsApp/email contact, and external reservation flow
- **AND** it does not claim verified Google Business Profile status, review ratings, awards, official credentials, or third-party endorsements unless those facts are approved and visible

#### Scenario: Editorial content supports commercial discovery
- **WHEN** a localized article targets a long-tail Granada tourism search intent
- **THEN** it connects readers to relevant published tours, SEO landing pages, contact, or tailor-made inquiry paths when those pages exist
- **AND** it does not replace route detail pages with duplicated tour descriptions

### Requirement: Priority commercial editorial clusters
The system SHALL publish substantial localized editorial clusters that answer priority Granada visitor questions and support discovery of related Elyara tours and commercial landing pages.

#### Scenario: Spanish visitor researches a priority Granada planning topic
- **WHEN** a Spanish visitor opens editorial content about private guide choice, Alhambra visit planning, Albaicin/Sacromonte route choice, free-tour versus private-visit comparison, family routes, day trips, or first-day Granada planning
- **THEN** the article provides substantial Spanish visitor-facing guidance tailored to that topic
- **AND** it links to relevant Spanish tours, SEO landing pages, contact, tailor-made inquiry, or related articles when those pages exist

#### Scenario: English visitor researches a priority Granada planning topic
- **WHEN** an English visitor opens editorial content about private guide choice, Alhambra visit planning, Albaicin/Sacromonte route choice, free-tour versus private-visit comparison, family routes, day trips, or first-day Granada planning
- **THEN** the article provides substantial English visitor-facing guidance tailored to that topic
- **AND** it links to relevant English tours, SEO landing pages, contact, tailor-made inquiry, or related articles when those pages exist

#### Scenario: Editorial content supports a commercial landing page
- **WHEN** a localized editorial article explains a topic served by a localized commercial or SEO landing page
- **THEN** the article includes visible contextual links to that landing page and relevant tour detail pages
- **AND** the matching landing page can link back to the article as supporting visitor context

### Requirement: Editorial content quality safeguards for SEO expansion
The system SHALL keep expanded SEO editorial content useful, localized, and safe to index rather than publishing thin, duplicated, or placeholder articles.

#### Scenario: New or expanded SEO article is published
- **WHEN** a new or expanded localized article is marked as published
- **THEN** it includes localized title, excerpt, SEO description, publication date, category, body content, and visible internal links when relevant pages exist
- **AND** the body content answers the article's visitor question directly instead of serving only as a doorway to commercial pages

#### Scenario: SEO article is incomplete or duplicative
- **WHEN** a localized SEO-oriented article lacks substantial visitor-facing content, duplicates another page's route description as its main body, or is not approved for publication
- **THEN** the system does not expose it in public listings, sitemap entries, generated article pages, or structured data

#### Scenario: Search engine reads expanded editorial metadata
- **WHEN** a crawler reads an expanded published editorial article
- **THEN** the page exposes article metadata, canonical URL, language alternates when a translation exists, breadcrumb structured data, article structured data, and social preview metadata based on visible page content
- **AND** metadata does not claim ratings, review counts, third-party endorsements, official credentials, or guaranteed ranking outcomes unless those facts are approved and visible

### Requirement: Editorial cluster navigation
The system SHALL make topic clusters discoverable through visible links between related articles, tours, and landing pages in the same locale.

#### Scenario: Visitor reads a cluster article
- **WHEN** a visitor reads an article that belongs to a broader Granada planning cluster
- **THEN** the article provides visible links to related articles, relevant tours, or matching landing pages when those pages exist
- **AND** those links are localized to the visitor's current language whenever localized targets exist

#### Scenario: Visitor opens the blog listing after cluster expansion
- **WHEN** a visitor opens a localized blog listing after priority cluster articles are published
- **THEN** the listing presents the published articles with localized titles, excerpts, imagery when available, category labels, publication dates, and links to detail pages
- **AND** unpublished drafts remain absent from public listings and generated pages

### Requirement: Bilingual commercial editorial clusters
The system SHALL publish Spanish and English editorial clusters that support high-intent Granada visitor searches equally across both languages.

#### Scenario: Spanish visitor researches priority buying-intent topics
- **WHEN** a Spanish visitor opens editorial content about private Alhambra tours, free tour versus private visit choice, Granada in two days, Albaicin and Sacromonte route choice, day trips from Malaga, or choosing a private guide in Granada
- **THEN** the article provides substantial Spanish visitor-facing guidance tailored to that topic
- **AND** it links to relevant Spanish tours, SEO landing pages, contact, tailor-made inquiry, related articles, or WhatsApp/email inquiry paths when those pages exist

#### Scenario: English visitor researches priority buying-intent topics
- **WHEN** an English visitor opens editorial content about private Alhambra tours, free tour versus private visit choice, Granada in two days, Albaicin and Sacromonte route choice, day trips from Malaga, or choosing a private guide in Granada
- **THEN** the article provides substantial English visitor-facing guidance tailored to that topic
- **AND** it links to relevant English tours, SEO landing pages, contact, tailor-made inquiry, related articles, or WhatsApp/email inquiry paths when those pages exist

### Requirement: Editorial cluster internal linking
The system SHALL make commercial editorial clusters discoverable through visible localized links between related articles, tours, SEO landings, and inquiry pages.

#### Scenario: Article supports a commercial landing topic
- **WHEN** a localized article explains a topic served by a localized SEO landing page
- **THEN** the article includes visible contextual links to that landing page and relevant tour detail pages
- **AND** those links do not replace existing reservation actions or related tour links

#### Scenario: Landing page has supporting editorial context
- **WHEN** a localized SEO landing page has related published editorial articles for the same search intent
- **THEN** the landing page may display links to those articles as supporting visitor context
- **AND** those links are localized to the visitor's current language whenever localized targets exist

#### Scenario: Blog listing presents priority clusters
- **WHEN** a visitor opens a localized blog listing after priority cluster articles are published
- **THEN** the listing presents the published cluster articles with localized titles, excerpts, imagery when available, category labels, publication dates, and links to detail pages
- **AND** unpublished drafts remain absent from public listings and generated pages

### Requirement: Editorial SEO quality safeguards for clusters
The system SHALL keep cluster articles useful, localized, and safe to index rather than publishing thin or duplicated commercial pages.

#### Scenario: New cluster article is published
- **WHEN** a new localized cluster article is marked as published
- **THEN** it includes a localized title, excerpt, SEO description, publication date, category, body content, canonical metadata, and visible internal links when relevant targets exist
- **AND** the body content answers the article's visitor question directly instead of serving only as a doorway to commercial pages

#### Scenario: Cluster article is incomplete or duplicative
- **WHEN** a localized cluster article lacks substantial visitor-facing content, duplicates another route or landing page as its main body, or is not approved for publication
- **THEN** the system does not expose it in public listings, sitemap entries, generated article pages, or structured data

#### Scenario: Search engine reads cluster article metadata
- **WHEN** a crawler reads a published cluster article
- **THEN** the page exposes article metadata, canonical URL, language alternates when a translation exists, breadcrumb structured data, article structured data, and social preview metadata based on visible page content
- **AND** metadata does not claim ratings, review counts, third-party endorsements, official credentials, or guaranteed ranking outcomes unless those facts are approved and visible

### Requirement: High-intent editorial SEO clusters
The system SHALL expand localized editorial content around high-intent Granada planning topics and connect those articles to relevant commercial landings and tours.

#### Scenario: Spanish visitor reads a high-intent Granada planning article
- **WHEN** a Spanish visitor opens a published article about Granada visit planning, Alhambra decisions, Albaicin and Sacromonte, free-tour comparison, Granada with children, or day trips from nearby cities
- **THEN** the article provides substantial visitor-facing guidance in Spanish for that search intent
- **AND** it links visibly to relevant Spanish tours, SEO landings, or contact actions when matching pages exist

#### Scenario: English visitor reads a high-intent Granada planning article
- **WHEN** an English visitor opens a published article about Granada visit planning, Alhambra decisions, Albaicin and Sacromonte, free-tour comparison, Granada with children, or day trips from nearby cities
- **THEN** the article provides substantial visitor-facing guidance in English for that search intent
- **AND** it links visibly to relevant English tours, SEO landings, or contact actions when matching pages exist

#### Scenario: Blog supports commercial topic clusters
- **WHEN** the localized blog listing and article detail pages are generated
- **THEN** published high-intent articles expose localized titles, descriptions, canonical URLs, article metadata, and related links that support commercial discovery
- **AND** the content remains useful editorial guidance rather than keyword-only placeholder text

#### Scenario: Editorial content avoids unsupported SEO claims
- **WHEN** editorial content discusses choosing tours, guides, routes, reviews, or search-visible services
- **THEN** the content does not claim guaranteed Google rankings, fake ratings, unapproved credentials, awards, physical address, business hours, or unsupported booking/payment capabilities

### Requirement: Guide-authored editorial attribution
The system SHALL support approved guide authorship for published editorial articles so cultural guidance can be attributed to Laura Hdez. León when appropriate.

#### Scenario: Visitor reads an article authored by Laura
- **WHEN** a published localized article is attributed to Laura Hdez. León
- **THEN** the article detail page displays Laura Hdez. León as the visible author
- **AND** the article metadata and structured data identify the same visible author
- **AND** the authorship does not remove publication date, category, imagery, related tours, related landings, or existing reservation actions

#### Scenario: Search engine reads article author data
- **WHEN** a crawler reads a published article attributed to Laura Hdez. León
- **THEN** the article structured data uses a `Person` author representation for Laura
- **AND** the author data remains connected to Elyara as publisher or business identity where applicable
- **AND** the author data does not invent awards, ratings, physical address, business hours, social profiles, or unsupported credentials

#### Scenario: Article remains organization-authored
- **WHEN** an article is not approved for Laura-specific attribution
- **THEN** the article may remain attributed to Elyara Tours Granada
- **AND** the public page and structured data keep visible authorship and machine-readable authorship consistent

### Requirement: Editorial expertise consistency
The system SHALL keep editorial authorship, authority-page guide facts, and commercial discovery pages consistent when they reference Laura Hdez. León's expertise.

#### Scenario: Visitor follows author or expertise context
- **WHEN** editorial content references Laura's perspective, training, or guide experience
- **THEN** the content provides a visible path to fuller authority context when appropriate
- **AND** it keeps claims consistent with the approved public guide facts

#### Scenario: Editorial content mentions credentials
- **WHEN** an editorial article mentions Laura's guide credential or training
- **THEN** the mention remains accurate, visible, and consistent with the authority page
- **AND** it does not add jurisdiction, license number, awards, rankings, or third-party endorsements that are not approved for publication
