import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-stone-50">
      
      {/* Background Elements - Mais sutis */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-100/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sage-100/40 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} // Curva "Luxury"
            className="lg:col-span-7 order-2 lg:order-1 space-y-10"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-stone-200 shadow-sm hover:shadow-md transition-shadow cursor-default"
            >
              <div className="flex -space-x-3">
                 {[1,2,3].map(i => (
                    <div key={i} className="w-7 h-7 rounded-full bg-stone-200 border-2 border-white flex items-center justify-center overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-full h-full object-cover" />
                    </div>
                 ))}
              </div>
              <div className="w-px h-4 bg-stone-300 mx-1"></div>
              <span className="text-stone-500 text-xs font-bold tracking-widest uppercase flex items-center gap-1.5">
                 <Star size={12} className="text-amber-400 fill-amber-400" />
                 Psicologia Baseada em Evidências
              </span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-serif font-medium text-stone-900 leading-[1.05] tracking-tight text-balance">
              Sua mente merece ser um lugar <span className="text-primary-600 italic font-normal">seguro</span>.
            </h1>
            
            <p className="text-lg md:text-xl text-stone-500 leading-relaxed max-w-lg font-light">
              Sou <strong>Luiz Felipe Braziliano</strong>. Através da Terapia Cognitivo-Comportamental, ajudo você a entender seus padrões e reencontrar o equilíbrio emocional.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
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

            <div className="flex gap-8 text-stone-400 text-xs font-bold uppercase tracking-widest pt-4">
                <span className="flex items-center gap-2">✓ Atendimento Online</span>
                <span className="flex items-center gap-2">✓ Sigilo Absoluto</span>
            </div>
          </motion.div>

          {/* Image / Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 order-1 lg:order-2 relative group"
          >
            {/* Organic Shape Blob */}
            <div className="absolute inset-0 bg-gradient-to-tr from-stone-200 to-primary-100/50 rounded-[3rem] rotate-3 transform scale-105 -z-10 transition-transform duration-1000 group-hover:rotate-0"></div>
            
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-stone-900/10 aspect-[4/5]">
               <img 
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop" 
                alt="Psicólogo Luiz Felipe Braziliano" 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-80"></div>
              
              <div className="absolute bottom-8 left-8 right-8 text-white backdrop-blur-md bg-white/5 p-6 rounded-2xl border border-white/10">
                  <p className="font-serif italic text-2xl mb-3 leading-tight">"O autoconhecimento é o primeiro passo para a liberdade."</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] opacity-80 font-bold">Luiz Felipe • CRP 06/181948</p>
              </div>
            </div>

            {/* Floating Element - Subtle */}
            <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white p-5 rounded-2xl shadow-lg shadow-stone-200/50 border border-stone-100 max-w-[180px] hidden md:block"
            >
                <div className="flex gap-1 mb-2">
                    {[1,2,3,4,5].map(s => <Star key={s} size={12} className="text-amber-400 fill-amber-400" />)}
                </div>
                <p className="text-xs text-stone-600 leading-relaxed font-medium">
                    "Mudou minha forma de ver a vida e lidar com a ansiedade."
                </p>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;