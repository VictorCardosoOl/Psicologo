import React from 'react';
import { BrainCircuit, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
          
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4 text-white">
               <BrainCircuit size={24} />
               <span className="font-serif font-bold text-xl">Luiz Felipe Braziliano</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Psicólogo Clínico focado em TCC. Ajudando você a construir uma vida com mais sentido e autonomia emocional.
            </p>
            <div className="text-xs border border-slate-800 inline-block px-2 py-1 rounded">CRP 06/181948</div>
          </div>

          <div>
             <h4 className="text-white font-bold mb-4">Acesso Rápido</h4>
             <ul className="space-y-2 text-sm">
               <li><a href="#home" className="hover:text-primary-400 transition-colors">Início</a></li>
               <li><a href="#methodology" className="hover:text-primary-400 transition-colors">Abordagem TCC</a></li>
               <li><a href="#about" className="hover:text-primary-400 transition-colors">Sobre Mim</a></li>
               <li><a href="#services" className="hover:text-primary-400 transition-colors">Serviços</a></li>
             </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Redes Sociais</h4>
            <div className="flex justify-center md:justify-start gap-4">
               <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-primary-600 hover:text-white transition-colors"><Instagram size={20} /></a>
               <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-primary-600 hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

        </div>
        
        <div className="border-t border-slate-900 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Luiz Felipe Braziliano De Oliveira. Todos os direitos reservados.</p>
          <p className="mt-2 text-slate-600">Este site não substitui atendimento profissional. Em caso de emergência, ligue 188 (CVV).</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;