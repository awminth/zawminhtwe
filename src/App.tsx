/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';

function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 bg-white/75 backdrop-blur-md shadow-sm border-b border-slate-100 transition-all w-full">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between py-4 px-6 md:px-12 w-full">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#a259ff] flex items-center justify-center text-white font-bold text-xl">
            Z
          </div>
          <span className="font-bold text-2xl tracking-tight text-slate-900">Zaw</span>
        </div>
        
        <nav className="hidden lg:flex items-center gap-8">
          {[
            { name: 'Home', desc: 'Return to the main homepage', href: '#home' },
            { name: 'About', desc: 'Learn about my background and skills', href: '#about' },
            { name: 'Services', desc: 'Explore my AI and development services', href: '#services' },
            { name: 'Process', desc: 'How I approach and deliver projects', href: '#process' },
            { name: 'Portfolio', desc: 'View my previous work and case studies', href: '#portfolio' }
          ].map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              title={item.desc}
              className="text-sm font-medium text-slate-500 hover:text-[#a259ff] transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center px-6 md:px-12 py-12 lg:py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-bold text-slate-900 leading-[1.05] tracking-tight mb-6">
          Hello, I'm <br /> Zaw Min Htwe
        </h1>
        <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-lg">
          I am a developer specializing in Flutter, React, Node.js, and AI Agent Development. 
          I strive to build immersive and intelligent applications through carefully crafted code.
        </p>
        <button className="bg-[#a259ff] hover:bg-[#8b4ce0] text-white px-8 py-4 rounded-xl text-base font-medium transition-colors shadow-lg shadow-purple-200/50">
          Say Hello!
        </button>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative flex justify-center lg:justify-end"
      >
        {/* Image container with white frame */}
        <div className="bg-white p-4 rounded-[2rem] shadow-2xl shadow-slate-200/50 max-w-md w-full">
          <img 
            src="/zawminhtwe/assets/profile.jpg" 
            alt="Zaw Min Htwe" 
            className="w-full h-auto rounded-[1.5rem] object-cover aspect-[4/5]"
          />
        </div>
      </motion.div>
    </section>
  );
}

function Stats() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="px-6 md:px-12 pb-20 mt-8 lg:mt-0"
    >
      <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 p-10 lg:p-12 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          <div className="flex flex-col items-center justify-center text-center pt-4 sm:pt-0">
            <span className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2">15 Y.</span>
            <span className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Experience</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center pt-4 sm:pt-0">
            <span className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2">250+</span>
            <span className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Projects Done</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center pt-4 sm:pt-0">
            <span className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2">58</span>
            <span className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Happy Clients</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans selection:bg-purple-200 selection:text-purple-900">
      <Header />
      <div className="max-w-[1400px] mx-auto pt-[80px]">
        <main>
          <Hero />
          <Stats />
          <About />
          <Services />
          <Process />
          <Portfolio />
        </main>
      </div>
    </div>
  );
}
