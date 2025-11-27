import { useState } from 'react';
import { Reveal } from './Reveal';
import { ExternalLinkIcon } from './Icons';
import { InteractiveTerminal } from './InteractiveTerminal';

export const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "Kenna Partners Law Firm",
      desc: "A responsive professional web application for legal services. Features an intuitive UI that improved client engagement significantly. Built for Dosh Services.",
      tags: ["React.js", "UI/UX", "Cross-browser"],
      image: "https://placehold.co/600x400/1e293b/10b981?text=Kenna+Partners",
      liveUrl: "https://KENNAPARTNERS.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Top Universe EdTech",
      desc: "Multi-application platform serving 13,000+ daily users. Led the migration from legacy code to Nuxt.js, resulting in major SEO improvements.",
      tags: ["Vue.js", "Nuxt.js", "SEO Optimization"],
      image: "https://placehold.co/600x400/1e293b/10b981?text=Top+Universe",
      liveUrl: "https://topuniverse.org",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "OJAJA Suites",
      desc: "Complete rebuild of a fintech utility app using Nuxt.js. Optimized Vue components to reduce load time from 3s to 800ms and increased engagement by 25%.",
      tags: ["Nuxt.js", "Pinia", "Performance"],
      image: "https://placehold.co/600x400/1e293b/10b981?text=Betakopa",
      liveUrl: "https://betakopa.com",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-surface/30">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-marker text-4xl md:text-5xl mb-2">Featured <span className="text-primary">Projects</span></h2>
              <p className="text-muted">A selection of my recent work & achievements.</p>
            </div>
            <a href="#" className="hidden md:flex items-center text-primary hover:text-white transition-colors font-bold">
              View All <ExternalLinkIcon className="ml-2 w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, idx) => (
              <div 
                key={idx} 
                className="bg-bg group rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 relative border-2 border-transparent hover:border-primary/50"
                onMouseEnter={() => setHoveredProject(idx)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Image/Preview Container */}
                <div className="h-64 overflow-hidden relative bg-surface">
                  
                  {/* Static Image - Default State */}
                  <div className={`absolute inset-0 transition-all duration-500 ${hoveredProject === idx ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover" 
                    />
                    {/* Dark overlay on image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60"></div>
                  </div>

                  {/* Live Preview Iframe - Shows on Hover */}
                  <div className={`absolute inset-0 transition-all duration-500 ${hoveredProject === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                    {hoveredProject === idx && project.liveUrl && (
                      <div className="w-full h-full relative">
                        {/* The actual live website preview */}
                        <iframe
                          src={project.liveUrl}
                          className="w-full h-full border-0"
                          title={`${project.title} Live Preview`}
                          loading="lazy"
                          sandbox="allow-scripts allow-same-origin"
                          style={{
                            transform: 'scale(1)',
                            transformOrigin: 'top left',
                          }}
                        />
                        
                        {/* Subtle gradient overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-10 pointer-events-none`}></div>
                        
                        {/* Top bar indicator */}
                        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black/80 to-transparent flex items-center px-3 gap-2">
                          <div className="flex gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          </div>
                          <span className="text-white text-xs font-mono opacity-75 ml-2">
                            {project.liveUrl.replace('https://', '').replace('http://', '').split('/')[0]}
                          </span>
                        </div>

                        {/* Hover instruction overlay */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 pointer-events-none">
                          <p className="text-white text-xs text-center font-semibold flex items-center justify-center gap-2">
                            <span className="animate-pulse">👆</span>
                            Scroll inside to explore • Click "Visit Site" for full view
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Hover Overlay with Visit Button */}
                  <div className={`absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center pointer-events-none`}>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-primary text-bg font-bold py-3 px-6 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:scale-110 hover:bg-white flex items-center gap-2 shadow-2xl pointer-events-auto"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                      Visit Full Site
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-marker text-xl group-hover:text-primary transition-colors">{project.title}</h3>
                    {/* Live Badge */}
                    <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                      </span>
                      LIVE
                    </span>
                  </div>
                  <p className="text-muted text-sm mb-4 leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-bold text-primary bg-surface px-3 py-1 rounded-full border border-primary/20">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover hint - shows before hover */}
                <div className={`absolute top-4 left-4 bg-black/80 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-2 transition-opacity duration-300 ${hoveredProject === idx ? 'opacity-0' : 'opacity-100'}`}>
                  <span className="animate-pulse">👁️</span>
                  Hover to preview
                </div>
              </div>
            ))}
          </div>
          
          <InteractiveTerminal />

          <div className="mt-8 text-center md:hidden">
            <a href="#" className="inline-flex items-center text-primary font-bold">
              View All <ExternalLinkIcon className="ml-2 w-4 h-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};