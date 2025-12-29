import React from 'react';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="relative bg-background-dark py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 grid gap-12 lg:grid-cols-2 lg:items-end">
          <div>
            <h2 className="text-4xl text-white sm:text-5xl lg:text-6xl font-normal">
              Excelencia en <span className="text-primary italic">Cada Detalle</span>
            </h2>
          </div>
          <div className="lg:border-l lg:border-white/10 lg:pl-12">
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              Diseñamos un ecosistema donde la ambición se encuentra con la oportunidad. Nuestras herramientas y soporte están calibrados para agentes que no aceptan menos que lo extraordinario.
            </p>
          </div>
        </div>
        
        <div className="grid gap-px bg-white/10 sm:grid-cols-3">
          <div className="group relative bg-surface-darker p-10 hover:bg-surface-dark transition-colors duration-500">
            <div className="mb-8 text-primary">
              <span className="material-symbols-outlined !text-5xl font-light">token</span>
            </div>
            <h3 className="mb-4 text-2xl text-white font-medium">Tecnología Superior</h3>
            <p className="text-sm leading-relaxed text-gray-400 font-light">
              Plataformas CRM propietarias y análisis de mercado en tiempo real para mantenerte siempre adelante de la competencia.
            </p>
          </div>
          
          <div className="group relative bg-surface-darker p-10 hover:bg-surface-dark transition-colors duration-500">
            <div className="mb-8 text-primary">
              <span className="material-symbols-outlined !text-5xl font-light">architecture</span>
            </div>
            <h3 className="mb-4 text-2xl text-white font-medium">Soporte Integral</h3>
            <p className="text-sm leading-relaxed text-gray-400 font-light">
              Un equipo dedicado de coordinadores de transacciones y soporte legal para asegurar cierres impecables.
            </p>
          </div>
          
          <div className="group relative bg-surface-darker p-10 hover:bg-surface-dark transition-colors duration-500">
            <div className="mb-8 text-primary">
              <span className="material-symbols-outlined !text-5xl font-light">school</span>
            </div>
            <h3 className="mb-4 text-2xl text-white font-medium">Mentoria Elite</h3>
            <p className="text-sm leading-relaxed text-gray-400 font-light">
              Programas de coaching ejecutivo con los líderes más influyentes del sector inmobiliario de Miami.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;