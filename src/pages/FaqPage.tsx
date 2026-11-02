/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { ChevronDown, ChevronUp, HelpCircle, Mail, Phone } from 'lucide-react';

export const FaqPage: React.FC = () => {
  const { t, locale, setCurrentPage } = useStore();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: locale === 'en' ? 'How long does a jar of Taltis Jollof Sauce stay fresh?' : 'Combien de temps se conserve un bocal de sauce Jollof Taltis ?',
      a: locale === 'en'
        ? 'Unopened, our 500 mL glass jars are shelf-stable in your pantry for up to 18 months from production. Once opened, keep refrigerated and enjoy within 10 to 14 days for optimal fresh pepper flavour.'
        : 'Non ouvert, notre bocal en verre de 500 mL se conserve à température ambiante jusqu’à 18 mois. Après ouverture, conservez au réfrigérateur et consommez dans les 10 à 14 jours.',
    },
    {
      q: locale === 'en' ? 'What are the shipping rates and delivery times across Canada?' : 'Quels sont les frais de livraison et les délais au Canada ?',
      a: locale === 'en'
        ? 'We offer FREE Canadian Standard Shipping on all orders over $50 CAD! For orders under $50, flat-rate expedited shipping is $9.99 CAD. Delivery within Ontario and Quebec typically takes 1–3 business days; other provinces take 3–5 business days.'
        : 'Nous offrons la livraison standard GRATUITE pour les commandes de plus de 50 $ CAD ! Pour les commandes de moins de 50 $, le tarif fixe est de 9,99 $ CAD. Délais : 1 à 3 jours ouvrables pour l’Ontario et le Québec, 3 à 5 jours pour les autres provinces.',
    },
    {
      q: locale === 'en' ? 'Are Taltis Jollof Sauces gluten-free and vegan-friendly?' : 'Les sauces Jollof Taltis sont-elles sans gluten et végétaliennes ?',
      a: locale === 'en'
        ? 'Yes! Both our Mild and Hot 500 mL Jollof Sauces are 100% plant-based, gluten-free, dairy-free, and nut-free. We use real sweet red bell peppers, ginger, garlic, and sea salt with zero artificial preservatives or fillers.'
        : 'Oui ! Nos sauces Jollof Douce et Épicée sont 100% végétaliennes, sans gluten, sans produits laitiers et sans noix. Nous utilisons de vrais poivrons rouges, du gingembre, de l’ail et du sel de mer, sans conservateurs artificiels.',
    },
    {
      q: locale === 'en' ? 'How much rice does one 500 mL jar prepare?' : 'Quelle quantité de riz peut-on préparer avec un bocal de 500 mL ?',
      a: locale === 'en'
        ? 'One 500 mL jar prepares approximately 2.5 cups of uncooked parboiled rice (which yields 6 generous servings of celebration Jollof rice). Add 1.5 cups of broth or water for stove-top cooking.'
        : 'Un bocal de 500 mL permet de cuire environ 2,5 tasses de riz étuvé cru (soit 6 portions généreuses de riz Jollof). Ajoutez 1,5 tasse de bouillon ou d’eau.',
    },
    {
      q: locale === 'en' ? 'What is the heat difference between Mild and Hot?' : 'Quelle est la différence de piquant entre la Douce et l’Épicée ?',
      a: locale === 'en'
        ? 'Our Mild sauce (2/5 heat) is packed with sweet roasted bell pepper richness and gentle aromatic ginger, perfect for the entire family including children. Our Hot sauce (4/5 heat) contains authentic Scotch bonnet peppers for the true West African party kick.'
        : 'Notre sauce Douce (2/5) met l’accent sur la douceur du poivron rouge et la chaleur du gingembre, idéale pour toute la famille. Notre sauce Épicée (4/5) contient du piment Scotch bonnet pour le piquant festif ouest-africain authentique.',
    },
    {
      q: locale === 'en' ? 'Can I buy Taltis Foods in grocery stores?' : 'Puis-je trouver les produits Taltis en épicerie ?',
      a: locale === 'en'
        ? 'Yes! Taltis Foods is stocked at select Metro, Sobeys, and FreshCo locations, as well as premier independent African, Caribbean, and international markets across Canada. Use our Find a Store page to locate your nearest stockist.'
        : 'Oui ! Les produits Taltis sont disponibles chez certains Metro, Sobeys, FreshCo et épiceries fines africaines et caribéennes. Consultez notre page Trouver en magasin.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#C8102E]">
          {t.nav.faq}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-sm text-slate-600">
          Everything you need to know about cooking with Taltis, ingredients, shipping, and storage.
        </p>
      </div>

      {/* Accordion List */}
      <div className="bg-white rounded-3xl border border-slate-200 divide-y divide-slate-100 p-6 sm:p-8 shadow-xs">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="py-4 first:pt-0 last:pb-0">
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex items-center justify-between text-left font-bold text-slate-900 hover:text-[#C8102E] transition-colors py-2 cursor-pointer text-sm sm:text-base"
              >
                <span>{faq.q}</span>
                {isOpen ? <ChevronUp className="w-5 h-5 shrink-0" /> : <ChevronDown className="w-5 h-5 shrink-0" />}
              </button>
              {isOpen && (
                <p className="pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed animate-in fade-in-50 duration-150">
                  {faq.a}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Need more help banner */}
      <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center space-y-3">
        <h3 className="text-base font-bold text-slate-900">Still have questions?</h3>
        <p className="text-xs text-slate-500 max-w-md mx-auto">
          Our Canadian customer care team is delighted to help with recipe advice, order tracking, and wholesale inquiries.
        </p>
        <div className="pt-2 flex justify-center gap-4">
          <button
            onClick={() => setCurrentPage('wholesale')}
            className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
          >
            Contact Customer Support
          </button>
        </div>
      </div>
    </div>
  );
};
