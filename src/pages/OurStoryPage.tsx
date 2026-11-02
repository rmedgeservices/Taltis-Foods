/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useStore } from '../context/StoreContext';
import { Award, Heart, ShieldCheck, Check, Sparkles, ArrowRight } from 'lucide-react';

export const OurStoryPage: React.FC = () => {
  const { t, locale, setCurrentPage } = useStore();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-[#C8102E]">
          {t.ourStory.title}
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {t.ourStory.subtitle}
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          {locale === 'en'
            ? 'Born out of love for authentic West African home cooking and the desire to share unforgettable flavours with every kitchen in Canada.'
            : 'Née de l’amour de la cuisine familiale ouest-africaine et du désir de partager ces saveurs inoubliables avec toutes les cuisines du Canada.'}
        </p>
      </div>

      {/* Main Narrative with Photography */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6 text-slate-700 leading-relaxed text-sm">
          <p className="text-base text-slate-900 font-semibold leading-relaxed">
            {t.ourStory.p1}
          </p>
          <p>
            {t.ourStory.p2}
          </p>
          <p>
            {t.ourStory.p3}
          </p>

          <div className="pt-2 space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span className="text-xs text-slate-800">
                <strong>Clean Label Commitment:</strong> Zero artificial preservatives, zero synthetic colours, and no chemical thickeners.
              </span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span className="text-xs text-slate-800">
                <strong>100% Recyclable Packaging:</strong> Heavy-gauge premium 500 mL glass jars with gold vacuum-seal lids.
              </span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span className="text-xs text-slate-800">
                <strong>Proudly Canadian:</strong> Formulated, cooked, and packed in federally inspected food facilities right here in Canada.
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl bg-slate-900">
            <img
              src="/assets/aistudio/jollof_hot_pouch_Image_5__1__a2d60c09.jpg"
              alt="Taltis Family Dining"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Founder Spotlight */}
      <div className="bg-[#18181B] bg-dots-dark text-white rounded-3xl p-8 sm:p-12 border border-stone-800 flex flex-col md:flex-row items-center gap-8 shadow-xl">
        <div className="w-24 h-24 rounded-2xl bg-[#E51A24] text-white flex flex-col items-center justify-center shrink-0 font-condensed uppercase font-black text-center p-2 shadow-lg">
          <Award className="w-8 h-8 text-amber-300 mb-1" />
          <span className="text-[10px] leading-tight">FOUNDER</span>
        </div>
        <div className="space-y-2 text-left">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-condensed uppercase font-black text-2xl sm:text-3xl text-white">
              Gilles Tchianga · CEO &amp; Founder
            </h3>
            <span className="bg-amber-400 text-slate-950 text-xs font-condensed font-black px-3 py-1 rounded-full uppercase">
              Dragons' Den Partner
            </span>
          </div>
          <p className="text-amber-300 font-condensed uppercase tracking-wider text-sm font-bold">
            "Authentic African cuisine, made easy!"
          </p>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-3xl">
            Born and raised in Cameroon, Gilles immigrated to Canada with a mission: making the soulful, time-honoured flavours of West Africa accessible, approachable, and effortless for everyday Canadian households. In Season 17 of CBC's <em>Dragons' Den</em>, Gilles earned a standing ovation and historic multi-Dragon investment partnership, validating Taltis Foods as one of Canada's most promising culinary innovators.
          </p>
        </div>
      </div>

      {/* Culinary Pillars */}
      <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200/80">
        <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
          The Three Pillars of Taltis Foods
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#C8102E] flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Authentic Heritage</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We never compromise on traditional cooking foundations: sweet red bell peppers, real ginger, garlic, and authentic West African spices.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Effortless Home Cooking</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Skip hours of washing, blending, and reducing pepper purées. One 500 mL jar gives you a complete chef-level base in minutes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Canadian Quality Standards</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Produced to the highest Canadian safety protocols with full bilingual English/French transparency on every jar.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Strip */}
      <div className="text-center pt-4">
        <button
          onClick={() => setCurrentPage('shop')}
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C8102E] hover:bg-[#a50d25] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shadow-md"
        >
          <span>Taste the Difference — Shop Jollof Sauces</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
