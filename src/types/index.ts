/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Locale = 'en' | 'fr';

export type SpiceLevel = 'Mild' | 'Hot' | 'Extra Hot';

export type ProductCategory = 'sauces' | 'bundles' | 'accessories' | 'other-african' | 'limited' | 'upcoming';

export interface NutritionInfo {
  servingSize: string;
  calories: number;
  fat: string;
  saturatedFat: string;
  transFat: string;
  cholesterol: string;
  sodium: string;
  carbs: string;
  fiber: string;
  sugars: string;
  protein: string;
}

export interface Product {
  id: string;
  slug: string;
  name: {
    en: string;
    fr: string;
  };
  tagline: {
    en: string;
    fr: string;
  };
  description: {
    en: string;
    fr: string;
  };
  price: number; // in CAD
  compareAtPrice?: number;
  volume: string; // "500 mL"
  spiceLevel: SpiceLevel;
  spiceRating: number; // 1 to 5
  category: ProductCategory;
  featured: boolean;
  inStock: boolean;
  images: string[];
  ingredients: {
    en: string[];
    fr: string[];
  };
  allergens: {
    en: string;
    fr: string;
  };
  nutrition: NutritionInfo;
  cookingTips: {
    en: string[];
    fr: string[];
  };
  storage: {
    en: string;
    fr: string;
  };
  rating: number;
  reviewCount: number;
}

export interface Recipe {
  id: string;
  slug: string;
  title: {
    en: string;
    fr: string;
  };
  description: {
    en: string;
    fr: string;
  };
  category: 'rice' | 'pasta' | 'soup' | 'stew' | 'seafood';
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Advanced';
  productId: string; // Associated product ID
  imageUrl: string;
  ingredients: {
    en: string[];
    fr: string[];
  };
  instructions: {
    en: string[];
    fr: string[];
  };
  tip?: {
    en: string;
    fr: string;
  };
  quote?: {
    en: string;
    fr: string;
  };
}

export interface RetailStore {
  id: string;
  name: string;
  banner: string; // e.g. "Metro", "Sobeys", "FreshCo", "Specialty Food Market"
  address: string;
  city: string;
  province: string;
  postalCode: string;
  phone: string;
  hours: string;
  lat?: number;
  lng?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CustomerOrder {
  id: string;
  date: string;
  customerName: string;
  email: string;
  shippingAddress: {
    address: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
  };
  items: {
    productId: string;
    productName: string;
    volume: string;
    quantity: number;
    price: number;
  }[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  paymentMethod: string;
  status: 'Confirmed' | 'Processing' | 'Shipped';
}

export interface WholesaleInquiry {
  id: string;
  date: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  businessType: 'Retail Grocery' | 'Restaurant / Hospitality' | 'Distributor' | 'Institutional Foodservice' | 'Other';
  location: string;
  estimatedVolume: string;
  message: string;
  status: 'New' | 'Contacted' | 'Qualified' | 'Closed';
}
