
import React from 'react';
import { SUCCESS_STORIES } from '../constants';

const ImpactGallery: React.FC = () => {
  return (
    <section id="impact" className="py-24 bg-brand-950 text-white overflow-hidden relative">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-amber-500 font-semibold tracking-widest uppercase text-xs mb-4 block">Historias de Impacto</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">Dignidad en la Recuperación.</h2>
            
            {/* Carrusel de Preline para Testimonios */}
            <div data-hs-carousel='{
                "loadingClasses": "opacity-0",
                "isAutoPlay": true,
                "interval": 5000
              }' className="relative">
              <div className="hs-carousel relative overflow-hidden w-full min-h-[350px] bg-brand-900/30 rounded-3xl border border-brand-800 backdrop-blur-sm">
                <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                  {SUCCESS_STORIES.map((story) => (
                    <div key={story.id} className="hs-carousel-slide p-8 flex flex-col justify-center">
                      <div className="mb-6">
                        <svg className="w-10 h-10 text-amber-500 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V10C14.017 10.5523 13.5693 11 13.017 11H12.017C11.4647 11 11.017 10.5523 11.017 10V9C11.017 6.23858 13.2556 4 16.017 4H19.017C21.7784 4 24.017 6.23858 24.017 9V15C24.017 18.866 20.883 22 17.017 22H14.017V21ZM0 21L0 18C0 16.8954 0.895431 16 2.017 16H5.017C5.56928 16 6.017 15.5523 6.017 15V9C6.017 8.44772 5.56928 8 5.017 8H1.017C0.464719 8 0 8.44772 0 9V10C0 10.5523 -0.447715 11 -1 11H-2C-2.55228 11 -3 10.5523 -3 10V9C-3 6.23858 -0.761424 4 2.017 4H5.017C7.77843 4 10.017 6.23858 10.017 9V15C10.017 18.866 6.88301 22 3.017 22H0V21Z" transform="translate(0, 0) scale(1, -1) translate(0, -24)" />
                        </svg>
                      </div>
                      <p className="text-2xl font-serif italic text-brand-50 leading-snug mb-8">
                        "{story.quote}"
                      </p>
                      <div>
                        <h4 className="text-xl font-bold">{story.name}</h4>
                        <p className="text-amber-500 font-medium text-sm tracking-wide uppercase">{story.discipline}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Controles */}
              <button type="button" className="hs-carousel-prev hs-carousel-disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-white/50 hover:text-white transition-colors">
                <span className="sr-only">Anterior</span>
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              <button type="button" className="hs-carousel-next hs-carousel-disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-white/50 hover:text-white transition-colors">
                <span className="sr-only">Siguiente</span>
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>
              
              <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
                {SUCCESS_STORIES.map((_, idx) => (
                  <span key={idx} className="hs-carousel-active:bg-amber-500 hs-carousel-active:border-amber-500 w-3 h-3 border border-brand-700 rounded-full cursor-pointer"></span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-[3rem] aspect-[4/5] lg:aspect-auto lg:h-[700px]">
            <img 
              src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=1200" 
              alt="Resiliencia artística" 
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-transparent to-transparent opacity-60"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute -right-20 -bottom-20 w-[600px] h-[600px] bg-brand-800/20 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
};

export default ImpactGallery;
