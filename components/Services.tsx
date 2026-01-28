import React, { useLayoutEffect, useRef } from 'react';
import { ArrowRight, Brain, HeartPulse, Battery, FileText, Monitor, ShieldCheck, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services: React.FC = () => {
    const containerRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Header Reveal
            gsap.from(".reveal-header", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".header-trigger",
                    start: "top 90%", // 85 -> 90
                }
            });

            // Bento Grid Stagger
            gsap.from(".bento-item", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".grid-trigger",
                    start: "top 90%", // 80 -> 90
                }
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="services" className="pt-8 pb-2 md:pb-8 bg-white text-stone-900">
            <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">

                {/* Header da Seção */}
                <div className="header-trigger flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
                    <div className="max-w-2xl reveal-header">
                        <div className="flex items-center gap-2 mb-3">
                            <Sparkles size={14} className="text-primary-600" />
                            <h2 className="text-xs font-bold text-primary-600 uppercase tracking-[0.2em]">Áreas de Atuação</h2>
                        </div>
                        <h3 className="text-4xl md:text-5xl font-serif font-medium text-stone-900 leading-[1.1]">
                            Caminhos para sua transformação
                        </h3>
                    </div>
                    <div className="reveal-header">
                        <a
                            href="#contact"
                            className="flex items-center gap-3 text-stone-900 text-sm font-bold uppercase tracking-wider hover:text-primary-700 transition-colors group border border-stone-300 px-6 py-3 rounded-full hover:bg-stone-50"
                        >
                            Ver disponibilidade <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid-trigger grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">

                    {/* Card Principal - Psicoterapia Online (Grande) */}
                    <div className="bento-item md:col-span-2 md:row-span-2 bg-stone-900 rounded-3xl p-10 md:p-14 text-white relative overflow-hidden group flex flex-col justify-between">
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
                    </div>

                    {/* Card Ansiedade */}
                    <div className="bento-item bg-stone-50 rounded-3xl p-8 border border-stone-100 hover:border-stone-300 hover:shadow-lg transition-all duration-300 group flex flex-col">
                        <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-stone-400 group-hover:text-primary-600 transition-colors border border-stone-100">
                            <Brain size={24} strokeWidth={1.5} />
                        </div>
                        <h5 className="font-serif font-medium text-xl mb-2 text-stone-900">Ansiedade & TAG</h5>
                        <p className="text-stone-500 leading-relaxed text-sm font-light flex-1">
                            Ferramentas práticas para desacelerar a mente e retomar o controle sobre pensamentos intrusivos.
                        </p>
                    </div>

                    {/* Card Depressão */}
                    <div className="bento-item bg-stone-50 rounded-3xl p-8 border border-stone-100 hover:border-stone-300 hover:shadow-lg transition-all duration-300 group flex flex-col">
                        <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-stone-400 group-hover:text-rose-500 transition-colors border border-stone-100">
                            <HeartPulse size={24} strokeWidth={1.5} />
                        </div>
                        <h5 className="font-serif font-medium text-xl mb-2 text-stone-900">Depressão</h5>
                        <p className="text-stone-500 leading-relaxed text-sm font-light flex-1">
                            Ativação comportamental e reestruturação cognitiva para resgatar a vitalidade e o propósito.
                        </p>
                    </div>

                    {/* Card Burnout */}
                    <div className="bento-item bg-stone-50 rounded-3xl p-8 border border-stone-100 hover:border-stone-300 hover:shadow-lg transition-all duration-300 group flex flex-col">
                        <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-stone-400 group-hover:text-amber-500 transition-colors border border-stone-100">
                            <Battery size={24} strokeWidth={1.5} />
                        </div>
                        <h5 className="font-serif font-medium text-xl mb-2 text-stone-900">Burnout</h5>
                        <p className="text-stone-500 leading-relaxed text-sm font-light flex-1">
                            Recuperação do esgotamento profissional e construção de limites saudáveis entre trabalho e vida.
                        </p>
                    </div>

                    {/* Card Lattes / Acadêmico */}
                    <a
                        href="#"
                        className="bento-item md:col-span-2 bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8 border border-primary-100 flex flex-col md:flex-row items-center justify-between gap-6 group hover:shadow-md transition-all cursor-pointer"
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
                    </a>

                </div>

            </div>
        </section>
    );
};

export default Services;