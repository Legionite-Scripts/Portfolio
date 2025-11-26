import { Reveal } from './Reveal';
import { ExternalLinkIcon } from './Icons';
import { InteractiveTerminal } from './InteractiveTerminal';

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      desc: "A responsive admin dashboard for managing products and orders. Built with React and Recharts for data visualization.",
      tags: ["React", "Tailwind", "Recharts"],
      image: "https://placehold.co/600x400/1e293b/10b981?text=Dashboard+UI"
    },
    {
      title: "Task Master App",
      desc: "A drag-and-drop productivity tool for managing daily tasks. Features local storage persistence and dark mode.",
      tags: ["React", "DnD", "Local Storage"],
      image: "https://placehold.co/600x400/1e293b/10b981?text=Task+App"
    },
    {
      title: "Crypto Tracker",
      desc: "Real-time cryptocurrency price tracker using the CoinGecko API. Features search and historical charts.",
      tags: ["API Integration", "ChartJS", "Axios"],
      image: "https://placehold.co/600x400/1e293b/10b981?text=Crypto+Tracker"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-surface/30">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-marker text-4xl md:text-5xl mb-2">Featured <span className="text-primary">Projects</span></h2>
              <p className="text-muted">A selection of my recent work.</p>
            </div>
            <a href="#" className="hidden md:flex items-center text-primary hover:text-white transition-colors font-bold">
              View All Github <ExternalLinkIcon className="ml-2 w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-bg group rounded overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                    <button className="bg-white text-bg font-bold py-2 px-6 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all">
                      Demo
                    </button>
                  </div>
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-marker text-xl mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted text-sm mb-4 line-clamp-3">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-bold text-primary bg-surface px-2 py-1 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <InteractiveTerminal />

          <div className="mt-8 text-center md:hidden">
            <a href="#" className="inline-flex items-center text-primary font-bold">
              View All Github <ExternalLinkIcon className="ml-2 w-4 h-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};