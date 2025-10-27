import React from 'react';

const ProjectsGrid = ({ projects, onOpen }) => {
  return (
    <section className="relative w-full bg-black text-white">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Active Projects</h2>
            <p className="text-gray-300 mt-1">Explorations from lab to real-world pilots.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <button
              key={p.slug}
              onClick={() => onOpen(p.slug)}
              className="text-left group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.07] transition-colors overflow-hidden"
            >
              <div className="aspect-video w-full bg-gradient-to-tr from-zinc-800 to-zinc-900" />
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-gray-300">
                  <span className="px-2 py-0.5 rounded-full bg-white/10 border border-white/10">{p.category}</span>
                  <span className="px-2 py-0.5 rounded-full bg-white/10 border border-white/10">{p.stage}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold group-hover:text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-300 line-clamp-2">{p.summary}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
