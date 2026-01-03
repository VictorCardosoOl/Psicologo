import React from 'react';
import { BrainCircuit, Instagram, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-20 lg:py-24 border-t border-stone-800 relative overflow-hidden">
      
      {/* Background Decorativo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-stone-800/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header do Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-10">
           <div>
              <div className="flex items-center gap-3 text-white mb-6">
                 <div className="bg-stone-800 p-2 rounded-lg">
                    <BrainCircuit size={28} />
                 </div>
                 <span className="font-serif text-2xl font-bold">Luiz Felipe</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-200 font-medium leading-tight max-w-2xl">
                 Vamos iniciar sua <br/>
                 <span className="text-stone-500 italic">jornada</span> hoje?
              </h2>
           </div>
           
           <div className="flex flex-col gap-4">
              <a 
                href="https://wa.me/5511999998888" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-white text-xl font-serif border-b border-stone-700 pb-2 hover:border-white transition-all"
              >
                 Agendar via WhatsApp
                 <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a 
                href="mailto:contato@psicoluizfelipe.com.br" 
                className="group flex items-center gap-4 text-stone-400 text-xl font-serif border-b border-stone-700 pb-2 hover:text-white hover:border-white transition-all"
              >
                 contato@psicoluizfelipe.com.br
                 <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
           </div>
        </div>

        <div className="h-px w-full bg-stone-800 mb-12"></div>

        {/* Links e Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <p className="text-sm leading-relaxed max-w-md text-stone-500">
              A psicologia é um ato de coragem e liberdade. Meu compromisso é oferecer um espaço ético e acolhedor para que você possa se reencontrar.
            </p>
            <div className="mt-6 flex gap-4">
               <a href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-white hover:text-stone-900 transition-all"><Instagram size={18} /></a>
               <a href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-white hover:text-stone-900 transition-all"><Linkedin size={18} /></a>
               <a href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-white hover:text-stone-900 transition-all"><Mail size={18} /></a>
            </div>
          </div>

          <div>
             <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Navegação</h4>
             <ul className="space-y-3 text-sm">
               <li><a href="#home" className="hover:text-white transition-colors">Início</a></li>
               <li><a href="#methodology" className="hover:text-white transition-colors">Abordagem</a></li>
               <li><a href="#about" className="hover:text-white transition-colors">Sobre Mim</a></li>
               <li><a href="#blog" className="hover:text-white transition-colors">Artigos</a></li>
             </ul>
          </div>

          <div>
             <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Legal</h4>
             <ul className="space-y-3 text-sm">
               <li><span className="block text-stone-300">CRP 06/181948</span></li>
               <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
             </ul>
          </div>

        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-800 text-xs text-stone-600">
          <p>&copy; {new Date().getFullYear()} Luiz Felipe Braziliano.</p>
          <p className="mt-2 md:mt-0">Desenvolvido com excelência.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;