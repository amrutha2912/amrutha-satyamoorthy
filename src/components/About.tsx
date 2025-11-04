import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  const skills = ["SQL", "Python", "Data Analysis", "A/B Testing", "Machine Learning", "Streamlit", "Tableau", "Microsoft Excel", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"];

  return (
    <section ref={ref} id="about" className="py-12 px-6">
      <div className={`container mx-auto max-w-6xl section-reveal ${isVisible ? 'visible' : ''}`}>
        <div className="grid md:grid-cols-12 gap-20 items-start">
          <div className="md:col-span-4">
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground/60">About Me</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mt-4">Background</h2>
          </div>
          
          <div className="md:col-span-8 space-y-8">
            <div className="space-y-6 text-lg text-muted-foreground/80 leading-relaxed">
              <p>
                I'm a Business Analyst at Porter with a strong background in data science and analytics. I specialize in building end-to-end analytical workflows, creating real-time dashboards, and conducting A/B testing to drive data-backed decision-making.
              </p>
              
              <p>
                I hold a B.Tech in Data Science Engineering with a minor in Finance from Manipal Institute of Technology. My expertise spans SQL, Python, machine learning, and data visualization tools such as Tableau and Streamlit.
              </p>
              
              <p>
                Curiosity drives my work; I enjoy exploring how data can simplify complex problems and enable smarter business outcomes. Outside of work, you'll often find me reading up on the latest in AI and analytics, keeping up with fashion trends, or exploring my long-time interest in biology.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Marquee Skills Section */}
      <div className="mt-24 overflow-hidden">
        <div className="mb-8 container mx-auto max-w-6xl px-6">
          <div className="text-xs uppercase tracking-wider text-muted-foreground/60">Core Skills</div>
        </div>
        
        <div className="space-y-4">
          {/* First Row - Scroll Left to Right */}
          <div className="relative flex overflow-hidden">
            <div className="flex gap-3 animate-marquee-left">
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={`left-${index}`}
                  className="group relative flex-shrink-0 px-6 py-3 bg-card/30 backdrop-blur-sm border border-border/40 rounded-full hover:border-primary/40 hover:bg-accent/10 hover:scale-105 transition-all duration-300 cursor-default"
                >
                  <span className="text-sm font-medium whitespace-nowrap group-hover:text-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex gap-3 animate-marquee-left absolute left-full">
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={`left-duplicate-${index}`}
                  className="group relative flex-shrink-0 px-6 py-3 bg-card/30 backdrop-blur-sm border border-border/40 rounded-full hover:border-primary/40 hover:bg-accent/10 hover:scale-105 transition-all duration-300 cursor-default"
                >
                  <span className="text-sm font-medium whitespace-nowrap group-hover:text-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Scroll Right to Left */}
          <div className="relative flex overflow-hidden">
            <div className="flex gap-3 animate-marquee-right">
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={`right-${index}`}
                  className="group relative flex-shrink-0 px-6 py-3 bg-card/30 backdrop-blur-sm border border-border/40 rounded-full hover:border-primary/40 hover:bg-accent/10 hover:scale-105 transition-all duration-300 cursor-default"
                >
                  <span className="text-sm font-medium whitespace-nowrap group-hover:text-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex gap-3 animate-marquee-right absolute left-full">
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={`right-duplicate-${index}`}
                  className="group relative flex-shrink-0 px-6 py-3 bg-card/30 backdrop-blur-sm border border-border/40 rounded-full hover:border-primary/40 hover:bg-accent/10 hover:scale-105 transition-all duration-300 cursor-default"
                >
                  <span className="text-sm font-medium whitespace-nowrap group-hover:text-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
