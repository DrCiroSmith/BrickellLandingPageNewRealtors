import React from 'react';

const Gallery: React.FC = () => {
  // Using the specific Google-hosted images provided
  const images = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCMmGZidapIMxhxfSPXHbgJZgZ9ty56sHYWLpb4NnngKefmdMOxqllE2lAObE04BTZTIXKp2VAH3O-K49lEr6u0QTXAlOF6z75V4bKAhCXb3_BafM6lXssHPw1lnY-sP9amN_ZEGpmDzh4LNWy4u56UvoVUf5USyvc36SqHWC1JwNRoY_ndFikP5wXcza0LykYx58tPt0JQ986Pj-oJGDLX4Zs1Ajudq4XS4PjROEdiIYyBEQd4eYUjwgiWiPWWoZUtbIq_Q9QefSJo", 
    "https://lh3.googleusercontent.com/aida-public/AB6AXuABkEd1jFf7gKR0SSsyLr_wJHOXTo5j927gwj4QwQ4wnJ3BrVXBjR1cAUy9Jkyk8TwzD9SbC_Owb0cYATowe3zx7DHVB7huheFUL9BIzvSQUbWeGDGWUG7B9GjtyGzUxt8GZudTYOqKJMMnpQe1tuvJVkNLrdNUfHEdWMeAaAcd1h8waFDUtxoj4agES5yf2JYhWJyPS4i8dcyWaiw0aS9mnGOhEAtMkXLlB4nzJUdszzqjCSyIbnbrVHmF1lcX0CV6T2TE6WIe-VKu", 
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB6ZQbd4YYlUpW8vEu2xOzUZYtf0MK6UHE65VIgtzidd4Fr94NikxwJALK537v-0Wt3aWjUKy9vSIQ6KPSJGaiN6OG-nu8eg60RRhzMa7xzPjw-mtKcihea59PlDew0nGv_KOEkiESxvYD1ahuc7txH-psBJJujKqoP9fKKSmCk5oAi3Ko3AZagGzscioQyW7Z_gxphVJrXaxiQVEYRsQchmmei2cb1mfNSbaMtvyt2B1dQ8OcdW14Ye15uCr45N5LpUbmqVTpfoixQ", 
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAYc7IIHAIgBq1gfr29PlmgofRTguaW4P017ZeRfSlolQtDwk1Z3mcRC61MXWnc1PwtKyvirOqSA1qBxy9k96peB-Hl1akNYKE3uE2MQ9kjTbkNGU2RGX-0uhs0jHChQd3ct3KXkeAlLieXigJY_Zf-HxXGGvkBeZBaat72EZgIX8ll46JCEsyV9kTmbQc3QjRRY49oZV96HMctPXJUP4gdZubUyMLXLrKnVSDE_FdWLO9SI2yBLQ4eqi8nGJza8UIHQVXcuaCPgDe9"  
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