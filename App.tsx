import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import ContactForm from './components/ContactForm';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import ThankYou from './components/ThankYou';

const Home: React.FC = () => (
  <div className="relative min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow flex flex-col">
      <Hero />
      <Benefits />
      <ContactForm />
      <Gallery />
    </main>
    <Footer />
  </div>
);

const ThankYouPage: React.FC = () => (
  <ThankYou />
);

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
};

export default App;