import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-darker py-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-center space-x-8">
        <a
          href="https://www.instagram.com/brickellrealtygroup/"
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
    </footer>
  );
};

export default Footer;