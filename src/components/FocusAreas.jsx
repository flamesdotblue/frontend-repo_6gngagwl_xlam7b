import React from 'react';
import { Bot, Activity, Brain, Cpu } from 'lucide-react';

const areas = [
  {
    icon: Bot,
    title: 'Robotics',
    desc: 'Autonomous systems, tactile manipulation, and human-robot collaboration with safety-first design.'
  },
  {
    icon: Activity,
    title: 'Health Technology',
    desc: 'Clinically responsible digital therapeutics, edge diagnostics, and ambient wellness sensing.'
  },
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    desc: 'Model efficiency, multimodal reasoning, and robust deployment for real-world impact.'
  },
  {
    icon: Cpu,
    title: 'Emerging Frontiers',
    desc: 'Computational materials, edge computing, and novel interaction paradigms for the next decade.'
  }
];

const FocusAreas = () => {
  return (
    <section className="relative w-full bg-black text-white">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Focus Areas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.07] transition-colors">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-tr from-orange-500/20 to-amber-400/20 border border-white/10 mb-4">
                <Icon className="w-6 h-6 text-orange-300" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-gray-300 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
