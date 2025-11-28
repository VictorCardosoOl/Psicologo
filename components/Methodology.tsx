import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Lightbulb, Target, Smile } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Avaliação e Mapeamento",
    desc: "Nas primeiras sessões, entendemos sua história, seus gatilhos e como seus pensamentos influenciam suas emoções.",
    icon: <Lightbulb size={24} />
  },
  {
    id: 2,
    title: "Reestruturação Cognitiva",
    desc: "Identificamos padrões de pensamento negativos e trabalhamos juntos para construir perspectivas mais saudáveis e realistas.",
    icon: <Target size={24} />
  },
  {
    id: 3,
    title: "Autonomia Emocional",
    desc: "Você aprende técnicas práticas para lidar com crises futuras, tornando-se seu próprio terapeuta a longo prazo.",
    icon: <Smile size={24} />
  }
];

const Methodology: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(1);

  return (
    <section id="methodology" className="py-24 bg-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-bold text-sage-600 uppercase tracking-widest mb-2">Minha Abordagem</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                Terapia Cognitivo-Comportamental (TCC)
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                A TCC é uma abordagem prática, focada no presente e baseada em evidências científicas. Ela parte do princípio de que não são os fatos em si que nos afetam, mas sim a maneira como os interpretamos.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Diferente de terapias longas e abstratas, na TCC trabalhamos com metas claras e ferramentas que você pode aplicar no seu dia a dia desde a primeira semana.
              </p>
            </div>

            <a 
              href="#contact" 
              className="inline-flex items-center text-sage-700 font-bold hover:text-sage-800 border-b-2 border-sage-300 hover:border-sage-600 transition-all pb-1"
            >
              Entenda como funciona na prática
            </a>
          </div>

          {/* Interactive Steps */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-white/50">
            {steps.map((step, index) => (
              <div key={step.id} className="relative pb-8 last:pb-0">
                {/* Connecting Line */}
                {index !== steps.length - 1 && (
                  <div className="absolute top-12 left-6 h-full w-0.5 bg-sage-100"></div>
                )}

                <div className="relative flex items-start gap-4 cursor-pointer" onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}>
                  
                  {/* Icon Circle */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 z-10 ${activeStep === step.id ? 'bg-sage-600 text-white shadow-lg' : 'bg-sage-100 text-sage-400'}`}>
                    {step.icon}
                  </div>

                  <div className="flex-1 pt-2">
                    <div className="flex justify-between items-center mb-2">
                       <h4 className={`font-bold text-lg transition-colors ${activeStep === step.id ? 'text-sage-800' : 'text-slate-500'}`}>
                         {step.title}
                       </h4>
                       {activeStep === step.id ? <ChevronUp size={18} className="text-sage-500" /> : <ChevronDown size={18} className="text-slate-400" />}
                    </div>
                    
                    <AnimatePresence>
                      {activeStep === step.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-slate-600 leading-relaxed text-sm pb-4">
                            {step.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Methodology;