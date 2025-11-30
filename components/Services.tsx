import React from 'react';
import { Laptop, Brain, HeartPulse, Battery, FileText, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary-400 uppercase tracking-widest mb-2">Serviços e Especialidades</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Como posso ajudar você hoje?
          </h3>
        </div>

        {/* Main Service Highlight */}
        <div className="bg-slate-800 rounded-3xl p-8 md:p-12 border border-slate-700 mb-16 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
           <div className="bg-primary-600 p-6 rounded-2xl shrink-0">
              <Laptop size={48} className="text-white" />
           </div>
           <div className="flex-1">
              <h4 className="text-2xl font-bold mb-3">Psicoterapia Individual (Online)</h4>
              <p className="text-slate-300 leading-relaxed text-lg">
                 Atendimento psicológico realizado através de videochamada segura (Google Meet, Zoom ou WhatsApp). 
                 Ideal para quem busca flexibilidade, conforto e economia de tempo, mantendo a mesma eficácia do presencial.
              </p>
           </div>
           <div>
              <a href="#contact" className="inline-block bg-white text-slate-900 font-bold px-6 py-3 rounded-xl hover:bg-slate-200 transition-colors">
                 Agendar Sessão
              </a>
           </div>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
           {[
             { title: "Ansiedade", icon: <Brain />, desc: "TAG, Fobia Social e Pânico." },
             { title: "Depressão", icon: <HeartPulse />, desc: "Tristeza persistente e desânimo." },
             { title: "Burnout", icon: <Battery />, desc: "Esgotamento profissional." },
             { title: "Regulação Emocional", icon: <FileText />, desc: "Lidar com emoções intensas." }
           ].map((s, i) => (
             <div key={i} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-primary-500 transition-colors group">
                <div className="text-primary-400 mb-4 group-hover:scale-110 transition-transform origin-left">{s.icon}</div>
                <h5 className="font-bold text-lg mb-2">{s.title}</h5>
                <p className="text-slate-400 text-sm">{s.desc}</p>
             </div>
           ))}
        </div>

        {/* CTA & Lattes */}
        <div className="text-center space-y-8">
           <p className="text-xl md:text-2xl font-serif text-slate-200">
             "Pronto para começar? Vamos conversar sobre como a TCC pode transformar sua rotina."
           </p>
           
           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact" className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-primary-900/50 flex items-center gap-2">
                 Agendar minha conversa <ArrowRight size={18} />
              </a>
              <a href="#" className="px-8 py-4 border border-slate-600 hover:border-white text-slate-300 hover:text-white font-bold rounded-xl transition-all">
                 Ver Currículo Lattes
              </a>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Services;