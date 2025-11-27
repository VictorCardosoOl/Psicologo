import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-sand-100 font-sans text-slate-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        
        {/* Testimonials Section (Inline for simplicity) */}
        <section id="testimonials" className="py-20 bg-sage-700 text-white relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
             <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">O que dizem meus pacientes</h2>
               <div className="w-20 h-1 bg-sage-300 mx-auto rounded-full"></div>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { text: "O Dr. André me ajudou a passar pelo momento mais difícil da minha vida. Profissional ímpar.", name: "Mariana S." },
                  { text: "A terapia online funciona perfeitamente. Sinto-me acolhido mesmo à distância.", name: "Ricardo J." },
                  { text: "Ambiente seguro e sem julgamentos. Recomendo de olhos fechados.", name: "Patrícia L." }
                ].map((t, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-all">
                    <p className="text-lg italic mb-6">"{t.text}"</p>
                    <p className="font-bold text-sage-200">- {t.name}</p>
                  </div>
                ))}
             </div>
           </div>
        </section>

        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;
