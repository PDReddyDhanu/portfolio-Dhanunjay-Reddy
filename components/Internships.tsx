import React from 'react';
import ParallaxTilt from 'react-parallax-tilt';

const SectionTitle = ({ icon, children }: { icon: string; children: React.ReactNode }) => (
  <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
    <span className="text-4xl mr-4">{icon}</span>
    {children}
  </h2>
);

const Internships = () => (
  <ParallaxTilt glareEnable={true} glareMaxOpacity={0.12} scale={1.03} transitionSpeed={1200} className="rounded-3xl">
    <section id="internships" className="max-w-4xl mx-auto bg-[#181f36] p-8 md:p-12 rounded-3xl shadow-lg shadow-blue-900 mt-8">
      <SectionTitle icon="🧑‍💼"><span className="text-white">Virtual Internships</span></SectionTitle>
      <div className="mt-6 text-slate-300 space-y-6">
        <div>
          <h3 className="text-lg font-bold text-blue-400 mb-1">Google Generative AI Internship</h3>
          <div className="text-slate-400 text-sm mb-1">Google Cloud & AICTE via EduSkill – September 2024</div>
          <p>Learned to build and deploy generative AI solutions using tools like Gemini, Vertex AI, and Google Cloud Console. Completed hands-on labs focused on text and image generation, prompt engineering, and ethical AI practices.</p>
          <a href="/google_gen_ai.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline font-semibold text-sm">Certificate</a>
        </div>
        <div>
          <h3 className="text-lg font-bold text-blue-400 mb-1">Artificial Intelligence & Machine Learning Internship</h3>
          <div className="text-slate-400 text-sm mb-1">Google & AICTE via EduSkill – March 2025</div>
          <p>Gained practical exposure to supervised and unsupervised learning, NLP, computer vision, and real-time ML applications. Designed basic models and evaluated performance metrics as part of the final project.</p>
          <a href="/aiml.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline font-semibold text-sm">Certificate</a>
        </div>
        <div>
          <h3 className="text-lg font-bold text-blue-400 mb-1">Web Full Stack Development Internship</h3>
          <div className="text-slate-400 text-sm mb-1">EduSkill Academy – June 2025</div>
          <p>Built end-to-end web apps using HTML5, CSS3, JavaScript, and introduction to backend concepts. Explored Git, version control, and deployment on platforms like Netlify and Vercel. Reinforced concepts through mini-projects and weekly tasks.</p>
          <a href="/web_full_stack.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline font-semibold text-sm">Certificate</a>
        </div>
      </div>
    </section>
  </ParallaxTilt>
);

export default Internships; 