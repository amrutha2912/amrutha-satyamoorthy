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

      {/* Full-width Skills Section */}
      <div className="container mx-auto max-w-6xl mt-20">
        <div className="mb-8">
          <div className="text-xs uppercase tracking-wider text-muted-foreground/60">Core Skills</div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className={`stagger-item ${isVisible ? 'visible' : ''} group relative overflow-hidden bg-card/30 backdrop-blur-sm border border-border/40 rounded-lg p-6 hover:bg-accent/10 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative text-sm font-medium group-hover:text-foreground transition-colors">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
