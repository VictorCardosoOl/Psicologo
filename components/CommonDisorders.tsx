import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CloudRain, AlertTriangle, BatteryWarning, Activity, BrainCircuit, Heart, MessageCircle, ChevronRight, CheckCircle2 } from 'lucide-react';

interface SymptomScenario {
  id: string;
  triggerPhrase: string;
  disorderName: string;
  description: string;
  tccApproach: string;
  icon: React.ReactNode;
  colorClass: string;
  bgClass: string;
  borderColor: string;
}

const scenarios: SymptomScenario[] = [
  {
    id: 'anxiety',
    triggerPhrase: "Minha cabeça não para e estou sempre esperando o pior.",
    disorderName: "Ansiedade Generalizada (TAG)",
    description: "Você sente que está sempre em estado de alerta. A preocupação é excessiva, difícil de controlar e vem acompanhada de tensão muscular, irritabilidade ou insônia.",
    tccApproach: "Na TCC, identificamos os gatilhos da preocupação e ensinamos técnicas concretas para acalmar a mente e retomar o controle.",
    icon: <BrainCircuit size={32} />,
    colorClass: "text-teal-600",
    bgClass: "bg-teal-50",
    borderColor: "border-teal-200"
  },
  {
    id: 'panic',
    triggerPhrase: "Sinto o coração disparar e um medo repentino de morrer ou perder o controle.",
    disorderName: "Síndrome do Pânico",
    description: "Ataques súbitos de medo intenso que geram sintomas físicos reais (taquicardia, falta de ar), mesmo sem perigo aparente.",
    tccApproach: "Você aprenderá que as sensações físicas, embora assustadoras, não são perigosas, reduzindo o medo das próprias crises.",
    icon: <Activity size={32} />,
    colorClass: "text-indigo-600",
    bgClass: "bg-indigo-50",
    borderColor: "border-indigo-200"
  },
  {
    id: 'depression',
    triggerPhrase: "Sinto um vazio constante, desânimo e nada parece ter graça.",
    disorderName: "Depressão",
    description: "Não é apenas tristeza passageira. É uma perda de vitalidade que afeta o sono, o apetite e a vontade de realizar tarefas simples do dia a dia.",
    tccApproach: "Utilizamos a Ativação Comportamental para que você volte a sentir prazer nas pequenas coisas, passo a passo.",
    icon: <CloudRain size={32} />,
    colorClass: "text-slate-600",
    bgClass: "bg-slate-100",
    borderColor: "border-slate-200"
  },
  {
    id: 'burnout',
    triggerPhrase: "Estou exausto e sinto que não dou conta das exigências do trabalho.",
    disorderName: "Burnout",
    description: "Esgotamento físico e mental ligado à vida profissional. Você sente que, por mais que descanse, a energia não volta e o cinismo aumenta.",
    tccApproach: "Trabalhamos limites saudáveis, regulação do estresse e a reconstrução da sua identidade para além do trabalho.",
    icon: <BatteryWarning size={32} />,
    colorClass: "text-rose-600",
    bgClass: "bg-rose-50",
    borderColor: "border-rose-200"
  }
];

const CommonDisorders: React.FC = () => {
  // Start null so nothing is expanded by default
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const activeScenario = scenarios.find(s => s.id === selectedId);

  return (
    <section id="sinais" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mb-16 max-w-3xl">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-4">
             <AlertTriangle size={14} />
             Sinais de Alerta
           </div>
           <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
             Como você tem se sentido?
           </h2>
           <p className="text-slate-600 text-lg leading-relaxed">
             Muitas vezes, sabemos o que sentimos, mas não sabemos o nome disso. 
             <br/><strong>Clique na frase que mais se conecta com seu momento atual</strong> para entender o que pode estar acontecendo.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Symptom List */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {scenarios.map((scenario) => (
              <button
                key={scenario.id}
                onClick={() => setSelectedId(scenario.id)}
                className={`
                  group relative text-left p-6 rounded-xl transition-all duration-300 border flex items-center justify-between
                  ${selectedId === scenario.id 
                    ? 'bg-primary-600 text-white border-primary-600 shadow-lg translate-x-2' 
                    : 'bg-white text-slate-600 border-slate-100 hover:border-primary-300 hover:shadow-md hover:bg-slate-50'
                  }
                `}
              >
                <div className="flex items-start gap-4 pr-4">
                    <div className={`mt-1 w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center ${selectedId === scenario.id ? 'border-white bg-white/20' : 'border-slate-300'}`}>
                        {selectedId === scenario.id && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                    <span className={`font-medium leading-snug text-base md:text-lg ${selectedId === scenario.id ? 'text-white' : 'text-slate-700'}`}>
                    "{scenario.triggerPhrase}"
                    </span>
                </div>
                <ChevronRight size={20} className={`shrink-0 transition-opacity ${selectedId === scenario.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`} />
              </button>
            ))}
          </div>

          {/* Right Column: Context Display */}
          <div className="lg:col-span-7 relative min-h-[500px]">
            <AnimatePresence mode="wait">
              {activeScenario ? (
                <motion.div
                  key={activeScenario.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className={`relative rounded-3xl p-8 md:p-12 shadow-xl border ${activeScenario.borderColor} ${activeScenario.bgClass} h-full flex flex-col`}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-sm ${activeScenario.colorClass}`}>
                        {activeScenario.icon}
                    </div>
                    <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1 block">Possível Quadro</span>
                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 leading-none">
                            {activeScenario.disorderName}
                        </h3>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                        <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                            O que é isso?
                        </h4>
                        <p className="text-slate-700 text-lg leading-relaxed">
                            {activeScenario.description}
                        </p>
                    </div>

                    <div className="bg-white/60 rounded-2xl p-6 border border-white/60">
                        <h4 className="text-sm font-bold text-primary-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Heart size={16} />
                        Como a terapia ajuda
                        </h4>
                        <p className="text-slate-800 font-medium leading-relaxed">
                        {activeScenario.tccApproach}
                        </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-slate-200/50">
                    <a 
                        href="https://wa.me/5511999998888" 
                        target="_blank"
                        className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        Agendar avaliação sobre isso
                        <ArrowRight size={18} />
                    </a>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center p-12 border-2 border-dashed border-slate-200 rounded-3xl bg-slate-50"
                >
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-slate-300 mb-6 shadow-sm">
                    <CheckCircle2 size={40} className="text-slate-200" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-slate-400 mb-2">Selecione um sintoma ao lado</h3>
                  <p className="text-slate-400 max-w-xs mx-auto">
                    Ao clicar em uma das frases à esquerda, explicarei aqui o contexto clínico e como posso te ajudar.
                  </p>
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