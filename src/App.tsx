/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { StoreProvider, useStore } from './context/StoreContext';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { RecipesPage } from './pages/RecipesPage';
import { StoreLocatorPage } from './pages/StoreLocatorPage';
import { OurStoryPage } from './pages/OurStoryPage';
import { DragonsDenPage } from './pages/DragonsDenPage';
import { WholesalePage } from './pages/WholesalePage';
import { AdminDashboard } from './pages/AdminDashboard';
import { FaqPage } from './pages/FaqPage';
import { UpcomingProductsPage } from './pages/UpcomingProductsPage';
import { LimitedEditionsPage } from './pages/LimitedEditionsPage';
import { KitchenAccessoriesPage } from './pages/KitchenAccessoriesPage';
import { OtherAfricanProductsPage } from './pages/OtherAfricanProductsPage';
import { ContactPage } from './pages/ContactPage';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';

const PageRenderer: React.FC = () => {
  const { currentPage } = useStore();

  switch (currentPage) {
    case 'home':
      return <HomePage />;
    case 'shop':
      return <ShopPage />;
    case 'upcoming-products':
      return <UpcomingProductsPage />;
    case 'limited-editions':
      return <LimitedEditionsPage />;
    case 'accessories':
      return <KitchenAccessoriesPage />;
    case 'other-african':
      return <OtherAfricanProductsPage />;
    case 'recipes':
      return <RecipesPage />;
    case 'our-story':
      return <OurStoryPage />;
    case 'wholesale':
      return <WholesalePage />;
    case 'contact':
      return <ContactPage />;
    case 'product':
      return <ProductDetailPage />;
    case 'how-it-works':
      return <HowItWorksPage />;
    case 'stores':
      return <StoreLocatorPage />;
    case 'dragons-den':
      return <DragonsDenPage />;
    case 'admin':
      return <AdminDashboard />;
    case 'faq':
      return <FaqPage />;
    default:
      return <HomePage />;
  }
};

const ToastNotification: React.FC = () => {
  const { toast } = useStore();

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-200">
      <div className="bg-slate-900/95 backdrop-blur-md text-white text-xs font-semibold py-3 px-4 rounded-xl shadow-2xl border border-white/10 flex items-center gap-2.5 max-w-sm">
        {toast.type === 'success' && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
        {toast.type === 'error' && <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />}
        {toast.type === 'info' && <Info className="w-4 h-4 text-amber-400 shrink-0" />}
        <span>{toast.message}</span>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <StoreProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-slate-800 selection:bg-[#E51A24] selection:text-white">
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1">
          <PageRenderer />
        </main>
        <Footer />
        <CartDrawer />
        <CheckoutModal />
        <ToastNotification />
      </div>
    </StoreProvider>
  );
}
