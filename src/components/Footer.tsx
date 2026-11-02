/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { BrandLogoBadge } from './BrandLogoBadge';
import { X, ExternalLink, ShieldCheck, Truck, RotateCcw, FileText, Briefcase, Globe } from 'lucide-react';

type ModalType = 'shipping' | 'returns' | 'privacy' | 'terms' | 'careers' | null;

export const Footer: React.FC = () => {
  const { setCurrentPage, locale, toggleLocale } = useStore();
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const closeModal = () => setActiveModal(null);

  return (
    <footer className="relative bg-[#070A06] text-stone-300 font-sans border-t border-amber-600/30 overflow-hidden">
      {/* Top warm ambient glow accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-red-600 via-amber-500 to-emerald-600 opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Main 5-Column Grid: Brand Column + 4 Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-stone-800/80">
          {/* Brand Info Column (4 cols on lg) with Vertical Divider on right */}
          <div className="lg:col-span-4 lg:pr-10 lg:border-r lg:border-stone-800/80 flex flex-col justify-between">
            <div>
              {/* Transparent Leaf Logo */}
              <button
                onClick={() => setCurrentPage('home')}
                className="cursor-pointer inline-block text-left mb-5 transition-transform hover:scale-105 duration-200"
                aria-label="Taltis Foods Home"
              >
                <BrandLogoBadge size="lg" />
              </button>

              {/* Tagline matching reference */}
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-normal max-w-xs">
                Authentic African flavours,
                <br />
                made easy for every kitchen.
              </p>

              {/* Social Buttons: Circular dark pills 'IG' and 'f' */}
              <div className="flex items-center gap-3 mt-6">
                <a
                  href="https://www.instagram.com/taltisfoods"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#111611] hover:bg-[#E51A24] border border-stone-700/80 text-stone-300 hover:text-white flex items-center justify-center font-bold text-xs tracking-wider transition-all duration-200 hover:scale-110 shadow-sm"
                  aria-label="Instagram"
                >
                  IG
                </a>
                <a
                  href="https://www.facebook.com/taltisfoods"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#111611] hover:bg-[#1877F2] border border-stone-700/80 text-stone-300 hover:text-white flex items-center justify-center font-serif font-black text-sm transition-all duration-200 hover:scale-110 shadow-sm"
                  aria-label="Facebook"
                >
                  f
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Columns (8 cols on lg: 4 columns of 2 cols each) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 lg:pl-4">
            {/* Column 1: SHOP */}
            <div className="space-y-3">
              <div>
                <h4 className="font-sans font-bold text-white text-sm sm:text-base tracking-wider uppercase">
                  SHOP
                </h4>
                <div className="w-6 h-[2px] bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mt-1.5" />
              </div>
              <ul className="space-y-2.5 text-sm text-stone-300/90 font-normal pt-2">
                <li>
                  <button
                    onClick={() => setCurrentPage('shop')}
                    className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                  >
                    Jollof Sauce
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage('shop')}
                    className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                  >
                    All Products
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage('accessories')}
                    className="hover:text-amber-400 transition-colors cursor-pointer text-left text-stone-400"
                  >
                    Kitchen Accessories
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 2: LEARN */}
            <div className="space-y-3">
              <div>
                <h4 className="font-sans font-bold text-white text-sm sm:text-base tracking-wider uppercase">
                  LEARN
                </h4>
                <div className="w-6 h-[2px] bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mt-1.5" />
              </div>
              <ul className="space-y-2.5 text-sm text-stone-300/90 font-normal pt-2">
                <li>
                  <button
                    onClick={() => setCurrentPage('how-it-works')}
                    className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage('recipes')}
                    className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                  >
                    Recipes
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage('recipes')}
                    className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                  >
                    Blog
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage('faq')}
                    className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                  >
                    FAQ
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: COMPANY */}
            <div className="space-y-3">
              <div>
                <h4 className="font-sans font-bold text-white text-sm sm:text-base tracking-wider uppercase">
                  COMPANY
                </h4>
                <div className="w-6 h-[2px] bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mt-1.5" />
              </div>
              <ul className="space-y-2.5 text-sm text-stone-300/90 font-normal pt-2">
                <li>
                  <button
                    onClick={() => setCurrentPage('our-story')}
                    className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                  >
                    Our Story
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage('dragons-den')}
                    className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                  >
                    Dragons' Den
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage('wholesale')}
                    className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                  >
                    Wholesale
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage('stores')}
                    className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                  >
                    Find a Store
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveModal('careers')}
                    className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                  >
                    Careers
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: CUSTOMER CARE */}
            <div className="space-y-3">
              <div>
                <h4 className="font-sans font-bold text-white text-sm sm:text-base tracking-wider uppercase">
                  CUSTOMER CARE
                </h4>
                <div className="w-6 h-[2px] bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mt-1.5" />
              </div>
              <ul className="space-y-2.5 text-sm text-stone-300/90 font-normal pt-2">
                <li>
                  <button
                    onClick={() => setCurrentPage('contact')}
                    className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                  >
                    Contact Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveModal('shipping')}
                    className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                  >
                    Shipping &amp; Delivery
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveModal('returns')}
                    className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                  >
                    Returns &amp; Refunds
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveModal('privacy')}
                    className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveModal('terms')}
                    className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                  >
                    Terms &amp; Conditions
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: SECURE PAYMENTS + Canada & African Flavour Badges */}
        <div className="py-6 flex flex-col lg:flex-row items-center justify-between gap-6 border-b border-stone-800/80">
          {/* Left: SECURE PAYMENTS label and payment cards */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
            <span className="font-mono text-xs uppercase tracking-widest font-black text-stone-300 mr-1 select-none">
              SECURE PAYMENTS
            </span>

            {/* Payment Method Badges (Matching Screenshot) */}
            <div className="flex flex-wrap items-center gap-2">
              {/* AMEX */}
              <div
                className="h-6 px-2 bg-[#007AC1] rounded flex items-center justify-center text-white font-sans font-black text-[9px] tracking-tighter border border-blue-400/30 select-none shadow-sm"
                title="American Express"
              >
                AMEX
              </div>

              {/* Apple Pay */}
              <div
                className="h-6 px-2 bg-white rounded flex items-center justify-center text-black font-sans font-bold text-[10px] gap-0.5 border border-stone-300 select-none shadow-sm"
                title="Apple Pay"
              >
                <svg className="w-2.5 h-2.5 fill-black" viewBox="0 0 170 170">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.69-7.85-12.01-14.42-6.53-9.9-11.66-20.98-15.39-33.24-3.73-12.26-5.6-23.77-5.6-34.54 0-14.88 3.82-27.17 11.45-36.87 7.63-9.7 17.1-14.65 28.41-14.85 4.9 0 10.45 1.34 16.65 4.02 6.2 2.68 10.14 4.07 11.83 4.17 1.48 0 5.68-1.44 12.61-4.32 6.93-2.88 12.74-4.14 17.43-3.78 13.51.98 24.36 5.86 32.55 14.65-11.87 7.18-17.7 17.15-17.5 29.9.23 10.02 4.13 18.52 11.71 25.49 7.58 6.97 16.61 10.88 27.09 11.74-2.23 6.97-5.07 14.16-8.52 21.57zM119.22 31.96c0-7.39 2.68-14.44 8.04-21.15 5.36-6.71 12.04-10.81 20.04-12.31.23 1.03.35 1.99.35 2.88 0 7.39-2.79 14.53-8.37 21.42-5.58 6.89-12.33 10.97-20.25 12.24-.07-.98-.11-2.01-.11-3.08z" />
                </svg>
                <span>Pay</span>
              </div>

              {/* Diners Club / Maestro */}
              <div
                className="h-6 px-2 bg-white rounded flex items-center justify-center gap-0.5 border border-stone-300 select-none shadow-sm"
                title="Diners Club"
              >
                <div className="w-3.5 h-3.5 rounded-full border-2 border-[#0079BE] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0079BE]" />
                </div>
              </div>

              {/* Discover */}
              <div
                className="h-6 px-2 bg-white rounded flex items-center justify-center font-sans font-bold text-[9px] text-slate-800 tracking-tight border border-stone-300 select-none shadow-sm"
                title="Discover"
              >
                <span>DISC</span>
                <span className="w-2 h-2 rounded-full bg-[#FF6000] inline-block mx-0.5" />
                <span>VER</span>
              </div>

              {/* Google Pay */}
              <div
                className="h-6 px-2 bg-white rounded flex items-center justify-center gap-1 border border-stone-300 select-none shadow-sm"
                title="Google Pay"
              >
                <span className="text-[#4285F4] font-black text-[10px]">G</span>
                <span className="text-slate-700 font-medium text-[10px]">Pay</span>
              </div>

              {/* Mastercard */}
              <div
                className="h-6 px-2 bg-[#1A1A1A] rounded flex items-center justify-center border border-stone-700 select-none shadow-sm"
                title="Mastercard"
              >
                <div className="flex items-center -space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#EB001B]" />
                  <div className="w-3 h-3 rounded-full bg-[#F79E1B] opacity-90" />
                </div>
              </div>

              {/* Shop Pay */}
              <div
                className="h-6 px-2.5 bg-[#5A31F4] rounded flex items-center justify-center text-white font-sans font-bold text-[10px] tracking-tight border border-purple-400/30 select-none shadow-sm"
                title="Shop Pay"
              >
                shop
              </div>

              {/* VISA */}
              <div
                className="h-6 px-2.5 bg-[#1A1F71] rounded flex items-center justify-center text-white font-sans font-black italic text-[11px] tracking-wider border border-blue-400/30 select-none shadow-sm"
                title="Visa"
              >
                VISA
              </div>
            </div>
          </div>

          {/* Right: Badges 'Made in Canada' and 'Authentic African flavour' */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Made in Canada pill */}
            <div className="flex items-center gap-1.5 bg-[#121612] border border-stone-700/80 px-4 py-1.5 rounded-full text-xs text-stone-200 font-medium select-none shadow-sm">
              <span className="text-sm">🍁</span>
              <span>Made in Canada</span>
            </div>

            {/* Authentic African flavour pill */}
            <div className="bg-[#121612] border border-stone-700/80 px-4 py-1.5 rounded-full text-xs text-stone-200 font-medium select-none shadow-sm">
              Authentic African flavour
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Locale */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400/80">
          <p className="select-none">
            <button
              onClick={() => {
                setCurrentPage('admin');
                window.location.hash = 'admin';
              }}
              className="text-stone-400/80 hover:text-stone-300 transition-colors cursor-default focus:outline-none"
              title="Taltis Foods"
              aria-label="Taltis Foods"
            >
              ©
            </button>{' '}
            2026 Taltis Foods Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-stone-400">
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{locale === 'en' ? 'Français (FR)' : 'English (EN)'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          CUSTOMER CARE & LEGAL INFORMATION MODAL
          Seamlessly handles Shipping, Returns, Privacy, Terms, and Careers
         ========================================================================= */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="bg-stone-900 border border-stone-700 rounded-3xl max-w-xl w-full p-6 sm:p-8 text-stone-200 shadow-2xl relative max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 p-2 rounded-full bg-stone-800 text-stone-400 hover:text-white hover:bg-stone-700 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {activeModal === 'shipping' && (
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Truck className="w-6 h-6" />
                </div>
                <h3 className="font-condensed uppercase font-black text-2xl text-white tracking-wide">
                  Shipping &amp; Delivery
                </h3>
                <p className="text-sm text-stone-300 leading-relaxed">
                  We ship our premium 500 mL glass jars nationwide across all Canadian provinces and territories via Canada Post Expedited Parcel and UPS.
                </p>
                <div className="bg-stone-800/80 p-4 rounded-xl border border-stone-700 text-xs space-y-2">
                  <div className="flex justify-between font-bold text-white">
                    <span>Orders over $50 CAD</span>
                    <span className="text-emerald-400">FREE Standard Delivery</span>
                  </div>
                  <div className="flex justify-between text-stone-400">
                    <span>Ontario &amp; Quebec</span>
                    <span>1–3 Business Days</span>
                  </div>
                  <div className="flex justify-between text-stone-400">
                    <span>Western &amp; Atlantic Canada</span>
                    <span>3–5 Business Days</span>
                  </div>
                </div>
                <p className="text-xs text-stone-400">
                  Every order is packed in custom impact-resistant thermal cushioning to ensure glass jars arrive in perfect condition.
                </p>
              </div>
            )}

            {activeModal === 'returns' && (
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                  <RotateCcw className="w-6 h-6" />
                </div>
                <h3 className="font-condensed uppercase font-black text-2xl text-white tracking-wide">
                  Returns &amp; Refunds
                </h3>
                <p className="text-sm text-stone-300 leading-relaxed">
                  We stand by the authentic taste of our West African sauces with a 100% Flavour Guarantee.
                </p>
                <div className="bg-stone-800/80 p-4 rounded-xl border border-stone-700 text-xs space-y-2">
                  <p className="font-bold text-white">30-Day Freshness Guarantee</p>
                  <p className="text-stone-300">
                    If your shipment arrives damaged or you are unsatisfied with your order, contact us within 30 days of delivery at <a href="mailto:taltisfoods@gmail.com" className="text-amber-400 hover:underline">taltisfoods@gmail.com</a> with your order number for an immediate replacement or full refund.
                  </p>
                </div>
              </div>
            )}

            {activeModal === 'privacy' && (
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-condensed uppercase font-black text-2xl text-white tracking-wide">
                  Privacy Policy
                </h3>
                <p className="text-sm text-stone-300 leading-relaxed">
                  Taltis Foods Inc. respects your privacy and is committed to protecting your personal information under Canadian PIPEDA standards.
                </p>
                <div className="bg-stone-800/80 p-4 rounded-xl border border-stone-700 text-xs space-y-2 text-stone-300">
                  <p>• We never sell, rent, or trade customer contact details with third parties.</p>
                  <p>• Payment details are processed using Level-1 PCI-DSS compliant 256-bit SSL encryption.</p>
                  <p>• You may opt out of our email recipe newsletter at any time via the unsubscribe link.</p>
                </div>
              </div>
            )}

            {activeModal === 'terms' && (
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="font-condensed uppercase font-black text-2xl text-white tracking-wide">
                  Terms &amp; Conditions
                </h3>
                <p className="text-sm text-stone-300 leading-relaxed">
                  By placing an order on TaltisFoods.com, you agree to our standard consumer terms governed by the laws of Ontario and Canada.
                </p>
                <div className="bg-stone-800/80 p-4 rounded-xl border border-stone-700 text-xs space-y-2 text-stone-300">
                  <p>• Prices are listed in Canadian Dollars (CAD) and include applicable federal/provincial taxes at checkout.</p>
                  <p>• Commercial wholesale purchases are subject to registered business verification.</p>
                  <p>• Promotional codes and discount bundles may not be combined unless explicitly stated.</p>
                </div>
              </div>
            )}

            {activeModal === 'careers' && (
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="font-condensed uppercase font-black text-2xl text-white tracking-wide">
                  Careers at Taltis Foods
                </h3>
                <p className="text-sm text-stone-300 leading-relaxed">
                  We are expanding our Canadian culinary team! We are always looking for passionate brand ambassadors, food demo specialists, and operations talent.
                </p>
                <div className="bg-stone-800/80 p-4 rounded-xl border border-stone-700 text-xs space-y-2 text-stone-300">
                  <p className="font-bold text-white">Open Roles in Ontario &amp; Quebec:</p>
                  <p>• Retail Merchandiser &amp; Demo Specialist (Greater Toronto Area)</p>
                  <p>• Digital Marketing &amp; Recipe Content Creator</p>
                  <p>• B2B Wholesale Account Coordinator</p>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      closeModal();
                      setCurrentPage('contact');
                    }}
                    className="w-full py-3 bg-[#E51A24] hover:bg-[#c8102e] text-white font-condensed uppercase font-extrabold text-sm rounded-xl transition-colors cursor-pointer"
                  >
                    Send Resume to Careers Desk
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
};
