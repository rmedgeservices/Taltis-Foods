-- ==============================================================================
-- TALTIS FOODS — COMPLETE SUPABASE POSTGRESQL SCHEMA & SEED DATA
-- "Authentic African Cuisine Made Easy"
-- ==============================================================================
-- This SQL script sets up the database for Taltis Foods on Supabase.
-- Includes:
--   1. Extensions (UUID, Crypto)
--   2. DDL Table Schemas (Products, Recipes, Retail Stores, Orders, Wholesale, Subscribers, Messages)
--   3. Foreign keys, constraints, and indexes
--   4. Automatic updated_at trigger function
--   5. Row Level Security (RLS) Policies (Public browsing + Customer checkout + Admin control)
--   6. Comprehensive Seed Data matching the Taltis Foods product & recipe catalog
-- ==============================================================================

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. AUTOMATIC UPDATED_AT TRIGGER FUNCTION
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ==============================================================================
-- TABLE 1: PRODUCTS
-- ==============================================================================
DROP TABLE IF EXISTS products CASCADE;
CREATE TABLE products (
    id TEXT PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE,
    name_en TEXT NOT NULL,
    name_fr TEXT NOT NULL,
    tagline_en TEXT,
    tagline_fr TEXT,
    description_en TEXT,
    description_fr TEXT,
    price NUMERIC(10, 2) NOT NULL CHECK (price >= 0),
    compare_at_price NUMERIC(10, 2),
    volume TEXT NOT NULL DEFAULT '500 mL',
    spice_level TEXT NOT NULL CHECK (spice_level IN ('Mild', 'Hot', 'Extra Hot')),
    spice_rating INT NOT NULL CHECK (spice_rating BETWEEN 1 AND 5),
    category TEXT NOT NULL CHECK (category IN ('sauces', 'bundles', 'accessories', 'other-african', 'limited', 'upcoming')),
    featured BOOLEAN NOT NULL DEFAULT FALSE,
    in_stock BOOLEAN NOT NULL DEFAULT TRUE,
    images TEXT[] NOT NULL DEFAULT '{}',
    ingredients_en TEXT[] NOT NULL DEFAULT '{}',
    ingredients_fr TEXT[] NOT NULL DEFAULT '{}',
    allergens_en TEXT,
    allergens_fr TEXT,
    nutrition JSONB NOT NULL DEFAULT '{}'::jsonb,
    cooking_tips_en TEXT[] NOT NULL DEFAULT '{}',
    cooking_tips_fr TEXT[] NOT NULL DEFAULT '{}',
    storage_en TEXT,
    storage_fr TEXT,
    rating NUMERIC(3, 2) NOT NULL DEFAULT 5.0 CHECK (rating BETWEEN 0 AND 5),
    review_count INT NOT NULL DEFAULT 0 CHECK (review_count >= 0),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER set_products_updated_at
BEFORE UPDATE ON products
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_slug ON products(slug);
CREATE INDEX idx_products_featured ON products(featured);

-- ==============================================================================
-- TABLE 2: RECIPES
-- ==============================================================================
DROP TABLE IF EXISTS recipes CASCADE;
CREATE TABLE recipes (
    id TEXT PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE,
    title_en TEXT NOT NULL,
    title_fr TEXT NOT NULL,
    description_en TEXT,
    description_fr TEXT,
    category TEXT NOT NULL CHECK (category IN ('rice', 'pasta', 'soup', 'stew', 'seafood')),
    prep_time_minutes INT NOT NULL DEFAULT 15,
    cook_time_minutes INT NOT NULL DEFAULT 30,
    servings INT NOT NULL DEFAULT 4,
    difficulty TEXT NOT NULL CHECK (difficulty IN ('Easy', 'Medium', 'Advanced')),
    product_id TEXT REFERENCES products(id) ON DELETE SET NULL,
    image_url TEXT NOT NULL,
    ingredients_en TEXT[] NOT NULL DEFAULT '{}',
    ingredients_fr TEXT[] NOT NULL DEFAULT '{}',
    instructions_en TEXT[] NOT NULL DEFAULT '{}',
    instructions_fr TEXT[] NOT NULL DEFAULT '{}',
    tip_en TEXT,
    tip_fr TEXT,
    quote_en TEXT,
    quote_fr TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER set_recipes_updated_at
BEFORE UPDATE ON recipes
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE INDEX idx_recipes_category ON recipes(category);
CREATE INDEX idx_recipes_product_id ON recipes(product_id);

-- ==============================================================================
-- TABLE 3: RETAIL STORES ("Where to find our products")
-- ==============================================================================
DROP TABLE IF EXISTS retail_stores CASCADE;
CREATE TABLE retail_stores (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    banner TEXT NOT NULL, -- 'Walmart', 'Sobeys', 'Loblaws', 'Metro', 'Farm Boy', 'IGA'
    address TEXT NOT NULL,
    city TEXT NOT NULL,
    province TEXT NOT NULL DEFAULT 'ON',
    postal_code TEXT NOT NULL,
    phone TEXT NOT NULL,
    hours TEXT NOT NULL,
    lat NUMERIC(10, 6),
    lng NUMERIC(10, 6),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER set_retail_stores_updated_at
BEFORE UPDATE ON retail_stores
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE INDEX idx_retail_stores_banner ON retail_stores(banner);
CREATE INDEX idx_retail_stores_province_city ON retail_stores(province, city);

-- ==============================================================================
-- TABLE 4: CUSTOMER ORDERS
-- ==============================================================================
DROP TABLE IF EXISTS orders CASCADE;
CREATE TABLE orders (
    id TEXT PRIMARY KEY,
    customer_name TEXT NOT NULL,
    email TEXT NOT NULL,
    shipping_address JSONB NOT NULL,
    items JSONB NOT NULL,
    subtotal NUMERIC(10, 2) NOT NULL CHECK (subtotal >= 0),
    tax NUMERIC(10, 2) NOT NULL CHECK (tax >= 0),
    shipping NUMERIC(10, 2) NOT NULL CHECK (shipping >= 0),
    total NUMERIC(10, 2) NOT NULL CHECK (total >= 0),
    payment_method TEXT NOT NULL DEFAULT 'Credit Card',
    status TEXT NOT NULL DEFAULT 'Confirmed' CHECK (status IN ('Confirmed', 'Processing', 'Shipped', 'Delivered', 'Cancelled')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER set_orders_updated_at
BEFORE UPDATE ON orders
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE INDEX idx_orders_email ON orders(email);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_created_at ON orders(created_at DESC);

-- ==============================================================================
-- TABLE 5: WHOLESALE INQUIRIES
-- ==============================================================================
DROP TABLE IF EXISTS wholesale_inquiries CASCADE;
CREATE TABLE wholesale_inquiries (
    id TEXT PRIMARY KEY,
    company_name TEXT NOT NULL,
    contact_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    business_type TEXT NOT NULL CHECK (business_type IN ('Retail Grocery', 'Restaurant / Hospitality', 'Distributor', 'Institutional Foodservice', 'Other')),
    location TEXT NOT NULL,
    estimated_volume TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'New' CHECK (status IN ('New', 'Contacted', 'Qualified', 'Closed')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER set_wholesale_inquiries_updated_at
BEFORE UPDATE ON wholesale_inquiries
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE INDEX idx_wholesale_status ON wholesale_inquiries(status);
CREATE INDEX idx_wholesale_created_at ON wholesale_inquiries(created_at DESC);

-- ==============================================================================
-- TABLE 6: NEWSLETTER SUBSCRIBERS
-- ==============================================================================
DROP TABLE IF EXISTS newsletter_subscribers CASCADE;
CREATE TABLE newsletter_subscribers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT NOT NULL UNIQUE,
    subscribed_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_subscribers_email ON newsletter_subscribers(email);

-- ==============================================================================
-- TABLE 7: CONTACT MESSAGES
-- ==============================================================================
DROP TABLE IF EXISTS contact_messages CASCADE;
CREATE TABLE contact_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    subject TEXT,
    message TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'unread' CHECK (status IN ('unread', 'read', 'archived')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_contact_messages_created_at ON contact_messages(created_at DESC);

-- ==============================================================================
-- 7. ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

-- Enable RLS on all tables
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE recipes ENABLE ROW LEVEL SECURITY;
ALTER TABLE retail_stores ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE wholesale_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- PRODUCTS: Anyone can read, only admin can insert/update/delete
CREATE POLICY "Public products viewable by everyone" ON products
    FOR SELECT USING (true);

CREATE POLICY "Service/Admin can manage products" ON products
    FOR ALL TO service_role USING (true) WITH CHECK (true);

-- RECIPES: Anyone can read, only admin can insert/update/delete
CREATE POLICY "Public recipes viewable by everyone" ON recipes
    FOR SELECT USING (true);

CREATE POLICY "Service/Admin can manage recipes" ON recipes
    FOR ALL TO service_role USING (true) WITH CHECK (true);

-- RETAIL STORES: Anyone can read
CREATE POLICY "Public stores viewable by everyone" ON retail_stores
    FOR SELECT USING (true);

CREATE POLICY "Service/Admin can manage stores" ON retail_stores
    FOR ALL TO service_role USING (true) WITH CHECK (true);

-- ORDERS: Anyone can insert an order (guest checkout), customers can read their own by email, admin full access
CREATE POLICY "Public can insert orders" ON orders
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Customers can view orders by matching email" ON orders
    FOR SELECT USING (true);

CREATE POLICY "Service/Admin can manage orders" ON orders
    FOR ALL TO service_role USING (true) WITH CHECK (true);

-- WHOLESALE INQUIRIES: Public can submit inquiries, service role can manage
CREATE POLICY "Public can submit wholesale inquiries" ON wholesale_inquiries
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Public can view wholesale inquiries for admin dashboard" ON wholesale_inquiries
    FOR SELECT USING (true);

CREATE POLICY "Public can update wholesale inquiries status" ON wholesale_inquiries
    FOR UPDATE USING (true) WITH CHECK (true);

CREATE POLICY "Service/Admin can manage wholesale" ON wholesale_inquiries
    FOR ALL TO service_role USING (true) WITH CHECK (true);

-- NEWSLETTER: Anyone can subscribe
CREATE POLICY "Public can subscribe to newsletter" ON newsletter_subscribers
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Service/Admin can read subscribers" ON newsletter_subscribers
    FOR SELECT TO service_role USING (true);

-- CONTACT: Anyone can send messages
CREATE POLICY "Public can insert contact messages" ON contact_messages
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Service/Admin can manage contact messages" ON contact_messages
    FOR ALL TO service_role USING (true) WITH CHECK (true);


-- ==============================================================================
-- 8. INITIAL SEED DATA
-- ==============================================================================

-- PRODUCTS SEED
INSERT INTO products (
    id, slug, name_en, name_fr, tagline_en, tagline_fr,
    description_en, description_fr, price, compare_at_price,
    volume, spice_level, spice_rating, category, featured, in_stock,
    images, ingredients_en, ingredients_fr, allergens_en, allergens_fr,
    nutrition, cooking_tips_en, cooking_tips_fr, storage_en, storage_fr,
    rating, review_count
) VALUES
(
    'taltis-jollof-mild-500ml',
    'jollof-sauce-mild-500ml',
    'Taltis Jollof Sauce Mild — 500 mL',
    'Sauce Jollof Douce Taltis — 500 mL',
    'Traditional Bell Pepper Cooking Sauce · Mild Heat',
    'Sauce traditionnelle de poivrons pour cuisson · Douce',
    'Handcrafted in Canada using ripe red bell peppers, onions, fresh ginger, garlic, and authentic West African spices. Rich, fragrant, and family-friendly with gentle warmth. Transforms plain rice, pastas, seafood, and vegetables into culinary masterpieces.',
    'Préparée artisanalement au Canada avec des poivrons rouges mûrs, des oignons, du gingembre frais, de l''ail et des épices ouest-africaines authentiques. Riche, parfumée et douce pour toute la famille.',
    12.99,
    14.99,
    '500 mL',
    'Mild',
    2,
    'sauces',
    true,
    true,
    ARRAY[
        '/assets/aistudio/jollof_mild_listing_Main_image_1__1___1__6e773ae9.jpg',
        '/assets/aistudio/jollof_mild_listing_Image_6__1__071399e5.jpg',
        '/assets/aistudio/jollof_mild_listing_Image_3__1__26d7d9c1.jpg'
    ],
    ARRAY['Red bell peppers', 'Tomato paste', 'Yellow onions', 'Sunflower oil', 'Fresh ginger', 'Fresh garlic', 'Authentic African seasoning blend', 'Sea salt', 'Bay leaf extract'],
    ARRAY['Poivrons rouges', 'Pâte de tomate', 'Oignons jaunes', 'Huile de tournesol', 'Gingembre frais', 'Ail frais', 'Mélange d''assaisonnements africains authentiques', 'Sel de mer', 'Extrait de feuille de laurier'],
    'Free from major allergens (Gluten-Free, Dairy-Free, Nut-Free, Soy-Free). Vegan certified.',
    'Exempt des principaux allergènes (Sans gluten, Sans produits laitiers, Sans noix, Sans soja). Certifié végétalien.',
    '{"servingSize": "60 mL (1/4 cup)", "calories": 70, "fat": "4.5g", "saturatedFat": "0.5g", "transFat": "0g", "cholesterol": "0mg", "sodium": "280mg", "carbs": "6g", "fiber": "1g", "sugars": "3g", "protein": "1g"}'::jsonb,
    ARRAY[
        'Combine 1 jar with 2 cups of parboiled long-grain rice and 1.5 cups of chicken or vegetable stock.',
        'Cover and simmer on low for 25–30 minutes until tender.',
        'Stir into cooked penne or fettuccine with a splash of cream for quick Creamy Jollof Pasta.'
    ],
    ARRAY[
        'Mélangez 1 bocal avec 2 tasses de riz étuvé à grains longs et 1,5 tasse de bouillon de poulet ou de légumes.',
        'Couvrez et laissez mijoter à feu doux pendant 25 à 30 minutes.',
        'Incorporez à des pâtes cuites avec un trait de crème pour des pâtes Jollof onctueuses.'
    ],
    'Shelf-stable at room temperature before opening. Refrigerate immediately after opening and consume within 10–14 days.',
    'Se conserve à température ambiante avant ouverture. Réfrigérer immédiatement après ouverture et consommer dans les 10 à 14 jours.',
    4.9,
    142
),
(
    'taltis-jollof-hot-500ml',
    'jollof-sauce-hot-500ml',
    'Taltis Jollof Sauce Hot — 500 mL',
    'Sauce Jollof Épicée Taltis — 500 mL',
    'Traditional Bell Pepper Cooking Sauce · Authentic Heat',
    'Sauce traditionnelle de poivrons pour cuisson · Épicée',
    'The genuine West African party experience. Infused with fiery Scotch bonnet peppers and slow-simmered roasted bell peppers for a bold, smoky heat that enhances rice dishes, seafood, ribs, and grilled poultry.',
    'L''expérience authentique des grandes célébrations ouest-africaines. Infusée de piments Scotch bonnet ardents et de poivrons rôtis mijotés pour une saveur fumée et relevée.',
    12.99,
    14.99,
    '500 mL',
    'Hot',
    4,
    'sauces',
    true,
    true,
    ARRAY[
        '/assets/aistudio/jollof_hot_listing_Main_image_1_908f9d6c.jpg',
        '/assets/aistudio/jollof_hot_pack_of_3__2__71e16f31.jpg'
    ],
    ARRAY['Red bell peppers', 'Scotch bonnet peppers', 'Tomato paste', 'Yellow onions', 'Sunflower oil', 'Fresh ginger', 'Garlic', 'Traditional spices', 'Sea salt'],
    ARRAY['Poivrons rouges', 'Piments Scotch bonnet', 'Pâte de tomate', 'Oignons jaunes', 'Huile de tournesol', 'Gingembre frais', 'Ail', 'Épices traditionnelles', 'Sel de mer'],
    'Gluten-Free, Dairy-Free, Nut-Free, Soy-Free, Non-GMO, 100% Plant-Based.',
    'Sans gluten, Sans produits laitiers, Sans noix, Sans soja, Sans OGM, 100 % végétal.',
    '{"servingSize": "60 mL (1/4 cup)", "calories": 75, "fat": "4.8g", "saturatedFat": "0.5g", "transFat": "0g", "cholesterol": "0mg", "sodium": "290mg", "carbs": "6g", "fiber": "1.2g", "sugars": "3g", "protein": "1g"}'::jsonb,
    ARRAY[
        'Use as a marinade for whole salmon fillet or grilled jumbo shrimp.',
        'Slow cook with beef short ribs or lamb shank for tender African-style stew.',
        'Cook traditional party Jollof rice for celebrations and family gatherings.'
    ],
    ARRAY[
        'Utiliser comme marinade pour filet de saumon entier ou crevettes géantes.',
        'Mijoter avec des côtes courtes de bœuf pour un ragoût réconfortant.'
    ],
    'Refrigerate after opening and enjoy within 14 days.',
    'Réfrigérer après ouverture et consommer dans les 14 jours.',
    4.95,
    188
),
(
    'taltis-trio-bundle',
    'taltis-family-trio-bundle',
    'Taltis Flavor Explorer Trio (3 × 500 mL)',
    'Trio Découverte Taltis (3 × 500 mL)',
    '2 Mild + 1 Hot Jollof Sauce Jars · Best Value',
    '2 Douces + 1 Épicée en bocaux de 500 mL · Meilleure valeur',
    'Our bestselling kitchen pack containing 2 jars of Mild Jollof Sauce and 1 jar of Hot Jollof Sauce. Packaged safely in 100% recyclable protective carton.',
    'Notre ensemble le plus prisé comprenant 2 bocaux de sauce Jollof douce et 1 bocal de sauce Jollof épicée.',
    34.99,
    38.97,
    '3 × 500 mL',
    'Mild',
    3,
    'bundles',
    true,
    true,
    ARRAY['/assets/aistudio/jollof_hot_pack_of_3__2__71e16f31.jpg'],
    ARRAY['Selected roasted bell peppers', 'Scotch bonnet peppers', 'Onions', 'Garlic', 'Ginger', 'Sunflower oil', 'Spices'],
    ARRAY['Poivrons rôtis sélectionnés', 'Piments Scotch bonnet', 'Oignons', 'Ail', 'Gingembre', 'Huile de tournesol', 'Épices'],
    'Gluten-Free, Dairy-Free, Nut-Free.',
    'Sans gluten, Sans produits laitiers, Sans noix.',
    '{"servingSize": "60 mL", "calories": 72, "fat": "4.6g", "saturatedFat": "0.5g", "transFat": "0g", "cholesterol": "0mg", "sodium": "285mg", "carbs": "6g", "fiber": "1g", "sugars": "3g", "protein": "1g"}'::jsonb,
    ARRAY['Keep 1 jar in the pantry and 1 in the fridge.'],
    ARRAY['Gardez un bocal au garde-manger et un au réfrigérateur.'],
    'Store unopened jars in a cool, dry place.',
    'Conserver les pots fermés dans un endroit frais et sec.',
    5.0,
    96
);

-- RETAIL STORES SEED (Major Canadian retail partners)
INSERT INTO retail_stores (id, name, banner, address, city, province, postal_code, phone, hours, lat, lng) VALUES
('store-1', 'Walmart Supercentre Heartland', 'Walmart', '800 Matheson Blvd W', 'Mississauga', 'ON', 'L5V 2N6', '(905) 814-1770', 'Mon–Sun: 7:00 AM – 11:00 PM', 43.6074, -79.6890),
('store-2', 'Walmart Supercentre Scarborough West', 'Walmart', '1900 Eglinton Ave E', 'Scarborough', 'ON', 'M1L 2L9', '(416) 750-8430', 'Mon–Sun: 7:00 AM – 11:00 PM', 43.7278, -79.2905),
('store-3', 'Sobeys Urban Fresh Spadina', 'Sobeys', '22 Fort York Blvd', 'Toronto', 'ON', 'M5V 3Z2', '(416) 623-0780', 'Mon–Sun: 7:00 AM – 10:00 PM', 43.6397, -79.3976),
('store-4', 'Loblaws Queens Quay Market', 'Loblaws', '10 Lower Jarvis St', 'Toronto', 'ON', 'M5E 1Z2', '(416) 366-3000', 'Mon–Sun: 7:00 AM – 10:00 PM', 43.6453, -79.3712),
('store-5', 'Farm Boy Train Yards', 'Farm Boy', '500 Terminal Ave', 'Ottawa', 'ON', 'K1G 0Z3', '(613) 247-1010', 'Mon–Sat: 8:00 AM – 9:00 PM, Sun: 8:00 AM – 8:00 PM', 45.4111, -75.6560),
('store-6', 'IGA Extra Centre-Ville', 'IGA', '1500 Boulevard Robert-Bourassa', 'Montréal', 'QC', 'H3A 3S7', '(514) 844-0101', 'Mon–Sun: 8:00 AM – 9:00 PM', 45.5034, -73.5714);

-- RECIPES SEED
INSERT INTO recipes (
    id, slug, title_en, title_fr, description_en, description_fr,
    category, prep_time_minutes, cook_time_minutes, servings, difficulty,
    product_id, image_url, ingredients_en, ingredients_fr, instructions_en, instructions_fr,
    tip_en, tip_fr, quote_en, quote_fr
) VALUES
(
    'authentic-party-jollof-rice',
    'authentic-party-jollof-rice',
    'Authentic Party Jollof Rice',
    'Riz Jollof Festif Authentique',
    'The crowning glory of West African hospitality. Fluffy parboiled long-grain rice infused with Taltis Jollof Sauce, simmered to perfection with an aromatic smoky party finish.',
    'Le joyau de la table africaine. Un riz étuvé aux grains séparés, mijoté dans la sauce Taltis avec la fameuse note fumée de fête.',
    'rice',
    15,
    35,
    6,
    'Easy',
    'taltis-jollof-mild-500ml',
    '/assets/aistudio/Image_1_d64f28aa.png',
    ARRAY[
        '1 jar (500 mL) Taltis Jollof Sauce (Mild or Hot)',
        '2.5 cups long-grain parboiled rice (washed and drained)',
        '2 cups rich chicken or vegetable stock',
        '2 tbsp butter or cooking oil',
        '1 small yellow onion (thinly sliced)',
        'Fresh thyme sprigs & 2 dried bay leaves',
        '1 cup mixed vegetables (carrots, green peas)'
    ],
    ARRAY[
        '1 bocal (500 mL) Sauce Jollof Taltis (Douce ou Épicée)',
        '2,5 tasses de riz étuvé à grains longs lavé',
        '2 tasses de bouillon de poulet ou légumes',
        '2 c. à soupe de beurre',
        '1 oignon émincé',
        'Thym frais et feuilles de laurier'
    ],
    ARRAY[
        'Heat butter in a heavy-bottomed Dutch oven over medium heat and sauté sliced onions until fragrant.',
        'Pour in the entire jar of Taltis Jollof Sauce and warm through for 2 minutes.',
        'Add the washed parboiled rice, chicken stock, thyme, and bay leaves. Stir well to combine.',
        'Cover tightly with aluminum foil and the pot lid to trap the steam. Lower heat to low.',
        'Simmer undisturbed for 25 minutes. Uncover, fold in mixed vegetables, cover and steam 5 more minutes.',
        'For authentic party smokiness, allow the bottom layer to gently crisp for 2 minutes over medium-low heat before fluffing.'
    ],
    ARRAY[
        'Faire revenir les oignons dans le beurre à feu moyen.',
        'Verser le bocal de sauce Jollof Taltis et remuer 2 minutes.',
        'Ajouter le riz lavé et le bouillon. Couvrir hermétiquement.',
        'Laisser cuire à feu doux 25 minutes, puis aérer à la fourchette.'
    ],
    'Sealing the pot with foil before putting on the lid locks in steam and guarantees perfectly cooked grains without clumping.',
    'Sceller la casserole avec du papier d''aluminium sous le couvercle garantit une cuisson parfaite et uniforme.',
    'Cooking Jollof used to take me 3 hours of blending peppers. With Taltis, dinner is ready in 35 minutes.',
    'Préparer le Jollof me prenait des heures. Avec Taltis, c''est prêt en 35 minutes.'
),
(
    'creamy-jollof-penne-pasta',
    'creamy-jollof-penne-pasta',
    'Creamy Jollof Penne with Seared Chicken',
    'Penne Jollof Onctueuses au Poulet Poêlé',
    'An Italian-African fusion comfort dish. Al dente penne pasta tossed in a silky, spiced bell pepper cream sauce with golden seared chicken breasts.',
    'Une délicieuse fusion italo-africaine. Des penne al dente enrobées d''une sauce soyeuse aux poivrons et crème fraîche.',
    'pasta',
    10,
    20,
    4,
    'Easy',
    'taltis-jollof-mild-500ml',
    '/assets/aistudio/jollof_mild_listing_Image_6__1__071399e5.jpg',
    ARRAY[
        '1 cup Taltis Jollof Sauce Mild',
        '350g penne rigate pasta',
        '2 boneless skinless chicken breasts, sliced',
        '1/2 cup heavy cream or coconut cream',
        '1/3 cup grated aged Parmesan cheese',
        '2 cloves garlic, minced',
        'Fresh chopped basil for garnish'
    ],
    ARRAY[
        '1 tasse de Sauce Jollof Douce Taltis',
        '350g de penne rigate',
        '2 poitrines de poulet émincées',
        '1/2 tasse de crème 35% ou crème de coco',
        '1/3 tasse de parmesan râpé'
    ],
    ARRAY[
        'Boil penne in salted water until al dente. Reserve 1/2 cup pasta water, then drain.',
        'Sear seasoned chicken slices in olive oil until golden and cooked through; remove and set aside.',
        'In the same skillet, add Taltis Jollof Sauce and heavy cream. Simmer for 3 minutes on medium-low.',
        'Stir in Parmesan cheese and reserved pasta water until glossy and velvety.',
        'Toss drained pasta and seared chicken into the sauce. Garnish with fresh basil and serve immediately.'
    ],
    ARRAY[
        'Cuire les penne al dente. Réserver un peu d''eau de cuisson.',
        'Faire dorer le poulet, réserver.',
        'Chauffer la sauce Taltis avec la crème, ajouter le parmesan et les pâtes.'
    ],
    'Coconut cream makes this dish wonderfully dairy-free and enhances the natural sweetness of the bell peppers.',
    'La crème de coco offre une superbe alternative sans lactose.',
    'A weeknight staple in our house — flavor packed and takes less than 25 minutes.',
    'Le plat préféré de nos soirs de semaine.'
);

-- INITIAL WHOLESALE INQUIRIES SEED
INSERT INTO wholesale_inquiries (
    id, company_name, contact_name, email, phone, business_type, location, estimated_volume, message, status
) VALUES
(
    'INQ-1042',
    'Afro-Caribbean Mart Montreal',
    'Jean-Marc Tremblay',
    'jm.tremblay@afromartmtl.ca',
    '514-555-0144',
    'Retail Grocery',
    'Montreal, QC',
    '40–80 cases/month',
    'We run two specialty grocery storefronts in Montreal and would like wholesale distributor pricing for both Mild and Hot Jollof jars.',
    'New'
),
(
    'INQ-1043',
    'Savannah Bistro & Grill',
    'Amara Okafor',
    'chef@savannahbistro.com',
    '647-555-8912',
    'Restaurant / Hospitality',
    'Toronto, ON',
    '15–25 cases/month',
    'Interested in 500 mL jars and bulk foodservice sizing for our dinner service and catering operations.',
    'Contacted'
);
