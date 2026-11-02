/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useStore } from '../context/StoreContext';
import { Sparkles, ShieldCheck, Flame, ShoppingBag, ArrowRight, Award } from 'lucide-react';

export const LimitedEditionsPage: React.FC = () => {
  const { t, locale, products, addToCart, viewProduct, setCurrentPage } = useStore();

  const limitedProducts = products.filter((p) => p.category === 'limited');

  return (
    <div className="bg-[#FAF9F5] min-h-screen text-slate-900 pb-24">
      {/* Header */}
      <section className="bg-[#18181B] bg-dots-dark text-white py-16 sm:py-20 relative overflow-hidden border-b-4 border-amber-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 border border-amber-400/40 px-4 py-1.5 rounded-full text-xs font-condensed uppercase tracking-widest font-extrabold mb-4">
            <Award className="w-4 h-4 text-amber-400" />
            <span>COLLECTOR’S RESERVE · SMALL BATCH ARTISAN CRAFT</span>
          </div>

          <h1
            className="font-condensed uppercase font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-none text-white drop-shadow-md"
            style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
          >
            LIMITED EDITIONS
          </h1>

          <p className="max-w-2xl mx-auto text-stone-300 text-base sm:text-lg mt-4 font-normal leading-relaxed">
            {locale === 'en'
              ? 'Rare ingredients, extreme heat profiles, and commemorative celebratory gift sets. Produced in strictly limited quantities and never mass-manufactured.'
              : 'Ingrédients rares, profils pimentés extrêmes et coffrets commémoratifs exclusifs. Produits en quantités strictement limitées.'}
          </p>
        </div>
      </section>

      {/* Product List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-200">
          <div>
            <h2 className="font-condensed uppercase font-black text-3xl text-slate-900">
              CURRENT ARCHIVE &amp; NUMBERED BATCHES
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              Once sold out, these formulations enter the Taltis Culinary Vault.
            </p>
          </div>
          <span className="font-condensed font-black text-xs uppercase tracking-wider text-amber-800 bg-amber-100 border border-amber-200 px-3 py-1.5 rounded-xl">
            LIMITED SUPPLY AVAILABLE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {limitedProducts.map((product) => {
            return (
              <div
                key={product.id}
                className="bg-white rounded-3xl border-2 border-amber-400/60 hover:border-amber-500 transition-all p-6 sm:p-8 shadow-md hover:shadow-2xl flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Gold Crest Stamp */}
                <div className="absolute top-4 right-4 bg-amber-400 text-slate-950 font-condensed uppercase font-black text-xs px-3 py-1.5 rounded-full shadow-sm tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>LIMITED BATCH</span>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-condensed uppercase font-extrabold text-[#E51A24]">
                      {product.volume}
                    </span>
                    <span className="text-stone-300">·</span>
                    <span className="text-xs font-bold text-amber-600 uppercase font-condensed tracking-wider">
                      {product.spiceLevel} HEAT (RATING {product.spiceRating}/5)
                    </span>
                  </div>

                  <h3
                    onClick={() => viewProduct(product.id)}
                    className="font-condensed uppercase font-black text-2xl sm:text-3xl text-slate-900 group-hover:text-[#E51A24] transition-colors cursor-pointer leading-tight"
                  >
                    {product.name[locale]}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
                    {product.tagline[locale]}
                  </p>

                  {/* Visual container */}
                  <div
                    onClick={() => viewProduct(product.id)}
                    className="h-64 sm:h-72 bg-gradient-to-b from-stone-50 to-stone-100 rounded-2xl p-6 my-6 flex items-center justify-center cursor-pointer group-hover:bg-amber-50/50 transition-colors"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name[locale]}
                      className="max-h-full max-w-full object-contain transform group-hover:scale-105 transition-transform duration-300 drop-shadow-xl"
                    />
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {product.description[locale]}
                  </p>

                  <div className="mt-4 bg-stone-50 p-3 rounded-xl border border-stone-200 text-xs text-stone-700 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Includes Certificate of Authenticity and Official Recipe Booklet Vol. 1</span>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="mt-6 pt-5 border-t border-stone-100 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-stone-400 block tracking-wider">
                      PRICE
                    </span>
                    <span className="text-2xl font-black text-slate-950">
                      ${product.price.toFixed(2)}{' '}
                      <span className="text-xs font-normal text-stone-500">CAD</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => viewProduct(product.id)}
                      className="px-4 py-3 bg-stone-100 hover:bg-stone-200 text-slate-800 font-condensed uppercase font-extrabold text-xs rounded-full transition-colors cursor-pointer"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => addToCart(product, 1)}
                      className="px-6 py-3 bg-[#E51A24] hover:bg-[#c8102e] text-white font-condensed uppercase tracking-wider font-extrabold text-xs sm:text-sm rounded-full shadow-lg transition-transform hover:scale-105 cursor-pointer flex items-center gap-2"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>{locale === 'en' ? 'ADD TO BAG' : 'AJOUTER'}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Dragons Den Pitch link */}
      <section className="max-w-4xl mx-auto px-4 mt-20 text-center">
        <div className="bg-rose-50 border border-rose-200 rounded-3xl p-8">
          <h4 className="font-condensed uppercase font-black text-2xl text-[#E51A24]">
            INSPIRED BY OUR DRAGONS' DEN SUCCESS
          </h4>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-xl mx-auto">
            Discover how Gilles Tchianga won the hearts of the Dragons with authentic African flavours handcrafted with pride right here in Canada.
          </p>
          <div className="mt-4">
            <button
              onClick={() => setCurrentPage('dragons-den')}
              className="px-6 py-2.5 bg-black hover:bg-stone-800 text-white font-condensed uppercase tracking-wider font-extrabold text-xs rounded-full cursor-pointer"
            >
              Watch the Dragons' Den Journey &rarr;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
