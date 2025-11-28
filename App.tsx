import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroProfile from './components/HeroProfile';
import AnxietySection from './components/AnxietySection';
import Methodology from './components/Methodology';
import BlogSection from './components/BlogSection';
import ArticleView from './components/ArticleView';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import { BlogPost } from './types';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'article'>('home');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);
  const [fontSize, setFontSize] = useState<number>(100); // Percentage

  const handleArticleClick = (article: BlogPost) => {
    setActiveArticle(article);
    setCurrentView('article');
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setActiveArticle(null);
    // Timeout to allow state to settle before scrolling
    setTimeout(() => {
      document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleFontSizeChange = () => {
    setFontSize(prev => (prev >= 125 ? 100 : prev + 12.5));
  };

  return (
    <div 
      className="min-h-screen bg-sand-50 font-sans text-slate-900 transition-all duration-300"
      style={{ fontSize: `${fontSize}%` }}
    >
      <Header 
        onFontSizeChange={handleFontSizeChange} 
        currentView={currentView}
        onNavigateHome={handleBackToHome}
      />
      
      <main className="relative">
        <AnimatePresence mode="wait">
          {currentView === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <HeroProfile />
              <AnxietySection />
              <Methodology />
              <BlogSection onReadArticle={handleArticleClick} />
              
              {/* Testimonials Inline (Simplified for this version) */}
              <section id="testimonials" className="py-20 bg-sage-800 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                  >
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Histórias de Superação</h2>
                    <p className="text-sage-200 max-w-2xl mx-auto">
                      Depoimentos reais de quem permitiu compartilhar sua jornada de transformação.
                    </p>
                  </motion.div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {[
                        { text: "Encontrei no Dr. André um espaço seguro para falar sobre meus medos. A TCC mudou minha forma de ver o mundo.", name: "Mariana S." },
                        { text: "A terapia online funciona perfeitamente. Sinto-me acolhido mesmo à distância.", name: "Ricardo J." },
                        { text: "Profissional extremamente ético e humano. Recomendo de olhos fechados.", name: "Patrícia L." }
                      ].map((t, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all"
                        >
                          <div className="flex text-sage-300 mb-4">★★★★★</div>
                          <p className="text-lg italic mb-6 text-slate-100">"{t.text}"</p>
                          <p className="font-bold text-sage-200">- {t.name}</p>
                        </motion.div>
                      ))}
                  </div>
                </div>
              </section>

              <Contact />
            </motion.div>
          ) : (
            <motion.div
              key="article"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeArticle && (
                <ArticleView article={activeArticle} onBack={handleBackToHome} />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;