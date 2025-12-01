import React from 'react';
import { ArrowRight, Brain, ShieldCheck, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 space-y-8"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
              <span className="text-primary-700 font-bold text-xs tracking-wider uppercase">Psicologia Baseada em Evidências</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight">
              Autoconhecimento e mudança prática para sua <span className="text-primary-600 italic">vida</span>.
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              Sou Luiz Felipe Braziliano, psicólogo clínico (CRP 06/181948). 
              Através da Terapia Cognitivo-Comportamental, ajudo você a entender seus padrões e construir caminhos mais saudáveis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white text-base font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Agendar Consulta
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#methodology"
                className="inline-flex items-center justify-center px-8 py-4 border border-slate-300 text-slate-700 text-base font-bold rounded-xl hover:bg-white hover:border-primary-300 transition-all"
              >
                Como funciona a terapia?
              </a>
            </div>

            {/* Pillars */}
            <div className="pt-10 flex flex-wrap gap-8 border-t border-slate-200">
                <div className="flex items-center gap-3">
                    <div className="bg-white p-2 rounded-lg shadow-sm text-primary-600"><TrendingUp size={20} /></div>
                    <span className="text-sm font-bold text-slate-700">Foco em Resultados</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="bg-white p-2 rounded-lg shadow-sm text-primary-600"><ShieldCheck size={20} /></div>
                    <span className="text-sm font-bold text-slate-700">Ética e Acolhimento</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="bg-white p-2 rounded-lg shadow-sm text-primary-600"><Brain size={20} /></div>
                    <span className="text-sm font-bold text-slate-700">Técnicas Modernas</span>
                </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative mx-auto w-full max-w-md lg:max-w-full"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white bg-slate-200">
               {/* Placeholder for Luiz Felipe's Photo */}
              <img 
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop" 
                alt="Psicólogo Luiz Felipe Braziliano" 
                className="w-full h-[500px] object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-serif italic text-xl">"Sua mente, seu lar."</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;