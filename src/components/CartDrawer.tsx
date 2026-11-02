/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useStore } from '../context/StoreContext';
import { X, Plus, Minus, Trash2, ArrowRight, ShoppingBag, ShieldCheck } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateCartQuantity,
    cartSubtotal,
    t,
    locale,
    setIsCheckoutOpen,
    setCurrentPage,
  } = useStore();

  if (!isCartOpen) return null;

  const freeShippingThreshold = 50.0;
  const freeShippingUnlocked = cartSubtotal >= freeShippingThreshold;
  const amountRemaining = Math.max(0, freeShippingThreshold - cartSubtotal).toFixed(2);
  const progressPercent = Math.min(100, (cartSubtotal / freeShippingThreshold) * 100);

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#C8102E]" />
              <h2 className="text-lg font-bold text-slate-900">{t.cart.title}</h2>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Meter */}
          <div className="bg-amber-50/80 px-6 py-3 border-b border-amber-200/60">
            {freeShippingUnlocked ? (
              <p className="text-xs font-semibold text-emerald-800">
                {t.cart.freeShippingUnlocked}
              </p>
            ) : (
              <div className="space-y-1.5">
                <p className="text-xs font-medium text-amber-900">
                  {t.cart.freeShippingProgress(`$${amountRemaining}`)}
                </p>
                <div className="w-full bg-amber-200/70 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-[#C8102E] h-1.5 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 divide-y divide-slate-100">
            {cart.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                  <ShoppingBag className="w-8 h-8 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-800">{t.cart.emptyTitle}</h3>
                  <p className="text-xs text-slate-500 mt-1">{t.cart.emptySub}</p>
                </div>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setCurrentPage('shop');
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C8102E] text-white text-xs font-semibold rounded-lg hover:bg-[#a50d25] transition-colors cursor-pointer shadow-sm"
                >
                  {t.cart.startShopping}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.product.id} className="py-4 first:pt-0 last:pb-0 flex gap-4">
                  {/* Thumbnail */}
                  <div className="w-20 h-24 bg-slate-50 rounded-lg border border-slate-200/80 p-1 flex items-center justify-center shrink-0 overflow-hidden">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name[locale]}
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm font-bold text-slate-900 leading-tight">
                          {item.product.name[locale]}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-slate-400 hover:text-rose-600 transition-colors p-1 cursor-pointer"
                          title={t.cart.remove}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <div className="flex items-center gap-2 mt-1 text-xs text-slate-500">
                        <span>{item.product.volume}</span>
                        <span>·</span>
                        <span className={item.product.spiceLevel === 'Hot' ? 'text-rose-600 font-medium' : 'text-amber-700 font-medium'}>
                          {item.product.spiceLevel}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-slate-200 rounded-lg bg-white overflow-hidden shadow-xs">
                        <button
                          onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                          className="p-1.5 text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-xs font-semibold tabular-nums text-slate-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                          className="p-1.5 text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Line Item Total */}
                      <span className="text-sm font-bold text-slate-900 tabular-nums">
                        ${(item.product.price * item.quantity).toFixed(2)} CAD
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Trigger */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-slate-200 bg-slate-50/50 space-y-4">
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-slate-600">
                  <span>{t.cart.subtotal}</span>
                  <span className="font-semibold text-slate-900 tabular-nums">
                    ${cartSubtotal.toFixed(2)} CAD
                  </span>
                </div>
                <div className="flex justify-between text-xs text-slate-500">
                  <span>{t.checkout.shippingLabel}</span>
                  <span className="tabular-nums">
                    {freeShippingUnlocked ? (
                      <span className="text-emerald-700 font-semibold">{t.checkout.free}</span>
                    ) : (
                      '$9.99 CAD'
                    )}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">
                  {t.cart.shippingCalc}
                </p>
              </div>

              <button
                onClick={handleProceedToCheckout}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#C8102E] hover:bg-[#a50d25] text-white font-semibold rounded-lg shadow-md transition-colors cursor-pointer text-sm"
              >
                <span>{t.cart.checkoutBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>SSL Encrypted Checkout · Ships from Toronto, ON</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
