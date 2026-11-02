/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { useStore } from '../context/StoreContext';
import {
  ArrowRight,
  Flame,
  Clock,
  Sparkles,
  Check,
  ChevronLeft,
  ChevronRight,
  Award,
  ShieldCheck,
  MapPin,
  Store,
  Instagram,
  Facebook,
  ExternalLink,
  Utensils,
  ShoppingBag,
  Heart,
  Play,
  Pause
} from 'lucide-react';

// =========================================================================
// RETAILER PARTNER LOGOS: Easily update, reorder or add new partners here
// =========================================================================
export interface RetailerPartner {
  id: string;
  name: string;
  subtext: string;
  accentColor: string;
  textColor: string;
  logoSvgType: 'walmart' | 'sobeys' | 'loblaws' | 'iga' | 'farmboy';
}

export const PARTNER_RETAILERS: RetailerPartner[] = [
  {
    id: 'walmart',
    name: 'Walmart',
    subtext: 'Supercentres Canada-Wide',
    accentColor: '#0071DC',
    textColor: '#FFFFFF',
    logoSvgType: 'walmart',
  },
  {
    id: 'sobeys',
    name: 'Sobeys',
    subtext: 'Ontario & Atlantic Canada',
    accentColor: '#005A36',
    textColor: '#FFFFFF',
    logoSvgType: 'sobeys',
  },
  {
    id: 'loblaws',
    name: 'Loblaws',
    subtext: 'Grocery Aisles Nationwide',
    accentColor: '#E51A24',
    textColor: '#FFFFFF',
    logoSvgType: 'loblaws',
  },
  {
    id: 'iga',
    name: 'IGA',
    subtext: 'Quebec & Western Canada',
    accentColor: '#D6001C',
    textColor: '#FFFFFF',
    logoSvgType: 'iga',
  },
  {
    id: 'farmboy',
    name: 'Farm Boy',
    subtext: 'Fresh Ontario Markets',
    accentColor: '#004B23',
    textColor: '#FFFFFF',
    logoSvgType: 'farmboy',
  },
];

export const HomePage: React.FC = () => {
  const { t, locale, products, recipes, setCurrentPage, viewProduct, viewRecipe, addToCart, showToast } = useStore();

  // =========================================================================
  // ANIMATED HERO SLIDER STATE
  // Reflects the core message: Taltis Foods = African Cuisine Made Easy
  // =========================================================================
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHoveredHero, setIsHoveredHero] = useState(false);
  const [isPlayingHero, setIsPlayingHero] = useState(true);

  // Full-bleed hero slides featuring authentic food photography
  const heroSlides = [
    {
      id: 'family-dining',
      kicker: '✨ AUTHENTIC AFRICAN CUISINE · MADE IN CANADA ✨',
      title: 'TALTIS FOODS = AFRICAN CUISINE MADE EASY',
      description: 'Slow-simmered red bell peppers, onions, and rich West African spices. Gather everyone around delicious, golden Jollof rice in just 30 minutes.',
      badgeText: 'FAMILY TABLE FEAST',
      bgImage: '/assets/aistudio/jollof_hot_pouch_Image_5__1__a2d60c09.jpg',
      objectPosition: 'object-center',
    },
    {
      id: 'special-meal',
      kicker: '🌶️ 500 mL TRADITIONAL BELL PEPPER SAUCE 🌶️',
      title: 'TALTIS FOODS = AFRICAN CUISINE MADE EASY',
      description: 'Inspired by the vibrant culinary traditions of Africa. Enjoy restaurant-grade Jollof rice with roasted chicken, fresh salad, and fried plantains with zero stress.',
      badgeText: 'HOT & MILD 500 mL',
      bgImage: '/assets/aistudio/jollof_hot_listing_Image_2_7ca00003.jpg',
      objectPosition: 'object-center',
    },
    {
      id: 'fresh-ingredients',
      kicker: '🌱 100% NATURAL INGREDIENTS · NO PRESERVATIVES 🌱',
      title: 'TALTIS FOODS = AFRICAN CUISINE MADE EASY',
      description: 'Pure red bell peppers, Scotch bonnet heat, garlic, and ginger simmered to perfection in Canada. Packaged in 100% recyclable glass jars.',
      badgeText: 'ALL NATURAL · VEGAN',
      bgImage: '/assets/aistudio/jollof_hot_listing_Image_6__1__71507092.jpg',
      objectPosition: 'object-center',
    },
    {
      id: 'versatile-recipes',
      kicker: '🍲 VERSATILE FOR RICE, PASTA, SOUPS & STEWS 🍲',
      title: 'TALTIS FOODS = AFRICAN CUISINE MADE EASY',
      description: 'One sauce, endless meals: Jollof Rice, Creamy Jollof Pasta, Jollof Pepper Soup, and comfort-food Peanut Butter Soup ready in minutes.',
      badgeText: 'SIGNATURE RECIPES',
      bgImage: '/assets/aistudio/jollof_mild_listing_Image_3__1__26d7d9c1.jpg',
      objectPosition: 'object-center',
    },
  ];

  useEffect(() => {
    if (isHoveredHero || !isPlayingHero) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isHoveredHero, isPlayingHero, heroSlides.length]);

  const nextHeroSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevHeroSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  // =========================================================================
  // RECIPE SLIDER STATE: SLIDES TO LEFT REVEALING 3 RECIPES AT A TIME
  // =========================================================================
  const [recipeStartIndex, setRecipeStartIndex] = useState(0);

  const slideRecipesNext = () => {
    setRecipeStartIndex((prev) => {
      // Slide forward by 3, wrapping around
      const nextIndex = prev + 3;
      return nextIndex >= recipes.length ? 0 : nextIndex;
    });
  };

  const slideRecipesPrev = () => {
    setRecipeStartIndex((prev) => {
      // Slide back by 3
      const prevIndex = prev - 3;
      return prevIndex < 0 ? Math.max(0, recipes.length - 3) : prevIndex;
    });
  };

  // Get current window of 3 recipes (with circular fallback if length < 3)
  const currentThreeRecipes = [];
  for (let i = 0; i < Math.min(3, recipes.length); i++) {
    const idx = (recipeStartIndex + i) % recipes.length;
    currentThreeRecipes.push(recipes[idx]);
  }

  // Newsletter state
  const [newsletterFirstName, setNewsletterFirstName] = useState('');
  const [newsletterLastName, setNewsletterLastName] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const productSliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      showToast(locale === 'en' ? 'Please enter a valid email address.' : 'Veuillez entrer une adresse courriel valide.', 'error');
      return;
    }
    setNewsletterSubmitted(true);
    showToast(
      locale === 'en'
        ? `Thanks ${newsletterFirstName || 'friend'}! Use code TALTIS10 at checkout for 10% off.`
        : `Merci ${newsletterFirstName || 'cher client'} ! Utilisez le code TALTIS10 pour 10% de rabais.`,
      'success'
    );
  };

  return (
    <div className="w-full bg-[#FAF9F5] text-slate-900 overflow-x-hidden">
      {/* =========================================================================
          1. ANIMATED HERO SLIDER SECTION
          Core Message: Taltis Foods = African Cuisine Made Easy
          Buttons: "Shop Jollof Sauce" and "Find a store"
         ========================================================================= */}
      {/* =========================================================================
          1. FULL STRETCHED HERO SLIDESHOW / CINEMATIC SECTION
          - Full stretched image covering the whole section (edge-to-edge, object-cover)
          - Video-like animated transitions & smooth slideshow
          - Core Message: Taltis Foods = African Cuisine Made Easy
          - Buttons: "Shop Jollof Sauce" and "Find a store"
          - Transparent logo badge (no white background)
         ========================================================================= */}
      <section
        className="relative w-full min-h-[660px] sm:min-h-[720px] md:min-h-[780px] lg:min-h-[850px] xl:min-h-[880px] flex items-center justify-center overflow-hidden bg-black text-white"
        onMouseEnter={() => setIsHoveredHero(true)}
        onMouseLeave={() => setIsHoveredHero(false)}
        aria-label="Taltis Foods Hero Slideshow"
      >
        {/* Full Stretched Background Images Covering Whole Section */}
        {heroSlides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out pointer-events-none ${
                isActive ? 'opacity-100 z-0' : 'opacity-0 -z-10'
              }`}
            >
              <img
                src={slide.bgImage}
                alt={slide.title}
                className={`w-full h-full object-cover ${slide.objectPosition} transform transition-transform duration-[7000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              />
              {/* Cinematic Soft Gradients to ensure image vibrant focus with legible text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/40" />
            </div>
          );
        })}

        {/* Ambient Subtle Grid/Dotted Texture Overlay */}
        <div className="absolute inset-0 bg-dots-dark opacity-15 z-[1] pointer-events-none" />

        {/* Hero Content Overlay (Clean, Minimalist & Focused on Food Imagery) */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 sm:py-24 text-center flex flex-col items-center">
          {/* Core Headline: "Authentic African Cuisine Made Easy" */}
          <h1
            className="font-condensed uppercase font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] max-w-3xl mx-auto"
            style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
          >
            Authentic African Cuisine Made Easy
          </h1>

          {/* Requested Buttons: "Shop Jollof Sauce" and "Find a store" */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mt-8 sm:mt-10">
            <button
              onClick={() => setCurrentPage('shop')}
              className="px-8 sm:px-10 py-4 sm:py-4.5 bg-[#E51A24] hover:bg-[#c8102e] text-white font-condensed uppercase tracking-wider font-extrabold text-sm sm:text-base md:text-lg rounded-full shadow-2xl shadow-rose-950/80 transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2.5 border border-red-400/30 group"
            >
              <ShoppingBag className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>Shop Jollof Sauce</span>
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('retailers-section');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  setCurrentPage('stores');
                }
              }}
              className="px-8 sm:px-10 py-4 sm:py-4.5 bg-white hover:bg-stone-100 text-slate-950 font-condensed uppercase tracking-wider font-extrabold text-sm sm:text-base md:text-lg rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2.5 border-2 border-white/80 group"
            >
              <MapPin className="w-5 h-5 text-[#E51A24] group-hover:scale-110 transition-transform" />
              <span>Find a store</span>
            </button>
          </div>
        </div>

        {/* Previous Slide Button */}
        <button
          onClick={prevHeroSlide}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full bg-black/40 hover:bg-black/80 text-white border border-white/20 transition-all hover:scale-110 cursor-pointer backdrop-blur-sm"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Slide Button */}
        <button
          onClick={nextHeroSlide}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full bg-[#E51A24] hover:bg-[#c8102e] text-white transition-all hover:scale-110 cursor-pointer shadow-lg shadow-rose-950/60"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Bottom Slideshow Navigation & Controls Bar */}
        <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 z-20 flex flex-col sm:flex-row items-center justify-center sm:justify-between px-6 sm:px-12 max-w-7xl mx-auto gap-3">
          {/* Slide Tag / Theme Badge */}
          <div className="hidden sm:flex items-center gap-2 text-xs font-condensed font-extrabold tracking-wider uppercase text-stone-300 bg-black/50 px-3.5 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{heroSlides[currentSlide].badgeText}</span>
          </div>

          {/* Interactive Slide Progress Indicators */}
          <div className="flex items-center gap-2 bg-black/50 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
            {heroSlides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(idx)}
                className={`group relative h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentSlide ? 'w-10 bg-amber-400' : 'w-3 bg-white/40 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              >
                <span className="sr-only">Slide {idx + 1}</span>
              </button>
            ))}

            {/* Play / Pause Toggle Button */}
            <button
              onClick={() => setIsPlayingHero((prev) => !prev)}
              className="ml-2 text-stone-300 hover:text-white p-1 transition-colors cursor-pointer"
              title={isPlayingHero ? 'Pause slideshow' : 'Play slideshow'}
              aria-label={isPlayingHero ? 'Pause slideshow' : 'Play slideshow'}
            >
              {isPlayingHero ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Slide Counter */}
          <div className="hidden sm:flex items-center text-xs font-mono tracking-widest text-stone-300 bg-black/50 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
            <span className="text-amber-400 font-bold">0{currentSlide + 1}</span>
            <span className="mx-1 text-white/40">/</span>
            <span>0{heroSlides.length}</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. RETAILER SLIDER: "WHERE OUR PRODUCTS CAN BE FOUND"
          Showing sliding logos of: Walmart, Sobeys, Loblaws, IGA, Farm Boy
          Configured in PARTNER_RETAILERS for effortless future edits!
         ========================================================================= */}
      <section id="retailers-section" className="bg-[#FAF9F5] py-10 border-b border-stone-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
          <p className="font-condensed uppercase tracking-widest text-xs font-black text-[#E51A24] flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-[#E51A24]" />
            <span>WHERE OUR PRODUCTS CAN BE FOUND</span>
            <Sparkles className="w-4 h-4 text-[#E51A24]" />
          </p>
          <h2
            className="font-condensed uppercase font-black text-2xl sm:text-3xl text-slate-900 tracking-tight mt-1"
            style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
          >
            AVAILABLE IN GROCERY AISLES ACROSS CANADA
          </h2>
        </div>

        {/* Infinite Sliding Retailer Ribbon */}
        <div className="relative w-full overflow-hidden select-none py-2">
          <div className="animate-marquee flex items-center gap-6">
            {/* Repeat the list twice to create seamless loop */}
            {[...PARTNER_RETAILERS, ...PARTNER_RETAILERS, ...PARTNER_RETAILERS].map((retailer, i) => (
              <div
                key={`${retailer.id}-${i}`}
                onClick={() => setCurrentPage('stores')}
                className="group shrink-0 flex items-center gap-3 bg-white hover:bg-stone-50 border-2 border-stone-200 hover:border-black rounded-2xl px-6 py-3 shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                {/* Visual Branded Badge for Each Supermarket */}
                {retailer.logoSvgType === 'walmart' && (
                  <div className="flex items-center gap-1.5 font-sans font-black text-xl text-[#0071DC] tracking-tight">
                    <span>Walmart</span>
                    <span className="text-amber-400 font-black text-2xl leading-none">✻</span>
                  </div>
                )}
                {retailer.logoSvgType === 'sobeys' && (
                  <div className="flex items-center gap-1.5 font-sans font-black text-xl text-[#005A36] tracking-tight">
                    <span className="w-4 h-4 rounded-full bg-[#005A36] flex items-center justify-center text-white text-[10px]">
                      S
                    </span>
                    <span>Sobeys</span>
                  </div>
                )}
                {retailer.logoSvgType === 'loblaws' && (
                  <div className="flex items-center gap-1.5 font-sans font-black text-xl text-[#E51A24] tracking-tight">
                    <span className="w-4 h-4 rounded bg-[#E51A24] text-white flex items-center justify-center text-[10px]">
                      L
                    </span>
                    <span>Loblaws</span>
                  </div>
                )}
                {retailer.logoSvgType === 'iga' && (
                  <div className="flex items-center gap-1.5 font-sans font-black text-xl text-[#D6001C] tracking-tight">
                    <span className="px-1.5 py-0.5 rounded bg-[#D6001C] text-white text-xs font-black">
                      IGA
                    </span>
                  </div>
                )}
                {retailer.logoSvgType === 'farmboy' && (
                  <div className="flex items-center gap-1.5 font-serif font-black text-lg text-[#004B23] tracking-tight">
                    <span>Farm Boy™</span>
                  </div>
                )}

                <div className="border-l border-stone-200 pl-3 text-left">
                  <span className="text-[10px] font-condensed uppercase font-extrabold text-stone-500 block leading-tight">
                    {retailer.subtext}
                  </span>
                  <span className="text-[9px] text-[#E51A24] font-bold group-hover:underline">
                    Locate Aisles &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. OUR STORY IS YOUR STORY (Brand Heritage & Mission)
         ========================================================================= */}
      <section className="bg-[#E51A24] bg-dots-red text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-condensed uppercase tracking-widest font-black text-amber-300 bg-black/20 px-3 py-1.5 rounded-full inline-block">
                OUR STORY IS YOUR STORY
              </span>

              <h2
                className="font-condensed uppercase font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[0.95]"
                style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
              >
                Rooted in Heritage. Crafted for Canadian Kitchens.
              </h2>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                {locale === 'en'
                  ? 'For generations across West Africa, Jollof has been far more than a meal—it is a celebration, a friendly rivalry, and a warm invitation to gather. Taltis Foods was created to share that unmistakable slow-simmered smoky bell pepper magic without spending 3 hours over a stovetop. Made proudly in Canada using authentic red bell peppers, onions, tomatoes, and aromatic spices.'
                  : 'Depuis des générations en Afrique de l’Ouest, le riz Jollof est bien plus qu’un repas : c’est une célébration et un rassemblement chaleureux. Taltis Foods a été créé pour partager cette magie mijotée sans passer 3 heures en cuisine. Fièrement préparé au Canada.'}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setCurrentPage('our-story')}
                  className="px-8 py-3.5 bg-white text-[#E51A24] hover:bg-amber-100 font-condensed uppercase tracking-wider font-extrabold text-sm sm:text-base rounded-full shadow-lg transition-transform hover:scale-105 cursor-pointer"
                >
                  {locale === 'en' ? 'OUR STORY' : 'NOTRE HISTOIRE'}
                </button>
                <button
                  onClick={() => setCurrentPage('dragons-den')}
                  className="px-6 py-3.5 bg-black/30 hover:bg-black/50 text-amber-300 border border-amber-300/40 font-condensed uppercase tracking-wider font-extrabold text-sm rounded-full transition-colors cursor-pointer"
                >
                  DRAGONS' DEN JOURNEY &rarr;
                </button>
              </div>
            </div>

            {/* Right Tilted Photograph Collage */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Background Lifestyle photo */}
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80 transform rotate-2">
                  <img
                    src="/assets/aistudio/jollof_hot_listing_Image_2_7ca00003.jpg"
                    alt="Fresh peppers and seasoned Jollof rice"
                    className="w-full h-80 object-cover"
                  />
                </div>

                {/* Overlaid Jar Photograph */}
                <div className="absolute -bottom-6 -left-6 w-44 sm:w-52 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <img
                    src="/assets/aistudio/jollof_hot_listing_Main_image_1_08cfc0e6.jpg"
                    alt="Taltis Jollof Hot 500 mL Sauce Jar"
                    className="w-full object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.6)]"
                  />
                </div>

                {/* Heritage Starburst Stamp */}
                <div className="absolute -top-4 -right-4 bg-amber-400 text-slate-950 font-condensed uppercase font-black text-xs px-3 py-2 rounded-full shadow-lg border-2 border-white transform rotate-12">
                  100% CANADIAN MADE
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. DIVERSE & AUTHENTIC: 500 mL Product Carousel Section
         ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-condensed uppercase tracking-widest font-black text-[#E51A24]">
              {locale === 'en' ? 'DISCOVER OUR COLLECTION' : 'DÉCOUVREZ NOTRE COLLECTION'}
            </span>
            <h2
              className="font-condensed uppercase font-black text-5xl sm:text-6xl lg:text-7xl tracking-tight text-slate-950 leading-none mt-1"
              style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
            >
              DIVERSE &amp; AUTHENTIC
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              {locale === 'en'
                ? '500 mL Glass Jars of slow-cooked West African bell pepper cooking sauces and curated bundles.'
                : 'Bocaux en verre de 500 mL de sauce de cuisson aux poivrons et assortiments exclusifs.'}
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollSlider(productSliderRef, 'left')}
              className="p-3 rounded-full bg-white border border-stone-300 hover:border-black text-slate-800 transition-colors cursor-pointer shadow-sm"
              aria-label="Previous products"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollSlider(productSliderRef, 'right')}
              className="p-3 rounded-full bg-[#E51A24] hover:bg-[#c8102e] text-white transition-colors cursor-pointer shadow-sm"
              aria-label="Next products"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Product Horizontal Rail */}
        <div
          ref={productSliderRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
        >
          {products.map((product) => {
            const isHot = product.spiceLevel === 'Hot' || product.spiceLevel === 'Extra Hot';
            return (
              <div
                key={product.id}
                className="w-72 sm:w-80 shrink-0 snap-start bg-white rounded-2xl border border-stone-200 hover:border-[#E51A24]/60 transition-all p-5 shadow-sm hover:shadow-xl flex flex-col justify-between group"
              >
                <div>
                  {/* Heat Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-[11px] font-condensed uppercase tracking-wider font-extrabold px-3 py-1 rounded-full flex items-center gap-1.5 ${
                        isHot
                          ? 'bg-rose-100 text-rose-800 border border-rose-200'
                          : product.spiceLevel === 'Mild'
                          ? 'bg-amber-100 text-amber-800 border border-amber-200'
                          : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                      }`}
                    >
                      <Flame className="w-3.5 h-3.5" />
                      {product.spiceLevel.toUpperCase()} {isHot ? '· ÉPICÉE' : ''}
                    </span>
                    <span className="text-xs font-bold text-slate-400 font-condensed tracking-wider">
                      {product.volume}
                    </span>
                  </div>

                  {/* Clean Jar Photography Container */}
                  <div
                    onClick={() => viewProduct(product.id)}
                    className="relative h-64 flex items-center justify-center p-3 bg-stone-50 rounded-xl cursor-pointer overflow-hidden group-hover:bg-rose-50/40 transition-colors"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name[locale]}
                      className="max-h-full max-w-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Product Title & Info */}
                  <div className="mt-4">
                    <h3
                      onClick={() => viewProduct(product.id)}
                      className="font-condensed uppercase font-black text-xl text-slate-900 group-hover:text-[#E51A24] transition-colors cursor-pointer line-clamp-1"
                    >
                      {product.name[locale]}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {product.description[locale]}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">
                      PRICE
                    </span>
                    <span className="text-xl font-black text-slate-950">
                      ${product.price.toFixed(2)}{' '}
                      <span className="text-xs font-normal text-slate-500">CAD</span>
                    </span>
                  </div>

                  <button
                    onClick={() => addToCart(product, 1)}
                    className="px-5 py-2.5 bg-[#E51A24] hover:bg-[#c8102e] text-white font-condensed uppercase tracking-wider font-extrabold text-xs rounded-full shadow transition-transform hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    {locale === 'en' ? 'ADD TO BAG' : 'AJOUTER'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          5. RECIPE SECTION: SLIDES TO LEFT REVEALING 3 RECIPES AT A TIME
          Requested by User: "The recipe section on the homepage should slide to the left revealing 3 recipes at a time."
         ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#18181B] bg-dots-dark rounded-3xl p-6 sm:p-12 text-white shadow-2xl border border-stone-800">
          {/* Header & Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-stone-800 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-rose-950 text-amber-300 px-3.5 py-1 rounded-full text-xs font-condensed uppercase tracking-widest font-extrabold mb-2 border border-rose-800/40">
                <Sparkles className="w-3.5 h-3.5" />
                <span>OFFICIAL TALTIS BOOKLET RECIPES</span>
              </div>
              <h2
                className="font-condensed uppercase font-black text-4xl sm:text-6xl text-white tracking-tight leading-none"
                style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
              >
                MAKE IT WITH TALTIS
              </h2>
              <p className="text-stone-300 text-sm mt-2 max-w-xl">
                Taltis Foods = African Cuisine Made Easy. Delicious, authentic 30-minute meals made easy with our all-in-one cooking sauce.
              </p>
            </div>

            {/* Slide Navigation Buttons: Slide to the left 3 at a time */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-condensed uppercase font-bold text-stone-400">
                REVEALING 3 OF {recipes.length} RECIPES
              </span>
              <button
                onClick={slideRecipesPrev}
                className="p-3 rounded-full bg-stone-800 hover:bg-stone-700 text-white transition-colors cursor-pointer border border-stone-700"
                aria-label="Previous 3 Recipes"
                title="Slide Previous Recipes"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={slideRecipesNext}
                className="p-3 rounded-full bg-[#E51A24] hover:bg-[#c8102e] text-white transition-colors cursor-pointer shadow-md"
                aria-label="Next 3 Recipes (Slides to Left)"
                title="Slide to Left Revealing Next 3 Recipes"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* 3 Recipes at a Time Grid with Smooth Left Sliding Effect */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300">
            {currentThreeRecipes.map((recipe) => (
              <div
                key={recipe.id}
                onClick={() => viewRecipe(recipe.id)}
                className="bg-stone-900 rounded-2xl overflow-hidden border border-stone-800 hover:border-amber-400 transition-all cursor-pointer group flex flex-col justify-between shadow-lg hover:shadow-2xl"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={recipe.imageUrl}
                      alt={recipe.title[locale]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                    <span className="absolute bottom-3 left-3 text-[11px] font-condensed uppercase font-bold text-white bg-black/60 px-3 py-1 rounded-full flex items-center gap-1.5 backdrop-blur-sm">
                      <Clock className="w-3.5 h-3.5 text-amber-300" />
                      PREP: {recipe.prepTimeMinutes} MIN · COOK: {recipe.cookTimeMinutes} MIN
                    </span>
                  </div>

                  <div className="p-5">
                    <span className="text-[11px] font-condensed uppercase tracking-wider font-extrabold text-amber-400 block mb-1">
                      {recipe.servings} SERVINGS · {recipe.difficulty.toUpperCase()}
                    </span>
                    <h3 className="font-condensed uppercase font-black text-2xl text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                      {recipe.title[locale]}
                    </h3>
                    <p className="text-xs text-stone-400 mt-2 line-clamp-2 leading-relaxed">
                      {recipe.description[locale]}
                    </p>

                    {recipe.tip && (
                      <div className="mt-3 p-2.5 rounded-xl bg-stone-800/80 border border-stone-700 text-[11px] text-amber-200">
                        <strong>TIP: </strong>
                        <span>{recipe.tip[locale]}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-stone-800 flex items-center justify-between text-xs text-amber-300 font-bold group-hover:text-white">
                    <span>VIEW FULL RECIPE STEPS</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Link to Full Recipe Page */}
          <div className="mt-8 pt-6 border-t border-stone-800 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-stone-400">
              Explore all 5 official Taltis Recipe Booklet creations with grocery checklists &amp; chef tips.
            </span>
            <button
              onClick={() => setCurrentPage('recipes')}
              className="px-6 py-2.5 bg-white hover:bg-amber-100 text-slate-900 font-condensed uppercase font-black text-xs rounded-full transition-colors cursor-pointer"
            >
              Browse All Recipes &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. GET THOSE TASTY UPDATES: Social Grid
         ========================================================================= */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-condensed uppercase tracking-widest text-xs font-black text-[#E51A24] flex items-center justify-center gap-1.5 mb-2">
          <Sparkles className="w-4 h-4" />
          COMMUNITY KITCHENS
          <Sparkles className="w-4 h-4" />
        </p>

        <h2
          className="font-condensed uppercase font-black text-4xl sm:text-6xl tracking-tight text-slate-950 mb-4"
          style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
        >
          GET THOSE TASTY UPDATES
        </h2>

        <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto mb-10">
          Tag <strong className="text-slate-900">@taltisfoods</strong> and use <strong className="text-[#E51A24]">#CookWithTaltis</strong> on Instagram and TikTok to be featured!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative rounded-2xl overflow-hidden shadow-md group">
            <img
              src="/assets/aistudio/jollof_hot_listing_Image_3_ad1bad7f.jpg"
              alt="Community Jollof Bowl with Plantains"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 p-5 flex flex-col justify-between text-left text-white">
              <span className="text-xs font-condensed uppercase tracking-wider font-bold text-amber-300">
                @taltisfoods
              </span>
              <div>
                <p className="font-condensed font-black text-xl uppercase leading-tight">
                  "Jollof in under 30 mins on a Tuesday night. Unbelievable flavour."
                </p>
                <span className="text-[11px] text-stone-300 mt-1 block">TORONTO, ON</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-md group">
            <img
              src="/assets/aistudio/jollof_mild_listing_Image_3__1__26d7d9c1.jpg"
              alt="Family dinner plate prepared with Taltis Sauce"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 p-5 flex flex-col justify-between text-left text-white">
              <span className="text-xs font-condensed uppercase tracking-wider font-bold text-amber-300">
                @taltisfoods
              </span>
              <div>
                <p className="font-condensed font-black text-xl uppercase leading-tight">
                  "The kids devoured the Mild sauce with rotini pasta!"
                </p>
                <span className="text-[11px] text-stone-300 mt-1 block">MONTREAL, QC</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-md group">
            <img
              src="/assets/aistudio/jollof_hot_listing_Image_6__1__71507092.jpg"
              alt="Suya BBQ skewers simmered in Taltis hot sauce"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 p-5 flex flex-col justify-between text-left text-white">
              <span className="text-xs font-condensed uppercase tracking-wider font-bold text-amber-300">
                @taltisfoods
              </span>
              <div>
                <p className="font-condensed font-black text-xl uppercase leading-tight">
                  "That scotch bonnet heat in the Hot jar hits just right."
                </p>
                <span className="text-[11px] text-stone-300 mt-1 block">CALGARY, AB</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          7. GIVE YOUR STORE SOME FLAVA: Dark Stockist Block
         ========================================================= */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#18181B] bg-dots-dark text-white rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 border border-stone-800">
          <div className="space-y-4 max-w-2xl text-left">
            <span className="text-xs font-condensed uppercase tracking-widest font-black text-amber-300 bg-white/10 px-3 py-1 rounded-full">
              RETAIL &amp; FOODSERVICE PARTNERS
            </span>
            <h2
              className="font-condensed uppercase font-black text-4xl sm:text-6xl tracking-tight leading-none text-white"
              style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
            >
              GIVE YOUR STORE SOME FLAVA.
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              {locale === 'en'
                ? 'Join Walmart, Sobeys, Loblaws, IGA, and Farm Boy. Taltis Foods offers fast-turning 500 mL glass jars with strong repeat purchase velocity, clean ingredient labels, and dedicated regional marketing support.'
                : 'Rejoignez Walmart, Sobeys, Loblaws, IGA et Farm Boy. Taltis Foods propose des bocaux 500 mL à forte rotation et un soutien marketing dédié.'}
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <button
              onClick={() => setCurrentPage('wholesale')}
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-amber-100 text-slate-950 font-condensed uppercase tracking-wider font-black text-base rounded-full shadow-lg transition-transform hover:scale-105 cursor-pointer text-center"
            >
              BECOME A STOCKIST &rarr;
            </button>
            <button
              onClick={() => setCurrentPage('stores')}
              className="w-full sm:w-auto px-6 py-4 bg-transparent hover:bg-white/10 border border-stone-600 text-stone-200 font-condensed uppercase tracking-wider font-extrabold text-sm rounded-full transition-colors cursor-pointer text-center"
            >
              FIND A STORE
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          8. SPLIT NEWSLETTER SIGNUP BOX
         ========================================================= */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 border-4 border-white">
          {/* Left Column: Food Photo */}
          <div className="lg:col-span-5 relative min-h-[300px]">
            <img
              src="/assets/aistudio/jollof_mild_listing_Image_3__1__26d7d9c1.jpg"
              alt="Fresh authentic dinner preparation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30" />
          </div>

          {/* Right Column: Red Form Box */}
          <div className="lg:col-span-7 bg-[#E51A24] bg-dots-red p-8 sm:p-12 text-white flex flex-col justify-center text-left">
            <span className="text-xs font-condensed uppercase tracking-widest font-black text-amber-300">
              TALTIS KITCHEN CLUB
            </span>
            <h2
              className="font-condensed uppercase font-black text-3xl sm:text-5xl tracking-tight leading-tight mt-1"
              style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
            >
              WANT 10% OFF YOUR FIRST ORDER?
            </h2>
            <p className="text-white/90 text-sm sm:text-base mt-2 mb-6">
              {locale === 'en'
                ? 'Sign up to receive secret chef recipes, grocery restock notifications in your province, and special promotional discounts.'
                : 'Inscrivez-vous pour recevoir des recettes exclusives, des alertes de réapprovisionnement et des rabais spéciaux.'}
            </p>

            {newsletterSubmitted ? (
              <div className="bg-white/20 border border-white/40 p-4 rounded-xl text-center">
                <p className="font-condensed uppercase font-bold text-lg text-amber-200">
                  🎉 YOU’RE ON THE LIST!
                </p>
                <p className="text-xs text-white mt-1">
                  Use coupon code <strong className="underline text-white font-mono">TALTIS10</strong> at checkout for 10% off your entire order.
                </p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder={locale === 'en' ? 'First Name' : 'Prénom'}
                    value={newsletterFirstName}
                    onChange={(e) => setNewsletterFirstName(e.target.value)}
                    className="w-full px-4 py-3 bg-white text-slate-900 rounded-xl placeholder:text-stone-400 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-amber-300"
                  />
                  <input
                    type="text"
                    placeholder={locale === 'en' ? 'Last Name' : 'Nom de famille'}
                    value={newsletterLastName}
                    onChange={(e) => setNewsletterLastName(e.target.value)}
                    className="w-full px-4 py-3 bg-white text-slate-900 rounded-xl placeholder:text-stone-400 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-amber-300"
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    placeholder={locale === 'en' ? 'Email Address' : 'Adresse courriel'}
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 px-4 py-3 bg-white text-slate-900 rounded-xl placeholder:text-stone-400 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-amber-300"
                  />
                  <button
                    type="submit"
                    className="px-8 py-3 bg-black hover:bg-stone-800 text-white font-condensed uppercase tracking-wider font-extrabold text-sm rounded-xl transition-all cursor-pointer shadow-lg"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          9. MARQUEE TICKER RIBBON
         ========================================================= */}
      <div className="bg-[#E51A24] text-white py-3.5 overflow-hidden border-y border-rose-600/40 select-none">
        <div className="animate-marquee font-condensed uppercase font-black tracking-widest text-sm sm:text-base flex items-center gap-6">
          <span>TALTIS FOODS = AFRICAN CUISINE MADE EASY</span>
          <span className="text-amber-300">★</span>
          <span>500 ML READY-TO-COOK JOLLOF SAUCE</span>
          <span className="text-amber-300">★</span>
          <span>PROUDLY CANADIAN</span>
          <span className="text-amber-300">★</span>
          <span>AS SEEN ON CBC'S DRAGONS' DEN</span>
          <span className="text-amber-300">★</span>
          <span>NO PRESERVATIVES</span>
          <span className="text-amber-300">★</span>
          <span>TALTIS FOODS = AFRICAN CUISINE MADE EASY</span>
          <span className="text-amber-300">★</span>
          <span>AVAILABLE AT WALMART, SOBEYS, LOBLAWS, IGA &amp; FARM BOY</span>
          <span className="text-amber-300">★</span>
        </div>
      </div>
    </div>
  );
};
