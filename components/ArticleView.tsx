import React, { useEffect, useState } from 'react';
import { BlogPost } from '../types';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface ArticleViewProps {
  article: BlogPost;
  onBack: () => void;
}

const ArticleView: React.FC<ArticleViewProps> = ({ article, onBack }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <article className="min-h-screen bg-white pt-20 pb-32">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-20 left-0 right-0 h-1 bg-sage-500 origin-left z-40"
        style={{ scaleX }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative">
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="fixed top-24 left-4 lg:left-12 p-3 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-sage-700 hover:border-sage-300 transition-all z-30 shadow-sm group"
          title="Voltar"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        </button>

        {/* Header */}
        <header className="mb-12 pt-12 text-center">
          <div className="flex items-center justify-center gap-4 text-xs font-bold text-sage-600 tracking-wider uppercase mb-6">
            <span className="bg-sage-50 px-3 py-1 rounded-full">{article.category}</span>
            <span className="flex items-center gap-1"><Clock size={14} /> {article.readTime} de leitura</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center justify-center gap-4 border-y border-slate-100 py-6">
            <img src="https://images.unsplash.com/photo-1559839734-2b71ea86b48e?q=80&w=100" alt="Author" className="w-12 h-12 rounded-full object-cover grayscale" />
            <div className="text-left">
              <p className="text-sm font-bold text-slate-900">Dr. André Silva</p>
              <p className="text-xs text-slate-500 flex items-center gap-1"><Calendar size={12} /> {article.date}</p>
            </div>
          </div>
        </header>

        {/* Content */}
        <div 
          className="prose prose-lg prose-slate prose-headings:font-serif prose-headings:text-slate-900 prose-a:text-sage-600 hover:prose-a:text-sage-700 prose-img:rounded-xl mx-auto"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Footer / Share */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex justify-between items-center">
          <p className="text-slate-500 italic">Achou este artigo útil?</p>
          <button className="flex items-center gap-2 text-sage-700 font-bold hover:bg-sage-50 px-4 py-2 rounded-lg transition-colors">
            <Share2 size={18} /> Compartilhar
          </button>
        </div>
      </div>
    </article>
  );
};

export default ArticleView;