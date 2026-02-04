
import React from 'react';

const SafetyNet: React.FC = () => {
  const steps = [
    {
      title: "Regístrate para Actuar",
      desc: "Artistas y ensamble sanos se registran para dedicar una función al fondo de Creativos por el Bienestar. Cada nota ayuda a la recuperación de un colega.",
      icon: (
        <svg className="flex-shrink-0 w-6 h-6 text-amber-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"/></svg>
      )
    },
    {
      title: "Asignación Directa",
      desc: "Las ganancias de las funciones benéficas designadas se canalizan directamente a nuestro repositorio de apoyos de emergencia con total transparencia.",
      icon: (
        <svg className="flex-shrink-0 w-6 h-6 text-amber-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
      )
    },
    {
      title: "Apoyos de Respuesta Rápida",
      desc: "Artistas en crisis médica reciben apoyos inmediatos para cubrir necesidades esenciales, desde cuentas hospitalarias hasta terapia física profesional.",
      icon: (
        <svg className="flex-shrink-0 w-6 h-6 text-amber-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/><path d="m9 12 2 2 4-4"/></svg>
      )
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-neutral-900">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
          <span className="inline-block py-1 px-3 mb-4 rounded-full text-xs font-semibold bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-500 uppercase tracking-widest">Cómo Funciona</span>
          <h2 className="text-3xl font-bold text-brand-900 sm:text-4xl md:text-5xl dark:text-white">
            Somos nuestra propia Red de Apoyo.
          </h2>
          <p className="mt-4 text-slate-600 dark:text-neutral-400 text-lg leading-relaxed">
            Un ecosistema conmovedor donde la fuerza del colectivo sostiene la vulnerabilidad del individuo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="flex justify-center items-center w-14 h-14 bg-amber-50 rounded-2xl dark:bg-amber-900/20 mb-6 transition-transform duration-300 hover:rotate-3">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-900 dark:text-white mb-3 leading-tight">{step.title}</h3>
              <p className="text-slate-600 dark:text-neutral-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetyNet;
