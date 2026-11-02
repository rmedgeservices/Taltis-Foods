/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Flame, Check, ArrowRight } from 'lucide-react';
import { ProductCategory } from '../types';

export const ShopPage: React.FC = () => {
  const { products, t, locale, viewProduct, addToCart } = useStore();
  const [activeCategory, setActiveCategory] = useState<'all' | ProductCategory>('all');
  const [heatFilter, setHeatFilter] = useState<'all' | 'Mild' | 'Hot'>('all');

  const filteredProducts = products.filter((p) => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesHeat = heatFilter === 'all' || p.spiceLevel === heatFilter;
    return matchesCategory && matchesHeat;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#C8102E]">
          {locale === 'en' ? 'The Authentic Collection' : 'La Collection Authentique'}
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          {locale === 'en' ? 'Shop Taltis Jollof Sauces' : 'Magasiner les Sauces Jollof Taltis'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          {locale === 'en'
            ? 'Real 500 mL glass jars handcrafted in Canada. Free Canadian shipping on orders over $50 CAD.'
            : 'Véritables bocaux en verre de 500 mL fabriqués au Canada. Livraison gratuite dès 50 $ CAD.'}
        </p>
      </div>

      {/* Filter Tabs (Functional Button Segmented Controls) */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {locale === 'en' ? 'All Products' : 'Tous les produits'}
          </button>
          <button
            onClick={() => setActiveCategory('sauces')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === 'sauces'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {locale === 'en' ? '500 mL Sauces' : 'Sauces 500 mL'}
          </button>
          <button
            onClick={() => setActiveCategory('bundles')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === 'bundles'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {locale === 'en' ? 'Value Bundles' : 'Lots Avantageux'}
          </button>
          <button
            onClick={() => setActiveCategory('accessories')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === 'accessories'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {locale === 'en' ? 'Kitchen Accessories' : 'Accessoires de Cuisine'}
          </button>
          <button
            onClick={() => setActiveCategory('other-african')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === 'other-african'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {locale === 'en' ? 'Other African Products' : 'Autres Produits Africains'}
          </button>
          <button
            onClick={() => setActiveCategory('limited')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === 'limited'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {locale === 'en' ? 'Limited Editions' : 'Éditions Limitées'}
          </button>
          <button
            onClick={() => setActiveCategory('upcoming')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === 'upcoming'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {locale === 'en' ? 'Upcoming' : 'À venir'}
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-slate-500">Spice:</span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setHeatFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                heatFilter === 'all'
                  ? 'border-slate-800 bg-slate-800 text-white'
                  : 'border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setHeatFilter('Mild')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                heatFilter === 'Mild'
                  ? 'border-amber-600 bg-amber-600 text-white'
                  : 'border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              Mild
            </button>
            <button
              onClick={() => setHeatFilter('Hot')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                heatFilter === 'Hot'
                  ? 'border-[#C8102E] bg-[#C8102E] text-white'
                  : 'border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              Hot
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-200 group"
          >
            <div className="space-y-4">
              {/* Product Image Stage */}
              <div
                onClick={() => viewProduct(product.id)}
                className="relative aspect-4/3 bg-[#FAF8F5] rounded-xl overflow-hidden p-6 flex items-center justify-center cursor-pointer"
              >
                <img
                  src={product.images[0]}
                  alt={product.name[locale]}
                  className="h-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />

                {/* Heat Badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs ${
                      product.spiceLevel === 'Hot'
                        ? 'bg-[#C8102E] text-white'
                        : 'bg-amber-100 text-amber-900 border border-amber-200'
                    }`}
                  >
                    {product.spiceLevel}
                  </span>
                </div>

                {product.compareAtPrice && (
                  <div className="absolute top-3 right-3 bg-emerald-700 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    SAVE ${(product.compareAtPrice - product.price).toFixed(2)}
                  </div>
                )}
              </div>

              {/* Text Info */}
              <div>
                <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                  <span>{product.volume}</span>
                  <span>·</span>
                  <span>Glass Jar</span>
                  <span>·</span>
                  <span className="flex items-center text-amber-600 font-semibold">
                    <Flame className="w-3 h-3 fill-amber-500 text-amber-500 mr-0.5" />
                    Heat {product.spiceRating}/5
                  </span>
                </div>

                <h3
                  onClick={() => viewProduct(product.id)}
                  className="text-lg font-bold text-slate-900 mt-1 cursor-pointer hover:text-[#C8102E] transition-colors"
                >
                  {product.name[locale]}
                </h3>

                <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                  {product.description[locale]}
                </p>
              </div>

              {/* Price & Status */}
              <div className="pt-2 flex items-baseline gap-2">
                <span className="text-xl font-extrabold text-slate-900 tabular-nums">
                  ${product.price} CAD
                </span>
                {product.compareAtPrice && (
                  <span className="text-xs text-slate-400 line-through tabular-nums">
                    ${product.compareAtPrice} CAD
                  </span>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 grid grid-cols-2 gap-3 border-t border-slate-100 mt-4">
              <button
                onClick={() => viewProduct(product.id)}
                className="py-2.5 px-3 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs font-bold transition-colors cursor-pointer text-center"
              >
                Details
              </button>
              <button
                onClick={() => addToCart(product, 1)}
                className="py-2.5 px-3 rounded-xl bg-[#C8102E] hover:bg-[#a50d25] text-white text-xs font-bold transition-colors cursor-pointer shadow-sm text-center"
              >
                {t.product.addToCart}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
