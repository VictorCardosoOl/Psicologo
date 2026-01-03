import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowDown, Activity, BrainCircuit, Battery, CloudRain, AlertCircle } from 'lucide-react';
import { scenarios } from '../data';

const CommonDisorders: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>('anxiety');

  const toggleOpen = (id: string) => {
    setSelectedId(selectedId === id ? null : id);
  };

  // Helper para ícones grandes e estilizados na área expandida
  const getIcon = (id: string) => {
    switch(id) {
        case 'anxiety': return <BrainCircuit size={64} strokeWidth={1} />;
        case 'panic': return <Activity size={64} strokeWidth={1} />;
        case 'depression': return <CloudRain size={64} strokeWidth={1} />;
        case 'burnout': return <Battery size={64} strokeWidth={1} />;
        default: return <AlertCircle size={64} strokeWidth={1} />;
    }
  };

  return (
    <section id="sinais" className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header da Seção */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
           <div className="max-w-2xl">
                <h2 className="text-sm font-bold text-primary-600 uppercase tracking-widest mb-3">Identificação</h2>
                <h3 className="text-3xl md:text-5xl font-serif font-medium text-stone-900 leading-tight">
                    O que sua mente diz?
                </h3>
           </div>
           <p className="text-stone-500 max-w-sm text-sm md:text-right">
             Clique na frase que mais ressoa com o seu momento atual para entender o que pode estar acontecendo.
           </p>
        </div>

        {/* Lista estilo K-News */}
        <div className="border-t border-stone-300">
          {scenarios.map((scenario) => {
            const isOpen = selectedId === scenario.id;

            return (
              <div key={scenario.id} className="border-b border-stone-300 transition-colors duration-500 hover:bg-stone-50">
                
                {/* Cabeçalho do Item (Sempre visível) */}
                <button
                  onClick={() => toggleOpen(scenario.id)}
                  className="w-full py-8 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-left group focus:outline-none"
                >
                  <div className="flex items-center gap-6 md:gap-12 flex-1">
                    {/* Indicador de Status (Círculo) */}
                    <div className="hidden md:flex items-center justify-center w-6 h-6">
                        <div className={`w-3 h-3 rounded-full transition-all duration-300 ${isOpen ? 'bg-stone-900 scale-125' : 'border border-stone-400 group-hover:bg-stone-400'}`}></div>
                    </div>

                    {/* Label Pequeno (Data/Categoria no original) */}
                    <span className="text-xs font-bold text-stone-400 uppercase tracking-widest w-24 flex-shrink-0">
                      Sinal #{scenario.id.substring(0, 3)}
                    </span>

                    {/* Frase Principal */}
                    <h4 className={`text-xl md:text-3xl font-serif transition-colors duration-300 ${isOpen ? 'text-primary-800' : 'text-stone-800 group-hover:text-stone-600'}`}>
                      "{scenario.triggerPhrase}"
                    </h4>
                  </div>

                  {/* Seta */}
                  <div className="pl-4 md:pl-0 self-end md:self-center">
                    <ArrowDown 
                        size={24} 
                        className={`text-stone-400 transition-transform duration-500 ${isOpen ? 'rotate-180 text-primary-600' : 'group-hover:translate-y-1'}`} 
                    />
                  </div>
                </button>

                {/* Conteúdo Expandido */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-12 pt-4 pl-0 md:pl-[calc(6rem+24px)] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        
                        {/* Texto Explicativo */}
                        <div className="space-y-6">
                            <div>
                                <h5 className="text-sm font-bold text-stone-400 uppercase tracking-wider mb-2">Quadro Provável</h5>
                                <h2 className="text-3xl font-serif text-stone-900 mb-6">{scenario.disorderName}</h2>
                                <p className="text-lg text-stone-600 leading-relaxed font-light border-l-2 border-primary-200 pl-6">
                                    {scenario.description}
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm">
                                <h6 className="font-bold text-stone-900 mb-2 text-sm flex items-center gap-2">
                                    <BrainCircuit size={16} className="text-primary-600" />
                                    Como a TCC atua:
                                </h6>
                                <p className="text-stone-500 text-sm leading-relaxed">
                                    {scenario.tccApproach}
                                </p>
                            </div>

                            <div className="pt-4">
                                <a 
                                    href="https://wa.me/5511999998888"
                                    className="inline-flex items-center gap-3 px-8 py-3 rounded-full border border-stone-900 text-stone-900 font-bold hover:bg-stone-900 hover:text-white transition-all duration-300 group/btn"
                                >
                                    Agendar Avaliação
                                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>

                        {/* Elemento Visual (Imagem/Icone Lado Direito) */}
                        <div className="relative h-64 lg:h-80 w-full rounded-2xl overflow-hidden group/img cursor-pointer">
                            {/* Fundo com Gradiente/Cor baseada no tipo */}
                            <div className={`absolute inset-0 ${scenario.bgClass.replace('bg-', 'bg-gradient-to-br from-white to-')} opacity-50`}></div>
                            
                            {/* Imagem Placeholder Decorativa (abstrata para manter elegância) */}
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 transition-transform duration-700 group-hover/img:scale-105">
                                <div className={`p-6 rounded-full bg-white shadow-soft mb-6 ${scenario.colorClass}`}>
                                    {getIcon(scenario.id)}
                                </div>
                                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">
                                    Identificação Clínica
                                </p>
                            </div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CommonDisorders;