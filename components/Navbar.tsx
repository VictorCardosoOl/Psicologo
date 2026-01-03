import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, MessageCircle, ChevronDown, Download, BrainCircuit } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { navLinks, ebooksList } from '../data';

interface NavbarProps {
  currentView: 'home' | 'article';
  onNavigateHome: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigateHome }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [ebooksOpen, setEbooksOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants: Variants = {
    closed: { opacity: 0, x: "100%", transition: { type: "tween", duration: 0.4 } },
    open: { opacity: 1, x: 0, transition: { type: "tween", duration: 0.3 } }
  };

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-500 border-b ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-md border-stone-200 py-3 shadow-sm' 
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => {
              if (currentView === 'article') onNavigateHome();
              else window.scrollTo(0, 0);
            }}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${scrolled ? 'bg-primary-600 text-white' : 'bg-white text-primary-600 shadow-md'}`}>
                <BrainCircuit size={24} strokeWidth={1.5} />
            </div>
            <div>
               <h1 className="font-serif text-xl font-bold text-stone-900 leading-none tracking-tight group-hover:text-primary-700 transition-colors">Luiz Felipe</h1>
               <p className="text-[10px] text-stone-500 font-bold uppercase tracking-[0.2em] mt-1">Psicologia Clínica</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex gap-6">
                {navLinks.slice(1, 5).map((link) => (
                    <a 
                        key={link.label} 
                        href={link.href} 
                        className="text-sm font-medium text-stone-600 hover:text-primary-700 transition-colors relative after:content-[''] after:absolute after:w-0 after:h-px after:bg-primary-600 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
                    >
                        {link.label}
                    </a>
                ))}
            </nav>

            <div className="h-4 w-px bg-stone-300"></div>

            {/* Ebooks Dropdown */}
            <div 
                className="relative group"
                onMouseEnter={() => setEbooksOpen(true)}
                onMouseLeave={() => setEbooksOpen(false)}
            >
              <button className="flex items-center gap-2 text-stone-600 text-sm font-medium hover:text-primary-700 transition-colors py-2">
                <BookOpen size={16} />
                Materiais
                <ChevronDown size={12} className={`transition-transform duration-200 ${ebooksOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {ebooksOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full right-0 w-64 bg-white rounded-2xl shadow-soft border border-stone-100 py-3 mt-2 overflow-hidden"
                  >
                    <div className="px-4 py-2 text-xs font-bold text-stone-400 uppercase tracking-wider">Downloads Gratuitos</div>
                    {ebooksList.map((ebook, idx) => (
                      <a key={idx} href="#" className="flex items-center justify-between px-4 py-3 hover:bg-stone-50 text-sm text-stone-700 transition-colors group/item">
                        {ebook}
                        <Download size={14} className="text-stone-400 group-hover/item:text-primary-500" />
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Schedule Button */}
            <a 
              href="https://wa.me/5511999998888" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-stone-900/10 transition-all hover:-translate-y-0.5"
            >
              <MessageCircle size={16} />
              Agendar
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
             <button 
                onClick={() => setIsOpen(true)}
                className="p-2 text-stone-700 hover:bg-stone-100 rounded-full transition-colors"
            >
                <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-white z-[60] flex flex-col h-screen w-full overflow-y-auto"
          >
            <div className="flex justify-between items-center p-6 border-b border-stone-100">
                <span className="font-serif font-bold text-xl text-stone-900">Menu</span>
                <button onClick={() => setIsOpen(false)} className="p-2 text-stone-500 hover:bg-stone-100 rounded-full">
                    <X size={24} />
                </button>
            </div>
            
            <nav className="flex-1 px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-serif font-medium text-stone-800 hover:text-primary-700 transition-colors border-b border-stone-50 pb-4"
                >
                  {link.label}
                </a>
              ))}
              
              <div className="mt-auto space-y-4">
                  <div className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-2">Materiais</div>
                  {ebooksList.map((e, i) => (
                      <a key={i} href="#" className="flex items-center gap-3 text-stone-600 hover:text-primary-600 p-3 bg-stone-50 rounded-xl">
                          <div className="bg-white p-2 rounded-full shadow-sm"><Download size={16} /></div> 
                          <span className="font-medium">{e}</span>
                      </a>
                  ))}
                  
                  <a 
                    href="https://wa.me/5511999998888"
                    className="block w-full bg-primary-600 text-white text-center py-4 rounded-xl font-bold mt-6 shadow-lg shadow-primary-200"
                  >
                    Agendar via WhatsApp
                  </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;