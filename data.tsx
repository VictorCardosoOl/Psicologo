import React from 'react';
import { CloudRain, Users, Zap, Activity, BrainCircuit, BatteryWarning, HeartPulse, FileText, Brain, Moon, Clock, HeartHandshake } from 'lucide-react';
import { AnxietyType, BlogPost, NavigationLink, SymptomScenario, ServiceItem } from './types';

// Navegação
export const navLinks: NavigationLink[] = [
  { label: 'Início', href: '#home' },
  { label: 'Transtornos', href: '#sinais' },
  { label: 'Abordagem (TCC)', href: '#methodology' },
  { label: 'Sobre Mim', href: '#about' },
  { label: 'Serviços', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contato', href: '#contact' },
];

export const ebooksList = [
  "Guia: Vencendo a Ansiedade",
  "Ebook: Higiene do Sono",
  "Manual: Primeiros Passos na TCC"
];

// Seção de Ansiedade
export const anxietyTypes: AnxietyType[] = [
  {
    title: "Ansiedade Generalizada (TAG)",
    shortDesc: "Preocupação excessiva e persistente.",
    symptoms: ["Tensão muscular constante", "Irritabilidade", "Dificuldade para dormir", "Fadiga excessiva"],
    icon: <CloudRain size={32} />
  },
  {
    title: "Fobia Social",
    shortDesc: "Medo intenso de interações sociais.",
    symptoms: ["Medo de julgamento", "Evitação de eventos sociais", "Taquicardia em público", "Medo de falar"],
    icon: <Users size={32} />
  },
  {
    title: "Síndrome do Pânico",
    shortDesc: "Crises repentinas de medo intenso.",
    symptoms: ["Sensação de morte iminente", "Falta de ar", "Tontura", "Despersonalização"],
    icon: <Zap size={32} />
  },
  {
    title: "Burnout",
    shortDesc: "Esgotamento profissional extremo.",
    symptoms: ["Cansaço mental", "Desmotivação", "Cinismo", "Queda de rendimento"],
    icon: <Activity size={32} />
  }
];

// Cenários de Transtornos
export const scenarios: SymptomScenario[] = [
  {
    id: 'anxiety',
    triggerPhrase: "Minha cabeça não para e estou sempre esperando o pior.",
    disorderName: "Ansiedade Generalizada (TAG)",
    description: "Você sente que está sempre em estado de alerta. A preocupação é excessiva, difícil de controlar e vem acompanhada de tensão muscular, irritabilidade ou insônia.",
    tccApproach: "Na TCC, identificamos os gatilhos da preocupação e ensinamos técnicas concretas para acalmar a mente e retomar o controle.",
    icon: <BrainCircuit size={32} />,
    colorClass: "text-teal-600",
    bgClass: "bg-teal-50",
    borderColor: "border-teal-200"
  },
  {
    id: 'panic',
    triggerPhrase: "Sinto o coração disparar e um medo repentino de morrer.",
    disorderName: "Síndrome do Pânico",
    description: "Ataques súbitos de medo intenso que geram sintomas físicos reais (taquicardia, falta de ar), mesmo sem perigo aparente.",
    tccApproach: "Você aprenderá que as sensações físicas, embora assustadoras, não são perigosas, reduzindo o medo das próprias crises.",
    icon: <Activity size={32} />,
    colorClass: "text-indigo-600",
    bgClass: "bg-indigo-50",
    borderColor: "border-indigo-200"
  },
  {
    id: 'depression',
    triggerPhrase: "Sinto um vazio constante, desânimo e nada tem graça.",
    disorderName: "Depressão",
    description: "Não é apenas tristeza passageira. É uma perda de vitalidade que afeta o sono, o apetite e a vontade de realizar tarefas simples do dia a dia.",
    tccApproach: "Utilizamos a Ativação Comportamental para que você volte a sentir prazer nas pequenas coisas, passo a passo.",
    icon: <CloudRain size={32} />,
    colorClass: "text-slate-600",
    bgClass: "bg-slate-100",
    borderColor: "border-slate-200"
  },
  {
    id: 'insomnia',
    triggerPhrase: "Deito na cama exausto, mas minha mente não desliga.",
    disorderName: "Insônia & Higiene do Sono",
    description: "Você sente o corpo cansado, mas os pensamentos aceleram justamente na hora de dormir. O sono não é reparador e o dia seguinte se torna uma luta.",
    tccApproach: "Mapeamos hábitos noturnos e crenças sobre o sono. Aplicamos técnicas de relaxamento e restrição de sono para recondicionar seu cérebro.",
    icon: <Moon size={32} />,
    colorClass: "text-blue-900",
    bgClass: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    id: 'procrastination',
    triggerPhrase: "Tenho potencial e planos, mas travo na hora de fazer.",
    disorderName: "Procrastinação / Foco",
    description: "Não é preguiça. É uma dificuldade real de iniciar tarefas, manter o foco ou gerenciar o tempo, gerando culpa e sensação de incapacidade.",
    tccApproach: "Dividimos grandes tarefas em passos micro. Trabalhamos a regulação emocional que causa o bloqueio e criamos sistemas de organização.",
    icon: <Clock size={32} />,
    colorClass: "text-orange-600",
    bgClass: "bg-orange-50",
    borderColor: "border-orange-200"
  },
  {
    id: 'emotional_dependence',
    triggerPhrase: "Minha felicidade depende da aprovação dos outros.",
    disorderName: "Dependência Emocional",
    description: "Você tem dificuldade em dizer 'não', medo excessivo de abandono e acaba se anulando para manter relacionamentos, mesmo que insatisfatórios.",
    tccApproach: "Fortalecemos sua autoestima e autonomia. Você aprenderá a validar suas próprias emoções e estabelecer limites saudáveis sem culpa.",
    icon: <HeartHandshake size={32} />,
    colorClass: "text-rose-900",
    bgClass: "bg-rose-50",
    borderColor: "border-rose-200"
  },
  {
    id: 'burnout',
    triggerPhrase: "Estou exausto e não dou conta das exigências do trabalho.",
    disorderName: "Burnout",
    description: "Esgotamento físico e mental ligado à vida profissional. Você sente que, por mais que descanse, a energia não volta e o cinismo aumenta.",
    tccApproach: "Trabalhamos limites saudáveis, regulação do estresse e a reconstrução da sua identidade para além do trabalho.",
    icon: <BatteryWarning size={32} />,
    colorClass: "text-rose-600",
    bgClass: "bg-rose-50",
    borderColor: "border-rose-200"
  }
];

// Serviços
export const servicesList: ServiceItem[] = [
    { title: "Ansiedade", icon: <Brain />, description: "TAG, Fobia Social e Pânico." },
    { title: "Depressão", icon: <HeartPulse />, description: "Tristeza persistente e desânimo." },
    { title: "Burnout", icon: <BatteryWarning />, description: "Esgotamento profissional." },
    { title: "Regulação Emocional", icon: <FileText />, description: "Lidar com emoções intensas." }
];

// Blog Posts
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: "Como diferenciar tristeza de depressão?",
    excerpt: "Entenda os sinais de alerta e quando é o momento certo de procurar ajuda profissional.",
    date: "12 Out, 2023",
    readTime: "5 min",
    category: "Depressão",
    content: `
      <p>Sentir tristeza é uma reação natural a perdas ou frustrações. No entanto, quando esse sentimento persiste por semanas, afeta o sono, o apetite e tira o prazer de atividades que antes eram prazerosas, podemos estar diante de um quadro depressivo.</p>
      <h3>Principais Sinais</h3>
      <ul>
        <li>Perda de interesse (anedonia)</li>
        <li>Alterações bruscas de peso</li>
        <li>Insônia ou hipersonia</li>
        <li>Fadiga constante</li>
      </ul>
      <p>A TCC ajuda a identificar os pensamentos automáticos negativos que sustentam esse estado e propõe ativação comportamental gradual.</p>
    `
  },
  {
    id: '2',
    title: "5 Técnicas de TCC para Ansiedade",
    excerpt: "Ferramentas práticas que você pode aplicar no seu dia a dia para retomar o controle.",
    date: "28 Set, 2023",
    readTime: "7 min",
    category: "Ansiedade",
    content: `
      <p>A ansiedade muitas vezes vem do medo do futuro ou da necessidade de controle. Aqui estão 5 técnicas rápidas:</p>
      <ol>
        <li><strong>Respiração Diafragmática:</strong> Acalma o sistema nervoso autônomo.</li>
        <li><strong>Registro de Pensamentos:</strong> Escreva o que passou pela sua cabeça quando a ansiedade aumentou.</li>
        <li><strong>Questionamento Socrático:</strong> Pergunte-se: "Que provas eu tenho de que isso vai acontecer?"</li>
        <li><strong>A técnica dos 5 sentidos:</strong> Liste 5 coisas que vê, 4 que toca, 3 que ouve... para voltar ao presente.</li>
        <li><strong>Horário da Preocupação:</strong> Reserve 15 min do dia para se preocupar, e não o dia todo.</li>
      </ol>
    `
  },
  {
    id: '3',
    title: "Autoconhecimento e Relações",
    excerpt: "Por que entender suas emoções melhora seus relacionamentos afetivos e profissionais.",
    date: "15 Set, 2023",
    readTime: "4 min",
    category: "Autoconhecimento",
    content: "<p>Muitas vezes reagimos no automático com base em feridas passadas. O autoconhecimento permite pausar antes de reagir, melhorando a comunicação e a empatia.</p>"
  }
];

// FAQs
export const faqs = [
  { q: "Como funciona a terapia online?", a: "A terapia online acontece por videochamada (Google Meet ou WhatsApp), com a mesma duração e eficácia da presencial. Você precisa apenas de um local privado e boa conexão." },
  { q: "Quanto tempo dura cada sessão?", a: "As sessões têm duração média de 50 minutos e ocorrem, geralmente, uma vez por semana." },
  { q: "Aceita convênio?", a: "Atendo apenas particular, mas emito recibo para que você possa solicitar reembolso junto ao seu convênio." },
];