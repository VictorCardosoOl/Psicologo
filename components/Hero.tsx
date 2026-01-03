import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-stone-50">
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sage-100/50 rounded-full blur-[80px] translate-y-1/4 -translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 space-y-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-200 shadow-sm">
              <div className="flex -space-x-2">
                 {[1,2,3].map(i => (
                    <div key={i} className="w-6 h-6 rounded-full bg-stone-200 border-2 border-white flex items-center justify-center text-[8px] overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-full h-full object-cover" />
                    </div>
                 ))}
              </div>
              <div className="w-px h-4 bg-stone-200 mx-1"></div>
              <span className="text-stone-600 text-xs font-semibold tracking-wide flex items-center gap-1">
                 <Star size={12} className="text-amber-400 fill-amber-400" />
                 Psicologia Baseada em Evidências
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-stone-900 leading-[1.1] tracking-tight text-balance">
              Sua mente merece ser um lugar <span className="text-primary-600 italic">seguro</span>.
            </h1>
            
            <p className="text-lg md:text-xl text-stone-500 leading-relaxed max-w-lg font-light">
              Sou <strong>Luiz Felipe Braziliano</strong>. Através da Terapia Cognitivo-Comportamental, ajudo você a entender seus padrões e reencontrar o equilíbrio emocional.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-stone-900 text-white text-base font-bold rounded-2xl hover:bg-stone-800 transition-all shadow-xl shadow-stone-900/10 hover:shadow-2xl hover:-translate-y-1"
              >
                Agendar Sessão
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#methodology"
                className="inline-flex items-center justify-center px-8 py-4 bg-white border border-stone-200 text-stone-700 text-base font-bold rounded-2xl hover:bg-stone-50 hover:border-stone-300 transition-all shadow-sm hover:shadow-md"
              >
                Como funciona?
              </a>
            </div>

            <div className="flex gap-8 text-stone-400 text-sm font-medium pt-4">
                <span className="flex items-center gap-2">✓ Atendimento Online</span>
                <span className="flex items-center gap-2">✓ Sigilo Absoluto</span>
            </div>
          </motion.div>

          {/* Image / Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            {/* Organic Shape Blob */}
            <div className="absolute inset-0 bg-gradient-to-tr from-stone-200 to-primary-100 rounded-[3rem] rotate-3 transform scale-105 -z-10"></div>
            
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-stone-900/20 aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
               <img 
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop" 
                alt="Psicólogo Luiz Felipe Braziliano" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8 text-white backdrop-blur-sm bg-white/10 p-6 rounded-2xl border border-white/20">
                  <p className="font-serif italic text-xl md:text-2xl mb-2">"O autoconhecimento é o primeiro passo para a liberdade."</p>
                  <p className="text-xs uppercase tracking-widest opacity-80 font-bold">CRP 06/181948</p>
              </div>
            </div>

            {/* Floating Element */}
            <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white p-5 rounded-2xl shadow-xl shadow-stone-200 border border-white max-w-[180px]"
            >
                <div className="flex gap-1 mb-2">
                    {[1,2,3,4,5].map(s => <Star key={s} size={14} className="text-amber-400 fill-amber-400" />)}
                </div>
                <p className="text-xs text-stone-600 leading-tight">
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