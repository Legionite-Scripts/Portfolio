import { GithubIcon, TwitterIcon, LinkedinIcon, ChevronDownIcon } from './Icons';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Abstract Shapes for Texture */}
      <div className="absolute top-20 left-10 w-20 h-20 border-4 border-surface rotate-45 opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 border-4 border-primary rounded-full opacity-10"></div>
      
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left z-10">
          <h2 className="text-primary font-bold tracking-widest uppercase mb-4 text-sm">Hello, World.</h2>
          <h1 className="font-marker text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
            I am <br/>
            <span className="text-white">Samuel Onwuka</span>
          </h1>
          <p className="text-muted text-lg md:text-xl max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed">
            A passionate <span className="text-primary font-medium font-marker">Frontend Developer</span> crafting pixel-perfect, responsive, and accessible digital experiences.
          </p>
          
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="#projects" className="bg-primary text-bg font-bold py-3 px-8 rounded hover:bg-white hover:text-bg transition-colors duration-300">
              View Work
            </a>
            <a href="#contact" className="border-2 border-primary text-primary font-bold py-3 px-8 rounded hover:bg-primary hover:text-bg transition-colors duration-300">
              Contact Me
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center md:justify-start gap-6 text-muted">
            <a href="https://github.com/legionite-scripts" className="hover:text-primary transition-colors hover:-translate-y-1 transform duration-300"><GithubIcon /></a>
            <a href="https://twitter.com/TheLegionite" className="hover:text-primary transition-colors hover:-translate-y-1 transform duration-300"><TwitterIcon /></a>
            <a href="https://www.linkedin.com/in/samuel-onwuka-825205263/" className="hover:text-primary transition-colors hover:-translate-y-1 transform duration-300"><LinkedinIcon /></a>
          </div>
        </div>

        <div className="flex-1 relative z-10 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 border-4 border-primary rounded-full translate-x-4 translate-y-4"></div>
            <div className="absolute inset-0 bg-surface rounded-full overflow-hidden border-4 border-bg">
              <img 
                src="/me.png" 
                alt="Samuel Onwuka" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted animate-bounce">
        <ChevronDownIcon />
      </a>
    </section>
  );
};