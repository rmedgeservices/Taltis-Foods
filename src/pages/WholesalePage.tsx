/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Building2, UtensilsCrossed, TrendingUp, ShieldCheck, CheckCircle2, Send, Phone, Mail } from 'lucide-react';
import { WholesaleInquiry } from '../types';

export const WholesalePage: React.FC = () => {
  const { t, locale, addInquiry, showToast } = useStore();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    businessType: 'Retail Grocery' as WholesaleInquiry['businessType'],
    location: '',
    estimatedVolume: '10–30 cases / month',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.email || !formData.contactName) {
      showToast(locale === 'en' ? 'Please fill in all required fields.' : 'Veuillez remplir tous les champs obligatoires.', 'error');
      return;
    }

    addInquiry(formData);
    setSubmitted(true);
    showToast(t.wholesale.successMessage, 'success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#C8102E]">
          {locale === 'en' ? 'B2B & Commercial Distribution' : 'Distribution Commerciale & B2B'}
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          {t.wholesale.title}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {t.wholesale.subtitle}
        </p>
      </div>

      {/* 3 Pillars for Retailers & Foodservice */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 space-y-4 shadow-xs">
          <div className="w-12 h-12 rounded-xl bg-rose-50 text-[#C8102E] flex items-center justify-center">
            <TrendingUp className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">{t.wholesale.b1Title}</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {t.wholesale.b1Desc}
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-8 space-y-4 shadow-xs">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
            <UtensilsCrossed className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">{t.wholesale.b2Title}</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {t.wholesale.b2Desc}
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-8 space-y-4 shadow-xs">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">{t.wholesale.b3Title}</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {t.wholesale.b3Desc}
          </p>
        </div>
      </div>

      {/* Inquiry Form Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900 text-white p-8 rounded-3xl space-y-6">
            <h3 className="text-xl font-bold tracking-tight">Direct Wholesale Accounts</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              We supply grocery supermarket chains, independent food markets, ghost kitchens, caterers, and restaurant hospitality groups throughout Canada.
            </p>

            <div className="space-y-3 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <Building2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Format: Case packs of 12x 500 mL glass jars & Foodservice sizes</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:taltisfoods@gmail.com" className="hover:text-amber-300 transition-colors">
                  taltisfoods@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:6475132376" className="hover:text-amber-300 transition-colors">
                  647-513-2376 (Toronto, ON)
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400">
              Response SLA: All B2B inquiries are assigned to a regional accounts director and replied to within 24 business hours.
            </div>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm">
          {submitted ? (
            <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-150">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Inquiry Received!
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                {t.wholesale.successMessage}
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    companyName: '',
                    contactName: '',
                    email: '',
                    phone: '',
                    businessType: 'Retail Grocery',
                    location: '',
                    estimatedVolume: '10–30 cases / month',
                    message: '',
                  });
                }}
                className="text-xs font-semibold text-[#C8102E] underline cursor-pointer"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {t.wholesale.formTitle}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.wholesale.companyName} *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8102E]/20 focus:border-[#C8102E]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.wholesale.contactName} *
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8102E]/20 focus:border-[#C8102E]"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.wholesale.email} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8102E]/20 focus:border-[#C8102E]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.wholesale.phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8102E]/20 focus:border-[#C8102E]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.wholesale.businessType}
                  </label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8102E]/20 focus:border-[#C8102E] bg-white"
                  >
                    <option value="Retail Grocery">Retail Supermarket / Grocer</option>
                    <option value="Restaurant / Hospitality">Restaurant / Hospitality</option>
                    <option value="Distributor">Food Distributor</option>
                    <option value="Institutional Foodservice">Institutional Catering / Foodservice</option>
                    <option value="Other">Other Specialty Account</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.wholesale.volume}
                  </label>
                  <select
                    name="estimatedVolume"
                    value={formData.estimatedVolume}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8102E]/20 focus:border-[#C8102E] bg-white"
                  >
                    <option value="Sample Pack / Trial">Sample Pack / Trial</option>
                    <option value="10–30 cases / month">10–30 cases / month</option>
                    <option value="30–100 cases / month">30–100 cases / month</option>
                    <option value="100+ cases / month">100+ cases / month (Direct Pallet)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.wholesale.location}
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. Toronto, ON or Montreal, QC"
                  className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8102E]/20 focus:border-[#C8102E]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.wholesale.message}
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Provide any details regarding your distribution timelines, requested case quantities, or retailer shelf placement..."
                  className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8102E]/20 focus:border-[#C8102E]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#C8102E] hover:bg-[#a50d25] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shadow-sm flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{t.wholesale.submitBtn}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
