import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Award, BookOpen, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const About: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Content (Left) */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-sm font-bold text-primary-600 uppercase tracking-widest mb-1">Quem Sou Eu</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
              Luiz Felipe Braziliano De Oliveira
            </h3>
            
            <div className="prose prose-lg text-slate-600 leading-relaxed">
              <p>
                Acredito que a terapia deve ser mais do que apenas um desabafo; deve ser um espaço de construção. 
                Sou formado em Psicologia pela Uninove (2021) e pós-graduando em Terapia Cognitivo-Comportamental pelo CETCC, uma das principais referências na área.
              </p>
              <p>
                Minha atuação é voltada para adolescentes, adultos e idosos, com foco em ansiedade, depressão, regulação emocional e transtornos alimentares.
              </p>
              
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden space-y-4"
                  >
                    <p>
                       Valorizo atividades que me ajudam a manter equilíbrio emocional, físico e mental, o que também enriquece minha prática clínica. Entre elas estão atividades físicas, leituras, filmes e documentários que ampliam minha visão de mundo.
                    </p>
                    <p>
                       Minha missão é desmistificar a psicologia e oferecer ferramentas práticas para que cada paciente possa se tornar, eventualmente, seu próprio terapeuta. Acredito na autonomia e no poder de transformação através do autoconhecimento guiado por evidências.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-primary-700 font-bold hover:text-primary-800 transition-colors"
            >
              {isExpanded ? 'Ler menos' : 'Conhecer minha história completa'}
              {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>

            {/* Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-100">
               <div className="flex flex-col items-center text-center p-4 bg-slate-50 rounded-xl">
                  <Award className="text-primary-600 mb-3" size={28} />
                  <span className="font-bold text-slate-800 text-sm">CRP 06/181948</span>
                  <span className="text-xs text-slate-500">Psicólogo Clínico</span>
               </div>
               <div className="flex flex-col items-center text-center p-4 bg-slate-50 rounded-xl">
                  <GraduationCap className="text-primary-600 mb-3" size={28} />
                  <span className="font-bold text-slate-800 text-sm">Pós-Graduando</span>
                  <span className="text-xs text-slate-500">TCC pelo CETCC</span>
               </div>
               <div className="flex flex-col items-center text-center p-4 bg-slate-50 rounded-xl">
                  <BookOpen className="text-primary-600 mb-3" size={28} />
                  <span className="font-bold text-slate-800 text-sm">Uninove</span>
                  <span className="text-xs text-slate-500">Formado em 2021</span>
               </div>
            </div>
          </div>

          {/* Image (Right) */}
          <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-primary-100 rounded-2xl transform translate-x-4 translate-y-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop" 
                alt="Luiz Felipe no escritório" 
                className="relative rounded-2xl shadow-xl w-full h-auto object-cover"
              />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;