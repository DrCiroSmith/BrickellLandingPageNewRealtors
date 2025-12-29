import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-darker py-12 border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-gray-600">apartment</span>
          <p className="text-xs uppercase tracking-widest text-gray-500">© {new Date().getFullYear()} Brickell Realty Group.</p>
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          <a href="#" className="text-xs font-semibold uppercase tracking-widest text-gray-500 hover:text-primary transition-colors">
            Privacidad
          </a>
          <a href="#" className="text-xs font-semibold uppercase tracking-widest text-gray-500 hover:text-primary transition-colors">
            Términos
          </a>
          <a 
            href="https://www.instagram.com/brickell.realty.group/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs font-semibold uppercase tracking-widest text-gray-500 hover:text-primary transition-colors"
          >
            Instagram
          </a>
          <a 
            href="https://www.facebook.com/p/Brickell-Realty-Group-100063637617298/?locale=es_LA" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs font-semibold uppercase tracking-widest text-gray-500 hover:text-primary transition-colors"
          >
            Facebook
          </a>
          <a 
            href="https://www.linkedin.com/company/brickell-realty-group/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs font-semibold uppercase tracking-widest text-gray-500 hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;