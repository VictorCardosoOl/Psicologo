import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CloudRain, ShieldAlert, AlertTriangle, BatteryWarning } from 'lucide-react';

interface DisorderInfo {
  id: string;
  name: string;
  icon: React.ReactNode;
  symptoms: string[];
  definition: string;
  tccHelp: string;
  position: string; // Tailwind classes for positioning
}

const disorders: DisorderInfo[] = [
  {
    id: 'depression',
    name: 'Depressão',
    icon: <CloudRain size={32} className="text-blue-500" />,
    symptoms: ['Perda de prazer', 'Alterações no sono/apetite', 'Sentimento de culpa', 'Cansaço excessivo'],
    definition: 'Um transtorno de humor que causa um sentimento persistente de tristeza e perda de interesse.',
    tccHelp: 'A TCC ajuda a identificar pensamentos negativos automáticos e a reativar comportamentos prazerosos.',
    position: 'top-10 left-10 md:left-1/4'
  },
  {
    id: 'anxiety',
    name: 'Ansiedade (TAG)',
    icon: <AlertTriangle size={32} className="text-yellow-500" />,
    symptoms: ['Preocupação excessiva', 'Inquietude', 'Tensão muscular', 'Dificuldade de concentração'],
    definition: 'Preocupação e medo intensos, excessivos e persistentes sobre situações cotidianas.',
    tccHelp: 'Ensina técnicas de relaxamento e questionamento socrático para lidar com o medo do futuro.',
    position: 'top-20 right-10 md:right-1/4'
  },
  {
    id: 'toc',
    name: 'TOC',
    icon: <ShieldAlert size={32} className="text-purple-500" />,
    symptoms: ['Pensamentos intrusivos', 'Rituais de repetição', 'Necessidade de controle', 'Dúvida constante'],
    definition: 'Pensamentos obsessivos que levam a comportamentos compulsivos repetitivos.',
    tccHelp: 'Utiliza Exposição e Prevenção de Resposta (EPR) para reduzir a força das obsessões.',
    position: 'bottom-20 left-6 md:left-1/3'
  },
  {
    id: 'burnout',
    name: 'Burnout',
    icon: <BatteryWarning size={32} className="text-red-500" />,
    symptoms: ['Esgotamento físico/mental', 'Cinismo com o trabalho', 'Baixa realização pessoal', 'Irritabilidade'],
    definition: 'Síndrome resultante de um estresse crônico no local de trabalho que não foi administrado com sucesso.',
    tccHelp: 'Trabalha limites, regulação emocional e reestruturação da relação com o trabalho.',
    position: 'bottom-32 right-6 md:right-1/3'
  }
];

const CommonDisorders: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="disorders" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative min-h-[600px] flex flex-col items-center justify-center">
        
        <div className="text-center mb-12 z-10 pointer-events-none">
          <h2 className="text-sm font-bold text-primary-600 uppercase tracking-widest mb-2">Sintomas Silenciosos</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
            O que seu corpo e mente tentam dizer?
          </h3>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            Clique nos termos abaixo para entender melhor o que você pode estar sentindo.
          </p>
        </div>

        {/* Scattered Buttons Area */}
        <div className="relative w-full h-[400px] md:h-[500px]">
           {disorders.map((d) => (
             <motion.button
                key={d.id}
                onClick={() => setActiveId(d.id)}
                onMouseEnter={() => setActiveId(d.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`absolute ${d.position} bg-slate-50 border border-slate-200 shadow-md px-6 py-3 rounded-full font-bold text-slate-700 hover:bg-primary-50 hover:border-primary-300 hover:text-primary-800 transition-all z-20`}
             >
               {d.name}
             </motion.button>
           ))}

           {/* Central Decorative Element */}
           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-50 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse pointer-events-none"></div>
        </div>

        {/* Popup Overlay */}
        <AnimatePresence>
          {activeId && (
            <div className="absolute inset-0 z-30 flex items-center justify-center p-4 pointer-events-none">
               {disorders.filter(d => d.id === activeId).map(d => (
                 <motion.div
                    key={d.id}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-8 max-w-lg w-full pointer-events-auto relative"
                 >
                    <button 
                      onClick={() => setActiveId(null)}
                      className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
                    >
                      <X size={24} />
                    </button>

                    <div className="flex items-center gap-4 mb-6">
                       <div className="p-3 bg-slate-50 rounded-xl">
                          {d.icon}
                       </div>
                       <h4 className="text-2xl font-serif font-bold text-slate-900">{d.name}</h4>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div>
                        <h5 className="font-bold text-sm text-slate-500 uppercase mb-1">O que é?</h5>
                        <p className="text-slate-700 leading-relaxed">{d.definition}</p>
                      </div>
                      
                      <div>
                        <h5 className="font-bold text-sm text-slate-500 uppercase mb-2">Sinais Comuns</h5>
                        <ul className="grid grid-cols-2 gap-2">
                          {d.symptoms.map(s => (
                            <li key={s} className="text-sm text-slate-600 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span> {s}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-bold text-sm text-slate-500 uppercase mb-1">Como a TCC Ajuda?</h5>
                        <p className="text-slate-700 leading-relaxed font-medium bg-primary-50 p-3 rounded-lg border border-primary-100">
                          {d.tccHelp}
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-slate-100 pt-6 text-center">
                       <p className="text-sm text-slate-500 mb-4 italic">Você se identifica com esses sintomas?</p>
                       <a 
                         href="#contact"
                         className="inline-flex items-center justify-center w-full py-3 bg-primary-700 hover:bg-primary-800 text-white font-bold rounded-xl transition-colors"
                       >
                         Agendar Avaliação
                         <ArrowRight size={18} className="ml-2" />
                       </a>
                    </div>
                 </motion.div>
               ))}
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default CommonDisorders;