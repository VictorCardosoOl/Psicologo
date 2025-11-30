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
}

const disorders: DisorderInfo[] = [
  {
    id: 'anxiety',
    name: 'Ansiedade (TAG)',
    tagline: 'A mente que nunca desliga.',
    icon: <AlertTriangle size={24} />,
    symptoms: ['Sensação constante de que algo ruim vai acontecer', 'Tensão muscular e dificuldade para relaxar', 'Pensamentos acelerados, principalmente à noite', 'Irritabilidade sem motivo aparente'],
    definition: 'O Transtorno de Ansiedade Generalizada (TAG) é como um alarme de incêndio que toca sem haver fogo. Seu corpo e mente vivem em estado de alerta constante, esperando perigos que muitas vezes não existem.',
    tccHelp: 'A TCC ajuda a identificar os "alarmes falsos". Aprendemos técnicas de relaxamento e questionamos a probabilidade real dos seus medos se concretizarem, devolvendo o controle.',
    colorClass: 'text-amber-600',
    bgClass: 'bg-amber-50',
    borderClass: 'border-amber-100'
  },
  {
    id: 'depression',
    name: 'Depressão',
    tagline: 'Quando o mundo perde a cor.',
    icon: <CloudRain size={24} />,
    symptoms: ['Perda de interesse em coisas que você gostava', 'Cansaço físico mesmo tendo dormido muito', 'Sentimento de culpa ou inutilidade', 'Alterações bruscas de apetite'],
    definition: 'A depressão não é fraqueza ou "falta de Deus". É uma condição clínica que afeta a química cerebral e a forma como você processa emoções, criando um filtro cinza sobre a realidade.',
    tccHelp: 'Utilizamos a Ativação Comportamental para quebrar o ciclo da inércia ("só faço quando tiver vontade") e reestruturamos pensamentos automáticos de autocrítica.',
    colorClass: 'text-blue-600',
    bgClass: 'bg-blue-50',
    borderClass: 'border-blue-100'
  },
  {
    id: 'burnout',
    name: 'Burnout',
    tagline: 'O esgotamento pelo excesso.',
    icon: <BatteryWarning size={24} />,
    symptoms: ['Exaustão emocional (sentir-se drenado)', 'Cinismo ou distanciamento do trabalho', 'Sensação de que nada do que faz é suficiente', 'Dores de cabeça ou problemas gastrointestinais'],
    definition: 'Síndrome resultante de um estresse crônico no trabalho que não foi gerenciado. Não é apenas cansaço; é um colapso do seu sistema de enfrentamento.',
    tccHelp: 'Focamos em estabelecer limites claros, resgatar sua identidade fora do trabalho e desenvolver estratégias de regulação emocional para lidar com a pressão.',
    colorClass: 'text-rose-600',
    bgClass: 'bg-rose-50',
    borderClass: 'border-rose-100'
  },
  {
    id: 'toc',
    name: 'TOC',
    tagline: 'O ciclo da dúvida.',
    icon: <ShieldAlert size={24} />,
    symptoms: ['Pensamentos intrusivos que geram medo', 'Necessidade incontrolável de verificar coisas', 'Rituais mentais para "anular" pensamentos ruins', 'Busca constante por certeza absoluta'],
    definition: 'O Transtorno Obsessivo-Compulsivo prende a pessoa em um ciclo: uma obsessão (medo) gera ansiedade, e a compulsão (ritual) alivia momentaneamente, mas reforça o medo.',
    tccHelp: 'A Exposição com Prevenção de Resposta (EPR) é o padrão-ouro. Ensinamos você a tolerar a incerteza e o desconforto sem realizar o ritual, quebrando o ciclo.',
    colorClass: 'text-purple-600',
    bgClass: 'bg-purple-50',
    borderClass: 'border-purple-100'
  }
];

const CommonDisorders: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('anxiety');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="disorders" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider">
             <HelpCircle size={14} />
             Autoanálise
           </div>
           <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
             O que seu corpo e mente estão dizendo?
           </h2>
           <p className="text-slate-600 text-lg max-w-2xl mx-auto">
             Muitas vezes, não sabemos nomear o que sentimos. Identifique os sintomas abaixo para entender melhor o seu momento.
           </p>
        </div>

        {/* Accordion Cards */}
        <div className="grid grid-cols-1 gap-6">
          {disorders.map((item) => {
            const isExpanded = expandedId === item.id;

            return (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded 
                    ? `bg-white shadow-xl ring-1 ring-slate-200 border-transparent` 
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group"
                >
                  <div className="flex items-center gap-6">
                    <div className={`
                      w-14 h-14 rounded-2xl flex items-center justify-center transition-colors duration-300
                      ${isExpanded ? `${item.bgClass} ${item.colorClass}` : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'}
                    `}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold transition-colors ${isExpanded ? 'text-slate-900' : 'text-slate-700'}`}>
                        {item.name}
                      </h3>
                      <p className="text-slate-500 text-sm mt-1 font-medium hidden md:block">
                        {item.tagline}
                      </p>
                    </div>
                  </div>
                  
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    isExpanded 
                      ? 'bg-slate-900 text-white border-slate-900 rotate-180' 
                      : 'bg-white border-slate-200 text-slate-400 group-hover:border-slate-300'
                  }`}>
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
                      transition={{ duration: 0.3 }}
                    >
                      <div className="border-t border-slate-100">
                        
                        {/* 1. Sintomas (Hero Section do Card) */}
                        <div className={`${item.bgClass} p-8 md:p-10`}>
                          <h4 className={`text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-2 ${item.colorClass}`}>
                            <Activity size={18} /> Identifique os Sinais
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {item.symptoms.map((symptom, idx) => (
                              <div key={idx} className="flex items-start gap-3 bg-white/60 p-3 rounded-lg">
                                <div className={`mt-1 p-1 rounded-full bg-white ${item.colorClass}`}>
                                  <Check size={12} strokeWidth={4} />
                                </div>
                                <span className="text-slate-800 font-medium text-sm leading-relaxed">
                                  {symptom}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* 2. Explicação e Solução */}
                        <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-12 bg-white">
                          
                          {/* O que é */}
                          <div>
                             <h4 className="text-lg font-serif font-bold text-slate-900 mb-3">
                               Entendendo o quadro
                             </h4>
                             <p className="text-slate-600 leading-relaxed text-sm">
                               {item.definition}
                             </p>
                          </div>

                          {/* Solução TCC */}
                          <div className="relative pl-0 md:pl-8 md:border-l border-slate-100">
                             <h4 className="text-lg font-serif font-bold text-slate-900 mb-3">
                               Como a Terapia ajuda?
                             </h4>
                             <p className="text-slate-600 leading-relaxed text-sm mb-6">
                               {item.tccHelp}
                             </p>
                             
                             <a 
                               href="#contact" 
                               className={`inline-flex items-center text-sm font-bold ${item.colorClass} hover:opacity-80 transition-opacity`}
                             >
                               Agendar conversa sobre isso <ArrowRight size={16} className="ml-2" />
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