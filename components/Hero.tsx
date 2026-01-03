import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  // Parallax sutil na imagem e no texto
  const yText = useTransform(scrollY, [0, 500], [0, 100]);
  const yImage = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <section id="home" className="relative w-full h-[100dvh] flex flex-col lg:flex-row bg-[#FDFCFB] overflow-hidden">
      
      {/* Texture Overlay (Granulação Fina) */}
      <div className="absolute inset-0 opacity-[0.35] pointer-events-none z-50 mix-blend-multiply" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E")` }}>
      </div>

      {/* LADO ESQUERDO: Conteúdo Tipográfico */}
      <div className="w-full lg:w-[55%] h-full flex flex-col justify-center px-6 sm:px-12 lg:pl-24 lg:pr-12 relative z-20 order-2 lg:order-1 pt-12 lg:pt-0">
        
        <motion.div style={{ y: yText }} className="relative">
            {/* Tagline com linha decorativa */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-4 mb-6 md:mb-8"
            >
              <span className="h-[1px] w-12 bg-stone-900"></span>
              <span className="text-xs md:text-sm font-bold text-stone-900 uppercase tracking-[0.3em]">Psicologia Clínica</span>
            </motion.div>

            {/* Título Massivo - Estilo Editorial */}
            <h1 className="font-serif text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] leading-[0.95] text-stone-900 tracking-tight mb-8">
              <span className="block overflow-hidden pb-1">
                <motion.span 
                  initial={{ y: "100%" }} 
                  animate={{ y: 0 }} 
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  Sua mente
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-1">
                <motion.span 
                  initial={{ y: "100%" }} 
                  animate={{ y: 0 }} 
                  transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  merece um lugar
                </motion.span>
              </span>
              {/* CORREÇÃO AQUI: pb-4 md:pb-6 cria espaço para o 'g' não ser cortado, -mb compensa o espaço extra */}
              <span className="block overflow-hidden pb-4 md:pb-6 -mb-4 md:-mb-6">
                <motion.span 
                  initial={{ y: "100%" }} 
                  animate={{ y: 0 }} 
                  transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="block italic font-light text-stone-600 pl-1" // pl-1 previne corte lateral em itálico
                >
                  seguro.
                </motion.span>
              </span>
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-base md:text-lg text-stone-600 max-w-md leading-relaxed mb-10 font-light"
            >
              Sou <strong>Luiz Felipe Braziliano</strong>. Utilizo a Terapia Cognitivo-Comportamental para transformar vulnerabilidade em autonomia e autoconhecimento.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-5"
            >
              <a 
                href="#contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-stone-900 text-white rounded-full overflow-hidden transition-all hover:pr-12 shadow-lg hover:shadow-xl"
              >
                <span className="relative z-10 text-xs font-bold uppercase tracking-widest">Agendar Sessão</span>
                <span className="absolute right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 z-10">
                  <ArrowRight size={16} />
                </span>
                <div className="absolute inset-0 bg-stone-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></div>
              </a>
              
              <a 
                href="#methodology"
                className="inline-flex items-center justify-center px-8 py-4 border border-stone-200 text-stone-600 rounded-full hover:bg-stone-50 hover:border-stone-400 transition-all text-xs font-bold uppercase tracking-widest"
              >
                Conhecer Abordagem
              </a>
            </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-6 lg:left-24 hidden md:flex items-center gap-3"
        >
          <div className="w-px h-12 bg-stone-300 relative overflow-hidden">
             <motion.div 
                animate={{ y: [0, 48, 48] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "circIn" }}
                className="absolute top-0 left-0 w-full h-1/2 bg-stone-900"
             ></motion.div>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Scroll</span>
        </motion.div>
      </div>

      {/* LADO DIREITO: Imagem Full Height */}
      <div className="w-full lg:w-[45%] h-[45vh] lg:h-full relative order-1 lg:order-2 overflow-hidden bg-stone-200">
        <motion.div style={{ y: yImage }} className="w-full h-[120%] relative -top-[10%]">
             <img 
               src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop" 
               alt="Psicólogo Luiz Felipe" 
               className="w-full h-full object-cover object-top"
             />
             <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply"></div>
        </motion.div>

        {/* Badge Giratório "Awards Style" - Posicionado na interseção */}
        <div className="absolute bottom-[-1px] left-[-1px] lg:top-auto lg:bottom-12 lg:-left-16 z-30 hidden lg:block">
           <div className="relative w-32 h-32 flex items-center justify-center">
              {/* Texto Circular (SVG) */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                className="absolute inset-0 w-full h-full"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                  <text className="text-[11px] font-bold uppercase tracking-[0.15em] fill-stone-900">
                    <textPath href="#circlePath" startOffset="0%">
                      Psicologia Clínica • Terapia Cognitivo Comportamental •
                    </textPath>
                  </text>
                </svg>
              </motion.div>
              {/* Seta Central */}
              <div className="bg-stone-50 rounded-full w-12 h-12 flex items-center justify-center shadow-md z-10">
                 <ArrowDown className="text-stone-900 w-5 h-5 animate-bounce" />
              </div>
           </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;