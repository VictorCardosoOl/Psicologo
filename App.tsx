import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CommonDisorders from './components/CommonDisorders';
import Methodology from './components/Methodology';
import About from './components/About';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/ChatWidget';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'article'>('home');

  const handleBackToHome = () => {
    setCurrentView('home');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 transition-all duration-300">
      <Navbar currentView={currentView} onNavigateHome={handleBackToHome} />
      
      <main className="relative">
        <AnimatePresence mode="wait">
          {currentView === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
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
              
              {/* 6. Fluxo final (FAQ e Contato) */}
              <FAQ />
              <Contact />
            </motion.div>
          ) : (
            <motion.div
              key="article"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
               {/* View de artigos removida do fluxo principal conforme solicitação de landing page */}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default App;