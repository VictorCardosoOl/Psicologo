import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, HeartPulse, Battery, FileText, Monitor, ShieldCheck, Sparkles } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-white text-stone-900">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="max-w-2xl"
            >
                <div className="flex items-center gap-2 mb-3">
                    <Sparkles size={14} className="text-primary-600" />
                    <h2 className="text-xs font-bold text-primary-600 uppercase tracking-[0.2em]">Áreas de Atuação</h2>
                </div>
                <h3 className="text-4xl md:text-5xl font-serif font-medium text-stone-900 leading-[1.1]">
                    Caminhos para sua transformação
                </h3>
            </motion.div>
            <motion.div
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
            >
                <a 
                    href="#contact" 
                    className="hidden md:flex items-center gap-3 text-stone-500 text-sm font-bold uppercase tracking-wider hover:text-stone-900 transition-colors group border border-stone-200 px-6 py-3 rounded-full hover:bg-stone-50"
                >
                    Ver disponibilidade <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
            </motion.div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
            
            {/* Card Principal - Psicoterapia Online (Grande) */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="md:col-span-2 md:row-span-2 bg-stone-900 rounded-3xl p-10 md:p-14 text-white relative overflow-hidden group flex flex-col justify-between"
            >
               {/* Background Effects */}
               <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-900/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary-800/40 transition-colors duration-1000"></div>
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

               <div className="relative z-10">
                   <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/10 text-primary-300">
                       <Monitor size={28} strokeWidth={1.5} />
                   </div>
                   <h4 className="text-3xl md:text-4xl font-serif mb-4">Psicoterapia Online</h4>
                   <p className="text-stone-300 text-lg leading-relaxed max-w-lg font-light">
                       Quebre barreiras geográficas. Atendimento via videochamada com a mesma eficácia, ética e acolhimento do presencial. Ideal para quem busca flexibilidade sem abrir mão da qualidade.
                   </p>
               </div>
               
               <div className="relative z-10 mt-10 pt-8 border-t border-white/10 flex items-center justify-between">
                   <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-400">
                       <ShieldCheck size={16} /> Sigilo Garantido
                   </div>
                   <a href="#contact" className="bg-white text-stone-900 hover:bg-stone-200 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-colors">
                       Agendar Agora
                   </a>
               </div>
            </motion.div>

            {/* Card Ansiedade */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.1 }}
               className="bg-stone-50 rounded-3xl p-8 border border-stone-100 hover:border-stone-300 hover:shadow-lg transition-all duration-300 group flex flex-col"
            >
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-stone-400 group-hover:text-primary-600 transition-colors border border-stone-100">
                    <Brain size={24} strokeWidth={1.5} />
                </div>
                <h5 className="font-serif font-medium text-xl mb-2 text-stone-900">Ansiedade & TAG</h5>
                <p className="text-stone-500 leading-relaxed text-sm font-light flex-1">
                    Ferramentas práticas para desacelerar a mente e retomar o controle sobre pensamentos intrusivos.
                </p>
            </motion.div>

            {/* Card Depressão */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="bg-stone-50 rounded-3xl p-8 border border-stone-100 hover:border-stone-300 hover:shadow-lg transition-all duration-300 group flex flex-col"
            >
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-stone-400 group-hover:text-rose-500 transition-colors border border-stone-100">
                    <HeartPulse size={24} strokeWidth={1.5} />
                </div>
                <h5 className="font-serif font-medium text-xl mb-2 text-stone-900">Depressão</h5>
                <p className="text-stone-500 leading-relaxed text-sm font-light flex-1">
                    Ativação comportamental e reestruturação cognitiva para resgatar a vitalidade e o propósito.
                </p>
            </motion.div>

            {/* Card Burnout */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.3 }}
               className="bg-stone-50 rounded-3xl p-8 border border-stone-100 hover:border-stone-300 hover:shadow-lg transition-all duration-300 group flex flex-col"
            >
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-stone-400 group-hover:text-amber-500 transition-colors border border-stone-100">
                    <Battery size={24} strokeWidth={1.5} />
                </div>
                <h5 className="font-serif font-medium text-xl mb-2 text-stone-900">Burnout</h5>
                <p className="text-stone-500 leading-relaxed text-sm font-light flex-1">
                    Recuperação do esgotamento profissional e construção de limites saudáveis entre trabalho e vida.
                </p>
            </motion.div>

            {/* Card Lattes / Acadêmico */}
            <motion.a 
               href="#"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.4 }}
               className="md:col-span-2 bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8 border border-primary-100 flex flex-col md:flex-row items-center justify-between gap-6 group hover:shadow-md transition-all cursor-pointer"
            >
                <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary-600 shrink-0">
                        <FileText size={28} strokeWidth={1.5} />
                    </div>
                    <div>
                        <h5 className="font-serif font-medium text-xl text-primary-900 mb-1">Formação & Pesquisa</h5>
                        <p className="text-primary-800/60 text-sm leading-relaxed max-w-md">
                            Minha prática é embasada em evidências científicas e atualização constante. Clique para acessar meu Currículo Lattes.
                        </p>
                    </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-white border border-primary-100 flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors shrink-0">
                    <ArrowRight size={18} />
                </div>
            </motion.a>

        </div>

      </div>
    </section>
  );
};

export default Services;