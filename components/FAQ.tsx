import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { q: "Como funciona a terapia online?", a: "A terapia online acontece por videochamada (Google Meet ou WhatsApp), com a mesma duração e eficácia da presencial. Você precisa apenas de um local privado e boa conexão." },
  { q: "Quanto tempo dura cada sessão?", a: "As sessões têm duração média de 50 minutos e ocorrem, geralmente, uma vez por semana." },
  { q: "A TCC serve para o meu caso?", a: "A TCC é indicada para diversos quadros como ansiedade, depressão e estresse, focando na resolução de problemas atuais. Na primeira sessão avaliaremos sua necessidade." },
  { q: "Aceita convênio?", a: "Atendo apenas particular, mas emito recibo para que você possa solicitar reembolso junto ao seu convênio." },
];

const FAQ: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-serif font-bold text-center text-slate-900 mb-12">Dúvidas Comuns</h2>
        
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
              <button 
                onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-800">{item.q}</span>
                {activeIdx === idx ? <ChevronUp className="text-primary-600" /> : <ChevronDown className="text-slate-400" />}
              </button>
              <AnimatePresence>
                {activeIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-slate-50 px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100"
                  >
                    <div className="pt-4">{item.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;