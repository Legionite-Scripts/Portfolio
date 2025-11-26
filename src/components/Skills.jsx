import { Reveal } from './Reveal';

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

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="bg-surface p-8 rounded hover:translate-y-[-5px] transition-transform duration-300 border-b-4 border-transparent hover:border-primary">
                <h3 className="font-marker text-2xl mb-6 text-white">{cat.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="bg-bg text-primary px-4 py-2 rounded text-sm font-semibold">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};