/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { BrandLogoBadge } from './BrandLogoBadge';
import {
  ShoppingBag,
  Menu,
  X,
  ChevronDown,
  Globe,
  Sparkles,
  Award
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { currentPage, setCurrentPage, t, cartCount, setIsCartOpen, locale, toggleLocale } = useStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [accessoriesDropdownOpen, setAccessoriesDropdownOpen] = useState(false);

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    setShopDropdownOpen(false);
    setAccessoriesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isShopActive = ['shop', 'upcoming-products', 'limited-editions'].includes(currentPage);
  const isAccessoriesActive = ['accessories', 'other-african'].includes(currentPage);

  return (
    <header className="sticky top-0 z-40 bg-[#E51A24] text-white shadow-md border-b border-rose-600 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-20">
          {/* Left: Official Leaf Brand Logo Badge */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 cursor-pointer shrink-0"
            aria-label="Taltis Foods Home"
          >
            <BrandLogoBadge size="md" variant="white" />
          </button>

          {/* Center: Exact Top-Level Menu requested by User */}
          <nav className="hidden xl:flex items-center gap-5 font-condensed tracking-wider text-sm font-bold text-white">
            {/* 1. HOME */}
            <button
              onClick={() => handleNavClick('home')}
              className={`py-2 hover:text-amber-300 transition-colors cursor-pointer relative ${
                currentPage === 'home' ? 'text-amber-300 font-extrabold' : 'text-white'
              }`}
            >
              HOME
              {currentPage === 'home' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-300 rounded-full" />
              )}
            </button>

            {/* 2. SHOP (with submenu: Upcoming Products, Limited Editions) */}
            <div
              className="relative group"
              onMouseEnter={() => setShopDropdownOpen(true)}
              onMouseLeave={() => setShopDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('shop')}
                className={`py-2 flex items-center gap-1 hover:text-amber-300 transition-colors cursor-pointer relative ${
                  isShopActive ? 'text-amber-300 font-extrabold' : 'text-white'
                }`}
              >
                <span>SHOP</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                {isShopActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-300 rounded-full" />
                )}
              </button>

              {/* Submenu Flyout */}
              <div
                className={`absolute left-0 top-full pt-2 w-56 transition-all duration-200 z-50 ${
                  shopDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="bg-white rounded-2xl shadow-2xl border-2 border-stone-200 p-2 text-slate-800 text-xs font-condensed font-black tracking-wider uppercase">
                  <button
                    onClick={() => handleNavClick('shop')}
                    className={`w-full text-left px-4 py-2.5 rounded-xl hover:bg-rose-50 hover:text-[#E51A24] transition-colors cursor-pointer flex items-center justify-between ${
                      currentPage === 'shop' ? 'bg-rose-50 text-[#E51A24]' : ''
                    }`}
                  >
                    <span>All Sauces &amp; Bundles</span>
                  </button>

                  <button
                    onClick={() => handleNavClick('upcoming-products')}
                    className={`w-full text-left px-4 py-2.5 rounded-xl hover:bg-rose-50 hover:text-[#E51A24] transition-colors cursor-pointer flex items-center justify-between ${
                      currentPage === 'upcoming-products' ? 'bg-rose-50 text-[#E51A24]' : ''
                    }`}
                  >
                    <span>Upcoming Products</span>
                    <span className="text-[9px] bg-amber-400 text-slate-950 px-1.5 py-0.5 rounded font-extrabold">
                      NEW
                    </span>
                  </button>

                  <button
                    onClick={() => handleNavClick('limited-editions')}
                    className={`w-full text-left px-4 py-2.5 rounded-xl hover:bg-rose-50 hover:text-[#E51A24] transition-colors cursor-pointer flex items-center justify-between ${
                      currentPage === 'limited-editions' ? 'bg-rose-50 text-[#E51A24]' : ''
                    }`}
                  >
                    <span>Limited Editions</span>
                    <span className="text-[9px] bg-rose-600 text-white px-1.5 py-0.5 rounded font-extrabold">
                      RARE
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* 3. AFRICAN KITCHEN ACCESSORIES (with submenu: Other African products) */}
            <div
              className="relative group"
              onMouseEnter={() => setAccessoriesDropdownOpen(true)}
              onMouseLeave={() => setAccessoriesDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('accessories')}
                className={`py-2 flex items-center gap-1 hover:text-amber-300 transition-colors cursor-pointer relative ${
                  isAccessoriesActive ? 'text-amber-300 font-extrabold' : 'text-white'
                }`}
              >
                <span>AFRICAN KITCHEN ACCESSORIES</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                {isAccessoriesActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-300 rounded-full" />
                )}
              </button>

              {/* Submenu Flyout */}
              <div
                className={`absolute left-0 top-full pt-2 w-64 transition-all duration-200 z-50 ${
                  accessoriesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="bg-white rounded-2xl shadow-2xl border-2 border-stone-200 p-2 text-slate-800 text-xs font-condensed font-black tracking-wider uppercase">
                  <button
                    onClick={() => handleNavClick('accessories')}
                    className={`w-full text-left px-4 py-2.5 rounded-xl hover:bg-rose-50 hover:text-[#E51A24] transition-colors cursor-pointer flex items-center justify-between ${
                      currentPage === 'accessories' ? 'bg-rose-50 text-[#E51A24]' : ''
                    }`}
                  >
                    <span>Cookware &amp; Utensils</span>
                  </button>

                  <button
                    onClick={() => handleNavClick('other-african')}
                    className={`w-full text-left px-4 py-2.5 rounded-xl hover:bg-rose-50 hover:text-[#E51A24] transition-colors cursor-pointer flex items-center justify-between ${
                      currentPage === 'other-african' ? 'bg-rose-50 text-[#E51A24]' : ''
                    }`}
                  >
                    <span>Other African products</span>
                    <span className="text-[9px] bg-emerald-600 text-white px-1.5 py-0.5 rounded font-extrabold">
                      STAPLES
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* 4. RECIPES */}
            <button
              onClick={() => handleNavClick('recipes')}
              className={`py-2 hover:text-amber-300 transition-colors cursor-pointer relative ${
                currentPage === 'recipes' ? 'text-amber-300 font-extrabold' : 'text-white'
              }`}
            >
              RECIPES
              {currentPage === 'recipes' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-300 rounded-full" />
              )}
            </button>

            {/* 5. OUR STORY */}
            <button
              onClick={() => handleNavClick('our-story')}
              className={`py-2 hover:text-amber-300 transition-colors cursor-pointer relative ${
                currentPage === 'our-story' ? 'text-amber-300 font-extrabold' : 'text-white'
              }`}
            >
              OUR STORY
              {currentPage === 'our-story' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-300 rounded-full" />
              )}
            </button>

            {/* 6. WHOLE SALE */}
            <button
              onClick={() => handleNavClick('wholesale')}
              className={`py-2 hover:text-amber-300 transition-colors cursor-pointer relative ${
                currentPage === 'wholesale' ? 'text-amber-300 font-extrabold' : 'text-white'
              }`}
            >
              WHOLE SALE
              {currentPage === 'wholesale' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-300 rounded-full" />
              )}
            </button>

            {/* 7. CONTACT */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`py-2 hover:text-amber-300 transition-colors cursor-pointer relative ${
                currentPage === 'contact' ? 'text-amber-300 font-extrabold' : 'text-white'
              }`}
            >
              CONTACT
              {currentPage === 'contact' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-300 rounded-full" />
              )}
            </button>
          </nav>

          {/* Right Action Icons (Language, Cart, Mobile Burger) */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Switch */}
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1 text-xs font-bold text-white hover:text-amber-200 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-colors cursor-pointer"
              title="Toggle English / Français"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{locale === 'en' ? 'FR' : 'EN'}</span>
            </button>

            {/* Cart Button with Count Badge */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center justify-center p-2.5 rounded-full bg-white text-[#E51A24] hover:bg-amber-100 transition-colors cursor-pointer shadow-sm"
              aria-label="Open Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm tabular-nums">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-white hover:text-amber-300 transition-colors cursor-pointer"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#c8102e] border-t border-rose-500 px-4 py-6 space-y-4 max-h-[85vh] overflow-y-auto font-condensed uppercase tracking-wider text-sm font-extrabold text-white">
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left py-2 px-3 rounded-xl hover:bg-white/10 ${currentPage === 'home' ? 'bg-white/20 text-amber-300' : ''}`}
          >
            HOME
          </button>

          {/* Shop Section */}
          <div className="space-y-1 bg-black/20 p-3 rounded-2xl">
            <button
              onClick={() => handleNavClick('shop')}
              className="w-full text-left py-1 text-amber-300 font-black flex items-center justify-between"
            >
              <span>SHOP</span>
              <span className="text-[10px] bg-amber-400 text-black px-2 py-0.5 rounded">All Items</span>
            </button>
            <div className="pl-3 space-y-1 pt-1 border-t border-white/10 text-xs">
              <button
                onClick={() => handleNavClick('upcoming-products')}
                className="w-full text-left py-1.5 text-white/90 hover:text-white"
              >
                &rarr; Upcoming Products
              </button>
              <button
                onClick={() => handleNavClick('limited-editions')}
                className="w-full text-left py-1.5 text-white/90 hover:text-white"
              >
                &rarr; Limited Editions
              </button>
            </div>
          </div>

          {/* African Kitchen Accessories Section */}
          <div className="space-y-1 bg-black/20 p-3 rounded-2xl">
            <button
              onClick={() => handleNavClick('accessories')}
              className="w-full text-left py-1 text-amber-300 font-black flex items-center justify-between"
            >
              <span>AFRICAN KITCHEN ACCESSORIES</span>
              <span className="text-[10px] bg-white/20 text-white px-2 py-0.5 rounded">Cookware</span>
            </button>
            <div className="pl-3 space-y-1 pt-1 border-t border-white/10 text-xs">
              <button
                onClick={() => handleNavClick('other-african')}
                className="w-full text-left py-1.5 text-white/90 hover:text-white"
              >
                &rarr; Other African products
              </button>
            </div>
          </div>

          <button
            onClick={() => handleNavClick('recipes')}
            className={`w-full text-left py-2 px-3 rounded-xl hover:bg-white/10 ${currentPage === 'recipes' ? 'bg-white/20 text-amber-300' : ''}`}
          >
            RECIPES
          </button>

          <button
            onClick={() => handleNavClick('our-story')}
            className={`w-full text-left py-2 px-3 rounded-xl hover:bg-white/10 ${currentPage === 'our-story' ? 'bg-white/20 text-amber-300' : ''}`}
          >
            OUR STORY
          </button>

          <button
            onClick={() => handleNavClick('wholesale')}
            className={`w-full text-left py-2 px-3 rounded-xl hover:bg-white/10 ${currentPage === 'wholesale' ? 'bg-white/20 text-amber-300' : ''}`}
          >
            WHOLE SALE
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className={`w-full text-left py-2 px-3 rounded-xl hover:bg-white/10 ${currentPage === 'contact' ? 'bg-white/20 text-amber-300' : ''}`}
          >
            CONTACT
          </button>
        </div>
      )}
    </header>
  );
};
