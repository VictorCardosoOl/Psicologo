import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, HeartPulse, Battery, FileText, Monitor } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-white text-stone-900 border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="max-w-2xl"
            >
                <h2 className="text-xs font-bold text-primary-600 uppercase tracking-[0.2em] mb-4">Áreas de Atuação</h2>
                <h3 className="text-4xl md:text-5xl font-serif font-medium text-stone-900 leading-tight">
                    Como posso te ajudar a construir uma vida melhor?
                </h3>
            </motion.div>
            <motion.a 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                href="#contact" 
                className="hidden md:flex items-center gap-3 text-stone-400 text-sm font-bold uppercase tracking-wider hover:text-stone-900 transition-colors group"
            >
                Ver disponibilidade <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Featured Card (Online Therapy) */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="md:col-span-2 bg-stone-900 rounded-[2.5rem] p-10 md:p-14 text-white relative overflow-hidden group"
            >
               <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600 rounded-full blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity duration-1000"></div>
               <div className="relative z-10 h-full flex flex-col justify-between items-start">
                   <div className="mb-10">
                       <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/10">
                           <Monitor className="text-white" size={32} strokeWidth={1.5} />
                       </div>
                       <h4 className="text-3xl md:text-4xl font-serif mb-6">Psicoterapia Online</h4>
                       <p className="text-stone-300 text-lg leading-relaxed max-w-lg font-light">
                           Atendimento clínico via videochamada com a mesma eficácia e ética do presencial. Flexibilidade para cuidar de si onde estiver, com total sigilo.
                       </p>
                   </div>
                   <div>
                       <a href="#contact" className="inline-block bg-white text-stone-900 text-sm font-bold uppercase tracking-wider px-10 py-5 rounded-2xl hover:bg-stone-200 transition-colors">
                           Agendar Sessão
                       </a>
                   </div>
               </div>
            </motion.div>

            {/* Service Cards Staggered */}
            <div className="space-y-8 flex flex-col h-full">
                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.8, delay: 0.2 }}
                   className="flex-1 bg-stone-50 rounded-[2.5rem] p-10 border border-stone-100 hover:border-stone-300 hover:shadow-lg transition-all duration-500 group"
                >
                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-stone-400 group-hover:text-primary-600 transition-colors">
                        <Brain size={24} strokeWidth={1.5} />
                    </div>
                    <h5 className="font-serif font-medium text-2xl mb-3 text-stone-900">Ansiedade & Pânico</h5>
                    <p className="text-stone-500 leading-relaxed text-sm font-light">
                        Tratamento focado em redução de sintomas, controle de crises e reestruturação cognitiva.
                    </p>
                </motion.div>

                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.8, delay: 0.3 }}
                   className="flex-1 bg-stone-50 rounded-[2.5rem] p-10 border border-stone-100 hover:border-stone-300 hover:shadow-lg transition-all duration-500 group"
                >
                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-stone-400 group-hover:text-rose-500 transition-colors">
                        <HeartPulse size={24} strokeWidth={1.5} />
                    </div>
                    <h5 className="font-serif font-medium text-2xl mb-3 text-stone-900">Depressão</h5>
                    <p className="text-stone-500 leading-relaxed text-sm font-light">
                        Ativação comportamental e ressignificação de crenças para retomar a vitalidade.
                    </p>
                </motion.div>
            </div>

        </div>

        {/* Secondary Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="bg-stone-50 rounded-[2.5rem] p-10 border border-stone-100 hover:border-stone-300 hover:shadow-lg transition-all duration-500 group"
            >
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-stone-400 group-hover:text-amber-500 transition-colors">
                    <Battery size={24} strokeWidth={1.5} />
                </div>
                <h5 className="font-serif font-medium text-2xl mb-3 text-stone-900">Burnout</h5>
                <p className="text-stone-500 leading-relaxed text-sm font-light">
                    Recuperação de esgotamento profissional e estabelecimento de limites saudáveis.
                </p>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.5 }}
               className="md:col-span-2 bg-primary-50 rounded-[2.5rem] p-10 border border-primary-100 flex flex-col md:flex-row items-center justify-between gap-8 group cursor-pointer hover:bg-primary-100 transition-colors duration-500"
            >
                <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary-600">
                        <FileText size={32} strokeWidth={1.5} />
                    </div>
                    <div>
                        <h5 className="font-serif font-medium text-2xl text-primary-900 mb-1">Ver Currículo Lattes</h5>
                        <p className="text-primary-700/70 text-sm font-medium">Aprofunde-se na minha formação acadêmica e pesquisas.</p>
                    </div>
                </div>
                <div className="w-12 h-12 rounded-full border border-primary-200 flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    <ArrowRight size={20} />
                </div>
            </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Services;