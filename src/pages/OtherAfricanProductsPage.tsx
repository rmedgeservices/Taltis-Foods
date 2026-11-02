/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useStore } from '../context/StoreContext';
import { Sparkles, ShoppingBag, Globe, CheckCircle2, ArrowRight } from 'lucide-react';

export const OtherAfricanProductsPage: React.FC = () => {
  const { t, locale, products, addToCart, viewProduct, setCurrentPage } = useStore();

  const pantryItems = products.filter((p) => p.category === 'other-african');

  return (
    <div className="bg-[#FAF9F5] min-h-screen text-slate-900 pb-24">
      {/* Header */}
      <section className="bg-[#18181B] bg-dots-dark text-white py-16 sm:py-20 relative overflow-hidden border-b-4 border-amber-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 border border-amber-400/40 px-4 py-1.5 rounded-full text-xs font-condensed uppercase tracking-widest font-extrabold mb-4">
            <Globe className="w-4 h-4 text-amber-400" />
            <span>AUTHENTIC AFRICAN PANTRY STAPLES · DIRECT ETHICAL SOURCING</span>
          </div>

          <h1
            className="font-condensed uppercase font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-none text-white drop-shadow-md"
            style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
          >
            OTHER AFRICAN PRODUCTS
          </h1>

          <p className="max-w-2xl mx-auto text-stone-300 text-base sm:text-lg mt-4 font-normal leading-relaxed">
            {locale === 'en'
              ? 'Complete your authentic African feast. Premium Nigerian honey beans (Oloyin), single-origin Penja volcanic black peppercorns, unrefined virgin red palm oil, and golden gari.'
              : 'Complétez votre festin africain authentique. Haricots miel du Nigeria (Oloyin), poivre noir volcanique de Penja, huile de palme rouge vierge et gari doré.'}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setCurrentPage('accessories')}
              className="px-6 py-2.5 bg-white text-slate-900 font-condensed uppercase font-extrabold text-xs sm:text-sm rounded-full shadow hover:bg-amber-100 transition-colors cursor-pointer"
            >
              &larr; Kitchen Accessories
            </button>
            <button
              onClick={() => setCurrentPage('shop')}
              className="px-6 py-2.5 bg-[#E51A24] hover:bg-[#c8102e] text-white font-condensed uppercase font-extrabold text-xs sm:text-sm rounded-full transition-colors cursor-pointer"
            >
              View 500 mL Sauces
            </button>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-200">
          <div>
            <h2 className="font-condensed uppercase font-black text-3xl text-slate-900">
              PANTRY &amp; WHOLE FOOD ESSENTIALS
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              Ethically imported and packaged in Canada under strict CFIA food safety guidelines.
            </p>
          </div>
          <span className="font-condensed font-black text-xs uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-200 px-3 py-1.5 rounded-xl">
            {pantryItems.length} PANTRY PRODUCTS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pantryItems.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl border-2 border-stone-200 hover:border-[#E51A24] transition-all p-6 shadow-sm hover:shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-condensed uppercase font-extrabold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md">
                    {product.volume}
                  </span>
                  <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">
                    {product.inStock ? 'IN STOCK' : 'PRE-ORDER'}
                  </span>
                </div>

                <h3
                  onClick={() => viewProduct(product.id)}
                  className="font-condensed uppercase font-black text-2xl text-slate-900 group-hover:text-[#E51A24] transition-colors cursor-pointer leading-tight"
                >
                  {product.name[locale]}
                </h3>

                <p className="text-xs font-semibold text-stone-500 mt-1">
                  {product.tagline[locale]}
                </p>

                {/* Photo container */}
                <div
                  onClick={() => viewProduct(product.id)}
                  className="h-56 bg-stone-50 rounded-2xl p-4 my-4 flex items-center justify-center cursor-pointer group-hover:bg-rose-50/20 transition-colors overflow-hidden"
                >
                  <img
                    src={product.images[0]}
                    alt={product.name[locale]}
                    className="max-h-full max-w-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                  {product.description[locale]}
                </p>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-2 text-xs text-emerald-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{product.allergens[locale]}</span>
                </div>
              </div>

              {/* Price & Add */}
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] uppercase font-bold text-stone-400 block tracking-wider">
                    PRICE
                  </span>
                  <span className="text-2xl font-black text-slate-950">
                    ${product.price.toFixed(2)}{' '}
                    <span className="text-xs font-normal text-stone-500">CAD</span>
                  </span>
                </div>

                <button
                  onClick={() => addToCart(product, 1)}
                  className="px-6 py-2.5 bg-[#E51A24] hover:bg-[#c8102e] text-white font-condensed uppercase tracking-wider font-extrabold text-xs sm:text-sm rounded-full shadow transition-transform hover:scale-105 cursor-pointer flex items-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{locale === 'en' ? 'ADD TO BAG' : 'AJOUTER'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recipe Pairing Hook */}
      <section className="max-w-4xl mx-auto px-4 mt-20 text-center">
        <div className="bg-[#E51A24] bg-dots-red text-white rounded-3xl p-8 sm:p-10 shadow-xl">
          <h3 className="font-condensed uppercase font-black text-3xl sm:text-4xl">
            PAIR WITH OUR 500 ML JOLLOF SAUCES
          </h3>
          <p className="text-sm text-white/90 mt-2 max-w-xl mx-auto">
            These authentic staples are designed to work harmoniously with our 500 mL Jollof sauces. Browse the official Taltis Recipe Booklet for instant cooking inspiration.
          </p>
          <div className="mt-6">
            <button
              onClick={() => setCurrentPage('recipes')}
              className="px-8 py-3.5 bg-black hover:bg-stone-800 text-white font-condensed uppercase font-black text-sm rounded-full shadow-lg cursor-pointer"
            >
              DISCOVER BOOKLET RECIPES &rarr;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
