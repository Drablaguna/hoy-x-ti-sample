
import React, { useState, useEffect } from 'react';
import { HERO_IMAGES } from '../constants';

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] lg:h-[800px] w-full overflow-hidden flex items-center bg-brand-950">
      {/* Carrusel de Fondo con Efecto Fade */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover scale-105"
            />
          </div>
        ))}
        {/* Overlay para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-900/60 to-transparent dark:from-neutral-900 dark:via-neutral-900/60"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Contenido del Hero */}
      <div className="relative z-10 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl text-left">
          <span className="inline-block py-1 px-3 mb-6 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 uppercase tracking-[0.2em] animate-pulse">
            El Arte No Se Detiene
          </span>
          <h1 className="block text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl leading-tight drop-shadow-lg">
            La Función Debe <br/>
            <span className="text-amber-500">Continuar.</span>
          </h1>
          <p className="mt-6 text-xl text-slate-100 leading-relaxed max-w-lg drop-shadow-md">
            Creativos por el Bienestar conecta a artistas que organizan funciones a beneficio para recaudar fondos para colegas que enfrentan crisis médicas, lesiones o hospitalización.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:flex gap-4">
            <a 
              className="py-4 px-10 inline-flex justify-center items-center gap-x-2 text-md font-bold rounded-full border border-transparent bg-brand-600 text-white hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 transition-all shadow-2xl shadow-brand-900/50" 
              href="#donate"
            >
              Donar al Fondo
            </a>
            <a 
              className="py-4 px-10 inline-flex justify-center items-center gap-x-2 text-md font-bold rounded-full border-2 border-white/80 text-white hover:bg-white hover:text-brand-950 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-all backdrop-blur-sm" 
              href="#events"
            >
              Actuar por un Colega
            </a>
          </div>
        </div>
      </div>

      {/* Indicadores del Carrusel (Sutiles) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-12 h-1 rounded-full transition-all duration-300 ${
              index === currentImage ? 'bg-amber-500 w-16' : 'bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
