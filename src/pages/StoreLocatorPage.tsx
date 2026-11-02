/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { MapPin, Search, Phone, Clock, ExternalLink, Navigation, Store, ShoppingBag } from 'lucide-react';

export const StoreLocatorPage: React.FC = () => {
  const { stores, t, locale, setCurrentPage } = useStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBanner, setSelectedBanner] = useState('all');

  const banners = ['all', ...Array.from(new Set(stores.map((s) => s.banner)))];

  const filteredStores = stores.filter((store) => {
    const matchesBanner = selectedBanner === 'all' || store.banner === selectedBanner;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === '' ||
      store.city.toLowerCase().includes(query) ||
      store.name.toLowerCase().includes(query) ||
      store.postalCode.toLowerCase().includes(query) ||
      store.address.toLowerCase().includes(query) ||
      store.province.toLowerCase().includes(query);

    return matchesBanner && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#C8102E]">
          {locale === 'en' ? 'Physical Retail Partners' : 'Partenaires Détaillants'}
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          {t.stores.title}
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          {t.stores.subtitle}
        </p>
      </div>

      {/* Search and Retailer Filters */}
      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="relative flex-1 w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.stores.searchPlaceholder}
              className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E]/20 focus:border-[#C8102E]"
            />
            <Search className="w-5 h-5 text-slate-400 absolute left-3 top-3.5 pointer-events-none" />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            {banners.map((b) => (
              <button
                key={b}
                onClick={() => setSelectedBanner(b)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedBanner === b
                    ? 'bg-slate-900 text-white'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {b === 'all' ? t.stores.filterBanner : b}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
          <span>
            Showing <strong className="text-slate-800">{filteredStores.length}</strong> retail locations
          </span>
          <span className="text-amber-800 font-medium">
            Pro Tip: Call store ahead to confirm real-time shelf inventory.
          </span>
        </div>
      </div>

      {/* Store Cards Grid */}
      {filteredStores.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-4 max-w-lg mx-auto">
          <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
            <MapPin className="w-7 h-7" />
          </div>
          <h3 className="text-base font-bold text-slate-900">
            {t.stores.noStoresFound}
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            We deliver direct across Ontario, Quebec, Alberta, British Columbia, and all Canadian provinces with free delivery on orders over $50 CAD.
          </p>
          <button
            onClick={() => setCurrentPage('shop')}
            className="px-6 py-2.5 bg-[#C8102E] text-white text-xs font-bold rounded-xl hover:bg-[#a50d25] transition-colors cursor-pointer shadow-sm"
          >
            {t.stores.orderOnline}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStores.map((store) => (
            <div
              key={store.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-200 space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                    {store.banner}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">{store.province}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#C8102E] transition-colors">
                  {store.name}
                </h3>

                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>{store.address}, {store.city}, {store.province} {store.postalCode}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{store.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{store.hours}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    `${store.name} ${store.address} ${store.city} ${store.province}`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C8102E] hover:underline"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>{t.stores.getDirections}</span>
                </a>

                <span className="text-[11px] text-slate-400">Stocking 500 mL Jollof</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Retail Partnership Callout */}
      <div className="p-8 rounded-3xl bg-amber-50/70 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-left">
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            {t.stores.stockistInquiry}
          </h3>
          <p className="text-xs text-slate-600">
            Join leading Canadian supermarkets and independent markets stocking Taltis Foods.
          </p>
        </div>
        <button
          onClick={() => setCurrentPage('wholesale')}
          className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shrink-0"
        >
          Partner with Taltis
        </button>
      </div>
    </div>
  );
};
