
import React from 'react';
import { UPCOMING_EVENTS } from '../constants';

const LiveEvents: React.FC = () => {
  return (
    <section id="events" className="py-24 bg-slate-50 dark:bg-neutral-800">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 lg:mb-16 gap-6">
          <div className="max-w-xl">
            <span className="py-1 px-3 mb-4 inline-block rounded-full text-xs font-semibold bg-brand-100 text-brand-800 dark:bg-brand-900/30 dark:text-brand-500 uppercase tracking-widest">Rastreador de Eventos</span>
            <h2 className="text-4xl font-bold text-brand-900 dark:text-white mt-4 leading-tight">Funciones y Talleres a Beneficio</h2>
            <p className="mt-4 text-slate-600 dark:text-neutral-400">
              El 100% de la venta de boletos financia apoyos de emergencia. Únete a una noche de impacto.
            </p>
          </div>
          <button type="button" className="py-3 px-6 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border-2 border-brand-900 text-brand-900 hover:bg-white focus:outline-none focus:ring-2 focus:ring-brand-900 dark:border-brand-500 dark:text-brand-500 dark:hover:bg-neutral-700 transition-all">
            Ver Todos
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {UPCOMING_EVENTS.map((event) => (
            <div key={event.id} className="group flex flex-col sm:flex-row bg-white border border-slate-100 shadow-sm rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 dark:bg-neutral-900 dark:border-neutral-700">
              {/* Contenedor de Imagen Horizontal */}
              <div className="relative w-full sm:w-48 h-48 sm:h-auto shrink-0 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="size-full absolute top-0 start-0 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 left-2 py-1 px-2 bg-amber-500/90 text-white font-bold rounded-lg text-[10px] uppercase tracking-wider shadow-sm backdrop-blur-sm">
                  Beneficio
                </div>
              </div>

              {/* Contenido Compacto */}
              <div className="flex-1 p-4 md:p-6 flex flex-col">
                <div className="mb-auto">
                  <p className="text-amber-600 text-[10px] font-bold uppercase tracking-widest mb-1 dark:text-amber-500">{event.artist}</p>
                  <h3 className="text-xl font-bold text-brand-900 dark:text-white mb-3 line-clamp-1">{event.title}</h3>
                  
                  <div className="space-y-2 text-slate-500 dark:text-neutral-400 text-xs">
                    <div className="flex items-center gap-x-2">
                      <svg className="shrink-0 w-3.5 h-3.5 text-brand-700 dark:text-brand-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <svg className="shrink-0 w-3.5 h-3.5 text-brand-700 dark:text-brand-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between gap-x-4 pt-4 border-t border-slate-50 dark:border-neutral-800">
                  <div>
                    <p className="text-[9px] text-slate-400 uppercase font-bold dark:text-neutral-500">Cuota Mínima</p>
                    <p className="text-lg font-bold text-brand-900 dark:text-white">{event.price}</p>
                  </div>
                  <button type="button" className="py-2 px-5 inline-flex items-center gap-x-2 text-xs font-bold rounded-full border border-transparent bg-brand-900 text-white hover:bg-brand-800 focus:outline-none transition-all shadow-sm shrink-0">
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveEvents;
