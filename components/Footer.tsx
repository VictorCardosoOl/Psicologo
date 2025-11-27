import React from 'react';
import { BrainCircuit, Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-sage-500 rounded-full flex items-center justify-center text-white">
                <BrainCircuit size={18} />
              </div>
              <span className="font-serif text-lg font-bold text-white">Dr. André Silva</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Psicologia clínica focada no desenvolvimento humano e bem-estar emocional.
              CRP: 06/12345
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-sage-400 transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-sage-400 transition-colors">Sobre Mim</a></li>
              <li><a href="#services" className="hover:text-sage-400 transition-colors">Serviços</a></li>
              <li><a href="#contact" className="hover:text-sage-400 transition-colors">Agendar</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li>Terapia Individual</li>
              <li>Terapia de Casal</li>
              <li>Ansiedade e Estresse</li>
              <li>Orientação Profissional</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sage-600 transition-colors text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sage-600 transition-colors text-white">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sage-600 transition-colors text-white">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Dr. André Silva. Todos os direitos reservados.</p>
          <div className="mt-2 md:mt-0 space-x-4">
            <a href="#" className="hover:text-slate-300">Privacidade</a>
            <a href="#" className="hover:text-slate-300">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
