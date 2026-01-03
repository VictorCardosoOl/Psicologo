import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '../data';

const FAQ: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section className="pt-0 pb-16 md:pb-20 bg-white">
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