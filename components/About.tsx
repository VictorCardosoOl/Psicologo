import React, { useState, useLayoutEffect, useRef } from 'react';
import { ChevronDown, ChevronUp, Award, BookOpen, GraduationCap } from 'lucide-react';
import aboutImg from '../assets/about.jpeg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // Text Reveal
      gsap.from(".reveal-text", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".text-trigger",
          start: "top 90%", // 80 -> 90
        }
      });

      // Credentials Reveal
      gsap.from(".credential-item", {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: ".credentials-trigger",
          start: "top 95%", // 90 -> 95 (very eager)
        }
      });

      // Image Reveal (Opacity & Scale)
      gsap.fromTo(".image-parallax",
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".image-trigger",
            start: "top 85%",
          }
        }
      );

      // Image Parallax (Movement only)
      gsap.fromTo(".image-parallax",
        { yPercent: 5 },
        {
          yPercent: -5,
          ease: "none",
          scrollTrigger: {
            trigger: ".image-trigger",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        }
      );

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="about" className="pt-16 md:pt-20 pb-2 bg-white">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Content (Left) */}
          <div className="text-trigger lg:col-span-7 space-y-10">
            <div>
              <h2 className="reveal-text text-xs font-bold text-primary-600 uppercase tracking-[0.2em] mb-4">O Profissional</h2>
              <h3 className="reveal-text text-4xl md:text-5xl font-serif font-medium text-stone-900 mb-2">
                Luiz Felipe Braziliano
              </h3>
              <p className="reveal-text text-stone-400 font-serif italic text-xl">Psicólogo Clínico - CRP 06/181948</p>
            </div>

            <div className="text-lg text-stone-600 leading-relaxed font-light space-y-6">
              <p className="reveal-text">
                A terapia é muito mais do que apenas desabafo; é um espaço de <span className="text-stone-900 font-medium">construção e transformação</span>.
                Sou formado em Psicologia pela Uninove (2021) e pós-graduando em Terapia Cognitivo-Comportamental (TCC) pelo CETCC, uma das principais referências na área.
              </p>
              <p className="reveal-text">
                Minha atuação é voltada para adolescentes, adultos e idosos, com foco em ansiedade, depressão, regulação emocional e transtornos alimentares.
              </p>

              {isExpanded && (
                <div className="overflow-hidden space-y-6 animate-fade-in-down">
                  <p>
                    Minha missão é desmistificar a psicologia e oferecer ferramentas práticas para que cada paciente possa se tornar, eventualmente, seu próprio terapeuta. Acredito na autonomia e no poder de transformação através do autoconhecimento guiado por evidências.
                  </p>
                  <p>
                    Valorizo atividades que me ajudam a manter equilíbrio emocional, físico e mental, como atividades físicas, leituras, filmes e documentários que ampliam minha visão de mundo, o que também enriquece e embasa minha prática clínica.
                  </p>
                </div>
              )}
            </div>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="group flex items-center gap-2 text-stone-900 text-sm font-bold uppercase tracking-wider hover:text-primary-600 transition-colors pt-4"
            >
              {isExpanded ? 'Ler menos' : 'Conhecer minha história completa'}
              {isExpanded ?
                <ChevronUp size={16} className="group-hover:-translate-y-1 transition-transform" /> :
                <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" />
              }
            </button>

            {/* Credentials - Minimalist */}
            <div className="credentials-trigger grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-stone-100">
              <div className="credential-item p-6 bg-stone-50 rounded-2xl hover:bg-stone-100 transition-colors">
                <Award className="text-stone-400 mb-4" size={24} strokeWidth={1.5} />
                <div className="font-serif font-bold text-stone-900 text-lg">CRP 06/181948</div>
                <div className="text-xs text-stone-500 uppercase tracking-wider mt-1">Psicólogo Clínico</div>
              </div>
              <div className="credential-item p-6 bg-stone-50 rounded-2xl hover:bg-stone-100 transition-colors">
                <GraduationCap className="text-stone-400 mb-4" size={24} strokeWidth={1.5} />
                <div className="font-serif font-bold text-stone-900 text-lg">Especialista</div>
                <div className="text-xs text-stone-500 uppercase tracking-wider mt-1">Pós em TCC pelo CETCC</div>
              </div>
              <div className="credential-item p-6 bg-stone-50 rounded-2xl hover:bg-stone-100 transition-colors">
                <BookOpen className="text-stone-400 mb-4" size={24} strokeWidth={1.5} />
                <div className="font-serif font-bold text-stone-900 text-lg">Uninove</div>
                <div className="text-xs text-stone-500 uppercase tracking-wider mt-1">Bacharelado 2021</div>
              </div>
            </div>
          </div>

          {/* Image (Right) */}
          <div className="image-trigger lg:col-span-5 relative flex justify-center">
            <div className="absolute inset-0 bg-stone-100 rounded-[2rem] transform translate-x-4 translate-y-4 -z-10 max-w-md mx-auto h-full"></div>
            <img
              src={aboutImg}
              alt="Luiz Felipe no escritório"
              className="image-parallax relative rounded-[2rem] shadow-xl w-full max-w-md h-auto object-cover" // Removed grayscale, added max-w-md
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;