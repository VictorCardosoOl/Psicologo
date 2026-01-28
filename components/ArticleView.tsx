import React from 'react';
import { BlogPost } from '../types';
import { Calendar, Clock, ArrowLeft, MessageCircle } from 'lucide-react';

interface ArticleViewProps {
  article: BlogPost;
  onBack: () => void;
}

const ArticleView: React.FC<ArticleViewProps> = ({ article, onBack }) => {
  return (
    <article className="min-h-screen bg-white pt-24 pb-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative">
        <button
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-slate-500 hover:text-primary-700 font-bold transition-colors"
        >
          <ArrowLeft size={20} /> Voltar para o Blog
        </button>

        <header className="mb-12">
          <div className="flex gap-4 text-xs font-bold text-primary-600 uppercase mb-4">
            <span className="bg-primary-50 px-3 py-1 rounded-full">{article.category}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-slate-500 text-sm border-b border-slate-100 pb-8">
            <span className="flex items-center gap-1"><Calendar size={14} /> {article.date}</span>
            <span className="flex items-center gap-1"><Clock size={14} /> {article.readTime}</span>
          </div>
        </header>

        <div
          className="prose prose-lg prose-slate prose-headings:font-serif prose-headings:text-slate-900 prose-a:text-primary-600"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* CTA Next Step */}
        <div className="mt-16 bg-slate-900 text-white p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-serif font-bold mb-4">Gostou do conteúdo?</h3>
          <p className="text-slate-300 mb-8 max-w-lg mx-auto">
            Ler sobre o assunto é o primeiro passo. Vamos aplicar isso juntos na sua vida?
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 px-8 py-3 rounded-xl font-bold transition-colors">
            <MessageCircle size={20} /> Agendar uma sessão
          </a>
        </div>
      </div>
    </article>
  );
};

export default ArticleView;