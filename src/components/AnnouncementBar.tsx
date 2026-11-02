/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useStore } from '../context/StoreContext';
import { Sparkles, Globe } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  const { t, locale, toggleLocale, setCurrentPage } = useStore();

  return (
    <aside aria-label="Announcement" className="bg-[#18181B] text-white text-xs py-2 px-4 border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 truncate">
          <Sparkles className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
          <span className="font-medium tracking-wide truncate">
            {t.announcement.shipping}
          </span>
        </div>

        <div className="flex items-center gap-4 shrink-0 text-slate-300">
          <button
            onClick={() => setCurrentPage('shop')}
            className="hidden sm:inline-flex items-center hover:text-white underline underline-offset-4 font-medium transition-colors cursor-pointer"
          >
            {t.announcement.shopNow}
          </button>
          
          <span className="hidden sm:inline text-white/30">|</span>

          <button
            onClick={toggleLocale}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer text-xs font-semibold px-2 py-0.5 rounded hover:bg-white/10"
            title="Toggle English / Français"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{locale === 'en' ? 'FR (Français)' : 'EN (English)'}</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
