import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CommonDisorders from './components/CommonDisorders';
import Methodology from './components/Methodology';
import About from './components/About';
import Services from './components/Services';
import FAQ from './components/FAQ';

import Footer from './components/Footer';
import WhatsAppFloat from './components/ChatWidget';
import SmoothScrollLayout from './components/SmoothScrollLayout';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 transition-all duration-300 selection:bg-primary-100 selection:text-primary-900">
      <Navbar />

      <SmoothScrollLayout>
        <main className="relative">
          {/* 1. Apresentação (Hero) */}
          <Hero />

          {/* 2. Sinais de Alerta (Sintomas) */}
          <CommonDisorders />

          {/* 3. Metodologia TCC & Como funciona a psicoterapia */}
          <Methodology />

          {/* 4. Sobre Mim */}
          <About />

          {/* 5. Serviços */}
          <Services />

          {/* 6. Fluxo final (FAQ) */}
          <FAQ />
        </main>
        <Footer />
      </SmoothScrollLayout>

      <WhatsAppFloat />
    </div>
  );
};

export default App;