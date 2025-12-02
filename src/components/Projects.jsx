import { useState, useRef } from 'react';
import { Reveal } from './Reveal';
import { ExternalLinkIcon } from './Icons';
import { InteractiveTerminal } from './InteractiveTerminal';

export const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  // Touch handling state for mobile swipe
  const touchStart = useRef(null);
  const touchEnd = useRef(null);
  const minSwipeDistance = 50;

  const projects = [
    {
      title: "Kenna Partners Law Firm",
      desc: "A responsive professional web application for legal services. Features an intuitive UI that improved client engagement significantly.",
      tags: ["React.js", "UI/UX", "Cross-browser"],
      image: "https://placehold.co/1200x800/1e293b/10b981?text=Kenna+Partners",
      liveUrl: "https://KENNAPARTNERS.com",
      color: "from-blue-500 to-cyan-500",
      year: "2025"
    },
    {
      title: "Quilox",
      desc: "A modern, high-performance website built for Quilox, featuring an immersive UI, and mobile-first responsiveness.",
      tags: ["React.js", "TailwindCSS", "Performance"],
      image: "https://placehold.co/1200x800/1e293b/10b981?text=Quilox",
      liveUrl: "https://clubquilox.com/",
      color: "from-green-500 to-emerald-500",
      year: "2025"
    },
    {
      title: "Tantalizers Eatery",
      desc: "Official Website for the Tantalizers restaurant chain, built with Vue.js and Nuxt.js, optimized for SEO and performance.",
      tags: ["Vue.js", "Nuxt.js", "SEO"],
      image: "https://placehold.co/1200x800/1e293b/10b981?text=Tantalizers",
      liveUrl: "https://tantalizer.netlify.app/",
      color: "from-purple-500 to-pink-500",
      year: "2025"
    },

  ];

  // Logic to show grid items (excluding the currently active one to avoid duplication if desired, 
  // currently set to show first 3 or all)
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 3);

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Mobile Swipe Handlers
  const onTouchStart = (e) => {
    touchEnd.current = null; 
    touchStart.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) nextProject();
    if (isRightSwipe) prevProject();
  };

  return (
    <section id="projects" className="py-16 md:py-32 bg-surface/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <Reveal>
          {/* Section Header */}
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider mb-4 border border-primary/20">
              🚀 Portfolio Showcase
            </span>
            <h2 className="font-marker text-4xl md:text-6xl lg:text-7xl mb-6">
              Featured <span className="text-primary relative inline-block">
                Projects
                <svg className="absolute -bottom-2 left-0 w-full opacity-60" height="10" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 4C50 4 50 0 100 4C150 8 150 0 200 4" stroke="#10b981" strokeWidth="3" fill="none"/>
                </svg>
              </span>
            </h2>
            <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Real-world applications built with modern technologies, focusing on performance, UI/UX, and scalability.
            </p>
          </div>

          {/* === FEATURED CAROUSEL === */}
          <div className="mb-24 relative group">
            
            {/* Desktop Navigation Arrows (Outside) */}
            <button
              onClick={prevProject}
              className="hidden xl:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-30 bg-surface border border-white/10 text-white hover:text-primary hover:border-primary w-14 h-14 rounded-full items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl backdrop-blur-md"
              aria-label="Previous project"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 -translate-x-0.5"><polyline points="15 18 9 12 15 6"/></svg>
            </button>

            <button
              onClick={nextProject}
              className="hidden xl:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-30 bg-surface border border-white/10 text-white hover:text-primary hover:border-primary w-14 h-14 rounded-full items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl backdrop-blur-md"
              aria-label="Next project"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 translate-x-0.5"><polyline points="9 18 15 12 9 6"/></svg>
            </button>

            {/* Main Display Card */}
            <div 
              className="relative h-[600px] md:h-[550px] lg:h-[600px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-surface"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {/* Background Image & Overlay */}
              <div className="absolute inset-0">
                <img 
                  key={activeProject} // Triggers animation on change
                  src={projects[activeProject].image} 
                  alt={projects[activeProject].title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
                {/* Heavy gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/90 to-transparent opacity-100"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-bg/80 via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Content Container */}
              <div className="relative h-full flex flex-col justify-end p-6 md:p-12 z-20">
                
                {/* Top Labels (Positioned Absolute Top) */}
                <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                  <div className="flex gap-2">
                    <span className="bg-primary/90 backdrop-blur-md text-bg text-xs font-extrabold px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bg opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-bg"></span>
                      </span>
                      FEATURED
                    </span>
                  </div>
                  <div className="bg-black/40 backdrop-blur-md text-white/80 text-sm font-mono px-4 py-1.5 rounded-full border border-white/5">
                    {String(activeProject + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                  </div>
                </div>

                {/* Text Content */}
                <div className="max-w-4xl space-y-4 md:space-y-6 transform transition-all duration-500 ease-out translate-y-0 opacity-100">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                     {projects[activeProject].tags.map((tag, i) => (
                      <span key={i} className="text-xs font-bold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full backdrop-blur-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-marker text-4xl md:text-6xl lg:text-7xl text-white leading-[0.9] drop-shadow-lg">
                    {projects[activeProject].title}
                  </h3>

                  <div className="flex items-center gap-4">
                     <span className="text-white/80 text-sm md:text-base">{projects[activeProject].year}</span>
                  </div>

                  <p className="text-muted text-base md:text-xl leading-relaxed line-clamp-3 md:line-clamp-none max-w-2xl">
                    {projects[activeProject].desc}
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row gap-4">
                    <a 
                      href={projects[activeProject].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex justify-center items-center gap-2 bg-gradient-to-r ${projects[activeProject].color} text-white font-bold py-3.5 px-8 rounded-full hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl`}
                    >
                      <span>View Live Project</span>
                      <ExternalLinkIcon className="w-5 h-5" />
                    </a>
                    
                    {/* Mobile Only Navigation Buttons included in content area */}
                    <div className="flex xl:hidden gap-3 justify-center sm:justify-start">
                        <button onClick={prevProject} className="flex-1 sm:flex-none bg-white/5 border border-white/10 hover:bg-white/10 text-white py-3.5 px-6 rounded-full flex items-center justify-center transition-all active:scale-95">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
                        </button>
                        <button onClick={nextProject} className="flex-1 sm:flex-none bg-white/5 border border-white/10 hover:bg-white/10 text-white py-3.5 px-6 rounded-full flex items-center justify-center transition-all active:scale-95">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                        </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-30">
                <div 
                  className={`h-full bg-gradient-to-r ${projects[activeProject].color} transition-all duration-500`}
                  style={{ width: `${((activeProject + 1) / projects.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {projects.map((project, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveProject(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    activeProject === idx 
                      ? 'w-8 h-2 bg-primary' 
                      : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to project ${idx + 1}`}
                ></button>
              ))}
            </div>
          </div>

          {/* === GRID VIEW (Secondary Projects) === */}
          <div>
            <div className="flex items-end justify-between mb-8 border-b border-white/10 pb-4">
              <div>
                 <h3 className="font-marker text-3xl text-white">Project Archive</h3>
                 <p className="text-muted text-sm mt-1">Explore more work</p>
              </div>
              <span className="text-primary font-mono text-sm hidden md:block">
                {showAllProjects ? projects.length : 3} Displayed
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleProjects.map((project, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveProject(idx)}
                  className={`group relative p-6 rounded-2xl border border-white/5 bg-surface/40 hover:bg-surface/60 transition-all duration-300 hover:-translate-y-2 cursor-pointer ${
                    activeProject === idx ? 'ring-2 ring-primary/50 bg-surface/80' : ''
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                        {project.title.charAt(0)}
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">
                        <ExternalLinkIcon className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <h4 className="font-bold text-xl text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h4>
                  <p className="text-muted text-sm line-clamp-2 mb-4 h-10">{project.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-xs text-white/60 bg-white/5 px-2 py-1 rounded-md">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Toggle View Button */}
            <div className="text-center mt-12">
               <button
                  onClick={() => setShowAllProjects(!showAllProjects)}
                  className="group inline-flex items-center gap-2 text-white font-medium hover:text-primary transition-colors"
                >
                  <span>{showAllProjects ? "Show Less" : "View All Projects"}</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className={`w-4 h-4 transition-transform duration-300 ${showAllProjects ? 'rotate-180' : ''}`}
                  >
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
            </div>
          </div>

          <div className="mt-24">
            <InteractiveTerminal />
          </div>
        </Reveal>
      </div>
    </section>
  );
};