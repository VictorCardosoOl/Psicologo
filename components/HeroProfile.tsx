import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const HeroProfile: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-sand-50">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[800px] h-[800px] bg-sage-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[600px] h-[600px] bg-sand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Profile Image (Left on Desktop) */}
          <div className="lg:col-span-5 order-first lg:order-first relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-[10px] border-white max-w-md mx-auto">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea86b48e?q=80&w=1000&auto=format&fit=crop"
                alt="Dr. André Silva, Psicólogo Clínico"
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900/80 to-transparent p-6 pt-20">
                <p className="text-white font-serif italic text-lg">"Ouvir é o primeiro passo para curar."</p>
              </div>
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 lg:right-0 bg-white p-4 rounded-xl shadow-lg border border-sage-100 flex items-center gap-3">
              <div className="bg-sage-100 p-2 rounded-full text-sage-700">
                <span className="font-bold text-xl">10+</span>
              </div>
              <div className="text-xs font-bold text-slate-600 uppercase tracking-wide">
                Anos de<br />Experiência
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8 lg:pl-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sage-50 border border-sage-200 shadow-sm mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-sage-500 animate-pulse"></span>
              <span className="text-sage-800 font-bold text-xs tracking-wider uppercase">Atendimento Online e Presencial</span>
            </div>

            <div>
              <h2 className="text-slate-500 font-medium text-lg mb-2">Olá, eu sou o Dr. André Silva</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight mb-4">
                Acolhendo sua jornada de <span className="text-sage-600 italic">autoconhecimento</span>.
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Especialista em Terapia Cognitivo-Comportamental (TCC). Ofereço um espaço seguro, ético e sem julgamentos para trabalharmos juntos suas ansiedades, medos e objetivos de vida.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-sage-700 hover:bg-sage-800 transition-all shadow-lg hover:shadow-sage-200/50 hover:-translate-y-1"
              >
                Agendar Sessão
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#methodology"
                className="inline-flex items-center justify-center px-8 py-4 border border-slate-200 text-base font-bold rounded-xl text-slate-700 bg-white hover:bg-slate-50 transition-all shadow-sm hover:shadow-md"
              >
                <MessageCircle className="mr-2 h-5 w-5 text-sage-500" />
                Como posso ajudar?
              </a>
            </div>

            {/* Micro-interactions / Support Text */}
            <div className="pt-8 border-t border-sage-100 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-slate-500">
              <span>✓ Sigilo Absoluto</span>
              <span>✓ Ambiente Acolhedor</span>
              <span>✓ Abordagem Baseada em Evidências</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroProfile;