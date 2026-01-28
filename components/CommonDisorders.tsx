import React, { useState, useLayoutEffect, useRef } from 'react';
import { ArrowDown, Activity, BrainCircuit, Battery, CloudRain, AlertCircle, ArrowRight, Moon, Clock, HeartHandshake } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { scenarios } from '../data';

gsap.registerPlugin(ScrollTrigger);

const CommonDisorders: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  // Estado inicial null garante que todos comecem minimizados
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(5);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".reveal-header", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".header-trigger",
          start: "top 80%",
        }
      });

      // List Items Animation
      gsap.from(".disorder-item", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".list-trigger",
          start: "top 85%",
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, [visibleCount]); // Re-run if visible items change

  const toggleOpen = (id: string) => {
    // Se clicar no já aberto, fecha (null). Se clicar em outro, abre o novo.
    setSelectedId(selectedId === id ? null : id);
  };

  const showMore = () => {
    setVisibleCount(prev => Math.min(prev + 5, scenarios.length));
  };

  const showLess = () => {
    setVisibleCount(5);
    // Opcional: rolar de volta para o topo da lista se desejar
    const section = document.getElementById('sinais');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  const getIcon = (id: string) => {
    switch (id) {
      case 'tag': return <BrainCircuit size={48} strokeWidth={1} />;
      case 'panic': return <Activity size={48} strokeWidth={1} />;
      case 'depression': return <CloudRain size={48} strokeWidth={1} />;
      case 'insomnia': return <Moon size={48} strokeWidth={1} />;
      case 'procrastination': return <Clock size={48} strokeWidth={1} />;
      case 'emotional_dependence': return <HeartHandshake size={48} strokeWidth={1} />;
      case 'burnout': return <Battery size={48} strokeWidth={1} />;
      default: return <AlertCircle size={48} strokeWidth={1} />;
    }
  };

  const visibleScenarios = scenarios.slice(0, visibleCount);

  return (
    <section ref={containerRef} id="sinais" className="py-16 md:py-20 bg-stone-50">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Cabeçalho da Seção */}
        <div className="header-trigger mb-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8 reveal-header">
            <h2 className="text-xs font-bold text-primary-600 uppercase tracking-[0.2em] mb-4">Identificação de Sintomas</h2>
            <h3 className="text-4xl md:text-6xl font-serif font-medium text-stone-900 leading-[1.1]">
              O que sua mente diz?
            </h3>
          </div>
          <div className="md:col-span-4 text-stone-500 text-sm leading-relaxed md:text-right font-medium reveal-header">
            <p>Abaixo estão frases comuns de quem busca ajuda.</p>
            <p>Clique para expandir e entender o contexto.</p>
          </div>
        </div>

        {/* Lista Accordion Editorial - Linha Superior Mestra */}
        <div className="list-trigger border-t border-stone-300">
          {visibleScenarios.map((scenario, index) => {
            const isOpen = selectedId === scenario.id;
            const itemNumber = (index + 1).toString().padStart(2, '0');

            return (
              <div
                key={scenario.id}
                className="disorder-item border-b border-stone-300 group"
              >

                {/* Botão Gatilho (Trigger) - Sempre visível */}
                <button
                  onClick={() => toggleOpen(scenario.id)}
                  className="w-full py-6 flex items-start md:items-center justify-between gap-6 text-left focus:outline-none transition-all duration-300 hover:bg-stone-100/50"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 flex-1">

                    {/* Coluna 1: Indicadores (Número e Status) */}
                    <div className="flex items-center gap-4 min-w-[80px] md:min-w-[100px]">
                      <span className={`text-sm font-bold tracking-wider transition-colors duration-300 ${isOpen ? 'text-primary-600' : 'text-stone-300 group-hover:text-stone-400'}`}>
                        {itemNumber}
                      </span>
                      <div className={`h-px flex-1 transition-all duration-500 ${isOpen ? 'bg-primary-600 w-8' : 'bg-stone-300 w-0 group-hover:w-4'}`}></div>
                    </div>

                    {/* Coluna 2: A Pergunta/Frase (Texto Principal) */}
                    <h4 className={`text-lg md:text-2xl font-serif font-medium leading-tight transition-colors duration-300 ${isOpen ? 'text-stone-900' : 'text-stone-500 group-hover:text-stone-800'}`}>
                      {scenario.triggerPhrase}
                    </h4>
                  </div>

                  {/* Coluna 3: Ícone de Ação (Seta) */}
                  <div className={`relative w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-300 ml-4 shrink-0
                        ${isOpen ? 'border-stone-900 bg-stone-900 text-white rotate-180' : 'border-stone-300 text-stone-400 group-hover:border-stone-900 group-hover:text-stone-900'}`}
                  >
                    <ArrowDown size={18} strokeWidth={1.5} />
                  </div>
                </button>

                {/* Área de Conteúdo Expandido (Gaveta) */}
                {isOpen && (
                  <div
                    className="overflow-hidden animate-fade-in-down"
                  >
                    <div className="pb-16 pt-2 pl-0 md:pl-[calc(100px+3rem)] grid grid-cols-1 lg:grid-cols-12 gap-12">

                      {/* Conteúdo Textual */}
                      <div className="lg:col-span-7 space-y-8 pr-4">
                        <div>
                          <div className="inline-flex items-center gap-2 mb-4">
                            <span className={`w-2 h-2 rounded-full ${scenario.colorClass.replace('text-', 'bg-')}`}></span>
                            <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">Diagnóstico Possível</span>
                          </div>
                          <h2 className="text-4xl font-serif text-stone-900 mb-6">{scenario.disorderName}</h2>
                          <p className="text-lg text-stone-600 leading-relaxed font-light">
                            {scenario.description}
                          </p>
                        </div>

                        <div className="bg-white p-8 border-l-2 border-stone-200">
                          <h6 className="font-bold text-stone-900 mb-3 text-sm flex items-center gap-2">
                            <BrainCircuit size={18} className="text-primary-600" />
                            Abordagem da Terapia:
                          </h6>
                          <p className="text-stone-500 text-base leading-relaxed">
                            {scenario.tccApproach}
                          </p>
                        </div>

                        <a
                          href="https://wa.me/5511999998888"
                          className="inline-flex items-center gap-3 text-stone-900 font-bold hover:text-primary-600 transition-colors group/link mt-4"
                        >
                          <span className="border-b border-stone-900 group-hover/link:border-primary-600 pb-0.5">Agendar conversa sobre isso</span>
                          <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                        </a>
                      </div>

                      {/* Card Visual (Imagem/Ícone) */}
                      <div className="lg:col-span-5 h-full min-h-[300px]">
                        <div className={`h-full w-full rounded-none md:rounded-tl-[4rem] relative overflow-hidden group/card ${scenario.bgClass}`}>
                          {/* Overlay Gradiente */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent z-10"></div>

                          {/* Ícone Central */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                            <div className={`p-8 bg-white/80 backdrop-blur-sm shadow-soft rounded-full mb-6 ${scenario.colorClass} transition-transform duration-700 group-hover/card:scale-110`}>
                              {getIcon(scenario.id)}
                            </div>
                          </div>

                          {/* Textura de Fundo (Simulada) */}
                          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
                        </div>
                      </div>

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Botão Ver Mais / Ver Menos */}
        <div className="mt-12 flex justify-center">
          {visibleCount < scenarios.length ? (
            <button
              onClick={showMore}
              className="group flex items-center gap-2 px-8 py-4 bg-white border border-stone-200 rounded-full text-xs font-bold uppercase tracking-widest text-stone-600 hover:text-stone-900 hover:border-stone-400 transition-all shadow-sm hover:shadow-md"
            >
              Exibir Mais Sintomas
              <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
            </button>
          ) : (
            <button
              onClick={showLess}
              className="group flex items-center gap-2 px-8 py-4 bg-stone-100 border border-stone-200 rounded-full text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-all"
            >
              Mostrar Menos
              <ArrowDown size={14} className="rotate-180 group-hover:-translate-y-1 transition-transform" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CommonDisorders;