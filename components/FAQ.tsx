import React, { useState, useLayoutEffect, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqs } from '../data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FAQ: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-item", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".faq-list",
          start: "top 85%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="pt-0 pb-16 md:pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-serif font-bold text-center text-slate-900 mb-12">Dúvidas Comuns</h2>

        <div className="faq-list space-y-4">
          {faqs.map((item, idx) => (
            <div key={idx} className="faq-item border border-slate-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-800">{item.q}</span>
                {activeIdx === idx ? <ChevronUp className="text-primary-600" /> : <ChevronDown className="text-slate-400" />}
              </button>
              {activeIdx === idx && (
                <div className="bg-slate-50 px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 animate-fade-in-down">
                  <div className="pt-4">{item.a}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;