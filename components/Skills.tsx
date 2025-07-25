
import React from 'react';
import type { Skill } from '../types';
import ParallaxTilt from 'react-parallax-tilt';

const skills: Skill[] = [
  { group: "Programming Languages", items: ["Java", "Python", "C"] },
  { group: "Web Technologies", items: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Tailwind CSS"] },
  { group: "Database", items: ["SQL", "MySQL"] },
  { group: "AI & ML Tools", items: ["Google Generative AI (Gemini)", "Prompt Engineering"] },
  { group: "Platforms & Tools", items: ["GitHub", "Netlify", "VS Code", "Google Colab"] },
  { group: "Version Control", items: ["Git"] },
];

const SectionTitle = ({ icon, children }: { icon: string; children: React.ReactNode }) => (
    <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center">
        <span className="text-4xl mr-4">{icon}</span>
        {children}
    </h2>
);

const Skills = () => (
  <ParallaxTilt glareEnable={true} glareMaxOpacity={0.12} scale={1.03} transitionSpeed={1200} className="rounded-3xl">
    <section id="skills" className="max-w-4xl mx-auto bg-[#181f36] p-8 md:p-12 rounded-3xl shadow-lg shadow-blue-900">
      <SectionTitle icon="🛠️"><span className="text-white">Skills</span></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        <div>
          <h3 className="font-bold text-blue-400 mb-2">Programming Languages</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-900 text-blue-200 text-sm font-semibold px-3 py-1 rounded-full">Java</span>
            <span className="bg-blue-900 text-blue-200 text-sm font-semibold px-3 py-1 rounded-full">Python</span>
          </div>
          <h3 className="font-bold text-blue-400 mb-2">Web Development</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-900 text-blue-200 text-sm font-semibold px-3 py-1 rounded-full">HTML5</span>
            <span className="bg-blue-900 text-blue-200 text-sm font-semibold px-3 py-1 rounded-full">CSS3</span>
            <span className="bg-blue-900 text-blue-200 text-sm font-semibold px-3 py-1 rounded-full">JavaScript</span>
          </div>
          <h3 className="font-bold text-blue-400 mb-2">Databases</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-900 text-blue-200 text-sm font-semibold px-3 py-1 rounded-full">SQL</span>
            <span className="bg-blue-900 text-blue-200 text-sm font-semibold px-3 py-1 rounded-full">MongoDB</span>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-blue-400 mb-2">Tools & Platforms</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-900 text-blue-200 text-sm font-semibold px-3 py-1 rounded-full">GitHub</span>
            <span className="bg-blue-900 text-blue-200 text-sm font-semibold px-3 py-1 rounded-full">Jupyter Notebook</span>
            <span className="bg-blue-900 text-blue-200 text-sm font-semibold px-3 py-1 rounded-full">Netlify</span>
            <span className="bg-blue-900 text-blue-200 text-sm font-semibold px-3 py-1 rounded-full">Vercel</span>
          </div>
          <h3 className="font-bold text-blue-400 mb-2">Additional Skills</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-900 text-blue-200 text-sm font-semibold px-3 py-1 rounded-full">Prompt Engineering</span>
            <span className="bg-blue-900 text-blue-200 text-sm font-semibold px-3 py-1 rounded-full">API Integration</span>
            <span className="bg-blue-900 text-blue-200 text-sm font-semibold px-3 py-1 rounded-full">Version Control (Github)</span>
            <span className="bg-blue-900 text-blue-200 text-sm font-semibold px-3 py-1 rounded-full">Deployment & Hosting</span>
          </div>
        </div>
      </div>
    </section>
  </ParallaxTilt>
);

export default Skills;
