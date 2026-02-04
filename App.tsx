
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SafetyNet from './components/SafetyNet';
import ImpactGallery from './components/ImpactGallery';
import LiveEvents from './components/LiveEvents';
import TrustBar from './components/TrustBar';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Inicializar componentes de Preline UI
    const initPreline = async () => {
      try {
        // Importación dinámica para asegurar que el módulo ESM de Preline cargue correctamente
        const preline = await import('preline');
        if (preline && preline.HSStaticMethods) {
          preline.HSStaticMethods.autoInit();
        } else if ((window as any).HSStaticMethods) {
          (window as any).HSStaticMethods.autoInit();
        }
      } catch (err) {
        console.warn("Advertencia de inicialización de Preline UI:", err);
      }
    };
    
    initPreline();
  }, []);

  return (
    <div className="min-h-screen selection:bg-amber-100 selection:text-brand-900 dark:selection:bg-brand-800 dark:selection:text-amber-100">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <SafetyNet />
        <ImpactGallery />
        <LiveEvents />
        
        {/* Sección de Llamado a la Acción Urgente */}
        <section id="donate" className="py-24 bg-white dark:bg-neutral-900 overflow-hidden">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative z-10 bg-brand-900 dark:bg-brand-950 rounded-[2rem] p-8 md:p-16 text-center shadow-2xl overflow-hidden border border-brand-800 dark:border-neutral-800">
              <div className="max-w-3xl mx-auto relative z-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">Sanar es un Acto Colectivo.</h2>
                <p className="text-xl text-brand-100/80 mb-10 leading-relaxed">
                  Cada peso recaudado a través de nuestras funciones benéficas va directamente a ayudar a los artistas a mantener su dignidad y enfocarse en su recuperación. Únete al movimiento hoy mismo.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button type="button" className="py-4 px-10 inline-flex justify-center items-center gap-x-2 text-lg font-bold rounded-full border border-transparent bg-amber-500 text-brand-950 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-brand-900 transition-all shadow-xl shadow-amber-500/20">
                    Hacer una Donación Única
                  </button>
                  <button type="button" className="py-4 px-10 inline-flex justify-center items-center gap-x-2 text-lg font-bold rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-brand-900 transition-all backdrop-blur-sm">
                    Ser Patrocinador Mensual
                  </button>
                </div>
              </div>
              
              {/* Formas de Fondo */}
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-amber-400/20 blur-[80px] rounded-full pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-brand-400/10 blur-[100px] rounded-full pointer-events-none"></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
