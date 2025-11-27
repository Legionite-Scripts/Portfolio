import { useEffect, useRef } from 'react';

// Self-Contained Reveal Component for scroll animations
const Reveal = ({ children, className = "" }) => {
  const ref = useRef(null);

  useEffect(() => {
    // Only proceed if IntersectionObserver is available (which it is in modern browsers)
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 } // Start animation when 10% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    // The "reveal-section" class is defined in the main style block below
    <div ref={ref} className={`reveal-section ${className}`}>
      {children}
    </div>
  );
};


// Helper function to return an SVG icon based on the skill name
const getSkillIcon = (skillName) => {
  const iconMap = {
    // Core Icons (Brand Colors)
    "HTML5": <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#E34F26" className="w-5 h-5"><path d="M4 3L5.783 20.613L12 22.387L18.217 20.613L20 3H4ZM16.327 18.041L12 19.336L7.673 18.041L7.382 14.896H10.151L10.324 16.745L12 17.203L13.676 16.745L13.849 14.896H16.327ZM16.618 12.339H14.14L13.978 10.51H12.022V8.679H14.072L14.245 7.037H9.755L9.928 8.679H11.874V10.51H9.552L9.39 12.339H16.618Z" /></svg>,
    "CSS3": <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1572B6" className="w-5 h-5"><path d="M4 3L5.783 20.613L12 22.387L18.217 20.613L20 3H4ZM16.327 18.041L12 19.336L7.673 18.041L7.382 14.896H10.151L10.324 16.745L12 17.203L13.676 16.745L13.849 14.896H16.327ZM16.618 12.339H14.14L13.978 10.51H12.022V8.679H14.072L14.245 7.037H9.755L9.928 8.679H11.874V10.51H9.552L9.39 12.339H16.618Z" /></svg>,
    "JavaScript": <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F7DF1E" className="w-5 h-5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.36 14.14c-.11.23-.35.33-.61.33h-1.61c-.38 0-.58-.15-.7-.41L11.5 12.5H8.75V15h-.8V9h5.1c.36 0 .58.12.72.36.14.24.16.5.06.77l-.61 1.95c.18.15.36.3.56.45.16.12.27.23.33.36.08.15.11.3.11.45 0 .42-.25.75-.75.75s-.75-.33-.75-.75h-.8c0 .58.33 1.05.95 1.05.42 0 .72-.25.85-.5zm-2.06-2.91L12 10.59l-.3-.7c-.05-.12-.08-.24-.08-.36 0-.27.18-.45.5-.45h2.17c.13.25.26.5.39.75l.62 1.25z" /></svg>,
    "TypeScript": <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3178C6" className="w-5 h-5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.19 15.66c-.16.13-.37.2-.61.2-.5 0-.85-.35-1.15-.81l-.81-1.37c-.16-.27-.37-.4-.63-.4s-.47.13-.63.4l-.81 1.37c-.3.46-.65.81-1.15.81-.24 0-.45-.07-.61-.2l-.65.65c.34.42.7.75 1.15.98.45.23.95.34 1.5.34.61 0 1.14-.15 1.6-.45.46-.3.8-.73 1.02-1.3.22.57.56 1 1.02 1.3.46.3 1 .45 1.6.45.55 0 1.05-.11 1.5-.34.45-.23.81-.56 1.15-.98l-.65-.65zm-2.2-4.66c.11.16.2.3.27.42.08.13.11.23.11.3 0 .24-.13.38-.4.38s-.42-.14-.5-.38l-.62-1.25c-.14-.29-.28-.56-.42-.81-.14.25-.28.52-.42.81l-.62 1.25c-.08.24-.2.38-.5.38s-.4-.14-.4-.38c0-.07.03-.17.11-.3.07-.12.16-.26.27-.42l.75-1.5c.13-.25.28-.46.46-.61.18-.15.38-.22.6-.22.25 0 .45.07.6.22.18.15.33.36.46.61l.75 1.5z" /></svg>,
    
    // Frontend Icons
    "React.js": <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" fill="#61DAFB" className="w-5 h-5 animate-[spin_5s_linear_infinite]"><circle cx="0" cy="0" r="2.0" fill="#61DAFB"/><g stroke="#61DAFB" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>,
    "Next.js": <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm2.844 7.5L12 13.344 9.156 9.5H7.72L12 16.5l4.28-6.91H14.844z"/></svg>,
    "Redux": <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#764ABC" className="w-5 h-5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8.5 15.5h2V12h3V8.5h-2V12H8.5V15.5z" /></svg>,
    "Tailwind CSS": <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 48" fill="#38BDF8" className="w-5 h-5"><path d="M12 4c-2.4 0-4.8.6-7 1.8C3.8 6.4 2.3 8.3 1.2 10.6c-1.1 2.3-1.8 4.7-1.2 7 0 0 .5 2.1 2.5 3.5 2 1.4 5.3 1.9 8.2 1.3 2.9-.6 5.8-2.6 7.4-5.3 1.6-2.7 1.9-5.9.8-8.8-1.1-2.9-3.4-5.2-6.4-6.4C10.6 3.9 12 4 12 4zM23 16c-1.6 0-3.2.4-4.6 1.2-1.4.8-2.6 2-3.4 3.4-1.2 2.4-.9 5.3.8 7.4 1.7 2.1 4.5 3.1 7.2 2.8 2.7-.3 5.1-1.9 6.7-4.4 1.6-2.5 1.7-5.5.1-8.1-1.6-2.6-4.3-4.5-7.3-4.6zM34 29c-1.6 0-3.2.4-4.6 1.2-1.4.8-2.6 2-3.4 3.4-1.2 2.4-.9 5.3.8 7.4 1.7 2.1 4.5 3.1 7.2 2.8 2.7-.3 5.1-1.9 6.7-4.4 1.6-2.5 1.7-5.5.1-8.1-1.6-2.6-4.3-4.5-7.3-4.6z" transform="scale(0.7) translate(10, 5)"/></svg>,

    // Tools Icons
    "Git": <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#F05032" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="6" r="3"/><path d="M6 18c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/><path d="M18 18c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/><line x1="12" y1="9" x2="12" y2="15"/><line x1="6" y1="15" x2="18" y2="15"/></svg>, 
    "Webpack": <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1C78C0" className="w-5 h-5"><path d="M12 2L6 5v6l6 3 6-3V5l-6-3zM6 13v6l6 3 6-3v-6l-6-3-6 3z" /></svg>, 
    "Vite": <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#646CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M13.5 1.5l-6 11h5l-1.5 8 6-11h-5l1.5-8z"/></svg>,
    "Figma": <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F24E1E" className="w-5 h-5"><path d="M18 6c-3.3 0-6 2.7-6 6v3h3v-3c0-1.7 1.3-3 3-3s3 1.3 3 3v3h3v-3c0-3.3-2.7-6-6-6zM3 9c-1.7 0-3 1.3-3 3v3h3v-3c0-1.7 1.3-3 3-3s3 1.3 3 3v3h3v-3c0-3.3-2.7-6-6-6zM3 15h3v3c0 1.7 1.3 3 3 3s3-1.3 3-3v-3h3v3c0 3.3-2.7 6-6 6s-6-2.7-6-6z" /></svg>,
  };

  // Generic fallback icon (Lucide Code)
  const fallbackIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>; 

  // Look for the specific skill name or a substring match
  const key = Object.keys(iconMap).find(k => skillName.includes(k));
  return key ? iconMap[key] : fallbackIcon;
};

export const Skills = () => {
  const skillCategories = [
    {
      title: "Core",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"]
    },
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "Redux", "Tailwind CSS"]
    },
    {
      title: "Tools",
      skills: ["Git", "Webpack", "Vite", "Figma"]
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="font-marker text-4xl md:text-5xl mb-4">My <span className="text-primary">Skills</span></h2>
            <p className="text-muted">The technologies I use to bring ideas to life.</p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {skillCategories.map((cat, idx) => (
              <div 
                key={idx} 
                className="bg-surface p-8 rounded-xl shadow-lg border border-surface/50 transition-all duration-500 hover:shadow-primary/20 hover:shadow-xl hover:border-primary/50"
              >
                <h3 className="font-marker text-3xl mb-8 text-white border-b border-primary/20 pb-2 flex items-center gap-2">
                    {/* Category Icon: Lucide Zap (Lightning Bolt) */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                    {cat.title}
                </h3>
                
                <div className="flex flex-wrap gap-4">
                  {cat.skills.map((skill) => (
                    <div 
                      key={skill} 
                      className="flex items-center gap-2 bg-bg px-4 py-2 rounded-full font-medium text-white shadow-md transition-all duration-300 hover:bg-primary/20 hover:shadow-lg hover:scale-[1.05] border border-bg hover:border-primary"
                    >
                      {/* Render the icon */}
                      {getSkillIcon(skill)}
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Global styles for the Reveal component and the spinning React icon */}
          <style>{`
            .reveal-section {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.8s ease-out, transform 0.8s ease-out;
            }
            .reveal-section.visible {
                opacity: 1;
                transform: translateY(0);
            }
            @keyframes spin-slow {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}</style>
        </Reveal>
      </div>
    </section>
  );
};