import React from 'react';
import { motion } from 'framer-motion';
import { CloudRain, Wind, Zap, Users, Brain, Activity } from 'lucide-react';
import { AnxietyType } from '../types';

const anxietyTypes: AnxietyType[] = [
  {
    title: "Ansiedade Generalizada (TAG)",
    shortDesc: "Preocupação excessiva e persistente.",
    symptoms: ["Tensão muscular constante", "Irritabilidade", "Dificuldade para dormir", "Fadiga excessiva"],
    icon: <CloudRain size={32} />
  },
  {
    title: "Fobia Social",
    shortDesc: "Medo intenso de interações sociais.",
    symptoms: ["Medo de julgamento", "Evitação de eventos sociais", "Taquicardia em público", "Medo de falar"],
    icon: <Users size={32} />
  },
  {
    title: "Síndrome do Pânico",
    shortDesc: "Crises repentinas de medo intenso.",
    symptoms: ["Sensação de morte iminente", "Falta de ar", "Tontura", "Despersonalização"],
    icon: <Zap size={32} />
  },
  {
    title: "Burnout",
    shortDesc: "Esgotamento profissional extremo.",
    symptoms: ["Cansaço mental", "Desmotivação", "Cinismo", "Queda de rendimento"],
    icon: <Activity size={32} />
  }
];

const AnxietySection: React.FC = () => {
  return (
    <section id="anxiety" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-sage-600 uppercase tracking-widest mb-2">Identificando Sintomas</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
              Você não precisa carregar o peso da ansiedade sozinho.
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              A ansiedade se manifesta de formas diferentes para cada pessoa. 
              Identificar os sinais é o primeiro passo para retomar o controle.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {anxietyTypes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-80 perspective"
            >
              <div className="absolute inset-0 bg-sand-50 rounded-2xl p-8 transition-all duration-500 group-hover:bg-sage-600 border border-sand-200 group-hover:border-sage-600 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-xl overflow-hidden">
                
                {/* Default State */}
                <div className="group-hover:opacity-0 group-hover:-translate-y-10 transition-all duration-500 absolute inset-0 flex flex-col items-center justify-center p-6">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-sage-600 mb-6 shadow-sm">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h4>
                  <p className="text-slate-500 text-sm">{item.shortDesc}</p>
                  <div className="mt-6 text-sage-600 text-xs font-bold uppercase tracking-wider">Passe o mouse</div>
                </div>

                {/* Hover State */}
                <div className="opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 absolute inset-0 p-8 flex flex-col items-start justify-center text-left">
                  <h4 className="text-white font-bold text-lg mb-4">{item.title}</h4>
                  <ul className="space-y-2 mb-6">
                    {item.symptoms.map((s, i) => (
                      <li key={i} className="text-sage-100 text-sm flex items-start">
                        <span className="mr-2">•</span> {s}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="text-white text-xs font-bold underline decoration-sage-300 underline-offset-4 hover:text-sage-100">
                    Buscar ajuda para isso
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Mini Quiz CTA */}
        <div className="mt-16 text-center">
           <motion.div 
             whileHover={{ scale: 1.02 }}
             className="inline-block p-1 bg-gradient-to-r from-sage-200 to-sand-200 rounded-full"
           >
             <button onClick={() => document.getElementById('chat-trigger')?.click()} className="px-8 py-3 bg-white rounded-full text-slate-700 font-medium hover:bg-slate-50 transition-colors flex items-center gap-2">
               <Brain size={18} className="text-sage-600" />
               Não tem certeza do que sente? Converse com a Sofia
             </button>
           </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AnxietySection;