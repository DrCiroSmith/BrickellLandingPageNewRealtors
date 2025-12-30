import React from 'react';

const Gallery: React.FC = () => {
  // Get the base path for assets (handles GitHub Pages deployment)
  const basePath = import.meta.env.BASE_URL || '/';
  
  // Using custom property images from public/images/
  // Images showcase actual Brickell properties and Miami luxury lifestyle
  const images = [
    `${basePath}images/gallery-1.png`,  // Bulgari store/luxury shopping
    `${basePath}images/gallery-2.png`,  // Beachfront property
    `${basePath}images/gallery-3.png`,  // Pool and amenity areas
    `${basePath}images/gallery-4.png`   // Miami sunset skyline
  ];

  return (
    <div className="w-full bg-background-dark pb-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {images.map((img, index) => (
          <div key={index} className="aspect-[4/5] relative group overflow-hidden">
            <div 
              className="h-full w-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" 
              style={{ backgroundImage: `url("${img}")` }}
            >
            </div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;