
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white/90 backdrop-blur-md text-sm py-4 dark:bg-neutral-900/90 border-b border-slate-100 dark:border-neutral-800">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
        <div className="flex items-center justify-between">
          <a className="flex-none text-2xl font-serif font-bold text-brand-900 dark:text-brand-500 focus:outline-none focus:opacity-80" href="#" aria-label="Creativos por el Bienestar">
            Creativos <span className="text-amber-600">por el</span> Bienestar
          </a>
          <div className="sm:hidden">
            <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-600" data-hs-collapse="#navbar-with-collapse" aria-controls="navbar-with-collapse" aria-label="Toggle navigation">
              <svg className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
              <svg className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
        </div>
        <div id="navbar-with-collapse" className="hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            <a className="font-medium text-slate-600 hover:text-brand-900 dark:text-neutral-400 dark:hover:text-neutral-200 focus:outline-none focus:text-brand-900" href="#about">Red de Apoyo</a>
            <a className="font-medium text-slate-600 hover:text-brand-900 dark:text-neutral-400 dark:hover:text-neutral-200 focus:outline-none focus:text-brand-900" href="#impact">Impacto</a>
            <a className="font-medium text-slate-600 hover:text-brand-900 dark:text-neutral-400 dark:hover:text-neutral-200 focus:outline-none focus:text-brand-900" href="#events">Eventos</a>
            <a className="py-2.5 px-6 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-brand-900 text-white hover:bg-brand-800 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-brand-900 focus:outline-none focus:ring-2 focus:ring-brand-900 focus:ring-offset-2 transition-all shadow-md" href="#donate">
              Donar Ahora
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
