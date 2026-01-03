import React from 'react';
import { ArrowRight, Brain, HeartPulse, Battery, FileText, Monitor } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
                <h2 className="text-sm font-bold text-primary-600 uppercase tracking-widest mb-3">Áreas de Atuação</h2>
                <h3 className="text-3xl md:text-5xl font-serif font-medium text-stone-900 leading-tight">
                    Como posso te ajudar a construir uma vida melhor?
                </h3>
            </div>
            <a href="#contact" className="hidden md:flex items-center gap-2 text-stone-500 font-bold hover:text-primary-600 transition-colors">
                Ver disponibilidade <ArrowRight size={18} />
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Featured Card (Online Therapy) */}
            <div className="md:col-span-2 bg-stone-900 rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
               <div className="relative z-10 h-full flex flex-col justify-between">
                   <div className="mb-8">
                       <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                           <Monitor className="text-white" size={28} />
                       </div>
                       <h4 className="text-2xl md:text-3xl font-serif mb-4">Psicoterapia Online</h4>
                       <p className="text-stone-300 text-lg leading-relaxed max-w-lg">
                           Atendimento clínico via videochamada com a mesma eficácia e ética do presencial. Flexibilidade para cuidar de si onde estiver.
                       </p>
                   </div>
                   <div>
                       <a href="#contact" className="inline-block bg-white text-stone-900 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors">
                           Agendar Sessão
                       </a>
                   </div>
               </div>
            </div>

            {/* Service Cards */}
            <div className="bg-stone-50 rounded-[2rem] p-8 border border-stone-100 hover:border-primary-200 hover:shadow-soft transition-all group">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-primary-600 group-hover:scale-110 transition-transform">
                    <Brain size={24} />
                </div>
                <h5 className="font-bold text-xl mb-3 text-stone-900">Ansiedade & Pânico</h5>
                <p className="text-stone-500 leading-relaxed text-sm">
                    Tratamento focado em redução de sintomas, controle de crises e reestruturação cognitiva.
                </p>
            </div>

            <div className="bg-stone-50 rounded-[2rem] p-8 border border-stone-100 hover:border-primary-200 hover:shadow-soft transition-all group">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-rose-500 group-hover:scale-110 transition-transform">
                    <HeartPulse size={24} />
                </div>
                <h5 className="font-bold text-xl mb-3 text-stone-900">Depressão</h5>
                <p className="text-stone-500 leading-relaxed text-sm">
                    Ativação comportamental e ressignificação de crenças para retomar a vitalidade.
                </p>
            </div>

            <div className="bg-stone-50 rounded-[2rem] p-8 border border-stone-100 hover:border-primary-200 hover:shadow-soft transition-all group">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-amber-500 group-hover:scale-110 transition-transform">
                    <Battery size={24} />
                </div>
                <h5 className="font-bold text-xl mb-3 text-stone-900">Burnout</h5>
                <p className="text-stone-500 leading-relaxed text-sm">
                    Recuperação de esgotamento profissional e estabelecimento de limites saudáveis.
                </p>
            </div>

             <div className="bg-primary-50 rounded-[2rem] p-8 border border-primary-100 flex flex-col justify-center items-center text-center group cursor-pointer hover:bg-primary-100 transition-colors">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 text-primary-600">
                    <FileText size={24} />
                </div>
                <h5 className="font-bold text-lg text-primary-900">Ver Currículo Lattes</h5>
                <p className="text-primary-700/70 text-xs mt-2">Conheça minha formação acadêmica</p>
            </div>

        </div>

      </div>
    </section>
  );
};

export default Services;