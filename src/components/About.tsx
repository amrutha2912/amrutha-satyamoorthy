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

      {/* Skills Section */}
      <div className="container mx-auto max-w-6xl mt-16 pt-16 border-t border-border/40">
        <div className="mb-8">
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground/60">Core Skills</span>
        </div>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className={`stagger-item ${isVisible ? 'visible' : ''} px-4 py-2 text-sm border border-border/40 rounded-full hover:border-foreground/60 hover:bg-accent/5 transition-all duration-200`}
              style={{ transitionDelay: `${index * 30}ms` }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
