import React from 'react';
import { motion } from 'motion/react';
import { Code2, Smartphone, Database, Bot } from 'lucide-react';

export default function About() {
  const skills = [
    { name: 'Flutter', icon: <Smartphone className="w-6 h-6" />, level: 90, color: 'bg-blue-500' },
    { name: 'React', icon: <Code2 className="w-6 h-6" />, level: 85, color: 'bg-cyan-500' },
    { name: 'Node.js', icon: <Database className="w-6 h-6" />, level: 80, color: 'bg-green-500' },
    { name: 'AI Agents', icon: <Bot className="w-6 h-6" />, level: 75, color: 'bg-purple-500' },
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            About Me
          </motion.h2>
          <div className="w-20 h-1.5 bg-[#a259ff] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Empowering Ideas Through Code.
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6 text-lg">
              I am a passionate developer with a strong foundation in modern web and mobile tech stacks. From crafting fluid user interfaces in Flutter and React to building robust, scalable backend services with Node.js, I handle end-to-end development lifecycles.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8 text-lg">
              Recently, my focus has also expanded into AI Agent Development, integrating intelligent, autonomous capabilities into digital products to solve complex real-world problems.
            </p>
            <div className="flex gap-4">
              <a 
                href="/zawminhtwe/assets/resume.pdf"
                download="Zaw_Min_Htwe_Resume.pdf"
                className="px-6 py-3 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors inline-flex justify-center items-center"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {skills.map((skill, index) => (
              <div key={skill.name}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg text-white ${skill.color}`}>
                      {skill.icon}
                    </div>
                    <span className="font-bold text-slate-700">{skill.name}</span>
                  </div>
                  <span className="font-semibold text-slate-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                    className={`h-full ${skill.color}`}
                  ></motion.div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
