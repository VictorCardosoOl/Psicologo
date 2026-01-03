import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, MessageCircle, ChevronDown, Download, BrainCircuit } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { navLinks, ebooksList } from '../data';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [ebooksOpen, setEbooksOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Ativa o estado scrolled mais cedo para transição suave
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants: Variants = {
    closed: { opacity: 0, x: "100%", transition: { type: "tween", duration: 0.4, ease: "easeInOut" } },
    open: { opacity: 1, x: 0, transition: { type: "tween", duration: 0.3, ease: "easeOut" } }
  };

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
          scrolled 
            ? 'bg-white/85 backdrop-blur-md border-b border-stone-200/50 py-3 shadow-sm' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${scrolled ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-900'}`}>
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
                        className="text-xs font-bold uppercase tracking-widest text-stone-600 hover:text-stone-900 transition-colors relative after:content-[''] after:absolute after:w-0 after:h-px after:bg-stone-900 after:left-0 after:-bottom-1 after:transition-all duration-300 hover:after:w-full"
                    >
                        {link.label}
                    </a>
                ))}
            </nav>

            <div className="h-4 w-px bg-stone-300/50"></div>

            {/* Ebooks Dropdown */}
            <div 
                className="relative group"
                onMouseEnter={() => setEbooksOpen(true)}
                onMouseLeave={() => setEbooksOpen(false)}
            >
              <button className="flex items-center gap-2 text-stone-600 text-xs font-bold uppercase tracking-widest hover:text-stone-900 transition-colors py-2">
                <BookOpen size={14} />
                Materiais
                <ChevronDown size={12} className={`transition-transform duration-200 ${ebooksOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {ebooksOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 w-64 bg-white rounded-2xl shadow-xl border border-stone-100 py-3 mt-2 overflow-hidden"
                  >
                    <div className="px-4 py-2 text-[10px] font-bold text-stone-400 uppercase tracking-widest border-b border-stone-50 mb-2">Downloads Gratuitos</div>
                    {ebooksList.map((ebook, idx) => (
                      <a key={idx} href="#" className="flex items-center justify-between px-4 py-3 hover:bg-stone-50 text-sm text-stone-700 transition-colors group/item">
                        {ebook}
                        <Download size={14} className="text-stone-300 group-hover/item:text-primary-600" />
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
              className="flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-stone-900/10 transition-all hover:-translate-y-0.5 active:translate-y-0"
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
            className="fixed inset-0 bg-white z-[60] flex flex-col h-[100dvh] w-full overflow-y-auto"
          >
            <div className="flex justify-between items-center p-6 border-b border-stone-100 sticky top-0 bg-white z-10">
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
                  className="text-3xl font-serif font-medium text-stone-800 hover:text-primary-700 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              
              <div className="mt-auto space-y-4 pt-8 border-t border-stone-100">
                  <div className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-2">Materiais</div>
                  {ebooksList.map((e, i) => (
                      <a key={i} href="#" className="flex items-center gap-3 text-stone-600 hover:text-primary-600 p-4 bg-stone-50 rounded-xl">
                          <div className="bg-white p-2 rounded-full shadow-sm"><Download size={16} /></div> 
                          <span className="font-medium">{e}</span>
                      </a>
                  ))}
                  
                  <a 
                    href="https://wa.me/5511999998888"
                    className="block w-full bg-stone-900 text-white text-center py-5 rounded-2xl font-bold mt-6 text-sm uppercase tracking-wide"
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