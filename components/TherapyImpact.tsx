import React from 'react';
import { Sun, Shield, Users, Compass } from 'lucide-react';

const TherapyImpact: React.FC = () => {
  const pillars = [
    {
      title: "Clareza Mental",
      desc: "Entenda por que você age como age e saia do piloto automático.",
      icon: <Sun size={32} className="text-orange-500" />
    },
    {
      title: "Resiliência",
      desc: "Aprenda a lidar com as adversidades sem desmoronar emocionalmente.",
      icon: <Shield size={32} className="text-blue-500" />
    },
    {
      title: "Relações Saudáveis",
      desc: "Melhore sua comunicação e estabeleça limites necessários.",
      icon: <Users size={32} className="text-green-500" />
    },
    {
      title: "Propósito",
      desc: "Alinhe suas escolhas diárias com o que realmente importa para você.",
      icon: <Compass size={32} className="text-purple-500" />
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            O que mudará em sua vida?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A psicoterapia não é apenas sobre resolver problemas, mas sobre expandir suas potencialidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center hover:shadow-lg transition-all hover:-translate-y-2 duration-300"
            >
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                {p.icon}
              </div>
              <h3 className="font-bold text-lg text-slate-800 mb-3">{p.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TherapyImpact;