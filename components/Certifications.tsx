
import React from 'react';
import ParallaxTilt from 'react-parallax-tilt';

const certifications: string[] = [
  "Python Programming – IIT Bombay Spoken Tutorial (2024)",
  "Google Generative AI – Google Cloud & AICTE (2024)",
  "AI & ML Virtual Internship – AICTE + Google (2025)",
  "Web Full Stack Developer – Edu Skill Academy (2025)",
];

const SectionTitle = ({ icon, children }: { icon: string; children: React.ReactNode }) => (
    <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center">
        <span className="text-4xl mr-4">{icon}</span>
        {children}
    </h2>
);

const CertificateIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 0118-8.944c0 1.964-.39 3.843-1.102 5.536" />
    </svg>
);

const Certifications = () => (
  <ParallaxTilt glareEnable={true} glareMaxOpacity={0.12} scale={1.03} transitionSpeed={1200} className="rounded-3xl">
    <section id="certifications" className="max-w-4xl mx-auto bg-[#181f36] p-8 md:p-12 rounded-3xl shadow-lg shadow-blue-900">
      <SectionTitle icon="🎓"><span className="text-white">Certifications</span></SectionTitle>
      <div className="mt-6 text-slate-300">
        <ul className="space-y-3">
          <li>
            <a href="/Microsoft.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline font-semibold">Microsoft AI Certificate (AI-102 & AI-900)</a><br/>
            Infosys Finishing School Employability Training (July 2025)<br/>
            <span className="text-slate-400 text-sm">Completed foundational (AI-900) and intermediate (AI-102) level courses on Artificial Intelligence, covering core AI concepts, Azure AI services, and real-world AI solution development under Infosys's employability training program.</span>
          </li>
          <li>
            <a href="/google_gen_ai.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline font-semibold">Google Generative AI</a><br/>
            Google Cloud & AICTE (September 2024)<br/>
            <span className="text-slate-400 text-sm">Focused on understanding and building generative AI models using Google’s platforms like Gemini and Vertex AI. Jointly certified by Google Cloud and AICTE.</span>
          </li>
          <li>
            <a href="/aiml.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline font-semibold">Artificial Intelligence & Machine Learning</a><br/>
            Google & AICTE (March 2025)<br/>
            <span className="text-slate-400 text-sm">An advanced certification covering machine learning algorithms, AI implementation strategies, and real-world applications—demonstrating a strong foundation in core AI/ML concepts.</span>
          </li>
          <li>
            <a href="/iit_bombay_python.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline font-semibold">Python Programming</a><br/>
            IIT Bombay – Spoken Tutorial (March 2024)<br/>
            <span className="text-slate-400 text-sm">Introductory to intermediate-level training in core Python concepts, endorsed by IIT Bombay, with hands-on coding and assessments under the Spoken Tutorial initiative.</span>
          </li>
          <li>
            <a href="/web_full_stack.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline font-semibold">Web Full Stack Development</a><br/>
            EduSkill Academy (June 2025)<br/>
            <span className="text-slate-400 text-sm">Comprehensive training across front-end (HTML, CSS, JavaScript) and back-end technologies. Complements hands-on projects like the Short Music Tunes and AI Chatbot Assistant web apps.</span>
          </li>
        </ul>
      </div>
    </section>
  </ParallaxTilt>
);

export default Certifications;
