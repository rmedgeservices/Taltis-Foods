/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface BrandLogoBadgeProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'plain' | 'white' | 'pill';
  className?: string;
  showSubtitle?: boolean;
}

export const BrandLogoBadge: React.FC<BrandLogoBadgeProps> = ({
  size = 'md',
  className = '',
  showSubtitle = false,
}) => {
  const sizeClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-20 sm:h-24',
  }[size];

  return (
    <div className={`inline-flex items-center gap-2.5 select-none transition-transform hover:scale-105 duration-200 ${className}`}>
      <img
        src="/assets/aistudio/TalTis_logo-Transparent__1__cdf6c21d.png"
        alt="Taltis Foods — African Cuisine Made Easy"
        className={`${sizeClasses} w-auto object-contain drop-shadow-md`}
      />
      {showSubtitle && (
        <div className="flex flex-col text-left leading-tight">
          <span className="font-condensed font-black text-sm uppercase tracking-wider text-white">
            TALTIS FOODS
          </span>
          <span className="text-[10px] uppercase tracking-widest text-amber-300 font-bold">
            AFRICAN CUISINE MADE EASY
          </span>
        </div>
      )}
    </div>
  );
};
