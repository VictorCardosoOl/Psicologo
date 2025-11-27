import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-sage-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-sage-200 shadow-sm">
              <span className="text-sage-700 font-medium text-sm">Atendimento Presencial e Online</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight">
              Encontre o equilíbrio para uma vida mais <span className="text-sage-700 italic">plena</span>.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Um espaço seguro e acolhedor para sua jornada de autoconhecimento. 
              Juntos, podemos trabalhar suas questões emocionais com empatia e técnica.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-sage-700 hover:bg-sage-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Agendar Consulta
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#about"
                className="inline-flex items-center justify-center px-8 py-4 border border-slate-300 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-all shadow-sm"
              >
                Saiba Mais
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
               {/* Placeholder for Doctor Image */}
              <img 
                src="https://picsum.photos/800/1000?grayscale" 
                alt="Psicólogo atendendo" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>
            {/* Float Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
              <p className="font-serif text-xl italic text-slate-800">"O autoconhecimento é o começo da sabedoria."</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
