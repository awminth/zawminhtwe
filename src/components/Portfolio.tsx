import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'Point of Sale (POS) System',
      description: 'A comprehensive POS solution for modern businesses to manage sales, inventory, and analytics efficiently.',
      tags: ['React', 'Node.js', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      link: 'https://pos.brightwareitsolutions.site/',
    },
    {
      title: 'Hotel Management System',
      description: 'An all-in-one platform for managing hotel reservations, room availability, and guest services.',
      tags: ['React', 'Next.js', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      link: 'https://hotel.brightwareitsolutions.site/',
    },
    {
      title: 'School Management System',
      description: 'A powerful web application designed to manage student records, attendance, grades, and complete school administration.',
      tags: ['React', 'Express', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      link: 'https://sms.brightwareitsolutions.site/',
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            My Portfolio
          </motion.h2>
          <div className="w-20 h-1.5 bg-[#a259ff] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-3xl overflow-hidden bg-slate-50 border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" title="Visit Live Site" className="p-3 bg-white rounded-full text-slate-900 hover:text-[#a259ff] hover:scale-110 transition-all">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-800 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-200 text-slate-700 text-xs font-semibold rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
