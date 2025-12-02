// import { useState } from 'react';

const Reveal = ({ children }) => {
  return <div className="animate-fadeIn">{children}</div>;
};

export const About = () => {
  const techStack = [
    { 
      name: "JavaScript", 
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      borderHover: "hover:border-yellow-400",
      textHover: "group-hover:text-yellow-400",
      barHover: "group-hover:bg-yellow-400",
      bgGradient: "from-yellow-400/10 to-yellow-600/5"
    },
    { 
      name: "React.js", 
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      borderHover: "hover:border-blue-400",
      textHover: "group-hover:text-blue-400",
      barHover: "group-hover:bg-blue-400",
      bgGradient: "from-blue-400/10 to-blue-600/5"
    },
    { 
      name: "React Native", 
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      borderHover: "hover:border-sky-400",
      textHover: "group-hover:text-sky-400",
      barHover: "group-hover:bg-sky-400",
      bgGradient: "from-sky-400/10 to-sky-600/5"
    },
    { 
      name: "Vue.js", 
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      borderHover: "hover:border-emerald-400",
      textHover: "group-hover:text-emerald-400",
      barHover: "group-hover:bg-emerald-400",
      bgGradient: "from-emerald-400/10 to-emerald-600/5"
    },
    { 
      name: "Nuxt.js", 
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",
      borderHover: "hover:border-green-500",
      textHover: "group-hover:text-green-500",
      barHover: "group-hover:bg-green-500",
      bgGradient: "from-green-500/10 to-green-700/5"
    },
    { 
      name: "Angular", 
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      borderHover: "hover:border-red-500",
      textHover: "group-hover:text-red-500",
      barHover: "group-hover:bg-red-500",
      bgGradient: "from-red-500/10 to-red-700/5"
    },
    { 
      name: "TypeScript", 
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      borderHover: "hover:border-blue-500",
      textHover: "group-hover:text-blue-500",
      barHover: "group-hover:bg-blue-500",
      bgGradient: "from-blue-500/10 to-blue-700/5"
    },
    { 
      name: "Tailwind", 
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      borderHover: "hover:border-cyan-400",
      textHover: "group-hover:text-cyan-400",
      barHover: "group-hover:bg-cyan-400",
      bgGradient: "from-cyan-400/10 to-cyan-600/5"
    },
    { 
      name: "Next.js", 
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      borderHover: "hover:border-gray-400",
      textHover: "group-hover:text-gray-400",
      barHover: "group-hover:bg-gray-400",
      bgGradient: "from-gray-400/10 to-gray-600/5"
    }
  ];

  return (
    <section id="about" className="py-16 md:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[120px] translate-x-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20 items-center">
            
            {/* Left Column */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="inline-block mb-4">
                <span className="text-emerald-400 font-mono text-xs sm:text-sm tracking-widest uppercase border-b border-emerald-400/30 pb-1">
                  Who Is Legionite though?
                </span>
              </div>
              <h2 className="font-medium font-marker text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 leading-tight text-white">
                About <span className="text-emerald-400 relative inline-block">Me
                  <svg className="absolute -bottom-2 left-0 w-full opacity-60" height="10" viewBox="0 0 200 8" fill="none">
                    <path d="M0 4C50 4 50 0 100 4C150 8 150 0 200 4" stroke="#10b981" strokeWidth="3" fill="none"/>
                  </svg>
                </span>
              </h2>
              
              <div className="space-y-4 md:space-y-6 text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
                <p>
                  I'm Samuel Onwuka, also known as{" "}
                  <span className="text-white font-marker font-medium bg-white/10 px-2 py-0.5 rounded-md">
                    Legionite
                  </span>.
                  I am a dynamic Frontend Web Developer with over <span className="text-emerald-400 font-medium font-marker">4 years</span> of
                  expertise in building high-performance, user-focused web applications.
                </p>
            <p>
  Specializing in <strong className="text-white">React.js, Vue.js, and Nuxt.js</strong>, I consistently craft high-performance, scalable web applications that are both user-friendly and visually engaging. 
  I excel at optimizing page speed, streamlining workflows, and implementing modern front-end architectures, delivering solutions that not only look great but also drive tangible business value. 
  My expertise spans <span className="text-emerald-400 font-marker font-medium">component-based design, responsive layouts, state management, and code optimization</span>, ensuring products meet the highest standards of quality and maintainability.
</p>

                <p>
                  I blend technical excellence with strong collaboration to consistently exceed project goals,
                  delivering scalable, responsive digital experiences.
                </p>
              </div>

              {/* Stats Box */}
              <div className="mt-8 md:mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-slate-800/50 p-4 sm:p-5 rounded-xl border border-slate-700/50 hover:border-emerald-400/30 transition-all duration-300 hover:bg-slate-800/70">
                  <h4 className="font-bold text-2xl sm:text-3xl md:text-4xl text-emerald-400 mb-1">4+</h4>
                  <p className="text-xs sm:text-sm text-slate-400 font-medium">Years Experience</p>
                </div>
                <div className="bg-slate-800/50 p-4 sm:p-5 rounded-xl border border-slate-700/50 hover:border-emerald-400/30 transition-all duration-300 hover:bg-slate-800/70">
                  <h4 className="font-bold text-2xl sm:text-3xl md:text-4xl text-emerald-400 mb-1">20+</h4>
                  <p className="text-xs sm:text-sm text-slate-400 font-medium">Projects Done</p>
                </div>
                <div className="bg-slate-800/50 p-4 sm:p-5 rounded-xl border border-slate-700/50 hover:border-emerald-400/30 transition-all duration-300 hover:bg-slate-800/70 col-span-2 sm:col-span-1">
                  <h4 className="font-bold text-2xl sm:text-3xl md:text-4xl text-emerald-400 mb-1">100%</h4>
                  <p className="text-xs sm:text-sm text-slate-400 font-medium">Client Satisfaction</p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 md:mt-10">
                <a 
                  href="https://docs.google.com/document/d/1DB3iXrGctwJh1W7BRxvH-p0x34xjz7MmYhrtKQnOe50/export?format=pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Samuel_Onwuka_Resume.pdf"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-slate-950 font-bold py-3 px-6 sm:px-8 rounded-full hover:bg-white hover:text-slate-950 transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 hover:scale-105 w-full sm:w-auto text-sm sm:text-base"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>

            {/* Right Tech Grid */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-3xl opacity-40"></div>

             <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 relative z-10">
  {techStack.map((tech, index) => (
    <div 
      key={tech.name} 
      className={`
        group relative flex flex-col items-center justify-center
        p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl
        bg-slate-800/60 border border-slate-700/50
        ${tech.borderHover}

        /* FIX 1: no grid reflow glitch */
        ${index % 3 === 1 ? 'lg:scale-[0.98]' : 'lg:scale-100'}

        /* FIX 2: contain shine layers inside */
        overflow-hidden isolation-auto

        /* Smooth hover */
        transition-all duration-500 hover:-translate-y-2
        shadow-xl backdrop-blur-sm hover:shadow-2xl hover:bg-slate-800/80
      `}
    >
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${tech.bgGradient} 
        rounded-xl md:rounded-2xl opacity-0 
        group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-3 md:mb-4 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
          <img 
            src={tech.iconUrl} 
            alt={`${tech.name} icon`}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
          />
        </div>

        <h3 className={`font-bold text-sm sm:text-base md:text-lg lg:text-xl text-white ${tech.textHover} transition-colors duration-300 text-center`}>
          {tech.name}
        </h3>

        <div className={`w-6 sm:w-8 h-0.5 sm:h-1 bg-slate-700 rounded-full mt-2 md:mt-3 ${tech.barHover} group-hover:w-12 transition-all duration-500`}></div>
      </div>

      {/* FIX 3: Shine effect isolated */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
          -translate-x-full group-hover:translate-x-full transition-transform duration-1000">
        </div>
      </div>
    </div>
  ))}
</div>

              </div>
            </div>

          </div>
        </Reveal>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};