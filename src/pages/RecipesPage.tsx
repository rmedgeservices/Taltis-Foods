/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { BrandLogoBadge } from '../components/BrandLogoBadge';
import {
  Search,
  Clock,
  Users,
  ChefHat,
  ArrowRight,
  X,
  ShoppingBag,
  Check,
  Download,
  BookOpen,
  Sparkles,
  Flame,
  Utensils,
  Share2
} from 'lucide-react';
import { Recipe } from '../types';

export const RecipesPage: React.FC = () => {
  const {
    recipes,
    products,
    selectedRecipeId,
    setSelectedRecipeId,
    locale,
    t,
    addToCart,
    viewProduct,
    showToast,
  } = useStore();

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [search, setSearch] = useState<string>('');
  const [activeGroceryItem, setActiveGroceryItem] = useState<string | null>(null);

  const activeRecipe = recipes.find((r) => r.id === selectedRecipeId) || null;

  const filteredRecipes = recipes.filter((r) => {
    const matchesCat = activeCategory === 'all' || r.category === activeCategory;
    const matchesQuery =
      r.title[locale].toLowerCase().includes(search.toLowerCase()) ||
      r.description[locale].toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const groceryItems = [
    { name: 'Taltis Jollof Sauce', role: 'All-In-One Simmer Base', isCore: true },
    { name: 'Basmati Rice', role: 'Fluffy Grains', isCore: false },
    { name: 'Red Beans', role: 'Protein & Fiber', isCore: false },
    { name: 'Pasta (Penne/Rotini)', role: '15-min Weeknight Comfort', isCore: false },
    { name: 'Pure Broth (Veg/Chicken/Beef)', role: 'Deep Savory Moisture', isCore: false },
    { name: 'Hot Peppers (Scotch Bonnet)', role: 'Authentic African Fire', isCore: false },
    { name: 'Milk Cream (15%)', role: 'Silky Velvety Finish', isCore: false },
    { name: 'Peanut Butter', role: 'Nutty Comfort Stew Base', isCore: false },
    { name: 'Vegetable / Olive Oil', role: 'Flavor Enhancer', isCore: false },
  ];

  return (
    <div className="bg-[#FAF9F5] min-h-screen text-slate-900 pb-24">
      {/* =========================================================
          1. HEADER: Official Booklet Cover & Founder Dedication
         ========================================================= */}
      <section className="bg-[#E51A24] bg-dots-red text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-black/25 text-amber-300 px-4 py-1.5 rounded-full text-xs font-condensed uppercase tracking-widest font-extrabold mb-4">
            <BookOpen className="w-4 h-4 text-amber-300" />
            <span>OFFICIAL RECIPE BOOK · VOLUME 1</span>
          </div>

          <h1
            className="font-condensed uppercase font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-none text-white drop-shadow-md"
            style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
          >
            TALTIS FOODS RECIPES
          </h1>

          <p className="font-condensed uppercase tracking-widest text-lg sm:text-2xl text-amber-300 font-extrabold mt-2">
            AFRICAN CUISINE, MADE EASY!
          </p>

          <p className="max-w-2xl mx-auto text-white/90 text-sm sm:text-base mt-4 font-normal leading-relaxed italic">
            "African cuisine is bold, rich, and rooted in tradition. Each recipe in this book brings the heart of Africa to your kitchen, one dish at a time."
          </p>
          <span className="text-xs font-condensed uppercase font-bold text-amber-200 block mt-1">
            — Gilles Tchianga, CEO / Founder of Taltis Foods
          </span>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                showToast('Taltis Recipe Booklet (PDF) opened for download.', 'success');
              }}
              className="px-6 py-3 bg-black hover:bg-stone-800 text-white font-condensed uppercase tracking-wider font-extrabold text-xs sm:text-sm rounded-full shadow-lg transition-transform hover:scale-105 cursor-pointer flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span>Download Official Recipe Booklet (PDF)</span>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. GROCERY LIST BANNER: Straight from Page 3 of the Booklet
         ========================================================= */}
      <section className="bg-[#F3F2EB] bg-dots py-8 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-xs font-condensed uppercase tracking-widest font-extrabold text-[#E51A24]">
                BOOKLET PAGE 3 ESSENTIALS
              </span>
              <h3 className="font-condensed uppercase font-black text-2xl text-slate-900 leading-tight">
                YOUR GROCERY LIST FOR TALTIS RECIPES
              </h3>
            </div>
            <p className="text-xs text-stone-500 max-w-md">
              With 1 jar of Taltis 500 mL sauce and just 2–3 pantry staples, dinner is served in 20 minutes.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-2">
            {groceryItems.map((item, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-2xl border transition-all text-left ${
                  item.isCore
                    ? 'bg-[#E51A24] text-white border-rose-600 shadow-md'
                    : 'bg-white text-slate-800 border-stone-200 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-condensed uppercase font-extrabold ${item.isCore ? 'text-amber-300' : 'text-stone-400'}`}>
                    ITEM 0{idx + 1}
                  </span>
                  {item.isCore && <Sparkles className="w-3.5 h-3.5 text-amber-300" />}
                </div>
                <h4 className={`font-condensed uppercase font-black text-base mt-1 line-clamp-1 ${item.isCore ? 'text-white' : 'text-slate-900'}`}>
                  {item.name}
                </h4>
                <p className={`text-[11px] mt-0.5 line-clamp-1 ${item.isCore ? 'text-white/80' : 'text-stone-500'}`}>
                  {item.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          3. RECIPE EXPLORER & FILTER
         ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-stone-200">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-stone-100 rounded-2xl w-full md:w-auto">
            {[
              { id: 'all', label: 'ALL BOOKLET RECIPES' },
              { id: 'rice', label: 'JOLLOF RICE DISHES' },
              { id: 'pasta', label: 'PASTA CREATIONS' },
              { id: 'soup', label: 'COMFORT SOUPS' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-condensed uppercase tracking-wider font-extrabold cursor-pointer transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#E51A24] text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search recipes, ingredients..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-stone-200 rounded-xl text-xs font-medium placeholder:text-stone-400 focus:outline-none focus:border-[#E51A24]"
            />
          </div>
        </div>

        {/* Recipe Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
          {filteredRecipes.map((recipe, index) => {
            const associatedProduct = products.find((p) => p.id === recipe.productId) || products[0];

            return (
              <div
                key={recipe.id}
                className="bg-white rounded-3xl border-2 border-stone-200 hover:border-[#E51A24] transition-all p-6 shadow-sm hover:shadow-xl flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Container */}
                  <div
                    onClick={() => setSelectedRecipeId(recipe.id)}
                    className="relative h-56 rounded-2xl overflow-hidden cursor-pointer mb-5"
                  >
                    <img
                      src={recipe.imageUrl}
                      alt={recipe.title[locale]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    <span className="absolute top-3 left-3 bg-[#E51A24] text-white font-condensed uppercase font-black text-xs px-3 py-1 rounded-full shadow">
                      RECIPE #{index + 1}
                    </span>

                    <span className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white font-condensed uppercase font-bold text-xs px-3 py-1 rounded-full flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-300" />
                      PREP: {recipe.prepTimeMinutes} MIN · COOK: {recipe.cookTimeMinutes} MIN
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3
                    onClick={() => setSelectedRecipeId(recipe.id)}
                    className="font-condensed uppercase font-black text-2xl text-slate-900 group-hover:text-[#E51A24] transition-colors cursor-pointer leading-tight"
                  >
                    {recipe.title[locale]}
                  </h3>

                  <p className="text-xs text-stone-600 mt-2 line-clamp-2 leading-relaxed">
                    {recipe.description[locale]}
                  </p>

                  {/* Pro Chef Tip from Booklet */}
                  {recipe.tip && (
                    <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-bold">BOOKLET TIP: </strong>
                        <span>{recipe.tip[locale]}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Action */}
                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedRecipeId(recipe.id)}
                    className="px-5 py-2.5 bg-black hover:bg-stone-800 text-white font-condensed uppercase tracking-wider font-extrabold text-xs rounded-full cursor-pointer transition-colors"
                  >
                    FULL INSTRUCTIONS
                  </button>

                  <button
                    onClick={() => addToCart(associatedProduct, 1)}
                    className="px-4 py-2 bg-[#E51A24] hover:bg-[#c8102e] text-white font-condensed uppercase tracking-wider font-extrabold text-xs rounded-full cursor-pointer flex items-center gap-1.5 shadow"
                    title="Add Sauce to Cart"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Get Sauce (${associatedProduct.price})</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          4. FIND US AT... RETAILER BANNER (Straight from Booklet Page 2)
         ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-[#18181B] bg-dots-dark text-white rounded-3xl p-8 sm:p-12 text-center border border-stone-800">
          <p className="font-condensed uppercase tracking-widest text-xs font-black text-amber-300 mb-2">
            PAGE 2 RETAIL DIRECTORY
          </p>
          <h3 className="font-condensed uppercase font-black text-3xl sm:text-5xl text-white">
            FIND TALTIS FOODS AT MAJOR CANADIAN GROCERS
          </h3>
          <p className="text-stone-300 text-sm max-w-xl mx-auto mt-2">
            Pick up your 500 mL Mild and Hot jars in the ethnic foods &amp; sauce aisles or order online.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-center pt-8 text-white">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 font-condensed font-black text-2xl text-[#E51A24]">
              LOBLAWS
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 font-condensed font-black text-2xl text-amber-400">
              NO FRILLS
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 font-condensed font-black text-2xl text-emerald-400">
              SOBEYS
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 font-condensed font-black text-xl text-blue-400">
              SUPERSTORE
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 font-condensed font-black text-2xl text-amber-200">
              FARM BOY
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          5. DETAILED RECIPE MODAL (With Interactive Checklist)
         ========================================================= */}
      {activeRecipe && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-4 border-[#E51A24] flex flex-col">
            {/* Modal Header */}
            <div className="sticky top-0 bg-[#E51A24] text-white px-6 py-4 flex items-center justify-between border-b border-rose-600 z-10">
              <div className="flex items-center gap-3">
                <BrandLogoBadge size="sm" variant="white" />
                <div>
                  <h3 className="font-condensed uppercase font-black text-2xl leading-none">
                    {activeRecipe.title[locale]}
                  </h3>
                  <span className="text-[10px] uppercase tracking-widest text-amber-300 font-bold">
                    Official Taltis Recipe Booklet Vol. 1
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedRecipeId(null)}
                className="p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Photo & Quick Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <div className="rounded-2xl overflow-hidden shadow-md h-56">
                  <img
                    src={activeRecipe.imageUrl}
                    alt={activeRecipe.title[locale]}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-3">
                  <span className="font-condensed uppercase font-bold text-xs bg-amber-100 text-amber-900 px-3 py-1 rounded-full">
                    {activeRecipe.servings} SERVINGS · PREP: {activeRecipe.prepTimeMinutes} MIN
                  </span>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {activeRecipe.description[locale]}
                  </p>
                  {activeRecipe.tip && (
                    <div className="bg-rose-50 border border-rose-200 p-3 rounded-xl text-xs text-[#E51A24]">
                      <strong>PRO TIP: </strong>
                      <span>{activeRecipe.tip[locale]}</span>
                    </div>
                  )}
                  {activeRecipe.quote && (
                    <p className="text-xs italic text-stone-500 font-serif border-l-2 border-stone-300 pl-3">
                      "{activeRecipe.quote[locale]}"
                    </p>
                  )}
                </div>
              </div>

              {/* Ingredients List */}
              <div>
                <h4 className="font-condensed uppercase font-black text-xl text-slate-900 mb-3 flex items-center gap-2">
                  <Utensils className="w-4 h-4 text-[#E51A24]" />
                  <span>INGREDIENTS</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeRecipe.ingredients[locale].map((ing, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs font-medium text-slate-800"
                    >
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{ing}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instructions Steps */}
              <div>
                <h4 className="font-condensed uppercase font-black text-xl text-slate-900 mb-3 flex items-center gap-2">
                  <ChefHat className="w-4 h-4 text-[#E51A24]" />
                  <span>STEP-BY-STEP INSTRUCTIONS</span>
                </h4>
                <div className="space-y-3">
                  {activeRecipe.instructions[locale].map((step, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-slate-800"
                    >
                      <span className="w-6 h-6 rounded-full bg-[#E51A24] text-white font-condensed font-black flex items-center justify-center shrink-0 text-xs">
                        {i + 1}
                      </span>
                      <p className="leading-relaxed pt-0.5">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-stone-100 border-t border-stone-200 px-6 py-4 flex items-center justify-between">
              <span className="text-xs text-stone-500">
                Taltis Foods · Authentic African Cuisine, Made Easy!
              </span>
              <button
                onClick={() => {
                  showToast('Recipe instructions printed / saved.', 'success');
                }}
                className="px-4 py-2 bg-black hover:bg-stone-800 text-white font-condensed uppercase font-bold text-xs rounded-xl cursor-pointer"
              >
                Print / Save Recipe
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
