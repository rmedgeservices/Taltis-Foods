/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Flame, Check, Plus, Minus, ShieldCheck, ChevronDown, ChevronUp, ArrowLeft, ArrowRight, Utensils, Clock } from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const {
    products,
    selectedProductId,
    locale,
    t,
    addToCart,
    setCurrentPage,
    recipes,
    viewRecipe,
  } = useStore();

  const product = products.find((p) => p.id === selectedProductId) || products[0];
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState<string | null>('ingredients');

  const relatedRecipes = recipes.filter((r) => r.productId === product.id || r.productId === 'taltis-jollof-mild-500ml');

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* Breadcrumb Back Link */}
      <div>
        <button
          onClick={() => setCurrentPage('shop')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{locale === 'en' ? 'Back to All Sauces' : 'Retour aux sauces'}</span>
        </button>
      </div>

      {/* Main PDP Grid: Gallery on Left, Purchase Module on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
        {/* Left Column: Gallery with Main High-Resolution Image and Thumbnails */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative aspect-square max-h-[560px] w-full bg-[#FAF8F5] rounded-3xl border border-slate-200/80 p-8 flex items-center justify-center overflow-hidden">
            <img
              src={product.images[selectedImageIndex] || product.images[0]}
              alt={product.name[locale]}
              className="w-full h-full object-contain filter drop-shadow-xl transition-all duration-300"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-xs font-bold px-3 py-1 rounded-lg border border-slate-200 text-slate-800">
              {product.volume} Glass Jar
            </div>
          </div>

          {/* Thumbnail Track */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImageIndex(idx)}
                className={`w-20 h-20 rounded-xl bg-[#FAF8F5] p-2 border shrink-0 transition-all cursor-pointer overflow-hidden ${
                  selectedImageIndex === idx
                    ? 'border-[#C8102E] ring-2 ring-[#C8102E]/20'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <img
                  src={img}
                  alt={`View ${idx + 1}`}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Contiguous Purchase Module */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              <span>{product.volume}</span>
              <span>·</span>
              <span className={product.spiceLevel === 'Hot' ? 'text-[#C8102E]' : 'text-amber-700'}>
                {product.spiceLevel} Heat
              </span>
              <span>·</span>
              <span>Made in Canada</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {product.name[locale]}
            </h1>

            <p className="text-sm font-semibold text-[#C8102E] mt-1">
              {product.tagline[locale]}
            </p>

            <div className="pt-3 flex items-baseline gap-3">
              <span className="text-3xl font-extrabold text-slate-900 tabular-nums">
                ${product.price} CAD
              </span>
              {product.compareAtPrice && (
                <span className="text-sm text-slate-400 line-through tabular-nums">
                  ${product.compareAtPrice} CAD
                </span>
              )}
            </div>
          </div>

          {/* Spice Intensity Scale */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-800">
              <span className="flex items-center gap-1">
                <Flame className="w-4 h-4 text-[#C8102E]" />
                {t.product.spiceRating}
              </span>
              <span>{product.spiceRating} of 5</span>
            </div>
            <div className="grid grid-cols-5 gap-1.5 h-2">
              {[1, 2, 3, 4, 5].map((lvl) => (
                <div
                  key={lvl}
                  className={`rounded-full transition-colors ${
                    lvl <= product.spiceRating
                      ? product.spiceLevel === 'Hot'
                        ? 'bg-[#C8102E]'
                        : 'bg-amber-500'
                      : 'bg-slate-200'
                  }`}
                />
              ))}
            </div>
            <p className="text-[11px] text-slate-500 mt-1">
              {product.spiceLevel === 'Hot' ? t.product.hotDesc : t.product.mildDesc}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {product.description[locale]}
          </p>

          {/* Quantity Selector & Add to Cart */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-slate-300 rounded-xl bg-white shadow-xs">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-slate-600 hover:bg-slate-100 rounded-l-xl transition-colors cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 text-sm font-bold text-slate-900 tabular-nums">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-slate-600 hover:bg-slate-100 rounded-r-xl transition-colors cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={() => addToCart(product, quantity)}
                className="flex-1 py-3.5 px-6 bg-[#C8102E] hover:bg-[#a50d25] text-white text-sm font-bold rounded-xl shadow-lg shadow-rose-900/10 transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{t.product.addToCart}</span>
                <span>·</span>
                <span className="tabular-nums">${(product.price * quantity).toFixed(2)} CAD</span>
              </button>
            </div>

            <p className="text-[11px] text-center text-slate-500 font-medium">
              {t.product.freeShippingEligible}
            </p>
          </div>

          {/* Accordion Sections for Transparency */}
          <div className="pt-4 divide-y divide-slate-200 border-t border-slate-200 text-xs">
            {/* Ingredients */}
            <div className="py-3">
              <button
                onClick={() => toggleAccordion('ingredients')}
                className="w-full flex justify-between items-center text-left font-bold text-slate-900 hover:text-[#C8102E] transition-colors cursor-pointer"
              >
                <span>{t.product.ingredients}</span>
                {openAccordion === 'ingredients' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {openAccordion === 'ingredients' && (
                <div className="pt-3 text-slate-600 leading-relaxed animate-in fade-in-50 duration-150">
                  <p className="font-medium text-slate-800 mb-1">Simple, honest kitchen ingredients:</p>
                  <p>{product.ingredients[locale].join(', ')}.</p>
                  <div className="mt-2 text-emerald-800 font-medium">
                    {Array.isArray(product.allergens[locale])
                      ? (product.allergens[locale] as unknown as string[]).join(' ')
                      : product.allergens[locale]}
                  </div>
                </div>
              )}
            </div>

            {/* Nutrition Facts */}
            <div className="py-3">
              <button
                onClick={() => toggleAccordion('nutrition')}
                className="w-full flex justify-between items-center text-left font-bold text-slate-900 hover:text-[#C8102E] transition-colors cursor-pointer"
              >
                <span>{t.product.nutritionFacts}</span>
                {openAccordion === 'nutrition' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {openAccordion === 'nutrition' && (
                <div className="pt-3 animate-in fade-in-50 duration-150">
                  <div className="border border-slate-300 p-3 rounded-lg bg-white space-y-1 font-mono text-[11px]">
                    <div className="flex justify-between border-b pb-1 font-bold">
                      <span>Serving Size:</span>
                      <span>{product.nutrition.servingSize}</span>
                    </div>
                    <div className="flex justify-between border-b pb-1 font-bold">
                      <span>Calories:</span>
                      <span>{product.nutrition.calories}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 pt-1 text-slate-700">
                      <div>Total Fat: {product.nutrition.fat}</div>
                      <div>Sodium: {product.nutrition.sodium}</div>
                      <div>Carbohydrates: {product.nutrition.carbs}</div>
                      <div>Sugars: {product.nutrition.sugars}</div>
                      <div>Dietary Fiber: {product.nutrition.fiber}</div>
                      <div>Protein: {product.nutrition.protein}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Preparation Guidance */}
            <div className="py-3">
              <button
                onClick={() => toggleAccordion('cooking')}
                className="w-full flex justify-between items-center text-left font-bold text-slate-900 hover:text-[#C8102E] transition-colors cursor-pointer"
              >
                <span>{t.product.cookingGuidance}</span>
                {openAccordion === 'cooking' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {openAccordion === 'cooking' && (
                <ul className="pt-3 space-y-1.5 text-slate-600 list-disc list-inside animate-in fade-in-50 duration-150">
                  {product.cookingTips[locale].map((tip, i) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              )}
            </div>

            {/* Storage Info */}
            <div className="py-3">
              <button
                onClick={() => toggleAccordion('storage')}
                className="w-full flex justify-between items-center text-left font-bold text-slate-900 hover:text-[#C8102E] transition-colors cursor-pointer"
              >
                <span>{t.product.storageInfo}</span>
                {openAccordion === 'storage' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {openAccordion === 'storage' && (
                <p className="pt-3 text-slate-600 leading-relaxed animate-in fade-in-50 duration-150">
                  {product.storage[locale]}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Suggested Recipes Section with direct linkage */}
      {relatedRecipes.length > 0 && (
        <div className="pt-12 border-t border-slate-200">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C8102E]">
                Cook With This Sauce
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 mt-1">
                Recipes Crafted for {product.name[locale]}
              </h2>
            </div>
            <button
              onClick={() => setCurrentPage('recipes')}
              className="text-xs font-bold text-[#C8102E] hover:underline cursor-pointer"
            >
              All Recipes
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedRecipes.map((r) => (
              <div
                key={r.id}
                onClick={() => viewRecipe(r.id)}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-200 cursor-pointer group"
              >
                <div className="aspect-16/10 bg-slate-100 overflow-hidden">
                  <img
                    src={r.imageUrl}
                    alt={r.title[locale]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-2 text-[11px] text-slate-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{r.prepTimeMinutes + r.cookTimeMinutes} mins</span>
                    <span>·</span>
                    <span>{r.difficulty}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#C8102E] transition-colors leading-snug">
                    {r.title[locale]}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {r.description[locale]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
