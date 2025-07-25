
import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="text-center py-6 bg-[#181f36] border-t border-blue-900 text-slate-300 flex flex-col items-center gap-2">
            <div className="flex gap-4 mb-2">
                <a href="https://github.com/PDReddyDhanu" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    {/* GitHub SVG */}
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/dhanunjay-reddy-palakolanu-pdr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    {/* LinkedIn SVG */}
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/>
                    </svg>
                </a>
                <a href="https://youtube.com/@pdreddy?si=klmkcECfuBRXST-i" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    {/* YouTube SVG */}
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.12C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.386.566a2.994 2.994 0 0 0-2.112 2.12C0 8.357 0 12 0 12s0 3.643.502 5.814a2.994 2.994 0 0 0 2.112 2.12C4.772 20.5 12 20.5 12 20.5s7.228 0 9.386-.566a2.994 2.994 0 0 0 2.112-2.12C24 15.643 24 12 24 12s0-3.643-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                </a>
                <a href="https://x.com/PDReddyDhanu" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    {/* X (Twitter) SVG */}
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.162 0h-4.327l-5.835 8.228L6.165 0H.003l7.527 11.012L.003 24h4.327l6.003-8.463L17.835 24h4.327l-7.527-11.012L22.162 0zm-2.47 22.285l-5.692-8.06-5.692 8.06H2.64l7.36-10.764L2.64 1.715h2.668l5.692 8.06 5.692-8.06h2.668l-7.36 10.764 7.36 10.764h-2.668z"/>
                    </svg>
                </a>
            </div>
            <p className="text-slate-400">
                © {currentYear} Palakolanu Dhanunjay Reddy. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
