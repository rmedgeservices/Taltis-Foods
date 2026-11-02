/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, Recipe, RetailStore, WholesaleInquiry, CustomerOrder } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  // ==========================================
  // CORE 500 mL JOLLOF SAUCES
  // ==========================================
  {
    id: 'taltis-jollof-mild-500ml',
    slug: 'jollof-sauce-mild-500ml',
    name: {
      en: 'Taltis Jollof Sauce Mild — 500 mL',
      fr: 'Sauce Jollof Douce Taltis — 500 mL',
    },
    tagline: {
      en: 'Traditional Bell Pepper Cooking Sauce · Mild Heat',
      fr: 'Sauce traditionnelle de poivrons pour cuisson · Douce',
    },
    description: {
      en: 'Handcrafted in Canada using ripe red bell peppers, onions, fresh ginger, garlic, and authentic West African spices. Rich, fragrant, and family-friendly with gentle warmth. Transforms plain rice, pastas, seafood, and vegetables into culinary masterpieces.',
      fr: 'Préparée artisanalement au Canada avec des poivrons rouges mûrs, des oignons, du gingembre frais, de l’ail et des épices ouest-africaines authentiques. Riche, parfumée et douce pour toute la famille.',
    },
    price: 12.99,
    compareAtPrice: 14.99,
    volume: '500 mL',
    spiceLevel: 'Mild',
    spiceRating: 2,
    category: 'sauces',
    featured: true,
    inStock: true,
    images: [
      '/assets/aistudio/jollof_mild_listing_Main_image_1__1___1__6e773ae9.jpg',
      '/assets/aistudio/jollof_mild_listing_Image_6__1__071399e5.jpg',
      '/assets/aistudio/jollof_mild_listing_Image_3__1__26d7d9c1.jpg',
      '/assets/aistudio/jollof_mild_pouch_Image_3_011cdb90.jpg',
    ],
    ingredients: {
      en: [
        'Red bell peppers',
        'Tomato paste',
        'Yellow onions',
        'Sunflower oil',
        'Fresh ginger',
        'Fresh garlic',
        'Authentic African seasoning blend',
        'Sea salt',
        'Bay leaf extract',
      ],
      fr: [
        'Poivrons rouges',
        'Pâte de tomate',
        'Oignons jaunes',
        'Huile de tournesol',
        'Gingembre frais',
        'Ail frais',
        'Mélange d’assaisonnements africains authentiques',
        'Sel de mer',
        'Extrait de feuille de laurier',
      ],
    },
    allergens: {
      en: 'Free from major allergens (Gluten-Free, Dairy-Free, Nut-Free, Soy-Free). Vegan certified ingredients.',
      fr: 'Exempt des principaux allergènes (Sans gluten, Sans produits laitiers, Sans noix, Sans soja). Ingrédients certifiés végétaliens.',
    },
    nutrition: {
      servingSize: '60 mL (1/4 cup)',
      calories: 70,
      fat: '4.5g',
      saturatedFat: '0.5g',
      transFat: '0g',
      cholesterol: '0mg',
      sodium: '280mg',
      carbs: '6g',
      fiber: '1g',
      sugars: '3g',
      protein: '1g',
    },
    cookingTips: {
      en: [
        'Combine 1 jar with 2 cups of parboiled long-grain rice and 1.5 cups of chicken or vegetable stock.',
        'Cover and simmer on low for 25–30 minutes until tender.',
        'Stir into cooked penne or fettuccine with a splash of cream for quick Creamy Jollof Pasta.',
      ],
      fr: [
        'Mélangez 1 bocal avec 2 tasses de riz étuvé à grains longs et 1,5 tasse de bouillon de poulet ou de légumes.',
        'Couvrez et laissez mijoter à feu doux pendant 25 à 30 minutes.',
        'Incorporez à des pâtes cuites avec un trait de crème pour des pâtes Jollof onctueuses.',
      ],
    },
    storage: {
      en: 'Shelf-stable at room temperature before opening. Refrigerate immediately after opening and consume within 10–14 days for optimal freshness.',
      fr: 'Se conserve à température ambiante avant ouverture. Réfrigérer immédiatement après ouverture et consommer dans les 10 à 14 jours.',
    },
    rating: 4.9,
    reviewCount: 142,
  },
  {
    id: 'taltis-jollof-hot-500ml',
    slug: 'jollof-sauce-hot-500ml',
    name: {
      en: 'Taltis Jollof Sauce Hot — 500 mL',
      fr: 'Sauce Jollof Épicée Taltis — 500 mL',
    },
    tagline: {
      en: 'Traditional Bell Pepper Cooking Sauce · Authentic Heat',
      fr: 'Sauce traditionnelle de poivrons pour cuisson · Épicée',
    },
    description: {
      en: 'The genuine West African party experience. Infused with fiery Scotch bonnet peppers and slow-simmered roasted bell peppers for a bold, smoky heat that enhances rice dishes, seafood, ribs, and grilled poultry.',
      fr: 'L’expérience authentique des grandes célébrations ouest-africaines. Infusée de piments Scotch bonnet ardents et de poivrons rôtis mijotés pour une saveur fumée et relevée.',
    },
    price: 12.99,
    compareAtPrice: 14.99,
    volume: '500 mL',
    spiceLevel: 'Hot',
    spiceRating: 4,
    category: 'sauces',
    featured: true,
    inStock: true,
    images: [
      '/assets/aistudio/jollof_hot_listing_Main_image_1_08cfc0e6.jpg',
      '/assets/aistudio/jollof_hot_listing_Image_2_7ca00003.jpg',
      '/assets/aistudio/jollof_hot_listing_Image_3_ad1bad7f.jpg',
      '/assets/aistudio/jollof_hot_listing_Image_6__1__71507092.jpg',
      '/assets/aistudio/jollof_hot_pouch_Image_3__2__35c8a934.jpg',
    ],
    ingredients: {
      en: [
        'Red bell peppers',
        'Tomato paste',
        'Yellow onions',
        'Scotch bonnet peppers',
        'Sunflower oil',
        'Fresh ginger',
        'Fresh garlic',
        'Authentic African spice blend',
        'Sea salt',
        'Bay leaf extract',
      ],
      fr: [
        'Poivrons rouges',
        'Pâte de tomate',
        'Oignons jaunes',
        'Piments Scotch bonnet',
        'Huile de tournesol',
        'Gingembre frais',
        'Ail frais',
        'Mélange d’épices africaines traditionnelles',
        'Sel de mer',
        'Extrait de feuille de laurier',
      ],
    },
    allergens: {
      en: 'Free from major allergens (Gluten-Free, Dairy-Free, Nut-Free, Soy-Free). Vegan certified.',
      fr: 'Exempt des principaux allergènes (Sans gluten, Sans produits laitiers, Sans noix, Sans soja). Certifié végétalien.',
    },
    nutrition: {
      servingSize: '60 mL (1/4 cup)',
      calories: 70,
      fat: '4.5g',
      saturatedFat: '0.5g',
      transFat: '0g',
      cholesterol: '0mg',
      sodium: '290mg',
      carbs: '6g',
      fiber: '1g',
      sugars: '3g',
      protein: '1g',
    },
    cookingTips: {
      en: [
        'For classic West African celebration rice, simmer with long-grain parboiled rice and a touch of butter at the end.',
        'Use as a marinade for whole tilapia or grilled lamb suya skewers.',
        'Add 1 jar to your slow cooker with beef shank for rich pepper soup.',
      ],
      fr: [
        'Pour le riz de fête traditionnel, laissez mijoter avec du riz étuvé et ajoutez une noisette de beurre en fin de cuisson.',
        'Idéal comme marinade pour le tilapia entier ou les brochettes de suya.',
        'Ajoutez à votre mijoteuse avec du jarret de bœuf pour une soupe au poivre réconfortante.',
      ],
    },
    storage: {
      en: 'Pantry stable before opening. Keep refrigerated after opening and enjoy within 10–14 days.',
      fr: 'Se conserve à température ambiante avant ouverture. Réfrigérer après ouverture et consommer dans les 10 à 14 jours.',
    },
    rating: 5.0,
    reviewCount: 189,
  },

  // ==========================================
  // BUNDLES
  // ==========================================
  {
    id: 'taltis-discovery-duo-bundle',
    slug: 'discovery-duo-pack-500ml',
    name: {
      en: 'Taltis Discovery Duo Pack (1x Mild + 1x Hot)',
      fr: 'Duo Découverte Taltis (1x Douce + 1x Épicée)',
    },
    tagline: {
      en: 'The Perfect Introduction · 2x 500 mL Glass Jars',
      fr: 'L’introduction parfaite · 2x bocaux en verre 500 mL',
    },
    description: {
      en: 'Experience both sides of authentic West African cuisine. Includes one 500 mL jar of Mild Jollof Sauce for everyday family meals, and one 500 mL jar of Hot Jollof Sauce for spicy weekend party dishes.',
      fr: 'Découvrez les deux facettes de la cuisine ouest-africaine. Comprend un bocal 500 mL de sauce Douce pour les repas quotidiens et un bocal 500 mL de sauce Épicée.',
    },
    price: 23.99,
    compareAtPrice: 25.98,
    volume: '2x 500 mL',
    spiceLevel: 'Hot',
    spiceRating: 3,
    category: 'bundles',
    featured: true,
    inStock: true,
    images: [
      '/assets/aistudio/jollof_hot_listing_Main_image_1_08cfc0e6.jpg',
      '/assets/aistudio/jollof_mild_listing_Main_image_1__1___1__6e773ae9.jpg',
      '/assets/aistudio/jollof_hot_pouch_Image_5__1__a2d60c09.jpg',
    ],
    ingredients: {
      en: ['1x Taltis Jollof Sauce Mild (500 mL) + 1x Taltis Jollof Sauce Hot (500 mL). Whole natural ingredients.'],
      fr: ['1x Sauce Jollof Douce Taltis (500 mL) + 1x Sauce Jollof Épicée Taltis (500 mL). Ingrédients naturels.'],
    },
    allergens: {
      en: 'Gluten-Free, Dairy-Free, Nut-Free, Soy-Free, Vegan.',
      fr: 'Sans gluten, sans produits laitiers, sans noix, sans soja, végétalien.',
    },
    nutrition: {
      servingSize: '60 mL (1/4 cup)',
      calories: 70,
      fat: '4.5g',
      saturatedFat: '0.5g',
      transFat: '0g',
      cholesterol: '0mg',
      sodium: '285mg',
      carbs: '6g',
      fiber: '1g',
      sugars: '3g',
      protein: '1g',
    },
    cookingTips: {
      en: ['Mix half a jar of Mild and half a jar of Hot for customized medium heat!'],
      fr: ['Mélangez moitié Douce et moitié Épicée pour une intensité moyenne personnalisée !'],
    },
    storage: {
      en: 'Store unopened jars at room temperature for up to 18 months.',
      fr: 'Conserver à température ambiante jusqu’à 18 mois avant ouverture.',
    },
    rating: 4.9,
    reviewCount: 97,
  },
  {
    id: 'taltis-family-feast-4pack',
    slug: 'family-feast-4jar-bundle-500ml',
    name: {
      en: 'Family Feast 4-Jar Value Bundle (2x Mild + 2x Hot)',
      fr: 'Lot Famille 4 Bocaux Avantageux (2x Douce + 2x Épicée)',
    },
    tagline: {
      en: 'Best Value Bundle · Qualifies for Free Canadian Shipping',
      fr: 'Meilleure valeur · Admissible à la livraison gratuite au Canada',
    },
    description: {
      en: 'Stock your kitchen pantry with four 500 mL glass jars (2 Mild and 2 Hot). Cook for large family gatherings, potlucks, and effortless weekday dinners. Qualifies for Free Standard Canadian Shipping on checkout.',
      fr: 'Faites le plein avec quatre bocaux en verre de 500 mL (2 Douce et 2 Épicée). Idéal pour les grands repas de famille et les rassemblements. Débloque la livraison gratuite au Canada.',
    },
    price: 44.99,
    compareAtPrice: 51.96,
    volume: '4x 500 mL',
    spiceLevel: 'Hot',
    spiceRating: 4,
    category: 'bundles',
    featured: true,
    inStock: true,
    images: [
      '/assets/aistudio/jollof_hot_pouch_Image_5__1__a2d60c09.jpg',
      '/assets/aistudio/jollof_hot_listing_Image_2_7ca00003.jpg',
      '/assets/aistudio/jollof_mild_listing_Main_image_1__1___1__6e773ae9.jpg',
      '/assets/aistudio/jollof_hot_listing_Main_image_1_08cfc0e6.jpg',
    ],
    ingredients: {
      en: ['2x Taltis Jollof Sauce Mild (500 mL) + 2x Taltis Jollof Sauce Hot (500 mL). Natural Canadian craftsmanship.'],
      fr: ['2x Sauce Jollof Douce Taltis (500 mL) + 2x Sauce Jollof Épicée Taltis (500 mL). Confection canadienne naturelle.'],
    },
    allergens: {
      en: '100% Free of gluten, nuts, dairy, animal products, and artificial colours.',
      fr: '100% Sans gluten, sans noix, sans produits laitiers ni colorants artificiels.',
    },
    nutrition: {
      servingSize: '60 mL (1/4 cup)',
      calories: 70,
      fat: '4.5g',
      saturatedFat: '0.5g',
      transFat: '0g',
      cholesterol: '0mg',
      sodium: '285mg',
      carbs: '6g',
      fiber: '1g',
      sugars: '3g',
      protein: '1g',
    },
    cookingTips: {
      en: ['Use 2 full jars for 12-serving family holiday party rice.'],
      fr: ['Utilisez 2 bocaux complets pour un plat de riz de 12 portions lors des fêtes.'],
    },
    storage: {
      en: 'Pantry safe up to 18 months unopened.',
      fr: 'Se conserve jusqu’à 18 mois au garde-manger avant ouverture.',
    },
    rating: 5.0,
    reviewCount: 231,
  },

  // ==========================================
  // AFRICAN KITCHEN ACCESSORIES
  // ==========================================
  {
    id: 'taltis-mwiko-wooden-paddle',
    slug: 'traditional-african-wooden-paddle-mwiko',
    name: {
      en: 'Authentic African Wooden Cooking Paddle (Mwiko)',
      fr: 'Spatule Traditionnelle Africaine en Bois (Mwiko)',
    },
    tagline: {
      en: 'Hand-Carved Hardwood · Essential for Stirring Jollof & Fufu',
      fr: 'Bois dur sculpté main · Essentiel pour remuer le Jollof et le Fufu',
    },
    description: {
      en: 'Crafted by master artisans from sustainably sourced African hardwood. Designed with an ergonomic long handle and flattened paddle head to evenly aerate and turn rice grains without bruising, creating the coveted smoky bottom-pot layer.',
      fr: 'Sculptée par des maîtres artisans dans un bois dur africain durable. Conçue avec un long manche ergonomique pour aérer et mélanger le riz sans l’écraser.',
    },
    price: 18.99,
    compareAtPrice: 22.00,
    volume: '38 cm (15 in)',
    spiceLevel: 'Mild',
    spiceRating: 0,
    category: 'accessories',
    featured: true,
    inStock: true,
    images: [
      '/assets/aistudio/jollof_hot_listing_Image_3_ad1bad7f.jpg',
      '/assets/aistudio/jollof_mild_listing_Image_3__1__26d7d9c1.jpg',
    ],
    ingredients: {
      en: ['100% Natural Organic African Wild Olive Hardwood, Beeswax Polished'],
      fr: ['100% Bois dur naturel d’olivier sauvage africain poli à la cire d’abeille'],
    },
    allergens: {
      en: 'Natural wood product.',
      fr: 'Produit naturel en bois.',
    },
    nutrition: {
      servingSize: 'N/A',
      calories: 0,
      fat: '0g',
      saturatedFat: '0g',
      transFat: '0g',
      cholesterol: '0mg',
      sodium: '0mg',
      carbs: '0g',
      fiber: '0g',
      sugars: '0g',
      protein: '0g',
    },
    cookingTips: {
      en: ['Wash gently with warm soapy water and dry thoroughly. Condition periodically with food-grade mineral oil.'],
      fr: ['Laver délicatement à l’eau savonneuse tiède. Huiler occasionnellement avec une huile minérale alimentaire.'],
    },
    storage: {
      en: 'Store dry.',
      fr: 'Conserver au sec.',
    },
    rating: 4.9,
    reviewCount: 42,
  },
  {
    id: 'taltis-cast-iron-jollof-pot',
    slug: 'heavy-duty-cast-iron-jollof-pot-4-5l',
    name: {
      en: 'Taltis Heavy-Duty Cast Iron Jollof Pot (4.5 L)',
      fr: 'Cocotte en Fonte Émaillée Spéciale Jollof Taltis (4.5 L)',
    },
    tagline: {
      en: 'Superior Heat Retention · The Secret to Smoky Jollof Socarrat',
      fr: 'Rétention thermique supérieure · Le secret du fond croustillant',
    },
    description: {
      en: 'Heavyweight enamelled cast iron Dutch oven with tight-fitting moisture-lock lid. Distributes heat perfectly for even cooking, preventing hot spots and cultivating that authentic restaurant-style smoky flavor.',
      fr: 'Cocotte en fonte émaillée lourde avec couvercle hermétique. Répartit uniformément la chaleur pour une cuisson impeccable et des saveurs fumées incomparables.',
    },
    price: 79.99,
    compareAtPrice: 95.00,
    volume: '4.5 L (4.8 Qt)',
    spiceLevel: 'Mild',
    spiceRating: 0,
    category: 'accessories',
    featured: true,
    inStock: true,
    images: [
      '/assets/aistudio/jollof_hot_listing_Image_2_7ca00003.jpg',
      '/assets/aistudio/jollof_hot_pouch_Image_5__1__a2d60c09.jpg',
    ],
    ingredients: {
      en: ['Heavy-Gauge Cast Iron, Matte Satin Porcelain Enamel Interior'],
      fr: ['Fonte d’acier robuste, émail intérieur satiné'],
    },
    allergens: { en: 'None', fr: 'Aucun' },
    nutrition: {
      servingSize: 'N/A',
      calories: 0,
      fat: '0g',
      saturatedFat: '0g',
      transFat: '0g',
      cholesterol: '0mg',
      sodium: '0mg',
      carbs: '0g',
      fiber: '0g',
      sugars: '0g',
      protein: '0g',
    },
    cookingTips: {
      en: ['Oven safe up to 500°F (260°C). Compatible with induction, gas, electric, and ceramic stovetops.'],
      fr: ['Va au four jusqu’à 260°C (500°F). Compatible induction, gaz, électrique et vitrocéramique.'],
    },
    storage: { en: 'Keep dry.', fr: 'Garder au sec.' },
    rating: 5.0,
    reviewCount: 38,
  },
  {
    id: 'taltis-granite-mortar-pestle',
    slug: 'heavyweight-natural-granite-mortar-pestle',
    name: {
      en: 'Solid Natural Granite African Mortar & Pestle (15 cm)',
      fr: 'Mortier et Pilon en Granit Naturel Africain (15 cm)',
    },
    tagline: {
      en: 'Crush Fresh Aromatics · Ginger, Garlic & Scotch Bonnets',
      fr: 'Broyez vos aromates · Gingembre, ail et piments frais',
    },
    description: {
      en: 'Hand-carved from a single block of unpolished natural granite. Its textured interior extracts deep essential oils from fresh garlic, ginger roots, peppercorns, and whole scotch bonnet peppers.',
      fr: 'Taillé à la main dans un bloc de granit naturel. Idéal pour extraire les huiles essentielles du gingembre frais, de l’ail et des piments.',
    },
    price: 44.99,
    compareAtPrice: 52.00,
    volume: '15 cm Dia · 3.2 kg',
    spiceLevel: 'Mild',
    spiceRating: 0,
    category: 'accessories',
    featured: false,
    inStock: true,
    images: [
      '/assets/aistudio/jollof_hot_listing_Image_3_ad1bad7f.jpg',
    ],
    ingredients: { en: ['100% Solid Natural Dense Granite'], fr: ['100% Granit naturel dense'] },
    allergens: { en: 'None', fr: 'Aucun' },
    nutrition: {
      servingSize: 'N/A', calories: 0, fat: '0g', saturatedFat: '0g', transFat: '0g',
      cholesterol: '0mg', sodium: '0mg', carbs: '0g', fiber: '0g', sugars: '0g', protein: '0g'
    },
    cookingTips: {
      en: ['Season before first use with rice and garlic. Rinse with warm water only.'],
      fr: ['Culotter avant le premier usage avec du riz et de l’ail. Rincer à l’eau chaude uniquement.'],
    },
    storage: { en: 'Pantry or countertop.', fr: 'Garde-manger ou comptoir.' },
    rating: 4.8,
    reviewCount: 29,
  },
  {
    id: 'taltis-embroidered-chef-apron',
    slug: 'taltis-official-embroidered-chef-apron-mitts',
    name: {
      en: 'Taltis Official Embroidered Chef Apron & Mitts Set',
      fr: 'Tablier de Chef Brodé Officiel Taltis & Gants de Cuisson',
    },
    tagline: {
      en: 'Heavyweight Organic Cotton · Vibrant Red with Gold Leaf Logo',
      fr: 'Coton biologique épais · Rouge vibrant avec logo officiel brodé',
    },
    description: {
      en: 'Cook like a master in our signature heavy-duty cotton canvas apron. Features dual deep front pockets for recipe cards and utensils, adjustable neck strap, and heat-resistant silicone-grip oven mitts.',
      fr: 'Cuisinez comme un chef avec notre tablier en toile de coton biologique résistante. Comprend deux grandes poches et des gants de four antidérapants.',
    },
    price: 29.99,
    compareAtPrice: 35.00,
    volume: 'One Size Fits All',
    spiceLevel: 'Mild',
    spiceRating: 0,
    category: 'accessories',
    featured: false,
    inStock: true,
    images: [
      '/assets/aistudio/jollof_hot_listing_Image_6__1__71507092.jpg',
    ],
    ingredients: { en: ['100% Heavy Organic Cotton Canvas with Brass Hardware'], fr: ['100% Toile de coton biologique avec boucles en laiton'] },
    allergens: { en: 'None', fr: 'Aucun' },
    nutrition: {
      servingSize: 'N/A', calories: 0, fat: '0g', saturatedFat: '0g', transFat: '0g',
      cholesterol: '0mg', sodium: '0mg', carbs: '0g', fiber: '0g', sugars: '0g', protein: '0g'
    },
    cookingTips: { en: ['Machine wash cold on gentle cycle. Tumble dry low.'], fr: ['Lavage en machine à froid cycle doux. Séchage à basse température.'] },
    storage: { en: 'Hang dry.', fr: 'Sécher suspendu.' },
    rating: 4.9,
    reviewCount: 31,
  },
  {
    id: 'taltis-clay-cooking-pot',
    slug: 'traditional-african-clay-cooking-pot-asanka',
    name: {
      en: 'Handmade African Terracotta Clay Cooking Pot (Asanka)',
      fr: 'Marmite Traditionnelle Africaine en Terre Cuite (Asanka)',
    },
    tagline: {
      en: 'Natural Earthenware · Slow Heat Circulation for Depth',
      fr: 'Terre cuite naturelle · Diffusion lente de la chaleur',
    },
    description: {
      en: 'Molded from rich red natural African clay and fired in wood kilns. Its porous walls circulate gentle humidity while sealing in the aromatic spices of Jollof rice, pepper soup, and slow-braised stews.',
      fr: 'Modelée dans une argile rouge naturelle et cuite au feu de bois. Ses parois poreuses diffusent une chaleur douce en préservant toutes les saveurs.',
    },
    price: 39.99,
    compareAtPrice: 48.00,
    volume: '3.5 L (3.7 Qt)',
    spiceLevel: 'Mild',
    spiceRating: 0,
    category: 'accessories',
    featured: true,
    inStock: true,
    images: [
      '/assets/aistudio/jollof_hot_listing_Image_3_ad1bad7f.jpg',
      '/assets/aistudio/jollof_mild_listing_Image_3__1__26d7d9c1.jpg',
    ],
    ingredients: { en: ['100% Lead-Free Natural African Red Terracotta Clay'], fr: ['100% Argile rouge naturelle sans plomb'] },
    allergens: { en: 'None', fr: 'Aucun' },
    nutrition: {
      servingSize: 'N/A', calories: 0, fat: '0g', saturatedFat: '0g', transFat: '0g',
      cholesterol: '0mg', sodium: '0mg', carbs: '0g', fiber: '0g', sugars: '0g', protein: '0g'
    },
    cookingTips: { en: ['Soak in water for 15 minutes before cooking over low to medium flame.'], fr: ['Faire tremper 15 minutes dans l’eau avant cuisson à feu doux à moyen.'] },
    storage: { en: 'Store dry with lid inverted.', fr: 'Conserver au sec avec couvercle inversé.' },
    rating: 4.9,
    reviewCount: 26,
  },
  {
    id: 'taltis-plantain-crinkle-slicer',
    slug: 'stainless-steel-african-plantain-yam-slicer',
    name: {
      en: 'Stainless Steel Plantain & Yam Slicer Mandoline',
      fr: 'Mandoline Spéciale Bananes Plantains & Ignames en Inox',
    },
    tagline: {
      en: 'Precision Cuts for Crispy Dodo & Sweet Chips',
      fr: 'Tranches nettes pour dodo doré et croustillant',
    },
    description: {
      en: 'Engineered specifically for firm African green and ripe yellow plantains, sweet potatoes, and yams. Features Japanese stainless steel blades for effortless, uniform 3mm slices that fry to perfection in minutes.',
      fr: 'Conçue spécialement pour les plantains mûrs ou verts, les patates douces et ignames. Lames japonaises en acier inoxydable pour des tranches régulières de 3mm.',
    },
    price: 16.99,
    compareAtPrice: 20.00,
    volume: 'Handheld Tool',
    spiceLevel: 'Mild',
    spiceRating: 0,
    category: 'accessories',
    featured: false,
    inStock: true,
    images: [
      '/assets/aistudio/jollof_hot_listing_Image_2_7ca00003.jpg',
    ],
    ingredients: { en: ['Food-Grade 304 Stainless Steel with Safety Finger Guard'], fr: ['Acier inoxydable 304 avec protège-doigts'] },
    allergens: { en: 'None', fr: 'Aucun' },
    nutrition: {
      servingSize: 'N/A', calories: 0, fat: '0g', saturatedFat: '0g', transFat: '0g',
      cholesterol: '0mg', sodium: '0mg', carbs: '0g', fiber: '0g', sugars: '0g', protein: '0g'
    },
    cookingTips: { en: ['Slice directly over hot sunflower oil for crispy golden homemade chips.'], fr: ['Trancher directement au-dessus de l’huile chaude pour des chips dorées.'] },
    storage: { en: 'Dishwasher safe.', fr: 'Va au lave-vaisselle.' },
    rating: 4.8,
    reviewCount: 34,
  },

  // ==========================================
  // OTHER AFRICAN PRODUCTS
  // ==========================================
  {
    id: 'taltis-nigerian-honey-beans',
    slug: 'premium-nigerian-honey-beans-oloyin-1kg',
    name: {
      en: 'Premium Nigerian Honey Beans (Oloyin — 1 kg)',
      fr: 'Haricots Miel Nigérians de Première Qualité (Oloyin — 1 kg)',
    },
    tagline: {
      en: 'Naturally Sweet & Creamy · High Protein & Fiber',
      fr: 'Naturellement doux et crémeux · Riche en protéines et fibres',
    },
    description: {
      en: 'Hand-selected Nigerian brown honey beans renowned for their rich natural sweetness and velvety texture. The classic companion to Taltis Jollof rice, plantains, or spicy bean pottage (Ewa Aganyin).',
      fr: 'Haricots bruns nigérians sélectionnés à la main, réputés pour leur douceur naturelle et leur texture veloutée. Le compagnon idéal du riz Jollof.',
    },
    price: 9.99,
    compareAtPrice: 11.99,
    volume: '1 kg (2.2 lbs)',
    spiceLevel: 'Mild',
    spiceRating: 0,
    category: 'other-african',
    featured: true,
    inStock: true,
    images: [
      '/assets/aistudio/jollof_hot_listing_Image_2_7ca00003.jpg',
      '/assets/aistudio/jollof_mild_listing_Image_3__1__26d7d9c1.jpg',
    ],
    ingredients: { en: ['100% Whole Nigerian Brown Honey Beans (Vigna unguiculata)'], fr: ['100% Haricots bruns miel nigérians entiers'] },
    allergens: { en: 'Naturally Gluten-Free. Packed in a facility that handles pulses.', fr: 'Naturellement sans gluten.' },
    nutrition: {
      servingSize: '50g dry', calories: 170, fat: '0.8g', saturatedFat: '0.2g', transFat: '0g',
      cholesterol: '0mg', sodium: '15mg', carbs: '30g', fiber: '8g', sugars: '3g', protein: '12g'
    },
    cookingTips: {
      en: ['Soak overnight. Simmer with 1/2 jar of Taltis Jollof Sauce for effortless spiced beans.'],
      fr: ['Faire tremper toute une nuit. Mijoter avec 1/2 bocal de sauce Jollof Taltis pour des haricots épicés savoureux.'],
    },
    storage: { en: 'Store in an airtight container in a cool, dry pantry.', fr: 'Conserver dans un contenant hermétique au frais et au sec.' },
    rating: 5.0,
    reviewCount: 45,
  },
  {
    id: 'taltis-cameroon-penja-peppercorns',
    slug: 'artisanal-cameroon-penja-peppercorns-100g',
    name: {
      en: 'Artisanal Cameroonian Penja Black Peppercorns (100g)',
      fr: 'Poivre Noir Artisanal de Penja du Cameroun (100g)',
    },
    tagline: {
      en: 'Volcanic Soil Terroir · World-Renowned PGI Gourmet Spice',
      fr: 'Terroir de sol volcanique · Épice gastronomique IGP de renommée mondiale',
    },
    description: {
      en: 'Cultivated in the rich volcanic soils of Penja Valley, Cameroon. Globally celebrated by Michelin-starred chefs for its warm woody aroma, mild mentholated bite, and refined musky finish.',
      fr: 'Cultivé dans les sols volcaniques de la vallée de Penja au Cameroun. Célèbre dans le monde entier pour son arôme boisé, ses notes mentholées et sa finale musquée.',
    },
    price: 14.99,
    compareAtPrice: 17.50,
    volume: '100g (3.5 oz)',
    spiceLevel: 'Mild',
    spiceRating: 2,
    category: 'other-african',
    featured: true,
    inStock: true,
    images: [
      '/assets/aistudio/jollof_hot_listing_Image_3_ad1bad7f.jpg',
    ],
    ingredients: { en: ['100% Single-Estate Sun-Dried Penja Black Peppercorns (Cameroon)'], fr: ['100% Grains de poivre noir séchés au soleil de Penja (Cameroun)'] },
    allergens: { en: 'Gluten-Free, Pure Spice.', fr: 'Sans gluten, épice pure.' },
    nutrition: {
      servingSize: '1 tsp (2g)', calories: 5, fat: '0g', saturatedFat: '0g', transFat: '0g',
      cholesterol: '0mg', sodium: '0mg', carbs: '1g', fiber: '0.5g', sugars: '0g', protein: '0g'
    },
    cookingTips: { en: ['Grind fresh over grilled steaks, roasted salmon, or into tomato stews.'], fr: ['Moudre frais sur les grillades, le saumon ou les ragoûts de tomates.'] },
    storage: { en: 'Keep in glass jar away from direct sunlight.', fr: 'Conserver à l’abri de la lumière.' },
    rating: 5.0,
    reviewCount: 36,
  },
  {
    id: 'taltis-cold-pressed-red-palm-oil',
    slug: 'pure-cold-pressed-virgin-red-palm-oil-500ml',
    name: {
      en: 'Pure Cold-Pressed Virgin Red Palm Oil (500 mL)',
      fr: 'Huile de Palme Rouge Vierge Pressée à Froid (500 mL)',
    },
    tagline: {
      en: 'Sustainably Harvested · Rich in Carotenoids & Vitamin E',
      fr: 'Récolte durable · Riche en caroténoïdes et vitamine E',
    },
    description: {
      en: 'Ethically harvested from family-owned agroforestry smallholders in West Africa. Unrefined, unbleached, and chemical-free with an intense natural ruby-golden hue and earthy aroma.',
      fr: 'Récoltée de manière éthique en Afrique de l’Ouest. Non raffinée et sans produits chimiques, d’une couleur rubis dorée éclatante.',
    },
    price: 11.99,
    compareAtPrice: 13.99,
    volume: '500 mL Glass Jar',
    spiceLevel: 'Mild',
    spiceRating: 0,
    category: 'other-african',
    featured: false,
    inStock: true,
    images: [
      '/assets/aistudio/jollof_mild_listing_Image_6__1__071399e5.jpg',
    ],
    ingredients: { en: ['100% Pure Virgin Unrefined Red Palm Fruit Oil'], fr: ['100% Huile de palme rouge vierge non raffinée'] },
    allergens: { en: 'Gluten-Free, Vegan, Non-GMO.', fr: 'Sans gluten, végétalien.' },
    nutrition: {
      servingSize: '1 tbsp (15 mL)', calories: 120, fat: '14g', saturatedFat: '7g', transFat: '0g',
      cholesterol: '0mg', sodium: '0mg', carbs: '0g', fiber: '0g', sugars: '0g', protein: '0g'
    },
    cookingTips: { en: ['Use 1 tbsp to start traditional soups, yam pottage, or bean stews.'], fr: ['Utiliser 1 c. à soupe pour lancer vos soupes traditionnelles ou plats d’igname.'] },
    storage: { en: 'Room temperature.', fr: 'Température ambiante.' },
    rating: 4.8,
    reviewCount: 22,
  },
  {
    id: 'taltis-golden-fine-gari',
    slug: 'premium-golden-fine-gari-cassava-flakes-1kg',
    name: {
      en: 'Golden Fine Gari (Roasted Cassava Flakes — 1 kg)',
      fr: 'Gari Doré Fin (Semoule de Manioc Torréfiée — 1 kg)',
    },
    tagline: {
      en: 'Crisp & Tangy · Ideal for Eba or Refreshing Soaked Gari',
      fr: 'Croustillant et acidulé · Idéal pour l’Eba ou boisson fraîche',
    },
    description: {
      en: 'Fermented, peeled, grated, and traditionally dry-roasted cassava flakes. Fine grain texture that swells smoothly with hot water to form silky Eba, or enjoyed cold with milk, crushed peanuts, and coconut shavings.',
      fr: 'Manioc fermenté, râpé et torréfié au feu de bois. Texture fine parfaite pour l’Eba ou à déguster frais avec des arachides.',
    },
    price: 8.99,
    compareAtPrice: 10.50,
    volume: '1 kg',
    spiceLevel: 'Mild',
    spiceRating: 0,
    category: 'other-african',
    featured: false,
    inStock: true,
    images: [
      '/assets/aistudio/jollof_hot_listing_Image_2_7ca00003.jpg',
    ],
    ingredients: { en: ['100% Naturally Fermented Sun-Dried Cassava Root'], fr: ['100% Manioc fermenté naturellement'] },
    allergens: { en: 'Gluten-Free, Grain-Free.', fr: 'Sans gluten, sans céréales.' },
    nutrition: {
      servingSize: '40g', calories: 150, fat: '0g', saturatedFat: '0g', transFat: '0g',
      cholesterol: '0mg', sodium: '10mg', carbs: '36g', fiber: '2g', sugars: '1g', protein: '1g'
    },
    cookingTips: { en: ['Add gradually to boiling water, stirring rapidly with your wooden paddle (Mwiko).'], fr: ['Verser en pluie dans l’eau bouillante en remuant vigoureusement avec la spatule.'] },
    storage: { en: 'Keep sealed in pantry.', fr: 'Garder bien scellé au sec.' },
    rating: 4.7,
    reviewCount: 19,
  },
  {
    id: 'taltis-ground-egusi-seeds',
    slug: 'west-african-ground-egusi-melon-seeds-400g',
    name: {
      en: 'West African Ground Egusi Seeds (Melon Seeds — 400g)',
      fr: 'Graines d’Egusi Moulues Ouest-Africaines (Graines de Melon — 400g)',
    },
    tagline: {
      en: 'Protein-Rich Nutty Thickener for Legendary Egusi Soup',
      fr: 'Épaississant nutritif pour la soupe traditionnelle d’Egusi',
    },
    description: {
      en: 'Finely milled sun-dried melon seeds (Citrullus colocynthis). Prized across West Africa for creating the velvety, nutty curd base of celebratory Egusi soup. Packed with plant protein, magnesium, and healthy dietary fats.',
      fr: 'Graines de melon séchées au soleil et finement moulues. Ingrédient clé pour une soupe d’Egusi savoureuse et onctueuse.',
    },
    price: 12.99,
    compareAtPrice: 15.00,
    volume: '400g Pouch',
    spiceLevel: 'Mild',
    spiceRating: 0,
    category: 'other-african',
    featured: true,
    inStock: true,
    images: [
      '/assets/aistudio/jollof_hot_listing_Image_3_ad1bad7f.jpg',
    ],
    ingredients: { en: ['100% Pure Milled West African Egusi Melon Seeds'], fr: ['100% Graines de melon d’Egusi moulues pures'] },
    allergens: { en: 'Gluten-Free, Seed product.', fr: 'Sans gluten, produit à base de graines.' },
    nutrition: {
      servingSize: '30g', calories: 175, fat: '14g', saturatedFat: '2.5g', transFat: '0g',
      cholesterol: '0mg', sodium: '5mg', carbs: '4g', fiber: '2g', sugars: '1g', protein: '9g'
    },
    cookingTips: { en: ['Make a paste with warm water and simmer with Taltis Jollof Sauce for instant Egusi base.'], fr: ['Former une pâte avec un peu d’eau tiède et mijoter avec la sauce Jollof Taltis.'] },
    storage: { en: 'Refrigerate after opening to preserve natural oils.', fr: 'Réfrigérer après ouverture pour préserver les huiles.' },
    rating: 5.0,
    reviewCount: 28,
  },
  {
    id: 'taltis-hibiscus-zobo-calyces',
    slug: 'premium-whole-dried-hibiscus-calyces-zobo-250g',
    name: {
      en: 'Premium Dried Hibiscus Calyces (Zobo / Bissap — 250g)',
      fr: 'Fleurs d’Hibiscus Séchées de Qualité Supérieure (Bissap / Zobo — 250g)',
    },
    tagline: {
      en: 'Tart & Refreshing · Brew Ruby-Red African Herbal Tea & Drinks',
      fr: 'Acidulé et rafraîchissant · Pour boissons Bissap et thés bienfaisants',
    },
    description: {
      en: 'Sun-dried deep purple Hibiscus sabdariffa flowers. Known across Africa and the Caribbean as Zobo, Bissap, or Sorrel. High in Vitamin C and antioxidants; brews a vibrant ruby-red refreshment enjoyed hot or chilled with ginger and mint.',
      fr: 'Fleurs d’hibiscus séchées au soleil. Reconnues pour leur teneur en vitamine C et antioxydants ; idéal pour le Bissap rafraîchissant au gingembre et menthe.',
    },
    price: 9.49,
    compareAtPrice: 11.50,
    volume: '250g Bag',
    spiceLevel: 'Mild',
    spiceRating: 0,
    category: 'other-african',
    featured: false,
    inStock: true,
    images: [
      '/assets/aistudio/jollof_mild_listing_Image_6__1__071399e5.jpg',
    ],
    ingredients: { en: ['100% Whole Sun-Dried Natural Hibiscus Sabdariffa Calyces'], fr: ['100% Calices d’hibiscus sabdariffa séchés entiers'] },
    allergens: { en: 'Caffeine-Free, Gluten-Free, Pure Botanical.', fr: 'Sans caféine, sans gluten, plante pure.' },
    nutrition: {
      servingSize: '1 cup brewed', calories: 5, fat: '0g', saturatedFat: '0g', transFat: '0g',
      cholesterol: '0mg', sodium: '0mg', carbs: '1g', fiber: '0g', sugars: '0g', protein: '0g'
    },
    cookingTips: { en: ['Boil 1 cup flowers with 6 cups water, fresh crushed ginger, and cloves for 15 minutes.'], fr: ['Faire bouillir avec du gingembre frais écrasé et des clous de girofle pendant 15 minutes.'] },
    storage: { en: 'Store dry in an airtight jar.', fr: 'Garder au sec dans un bocal hermétique.' },
    rating: 4.9,
    reviewCount: 39,
  },

  // ==========================================
  // UPCOMING PRODUCTS
  // ==========================================
  {
    id: 'taltis-upcoming-suya-rub',
    slug: 'taltis-suya-pepper-spice-rub-150g',
    name: {
      en: 'Taltis Authentic Suya Pepper Spice Rub (150g)',
      fr: 'Assaisonnement Épicé pour Suya Traditionnel Taltis (150g)',
    },
    tagline: {
      en: 'Coming Fall 2026 · Roasted Peanut, Ginger & Chili Rub',
      fr: 'Arrive à l’automne 2026 · Arachides rôties, gingembre et piment',
    },
    description: {
      en: 'The legendary Northern Nigerian street food seasoning. Roasted defatted groundnuts, fragrant ginger, alligator pepper, garlic, and hot cayenne. Simply coat thinly sliced beef, chicken skewers, or roasted vegetables and grill over high heat.',
      fr: 'L’assaisonnement emblématique des rues nigérianes. Arachides torréfiées, gingembre parfumé, piment d’Afrique et ail pour sublimer vos brochettes.',
    },
    price: 8.99,
    compareAtPrice: 10.99,
    volume: '150g Shaker Bottle',
    spiceLevel: 'Hot',
    spiceRating: 4,
    category: 'upcoming',
    featured: true,
    inStock: false,
    images: [
      '/assets/aistudio/jollof_hot_listing_Image_6__1__71507092.jpg',
      '/assets/aistudio/jollof_hot_listing_Image_2_7ca00003.jpg',
    ],
    ingredients: { en: ['Roasted defatted peanuts, chili powder, ginger, garlic, sea salt, African spices'], fr: ['Arachides dégraissées torréfiées, piment, gingembre, ail, sel marin'] },
    allergens: { en: 'Contains Peanuts.', fr: 'Contient des arachides.' },
    nutrition: {
      servingSize: '5g (1 tsp)', calories: 25, fat: '1.5g', saturatedFat: '0.2g', transFat: '0g',
      cholesterol: '0mg', sodium: '120mg', carbs: '2g', fiber: '1g', sugars: '0.5g', protein: '1.5g'
    },
    cookingTips: { en: ['Dust generously onto grilled beef, lamb, or baked tofu.'], fr: ['Saupoudrer généreusement sur vos viandes grillées ou tofu.'] },
    storage: { en: 'Cool dry shelf.', fr: 'Endroit frais et sec.' },
    rating: 5.0,
    reviewCount: 0,
  },
  {
    id: 'taltis-upcoming-jollof-paste-pouch',
    slug: 'taltis-jollof-instant-cooking-paste-pouch-375g',
    name: {
      en: 'Taltis Concentrated Jollof Paste Pouch (375g)',
      fr: 'Poche de Pâte Concentrée pour Jollof Taltis (375g)',
    },
    tagline: {
      en: 'Coming Winter 2026 · Compact Travel & Camping Pouch',
      fr: 'Arrive à l’hiver 2026 · Format poche nomade pratique',
    },
    description: {
      en: 'A high-concentration simmer paste designed for lightweight pantry storage, camping adventures, and rapid 15-minute skillet meals. Yields up to 8 cups of cooked party Jollof rice.',
      fr: 'Une pâte de cuisson concentrée conçue pour un rangement compact et des repas express en 15 minutes à la poêle. Donne jusqu’à 8 tasses de riz.',
    },
    price: 9.99,
    compareAtPrice: 11.99,
    volume: '375g Spouted Pouch',
    spiceLevel: 'Hot',
    spiceRating: 3,
    category: 'upcoming',
    featured: true,
    inStock: false,
    images: [
      '/assets/aistudio/jollof_hot_pouch_Image_3__2__35c8a934.jpg',
      '/assets/aistudio/jollof_mild_pouch_Image_3_011cdb90.jpg',
    ],
    ingredients: { en: ['Concentrated roasted bell pepper paste, tomato concentrate, garlic, onions, spices'], fr: ['Pâte concentrée de poivrons rôtis, concentré de tomate, ail, oignons, épices'] },
    allergens: { en: 'Gluten-Free, Vegan.', fr: 'Sans gluten, végétalien.' },
    nutrition: {
      servingSize: '30g', calories: 45, fat: '2.5g', saturatedFat: '0.3g', transFat: '0g',
      cholesterol: '0mg', sodium: '240mg', carbs: '4g', fiber: '1g', sugars: '2g', protein: '1g'
    },
    cookingTips: { en: ['Dilute 1 part paste with 2 parts warm broth or water.'], fr: ['Diluer 1 part de pâte avec 2 parts de bouillon tiède.'] },
    storage: { en: 'Store at room temperature.', fr: 'Conserver à température ambiante.' },
    rating: 5.0,
    reviewCount: 0,
  },
  {
    id: 'taltis-upcoming-sweet-plantain-chips',
    slug: 'taltis-artisanal-sweet-plantain-chips-150g',
    name: {
      en: 'Taltis Artisanal Plantain Chips (Sweet Chili & Lime — 150g)',
      fr: 'Croustilles Artisanales de Bananes Plantains (Piment Doux & Lime — 150g)',
    },
    tagline: {
      en: 'Coming 2026 · Kettle Cooked in Pure Sunflower Oil',
      fr: 'Arrive en 2026 · Cuisson au chaudron à l’huile de tournesol',
    },
    description: {
      en: 'Hand-sliced ripe African plantains cooked to a golden crunch, dusted with our signature Taltis mild bell pepper and tangy key lime seasoning. Zero palm oil, no artificial preservatives.',
      fr: 'Bananes plantains mûres tranchées à la main, croustillantes et délicatement assaisonnées aux poivrons doux et à la lime.',
    },
    price: 4.99,
    compareAtPrice: 5.99,
    volume: '150g Bag',
    spiceLevel: 'Mild',
    spiceRating: 2,
    category: 'upcoming',
    featured: false,
    inStock: false,
    images: [
      '/assets/aistudio/jollof_mild_listing_Image_3__1__26d7d9c1.jpg',
    ],
    ingredients: { en: ['Ripe Yellow Plantains, High Oleic Sunflower Oil, Sea Salt, Taltis Mild Spice Blend'], fr: ['Plantains mûrs, huile de tournesol, sel marin, épices Taltis'] },
    allergens: { en: 'Gluten-Free, Vegan, Nut-Free.', fr: 'Sans gluten, végétalien, sans noix.' },
    nutrition: {
      servingSize: '28g (1 oz)', calories: 140, fat: '7g', saturatedFat: '1g', transFat: '0g',
      cholesterol: '0mg', sodium: '95mg', carbs: '18g', fiber: '2g', sugars: '6g', protein: '1g'
    },
    cookingTips: { en: ['Ready to eat snack or scoop into creamy avocado dips.'], fr: ['Prêt à déguster ou à tremper dans une sauce avocat.'] },
    storage: { en: 'Pantry.', fr: 'Garde-manger.' },
    rating: 5.0,
    reviewCount: 0,
  },

  // ==========================================
  // LIMITED EDITIONS
  // ==========================================
  {
    id: 'taltis-ghost-pepper-reserve-500ml',
    slug: 'taltis-ghost-pepper-scotch-bonnet-reserve-500ml',
    name: {
      en: 'Taltis Ghost Pepper & Scotch Bonnet Reserve (Numbered Batch — 500 mL)',
      fr: 'Réserve Piment Fantôme & Scotch Bonnet Taltis (Lot Numéroté — 500 mL)',
    },
    tagline: {
      en: 'Small Batch Limited Reserve · Heat Level 5/5',
      fr: 'Réserve exclusive limitée · Niveau de piquant 5/5',
    },
    description: {
      en: 'A collector’s edition crafted for serious chili connoisseurs. Blends slow-roasted fire-charred bell peppers with fiery West African Scotch bonnets and Bhut Jolokia (Ghost Pepper). Only 500 hand-numbered glass jars produced.',
      fr: 'Une édition collector pour les vrais amateurs de sensations fortes. Associe des poivrons rôtis au feu, des piments Scotch bonnet et du piment fantôme.',
    },
    price: 16.99,
    compareAtPrice: 19.99,
    volume: '500 mL Numbered Jar',
    spiceLevel: 'Extra Hot',
    spiceRating: 5,
    category: 'limited',
    featured: true,
    inStock: true,
    images: [
      '/assets/aistudio/jollof_hot_listing_Main_image_1_08cfc0e6.jpg',
      '/assets/aistudio/jollof_hot_listing_Image_6__1__71507092.jpg',
    ],
    ingredients: { en: ['Roasted red bell peppers, Scotch bonnet, Ghost pepper, onions, garlic, ginger, sunflower oil, sea salt'], fr: ['Poivrons rouges rôtis, Scotch bonnet, piment fantôme, oignons, ail, gingembre, huile de tournesol, sel marin'] },
    allergens: { en: 'Gluten-Free, Vegan, Dairy-Free.', fr: 'Sans gluten, végétalien.' },
    nutrition: {
      servingSize: '60 mL', calories: 70, fat: '4.5g', saturatedFat: '0.5g', transFat: '0g',
      cholesterol: '0mg', sodium: '300mg', carbs: '6g', fiber: '1g', sugars: '3g', protein: '1g'
    },
    cookingTips: { en: ['Add just 2-3 tablespoons to amplify any stew, soup, or chili base!'], fr: ['Ajoutez 2 à 3 cuillères pour enflammer vos ragoûts et soupes !'] },
    storage: { en: 'Refrigerate after opening.', fr: 'Réfrigérer après ouverture.' },
    rating: 5.0,
    reviewCount: 54,
  },
  {
    id: 'taltis-dragons-den-collector-box',
    slug: 'taltis-dragons-den-commemorative-collector-box',
    name: {
      en: "Taltis Dragons' Den Commemorative Wooden Gift Box",
      fr: "Coffret Cadeau en Bois Commémoratif Dragons' Den Taltis",
    },
    tagline: {
      en: 'Collector’s Keepsake Box · 2x 500 mL Jars + Booklet + Mwiko Spoon',
      fr: 'Coffret souvenir · 2x bocaux 500 mL + livret de recettes + cuillère Mwiko',
    },
    description: {
      en: "Celebrating Gilles Tchianga's historic appearance and investment deal on CBC's Dragons' Den. Presented in a laser-engraved solid pine wood gift chest containing 1x Mild Jar (500 mL), 1x Hot Jar (500 mL), the official printed Recipe Booklet Vol. 1, and a hand-carved African hardwood spoon.",
      fr: "Célébrant le passage historique et l’entente de Gilles Tchianga à l'émission Dragons' Den de Radio-Canada/CBC. Présenté dans un coffret en bois gravé avec les deux bocaux, le livret de recettes et la spatule en bois.",
    },
    price: 49.99,
    compareAtPrice: 59.99,
    volume: 'Curated Box Set',
    spiceLevel: 'Hot',
    spiceRating: 4,
    category: 'limited',
    featured: true,
    inStock: true,
    images: [
      '/assets/aistudio/jollof_hot_listing_Image_2_7ca00003.jpg',
      '/assets/aistudio/jollof_hot_listing_Main_image_1_08cfc0e6.jpg',
      '/assets/aistudio/jollof_mild_listing_Main_image_1__1___1__6e773ae9.jpg',
    ],
    ingredients: { en: ['Complete gift set with 2 full 500 mL jars, wooden utensil, recipe booklet'], fr: ['Coffret cadeau complet avec 2 bocaux 500 mL, ustensile et livret'] },
    allergens: { en: 'Gluten-Free, Vegan food items.', fr: 'Produits alimentaires sans gluten et végétaliens.' },
    nutrition: {
      servingSize: '60 mL', calories: 70, fat: '4.5g', saturatedFat: '0.5g', transFat: '0g',
      cholesterol: '0mg', sodium: '285mg', carbs: '6g', fiber: '1g', sugars: '3g', protein: '1g'
    },
    cookingTips: { en: ['The ultimate gift for foodies, home chefs, and lovers of African culture!'], fr: ['Le cadeau par excellence pour les passionnés de cuisine et de culture africaine !'] },
    storage: { en: 'Ambient temperature.', fr: 'Température ambiante.' },
    rating: 5.0,
    reviewCount: 68,
  },
];

// ==========================================
// 5 OFFICIAL RECIPES FROM THE TALTIS RECIPE BOOKLET (VOL. 1)
// ==========================================
export const INITIAL_RECIPES: Recipe[] = [
  {
    id: 'jollof-rice',
    slug: 'jollof-rice',
    title: {
      en: 'Jollof Rice',
      fr: 'Riz Jollof Authentique',
    },
    description: {
      en: 'The legendary one-pot West African rice dish made effortless with Taltis 500 mL Jollof Cooking Sauce. Tender, aromatic, and beautifully seasoned.',
      fr: 'Le plat de riz emblématique d’Afrique de l’Ouest rendu facile grâce à la sauce de cuisson Jollof Taltis 500 mL.',
    },
    category: 'rice',
    prepTimeMinutes: 5,
    cookTimeMinutes: 25,
    servings: 6,
    difficulty: 'Easy',
    productId: 'taltis-jollof-mild-500ml',
    imageUrl: '/assets/aistudio/jollof_mild_listing_Image_3__1__26d7d9c1.jpg',
    ingredients: {
      en: [
        '1 jar of Taltis Jollof Cooking Sauce (500 mL)',
        '2 cups of broth (vegetable, chicken, or beef)',
        '3 cups of Basmati rice',
        '4 tbsp of vegetable oil',
        'Salt to taste',
      ],
      fr: [
        '1 bocal de sauce de cuisson Jollof Taltis (500 mL)',
        '2 tasses de bouillon (légumes, poulet ou bœuf)',
        '3 tasses de riz Basmati',
        '4 c. à soupe d’huile végétale',
        'Sel au goût',
      ],
    },
    instructions: {
      en: [
        'Combine all the ingredients in a pot.',
        'Cook on medium heat for 4-5 mins, stirring occasionally.',
        'Close the lid, turn heat to medium-low, and let simmer until the broth is absorbed and rice grains are tender.',
        'Serve and enjoy with your choice of protein, salad, or plantain.',
      ],
      fr: [
        'Combiner tous les ingrédients dans une casserole.',
        'Cuire à feu moyen pendant 4 à 5 minutes en remuant de temps en temps.',
        'Couvrir, baisser à feu doux et laisser mijoter jusqu’à absorption complète du bouillon et cuisson du riz.',
        'Servir et savourer avec votre choix de protéines, de salade ou de bananes plantains.',
      ],
    },
    tip: {
      en: 'The more oil, the better the flavour.',
      fr: 'Plus vous ajoutez d’huile, meilleure est la saveur.',
    },
    quote: {
      en: 'Creamy jollof pasta blends the rich, smoky flavours of traditional jollof with Italian-inspired creaminess.',
      fr: 'Le riz Jollof unit la richesse des poivrons mijotés à la convivialité africaine.',
    },
  },
  {
    id: 'creamy-jollof-pasta',
    slug: 'creamy-jollof-pasta',
    title: {
      en: 'Creamy Jollof Pasta',
      fr: 'Pâtes Crémeuses au Jollof',
    },
    description: {
      en: 'Blends the rich, smoky flavours of traditional West African Jollof with Italian-inspired creaminess. Ready in under 15 minutes!',
      fr: 'Associe les saveurs fumées du Jollof traditionnel à l’onctuosité de la cuisine italienne. Prêt en moins de 15 minutes !',
    },
    category: 'pasta',
    prepTimeMinutes: 5,
    cookTimeMinutes: 10,
    servings: 6,
    difficulty: 'Easy',
    productId: 'taltis-jollof-hot-500ml',
    imageUrl: '/assets/aistudio/jollof_hot_listing_Image_3_ad1bad7f.jpg',
    ingredients: {
      en: [
        '1 jar of Taltis Jollof Cooking Sauce (500 mL)',
        '300 mL of cream milk (15% cream)',
        'Salt to taste',
        'Cooked pasta (penne, fettuccine, or rotini)',
      ],
      fr: [
        '1 bocal de sauce de cuisson Jollof Taltis (500 mL)',
        '300 mL de crème champêtre (15%)',
        'Sel au goût',
        'Pâtes cuites (pennes, fettuccines ou rotinis)',
      ],
    },
    instructions: {
      en: [
        'In your pot, combine Taltis Jollof Cooking Sauce + cream milk + salt.',
        'Stir, close the lid and simmer at medium-low heat.',
        'That’s it! Serve with pasta and enjoy!',
      ],
      fr: [
        'Dans votre casserole, mélanger la sauce de cuisson Jollof Taltis + la crème + le sel.',
        'Remuer, fermer le couvercle et laisser mijoter à feu moyen-doux.',
        'C’est tout ! Servir avec les pâtes et savourer !',
      ],
    },
    tip: {
      en: 'Boost the flavour with olive oil and grated cheese.',
      fr: 'Rehaussez la saveur avec un filet d’huile d’olive et du fromage râpé.',
    },
    quote: {
      en: 'African cuisine has never been so easy!',
      fr: 'La cuisine africaine n’a jamais été aussi facile !',
    },
  },
  {
    id: 'jollof-rice-beans-jerk',
    slug: 'jollof-rice-beans-and-jerk',
    title: {
      en: 'Jollof Rice w/ Beans & Jerk',
      fr: 'Riz Jollof aux Haricots & Jerk',
    },
    description: {
      en: 'The best of both worlds, blending West African and Caribbean culinary traditions into a vibrant, hearty one-pot meal.',
      fr: 'Le meilleur des deux mondes, mariant les saveurs ouest-africaines et antillaises en un plat généreux.',
    },
    category: 'rice',
    prepTimeMinutes: 5,
    cookTimeMinutes: 20,
    servings: 6,
    difficulty: 'Easy',
    productId: 'taltis-jollof-hot-500ml',
    imageUrl: '/assets/aistudio/jollof_hot_listing_Image_2_7ca00003.jpg',
    ingredients: {
      en: [
        '1 jar of Taltis Jollof Cooking Sauce (500 mL)',
        '3 cups of basmati rice',
        '200g pre-cooked red beans',
        '1 tbsp of jerk spice',
        '3 cups of any broth of your choice',
        'Salt to taste',
        '4-6 tsp of vegetable oil',
      ],
      fr: [
        '1 bocal de sauce de cuisson Jollof Taltis (500 mL)',
        '3 tasses de riz basmati',
        '200g de haricots rouges précuits',
        '1 c. à soupe d’épices jerk',
        '3 tasses de bouillon au choix',
        'Sel au goût',
        '4 à 6 c. à café d’huile végétale',
      ],
    },
    instructions: {
      en: [
        'In your rice cooker or pot, combine the rice + Taltis Jollof Cooking Sauce + broth + red beans + jerk spice + vegetable oil + salt.',
        'Stir, close the lid and let it cook.',
        'That’s it! Serve with grilled chicken and fresh salad.',
      ],
      fr: [
        'Dans votre cuiseur à riz ou casserole, mélanger le riz + sauce Jollof Taltis + bouillon + haricots rouges + épices jerk + huile + sel.',
        'Remuer, fermer le couvercle et laisser cuire.',
        'C’est tout ! Servir avec du poulet grillé et une salade fraîche.',
      ],
    },
    tip: {
      en: 'Boost the flavour and colour with soya sauce.',
      fr: 'Rehaussez la saveur et la couleur avec un trait de sauce soya.',
    },
    quote: {
      en: 'Hot pepper soup takes on many delicious variations across Africa, yet it’s always treasured as a comforting and revitalizing dish. Make it your own by adding green beans, noodles, or gnocchi for a taste you’ll love!',
      fr: 'Cette fusion festive grandit au fil des rassemblements, spectacles et célébrations partout au Canada !',
    },
  },
  {
    id: 'jollof-pepper-soup',
    slug: 'jollof-pepper-soup',
    title: {
      en: 'Jollof Pepper Soup',
      fr: 'Soupe au Poivre & Jollof',
    },
    description: {
      en: 'A revitalizing, soothing African soup infused with aromatic hot peppers and slow-simmered spices. Treasured across the continent for warming body and spirit.',
      fr: 'Une soupe africaine réconfortante et revitalisante infusée de piments aromatiques et d’épices mijotées.',
    },
    category: 'soup',
    prepTimeMinutes: 5,
    cookTimeMinutes: 20,
    servings: 6,
    difficulty: 'Medium',
    productId: 'taltis-jollof-hot-500ml',
    imageUrl: '/assets/aistudio/jollof_hot_listing_Image_6__1__71507092.jpg',
    ingredients: {
      en: [
        '1 jar of Taltis Jollof Cooking Sauce (500 mL)',
        '2 hot peppers (fresh scotch bonnet or habanero)',
        '3 cups of any broth of choice (chicken, beef, or vegetable)',
        '4 tbsp of vegetable oil',
        'Salt to taste',
        'Steamed noodles, gnocchi, or green beans to serve',
      ],
      fr: [
        '1 bocal de sauce de cuisson Jollof Taltis (500 mL)',
        '2 piments forts frais (scotch bonnet ou habanero)',
        '3 tasses de bouillon au choix (poulet, bœuf ou légumes)',
        '4 c. à soupe d’huile végétale',
        'Sel au goût',
        'Nouilles cuites à la vapeur, gnocchis ou haricots verts pour servir',
      ],
    },
    instructions: {
      en: [
        'In your pot, combine Taltis Jollof Cooking Sauce + broth + hot pepper + salt.',
        'Stir, close the lid and simmer at medium-low heat.',
        'Serve with steamed noodles and enjoy!',
      ],
      fr: [
        'Dans votre casserole, mélanger la sauce de cuisson Jollof Taltis + le bouillon + le piment fort + le sel.',
        'Remuer, fermer le couvercle et laisser mijoter à feu moyen-doux.',
        'Servir avec des nouilles à la vapeur et savourer !',
      ],
    },
    tip: {
      en: 'Boost the flavour with olive oil.',
      fr: 'Rehaussez la saveur avec un filet d’huile d’olive.',
    },
    quote: {
      en: 'The best of both worlds, blending African and Caribbean cuisines. This fusion is growing through parties, comedy shows, and festivals, so join in and enjoy!',
      fr: 'Un bouillon réconfortant et revigorant très prisé en Afrique pour réchauffer le corps et l’esprit.',
    },
  },
  {
    id: 'peanut-butter-soup',
    slug: 'peanut-butter-soup',
    title: {
      en: 'Peanut Butter Soup',
      fr: 'Soupe au Beurre d’Arachide',
    },
    description: {
      en: 'Peanut butter isn’t just for sandwiches! Many African countries use it to make a velvety, hearty peanut butter soup with sweet bell peppers and fragrant broth.',
      fr: 'Le beurre d’arachide n’est pas que pour les sandwichs ! Découvrez cette soupe onctueuse et réconfortante.',
    },
    category: 'soup',
    prepTimeMinutes: 5,
    cookTimeMinutes: 20,
    servings: 6,
    difficulty: 'Easy',
    productId: 'taltis-jollof-mild-500ml',
    imageUrl: '/assets/aistudio/jollof_hot_pouch_Image_5__1__a2d60c09.jpg',
    ingredients: {
      en: [
        '1/2 jar of Taltis Jollof Cooking Sauce (250 mL)',
        '5 cups of any broth of your choice',
        '5 tbsp of peanut butter (smooth or creamy)',
        'Salt to taste',
        'Steamed potatoes, cassava, toasted bread, or yam to serve',
      ],
      fr: [
        '1/2 bocal de sauce de cuisson Jollof Taltis (250 mL)',
        '5 tasses de bouillon au choix',
        '5 c. à soupe de beurre d’arachide crémeux',
        'Sel au goût',
        'Pommes de terre vapeur, manioc, pain grillé ou igname pour servir',
      ],
    },
    instructions: {
      en: [
        'In your pot, combine peanut butter + Taltis Jollof Cooking Sauce + broth + salt.',
        'Stir and simmer at medium heat until smooth and rich.',
        'Serve with steamed potatoes or cassava.',
      ],
      fr: [
        'Dans votre casserole, mélanger le beurre d’arachide + sauce Jollof Taltis + bouillon + sel.',
        'Remuer et laisser mijoter à feu moyen jusqu’à onctuosité.',
        'Servir avec des pommes de terre cuites à la vapeur ou du manioc.',
      ],
    },
    tip: {
      en: 'Adjust the thickness of the soup with more peanut butter to your preference.',
      fr: 'Ajustez l’onctuosité de la soupe avec plus de beurre d’arachide selon vos préférences.',
    },
    quote: {
      en: 'Peanut butter isn’t just for sandwiches, many African countries use it to make a delicious peanut butter soup! Experience it yourself with toasted bread, steamed potatoes, or yam!',
      fr: 'Le beurre d’arachide apporte une texture soyeuse et une profondeur irrésistible en cuisine africaine !',
    },
  },
];

// ==========================================
// RETAIL STORES ACROSS CANADA (As listed in official booklet)
// ==========================================
export const INITIAL_STORES: RetailStore[] = [
  {
    id: 'loblaws-queen-toronto-on',
    name: 'Loblaws Queen & Portland',
    banner: 'Loblaws',
    address: '501 Queen St W',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5V 2B4',
    phone: '(416) 504-8930',
    hours: 'Mon–Sun: 7:00 AM – 11:00 PM',
    lat: 43.6487,
    lng: -79.4002,
  },
  {
    id: 'nofrills-dufferin-toronto-on',
    name: 'No Frills Dufferin Mall',
    banner: 'No Frills',
    address: '900 Dufferin St',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M6H 4A9',
    phone: '(416) 534-8451',
    hours: 'Mon–Sun: 8:00 AM – 10:00 PM',
    lat: 43.6558,
    lng: -79.4357,
  },
  {
    id: 'sobeys-tenth-mississauga-on',
    name: 'Sobeys Tenth Line',
    banner: 'Sobeys',
    address: '5602 Tenth Line W',
    city: 'Mississauga',
    province: 'ON',
    postalCode: 'L5M 7L9',
    phone: '(905) 812-9856',
    hours: 'Mon–Sun: 7:00 AM – 11:00 PM',
    lat: 43.5684,
    lng: -79.7423,
  },
  {
    id: 'superstore-dufferin-on',
    name: 'Real Canadian Superstore Steeles',
    banner: 'Real Canadian Superstore',
    address: '2549 Steeles Ave W',
    city: 'North York',
    province: 'ON',
    postalCode: 'M3J 2P1',
    phone: '(416) 667-0800',
    hours: 'Mon–Sun: 7:00 AM – 11:00 PM',
    lat: 43.7824,
    lng: -79.4891,
  },
  {
    id: 'farm-boy-college-toronto-on',
    name: 'Farm Boy College & Bay',
    banner: 'Farm Boy',
    address: '777 Bay St',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5G 2C8',
    phone: '(416) 598-1110',
    hours: 'Mon–Sun: 7:00 AM – 9:00 PM',
    lat: 43.6601,
    lng: -79.3855,
  },
  {
    id: 'metro-etobicoke-on',
    name: 'Metro (The Junction / Etobicoke)',
    banner: 'Metro',
    address: '201 Lloyd Manor Rd',
    city: 'Etobicoke',
    province: 'ON',
    postalCode: 'M9B 6H6',
    phone: '(416) 233-1241',
    hours: 'Mon–Sun: 7:00 AM – 10:00 PM',
    lat: 43.6645,
    lng: -79.5542,
  },
  {
    id: 'marche-tropical-montreal-qc',
    name: 'Marché Tropical Saint-Léonard',
    banner: 'Specialty Grocer',
    address: '4520 Rue Jean-Talon E',
    city: 'Montréal',
    province: 'QC',
    postalCode: 'H1S 1K1',
    phone: '(514) 725-4550',
    hours: 'Mon–Sun: 9:00 AM – 8:00 PM',
    lat: 45.5721,
    lng: -73.5891,
  },
];

export const INITIAL_ORDERS: CustomerOrder[] = [
  {
    id: 'TLT-9842',
    date: '2026-10-28',
    customerName: 'Sarah Jenkins',
    email: 'sarah.j@gmail.com',
    shippingAddress: {
      address: '142 Queen St W, Apt 4B',
      city: 'Toronto',
      province: 'ON',
      postalCode: 'M5V 2M9',
      country: 'Canada',
    },
    items: [
      {
        productId: 'taltis-discovery-duo-bundle',
        productName: 'Taltis Discovery Duo Pack (1x Mild + 1x Hot)',
        volume: '2x 500 mL',
        quantity: 1,
        price: 23.99,
      },
      {
        productId: 'taltis-jollof-hot-500ml',
        productName: 'Taltis Jollof Sauce Hot — 500 mL',
        volume: '500 mL',
        quantity: 1,
        price: 12.99,
      },
    ],
    subtotal: 36.98,
    tax: 4.81,
    shipping: 9.99,
    total: 51.78,
    paymentMethod: 'Credit Card (CAD)',
    status: 'Confirmed',
  },
];

export const INITIAL_INQUIRIES: WholesaleInquiry[] = [
  {
    id: 'INQ-104',
    date: '2026-10-26',
    companyName: 'Boulangerie & Traiteur Sahel',
    contactName: 'Amadou Diallo',
    email: 'amadou@sahel-traiteur.ca',
    phone: '(514) 892-4112',
    businessType: 'Restaurant / Hospitality',
    location: 'Montreal, QC',
    estimatedVolume: '30–50 cases / month',
    message: 'Looking to use Taltis Jollof Hot 500 mL as our house base for corporate catering lunches.',
    status: 'Contacted',
  },
];
