import React from 'react';

const ProjectPage = ({ project, onBack }) => {
  if (!project) return null;

  return (
    <main className="min-h-screen w-full bg-black text-white">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 py-10">
        <button onClick={onBack} className="text-sm text-gray-300 hover:text-white mb-6 inline-flex items-center gap-2">
          <span className="inline-block w-5 h-5 rounded-full border border-white/20 text-center leading-5">←</span>
          Back
        </button>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="aspect-video w-full rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10" />
            <h1 className="mt-6 text-3xl md:text-4xl font-bold">{project.title}</h1>
            <p className="mt-3 text-gray-300 text-lg max-w-3xl">{project.summary}</p>
            <div className="mt-6 space-y-4 text-gray-300 leading-relaxed">
              {project.details.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
          <aside className="lg:col-span-1">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h2 className="font-semibold">Project Info</h2>
              <div className="mt-3 space-y-2 text-sm text-gray-300">
                <div className="flex items-center justify-between"><span>Category</span><span className="px-2 py-0.5 rounded-full bg-white/10 border border-white/10">{project.category}</span></div>
                <div className="flex items-center justify-between"><span>Stage</span><span>{project.stage}</span></div>
                <div className="flex items-center justify-between"><span>Lead</span><span>{project.lead}</span></div>
                <div className="flex items-center justify-between"><span>Last Updated</span><span>{project.updated}</span></div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;
