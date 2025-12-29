import React from 'react';

const Hero: React.FC = () => {
  // Get the base path for assets (handles GitHub Pages deployment)
  const basePath = import.meta.env.BASE_URL || '/';
  
  const scrollToApply = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.getElementById('apply');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative flex min-h-[800px] flex-col justify-center overflow-hidden py-20">
      <div className="absolute inset-0 z-0">
        <div 
          className="h-full w-full bg-cover bg-center bg-no-repeat transform scale-105" 
          style={{ backgroundImage: `url("${basePath}images/hero-bg.png")` }}
        >
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <span className="mb-6 inline-block border-l-2 border-primary pl-4 text-sm font-semibold uppercase tracking-[0.2em] text-gray-200">
            Exclusivo para Agentes de Élite
          </span>
          <h1 className="text-5xl font-medium leading-tight text-white sm:text-7xl lg:text-8xl">
            Eleva Tu <br />
            <span className="text-gold-gradient italic pr-2">Carrera</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-gray-300 sm:text-xl border-l border-white/20 pl-6 ml-1">
            Únete a Brickell Realty Group. Accede a las propiedades más exclusivas de Miami y herramientas diseñadas para el éxito.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-6">
            <a 
              href="#apply" 
              onClick={scrollToApply}
              className="group flex h-14 min-w-[200px] items-center justify-center bg-primary px-8 text-sm font-bold uppercase tracking-widest text-black transition-all hover:bg-white"
            >
              Solicitar Cita
              <span className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-1 text-lg">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;