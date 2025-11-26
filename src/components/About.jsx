import { Reveal } from './Reveal';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-surface/30">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="font-marker text-4xl md:text-5xl mb-8">About <span className="text-primary">Me</span></h2>
              <div className="space-y-6 text-muted text-lg leading-relaxed">
                <p>
                  I'm Samuel, also known as <span className="text-primary font-semibold">Legionite</span>. I specialize in building the client-side of web applications, focusing on performance and scalability.
                </p>
                <p>
                  My journey started with a curiosity about how the web works, which quickly turned into a career obsession. I believe in clean code, solid architecture, and user-centric design.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new UI trends, contributing to open source, or gaming.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-bg p-4 border-l-4 border-primary">
                  <h4 className="font-bold text-white text-xl">2+</h4>
                  <p className="text-sm text-muted">Years Experience</p>
                </div>
                <div className="bg-bg p-4 border-l-4 border-primary">
                  <h4 className="font-bold text-white text-xl">20+</h4>
                  <p className="text-sm text-muted">Projects Completed</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="h-40 bg-bg rounded-lg flex items-center justify-center text-primary/20 text-6xl font-marker">JS</div>
              <div className="h-40 bg-primary mt-8 rounded-lg flex items-center justify-center text-bg text-6xl font-marker">RC</div>
              <div className="h-40 bg-primary rounded-lg flex items-center justify-center text-bg text-6xl font-marker">TW</div>
              <div className="h-40 bg-bg mt-8 rounded-lg flex items-center justify-center text-primary/20 text-6xl font-marker">UI</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};