import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-sage-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-5 mb-12 lg:mb-0 relative">
             <div className="absolute inset-0 bg-sage-200 transform rotate-3 rounded-2xl"></div>
            <img 
              src="https://picsum.photos/600/800?grayscale" 
              alt="Dr. André Silva" 
              className="relative rounded-2xl shadow-lg w-full object-cover h-[500px]"
            />
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                Olá, eu sou o Dr. André Silva.
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Com mais de 10 anos de experiência clínica, dedico minha carreira a ajudar pessoas a reencontrarem seu caminho e superarem desafios emocionais. Acredito que a terapia é um processo colaborativo, onde construímos juntos novas perspectivas.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Minha abordagem integra a Terapia Cognitivo-Comportamental (TCC) com uma visão humanista, focando não apenas nos sintomas, mas na pessoa como um todo.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Mestre em Psicologia Clínica (USP)',
                'Especialista em TCC',
                'Atendimento humanizado',
                'Sigilo absoluto',
                'Ambiente acolhedor',
                'Atualização constante'
              ].map((item) => (
                <div key={item} className="flex items-center space-x-3">
                  <CheckCircle2 className="text-sage-700 h-5 w-5 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-sage-200">
               <div className="flex items-center space-x-4">
                 <div className="text-4xl font-serif font-bold text-sage-700">10+</div>
                 <div className="text-sm text-slate-600 uppercase tracking-wide font-medium">Anos de<br/>Experiência</div>
                 <div className="h-10 w-px bg-sage-300 mx-4"></div>
                 <div className="text-4xl font-serif font-bold text-sage-700">2k+</div>
                 <div className="text-sm text-slate-600 uppercase tracking-wide font-medium">Pacientes<br/>Atendidos</div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
