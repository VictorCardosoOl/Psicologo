import React, { useLayoutEffect, useRef } from 'react';
import { Search, HelpCircle, RefreshCw, Brain, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Methodology: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Intro Reveal
      gsap.from(".reveal-text", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".intro-trigger",
          start: "top bottom", // Immediate
        }
      });

      // Right Card Parallax
      gsap.from(".card-parallax", {
        x: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".intro-trigger",
          start: "top bottom", // Immediate
        }
      });

      // Pillars Stagger
      gsap.fromTo(".pillar-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".pillars-trigger",
            start: "top bottom", // Immediate
          }
        }
      );

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="methodology" className="py-16 md:py-24 bg-stone-50 relative overflow-hidden">

      {/* Elemento Decorativo de Fundo */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent opacity-50"></div>

      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 relative">

        {/* Intro Section: Psychotherapy & Mental Health */}
        <div className="intro-trigger grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 mb-20 items-start">

          {/* Left: How it works */}
          <div className="space-y-8">
            <div className="reveal-text">
              <span className="block text-xs font-bold text-primary-600 uppercase tracking-[0.2em] mb-4">A Prática Clínica</span>
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-stone-900 leading-tight">
                Como funciona a <br /><span className="italic text-primary-700">psicoterapia?</span>
              </h2>
            </div>

            <div className="text-stone-600 text-lg leading-relaxed font-light space-y-6">
              <p className="reveal-text">
                A psicoterapia é, antes de tudo, um encontro humano. Um espaço seguro e confidencial desenhado para acolher sua história e validar suas experiências, sem julgamentos.
              </p>
              <p className="reveal-text">
                Utilizo a <strong className="font-medium text-stone-900">Terapia Cognitivo-Comportamental (TCC)</strong> como base. Esta é uma abordagem ativa e cientificamente validada, onde trabalhamos de forma colaborativa para entender como seus pensamentos influenciam suas emoções e comportamentos.
              </p>
              <div className="reveal-text flex items-start gap-4 pt-4">
                <div className="w-1 h-12 bg-primary-300 rounded-full"></div>
                <p className="text-stone-500 text-sm italic">
                  "O objetivo não é apenas aliviar o sofrimento, mas construir autonomia para que você se torne seu próprio terapeuta."
                </p>
              </div>
            </div>
          </div>

          {/* Right: Importance */}
          <div className="card-parallax bg-white p-10 md:p-12 rounded-[2.5rem] shadow-2xl shadow-stone-200/50 border border-stone-100/50 relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-50 rounded-full blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-1000 ease-in-out"></div>

            <div className="absolute top-12 right-12 opacity-[0.05] text-stone-900 group-hover:rotate-12 transition-transform duration-700">
              <Sparkles size={120} strokeWidth={0.5} />
            </div>

            <h2 className="text-3xl font-serif font-medium text-stone-900 mb-8 relative z-10 leading-snug">
              Por que cuidar da <br /><span className="text-primary-600">saúde mental?</span>
            </h2>
            <div className="text-stone-600 leading-relaxed space-y-6 relative z-10 font-light text-lg">
              <p>
                A mente não é separada do corpo. O estresse, a ansiedade e a tristeza afetam nossa imunidade, sono e disposição. Cuidar da mente é um ato de autopreservação.
              </p>
              <p>
                Muitas vezes, carregamos pesos que não precisamos carregar sozinhos. A terapia oferece ferramentas para aliviar essa carga, permitindo que você tome decisões mais alinhadas com quem você realmente é.
              </p>

              <div className="pt-8 mt-4 border-t border-stone-100">
                <p className="text-stone-800 font-serif italic text-xl">
                  "Investir em si mesmo é o único investimento que oferece retorno garantido para toda a vida."
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* TCC Pillars Section */}
        <div className="pillars-trigger max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-100 text-stone-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              <Brain size={14} /> Metodologia TCC
            </div>
            <h3 className="text-4xl md:text-5xl font-serif font-medium text-stone-900 mb-6">
              Os 3 Pilares do Processo
            </h3>
            <p className="text-stone-500 text-lg font-light max-w-2xl mx-auto">
              A Terapia Cognitivo-Comportamental é prática e colaborativa. Trabalhamos juntos nestas três etapas para transformar sua realidade:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {[
              {
                icon: <Search size={28} strokeWidth={1.5} />,
                title: "1. Identificar",
                text: "Mapeamos os pensamentos automáticos e padrões emocionais. Trazemos luz ao que antes era invisível em sua rotina."
              },
              {
                icon: <HelpCircle size={28} strokeWidth={1.5} />,
                title: "2. Compreender",
                text: "Investigamos a origem desses padrões. Eles são fatos ou interpretações? Entender é o primeiro passo para mudar.",
                delay: 0.2
              },
              {
                icon: <RefreshCw size={28} strokeWidth={1.5} />,
                title: "3. Ressignificar",
                text: "Construímos novas respostas e comportamentos. A mudança se consolida na prática, gerando mais leveza e autonomia.",
                delay: 0.4
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="pillar-item bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100 flex flex-col items-center text-center hover:shadow-2xl hover:shadow-stone-200/50 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center text-stone-400 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors duration-500 mb-6">
                  {item.icon}
                </div>
                <h4 className="text-xl font-serif font-medium text-stone-900 mb-4">{item.title}</h4>
                <p className="text-stone-500 leading-relaxed text-base font-light">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Methodology;