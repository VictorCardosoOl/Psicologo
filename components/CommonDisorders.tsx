import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CloudRain, ShieldAlert, AlertTriangle, BatteryWarning, Plus, Minus, Check, HelpCircle, Activity } from 'lucide-react';

interface DisorderInfo {
  id: string;
  name: string;
  tagline: string;
  icon: React.ReactNode;
  symptoms: string[];
  definition: string;
  tccHelp: string;
  colorClass: string;
  bgClass: string;
  borderClass: string;
  gradientClass: string;
  shadowColor: string;
}

const disorders: DisorderInfo[] = [
  {
    id: 'anxiety',
    name: 'Ansiedade (TAG)',
    tagline: 'A mente que nunca desliga.',
    icon: <AlertTriangle size={24} />,
    symptoms: ['Sensação constante de perigo', 'Tensão muscular e rigidez', 'Pensamentos acelerados à noite', 'Irritabilidade frequente'],
    definition: 'O Transtorno de Ansiedade Generalizada (TAG) mantém seu corpo e mente em estado de alerta constante, esperando perigos que muitas vezes não existem.',
    tccHelp: 'Ajudamos a identificar "alarmes falsos", ensinando técnicas de relaxamento e questionamento socrático para retomar o controle.',
    colorClass: 'text-amber-700',
    bgClass: 'bg-amber-100',
    borderClass: 'border-amber-200',
    gradientClass: 'bg-gradient-to-br from-white via-white to-amber-50',
    shadowColor: 'shadow-amber-900/5'
  },
  {
    id: 'depression',
    name: 'Depressão',
    tagline: 'Quando o mundo perde a cor.',
    icon: <CloudRain size={24} />,
    symptoms: ['Perda de interesse (anedonia)', 'Cansaço físico persistente', 'Sentimento de culpa ou vazio', 'Alterações de sono e apetite'],
    definition: 'A depressão afeta a química cerebral e a forma como processamos emoções, criando um filtro cinza sobre a realidade e drenando a vitalidade.',
    tccHelp: 'Usamos a Ativação Comportamental para quebrar o ciclo da inércia e reestruturamos pensamentos automáticos de autocrítica.',
    colorClass: 'text-sky-700',
    bgClass: 'bg-sky-100',
    borderClass: 'border-sky-200',
    gradientClass: 'bg-gradient-to-br from-white via-white to-sky-50',
    shadowColor: 'shadow-sky-900/5'
  },
  {
    id: 'burnout',
    name: 'Burnout',
    tagline: 'O esgotamento pelo excesso.',
    icon: <BatteryWarning size={24} />,
    symptoms: ['Exaustão emocional extrema', 'Cinismo com o trabalho', 'Sensação de incompetência', 'Dores físicas sem causa aparente'],
    definition: 'Síndrome resultante de estresse crônico não gerenciado. É um colapso do sistema de enfrentamento, não apenas cansaço comum.',
    tccHelp: 'Focamos em estabelecer limites claros, resgatar sua identidade fora do trabalho e desenvolver regulação emocional.',
    colorClass: 'text-rose-700',
    bgClass: 'bg-rose-100',
    borderClass: 'border-rose-200',
    gradientClass: 'bg-gradient-to-br from-white via-white to-rose-50',
    shadowColor: 'shadow-rose-900/5'
  },
  {
    id: 'toc',
    name: 'TOC',
    tagline: 'O ciclo da dúvida.',
    icon: <ShieldAlert size={24} />,
    symptoms: ['Pensamentos intrusivos', 'Verificações constantes', 'Rituais mentais de "anulação"', 'Necessidade de certeza absoluta'],
    definition: 'Um ciclo onde uma obsessão (medo) gera ansiedade, e a compulsão (ritual) alivia momentaneamente, mas reforça o medo a longo prazo.',
    tccHelp: 'A Exposição com Prevenção de Resposta (EPR) ensina a tolerar a incerteza sem realizar rituais, quebrando o ciclo do medo.',
    colorClass: 'text-violet-700',
    bgClass: 'bg-violet-100',
    borderClass: 'border-violet-200',
    gradientClass: 'bg-gradient-to-br from-white via-white to-violet-50',
    shadowColor: 'shadow-violet-900/5'
  }
];

const CommonDisorders: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('anxiety');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="disorders" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider shadow-sm">
             <HelpCircle size={14} />
             Sinais de Alerta
           </div>
           <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
             O que você tem sentido?
           </h2>
           <p className="text-slate-500 text-lg max-w-xl mx-auto font-light leading-relaxed">
             Identificar os sintomas é o primeiro passo para o tratamento. Selecione um card abaixo para entender melhor.
           </p>
        </div>

        {/* Cards Stack */}
        <div className="flex flex-col gap-4">
          {disorders.map((item) => {
            const isExpanded = expandedId === item.id;

            return (
              <motion.div 
                key={item.id}
                layout
                initial={false}
                animate={{ 
                  scale: isExpanded ? 1.02 : 1,
                  borderColor: isExpanded ? 'rgba(0,0,0,0)' : 'transparent' 
                }}
                className={`
                  relative rounded-2xl border transition-all duration-500 overflow-hidden
                  ${item.gradientClass}
                  ${isExpanded ? `shadow-2xl ${item.shadowColor} ring-1 ring-black/5 z-10` : 'border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200'}
                `}
              >
                {/* Trigger Area */}
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group relative z-10"
                >
                  <div className="flex items-center gap-6">
                    {/* Icon Box */}
                    <div className={`
                      w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-inner
                      ${item.bgClass} ${item.colorClass}
                      ${isExpanded ? 'scale-110' : 'scale-100 group-hover:scale-105'}
                    `}>
                      {item.icon}
                    </div>
                    
                    {/* Title & Tagline */}
                    <div>
                      <h3 className={`text-xl md:text-2xl font-serif font-bold transition-colors duration-300 ${isExpanded ? 'text-slate-900' : 'text-slate-800 group-hover:text-slate-900'}`}>
                        {item.name}
                      </h3>
                      <p className={`text-sm font-medium mt-1 transition-colors duration-300 ${isExpanded ? item.colorClass : 'text-slate-500'}`}>
                        {item.tagline}
                      </p>
                    </div>
                  </div>
                  
                  {/* Expand Icon */}
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500
                    ${isExpanded 
                      ? `bg-slate-900 text-white border-slate-900 rotate-180` 
                      : 'bg-white/50 border-slate-200 text-slate-400 group-hover:bg-white group-hover:shadow-sm'
                    }
                  `}>
                    {isExpanded ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-8 md:px-8 md:pb-10 pt-2 border-t border-slate-100/50">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-4">
                          
                          {/* Left Column: Symptoms Checklist */}
                          <div className="bg-white/60 rounded-2xl p-6 border border-white/50 shadow-sm backdrop-blur-sm">
                            <h4 className={`text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2 ${item.colorClass}`}>
                              <Activity size={16} /> Checklist de Sintomas
                            </h4>
                            <ul className="space-y-3">
                              {item.symptoms.map((symptom, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm">
                                  <div className={`mt-0.5 p-0.5 rounded-full ${item.bgClass} ${item.colorClass}`}>
                                    <Check size={10} strokeWidth={4} />
                                  </div>
                                  <span className="leading-tight">{symptom}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Right Column: Explanation & CTA */}
                          <div className="flex flex-col justify-between space-y-6">
                            <div>
                               <h4 className="font-serif font-bold text-slate-900 text-lg mb-3">
                                 O que isso significa?
                               </h4>
                               <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                 {item.definition}
                               </p>
                               <div className={`p-4 rounded-xl border-l-4 ${item.borderClass} bg-white/50 italic text-slate-600 text-sm`}>
                                  <span className="font-bold block text-xs uppercase text-slate-400 mb-1">Como a TCC atua:</span>
                                  {item.tccHelp}
                               </div>
                            </div>

                            <a 
                              href="#contact" 
                              className={`
                                group inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 
                                rounded-xl font-bold text-sm text-white shadow-lg shadow-slate-200 
                                transition-all hover:translate-y-[-2px] hover:shadow-xl
                                bg-slate-900 hover:bg-slate-800
                              `}
                            >
                              Agendar Avaliação
                              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                          </div>

                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CommonDisorders;