import React from 'react';
import { CloudRain, Users, Zap, Activity, BrainCircuit, BatteryWarning, HeartPulse, FileText, Brain, Moon, Clock, HeartHandshake, CheckCircle, Utensils, UserMinus, HeartCrack, AlertTriangle, Flame, HelpCircle } from 'lucide-react';
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
    id: 'tag',
    triggerPhrase: "Minha cabeça não para e estou sempre pensando no pior.",
    disorderName: "Ansiedade Generalizada (TAG)",
    description: "Viver em alerta constante é exaustivo. Essa preocupação que 'não desliga' faz você se sentir sempre no limite, afetando seu sono e seu corpo. Não é um defeito seu; é a ansiedade tomando espaço demais, e você merece voltar a sentir paz.",
    tccApproach: "Na terapia, vamos organizar seus pensamentos e usar ferramentas práticas para acalmar esse ruído mental. O foco é treinar sua mente para você recuperar a segurança e o controle da sua rotina, vivendo mais o presente e menos o medo.",
    icon: <BrainCircuit size={32} />,
    colorClass: "text-teal-700",
    bgClass: "bg-teal-50",
    borderColor: "border-teal-200"
  },
  {
    id: 'panic',
    triggerPhrase: "Sinto o coração disparar e um medo repentino de morrer",
    disorderName: "Síndrome do Pânico",
    description: "É assustador sentir o corpo reagir como se houvesse um perigo real quando, na verdade, você só quer estar em paz. Esses episódios de medo intenso são exaustivos e fazem você se sentir vulnerável. Saiba que seu corpo está apenas reagindo a um alarme falso, e você não precisa enfrentar esse pavor sozinho.",
    tccApproach: "Trabalhamos para que você compreenda e neutralize as sensações físicas do pânico. Com técnicas de respiração e mudança de pensamento, ensinamos seu cérebro a entender que você está seguro, eliminando o medo de ter novas crises e devolvendo sua liberdade.",
    icon: <Activity size={32} />,
    colorClass: "text-indigo-700",
    bgClass: "bg-indigo-50",
    borderColor: "border-indigo-200"
  },
  {
    id: 'depression',
    triggerPhrase: "Sinto um vazio constante, desânimo e nada do que eu gostava tem mais graça.",
    disorderName: "Depressão",
    description: "Esse vazio é como se o mundo tivesse perdido as cores e cada tarefa, por menor que seja, exigisse um esforço gigante. Mais do que tristeza, é um cansaço da alma que faz você se sentir desconectado de si e dos outros. Você não está 'sem vontade', você está sem energia, e esse peso não precisa ser carregado sozinho.",
    tccApproach: "Vamos trabalhar para resgatar sua vitalidade aos poucos, respeitando o seu ritmo. Através de pequenas mudanças na rotina e no modo de lidar com os pensamentos negativos, ajudamos seu cérebro a reencontrar o prazer e o sentido nas coisas, devolvendo a esperança de dias mais leves.",
    icon: <CloudRain size={32} />,
    colorClass: "text-slate-700",
    bgClass: "bg-slate-100",
    borderColor: "border-slate-200"
  },
  {
    id: 'procrastination',
    triggerPhrase: "Tenho potencial e planos, mas travo na hora de fazer",
    disorderName: "Procrastinação / Foco desregulado",
    description: "É frustrante sentir que você tem tanto para entregar, mas parece preso em um ciclo de bloqueio e culpa. Isso não é preguiça ou falta de esforço; é uma dificuldade emocional em começar ou manter o foco quando a mente se sente sobrecarregada. Esse 'travar' gera um cansaço mental imenso e a sensação de que você está ficando para trás, mas saiba que sua capacidade continua aí.",
    tccApproach: "Dividimos grandes tarefas em passos micro. Trabalhamos a regulação emocional que causa o bloqueio e criamos sistemas de organização.",
    icon: <Clock size={32} />,
    colorClass: "text-orange-700",
    bgClass: "bg-orange-50",
    borderColor: "border-orange-200"
  },
  {
    id: 'emotional_dependence',
    triggerPhrase: "Só consigo estar feliz se aquela(s) pessoa(s) estiverem comigo.",
    disorderName: "Dependência Emocional",
    description: "Parece que você precisa estar sempre pisando em ovos para não desagradar ninguém. Esse medo de ser rejeitado ou abandonado faz com que você coloque o desejo dos outros acima dos seus, resultando em um cansaço emocional enorme e na sensação de que você se perdeu de si mesma. É doloroso sentir que sua paz depende de um elogio ou da aceitação de outra pessoa.",
    tccApproach: "Vamos trabalhar para fortalecer quem você é e reconstruir sua segurança interna. Você aprenderá, de forma prática, a dizer 'não' quando necessário e a estabelecer limites saudáveis sem sentir culpa. O foco é que você se sinta completo(a) sozinho(a), para que suas relações sejam por escolha e felicidade, e não por necessidade ou medo.",
    icon: <HeartHandshake size={32} />,
    colorClass: "text-rose-800",
    bgClass: "bg-rose-50",
    borderColor: "border-rose-200"
  },
  {
    id: 'burnout',
    triggerPhrase: "Estou exausto e não dou conta das exigências do trabalho",
    disorderName: "Burnout",
    description: "A pressão da vida profissional tornou-se um peso insuportável e você sente que a sua reserva de energia chegou ao fim. É aquela sensação de domingo à noite com angústia e de manhãs sem forças para abrir o computador. Você se cobra para ser produtivo, mas o corpo trava, a mente falha e o trabalho que antes você dominava agora parece uma montanha impossível de escalar. Você não é incompetente; você está além do seu limite.",
    tccApproach: "Nossas sessões serão um espaço para você recuperar o fôlego e organizar suas prioridades. Vamos criar estratégias práticas para você estabelecer limites, gerenciar o estresse e desassociar o seu valor como pessoa apenas da sua produtividade, devolvendo o equilíbrio entre sua carreira e sua vida pessoal.",
    icon: <BatteryWarning size={32} />,
    colorClass: "text-rose-700",
    bgClass: "bg-rose-50",
    borderColor: "border-rose-200"
  },
  {
    id: 'social_anxiety',
    triggerPhrase: "Tenho medo de ser julgado e travo em situações sociais",
    disorderName: "Ansiedade Social",
    description: "Não é apenas timidez. É uma sensação constante de que todos estão observando e avaliando cada palavra ou gesto seu. Esse medo de passar vergonha ou ser rejeitado faz com que você se isole ou sofra antecipadamente antes de qualquer evento, impedindo você de mostrar quem realmente é e de criar conexões verdadeiras.",
    tccApproach: "Vamos enfrentar esses medos juntos, de forma gradual e segura. Você aprenderá a questionar esses pensamentos de autocrítica e a desenvolver habilidades práticas para se sentir mais seguro e confortável em público, recuperando sua espontaneidade nas relações.",
    icon: <Users size={32} />,
    colorClass: "text-blue-700",
    bgClass: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    id: 'toc',
    triggerPhrase: "Preciso que tudo esteja perfeito ou não consigo relaxar",
    disorderName: "TOC",
    description: "A busca pela perfeição se tornou uma prisão. Você gasta uma energia enorme revisando detalhes ou seguindo regras rígidas para evitar erros, mas o alívio nunca vem. Essa autocobrança excessiva gera uma tensão constante e a sensação de que nada do que você faz é bom o suficiente, roubando sua leveza e seu tempo.",
    tccApproach: "O objetivo não é ser descuidado, mas aprender a ser flexível. Vamos trabalhar para que você consiga equilibrar sua excelência com o descanso, diminuindo a rigidez mental e aprendendo a aceitar as imperfeições da vida sem que isso gere angústia ou sofrimento.",
    icon: <CheckCircle size={32} />,
    colorClass: "text-purple-700",
    bgClass: "bg-purple-50",
    borderColor: "border-purple-200"
  },
  {
    id: 'binge_eating',
    triggerPhrase: "Não consigo parar de comer, mesmo quando não tenho fome",
    disorderName: "Compulsão Alimentar",
    description: "Comer tornou-se a única forma de anestesiar o estresse, a tristeza ou a ansiedade. Nesses momentos, parece que você perde o controle e, logo depois, vem uma onda esmagadora de culpa e vergonha. É um ciclo doloroso onde a comida preenche um vazio emocional, mas acaba sobrecarregando ainda mais a sua mente.",
    tccApproach: "Vamos entender quais emoções estão \"alimentando\" esse comportamento. Ensinamos você a identificar os gatilhos da fome emocional e a desenvolver novas formas de lidar com os sentimentos, construindo uma relação de paz e respeito com a comida e com o seu corpo.",
    icon: <Utensils size={32} />,
    colorClass: "text-amber-700",
    bgClass: "bg-amber-50",
    borderColor: "border-amber-200"
  },
  {
    id: 'low_self_esteem',
    triggerPhrase: "Vivo me sentindo inferior e duvido da minha capacidade",
    disorderName: "Baixa Autoestima",
    description: "É como se houvesse uma voz interna focada apenas nos seus defeitos, ignorando todas as suas conquistas. Você se compara constantemente e sente que os outros são sempre melhores ou mais preparados. Essa visão distorcida de si mesmo(a) impede que você aceite oportunidades e faz com que você aceite menos do que realmente merece.",
    tccApproach: "Atuamos na base dessa autocrítica, ajudando você a enxergar suas qualidades de forma realista. Vamos reconstruir sua autoconfiança através de evidências reais e novos hábitos, para que você aprenda a se valorizar e a ocupar o seu lugar no mundo com segurança.",
    icon: <UserMinus size={32} />,
    colorClass: "text-gray-700",
    bgClass: "bg-gray-100",
    borderColor: "border-gray-200"
  },
  {
    id: 'grief',
    triggerPhrase: "A dor da perda não passa e sinto que a vida parou",
    disorderName: "Luto",
    description: "O luto é um processo natural, mas às vezes a dor parece estagnada, impedindo você de seguir em frente. É como se uma parte de você tivesse partido junto, e o mundo ao redor perdesse o sentido. Esse peso constante faz com que o futuro pareça vazio e a saudade se torne uma barreira para a vida.",
    tccApproach: "Ajudamos você a ressignificar a perda e a lidar com a saudade de forma menos paralisante. O foco não é esquecer quem se foi, mas encontrar um lugar seguro para essa memória e aprender a reconstruir sua vida com acolhimento e novos propósitos.",
    icon: <HeartCrack size={32} />,
    colorClass: "text-stone-700",
    bgClass: "bg-stone-200",
    borderColor: "border-stone-300"
  },
  {
    id: 'ptsd',
    triggerPhrase: "Fico revivendo momentos ruins do passado e não tenho paz",
    disorderName: "Estresse Pós-Traumático (TEPT)",
    description: "Memórias dolorosas surgem sem aviso, trazendo de volta o medo e a angústia de situações que você já viveu. É exaustivo sentir que o passado ainda dita as regras do seu presente, deixando você em constante alerta ou querendo evitar lugares e pessoas que tragam essas lembranças.",
    tccApproach: "Utilizamos técnicas para ajudar seu cérebro a processar essas memórias de forma que elas percam a carga emocional negativa. Vamos devolver a você a sensação de segurança, para que o passado seja apenas uma história e não algo que você precise reviver todos os dias.",
    icon: <AlertTriangle size={32} />,
    colorClass: "text-red-800",
    bgClass: "bg-red-50",
    borderColor: "border-red-200"
  },
  {
    id: 'insomnia_2',
    triggerPhrase: "Deito na cama, mas minha mente não desliga e o sono não vem",
    disorderName: "Insônia",
    description: "A hora de dormir virou um momento de tortura e ansiedade. Enquanto o corpo pede descanso, a mente repassa problemas, planeja o dia seguinte ou se preocupa com o fato de não estar dormindo. Esse ciclo cria uma rotina de cansaço extremo que afeta seu humor, seu foco e sua saúde.",
    tccApproach: "Aplicamos a higiene do sono e técnicas de controle do pensamento. Ensinamos seu cérebro a associar a cama ao descanso e não à preocupação, ajustando seus hábitos para que o sono volte a ser natural, reparador e tranquilo.",
    icon: <Moon size={32} />,
    colorClass: "text-blue-900",
    bgClass: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    id: 'impulsivity',
    triggerPhrase: "Me irrito por qualquer coisa e perco o controle facilmente",
    disorderName: "Descontrole da Impulsividade / Irritabilidade",
    description: "Parece que o seu \"pavio\" está cada vez mais curto e, quando você percebe, já reagiu de forma explosiva. Logo depois, vem o arrependimento e a sensação de que você está afastando as pessoas que ama. Essa reatividade é um sinal de que suas emoções estão transbordando e você não está conseguindo filtrá-las.",
    tccApproach: "Trabalhamos o autoconhecimento para identificar os sinais que o corpo dá antes da explosão. Você aprenderá técnicas de pausa e regulação emocional, ganhando tempo para escolher como agir em vez de apenas reagir por impulso.",
    icon: <Flame size={32} />,
    colorClass: "text-orange-800",
    bgClass: "bg-orange-100",
    borderColor: "border-orange-200"
  },
  {
    id: 'insecurity',
    triggerPhrase: "Não consigo tomar decisões sozinho e sempre duvido do que escolho",
    disorderName: "Insegurança Crônica",
    description: "Cada pequena escolha se torna um dilema. Você busca a opinião de todos, teme errar e se sente incapaz de confiar no seu próprio julgamento. Essa indecisão trava sua vida e faz com que você se sinta dependente da validação externa para se sentir minimamente seguro.",
    tccApproach: "Fortalecemos o seu \"músculo\" da autoconfiança. Vamos identificar as crenças que te fazem duvidar de si e praticar tomadas de decisão graduais, para que você reconheça sua própria sabedoria e se sinta dono(a) do seu caminho.",
    icon: <HelpCircle size={32} />,
    colorClass: "text-cyan-700",
    bgClass: "bg-cyan-50",
    borderColor: "border-cyan-200"
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
// FAQs
export const faqs = [
  { q: "Como saber se eu realmente preciso de terapia?", a: "Não é preciso estar em uma crise extrema para buscar ajuda. A terapia é indicada quando você sente que suas emoções estão impactando seu dia a dia, quando deseja entender padrões repetitivos, lidar com mudanças ou simplesmente busca autoconhecimento. Se algo dói em você — seja uma angústia, um luto ou uma dificuldade de relacionamento — a terapia é um espaço seguro para você." },
  { q: "Quanto tempo dura o tratamento?", a: "A terapia é um processo singular. A duração depende da sua demanda, do seu ritmo de abertura e do objetivo que traçamos juntos. Meu foco é sempre promover a sua autonomia, para que você desenvolva ferramentas próprias para lidar com a vida, no tempo que for necessário para você se sentir seguro(a)." },
  { q: "Tudo o que eu falar será mantido em segredo?", a: "O sigilo profissional é a base do trabalho e um pilar ético absoluto, protegido pelo Código de Ética do Psicólogo. Este é um espaço livre de julgamentos, onde sua privacidade é totalmente preservada." },
  { q: "A terapia online é tão eficiente quanto a presencial?", a: "Sim. Estudos comprovam que a eficácia e o vínculo terapêutico são os mesmos do presencial. Realizada via videochamada (Google Meet, Zoom ou WhatsApp), a modalidade online oferece flexibilidade e conforto. Você só precisa de um local reservado e uma boa conexão de internet para iniciarmos." },
  { q: "Como funcionam os cancelamentos ou reagendamentos?", a: "Reagendamentos podem ser feitos com até 24h de antecedência. Em casos de saúde comprovados, a sessão não será cobrada. Ausências sem aviso prévio de 24h serão cobradas, pois o horário ficou reservado. Para encerrar o processo, informe com 24h de antecedência." }
];