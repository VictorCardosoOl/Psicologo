import React from 'react';
import { motion } from 'framer-motion';
import { Search, HelpCircle, RefreshCw, Brain, Sparkles } from 'lucide-react';

const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="py-32 bg-stone-50 relative overflow-hidden">
      
      {/* Elemento Decorativo de Fundo */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent opacity-50"></div>

      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        
        {/* Intro Section: Psychotherapy & Mental Health */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 mb-32 items-start">
          
          {/* Left: How it works */}
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="space-y-8"
          >
            <div>
                <span className="block text-xs font-bold text-primary-600 uppercase tracking-[0.2em] mb-4">A Prática Clínica</span>
                <h2 className="text-4xl md:text-5xl font-serif font-medium text-stone-900 leading-tight">
                Como funciona a psicoterapia?
                </h2>
            </div>
            
            <div className="text-stone-600 text-lg leading-relaxed font-light space-y-6">
              <p>
                A psicoterapia é um espaço seguro e confidencial para cuidar da sua saúde emocional. Durante os atendimentos, você é convidado(a) a falar sobre suas experiências, sentimentos, pensamentos e comportamentos, no seu tempo e do seu jeito.
              </p>
              <p>
                Com base em uma abordagem acolhedora e científica, como a <strong className="font-semibold text-stone-800">Terapia Cognitivo-Comportamental (TCC)</strong>, vamos construindo juntos um caminho de autoconhecimento, enfrentamento de dificuldades e desenvolvimento de novas formas de lidar com a vida.
              </p>
              <p className="text-sm text-stone-500 border-l-2 border-primary-200 pl-4 mt-4">
                Cada sessão tem cerca de 50 minutos, e a frequência costuma ser semanal. O processo é único, respeitando sua história, seus valores e suas necessidades.
              </p>
            </div>
          </motion.div>

          {/* Right: Importance */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
             className="bg-white p-10 md:p-12 rounded-[2rem] shadow-soft border border-stone-100 relative overflow-hidden group"
          >
             <div className="absolute top-0 right-0 p-12 opacity-[0.03] text-stone-900 group-hover:scale-110 transition-transform duration-1000">
                 <Sparkles size={180} strokeWidth={1} />
             </div>
             
            <h2 className="text-3xl font-serif font-medium text-stone-900 mb-8 relative z-10">
              A importância de cuidar da saúde mental
            </h2>
            <div className="text-stone-600 leading-relaxed space-y-6 relative z-10 font-light">
              <p>
                Cuidar da saúde mental é tão essencial quanto cuidar da saúde física. Vivemos em um mundo acelerado, e é natural que, em algum momento, nos sintamos sobrecarregados.
              </p>
              <p>
                A saúde mental diz respeito à forma como pensamos, sentimos e agimos. Ela influencia nossos relacionamentos, decisões e bem-estar.
              </p>
              <p>
                Durante o processo terapêutico, com base em métodos cientificamente validados, você aprende a identificar padrões que podem estar te limitando, construindo formas mais saudáveis de viver.
              </p>
              
              <div className="pt-8 mt-4">
                <p className="text-stone-900 font-serif italic text-lg">
                  "Ao escolher cuidar da sua saúde mental, você está investindo em sua própria liberdade."
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* TCC Pillars Section */}
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-100 text-stone-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
            >
                <Brain size={14} /> Metodologia TCC
            </motion.div>
            <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-serif font-medium text-stone-900 mb-6"
            >
                Os 3 Pilares do Processo
            </motion.h3>
            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-stone-500 text-lg font-light max-w-2xl mx-auto"
            >
                A Terapia Cognitivo-Comportamental é prática e colaborativa. Trabalhamos juntos nestas três etapas para transformar sua realidade:
            </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {[
                { 
                    icon: <Search size={24} />, 
                    title: "1. Identificar", 
                    text: "Mapeamos os pensamentos automáticos e emoções que surgem em situações difíceis. Entendemos o 'porquê' do que você sente." 
                },
                { 
                    icon: <HelpCircle size={24} />, 
                    title: "2. Questionar", 
                    text: "Colocamos à prova esses pensamentos. Eles são fatos ou interpretações? Flexibilizamos sua forma de ver o mundo.",
                    delay: 0.2
                },
                { 
                    icon: <RefreshCw size={24} />, 
                    title: "3. Transformar", 
                    text: "Desenvolvemos novos comportamentos. A mudança sai do consultório e entra na sua vida prática, gerando autonomia.",
                    delay: 0.4
                }
            ].map((item, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: item.delay, duration: 0.8 }}
                    className="bg-white p-10 rounded-[2rem] shadow-sm border border-stone-100 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group"
                >
                    <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center text-stone-400 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-500 mb-8">
                    {item.icon}
                    </div>
                    <h4 className="text-xl font-serif font-medium text-stone-900 mb-4">{item.title}</h4>
                    <p className="text-stone-500 leading-relaxed text-sm font-light">
                    {item.text}
                    </p>
                </motion.div>
            ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Methodology;