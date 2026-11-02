/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useStore } from '../context/StoreContext';
import { Flame, Check, Sparkles, ArrowRight, Utensils, ChefHat, Timer, Zap } from 'lucide-react';

export const HowItWorksPage: React.FC = () => {
  const { t, locale, setCurrentPage, viewProduct, addToCart, products } = useStore();

  const mildProduct = products.find((p) => p.id === 'taltis-jollof-mild-500ml') || products[0];
  const hotProduct = products.find((p) => p.id === 'taltis-jollof-hot-500ml') || products[1];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Hero Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#C8102E]">
          {t.howItWorks.title}
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Great Jollof in 3 Simple Steps
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          {t.howItWorks.subtitle}
        </p>
      </div>

      {/* 3 Step Visual Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Step 1 */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 space-y-5 shadow-xs relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 font-extrabold text-xl flex items-center justify-center">
              1
            </span>
            <Utensils className="w-6 h-6 text-slate-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">{t.howItWorks.step1Title}</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              {t.howItWorks.step1Desc}
            </p>
          </div>
          <div className="pt-2 text-xs font-semibold text-amber-800 bg-amber-50 p-3 rounded-lg border border-amber-200/50">
            Chef Tip: Rinse long-grain parboiled rice under cold water until clear to guarantee fluffy, separated grains.
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 space-y-5 shadow-xs relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="w-12 h-12 rounded-2xl bg-[#C8102E]/10 text-[#C8102E] font-extrabold text-xl flex items-center justify-center">
              2
            </span>
            <ChefHat className="w-6 h-6 text-slate-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">{t.howItWorks.step2Title}</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              {t.howItWorks.step2Desc}
            </p>
          </div>
          <div className="pt-2 text-xs font-semibold text-rose-800 bg-rose-50 p-3 rounded-lg border border-rose-200/50">
            Ratio Guide: 1 jar (500 mL) Taltis Sauce + 2.5 cups rice + 1.5 cups chicken or vegetable broth.
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 space-y-5 shadow-xs relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-900 font-extrabold text-xl flex items-center justify-center">
              3
            </span>
            <Timer className="w-6 h-6 text-slate-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">{t.howItWorks.step3Title}</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              {t.howItWorks.step3Desc}
            </p>
          </div>
          <div className="pt-2 text-xs font-semibold text-emerald-800 bg-emerald-50 p-3 rounded-lg border border-emerald-200/50">
            Steam Secret: Cover with aluminum foil beneath the pot lid to trap the aromatic steam and build bottom-pot smoky notes.
          </div>
        </div>
      </div>

      {/* Rice Cooker Method Spotlight */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider bg-amber-400/10 px-3 py-1.5 rounded-lg border border-amber-400/20">
            <Zap className="w-3.5 h-3.5" />
            <span>{t.howItWorks.riceCookerMethod}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Short on Time? Use Your Rice Cooker
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            {t.howItWorks.riceCookerDesc}
          </p>
          <div className="pt-4 flex flex-wrap gap-4 text-xs font-medium text-slate-300">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" />
              1 Touch Setup
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" />
              Zero Scorching
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" />
              Keeps Warm for Dinner
            </span>
          </div>
        </div>
      </div>

      {/* Mild vs. Hot Comparison Section */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {t.howItWorks.comparisonTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            {t.howItWorks.comparisonSub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mild Side */}
          <div className="bg-amber-50/60 rounded-2xl border border-amber-200/80 p-8 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase text-amber-800 tracking-wider">
                  Mellow & Balanced
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-0.5">
                  Taltis Jollof Mild (500 mL)
                </h3>
              </div>
              <div className="w-16 h-16 rounded-xl bg-white p-2 border border-amber-200 shrink-0">
                <img
                  src={mildProduct.images[0]}
                  alt="Mild Jar"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-700">
              <p className="font-semibold text-slate-900">Heat Level: 2 out of 5</p>
              <p className="leading-relaxed">
                Highlights the naturally sweet, caramelized notes of roasted red bell peppers with sweet onions, garlic, and gentle ginger warmth.
              </p>
            </div>

            <div className="space-y-1.5 text-xs text-slate-600">
              <p className="font-bold text-slate-900">Best for:</p>
              <p>• Weekday family dinners with kids and non-spicy eaters</p>
              <p>• Creamy pastas, peanut butter stews, and roasted vegetables</p>
              <p>• Introducing friends to West African flavours</p>
            </div>

            <button
              onClick={() => addToCart(mildProduct, 1)}
              className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
            >
              Shop Mild Sauce (${mildProduct.price} CAD)
            </button>
          </div>

          {/* Hot Side */}
          <div className="bg-rose-50/60 rounded-2xl border border-rose-200/80 p-8 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase text-[#C8102E] tracking-wider">
                  Bold & Celebratory
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-0.5">
                  Taltis Jollof Hot (500 mL)
                </h3>
              </div>
              <div className="w-16 h-16 rounded-xl bg-white p-2 border border-rose-200 shrink-0">
                <img
                  src={hotProduct.images[0]}
                  alt="Hot Jar"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-700">
              <p className="font-semibold text-slate-900">Heat Level: 4 out of 5</p>
              <p className="leading-relaxed">
                Infused with authentic fiery Scotch bonnet peppers. Delivers that iconic fragrant heat that defines Nigerian and Ghanaian celebratory Jollof.
              </p>
            </div>

            <div className="space-y-1.5 text-xs text-slate-600">
              <p className="font-bold text-slate-900">Best for:</p>
              <p>• Traditional celebration Jollof rice gatherings</p>
              <p>• Hot pepper soups, braised goat, and beef shanks</p>
              <p>• Glazing grilled salmon, BBQ chicken, and shrimp skewers</p>
            </div>

            <button
              onClick={() => addToCart(hotProduct, 1)}
              className="w-full py-3 bg-[#C8102E] hover:bg-[#a50d25] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
            >
              Shop Hot Sauce (${hotProduct.price} CAD)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
