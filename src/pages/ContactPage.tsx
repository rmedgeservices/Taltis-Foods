/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { BrandLogoBadge } from '../components/BrandLogoBadge';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Instagram,
  Facebook,
  Globe,
  Award,
  Sparkles,
  HelpCircle
} from 'lucide-react';

import { saveContactMessageToSupabase } from '../lib/supabase';

export const ContactPage: React.FC = () => {
  const { locale, showToast, setCurrentPage } = useStore();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('general');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) {
      showToast(locale === 'en' ? 'Please complete all required fields.' : 'Veuillez remplir les champs obligatoires.', 'error');
      return;
    }
    setSubmitted(true);
    saveContactMessageToSupabase({
      name: fullName,
      email,
      phone,
      subject,
      message,
    }).catch((err) => console.warn('Supabase contact submission note:', err));
    showToast(
      locale === 'en'
        ? 'Thank you! Your message has been routed to our team. We respond within 24 hours.'
        : 'Merci ! Votre message a été transmis à notre équipe.',
      'success'
    );
  };

  return (
    <div className="bg-[#FAF9F5] min-h-screen text-slate-900 pb-24">
      {/* Header */}
      <section className="bg-[#E51A24] bg-dots-red text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-black/25 text-amber-300 px-4 py-1.5 rounded-full text-xs font-condensed uppercase tracking-widest font-extrabold mb-4">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>WE’RE HERE FOR YOUR CULINARY JOURNEY</span>
          </div>

          <h1
            className="font-condensed uppercase font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-none text-white drop-shadow-md"
            style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
          >
            CONTACT TALTIS FOODS
          </h1>

          <p className="max-w-2xl mx-auto text-white/90 text-base sm:text-lg mt-4 font-normal leading-relaxed">
            {locale === 'en'
              ? 'Have a question about our 500 mL sauces, order shipping, wholesale inquiries, or media requests? Get in touch with our Canadian founder and support team.'
              : 'Une question sur nos sauces 500 mL, nos livraisons ou la distribution en gros ? Contactez notre fondateur et notre équipe canadienne.'}
          </p>
        </div>
      </section>

      {/* Main Grid: Contact Info + Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-condensed uppercase tracking-widest font-black text-[#E51A24]">
                DIRECT CONTACT CHANNELS
              </span>
              <h2 className="font-condensed uppercase font-black text-3xl sm:text-4xl text-slate-900 mt-1 leading-tight">
                LET'S TALK FLAVOUR &amp; PARTNERSHIPS
              </h2>
            </div>

            {/* Direct Phone from booklet */}
            <div className="bg-white rounded-2xl p-6 border-2 border-stone-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-[#E51A24] flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-condensed uppercase font-bold text-stone-400 block tracking-wider">
                  PHONE &amp; HOTLINE
                </span>
                <a
                  href="tel:6475132376"
                  className="font-condensed font-black text-2xl text-slate-900 hover:text-[#E51A24] transition-colors"
                >
                  647-513-2376
                </a>
                <p className="text-xs text-stone-500 mt-1">
                  Monday to Friday: 9:00 AM – 5:00 PM EST
                </p>
              </div>
            </div>

            {/* Email card */}
            <div className="bg-white rounded-2xl p-6 border-2 border-stone-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-[#E51A24] flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-condensed uppercase font-bold text-stone-400 block tracking-wider">
                  EMAIL ENQUIRIES
                </span>
                <a
                  href="mailto:taltisfoods@gmail.com"
                  className="font-bold text-base text-slate-900 hover:text-[#E51A24] transition-colors block"
                >
                  taltisfoods@gmail.com
                </a>
                <p className="text-xs text-stone-500 mt-0.5">
                  General inquiries, orders &amp; retail B2B
                </p>
              </div>
            </div>

            {/* Founder details */}
            <div className="bg-[#18181B] text-white rounded-2xl p-6 border border-stone-800 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Award className="w-5 h-5 text-amber-300" />
                <span className="text-xs font-condensed uppercase tracking-wider font-extrabold text-amber-300">
                  LEADERSHIP
                </span>
              </div>
              <h4 className="font-condensed uppercase font-black text-xl text-white">
                Gilles Tchianga
              </h4>
              <p className="text-xs text-stone-300 mt-0.5">
                CEO &amp; Founder, Taltis Foods Inc.
              </p>
              <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                Featured on Season 17 of CBC's <em>Dragons' Den</em>. Based in Toronto with distribution across Ontario, Quebec, and nationwide.
              </p>
            </div>

            {/* Socials & Web */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-stone-100 hover:bg-[#E51A24] hover:text-white rounded-full text-xs font-bold transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>@taltisfoodsca</span>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-stone-100 hover:bg-[#E51A24] hover:text-white rounded-full text-xs font-bold transition-colors"
              >
                <Facebook className="w-4 h-4" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-stone-200 shadow-xl">
              <h3 className="font-condensed uppercase font-black text-2xl sm:text-3xl text-slate-900 mb-2">
                SEND A MESSAGE DIRECTLY TO OUR TEAM
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 mb-6">
                Fill out the form below and a representative will reply within one business day.
              </p>

              {submitted ? (
                <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="font-condensed uppercase font-black text-2xl text-emerald-900">
                    MESSAGE TRANSMITTED!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto">
                    Thank you, {fullName || 'friend'}! We appreciate your support for authentic African cuisine in Canada.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="mt-4 px-6 py-2.5 bg-emerald-800 text-white font-condensed uppercase font-bold text-xs rounded-full cursor-pointer hover:bg-emerald-900"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-condensed uppercase font-bold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Michael Osei"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-4 py-3 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#E51A24]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-condensed uppercase font-bold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. michael@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#E51A24]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-condensed uppercase font-bold text-slate-700 mb-1">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. (416) 555-0199"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#E51A24]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-condensed uppercase font-bold text-slate-700 mb-1">
                        Subject / Topic *
                      </label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-4 py-3 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#E51A24] bg-white cursor-pointer"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="order">Online Order &amp; Delivery Tracking</option>
                        <option value="wholesale">Wholesale &amp; Supermarket Distribution</option>
                        <option value="press">Press, Media &amp; Dragons' Den</option>
                        <option value="recipes">Recipe &amp; Cooking Questions</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-condensed uppercase font-bold text-slate-700 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="How can we assist you today? Tell us about your recipe, question, or store inquiry..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#E51A24]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#E51A24] hover:bg-[#c8102e] text-white font-condensed uppercase tracking-wider font-extrabold text-sm sm:text-base rounded-2xl shadow-lg transition-transform hover:scale-[1.01] cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>SEND MESSAGE TO TALTIS FOODS</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Banner Link */}
      <section className="max-w-4xl mx-auto px-4 mt-20 text-center">
        <div className="bg-stone-100 rounded-3xl p-8 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <HelpCircle className="w-8 h-8 text-[#E51A24] shrink-0" />
            <div>
              <h4 className="font-condensed uppercase font-black text-xl text-slate-900">
                LOOKING FOR QUICK ANSWERS?
              </h4>
              <p className="text-xs text-stone-500">
                Check our Frequently Asked Questions regarding shelf life, ingredients, allergens, and free shipping.
              </p>
            </div>
          </div>
          <button
            onClick={() => setCurrentPage('faq')}
            className="px-6 py-2.5 bg-black hover:bg-stone-800 text-white font-condensed uppercase font-bold text-xs rounded-full cursor-pointer shrink-0"
          >
            VIEW FAQ &rarr;
          </button>
        </div>
      </section>
    </div>
  );
};
