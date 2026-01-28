import React, { useLayoutEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import heroImg from '../assets/hero.png';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // --- 1. SETUPS INICIAIS ---
      gsap.set(".reveal-text", { y: "100%" });
      gsap.set(".reveal-opacity", { opacity: 0, y: 20 });
      gsap.set(".line-grow", { scaleX: 0, transformOrigin: "left" });

      // --- 2. ENTRADA (Abertura Coreografada) ---
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Tagline e Linha
      tl.to(".line-grow", { scaleX: 1, duration: 1.2, ease: "expo.inOut" })
        .from(".tagline-text", { opacity: 0, x: -20, duration: 1 }, "<0.2");

      // Título Principal (Stagger de linhas)
      tl.to(".reveal-text", {
        y: "0%",
        duration: 1.5,
        stagger: 0.15,
        ease: "expo.out" // "Lei da Inércia"
      }, "-=0.8");

      // Descrição e Botões
      tl.to(".reveal-opacity", {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1
      }, "-=1.0");

      // Imagem (Entrada suave)
      tl.from(imageRef.current, {
        opacity: 0,
        scale: 1.1,
        duration: 1.8,
        ease: "power2.out"
      }, "-=1.5");


      // --- 3. PARALLAX (Scroll Interaction) ---
      // Texto sobe um pouco mais rápido que o scroll (sensação de profundidade)
      gsap.to(textRef.current, {
        yPercent: -20, // Move 20% para cima
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      // Imagem move mais devagar/diferente (Parallax)
      gsap.to(imageRef.current, {
        yPercent: 15, // Move 15% para baixo enqto scrolla
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      // Badge Rotation
      gsap.to(badgeRef.current, {
        rotate: 360,
        duration: 20,
        repeat: -1,
        ease: "linear"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="home" className="relative w-full h-[100dvh] flex flex-col lg:flex-row bg-[#FDFCFB] overflow-hidden">

      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.35] pointer-events-none z-50 mix-blend-multiply"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E")` }}>
      </div>

      {/* LADO ESQUERDO: Conteúdo Tipográfico */}
      <div className="w-full lg:w-[55%] h-full flex flex-col justify-center px-6 sm:px-12 lg:pl-24 lg:pr-12 relative z-20 order-2 lg:order-1 pt-28 lg:pt-32">

        <div ref={textRef} className="relative flex flex-col justify-center h-full max-h-[90vh]">
          {/* Tagline com linha decorativa */}
          <div className="flex items-center gap-4 mb-6 overflow-hidden">
            <span className="line-grow h-[1px] w-12 bg-stone-900 block"></span>
            <span className="tagline-text text-xs md:text-sm font-bold text-stone-900 uppercase tracking-[0.3em]">Psicoterapia</span>
          </div>

          {/* Título Massivo */}
          <h1 className="font-serif text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.1] sm:leading-[0.9] text-stone-900 tracking-tight mb-6">
            <span className="block overflow-hidden pb-1">
              <span className="reveal-text block">Sua mente</span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span className="reveal-text block">merece um lugar</span>
            </span>
            <span className="block overflow-hidden pb-4 -mb-4">
              <span className="reveal-text block italic font-light text-stone-700 pl-1">seguro.</span>
            </span>
          </h1>

          <div className="reveal-opacity text-base text-stone-700 max-w-lg leading-relaxed mb-8 font-light space-y-3">
            <p>Sou <strong>Luiz Felipe Braziliano de Oliveira</strong>, psicólogo clínico (CRP 06/181948).</p>
            <p>Através da Terapia Cognitivo-Comportamental (TCC), ajudo você a entender seus padrões e construir caminhos mais saudáveis para lidar com os desafios.</p>
            <p className="font-medium text-stone-900 italic text-sm">O primeiro passo para a mudança é a decisão de não ficar como está.</p>
          </div>

          <div className="reveal-opacity flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center px-8 py-3.5 bg-stone-900 text-white rounded-full overflow-hidden transition-all hover:pr-12 shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10 text-xs font-bold uppercase tracking-widest">Agendar Sessão</span>
              <span className="absolute right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 z-10">
                <ArrowRight size={16} />
              </span>
              <div className="absolute inset-0 bg-stone-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></div>
            </a>

            <a
              href="#methodology"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-stone-200 text-stone-600 rounded-full hover:bg-stone-50 hover:border-stone-400 transition-all text-xs font-bold uppercase tracking-widest"
            >
              Conhecer Abordagem
            </a>
          </div>
        </div>
      </div>

      {/* LADO DIREITO: Imagem */}
      <div className="w-full lg:w-[45%] h-[40vh] lg:h-full relative order-1 lg:order-2 bg-stone-200 overflow-hidden">
        <div ref={imageRef} className="w-full h-[120%] relative -top-[10%]">
          <img
            src={heroImg}
            alt="Psicólogo Luiz Felipe"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply"></div>
        </div>

        {/* Badge Giratório */}
        <div className="absolute bottom-[-1px] left-[-1px] lg:top-auto lg:bottom-16 lg:-left-20 z-30 hidden lg:block">
          <div className="relative w-40 h-40 flex items-center justify-center pointer-events-none">
            <div ref={badgeRef} className="absolute inset-0 w-full h-full">
              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                <text className="font-serif text-[10px] font-medium uppercase tracking-[0.18em] fill-stone-800">
                  <textPath href="#circlePath" startOffset="0%">
                    • Psicoterapia Baseada em Evidências •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;