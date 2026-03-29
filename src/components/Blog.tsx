import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      title: 'State Management in Flutter: A 2026 Guide',
      category: 'Mobile Dev',
      date: 'Mar 15, 2026',
      read: '5 min read',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Building Intelligent AI Agents with LangChain',
      category: 'AI Agents',
      date: 'Feb 28, 2026',
      read: '8 min read',
      image: 'https://images.unsplash.com/photo-1620712948343-0056911f143c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Optimizing React Server Components',
      category: 'Web Dev',
      date: 'Jan 10, 2026',
      read: '6 min read',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    }
  ];

  return (
    <section id="blog" className="py-20 px-6 md:px-12 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
            >
              Latest Insights
            </motion.h2>
            <div className="w-20 h-1.5 bg-[#a259ff] rounded-full"></div>
          </div>
          <button className="flex items-center gap-2 text-[#a259ff] font-bold hover:text-[#8b4ce0] transition-colors">
            View All Posts <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 hover:shadow-xl transition-shadow border border-slate-100 group cursor-pointer"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 relative">
                <span className="absolute -top-4 right-8 bg-[#a259ff] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md shadow-purple-200">
                  {post.category}
                </span>
                <div className="flex gap-4 text-xs font-semibold text-slate-400 mb-4">
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4"/> {post.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4"/> {post.read}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-6 group-hover:text-[#a259ff] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:gap-3 transition-all">
                  Read Article <ArrowRight className="w-4 h-4 text-[#a259ff]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
