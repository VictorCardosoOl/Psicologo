import React from 'react';
import { motion } from 'framer-motion';
import { Search, HelpCircle, RefreshCw, Brain, Sparkles } from 'lucide-react';

const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Section: Psychotherapy & Mental Health */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32 items-start">
          
          {/* Left: How it works */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
              Como funciona a psicoterapia?
            </h2>
            <div className="prose prose-lg prose-slate text-slate-600 leading-relaxed space-y-6">
              <p>
                A psicoterapia é um espaço seguro e confidencial para cuidar da sua saúde emocional. Durante os atendimentos, você é convidado(a) a falar sobre suas experiências, sentimentos, pensamentos e comportamentos, no seu tempo e do seu jeito.
              </p>
              <p>
                Com base em uma abordagem acolhedora e científica, como a <strong>Terapia Cognitivo-Comportamental (TCC)</strong>, vamos construindo juntos um caminho de autoconhecimento, enfrentamento de dificuldades e desenvolvimento de novas formas de lidar com a vida.
              </p>
              <p>
                Cada sessão tem cerca de 50 minutos, e a frequência costuma ser semanal. O processo é único, respeitando sua história, seus valores e suas necessidades.
              </p>
            </div>
          </div>

          {/* Right: Importance */}
          <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-5 text-primary-900">
                 <Sparkles size={140} />
             </div>
             
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
              A importância de cuidar da saúde mental
            </h2>
            <div className="prose prose-slate text-slate-600 leading-relaxed space-y-6 relative z-10">
              <p>
                Cuidar da saúde mental é tão essencial quanto cuidar da saúde física. Vivemos em um mundo acelerado, com muitas exigências externas e internas — e, nesse contexto, é natural que, em algum momento, nos sintamos sobrecarregados, tristes, ansiosos ou até mesmo desconectados de nós mesmos.
              </p>
              <p>
                A saúde mental diz respeito à forma como pensamos, sentimos e agimos diante da vida. Ela influencia nossos relacionamentos, decisões, rotina, autoconceito e bem-estar. Quando negligenciada, pode impactar silenciosamente diversas áreas da nossa vida, desde o sono e a produtividade até a autoestima e os vínculos afetivos.
              </p>
              <p>
                Durante o processo terapêutico, com base em métodos cientificamente validados, você aprende a identificar padrões de pensamento, emoções e comportamentos que podem estar te limitando, e passa a construir formas mais saudáveis e conscientes de viver.
              </p>
              <p>
                A psicoterapia também pode ser um caminho de autoconhecimento: um convite para se reconectar com a própria história, entender suas necessidades emocionais, fortalecer sua autonomia e desenvolver um olhar mais compassivo sobre si mesmo(a).
              </p>
              <p>
                Cada pessoa carrega sua própria bagagem, e não existe um motivo "certo" para procurar terapia. Às vezes, é por causa de uma dor recente. Outras vezes, é um incômodo que vem de longe. E há quem venha apenas por vontade de se conhecer melhor. Todas essas razões são válidas.
              </p>
              <div className="pt-4 border-t border-slate-100 mt-4">
                <p className="text-slate-900 font-bold italic">
                  Ao escolher cuidar da sua saúde mental, você está investindo em qualidade de vida, equilíbrio e crescimento emocional. E não precisa fazer isso sozinho(a) — a psicoterapia está aqui para caminhar com você.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate-200 mb-20"></div>

        {/* TCC Pillars Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-800 text-xs font-bold uppercase tracking-wide mb-4">
             <Brain size={14} /> Metodologia TCC
          </div>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
            Os 3 Pilares do Processo
          </h3>
          <p className="text-slate-600 text-lg">
            A Terapia Cognitivo-Comportamental é prática e colaborativa. Trabalhamos juntos nestas três etapas para transformar sua realidade:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center flex flex-col items-center h-full hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-6">
              <Search size={28} />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">1. Identificar</h4>
            <p className="text-slate-600 leading-relaxed text-sm">
              Mapeamos os pensamentos automáticos e emoções que surgem em situações difíceis. Entendemos o "porquê" do que você sente.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center flex flex-col items-center h-full hover:shadow-lg transition-shadow duration-300 transform md:-translate-y-4">
            <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-6">
              <HelpCircle size={28} />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">2. Questionar</h4>
            <p className="text-slate-600 leading-relaxed text-sm">
              Colocamos à prova esses pensamentos. Eles são fatos ou interpretações? Flexibilizamos sua forma de ver o mundo.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center flex flex-col items-center h-full hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-6">
              <RefreshCw size={28} />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">3. Transformar</h4>
            <p className="text-slate-600 leading-relaxed text-sm">
              Desenvolvemos novos comportamentos. A mudança sai do consultório e entra na sua vida prática, gerando autonomia.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Methodology;