
import React from 'react';
import ParallaxTilt from 'react-parallax-tilt';

const SectionTitle = ({ icon, children }: { icon: string; children: React.ReactNode }) => (
    <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center">
        <span className="text-4xl mr-4">{icon}</span>
        {children}
    </h2>
);

const ContactLink = ({ href, text, icon }: { href: string; text: string, icon: React.ReactNode }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors">
        <div className="text-blue-600 mr-4">{icon}</div>
        <span className="font-semibold text-slate-700 hover:text-blue-600">{text}</span>
    </a>
)

const Contact = () => (
  <ParallaxTilt glareEnable={true} glareMaxOpacity={0.12} scale={1.03} transitionSpeed={1200} className="rounded-3xl">
    <section id="contact" className="max-w-4xl mx-auto bg-[#181f36] p-8 md:p-12 rounded-3xl shadow-lg shadow-blue-900">
      <SectionTitle icon="📬"><span className="text-white">Contact</span></SectionTitle>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {/* Email */}
        <a href="mailto:palakolanudhanunjayreddy@gmail.com" className="group bg-white/10 backdrop-blur-md border-2 border-transparent hover:border-blue-400 transition rounded-2xl p-6 flex items-center gap-4 shadow-xl hover:shadow-blue-400/40">
          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-blue-800 text-white text-2xl shadow-md group-hover:scale-110 transition">📧</span>
          <div className="ml-2">
            <div className="font-bold text-white">Email</div>
            <div className="text-blue-200 text-sm">palakolanudhanunjayreddy@gmail.com</div>
          </div>
        </a>
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/dhanunjay-reddy-palakolanu-pdr" target="_blank" rel="noopener noreferrer" className="group bg-white/10 backdrop-blur-md border-2 border-transparent hover:border-blue-400 transition rounded-2xl p-6 flex items-center gap-4 shadow-xl hover:shadow-blue-400/40">
          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-blue-800 text-white text-2xl shadow-md group-hover:scale-110 transition">
            {/* LinkedIn SVG */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/>
            </svg>
          </span>
          <div className="ml-2">
            <div className="font-bold text-white">LinkedIn</div>
            <div className="text-blue-200 text-sm">dhanunjay-reddy-palakolanu-pdr</div>
          </div>
        </a>
        {/* GitHub */}
        <a href="https://github.com/PDReddyDhanu" target="_blank" rel="noopener noreferrer" className="group bg-white/10 backdrop-blur-md border-2 border-transparent hover:border-blue-400 transition rounded-2xl p-6 flex items-center gap-4 shadow-xl hover:shadow-blue-400/40">
          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-blue-800 text-white text-2xl shadow-md group-hover:scale-110 transition">
            {/* GitHub SVG */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </span>
          <div className="ml-2">
            <div className="font-bold text-white">GitHub</div>
            <div className="text-blue-200 text-sm">PDReddyDhanu</div>
          </div>
        </a>
        {/* YouTube */}
        <a href="https://youtube.com/@pdreddy?si=klmkcECfuBRXST-i" target="_blank" rel="noopener noreferrer" className="group bg-white/10 backdrop-blur-md border-2 border-transparent hover:border-blue-400 transition rounded-2xl p-6 flex items-center gap-4 shadow-xl hover:shadow-blue-400/40">
          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-pink-500 to-red-600 text-white text-2xl shadow-md group-hover:scale-110 transition">▶️</span>
          <div className="ml-2">
            <div className="font-bold text-white">YouTube</div>
            <div className="text-blue-200 text-sm">@pdreddy</div>
          </div>
        </a>
        {/* X (Twitter) */}
        <a href="https://x.com/PDReddyDhanu" target="_blank" rel="noopener noreferrer" className="group bg-white/10 backdrop-blur-md border-2 border-transparent hover:border-blue-400 transition rounded-2xl p-6 flex items-center gap-4 shadow-xl hover:shadow-blue-400/40">
          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-gray-700 to-black text-white text-2xl shadow-md group-hover:scale-110 transition">𝕏</span>
          <div className="ml-2">
            <div className="font-bold text-white">X (Twitter)</div>
            <div className="text-blue-200 text-sm">@PDReddyDhanu</div>
          </div>
        </a>
      </div>
      <p className="text-center mt-10 text-slate-400">Location: Hyderabad, India</p>
    </section>
  </ParallaxTilt>
);

export default Contact;
