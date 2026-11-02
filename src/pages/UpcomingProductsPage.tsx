/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { BrandLogoBadge } from '../components/BrandLogoBadge';
import { Sparkles, Bell, ArrowRight, Clock, CheckCircle2, Flame, ShieldAlert, Award } from 'lucide-react';

export const UpcomingProductsPage: React.FC = () => {
  const { t, locale, products, showToast, setCurrentPage } = useStore();
  const [notifyEmail, setNotifyEmail] = useState('');
  const [selectedProductTitle, setSelectedProductTitle] = useState<string | null>(null);
  const [isNotifyOpen, setIsNotifyOpen] = useState(false);

  const upcomingProducts = products.filter((p) => p.category === 'upcoming');

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!notifyEmail || !notifyEmail.includes('@')) {
      showToast(locale === 'en' ? 'Please enter a valid email address.' : 'Veuillez entrer une adresse courriel valide.', 'error');
      return;
    }
    showToast(
      locale === 'en'
        ? `You’re on the VIP launch list for ${selectedProductTitle || 'upcoming products'}!`
        : `Vous êtes inscrit sur la liste VIP pour ${selectedProductTitle || 'nos nouveautés'} !`,
      'success'
    );
    setNotifyEmail('');
    setIsNotifyOpen(false);
  };

  const openNotifyModal = (title: string) => {
    setSelectedProductTitle(title);
    setIsNotifyOpen(true);
  };

  return (
    <div className="bg-[#FAF9F5] min-h-screen text-slate-900 pb-24">
      {/* Hero Header */}
      <section className="bg-[#E51A24] bg-dots-red text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-black/25 text-amber-300 px-4 py-1.5 rounded-full text-xs font-condensed uppercase tracking-widest font-extrabold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>TALTIS INNOVATION LAB · 2026 ROADMAP</span>
          </div>

          <h1
            className="font-condensed uppercase font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-none text-white drop-shadow-md"
            style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
          >
            UPCOMING PRODUCTS
          </h1>

          <p className="max-w-2xl mx-auto text-white/90 text-base sm:text-lg mt-4 font-normal leading-relaxed">
            {locale === 'en'
              ? 'Our culinary journey is expanding. Discover the next generation of authentic West African seasonings, artisanal snacks, and instant cooking innovations currently in test kitchens.'
              : 'Notre voyage culinaire s’élargit. Découvrez la prochaine génération d’assaisonnements africains authentiques et de collations artisanales en cours de développement.'}
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              onClick={() => setCurrentPage('shop')}
              className="px-6 py-2.5 bg-white text-slate-900 font-condensed uppercase font-extrabold text-xs sm:text-sm rounded-full shadow hover:bg-amber-100 transition-colors cursor-pointer"
            >
              Shop Current 500 mL Sauces
            </button>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-200">
          <div>
            <h2 className="font-condensed uppercase font-black text-3xl text-slate-900">
              COMING SOON TO CANADIAN KITCHENS
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              Be the first to taste when batch #1 rolls off the production line.
            </p>
          </div>
          <span className="font-condensed font-black text-sm uppercase tracking-wider text-[#E51A24] bg-rose-50 border border-rose-200 px-3 py-1.5 rounded-xl hidden sm:inline-block">
            {upcomingProducts.length} PRODUCTS IN DEVELOPMENT
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border-2 border-stone-200 hover:border-[#E51A24] transition-all p-6 shadow-sm hover:shadow-xl flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Coming Soon Stamp Ribbon */}
              <div className="absolute top-4 right-4 bg-amber-400 text-slate-950 font-condensed uppercase font-black text-[10px] px-3 py-1 rounded-full shadow-sm tracking-wider">
                COMING SOON
              </div>

              <div>
                <span className="text-[11px] font-condensed uppercase tracking-wider font-extrabold text-[#E51A24] block mb-1">
                  {item.volume}
                </span>

                <h3 className="font-condensed uppercase font-black text-2xl text-slate-900 group-hover:text-[#E51A24] transition-colors line-clamp-2">
                  {item.name[locale]}
                </h3>

                <p className="text-xs font-semibold text-amber-600 mt-1">
                  {item.tagline[locale]}
                </p>

                {/* Image Box */}
                <div className="h-56 bg-stone-50 rounded-2xl p-4 my-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.images[0]}
                    alt={item.name[locale]}
                    className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300 opacity-90"
                  />
                </div>

                <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                  {item.description[locale]}
                </p>

                {/* Anticipated Price */}
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="text-stone-400 font-bold uppercase tracking-wider">
                    TARGET PRICE
                  </span>
                  <span className="text-lg font-black text-slate-900">
                    ${item.price.toFixed(2)} CAD
                  </span>
                </div>
              </div>

              {/* Action */}
              <div className="mt-5">
                <button
                  onClick={() => openNotifyModal(item.name[locale])}
                  className="w-full py-3 bg-[#E51A24] hover:bg-[#c8102e] text-white font-condensed uppercase tracking-wider font-extrabold text-sm rounded-xl shadow transition-transform hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2"
                >
                  <Bell className="w-4 h-4" />
                  <span>NOTIFY ME ON LAUNCH</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Suggest a Product Banner */}
      <section className="max-w-5xl mx-auto px-4 mt-20">
        <div className="bg-[#18181B] bg-dots-dark text-white rounded-3xl p-8 sm:p-12 text-center border border-stone-800">
          <span className="text-xs font-condensed uppercase tracking-widest text-amber-300 font-extrabold">
            COMMUNITY-LED TASTE EXPLORATION
          </span>
          <h3 className="font-condensed uppercase font-black text-3xl sm:text-5xl mt-2 text-white">
            WHAT AFRICAN DISH SHOULD WE MAKE EASY NEXT?
          </h3>
          <p className="text-stone-300 text-sm max-w-xl mx-auto mt-2 leading-relaxed">
            Have a cherished West African recipe, marinade, or pantry item you want bottled with authentic ingredients in Canada? We want to hear from you.
          </p>
          <div className="mt-6">
            <button
              onClick={() => setCurrentPage('contact')}
              className="px-8 py-3.5 bg-white text-slate-950 font-condensed uppercase font-black text-sm rounded-full hover:bg-amber-100 transition-colors cursor-pointer"
            >
              SEND US YOUR PRODUCT REQUEST &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* Notify Modal */}
      {isNotifyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 text-center shadow-2xl border-4 border-[#E51A24]">
            <div className="w-12 h-12 rounded-full bg-rose-100 text-[#E51A24] flex items-center justify-center mx-auto mb-4">
              <Bell className="w-6 h-6" />
            </div>

            <h3 className="font-condensed uppercase font-black text-2xl text-slate-900 leading-tight">
              JOIN THE VIP LAUNCH LIST
            </h3>
            <p className="text-xs text-stone-600 mt-2">
              Be the first to order <strong className="text-slate-900">{selectedProductTitle}</strong> before it hits major retail shelves. We'll send you an exclusive early-bird 15% discount code!
            </p>

            <form onSubmit={handleNotifySubmit} className="mt-6 space-y-3">
              <input
                type="email"
                required
                placeholder="Enter your email address..."
                value={notifyEmail}
                onChange={(e) => setNotifyEmail(e.target.value)}
                className="w-full px-4 py-3 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#E51A24]"
              />
              <button
                type="submit"
                className="w-full py-3 bg-[#E51A24] hover:bg-[#c8102e] text-white font-condensed uppercase tracking-wider font-extrabold text-sm rounded-xl cursor-pointer shadow"
              >
                CONFIRM VIP NOTIFICATION
              </button>
            </form>

            <button
              onClick={() => setIsNotifyOpen(false)}
              className="mt-4 text-xs font-bold text-stone-400 hover:text-stone-600 cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
