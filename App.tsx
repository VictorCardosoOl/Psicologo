import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CommonDisorders from './components/CommonDisorders';
import Methodology from './components/Methodology';
import About from './components/About';
import Services from './components/Services';
import TherapyImpact from './components/TherapyImpact';
import BlogSection from './components/BlogSection';
import ArticleView from './components/ArticleView';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import { BlogPost } from './types';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'article'>('home');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const handleArticleClick = (article: BlogPost) => {
    setActiveArticle(article);
    setCurrentView('article');
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setActiveArticle(null);
    setTimeout(() => {
      document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
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
              transition={{ duration: 0.3 }}
            >
              <Hero />
              <CommonDisorders />
              <Methodology />
              <About />
              <Services />
              <TherapyImpact />
              <BlogSection onReadArticle={handleArticleClick} />
              <FAQ />
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