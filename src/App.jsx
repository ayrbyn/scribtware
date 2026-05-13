import React from 'react';

// Import Layout
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Import Sections
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Process from './components/sections/Process';
import Team from './components/sections/Team';
import CTA from './components/sections/CTA';
import PortfolioSection from './components/sections/PortfolioSection';

export default function App() {
  return (
    <div className="font-[var(--font-body)] text-midnight-ink antialiased selection:bg-action-green selection:text-midnight-ink scroll-smooth">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <PortfolioSection />
        <Process />
        <Team />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
