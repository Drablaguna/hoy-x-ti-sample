
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-950 dark:bg-neutral-950 text-white pt-20 pb-10">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-full lg:col-span-2">
            <a className="text-3xl font-serif font-bold text-white mb-6 block focus:outline-none" href="#" aria-label="Marca">
              Hoy Por Ti
            </a>
            <p className="text-brand-100/60 dark:text-neutral-400 leading-relaxed mb-8 max-w-sm">
              Proporcionamos apoyos de emergencia a artistas en crisis, asegurando que las emergencias médicas no terminen con carreras creativas de toda una vida.
            </p>
            <div className="flex gap-x-4">
              {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map(platform => (
                <button key={platform} className="w-10 h-10 inline-flex items-center justify-center rounded-lg bg-brand-900 hover:bg-brand-800 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors text-brand-100/40 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500">
                  <span className="sr-only">{platform}</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-amber-500 mb-6">Programa</h4>
            <div className="grid gap-y-4 text-brand-100/60 dark:text-neutral-500 text-sm">
              <p><a className="hover:text-white focus:outline-none focus:text-white transition-colors" href="#">Fondo de Apoyo</a></p>
              <p><a className="hover:text-white focus:outline-none focus:text-white transition-colors" href="#">Solicitar Ayuda</a></p>
              <p><a className="hover:text-white focus:outline-none focus:text-white transition-colors" href="#">Sé parte</a></p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-amber-500 mb-6">Soporte</h4>
            <div className="grid gap-y-4 text-brand-100/60 dark:text-neutral-500 text-sm">
              <p><a className="hover:text-white focus:outline-none focus:text-white transition-colors" href="#">Niveles de Donación</a></p>
              <p><a className="hover:text-white focus:outline-none focus:text-white transition-colors" href="#">Patrocinio</a></p>
              <p><a className="hover:text-white focus:outline-none focus:text-white transition-colors" href="#">Alianzas</a></p>
              <p><a className="hover:text-white focus:outline-none focus:text-white transition-colors" href="#">Voluntariado</a></p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-amber-500 mb-6">Contacto</h4>
            <div className="grid gap-y-4 text-brand-100/60 dark:text-neutral-500 text-sm">
              <p><a className="hover:text-white focus:outline-none focus:text-white transition-colors" href="#">Escríbenos</a></p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-brand-900 dark:border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-6 text-brand-100/30 dark:text-neutral-600 text-[13px] font-medium">
          <p>© 2026 Hoy Por Ti - Riviera Maya</p>
          <div className="flex gap-x-8">
            {/* <a href="#" className="hover:text-brand-100 focus:outline-none">Privacidad</a>
            <a href="#" className="hover:text-brand-100 focus:outline-none">Términos</a>
            <a href="#" className="hover:text-brand-100 focus:outline-none">Legal</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
