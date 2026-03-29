import React from 'react';
import { motion } from 'motion/react';
import { Layout, Smartphone, Server, Sparkles } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Mobile App Development',
      description: 'Building cross-platform, natively compiled applications for mobile from a single codebase using Flutter.',
      icon: <Smartphone className="w-8 h-8 text-white" />,
      color: 'bg-blue-500',
      delay: 0.1
    },
    {
      title: 'Frontend Web Development',
      description: 'Creating interactive, highly responsive, and accessible web interfaces using React and modern CSS frameworks.',
      icon: <Layout className="w-8 h-8 text-white" />,
      color: 'bg-cyan-500',
      delay: 0.2
    },
    {
      title: 'Backend Engineering',
      description: 'Designing robust API architectures and database structures with Node.js and Express to power modern apps.',
      icon: <Server className="w-8 h-8 text-white" />,
      color: 'bg-green-500',
      delay: 0.3
    },
    {
      title: 'AI Agent Development',
      description: 'Integrating LLMs and intelligent agents into workflows to automate tasks and provide smart, context-aware features.',
      icon: <Sparkles className="w-8 h-8 text-white" />,
      color: 'bg-purple-500',
      delay: 0.4
    }
  ];

  return (
    <section id="services" className="py-20 px-6 md:px-12 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            My Services
          </motion.h2>
          <div className="w-20 h-1.5 bg-[#a259ff] mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-500 text-lg max-w-2xl mx-auto">
            I deliver high-quality, end-to-end digital experiences tailored to your business needs, leveraging the latest technologies and methodologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: service.delay }}
              className="bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100"
            >
              <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
