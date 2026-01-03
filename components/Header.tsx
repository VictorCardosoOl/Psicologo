import React, { useState } from 'react';
import { Menu, X, BrainCircuit, Type, ArrowLeft } from 'lucide-react';
import { NavigationLink } from '../types';
import { navLinks } from '../data';

interface HeaderProps {
  onFontSizeChange: () => void;
  currentView: 'home' | 'article';
  onNavigateHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ onFontSizeChange, currentView, onNavigateHome }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Filter out unwanted links if necessary or use all from data
  // For Header we might want to use the same as Navbar or a subset
  const links: NavigationLink[] = navLinks.filter(l => l.label !== 'Transtornos' && l.label !== 'Serviços' && l.label !== 'Início'); 
  // Customizing just to show how it can be used, or simply use navLinks:
  // const links = navLinks;

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm border-b border-sage-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer group" 
            onClick={() => {
              if (currentView === 'article') onNavigateHome();
              else window.scrollTo(0, 0);
            }}
          >
            <div className="w-10 h-10 bg-sage-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:bg-sage-700 transition-colors">
              <BrainCircuit size={24} />
            </div>
            <div>
              <h1 className="font-serif text-xl font-bold text-slate-800 tracking-tight">Dr. André Silva</h1>
              <p className="text-[10px] text-sage-700 tracking-[0.2em] uppercase font-bold">Psicologia Clínica • CRP 06/12345</p>
            </div>
          </div>

          {/* Desktop Nav */}
          {currentView === 'home' ? (
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.slice(1, 6).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-600 hover:text-sage-700 font-medium transition-colors duration-200 text-sm tracking-wide relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-sage-500 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
                >
                  {link.label}
                </a>
              ))}
              <div className="h-6 w-px bg-slate-200 mx-2"></div>
              <button 
                onClick={onFontSizeChange}
                className="p-2 text-slate-500 hover:text-sage-700 transition-colors"
                title="Aumentar Fonte (Acessibilidade)"
              >
                <Type size={20} />
              </button>
            </nav>
          ) : (
             <nav className="hidden md:flex items-center space-x-8">
                <button 
                  onClick={onNavigateHome}
                  className="flex items-center gap-2 text-sage-700 font-medium hover:underline"
                >
                  <ArrowLeft size={16} /> Voltar para o Início
                </button>
                <button 
                  onClick={onFontSizeChange}
                  className="p-2 text-slate-500 hover:text-sage-700 transition-colors"
                  title="Aumentar Fonte (Acessibilidade)"
                >
                  <Type size={20} />
                </button>
             </nav>
          )}

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button 
                onClick={onFontSizeChange}
                className="p-2 text-slate-500 hover:text-sage-700 transition-colors"
              >
                <Type size={24} />
              </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-sage-700 focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-sage-100 absolute w-full shadow-lg h-screen">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {currentView === 'article' && (
               <button
                  onClick={() => {
                    onNavigateHome();
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-4 border-b border-sage-50 text-base font-bold text-sage-700"
                >
                  ← Voltar para Início
                </button>
            )}
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  if (currentView === 'article') onNavigateHome();
                  setIsOpen(false);
                }}
                className="block px-3 py-4 rounded-md text-lg font-medium text-slate-700 hover:text-sage-700 hover:bg-sage-50 border-b border-slate-50"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-8 block text-center py-4 bg-sage-600 text-white rounded-lg font-bold shadow-md"
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;