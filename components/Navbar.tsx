import React, { useState } from 'react';
import { Menu, X, BookOpen, MessageCircle, ChevronDown, Download, BrainCircuit } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface NavbarProps {
  currentView: 'home' | 'article';
  onNavigateHome: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigateHome }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [ebooksOpen, setEbooksOpen] = useState(false);

  const links = [
    { label: 'Início', href: '#home' },
    { label: 'Transtornos', href: '#disorders' },
    { label: 'Abordagem (TCC)', href: '#methodology' },
    { label: 'Sobre Mim', href: '#about' },
    { label: 'Serviços', href: '#services' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contato', href: '#contact' },
  ];

  const ebooks = [
    "Guia: Vencendo a Ansiedade",
    "Ebook: Higiene do Sono",
    "Manual: Primeiros Passos na TCC"
  ];

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <>
      <header className="fixed w-full bg-white/95 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer z-50"
            onClick={() => {
              if (currentView === 'article') onNavigateHome();
              else window.scrollTo(0, 0);
            }}
          >
            <div className="w-10 h-10 bg-primary-700 text-white rounded-lg flex items-center justify-center shadow-lg">
                <BrainCircuit size={24} />
            </div>
            <div>
               <h1 className="font-serif text-lg font-bold text-slate-900 leading-none">Luiz Felipe</h1>
               <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Psicólogo • CRP 06/181948</p>
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-6">
            
            {/* Ebooks Dropdown */}
            <div 
                className="relative group"
                onMouseEnter={() => setEbooksOpen(true)}
                onMouseLeave={() => setEbooksOpen(false)}
            >
              <button className="flex items-center gap-2 text-slate-600 font-medium hover:text-primary-700 transition-colors py-2">
                <BookOpen size={18} />
                Baixar Ebooks
                <ChevronDown size={14} className={`transition-transform duration-200 ${ebooksOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {ebooksOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 mt-1"
                  >
                    {ebooks.map((ebook, idx) => (
                      <a key={idx} href="#" className="flex items-center justify-between px-4 py-3 hover:bg-slate-50 text-sm text-slate-700 transition-colors">
                        {ebook}
                        <Download size={14} className="text-primary-500" />
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
              className="flex items-center gap-2 bg-primary-700 hover:bg-primary-800 text-white px-5 py-2.5 rounded-full font-bold shadow-md transition-all hover:-translate-y-0.5"
            >
              <MessageCircle size={18} />
              Agendar Consulta
            </a>

            {/* Hamburger Trigger */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            >
                <Menu size={28} />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden z-50">
             <button 
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-white z-40 flex flex-col justify-center items-center h-screen w-full"
          >
            <nav className="flex flex-col gap-6 text-center">
              {links.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  variants={itemVariants}
                  onClick={() => {
                      if (currentView === 'article' && link.href === '#home') onNavigateHome();
                      setIsOpen(false);
                  }}
                  className="text-3xl font-serif font-bold text-slate-800 hover:text-primary-700 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              
              <motion.div variants={itemVariants} className="pt-8 flex flex-col items-center gap-4">
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Materiais Gratuitos</div>
                  {ebooks.map((e, i) => (
                      <a key={i} href="#" className="text-slate-600 hover:text-primary-600 flex items-center gap-2">
                          <Download size={16} /> {e}
                      </a>
                  ))}
              </motion.div>

              <motion.div variants={itemVariants} className="pt-8">
                <a 
                    href="https://wa.me/5511999998888"
                    className="bg-green-600 text-white px-8 py-4 rounded-full text-xl font-bold flex items-center gap-3 shadow-xl"
                >
                    <MessageCircle size={24} /> Agendar via WhatsApp
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;