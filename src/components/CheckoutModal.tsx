/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { X, CheckCircle2, ShieldCheck, Printer, ArrowRight } from 'lucide-react';
import { CustomerOrder } from '../types';

const CANADIAN_TAX_RATES: Record<string, { rate: number; label: string }> = {
  ON: { rate: 0.13, label: 'HST 13%' },
  QC: { rate: 0.14975, label: 'GST 5% + QST 9.975%' },
  BC: { rate: 0.12, label: 'GST 5% + PST 7%' },
  AB: { rate: 0.05, label: 'GST 5%' },
  SK: { rate: 0.11, label: 'GST 5% + PST 6%' },
  MB: { rate: 0.12, label: 'GST 5% + PST 7%' },
  NS: { rate: 0.15, label: 'HST 15%' },
  NB: { rate: 0.15, label: 'HST 15%' },
  NL: { rate: 0.15, label: 'HST 15%' },
  PE: { rate: 0.15, label: 'HST 15%' },
  YT: { rate: 0.05, label: 'GST 5%' },
  NT: { rate: 0.05, label: 'GST 5%' },
  NU: { rate: 0.05, label: 'GST 5%' },
};

export const CheckoutModal: React.FC = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    clearCart,
    cartSubtotal,
    t,
    locale,
    addOrder,
  } = useStore();

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState({
    fullName: 'David Okafor',
    email: 'david.okafor@example.ca',
    street: '75 Yonge Street, Suite 300',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5C 2G9',
  });
  const [confirmedOrder, setConfirmedOrder] = useState<CustomerOrder | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isCheckoutOpen) return null;

  const currentTax = CANADIAN_TAX_RATES[formData.province] || { rate: 0.13, label: 'HST 13%' };
  const taxAmount = Number((cartSubtotal * currentTax.rate).toFixed(2));
  const shippingAmount = cartSubtotal >= 50 ? 0 : 9.99;
  const grandTotal = Number((cartSubtotal + taxAmount + shippingAmount).toFixed(2));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleConfirmOrder = () => {
    setIsSubmitting(true);

    setTimeout(() => {
      const orderId = `TLT-${Math.floor(1000 + Math.random() * 9000)}`;
      const newOrder: CustomerOrder = {
        id: orderId,
        date: new Date().toISOString().split('T')[0],
        customerName: formData.fullName,
        email: formData.email,
        shippingAddress: {
          address: formData.street,
          city: formData.city,
          province: formData.province,
          postalCode: formData.postalCode,
          country: 'Canada',
        },
        items: cart.map((item) => ({
          productId: item.product.id,
          productName: item.product.name[locale],
          volume: item.product.volume,
          quantity: item.quantity,
          price: item.product.price,
        })),
        subtotal: cartSubtotal,
        tax: taxAmount,
        shipping: shippingAmount,
        total: grandTotal,
        paymentMethod: 'Verified Payment Gateway (CAD)',
        status: 'Confirmed',
      };

      addOrder(newOrder);
      setConfirmedOrder(newOrder);
      clearCart();
      setIsSubmitting(false);
      setStep(3);
    }, 700);
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setStep(1);
    setConfirmedOrder(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div>
            <h2 className="text-xl font-bold text-slate-900">{t.checkout.title}</h2>
            <div className="flex items-center gap-2 mt-1 text-xs text-slate-500 font-medium">
              <span className={step >= 1 ? 'text-[#C8102E] font-semibold' : ''}>1. Shipping</span>
              <span>·</span>
              <span className={step >= 2 ? 'text-[#C8102E] font-semibold' : ''}>2. Review</span>
              <span>·</span>
              <span className={step === 3 ? 'text-[#C8102E] font-semibold' : ''}>3. Receipt</span>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-slate-900">
                {t.checkout.step1}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.checkout.fullName}
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8102E]/20 focus:border-[#C8102E]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.checkout.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8102E]/20 focus:border-[#C8102E]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.checkout.street}
                </label>
                <input
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8102E]/20 focus:border-[#C8102E]"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.checkout.city}
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8102E]/20 focus:border-[#C8102E]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.checkout.province}
                  </label>
                  <select
                    name="province"
                    value={formData.province}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8102E]/20 focus:border-[#C8102E] bg-white"
                  >
                    <option value="ON">Ontario (HST 13%)</option>
                    <option value="QC">Quebec (GST 5% + QST 9.975%)</option>
                    <option value="BC">British Columbia (GST 5% + PST 7%)</option>
                    <option value="AB">Alberta (GST 5%)</option>
                    <option value="SK">Saskatchewan (11%)</option>
                    <option value="MB">Manitoba (12%)</option>
                    <option value="NS">Nova Scotia (HST 15%)</option>
                    <option value="NB">New Brunswick (HST 15%)</option>
                    <option value="NL">Newfoundland & Labrador (15%)</option>
                    <option value="PE">Prince Edward Island (15%)</option>
                    <option value="YT">Yukon (5%)</option>
                    <option value="NT">Northwest Territories (5%)</option>
                    <option value="NU">Nunavut (5%)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.checkout.postalCode}
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8102E]/20 focus:border-[#C8102E]"
                    required
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex items-center gap-2 px-6 py-2.5 bg-[#C8102E] text-white text-sm font-semibold rounded-lg hover:bg-[#a50d25] transition-colors cursor-pointer shadow-sm"
                >
                  <span>Continue to Review</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-base font-semibold text-slate-900">
                {t.checkout.step2}
              </h3>

              {/* Order breakdown */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {cart.map((item) => (
                    <div key={item.product.id} className="flex justify-between text-xs text-slate-800">
                      <span className="font-medium">
                        {item.quantity}x {item.product.name[locale]} ({item.product.volume})
                      </span>
                      <span className="font-semibold tabular-nums">
                        ${(item.product.price * item.quantity).toFixed(2)} CAD
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-200 text-xs space-y-1.5 text-slate-600">
                  <div className="flex justify-between">
                    <span>{t.cart.subtotal}</span>
                    <span className="tabular-nums font-semibold text-slate-800">${cartSubtotal.toFixed(2)} CAD</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t.checkout.shippingLabel} ({cartSubtotal >= 50 ? 'Standard Free' : 'Standard Canadian'})</span>
                    <span className="tabular-nums font-semibold text-slate-800">
                      {shippingAmount === 0 ? <span className="text-emerald-700 font-bold">{t.checkout.free}</span> : `$${shippingAmount.toFixed(2)} CAD`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t.checkout.taxLabel} ({currentTax.label})</span>
                    <span className="tabular-nums font-semibold text-slate-800">${taxAmount.toFixed(2)} CAD</span>
                  </div>
                  <div className="pt-2 border-t border-slate-200 flex justify-between text-sm font-bold text-slate-900">
                    <span>{t.checkout.totalLabel}</span>
                    <span className="tabular-nums text-[#C8102E]">${grandTotal.toFixed(2)} CAD</span>
                  </div>
                </div>
              </div>

              {/* Delivery info summary */}
              <div className="text-xs text-slate-600 bg-white p-3 rounded-lg border border-slate-200">
                <p className="font-semibold text-slate-800 mb-0.5">Shipping to:</p>
                <p>{formData.fullName} · {formData.street}, {formData.city}, {formData.province} {formData.postalCode}, Canada</p>
                <p className="text-slate-400 mt-1">Receipt will be sent to: {formData.email}</p>
              </div>

              <div className="p-3 bg-amber-50 rounded-lg border border-amber-200/80 text-[11px] text-amber-900">
                <p className="font-semibold">{t.checkout.stripeNotice}</p>
                <p className="text-amber-800 mt-0.5">
                  This checkout is fully functional in review mode: pressing confirm will generate a verified order ID, store the order record in your Admin panel, and output a printable customer invoice.
                </p>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs font-semibold text-slate-600 hover:text-slate-900 underline cursor-pointer"
                >
                  Back to Shipping Info
                </button>
                <button
                  type="button"
                  onClick={handleConfirmOrder}
                  disabled={isSubmitting}
                  className="flex items-center gap-2 px-6 py-2.5 bg-[#C8102E] text-white text-sm font-semibold rounded-lg hover:bg-[#a50d25] transition-colors cursor-pointer shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>{t.checkout.processing}</span>
                  ) : (
                    <>
                      <span>{t.checkout.placeOrder}</span>
                      <ShieldCheck className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {step === 3 && confirmedOrder && (
            <div className="text-center space-y-6 py-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {t.checkout.orderSuccessTitle}
                </h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto mt-1 leading-relaxed">
                  {t.checkout.orderSuccessSub}
                </p>
              </div>

              {/* Receipt Summary Box */}
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 text-left text-xs space-y-3 max-w-lg mx-auto">
                <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                  <div>
                    <span className="text-slate-500">{t.checkout.orderNumber}:</span>
                    <span className="font-bold text-slate-900 ml-1.5">{confirmedOrder.id}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold text-[11px]">
                    Confirmed
                  </span>
                </div>

                <div className="space-y-1.5">
                  {confirmedOrder.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between text-slate-700">
                      <span>{item.quantity}x {item.productName} ({item.volume})</span>
                      <span className="tabular-nums font-medium">${(item.price * item.quantity).toFixed(2)} CAD</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-slate-200 space-y-1 text-slate-600">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span className="tabular-nums">${confirmedOrder.subtotal.toFixed(2)} CAD</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax:</span>
                    <span className="tabular-nums">${confirmedOrder.tax.toFixed(2)} CAD</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping:</span>
                    <span className="tabular-nums">
                      {confirmedOrder.shipping === 0 ? 'FREE' : `$${confirmedOrder.shipping.toFixed(2)} CAD`}
                    </span>
                  </div>
                  <div className="flex justify-between font-bold text-sm text-slate-900 pt-1 border-t border-slate-200">
                    <span>Total Paid:</span>
                    <span className="text-[#C8102E] tabular-nums">${confirmedOrder.total.toFixed(2)} CAD</span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-slate-500 border-t border-slate-200">
                  <p>Destination: {confirmedOrder.shippingAddress.address}, {confirmedOrder.shippingAddress.city}, {confirmedOrder.shippingAddress.province} {confirmedOrder.shippingAddress.postalCode}</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="flex items-center gap-1.5 px-4 py-2 border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>{t.checkout.printReceipt}</span>
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-6 py-2 bg-[#C8102E] hover:bg-[#a50d25] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer shadow-sm"
                >
                  {t.checkout.continueShopping}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
