import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, BrainCircuit } from 'lucide-react';
import { navLinks } from '../data';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed w-full z-[100] transition-all duration-300 ease-in-out ${scrolled
          ? 'bg-white border-b border-stone-200 py-3 shadow-md'
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
              <p className="text-[10px] text-stone-600 font-bold uppercase tracking-[0.2em] mt-1">Psicoterapia</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex gap-6">
              {navLinks.slice(1, 5).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-bold uppercase tracking-widest text-stone-700 hover:text-stone-900 transition-colors relative after:content-[''] after:absolute after:w-0 after:h-px after:bg-stone-900 after:left-0 after:-bottom-1 after:transition-all duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="h-4 w-px bg-stone-300/50"></div>

            {/* Schedule Button */}
            <a
              href="https://wa.me/5511976168339?text=Olá%20Felipe%2C%20tudo%20bem%3F%0APara%20qual%20data%20possui%20disponibilidade%20de%20agendamento%3F"
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
      {isOpen && (
        <div
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
              <a
                href="https://wa.me/5511976168339?text=Olá%20Felipe%2C%20tudo%20bem%3F%0APara%20qual%20data%20possui%20disponibilidade%20de%20agendamento%3F"
                className="block w-full bg-stone-900 text-white text-center py-5 rounded-2xl font-bold mt-6 text-sm uppercase tracking-wide"
              >
                Agendar via WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;