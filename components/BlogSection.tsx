import React, { useState, useLayoutEffect, useRef } from 'react';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { BlogPost } from '../types';
import { blogPosts } from '../data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface BlogSectionProps {
  onReadArticle: (post: BlogPost) => void;
}

const BlogSection: React.FC<BlogSectionProps> = ({ onReadArticle }) => {
  const containerRef = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState<string>('Todos');
  const categories = ['Todos', 'Ansiedade', 'Depressão', 'Autoconhecimento', 'TCC'];

  const filteredPosts = filter === 'Todos'
    ? blogPosts
    : blogPosts.filter(post => post.category === filter);

  useLayoutEffect(() => {
    // Force reset for new items when filter changes by using a unique key or just simple from animation
    // But since we are mounting/remounting logic in React, GSAP needs to know about updates.
    // For simplicity in this static section, we animate the container entering viewport, 
    // and maybe re-animate on filter change if desired. Here we stick to entry animation.

    const ctx = gsap.context(() => {
      // Header Reveal
      gsap.from(".reveal-header", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".blog-header",
          start: "top 80%",
        }
      });

      // Filter Buttons
      gsap.from(".filter-btn", {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".blog-header",
          start: "top 80%",
        }
      });

      // Initial Grid Animation
      gsap.from(".blog-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".blog-grid",
          start: "top 85%",
        }
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="blog" className="py-24 bg-slate-50">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">

        <div className="blog-header text-center mb-12">
          <h2 className="reveal-header text-sm font-bold text-primary-600 uppercase tracking-widest mb-2">Blog & Artigos</h2>
          <h3 className="reveal-header text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-8">
            Conteúdo Educativo
          </h3>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`filter-btn px-4 py-2 rounded-full text-sm font-bold transition-all ${filter === cat
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-200'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="blog-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="blog-card bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col"
              onClick={() => onReadArticle(post)}
            >
              <div className="h-48 bg-slate-200 relative overflow-hidden group cursor-pointer">
                <img
                  src={`https://picsum.photos/seed/${post.id}/800/600`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  alt={post.title}
                />
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-primary-800 flex items-center gap-1">
                  <Tag size={12} /> {post.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h4 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">{post.title}</h4>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-1">{post.excerpt}</p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs text-slate-400">
                  <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  <span className="text-primary-600 font-bold flex items-center gap-1 cursor-pointer hover:underline">
                    Ler Artigo <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;