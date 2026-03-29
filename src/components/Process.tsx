import React from 'react';
import { motion } from 'motion/react';
import { Search, PenTool, Code, Rocket } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      title: 'Discovery & Plan',
      description: 'Understanding requirements, target audience, and creating an actionable project roadmap.',
      icon: <Search className="w-6 h-6" />
    },
    {
      title: 'UI/UX Design',
      description: 'Creating wireframes, interactive prototypes, and finalizing the visual aesthetics.',
      icon: <PenTool className="w-6 h-6" />
    },
    {
      title: 'Development',
      description: 'Writing clean, scalable code iteratively while maintaining consistent communication.',
      icon: <Code className="w-6 h-6" />
    },
    {
      title: 'Testing & Launch',
      description: 'Rigorous QA testing followed by deployment and post-launch support & monitoring.',
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  return (
    <section id="process" className="py-24 px-6 md:px-12 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 blur-[100px] rounded-full mt-[-100px] mr-[-100px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full mb-[-100px] ml-[-100px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Working Process
          </motion.h2>
          <div className="w-20 h-1.5 bg-[#a259ff] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Connection Line */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[calc(100%-40px)] h-px bg-slate-700"></div>
              )}
              
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-slate-800 border-4 border-slate-700 flex items-center justify-center mb-6 relative z-10 group-hover:border-[#a259ff] group-hover:bg-[#a259ff] group-hover:text-white transition-all duration-300 shadow-xl">
                  {step.icon}
                  <div className="absolute -bottom-3 -right-3 w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold ring-4 ring-slate-900">
                    0{index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm max-w-[250px]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
