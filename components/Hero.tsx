import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    // Alterado para min-h-screen para garantir que ocupe a altura exata da tela
    // Reduzido pt-24/32 para pt-20/28 para subir o conteúdo levemente
    <section id="home" className="relative pt-20 pb-0 md:pt-24 md:pb-0 overflow-hidden bg-stone-50 min-h-screen flex items-center justify-center">
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-100/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sage-100/40 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4 pointer-events-none"></div>

      {/* Container Full Width */}
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 relative w-full h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center h-full">
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 order-2 lg:order-1 space-y-6 md:space-y-8 py-8 lg:py-0"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-[5rem] font-serif font-medium text-stone-900 leading-[1.1] tracking-tight text-balance">
              Sua mente merece ser um lugar <span className="text-primary-600 italic font-normal">seguro</span>.
            </h1>
            
            <p className="text-base md:text-lg text-stone-500 leading-relaxed max-w-xl font-light">
              Sou <strong>Luiz Felipe Braziliano</strong>. Através da Terapia Cognitivo-Comportamental, ajudo você a entender seus padrões e reencontrar o equilíbrio emocional.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-stone-900 text-white text-sm font-bold tracking-wide uppercase rounded-2xl hover:bg-stone-800 transition-all shadow-xl shadow-stone-900/10 hover:shadow-2xl hover:-translate-y-1"
              >
                Agendar Sessão
                <ArrowRight className="ml-3 h-4 w-4" />
              </a>
              <a 
                href="#methodology"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-stone-300 text-stone-600 text-sm font-bold tracking-wide uppercase rounded-2xl hover:bg-stone-50 hover:border-stone-400 transition-all"
              >
                Como funciona?
              </a>
            </div>

            <div className="flex gap-6 text-stone-400 text-[10px] md:text-xs font-bold uppercase tracking-widest pt-1">
                <span className="flex items-center gap-2">✓ Atendimento Online</span>
                <span className="flex items-center gap-2">✓ Sigilo Absoluto</span>
            </div>
          </motion.div>

          {/* Image / Visual - Ajustada altura máxima para não estourar viewport */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 order-1 lg:order-2 relative group flex justify-center lg:justify-end items-center h-full"
          >
            <div className="relative w-full max-w-[500px] lg:max-w-[650px]">
               {/* Organic Shape Blob */}
               <div className="absolute inset-0 bg-gradient-to-tr from-stone-200 to-primary-100/50 rounded-[3rem] rotate-3 transform scale-95 -z-10 transition-transform duration-1000 group-hover:rotate-0 w-full h-full"></div>
               
               {/* Imagem com max-height para garantir que caiba na tela */}
               <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-stone-900/10 w-full aspect-[4/5] max-h-[75vh] object-cover">
                  <img 
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop" 
                    alt="Psicólogo Luiz Felipe Braziliano" 
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-80"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white backdrop-blur-md bg-white/5 p-5 rounded-2xl border border-white/10">
                      <p className="font-serif italic text-xl md:text-2xl mb-2 leading-tight">"O autoconhecimento é o primeiro passo para a liberdade."</p>
                      <p className="text-[10px] uppercase tracking-[0.2em] opacity-80 font-bold">Luiz Felipe • CRP 06/181948</p>
                  </div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;