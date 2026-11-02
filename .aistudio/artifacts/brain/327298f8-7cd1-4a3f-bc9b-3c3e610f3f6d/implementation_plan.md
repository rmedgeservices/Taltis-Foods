# Taltis Foods — Digital Flagship & Administrative Platform

A standalone digital flagship and e-commerce experience for Taltis Foods (Canadian food brand celebrated on Dragons' Den), dedicated to making authentic African meals easier to prepare at home, backed by an administrative dashboard for full product, recipe, and store management.

---

### User Review & Critical Decisions

> [!IMPORTANT]
> The following architectural and user experience decisions have been established based on your discovery requirements and confirmed preferences:

- **Confirmed Checkout Strategy**: Full-featured cart with test checkout workflow, address validation, tax calculation (GST/HST for Canadian provinces), instant order receipt generation, and clear production payment gateway readiness notes.
- **Confirmed Regional & Currency Setup**: Canadian Dollars (CAD) as primary store currency, paired with a full bilingual toggle (English & French) across all navigation, product metadata, spice indicators, nutritional info, and checkout flows.
- **Confirmed Admin Portal**: A secure, protected administrator portal (`/admin`) requiring configured credentials, with simulated multi-role authorization, complete product CRUD, image gallery management, recipe-product linkage, store locator editor, and inquiry inbox.
- **Product Identity Preservation**: Strict adherence to uploaded authoritative product photography for the 500 mL Jollof Sauce Mild and 500 mL Jollof Sauce Hot jars, preserving exact jar proportions, gold lids, bilingual labels, and maple leaf provenance without AI distortion.

---

### 1. Overview & Core Concept

- **What It Does**: Provides an independent, high-converting digital storefront and brand ecosystem for Taltis Foods. Customers can discover the 500 mL Jollof Sauce line (Mild, Hot, and Value Bundles), learn preparation methods in under 3 minutes, explore recipe tutorials, locate physical retail stockists across Canada, and order directly online. Authorized administrators can manage products, upload photographs, author recipes, update retail locations, and review wholesale requests.
- **Target Audience / Persona**:
  - *Home Cooks & Food Explorers*: Seeking convenient, authentic African flavours without lengthy cooking prep.
  - *Diaspora & Jollof Enthusiasts*: Looking for genuine, high-quality traditional bell pepper bases reminiscent of home.
  - *Retail & Foodservice Buyers*: Supermarkets, grocers, and restaurants seeking Dragons' Den-featured African cooking sauces and wholesale supply.
- **Key Value**: Delivers the brand promise — *"Great Jollof. Made Easier."* — through clear visual storytelling, concise benefit-led copy, and frictionless purchase pathways.

---

### 2. User Experience & Visual Design

#### Key User Flows

1. **Discovery to Purchase**:
   - Customer lands on the visual-first hero section showcasing the authentic 500 mL Jollof Sauce jars with freshly prepared Jollof rice, salmon, and grilled chicken.
   - Selects "Mild" or "Hot", inspects spice intensity indicators and nutritional information in an expandable accordion, chooses quantity, and adds to cart.
   - Slide-over cart displays free-shipping progress bar ($50+ CAD threshold), subtotal, and leads to an intuitive 3-step checkout (Contact $\to$ Shipping $\to$ Confirmation).

2. **Culinary Inspiration (How It Works & Recipes)**:
   - Visitor navigates to *How It Works* to view the 3-step preparation guide (Mix $\to$ Cook $\to$ Enjoy).
   - Explores the *Recipe Discovery Hub* filtered by meal type (Jollof Rice, Creamy Jollof Pasta, Jollof Pepper Soup, Peanut Butter Soup).
   - Each recipe detail page features cooking time, servings, step-by-step instructions, and a "Shop Sauce Used" one-click add-to-cart button.

3. **Store Locator Flow**:
   - Customer enters city (e.g. Toronto, Montreal, Calgary, Ottawa) or postal code to view stocking retailers (Metro, Sobeys, African speciality grocers), addresses, and map links.

4. **Wholesale & Foodservice Inquiry**:
   - B2B buyers fill out a dedicated wholesale inquiry form (Business Type, Annual Volume, Distribution Territory) with instant validation.

5. **Administrative Management**:
   - Store manager signs into `/admin` to view order metrics, update inventory/prices, create new recipes, upload photographs, and manage retail store listings.

#### Visual Identity & Theme

- **Aesthetic Direction**: Contemporary luxury culinary editorial. Warm, confident, grounded in rich West African culinary heritage with clean Canadian retail clarity. Zero generic AI slop, no floating capsule pills, and no cluttered flash-sale banners.
- **Color Palette & Mood**:
  - *Neutral Canvas (60%)*: Crisp off-white `#FAFAF9` (warm stone) with deep slate typography `#0F172A` and soft paper borders `#E2E8F0`.
  - *Structural Surfaces (30%)*: Clean white cards `#FFFFFF` with warm cream callout accents `#FDF8F3` and charcoal footer `#18181B`.
  - *Accent Budget (10%)*: Signature Taltis Jollof Red `#C8102E` (vibrant pepper red) paired with Warm Ochre `#D97706` for Mild accents, Herb Green `#15803D` for freshness notes, and Gold `#CA8A04` reflecting the iconic gold jar lids.
- **Typography & Hierarchy**:
  - *Display Headings*: `Plus Jakarta Sans` / `Outfit` (Bold, tight tracking, balanced line breaks).
  - *Body Text*: `DM Sans` (15–16px, high readability, 1.6 line height).
  - *Tabular Figures*: Monospace tabular numbers (`tabular-nums`) for currency, nutritional facts, and SKU weights.
- **Component Styling & Layout**:
  - Top Bar adhering to the strict 1-row, 3-zone contract: Brand Wordmark $\to$ 5 concise links (*Shop, How It Works, Recipes, Store Locator, Our Story*) $\to$ Action Zone (Language Toggle `EN | FR`, Search, Cart Drawer trigger).
  - Clean unboxed metadata with subtle typographic separators (`·`).
  - No thick left border stripes; single elevation with crisp hairline dividers (`border-slate-200`).

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: Direct Image Preservation vs. Generative Substitution**
  - *Chosen Approach*: Use the exact uploaded high-resolution product photographs for all jar displays, packaging specifications, and promotional meal collages. Generative assets are restricted strictly to complementary background dining ambiance.
  - *Why*: Ensures 100% packaging fidelity, exact label graphics, legal bilingual text, and authentic brand identity.
- **Decision 2: Standalone Full-Stack Architecture vs. Shopify Theme**
  - *Chosen Approach*: Independent React + TypeScript frontend with an integrated Express API server (`tsx server.ts`) and persistent in-memory/JSON datastore with migration capability.
  - *Why*: Delivers total ownership over design, zero vendor lock-in, ultra-fast load times, and custom administrative controls ready for Vercel/Netlify deployment.
- **Decision 3: Complete Bilingual Architecture (EN / FR)**
  - *Chosen Approach*: First-class dictionary and locale state manager providing seamless switching across public navigation, product facts, spice scales, cooking steps, and admin controls.
  - *Why*: Meets Canadian bilingual packaging regulations and accommodates national retail distribution in Quebec and across Canada.

---

### 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                        Taltis Foods Application                        │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  ┌───────────────────────┐            ┌─────────────────────────────┐  │
│  │   Customer Storefront │            │    Admin Dashboard (/admin) │  │
│  │  • Hero & Product PDP │            │  • Product CRUD & Pricing   │  │
│  │  • Slide-Over Cart    │            │  • Recipe Hub Management    │  │
│  │  • Recipe Discovery   │            │  • Store Locator Editor     │  │
│  │  • Store Locator      │            │  • Wholesale Inquiry Inbox  │  │
│  │  • Bilingual EN / FR  │            │  • Image Asset Manager      │  │
│  └───────────┬───────────┘            └──────────────┬──────────────┘  │
│              │                                       │                 │
│              ▼                                       ▼                 │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │               Client State (Cart, Locale, Filters)               │  │
│  └──────────────────────────────────┬───────────────────────────────┘  │
│                                     │                                  │
│                                     ▼                                  │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │                     API Routes (/api/*)                          │  │
│  │  • GET/POST /api/products          • GET/POST /api/recipes       │  │
│  │  • GET/POST /api/stores            • POST /api/inquiries         │  │
│  │  • POST /api/checkout              • POST /api/auth/login        │  │
│  └──────────────────────────────────┬───────────────────────────────┘  │
│                                     │                                  │
│                                     ▼                                  │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │           Core Data Store (Products, Stores, Recipes, Orders)    │  │
│  └──────────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
```

#### Data Entities & Collections

1. **Product**: `id`, `slug`, `name_en`, `name_fr`, `tagline_en`, `tagline_fr`, `price_cad`, `volume_ml`, `spice_level` ('Mild' | 'Hot' | 'Extra Hot'), `ingredients_en`, `ingredients_fr`, `nutrition`, `allergens_en`, `allergens_fr`, `images` (array of asset paths), `featured`, `inventory_count`, `category` ('sauces' | 'bundles').
2. **Recipe**: `id`, `slug`, `title_en`, `title_fr`, `prep_time_mins`, `cook_time_mins`, `servings`, `difficulty`, `product_id`, `ingredients`, `instructions`, `image_url`.
3. **Store**: `id`, `name`, `banner` (e.g., 'Metro', 'Sobeys', 'Independent'), `street_address`, `city`, `province`, `postal_code`, `lat`, `lng`, `phone`.
4. **Inquiry**: `id`, `type` ('wholesale' | 'contact'), `company_name`, `contact_name`, `email`, `phone`, `message`, `status`, `created_at`.
5. **Order**: `id`, `items`, `subtotal_cad`, `tax_cad`, `shipping_cad`, `total_cad`, `shipping_address`, `status`, `created_at`.

---

### Implementation Phases

- **Phase 1**: Brand Design System, Typography, Color Palette, and Bilingual Dictionary Setup.
- **Phase 2**: Core Storefront Layout (Top Bar Contract, Announcement Banner, Footer, Route State).
- **Phase 3**: Hero Showcase & Product Detail Engine utilizing authentic uploaded photography.
- **Phase 4**: Interactive Shopping Bag, Cart Drawer, and Canadian Province Tax Checkout Flow.
- **Phase 5**: How It Works, Recipe Discovery Hub with "Shop Sauce" integration, and Dragons' Den Credibility strip.
- **Phase 6**: Store Locator with search by city/postal code and retail chain filtering.
- **Phase 7**: Wholesale & Foodservice Portal with business inquiry intake.
- **Phase 8**: Protected Admin Dashboard (`/admin`) with full product, recipe, and store CRUD.
- **Phase 9**: Rigorous Verification, Linting, and Compilation.
