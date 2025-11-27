import React from 'react';
import { User, Users, HeartHandshake, Laptop, Brain, Briefcase } from 'lucide-react';
import { ServiceItem } from '../types';

const servicesList: ServiceItem[] = [
  {
    title: "Terapia Individual",
    description: "Sessões focadas em autoconhecimento, tratamento de ansiedade, depressão e desenvolvimento pessoal.",
    icon: <User size={32} />
  },
  {
    title: "Terapia de Casal",
    description: "Espaço para melhorar a comunicação, resolver conflitos e fortalecer o vínculo afetivo.",
    icon: <Users size={32} />
  },
  {
    title: "Terapia Online",
    description: "Atendimento psicológico de qualidade no conforto da sua casa, através de videochamada segura.",
    icon: <Laptop size={32} />
  },
  {
    title: "Ansiedade e Estresse",
    description: "Estratégias baseadas em TCC para gerenciar crises de ansiedade e o estresse do dia a dia.",
    icon: <Brain size={32} />
  },
  {
    title: "Orientação Profissional",
    description: "Apoio para tomadas de decisão na carreira, transição profissional e equilíbrio vida-trabalho.",
    icon: <Briefcase size={32} />
  },
  {
    title: "Luto e Perdas",
    description: "Acolhimento especializado para lidar com processos de luto e momentos difíceis de separação.",
    icon: <HeartHandshake size={32} />
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-sage-700 uppercase tracking-wider mb-2">Áreas de Atuação</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Como posso ajudar você?</h3>
          <p className="text-slate-600 text-lg">
            Ofereço um tratamento personalizado, focado nas suas necessidades específicas e no seu bem-estar emocional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 bg-sand-100 rounded-2xl hover:bg-sage-100 transition-colors duration-300 border border-transparent hover:border-sage-200"
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-sage-700 shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
