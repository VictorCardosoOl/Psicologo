import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CloudRain, ShieldAlert, AlertTriangle, BatteryWarning, CheckCircle2 } from 'lucide-react';

interface DisorderInfo {
  id: string;
  name: string;
  icon: React.ReactNode;
  symptoms: string[];
  definition: string;
  tccHelp: string;
  color: string;
}

const disorders: DisorderInfo[] = [
  {
    id: 'depression',
    name: 'Depressão',
    icon: <CloudRain size={28} />,
    symptoms: ['Perda de prazer em hobbies', 'Alterações no sono ou apetite', 'Sentimento de culpa excessiva', 'Cansaço físico constante'],
    definition: 'Um transtorno de humor que causa um sentimento persistente de tristeza e perda de interesse, afetando como você se sente, pensa e lida com atividades diárias.',
    tccHelp: 'A TCC ajuda a identificar pensamentos negativos automáticos e a reativar comportamentos que trazem prazer e sentido (Ativação Comportamental).',
    color: 'text-blue-600'
  },
  {
    id: 'anxiety',
    name: 'Ansiedade (TAG)',
    icon: <AlertTriangle size={28} />,
    symptoms: ['Preocupação excessiva e difícil de controlar', 'Inquietude ou sensação de "nervos à flor da pele"', 'Tensão muscular constante', 'Dificuldade de concentração'],
    definition: 'Preocupação e medo intensos, excessivos e persistentes sobre situações cotidianas. É quando o "estado de alerta" não desliga.',
    tccHelp: 'Ensina técnicas de relaxamento e questionamento socrático para lidar com o medo do futuro e reduzir a catastrofização.',
    color: 'text-amber-600'
  },
  {
    id: 'toc',
    name: 'TOC',
    icon: <ShieldAlert size={28} />,
    symptoms: ['Pensamentos intrusivos indesejados', 'Rituais de repetição ou verificação', 'Necessidade extrema de controle', 'Dúvida constante ("será que fechei?")'],
    definition: 'Caracterizado por pensamentos obsessivos (ideias fixas) que levam a comportamentos compulsivos (rituais) para aliviar a ansiedade momentânea.',
    tccHelp: 'Utiliza a Exposição e Prevenção de Resposta (EPR) para ajudar o paciente a tolerar a incerteza sem realizar os rituais.',
    color: 'text-purple-600'
  },
  {
    id: 'burnout',
    name: 'Burnout',
    icon: <BatteryWarning size={28} />,
    symptoms: ['Esgotamento físico e mental extremo', 'Cinismo ou distanciamento do trabalho', 'Sensação de ineficácia', 'Irritabilidade frequente'],
    definition: 'Uma síndrome resultante de um estresse crônico no local de trabalho que não foi administrado com sucesso.',
    tccHelp: 'Trabalha limites, regulação emocional e reestruturação da relação com o trabalho e expectativas pessoais.',
    color: 'text-rose-600'
  }
];

const CommonDisorders: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('depression');
  const activeData = disorders.find(d => d.id === activeId);

  return (
    <section id="disorders" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Elegante */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-3">Sinais de Alerta</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
            Sintomas Silenciosos
          </h3>
          <div className="w-16 h-1 bg-primary-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          {/* Menu Lateral (Tabs) */}
          <div className="w-full lg:w-1/3 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-3 pb-4 lg:pb-0 scrollbar-hide">
             {disorders.map((d) => (
               <button
                  key={d.id}
                  onClick={() => setActiveId(d.id)}
                  className={`group flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 min-w-[200px] lg:min-w-0 border ${
                    activeId === d.id 
                      ? 'bg-primary-50 border-primary-200 shadow-sm' 
                      : 'bg-white border-transparent hover:bg-slate-50'
                  }`}
               >
                 <div className={`p-2 rounded-lg transition-colors ${activeId === d.id ? 'bg-white text-primary-600' : 'bg-slate-100 text-slate-400 group-hover:text-slate-600'}`}>
                    {d.icon}
                 </div>
                 <div>
                   <span className={`block font-bold text-lg ${activeId === d.id ? 'text-slate-900' : 'text-slate-500'}`}>
                     {d.name}
                   </span>
                 </div>
               </button>
             ))}
          </div>

          {/* Área de Conteúdo (Card Elegante) */}
          <div className="w-full lg:w-2/3">
            <AnimatePresence mode="wait">
              {activeData && (
                <motion.div
                  key={activeData.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100 shadow-xl relative overflow-hidden"
                >
                  {/* Decorative Background Blob */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-50 -mr-16 -mt-16 pointer-events-none"></div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`p-2 rounded-lg bg-white shadow-sm ${activeData.color}`}>
                         {activeData.icon}
                      </div>
                      <h4 className="text-3xl font-serif font-bold text-slate-800">{activeData.name}</h4>
                    </div>

                    <p className="text-lg text-slate-600 leading-relaxed mb-8 italic border-l-4 border-primary-200 pl-4">
                      "{activeData.definition}"
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                       <div>
                          <h5 className="font-bold text-xs text-slate-400 uppercase tracking-wider mb-4">Sinais Comuns</h5>
                          <ul className="space-y-3">
                            {activeData.symptoms.map((s, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm">
                                <CheckCircle2 size={16} className="text-primary-500 mt-0.5 shrink-0" />
                                {s}
                              </li>
                            ))}
                          </ul>
                       </div>
                       <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                          <h5 className="font-bold text-xs text-primary-600 uppercase tracking-wider mb-2">Abordagem TCC</h5>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            {activeData.tccHelp}
                          </p>
                       </div>
                    </div>

                    <div className="flex justify-end pt-4 border-t border-slate-200/60">
                       <a href="#contact" className="group inline-flex items-center font-bold text-slate-800 hover:text-primary-600 transition-colors">
                          Agendar conversa sobre {activeData.name}
                          <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                       </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CommonDisorders;