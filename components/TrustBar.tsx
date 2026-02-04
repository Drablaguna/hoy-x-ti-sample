
import React from 'react';
import { PARTNERS } from '../constants';

const TrustBar: React.FC = () => {
  return (
    <div className="py-12 bg-white border-y border-slate-100 dark:bg-neutral-900 dark:border-neutral-800">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-slate-400 font-semibold text-xs tracking-[0.2em] uppercase mb-12 dark:text-neutral-500">
          Nuestra Red de Apoyo
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-16 items-center">
          {PARTNERS.map((partner, idx) => (
            <div key={idx} className="flex justify-center items-center gap-3 transition-all duration-300 grayscale hover:grayscale-0 opacity-40 hover:opacity-100">
              <img src={partner.logo} alt={partner.name} className="h-8 w-auto dark:invert" />
              <span className="hidden md:inline text-slate-600 dark:text-neutral-400 font-bold text-sm uppercase tracking-wider">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
