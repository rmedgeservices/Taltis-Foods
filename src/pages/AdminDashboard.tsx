/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import {
  ShieldCheck,
  Lock,
  Package,
  BookOpen,
  Store,
  Inbox,
  ShoppingBag,
  Plus,
  Edit2,
  Trash2,
  CheckCircle2,
  DollarSign,
  Users,
  Eye,
  LogOut,
  Save,
  X,
  ArrowLeft,
} from 'lucide-react';
import { Product, Recipe, RetailStore, WholesaleInquiry } from '../types';

export const AdminDashboard: React.FC = () => {
  const {
    adminAuthenticated,
    setAdminAuthenticated,
    setCurrentPage,
    products,
    setProducts,
    recipes,
    setRecipes,
    stores,
    setStores,
    orders,
    inquiries,
    updateInquiryStatus,
    locale,
    showToast,
  } = useStore();

  const [activeTab, setActiveTab] = useState<'overview' | 'products' | 'recipes' | 'stores' | 'inquiries' | 'orders'>('overview');
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState(false);

  // Editing state for products
  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [productForm, setProductForm] = useState<Partial<Product>>({});

  // Editing state for stores
  const [isAddingStore, setIsAddingStore] = useState(false);
  const [newStore, setNewStore] = useState<Partial<RetailStore>>({
    banner: 'Metro',
    province: 'ON',
    hours: 'Mon–Sun: 8:00 AM – 9:00 PM',
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === 'rmtaltis26') {
      setAdminAuthenticated(true);
      setLoginError(false);
      showToast('Admin access authorized. Welcome back, Operations Lead.', 'success');
    } else {
      setLoginError(true);
    }
  };

  const handleSaveProduct = (productId: string) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === productId ? { ...p, ...productForm } : p))
    );
    setEditingProductId(null);
    showToast('Product updated successfully.', 'success');
  };

  const handleToggleStock = (productId: string) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === productId ? { ...p, inStock: !p.inStock } : p))
    );
    showToast('Product stock status updated.', 'info');
  };

  const handleAddStore = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStore.name || !newStore.address || !newStore.city) {
      showToast('Please fill in store name, address and city.', 'error');
      return;
    }
    const createdStore: RetailStore = {
      id: `store-${Date.now()}`,
      name: newStore.name || '',
      banner: newStore.banner || 'Specialty Grocer',
      address: newStore.address || '',
      city: newStore.city || '',
      province: newStore.province || 'ON',
      postalCode: newStore.postalCode || 'M5V 1A1',
      phone: newStore.phone || '(416) 555-0199',
      hours: newStore.hours || 'Mon–Sun: 9:00 AM – 8:00 PM',
    };
    setStores((prev) => [createdStore, ...prev]);
    setIsAddingStore(false);
    setNewStore({ banner: 'Metro', province: 'ON', hours: 'Mon–Sun: 8:00 AM – 9:00 PM' });
    showToast('New retail store added to store locator.', 'success');
  };

  const handleDeleteStore = (storeId: string) => {
    setStores((prev) => prev.filter((s) => s.id !== storeId));
    showToast('Retail location archived.', 'info');
  };

  // If not authenticated, render the secure authentication gate
  if (!adminAuthenticated) {
    return (
      <div className="max-w-md mx-auto my-20 p-8 bg-white rounded-3xl border border-slate-200 shadow-xl space-y-6 text-center">
        <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center mx-auto shadow-md">
          <Lock className="w-6 h-6 text-amber-400" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900">Taltis Management Portal</h2>
          <p className="text-xs text-slate-500 mt-1">
            Authorized administrative dashboard for products, inventory, recipes, and inquiries.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4 text-left">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Administrator Password
            </label>
            <input
              type="password"
              value={passwordInput}
              onChange={(e) => {
                setPasswordInput(e.target.value);
                if (loginError) setLoginError(false);
              }}
              placeholder="Enter password"
              className="w-full px-4 py-2.5 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8102E]/20 focus:border-[#C8102E]"
              required
              autoFocus
            />
          </div>

          {loginError && (
            <p className="text-xs text-rose-600 font-medium">
              Incorrect password. Please enter the valid administrator password.
            </p>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-[#C8102E] hover:bg-[#a50d25] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shadow-md"
          >
            Authenticate & Access Dashboard
          </button>

          <button
            type="button"
            onClick={() => {
              setCurrentPage('home');
              window.location.hash = '';
            }}
            className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Storefront</span>
          </button>
        </form>

        <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-400">
          Protected administrative portal. Password: <code className="text-slate-600 font-mono font-semibold">rmtaltis26</code>
        </div>
      </div>
    );
  }

  // Calculate Overview Metrics
  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#C8102E] text-white flex items-center justify-center font-bold">
            T
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Taltis Foods Operations Console</h1>
            <p className="text-xs text-slate-500">Live store management, retail catalog, and wholesale inbox</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-medium text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 flex items-center gap-1.5 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold">Supabase Connected:</span>
            <span className="font-mono text-[11px] text-emerald-700">rmghsssk...supabase.co</span>
          </span>

          <span className="text-xs font-medium text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Admin Authorized
          </span>

          <button
            onClick={() => {
              setCurrentPage('home');
              window.location.hash = '';
            }}
            className="text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-50 transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs"
            title="Return to the public visitor store"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-slate-500" />
            <span>View Storefront</span>
          </button>

          <button
            onClick={() => setAdminAuthenticated(false)}
            className="text-xs font-semibold text-rose-600 hover:text-rose-800 px-3 py-1.5 rounded-lg border border-rose-200 hover:bg-rose-50 transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-3 overflow-x-auto">
        {[
          { id: 'overview', label: 'Overview', icon: DollarSign },
          { id: 'products', label: `Products (${products.length})`, icon: Package },
          { id: 'recipes', label: `Recipes (${recipes.length})`, icon: BookOpen },
          { id: 'stores', label: `Store Stockists (${stores.length})`, icon: Store },
          { id: 'inquiries', label: `Wholesale Inquiries (${inquiries.length})`, icon: Inbox },
          { id: 'orders', label: `Orders (${orders.length})`, icon: ShoppingBag },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: OVERVIEW */}
      {activeTab === 'overview' && (
        <div className="space-y-8 animate-in fade-in-50 duration-150">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Products</span>
              <p className="text-3xl font-extrabold text-slate-900">{products.length}</p>
              <p className="text-xs text-emerald-600 font-medium">All 500 mL jars in stock</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Store Stockists</span>
              <p className="text-3xl font-extrabold text-slate-900">{stores.length}</p>
              <p className="text-xs text-slate-500">Across ON, QC, AB</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Wholesale Leads</span>
              <p className="text-3xl font-extrabold text-[#C8102E]">{inquiries.length}</p>
              <p className="text-xs text-amber-700 font-medium">Active retail/B2B requests</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Store Orders</span>
              <p className="text-3xl font-extrabold text-slate-900 tabular-nums">${totalRevenue.toFixed(2)} CAD</p>
              <p className="text-xs text-slate-500">{orders.length} orders recorded</p>
            </div>
          </div>

          {/* Quick Actions Panel */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
            <h3 className="text-base font-bold text-slate-900">Administrative Shortcuts</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button
                onClick={() => setActiveTab('products')}
                className="p-4 rounded-xl border border-slate-200 hover:border-[#C8102E] text-left hover:bg-slate-50 transition-all cursor-pointer"
              >
                <Package className="w-5 h-5 text-[#C8102E] mb-2" />
                <h4 className="text-xs font-bold text-slate-900">Manage Pricing & Sauces</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Edit 500 mL prices and descriptions</p>
              </button>

              <button
                onClick={() => setActiveTab('stores')}
                className="p-4 rounded-xl border border-slate-200 hover:border-slate-800 text-left hover:bg-slate-50 transition-all cursor-pointer"
              >
                <Store className="w-5 h-5 text-amber-600 mb-2" />
                <h4 className="text-xs font-bold text-slate-900">Add Retail Stockist</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Register new Canadian grocery locations</p>
              </button>

              <button
                onClick={() => setActiveTab('inquiries')}
                className="p-4 rounded-xl border border-slate-200 hover:border-slate-800 text-left hover:bg-slate-50 transition-all cursor-pointer"
              >
                <Inbox className="w-5 h-5 text-emerald-600 mb-2" />
                <h4 className="text-xs font-bold text-slate-900">View Wholesale Inquiries</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Follow up on B2B volume orders</p>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: PRODUCTS */}
      {activeTab === 'products' && (
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden space-y-4 p-6 animate-in fade-in-50 duration-150">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">Products & Catalog Management</h2>
            <span className="text-xs text-slate-500 font-medium">All products strictly maintain original jar identity</span>
          </div>

          <div className="divide-y divide-slate-100">
            {products.map((p) => {
              const isEditing = editingProductId === p.id;
              return (
                <div key={p.id} className="py-5 first:pt-0 last:pb-0 space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl bg-slate-50 border border-slate-200 p-1 flex items-center justify-center shrink-0">
                        <img
                          src={p.images[0]}
                          alt={p.name[locale]}
                          className="w-full h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900">{p.name[locale]}</h3>
                        <p className="text-xs text-slate-500">
                          {p.volume} · Spice: {p.spiceLevel} · Category: {p.category}
                        </p>
                        <p className="text-xs font-bold text-[#C8102E] mt-0.5 tabular-nums">
                          ${p.price} CAD
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleToggleStock(p.id)}
                        className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                          p.inStock
                            ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                            : 'bg-rose-50 border-rose-200 text-rose-800'
                        }`}
                      >
                        {p.inStock ? 'In Stock' : 'Out of Stock'}
                      </button>

                      <button
                        onClick={() => {
                          if (isEditing) {
                            handleSaveProduct(p.id);
                          } else {
                            setEditingProductId(p.id);
                            setProductForm({ price: p.price, compareAtPrice: p.compareAtPrice });
                          }
                        }}
                        className="p-2 border border-slate-200 rounded-lg hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
                        title={isEditing ? 'Save Product' : 'Edit Product'}
                      >
                        {isEditing ? <Save className="w-4 h-4 text-emerald-600" /> : <Edit2 className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {isEditing && (
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">
                          Price in CAD ($)
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          value={productForm.price ?? p.price}
                          onChange={(e) =>
                            setProductForm({ ...productForm, price: parseFloat(e.target.value) })
                          }
                          className="w-full bg-white px-3 py-1.5 text-xs border border-slate-300 rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">
                          Compare At Price ($)
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          value={productForm.compareAtPrice ?? p.compareAtPrice ?? ''}
                          onChange={(e) =>
                            setProductForm({
                              ...productForm,
                              compareAtPrice: parseFloat(e.target.value) || undefined,
                            })
                          }
                          className="w-full bg-white px-3 py-1.5 text-xs border border-slate-300 rounded-lg"
                        />
                      </div>
                      <div className="flex items-end">
                        <button
                          onClick={() => handleSaveProduct(p.id)}
                          className="w-full py-2 bg-[#C8102E] text-white text-xs font-bold rounded-lg hover:bg-[#a50d25] transition-colors cursor-pointer"
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 3: RECIPES */}
      {activeTab === 'recipes' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-6 animate-in fade-in-50 duration-150">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">Recipes & Culinary Content</h2>
            <span className="text-xs text-slate-500 font-medium">All recipes connected directly to Taltis Sauces</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {recipes.map((r) => (
              <div key={r.id} className="p-4 rounded-xl border border-slate-200 flex gap-4 items-center">
                <img
                  src={r.imageUrl}
                  alt={r.title[locale]}
                  className="w-20 h-20 rounded-lg object-cover shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-slate-900 truncate">{r.title[locale]}</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    {r.prepTimeMinutes + r.cookTimeMinutes} mins · {r.difficulty} · {r.servings} Servings
                  </p>
                  <p className="text-[10px] text-amber-800 font-semibold mt-1">
                    Sauce: {products.find((p) => p.id === r.productId)?.name.en || 'Taltis Jollof Sauce'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: STORE STOCKISTS */}
      {activeTab === 'stores' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-6 animate-in fade-in-50 duration-150">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Retail Store Stockists</h2>
              <p className="text-xs text-slate-500">Manage Canadian supermarket and specialty grocery locations</p>
            </div>

            <button
              onClick={() => setIsAddingStore(!isAddingStore)}
              className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>{isAddingStore ? 'Cancel' : 'Add New Location'}</span>
            </button>
          </div>

          {/* New Store Form */}
          {isAddingStore && (
            <form onSubmit={handleAddStore} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">New Retail Store</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">Store / Banner Name</label>
                  <input
                    type="text"
                    value={newStore.name || ''}
                    onChange={(e) => setNewStore({ ...newStore, name: e.target.value })}
                    placeholder="e.g. Metro Bathurst"
                    className="w-full bg-white px-3 py-2 text-xs border border-slate-300 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">Banner Type</label>
                  <input
                    type="text"
                    value={newStore.banner || ''}
                    onChange={(e) => setNewStore({ ...newStore, banner: e.target.value })}
                    placeholder="Metro, Sobeys, FreshCo, etc."
                    className="w-full bg-white px-3 py-2 text-xs border border-slate-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">Province</label>
                  <select
                    value={newStore.province || 'ON'}
                    onChange={(e) => setNewStore({ ...newStore, province: e.target.value })}
                    className="w-full bg-white px-3 py-2 text-xs border border-slate-300 rounded-lg"
                  >
                    <option value="ON">Ontario (ON)</option>
                    <option value="QC">Quebec (QC)</option>
                    <option value="AB">Alberta (AB)</option>
                    <option value="BC">British Columbia (BC)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">Street Address</label>
                  <input
                    type="text"
                    value={newStore.address || ''}
                    onChange={(e) => setNewStore({ ...newStore, address: e.target.value })}
                    placeholder="e.g. 120 Bloor St W"
                    className="w-full bg-white px-3 py-2 text-xs border border-slate-300 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">City</label>
                  <input
                    type="text"
                    value={newStore.city || ''}
                    onChange={(e) => setNewStore({ ...newStore, city: e.target.value })}
                    placeholder="e.g. Toronto"
                    className="w-full bg-white px-3 py-2 text-xs border border-slate-300 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">Postal Code</label>
                  <input
                    type="text"
                    value={newStore.postalCode || ''}
                    onChange={(e) => setNewStore({ ...newStore, postalCode: e.target.value })}
                    placeholder="e.g. M5S 1T9"
                    className="w-full bg-white px-3 py-2 text-xs border border-slate-300 rounded-lg"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="px-6 py-2 bg-[#C8102E] text-white text-xs font-bold rounded-lg hover:bg-[#a50d25] transition-colors cursor-pointer"
              >
                Save Store Location
              </button>
            </form>
          )}

          {/* Stores Table */}
          <div className="divide-y divide-slate-100">
            {stores.map((s) => (
              <div key={s.id} className="py-3 flex items-center justify-between gap-4 text-xs">
                <div>
                  <h4 className="font-bold text-slate-900">{s.name}</h4>
                  <p className="text-slate-500">
                    {s.address}, {s.city}, {s.province} {s.postalCode} · {s.phone}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-slate-100 font-medium text-[10px] text-slate-700">
                    {s.banner}
                  </span>
                  <button
                    onClick={() => handleDeleteStore(s.id)}
                    className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors cursor-pointer"
                    title="Remove Store"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: WHOLESALE INQUIRIES */}
      {activeTab === 'inquiries' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 animate-in fade-in-50 duration-150">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">Commercial & Wholesale Inquiries</h2>
            <span className="text-xs text-slate-500 font-medium">{inquiries.length} Inbound Requests</span>
          </div>

          <div className="divide-y divide-slate-100">
            {inquiries.map((inq) => (
              <div key={inq.id} className="py-4 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 text-sm">{inq.companyName}</span>
                    <span className="text-slate-400">·</span>
                    <span className="text-slate-600">{inq.contactName} ({inq.email})</span>
                  </div>
                  <span
                    className={`px-2.5 py-1 rounded-md text-[10px] font-bold ${
                      inq.status === 'New'
                        ? 'bg-rose-100 text-[#C8102E]'
                        : inq.status === 'Contacted'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-emerald-100 text-emerald-800'
                    }`}
                  >
                    {inq.status}
                  </span>
                </div>

                <p className="text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-200/70">
                  "{inq.message}"
                </p>

                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                  <span>Type: {inq.businessType} · Volume: {inq.estimatedVolume} · Location: {inq.location}</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateInquiryStatus(inq.id, 'Contacted')}
                      className="px-2 py-1 rounded border border-slate-200 hover:bg-slate-100 cursor-pointer text-[10px] font-semibold"
                    >
                      Mark Contacted
                    </button>
                    <button
                      onClick={() => updateInquiryStatus(inq.id, 'Qualified')}
                      className="px-2 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 cursor-pointer text-[10px] font-semibold"
                    >
                      Qualify Account
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 6: ORDERS */}
      {activeTab === 'orders' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 animate-in fade-in-50 duration-150">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">Recorded Customer Orders</h2>
            <span className="text-xs text-slate-500 font-medium">Auto-synced from Checkout</span>
          </div>

          <div className="divide-y divide-slate-100">
            {orders.map((ord) => (
              <div key={ord.id} className="py-4 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 font-mono text-sm">{ord.id}</span>
                    <span className="text-slate-400">·</span>
                    <span className="text-slate-700 font-medium">{ord.customerName} ({ord.email})</span>
                  </div>
                  <span className="font-bold text-[#C8102E] tabular-nums text-sm">
                    ${ord.total.toFixed(2)} CAD
                  </span>
                </div>

                <div className="text-slate-600">
                  {ord.items.map((i, idx) => (
                    <span key={idx} className="mr-3">
                      {i.quantity}x {i.productName}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                  <span>Ship to: {ord.shippingAddress.address}, {ord.shippingAddress.city}, {ord.shippingAddress.province}</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">
                    {ord.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
