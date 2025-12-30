import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import ContactForm from './components/ContactForm';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import ThankYou from './components/ThankYou';

const App: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Hide the main header if we are on the Thank You page to avoid double logos */}
      {!isSubmitted && <Header />}
      
      <main className="flex-grow flex flex-col">
        {isSubmitted ? (
          <ThankYou onBack={() => setIsSubmitted(false)} />
        ) : (
          <>
            <Hero />
            <Benefits />
            <ContactForm onSuccess={() => {
              setIsSubmitted(true);
              window.scrollTo(0, 0);
            }} />
            <Gallery />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;