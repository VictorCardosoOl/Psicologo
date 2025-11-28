import React from 'react';
import { BrainCircuit, Instagram, Linkedin, Facebook, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-sage-600 rounded-lg flex items-center justify-center text-white">
                <BrainCircuit size={18} />
              </div>
              <span className="font-serif text-lg font-bold text-white">Dr. André Silva</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Psicologia clínica baseada em evidências, focada no desenvolvimento humano e na redução do sofrimento emocional.
            </p>
            <div className="inline-block px-3 py-1 border border-slate-700 rounded text-xs text-slate-500">
              CRP: 06/12345
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Navegação</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-sage-400 transition-colors block">Início</a></li>
              <li><a href="#anxiety" className="hover:text-sage-400 transition-colors block">Tipos de Ansiedade</a></li>
              <li><a href="#methodology" className="hover:text-sage-400 transition-colors block">Como Funciona (TCC)</a></li>
              <li><a href="#blog" className="hover:text-sage-400 transition-colors block">Artigos</a></li>
              <li><a href="#contact" className="hover:text-sage-400 transition-colors block">Agendar</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Endereço</h4>
             <div className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-sage-500" />
                <p>Av. Paulista, 1000<br/>Cerqueira César, São Paulo<br/>SP, 01310-100</p>
             </div>
             <p className="mt-4 text-xs text-sage-500">* Estacionamento no local</p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Conecte-se</h4>
            <div className="flex space-x-4 mb-6">
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
            <p className="text-xs text-slate-500">
              Em caso de crise ou emergência, ligue para o CVV (188) ou procure um hospital.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} Dr. André Silva. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Código de Ética</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;