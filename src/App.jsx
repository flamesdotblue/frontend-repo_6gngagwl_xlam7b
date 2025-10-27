import React, { useEffect, useMemo, useState } from 'react';
import Hero from './components/Hero';
import FocusAreas from './components/FocusAreas';
import ProjectsGrid from './components/ProjectsGrid';
import ProjectPage from './components/ProjectPage';

const projectsSeed = [
  {
    slug: 'atlas-microbotics',
    title: 'ATLAS Microbotics',
    category: 'Robotics',
    stage: 'Prototype',
    lead: 'Karan Jadaun',
    updated: 'Oct 2025',
    summary: 'A swarm of palm-sized robots for cooperative inspection and micro-assembly in constrained environments.',
    details: [
      'ATLAS Microbotics explores distributed autonomy where small, low-cost units collaborate to outperform a single large robot in coverage, redundancy, and resilience.',
      'Key areas include SLAM on constrained hardware, ultra-wideband localization, and task allocation across a heterogeneous swarm.'
    ]
  },
  {
    slug: 'aether-health-ai',
    title: 'AETHER Health AI',
    category: 'HealthTech',
    stage: 'Pilot',
    lead: 'Clinical Partners',
    updated: 'Sep 2025',
    summary: 'Edge-first clinical decision support that safeguards privacy while enabling rapid triage and remote monitoring.',
    details: [
      'AETHER operates on-device to analyze vitals and patient-reported symptoms, producing actionable signals clinicians can trust.',
      'Our focus is model calibration, bias monitoring, and interoperable data pipelines aligned with healthcare standards.'
    ]
  },
  {
    slug: 'neon-reasoner',
    title: 'NEON Reasoner',
    category: 'AI',
    stage: 'Research',
    lead: 'QeinTech AI Lab',
    updated: 'Aug 2025',
    summary: 'A multimodal reasoning engine targeting reliable tool-use, planning, and grounded explanations.',
    details: [
      'NEON Reasoner investigates architectures that explicitly model uncertainty and leverage external tools to improve reliability.',
      'We benchmark on complex tasks with verifiable outcomes and prioritize safe, predictable behavior.'
    ]
  }
];

function App() {
  const [route, setRoute] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handler = () => setRoute(window.location.hash || '#/');
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  const openProject = (slug) => {
    window.location.hash = `#/projects/${slug}`;
  };

  const goHome = () => {
    window.location.hash = '#/';
  };

  const currentProject = useMemo(() => {
    const match = route.match(/^#\/projects\/(.+)$/);
    if (!match) return null;
    const slug = decodeURIComponent(match[1]);
    return projectsSeed.find((p) => p.slug === slug) || null;
  }, [route]);

  if (currentProject) {
    return <ProjectPage project={currentProject} onBack={goHome} />;
  }

  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <FocusAreas />
      <ProjectsGrid projects={projectsSeed} onOpen={openProject} />
      <footer className="border-t border-white/10 bg-black">
        <div className="container mx-auto px-6 md:px-10 lg:px-16 py-10 text-sm text-gray-400 flex flex-col md:flex-row gap-3 items-start md:items-center justify-between">
          <p>© {new Date().getFullYear()} QeinTech Innovation Division. All rights reserved.</p>
          <p>Futuristic, dark and modern R&D built for Robotics, Health Technology, Artificial Intelligence, and more.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
