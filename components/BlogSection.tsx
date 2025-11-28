import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogSectionProps {
  onReadArticle: (post: BlogPost) => void;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: "Como diferenciar tristeza de depressão?",
    excerpt: "Entenda os sinais de alerta e quando é o momento certo de procurar ajuda profissional para lidar com seus sentimentos.",
    date: "12 Out, 2023",
    readTime: "5 min",
    category: "Saúde Mental",
    content: `
      <p>Todos nós passamos por momentos de tristeza. O luto por uma perda, o fim de um relacionamento ou frustrações profissionais são gatilhos naturais. No entanto, quando essa tristeza persiste e começa a afetar nossa funcionalidade diária, podemos estar lidando com algo mais sério.</p>
      <h3>Sinais de Alerta</h3>
      <p>A depressão clínica vai além de sentir-se "pra baixo". Ela envolve uma alteração química no cérebro que afeta sono, apetite e a capacidade de sentir prazer.</p>
      <ul>
        <li>Perda de interesse em atividades antes prazerosas</li>
        <li>Alterações significativas de sono (insônia ou hipersonia)</li>
        <li>Sentimento constante de culpa ou inutilidade</li>
        <li>Fadiga crônica</li>
      </ul>
      <p>Se você se identifica com estes sintomas por mais de duas semanas, buscar ajuda profissional é um ato de coragem e autocuidado.</p>
    `
  },
  {
    id: '2',
    title: "5 Técnicas de TCC para Ansiedade",
    excerpt: "Ferramentas práticas que você pode aplicar no seu dia a dia para retomar o controle durante uma crise de ansiedade.",
    date: "28 Set, 2023",
    readTime: "7 min",
    category: "Autocuidado",
    content: `
      <p>A Terapia Cognitivo-Comportamental oferece ferramentas poderosas para o manejo da ansiedade. Aqui estão cinco técnicas básicas:</p>
      <h3>1. Respiração Diafragmática</h3>
      <p>Acalmar o corpo é o primeiro passo para acalmar a mente. Respire fundo contando até 4, segure por 2, e solte em 6 segundos.</p>
      <h3>2. O Questionamento Socrático</h3>
      <p>Pergunte a si mesmo: "Que evidências eu tenho de que isso vai dar errado?". Muitas vezes, sofremos pelo que imaginamos, não pelo que acontece.</p>
    `
  },
  {
    id: '3',
    title: "A importância do autoconhecimento",
    excerpt: "Por que entender suas próprias emoções é a chave para relacionamentos mais saudáveis e uma vida mais plena.",
    date: "15 Set, 2023",
    readTime: "4 min",
    category: "Desenvolvimento",
    content: "<p>Conteúdo sobre autoconhecimento...</p>"
  }
];

const BlogSection: React.FC<BlogSectionProps> = ({ onReadArticle }) => {
  return (
    <section id="blog" className="py-24 bg-white border-t border-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-sm font-bold text-sage-600 uppercase tracking-widest mb-2">Blog & Artigos</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
              Conteúdo para sua saúde mental
            </h3>
          </div>
          <a href="#" className="hidden md:flex items-center text-sage-700 font-bold hover:text-sage-900 transition-colors">
            Ver todos os artigos <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl border border-slate-100 hover:border-sage-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden cursor-pointer"
              onClick={() => onReadArticle(post)}
            >
              <div className="h-48 bg-sand-200 overflow-hidden relative">
                {/* Placeholder Image Overlay */}
                <div className="absolute inset-0 bg-sage-900/10 group-hover:bg-sage-900/0 transition-all duration-500"></div>
                <img 
                  src={`https://picsum.photos/seed/${post.id}/800/600?grayscale`} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider text-sage-800">
                  {post.category}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                </div>
                
                <h4 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-sage-700 transition-colors line-clamp-2">
                  {post.title}
                </h4>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-sage-600 font-bold text-sm group-hover:translate-x-2 transition-transform duration-300">
                  Ler artigo completo <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
           <a href="#" className="inline-flex items-center text-sage-700 font-bold hover:text-sage-900 transition-colors">
            Ver todos os artigos <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default BlogSection;