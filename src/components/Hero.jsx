import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xXD1hOqciVNtJX50/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black pointer-events-none" />

      <div className="relative container mx-auto px-6 md:px-10 lg:px-16 pt-28 pb-14 flex flex-col items-start">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-2 border border-white/10">
          <Rocket className="w-4 h-4 text-orange-400" />
          <span className="text-sm text-gray-200">QeinTech Innovation Division</span>
        </div>
        <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
          Futuristic Research & Development
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400">Powered by Imagination</span>
        </h1>
        <p className="mt-6 max-w-2xl text-gray-300 text-lg leading-relaxed">
          We are the Innovation Division of QeinTech with active funding of over $2,000. Focused on Robotics, Health Technology, Artificial Intelligence, and emerging frontiers.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-gray-200">Founder & CRO: <span className="text-white font-semibold">Karan Jadaun</span></span>
          <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-gray-200">Funding: <span className="text-white font-semibold">$2,000+</span></span>
          <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-gray-200">Domains: Robotics • HealthTech • AI • More</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
