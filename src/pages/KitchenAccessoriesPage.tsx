/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useStore } from '../context/StoreContext';
import { Sparkles, Utensils, ShoppingBag, ShieldCheck, ArrowRight, Heart } from 'lucide-react';

export const KitchenAccessoriesPage: React.FC = () => {
  const { t, locale, products, addToCart, viewProduct, setCurrentPage } = useStore();

  const accessories = products.filter((p) => p.category === 'accessories');

  return (
    <div className="bg-[#FAF9F5] min-h-screen text-slate-900 pb-24">
      {/* Header */}
      <section className="bg-[#E51A24] bg-dots-red text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-black/25 text-amber-300 px-4 py-1.5 rounded-full text-xs font-condensed uppercase tracking-widest font-extrabold mb-4">
            <Utensils className="w-4 h-4" />
            <span>HERITAGE CULINARY TOOLS · HANDCRAFTED ARTISAN QUALITY</span>
          </div>

          <h1
            className="font-condensed uppercase font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-none text-white drop-shadow-md"
            style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
          >
            AFRICAN KITCHEN ACCESSORIES
          </h1>

          <p className="max-w-2xl mx-auto text-white/90 text-base sm:text-lg mt-4 font-normal leading-relaxed">
            {locale === 'en'
              ? 'Elevate your culinary craft with authentic African cookware and utensils. From traditional hand-carved wooden paddles (Mwiko) to heavy enamelled cast iron pots designed for the ultimate smoky Jollof crust.'
              : 'Sublimez votre cuisine avec des ustensiles et batteries de cuisine africains authentiques. De la spatule en bois Mwiko aux cocottes en fonte adaptées aux saveurs fumées.'}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setCurrentPage('other-african')}
              className="px-6 py-2.5 bg-black/40 hover:bg-black/60 border border-amber-300/40 text-amber-300 font-condensed uppercase font-extrabold text-xs sm:text-sm rounded-full transition-colors cursor-pointer"
            >
              Explore Other African Products &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* Main Product Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-200">
          <div>
            <h2 className="font-condensed uppercase font-black text-3xl text-slate-900">
              TRADITIONAL CULINARY ESSENTIALS
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              Time-tested cookware built for authentic heat retention, effortless aeration, and decades of family feasts.
            </p>
          </div>
          <span className="font-condensed font-black text-xs uppercase tracking-wider text-[#E51A24] bg-rose-50 border border-rose-200 px-3 py-1.5 rounded-xl">
            {accessories.length} ACCESSORIES AVAILABLE
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {accessories.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl border border-stone-200 hover:border-[#E51A24] transition-all p-5 shadow-sm hover:shadow-xl flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-condensed uppercase tracking-wider font-extrabold text-stone-400 block mb-1">
                  {product.volume}
                </span>

                <h3
                  onClick={() => viewProduct(product.id)}
                  className="font-condensed uppercase font-black text-xl text-slate-900 group-hover:text-[#E51A24] transition-colors cursor-pointer line-clamp-2 leading-tight"
                >
                  {product.name[locale]}
                </h3>

                <p className="text-[11px] font-semibold text-amber-700 mt-1 line-clamp-1">
                  {product.tagline[locale]}
                </p>

                {/* Product Photo */}
                <div
                  onClick={() => viewProduct(product.id)}
                  className="h-52 bg-stone-50 rounded-2xl p-4 my-4 flex items-center justify-center cursor-pointer group-hover:bg-rose-50/30 transition-colors overflow-hidden"
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
              </div>

              {/* Price & Cart */}
              <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] uppercase font-bold text-stone-400 block">PRICE</span>
                  <span className="text-xl font-black text-slate-950">
                    ${product.price.toFixed(2)}{' '}
                    <span className="text-xs font-normal text-stone-500">CAD</span>
                  </span>
                </div>

                <button
                  onClick={() => addToCart(product, 1)}
                  className="px-5 py-2.5 bg-[#E51A24] hover:bg-[#c8102e] text-white font-condensed uppercase tracking-wider font-extrabold text-xs rounded-full shadow transition-transform hover:scale-105 cursor-pointer flex items-center gap-1.5"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>{locale === 'en' ? 'ADD TO BAG' : 'AJOUTER'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Craftsmanship Guarantee */}
      <section className="max-w-5xl mx-auto px-4 mt-20">
        <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-10 border border-stone-800 flex flex-col md:flex-row items-center gap-8">
          <div className="w-16 h-16 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div>
            <h3 className="font-condensed uppercase font-black text-2xl text-white">
              LIFETIME ARTISANAL CRAFTSMANSHIP GUARANTEE
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 mt-1 leading-relaxed">
              Every wooden Mwiko and cast iron Dutch oven in our accessory collection is inspected to meet professional kitchen standards. Ethically crafted, food-safe, and designed to last through generations of lively celebrations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
