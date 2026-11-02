/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useStore } from '../context/StoreContext';
import { Award, Tv, Star, CheckCircle2, ArrowRight } from 'lucide-react';

export const DragonsDenPage: React.FC = () => {
  const { t, locale, setCurrentPage } = useStore();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200 px-3.5 py-1.5 rounded-full">
          <Award className="w-4 h-4 text-amber-600" />
          <span>{t.dragonsDen.badge}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          As Seen on CBC's Dragons' Den
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          The moment Taltis Foods stepped into the Den to share authentic West African cooking sauce with Canada’s top business moguls.
        </p>
      </div>

      {/* Feature Story Box */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-800 relative overflow-hidden">
        <div className="max-w-3xl space-y-6 text-left">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Tv className="w-4 h-4" />
            <span>National Broadcast Milestone</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight">
            "Bringing the warmth of West African dinner tables to millions of Canadian homes."
          </h2>

          <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
            <p>
              When Taltis Foods pitched to the Dragons on CBC, our mission was clear: African cuisine is rich, celebratory, and beloved worldwide, but until now, Canadian supermarket shelves lacked convenient, restaurant-quality cooking sauces to make authentic Jollof rice at home.
            </p>
            <p>
              The Dragons tasted our freshly prepared Jollof rice paired with tender chicken and crispy salmon, praising the authentic balance of sweet red bell peppers, aromatic ginger, and true West African seasoning.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-800">
            <div>
              <span className="text-2xl font-bold text-amber-400 tabular-nums">100%</span>
              <p className="text-xs text-slate-400 mt-1">Authentic Traditional Recipes</p>
            </div>
            <div>
              <span className="text-2xl font-bold text-amber-400 tabular-nums">500 mL</span>
              <p className="text-xs text-slate-400 mt-1">Generous Family Glass Format</p>
            </div>
            <div>
              <span className="text-2xl font-bold text-amber-400 tabular-nums">Coast-to-Coast</span>
              <p className="text-xs text-slate-400 mt-1">Canadian Supermarket Distribution</p>
            </div>
          </div>
        </div>
      </div>

      {/* Retail Expansion Journey */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            From the Den to Canada's Best Grocers
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Our appearance accelerated national retail distribution into prominent Canadian supermarkets and specialty food markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Supermarket Rollout</span>
            <h3 className="text-lg font-bold text-slate-900">Metro & Sobeys</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Making African cooking sauces easily accessible in conventional grocery aisles across Ontario and Quebec.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Community Roots</span>
            <h3 className="text-lg font-bold text-slate-900">Specialty Markets</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Trusted by premier African, Caribbean, and international grocery markets in Toronto, Montreal, Ottawa, and Calgary.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Direct Access</span>
            <h3 className="text-lg font-bold text-slate-900">Online Flagship</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Shipping directly to home cooks across every Canadian province and territory with free delivery on orders over $50 CAD.
            </p>
          </div>
        </div>

        <div className="pt-4 flex justify-center gap-4">
          <button
            onClick={() => setCurrentPage('shop')}
            className="px-6 py-3 bg-[#C8102E] hover:bg-[#a50d25] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shadow-sm flex items-center gap-2"
          >
            <span>Shop the Dragons' Den Featured Sauces</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
