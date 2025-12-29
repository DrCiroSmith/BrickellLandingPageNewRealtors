import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const logoUrl = "https://idxboost-single-property.s3.amazonaws.com/ad6f19fee807c6048e328d33bf4cd2e5/58726008becf56de4a8cfb855869cbac.png";

  const scrollToApply = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.getElementById('apply');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background-dark/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              alt="Brickell Realty Group Logo" 
              className="h-12 w-auto filter-none md:h-14 object-contain" 
              src={logoUrl} 
            />
          </div>
          
          <div>
            <a 
              href="#apply"
              onClick={scrollToApply}
              className="hidden sm:flex items-center justify-center rounded-none border border-primary bg-transparent px-8 py-3 text-xs font-bold uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-black"
            >
              Solicitar Cita
            </a>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              <span className="material-symbols-outlined">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-surface-dark border-b border-white/10 p-4 animate-in slide-in-from-top-2 shadow-2xl">
          <nav className="flex flex-col gap-4">
             <a 
              href="#apply" 
              className="mt-4 flex items-center justify-center border border-primary bg-transparent px-8 py-3 text-xs font-bold uppercase tracking-widest text-primary hover:bg-primary hover:text-black"
              onClick={scrollToApply}
            >
              Solicitar Cita
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;