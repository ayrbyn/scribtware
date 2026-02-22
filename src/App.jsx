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

export default function App() {
  return (
    <div className="font-sans text-slate-800 antialiased selection:bg-teal-500 selection:text-white scroll-smooth">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Team />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
