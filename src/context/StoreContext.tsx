/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Locale, Product, Recipe, RetailStore, CartItem, CustomerOrder, WholesaleInquiry } from '../types';
import { translations } from '../i18n/translations';
import { INITIAL_PRODUCTS, INITIAL_RECIPES, INITIAL_STORES, INITIAL_ORDERS, INITIAL_INQUIRIES } from '../data/initialData';
import {
  fetchProducts,
  fetchRecipes,
  fetchStores,
  fetchOrders,
  fetchWholesaleInquiries,
  saveOrderToSupabase,
  saveWholesaleInquiryToSupabase,
  updateWholesaleInquiryStatusInSupabase,
} from '../lib/supabase';

interface ToastState {
  message: string;
  type: 'success' | 'info' | 'error';
}

interface StoreContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: typeof translations.en;
  currentPage: string;
  setCurrentPage: (page: string) => void;
  selectedProductId: string | null;
  setSelectedProductId: (id: string | null) => void;
  viewProduct: (id: string) => void;
  selectedRecipeId: string | null;
  setSelectedRecipeId: (id: string | null) => void;
  viewRecipe: (id: string) => void;
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  recipes: Recipe[];
  setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
  stores: RetailStore[];
  setStores: React.Dispatch<React.SetStateAction<RetailStore[]>>;
  orders: CustomerOrder[];
  addOrder: (order: CustomerOrder) => void;
  inquiries: WholesaleInquiry[];
  addInquiry: (inquiry: Omit<WholesaleInquiry, 'id' | 'date' | 'status'>) => void;
  updateInquiryStatus: (id: string, status: WholesaleInquiry['status']) => void;
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartSubtotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  toast: ToastState | null;
  showToast: (message: string, type?: 'success' | 'info' | 'error') => void;
  adminAuthenticated: boolean;
  setAdminAuthenticated: (auth: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>('en');
  const [currentPage, setCurrentPage] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      const params = new URLSearchParams(window.location.search);
      if (hash === '#admin' || params.has('admin')) {
        return 'admin';
      }
    }
    return 'home';
  });
  const [selectedProductId, setSelectedProductId] = useState<string | null>('taltis-jollof-mild-500ml');
  const [selectedRecipeId, setSelectedRecipeId] = useState<string | null>(null);
  
  // Persistent or stateful items
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [recipes, setRecipes] = useState<Recipe[]>(INITIAL_RECIPES);
  const [stores, setStores] = useState<RetailStore[]>(INITIAL_STORES);
  const [orders, setOrders] = useState<CustomerOrder[]>(INITIAL_ORDERS);
  const [inquiries, setInquiries] = useState<WholesaleInquiry[]>(INITIAL_INQUIRIES);
  const [cart, setCart] = useState<CartItem[]>([
    { product: INITIAL_PRODUCTS[0], quantity: 1 },
    { product: INITIAL_PRODUCTS[1], quantity: 1 }
  ]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [toast, setToast] = useState<ToastState | null>(null);
  const [adminAuthenticated, setAdminAuthenticated] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const t = translations[locale];

  const toggleLocale = () => {
    setLocale((prev) => (prev === 'en' ? 'fr' : 'en'));
  };

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3800);
  };

  const viewProduct = (id: string) => {
    setSelectedProductId(id);
    setCurrentPage('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const viewRecipe = (id: string) => {
    setSelectedRecipeId(id);
    setCurrentPage('recipes');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(
      locale === 'en'
        ? `Added ${product.name.en} to your bag.`
        : `Ajouté ${product.name.fr} à votre panier.`,
      'success'
    );
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const cartSubtotal = Number(
    cart.reduce((total, item) => total + item.product.price * item.quantity, 0).toFixed(2)
  );

  // Load initial data from Supabase if configured and populated
  useEffect(() => {
    let isMounted = true;
    const loadSupabaseData = async () => {
      try {
        const [remoteProducts, remoteRecipes, remoteStores, remoteInquiries, remoteOrders] = await Promise.all([
          fetchProducts(),
          fetchRecipes(),
          fetchStores(),
          fetchWholesaleInquiries(),
          fetchOrders(),
        ]);

        if (!isMounted) return;
        if (remoteProducts && remoteProducts.length > 0) setProducts(remoteProducts);
        if (remoteRecipes && remoteRecipes.length > 0) setRecipes(remoteRecipes);
        if (remoteStores && remoteStores.length > 0) setStores(remoteStores);
        if (remoteInquiries && remoteInquiries.length > 0) setInquiries(remoteInquiries);
        if (remoteOrders && remoteOrders.length > 0) setOrders(remoteOrders);
      } catch (err) {
        console.warn('Initial Supabase fetch fallback to local data:', err);
      }
    };

    loadSupabaseData();
    return () => {
      isMounted = false;
    };
  }, []);

  const addOrder = (order: CustomerOrder) => {
    setOrders((prev) => [order, ...prev]);
    saveOrderToSupabase(order).catch((err) =>
      console.warn('Could not persist order to Supabase:', err)
    );
  };

  const addInquiry = (inquiryData: Omit<WholesaleInquiry, 'id' | 'date' | 'status'>) => {
    const newInquiry: WholesaleInquiry = {
      ...inquiryData,
      id: `INQ-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toISOString().split('T')[0],
      status: 'New',
    };
    setInquiries((prev) => [newInquiry, ...prev]);
    saveWholesaleInquiryToSupabase(newInquiry).catch((err) =>
      console.warn('Could not persist wholesale inquiry to Supabase:', err)
    );
  };

  const updateInquiryStatus = (id: string, status: WholesaleInquiry['status']) => {
    setInquiries((prev) =>
      prev.map((inq) => (inq.id === id ? { ...inq, status } : inq))
    );
    updateWholesaleInquiryStatusInSupabase(id, status).catch((err) =>
      console.warn('Could not update status in Supabase:', err)
    );
  };

  // Scroll to top on page navigation & sync hash if admin
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    if (currentPage === 'admin') {
      if (window.location.hash !== '#admin') {
        window.location.hash = 'admin';
      }
    } else if (window.location.hash === '#admin') {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, [currentPage]);

  // Listen for browser URL hash changes (e.g. typing #admin in browser)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#admin') {
        setCurrentPage('admin');
      } else if (hash === '#home' || hash === '') {
        setCurrentPage((prev) => (prev === 'admin' ? 'home' : prev));
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Keyboard shortcut for site owner: Ctrl + Shift + A or Cmd + Shift + A or Alt + Shift + A
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        ((e.ctrlKey || e.metaKey || e.altKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) ||
        (e.altKey && (e.key === 'a' || e.key === 'A'))
      ) {
        e.preventDefault();
        setCurrentPage('admin');
        window.location.hash = 'admin';
        showToast('Admin shortcut triggered: Opening operations portal...', 'info');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <StoreContext.Provider
      value={{
        locale,
        setLocale,
        toggleLocale,
        t,
        currentPage,
        setCurrentPage,
        selectedProductId,
        setSelectedProductId,
        viewProduct,
        selectedRecipeId,
        setSelectedRecipeId,
        viewRecipe,
        products,
        setProducts,
        recipes,
        setRecipes,
        stores,
        setStores,
        orders,
        addOrder,
        inquiries,
        addInquiry,
        updateInquiryStatus,
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        cartCount,
        cartSubtotal,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        toast,
        showToast,
        adminAuthenticated,
        setAdminAuthenticated,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
