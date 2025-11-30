import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, HelpCircle, RefreshCw, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    id: 'identificar',
    title: 'Identificar',
    description: 'Mapeamos os pensamentos automáticos e crenças que geram sofrimento.',
    fullText: 'Na primeira etapa, trabalhamos como detetives da sua própria mente. Observamos situações do dia a dia para entender o que dispara sua ansiedade ou tristeza.',
    icon: <Search size={24} />,
    side: 'left'
  },
  {
    id: 'questionar',
    title: 'Questionar',
    description: 'Colocamos à prova a validade desses pensamentos. São fatos ou interpretações?',
    fullText: 'Nem tudo que pensamos é verdade. Aqui, usamos o "Questionamento Socrático" para avaliar se seus medos são proporcionais à realidade.',
    icon: <HelpCircle size={24} />,
    side: 'right'
  },
  {
    id: 'transformar',
    title: 'Transformar',
    description: 'Criamos novos comportamentos e formas de pensar mais funcionais e saudáveis.',
    fullText: 'A mudança acontece na prática. Desenvolvemos estratégias de enfrentamento para que você retome o controle da sua vida.',
    icon: <RefreshCw size={24} />,
    side: 'left'
  }
];

const Methodology: React.FC = () => {
  const [activeStep, setActiveStep] = useState<string | null>(null);

  return (
    <section id="methodology" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary-600 uppercase tracking-widest mb-2">Metodologia TCC</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            Como funciona o tratamento?
          </h3>
          <p className="text-slate-600 leading-relaxed">
            A Terapia Cognitivo-Comportamental é estruturada, objetiva e colaborativa. 
            Você não é apenas um ouvinte passivo; é o protagonista da sua mudança.
          </p>
        </div>

        {/* Timeline Visual */}
        <div className="relative max-w-4xl mx-auto mb-20">
           {/* Center Line */}
           <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 transform md:-translate-x-1/2"></div>

           <div className="space-y-12">
             {steps.map((step) => (
               <div key={step.id} className={`relative flex flex-col md:flex-row items-center ${step.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                 
                 {/* Content Box */}
                 <div className="flex-1 w-full pl-12 md:pl-0 pr-0 md:px-8">
                    <motion.div 
                      className={`bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-primary-300 transition-all cursor-pointer ${step.side === 'left' ? 'md:text-right' : 'md:text-left'}`}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                    >
                       <h4 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h4>
                       <p className="text-slate-600 text-sm">{step.description}</p>
                       
                       <AnimatePresence>
                         {activeStep === step.id && (
                           <motion.div
                             initial={{ height: 0, opacity: 0 }}
                             animate={{ height: 'auto', opacity: 1 }}
                             exit={{ height: 0, opacity: 0 }}
                             className="overflow-hidden mt-3 pt-3 border-t border-slate-100 text-slate-600 text-sm bg-primary-50/50 rounded p-2"
                           >
                             {step.fullText}
                           </motion.div>
                         )}
                       </AnimatePresence>
                    </motion.div>
                 </div>

                 {/* Center Icon */}
                 <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-10 h-10 bg-primary-600 rounded-full border-4 border-slate-50 flex items-center justify-center text-white z-10">
                    {step.icon}
                 </div>

                 {/* Empty Space for Balance */}
                 <div className="hidden md:block flex-1"></div>
               </div>
             ))}
           </div>
        </div>

        {/* Benefits Grid */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
           <h4 className="text-2xl font-serif font-bold text-slate-900 mb-8 text-center">Benefícios Práticos e Reais</h4>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                "Gerenciar crises de ansiedade",
                "Melhorar a qualidade do sono",
                "Desenvolver comunicação assertiva",
                "Aumentar a autoestima",
                "Tomar decisões com clareza",
                "Reduzir a procrastinação"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                   <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                   <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
           </div>
           
           <div className="mt-10 p-6 bg-slate-50 rounded-xl text-center">
              <p className="text-slate-600 font-medium mb-4">
                 <span className="text-primary-700 font-bold">Nota Importante:</span> A Terapia Colaborativa significa que eu atuo como um guia técnico, mas você detém o conhecimento da sua vida. Trabalhamos como uma dupla.
              </p>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Methodology;