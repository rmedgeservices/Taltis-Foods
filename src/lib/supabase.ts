/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createClient } from '@supabase/supabase-js';
import { Product, Recipe, RetailStore, WholesaleInquiry, CustomerOrder } from '../types';

// Sanitize user provided URL (strip any trailing /rest/v1 or trailing slashes)
const rawUrl = (import.meta.env.VITE_SUPABASE_URL || 'https://rmghssskuhmlourpyfed.supabase.co').trim();
export const SUPABASE_URL = rawUrl.replace(/\/rest\/v1\/?$/, '').replace(/\/$/, '');
export const SUPABASE_ANON_KEY = (
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtZ2hzc3NrdWhtbG91cnB5ZmVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM2MDIxOTMsImV4cCI6MjEwOTE3ODE5M30.ajtI19UmRjRgPbZ5oThk8PcPI6Ptp5I9KW0JGb5RVoY'
).trim();

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ============================================================================
// DATA FETCHING HELPERS WITH SAFE FALLBACK
// ============================================================================

export async function fetchProducts(): Promise<Product[] | null> {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('featured', { ascending: false });

    if (error || !data || data.length === 0) {
      if (error) console.info('Supabase products notice (using local fallback if empty):', error.message);
      return null;
    }

    return data.map((row: any) => ({
      id: row.id,
      slug: row.slug,
      name: { en: row.name_en, fr: row.name_fr },
      tagline: { en: row.tagline_en || '', fr: row.tagline_fr || '' },
      description: { en: row.description_en || '', fr: row.description_fr || '' },
      price: Number(row.price),
      compareAtPrice: row.compare_at_price ? Number(row.compare_at_price) : undefined,
      volume: row.volume || '500 mL',
      spiceLevel: row.spice_level,
      spiceRating: Number(row.spice_rating || 1),
      category: row.category,
      featured: Boolean(row.featured),
      inStock: Boolean(row.in_stock),
      images: Array.isArray(row.images) ? row.images : [],
      ingredients: {
        en: Array.isArray(row.ingredients_en) ? row.ingredients_en : [],
        fr: Array.isArray(row.ingredients_fr) ? row.ingredients_fr : [],
      },
      allergens: { en: row.allergens_en || '', fr: row.allergens_fr || '' },
      nutrition: row.nutrition || {
        servingSize: '60 mL',
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
        en: Array.isArray(row.cooking_tips_en) ? row.cooking_tips_en : [],
        fr: Array.isArray(row.cooking_tips_fr) ? row.cooking_tips_fr : [],
      },
      storage: { en: row.storage_en || '', fr: row.storage_fr || '' },
      rating: Number(row.rating || 5),
      reviewCount: Number(row.review_count || 0),
    }));
  } catch (err) {
    console.warn('Failed to load products from Supabase:', err);
    return null;
  }
}

export async function fetchRecipes(): Promise<Recipe[] | null> {
  try {
    const { data, error } = await supabase.from('recipes').select('*');
    if (error || !data || data.length === 0) return null;

    return data.map((row: any) => ({
      id: row.id,
      slug: row.slug,
      title: { en: row.title_en, fr: row.title_fr },
      description: { en: row.description_en || '', fr: row.description_fr || '' },
      category: row.category,
      prepTimeMinutes: Number(row.prep_time_minutes || 15),
      cookTimeMinutes: Number(row.cook_time_minutes || 30),
      servings: Number(row.servings || 4),
      difficulty: row.difficulty,
      productId: row.product_id,
      imageUrl: row.image_url,
      ingredients: {
        en: Array.isArray(row.ingredients_en) ? row.ingredients_en : [],
        fr: Array.isArray(row.ingredients_fr) ? row.ingredients_fr : [],
      },
      instructions: {
        en: Array.isArray(row.instructions_en) ? row.instructions_en : [],
        fr: Array.isArray(row.instructions_fr) ? row.instructions_fr : [],
      },
      tip: row.tip_en ? { en: row.tip_en, fr: row.tip_fr || '' } : undefined,
      quote: row.quote_en ? { en: row.quote_en, fr: row.quote_fr || '' } : undefined,
    }));
  } catch (err) {
    console.warn('Failed to load recipes from Supabase:', err);
    return null;
  }
}

export async function fetchStores(): Promise<RetailStore[] | null> {
  try {
    const { data, error } = await supabase.from('retail_stores').select('*');
    if (error || !data || data.length === 0) return null;

    return data.map((row: any) => ({
      id: row.id,
      name: row.name,
      banner: row.banner,
      address: row.address,
      city: row.city,
      province: row.province,
      postalCode: row.postal_code,
      phone: row.phone,
      hours: row.hours,
      lat: row.lat ? Number(row.lat) : undefined,
      lng: row.lng ? Number(row.lng) : undefined,
    }));
  } catch (err) {
    console.warn('Failed to load retail stores from Supabase:', err);
    return null;
  }
}

export async function fetchWholesaleInquiries(): Promise<WholesaleInquiry[] | null> {
  try {
    const { data, error } = await supabase
      .from('wholesale_inquiries')
      .select('*')
      .order('created_at', { ascending: false });

    if (error || !data || data.length === 0) return null;

    return data.map((row: any) => ({
      id: row.id,
      date: row.created_at ? new Date(row.created_at).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
      companyName: row.company_name,
      contactName: row.contact_name,
      email: row.email,
      phone: row.phone,
      businessType: row.business_type,
      location: row.location,
      estimatedVolume: row.estimated_volume,
      message: row.message,
      status: row.status,
    }));
  } catch (err) {
    console.warn('Failed to load wholesale inquiries from Supabase:', err);
    return null;
  }
}

export async function fetchOrders(): Promise<CustomerOrder[] | null> {
  try {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .order('created_at', { ascending: false });

    if (error || !data || data.length === 0) return null;

    return data.map((row: any) => ({
      id: row.id,
      date: row.created_at ? new Date(row.created_at).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
      customerName: row.customer_name,
      email: row.email,
      shippingAddress: row.shipping_address,
      items: row.items,
      subtotal: Number(row.subtotal),
      tax: Number(row.tax),
      shipping: Number(row.shipping),
      total: Number(row.total),
      paymentMethod: row.payment_method,
      status: row.status,
    }));
  } catch (err) {
    console.warn('Failed to load orders from Supabase:', err);
    return null;
  }
}

// ============================================================================
// MUTATION HELPERS
// ============================================================================

export async function saveOrderToSupabase(order: CustomerOrder): Promise<boolean> {
  try {
    const { error } = await supabase.from('orders').insert({
      id: order.id,
      customer_name: order.customerName,
      email: order.email,
      shipping_address: order.shippingAddress,
      items: order.items,
      subtotal: order.subtotal,
      tax: order.tax,
      shipping: order.shipping,
      total: order.total,
      payment_method: order.paymentMethod,
      status: order.status,
    });

    if (error) {
      console.warn('Supabase order insert note:', error.message);
      return false;
    }
    return true;
  } catch (err) {
    console.warn('Error saving order to Supabase:', err);
    return false;
  }
}

export async function saveWholesaleInquiryToSupabase(
  inquiry: WholesaleInquiry
): Promise<boolean> {
  try {
    const { error } = await supabase.from('wholesale_inquiries').insert({
      id: inquiry.id,
      company_name: inquiry.companyName,
      contact_name: inquiry.contactName,
      email: inquiry.email,
      phone: inquiry.phone,
      business_type: inquiry.businessType,
      location: inquiry.location,
      estimated_volume: inquiry.estimatedVolume,
      message: inquiry.message,
      status: inquiry.status,
    });

    if (error) {
      console.warn('Supabase wholesale inquiry insert note:', error.message);
      return false;
    }
    return true;
  } catch (err) {
    console.warn('Error saving wholesale inquiry to Supabase:', err);
    return false;
  }
}

export async function updateWholesaleInquiryStatusInSupabase(
  id: string,
  status: WholesaleInquiry['status']
): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('wholesale_inquiries')
      .update({ status })
      .eq('id', id);

    if (error) {
      console.warn('Supabase wholesale status update note:', error.message);
      return false;
    }
    return true;
  } catch (err) {
    console.warn('Error updating wholesale inquiry status in Supabase:', err);
    return false;
  }
}

export async function saveNewsletterSubscriberToSupabase(email: string): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert({ email: email.trim().toLowerCase() });

    if (error) {
      console.warn('Supabase newsletter subscriber note:', error.message);
      return false;
    }
    return true;
  } catch (err) {
    console.warn('Error saving newsletter subscriber to Supabase:', err);
    return false;
  }
}

export async function saveContactMessageToSupabase(messageData: {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}): Promise<boolean> {
  try {
    const { error } = await supabase.from('contact_messages').insert({
      name: messageData.name,
      email: messageData.email,
      phone: messageData.phone || '',
      subject: messageData.subject || 'General Inquiry',
      message: messageData.message,
      status: 'unread',
    });

    if (error) {
      console.warn('Supabase contact message note:', error.message);
      return false;
    }
    return true;
  } catch (err) {
    console.warn('Error saving contact message to Supabase:', err);
    return false;
  }
}
