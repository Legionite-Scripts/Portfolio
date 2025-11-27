import { Reveal } from "./Reveal";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-surface/30">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="font-marker text-4xl md:text-5xl mb-8">
                About <span className="text-primary">Me</span>
              </h2>
              <div className="space-y-6 text-muted text-lg leading-relaxed">
                <p>
                  I'm Samuel Onwuka, also known as{" "}
                  <span className="text-primary font-marker font-medium">
                    Legionite
                  </span>
                  . I am a dynamic Frontend Web Developer with over 4 years of
                  expertise in building high-performance, user-focused web
                  applications.
                </p>
                <p>
                  Specializing in <strong>React.js, Vue.js, and Nuxt.js</strong>
                  , I have a track record of optimizing page load times
                  (reducing 3s to 800ms) and driving measurable business growth.
                  I blend technical excellence with strong collaboration to
                  consistently exceed project goals.
                </p>
                <p>
                  Whether it's migrating legacy codebases or implementing
                  complex state management with Redux/Pinia, I focus on
                  delivering scalable, responsive digital experiences.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-bg p-4 border-l-4 border-primary">
                  <h4 className="font-bold text-white text-xl">4+</h4>
                  <p className="text-sm text-muted">Years Experience</p>
                </div>
                <div className="bg-bg p-4 border-l-4 border-primary">
                  <h4 className="font-bold text-white text-xl">20+</h4>
                  <p className="text-sm text-muted">Projects Completed</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="h-40 bg-bg rounded-lg flex items-center justify-center text-primary/50 text-6xl font-marker">
                JS
              </div>
              <div className="h-40 bg-primary mt-8 rounded-lg flex items-center justify-center text-bg text-6xl font-marker">
                REACT
              </div>
              <div className="h-40 bg-primary rounded-lg flex items-center justify-center text-bg text-6xl font-marker">
                NUXT
              </div>
              <div className="h-40 bg-bg mt-8 rounded-lg flex items-center justify-center text-primary/50 text-6xl font-marker">
                VUE
              </div>
              <div className="h-40 bg-bg mt-8 rounded-lg flex items-center justify-center text-primary/50 text-6xl font-marker">
                SVELTE
              </div>

              <div className="h-40 bg-primary mt-8 rounded-lg flex items-center justify-center text-bg text-6xl font-marker">
                ANGULAR
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
