
import React from 'react';
import ParallaxTilt from 'react-parallax-tilt';

const achievements: string[] = [
  "Top 10% in AICTE GenAI Virtual Internship",
  "Multiple live project deployments on Netlify",
  "Consistently maintained 8.74+ CGPA in engineering",
  "Certified in Python by IIT Bombay and Full Stack Web Development",
  "Delivered practical impact through real-world AI and web projects",
];

const SectionTitle = ({ icon, children }: { icon: string; children: React.ReactNode }) => (
    <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center">
        <span className="text-4xl mr-4">{icon}</span>
        {children}
    </h2>
);

const TrophyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
);


const Achievements = () => (
  <ParallaxTilt glareEnable={true} glareMaxOpacity={0.12} scale={1.03} transitionSpeed={1200} className="rounded-3xl">
    <section id="achievements" className="max-w-4xl mx-auto bg-[#181f36] p-8 md:p-12 rounded-3xl shadow-lg shadow-blue-900">
      <SectionTitle icon="🏆"><span className="text-white">Achievements</span></SectionTitle>
      <div className="mt-6 text-slate-300">
        <ul className="space-y-3">
          <li>Completed multiple industry-recognized virtual internships in AI & ML, Google Generative AI, and Web Full Stack Development.</li>
          <li>Successfully completed Microsoft AI-900 and AI-102 certifications as part of the Infosys Finishing School for Employability Training (2025).</li>
          <li>Built and deployed real-world projects including Short Music Tunes and an AI Chatbot Assistant, showcasing practical application of full stack and AI knowledge.</li>
          <li>Actively contributed to open-source projects and collaborated with peers on GitHub, enhancing teamwork and version control skills.</li>
        </ul>
      </div>
    </section>
  </ParallaxTilt>
);

export default Achievements;
