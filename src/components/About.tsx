import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  const skills = ["SQL", "Python", "Data Analysis", "A/B Testing", "Machine Learning", "Streamlit", "Tableau", "Snowflake"];

  return (
    <section ref={ref} id="about" className="py-20 px-6">
      <div className={`container mx-auto max-w-6xl section-reveal ${isVisible ? 'visible' : ''}`}>
        <div className="grid md:grid-cols-12 gap-20 items-start">
          <div className="md:col-span-4">
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground/60">About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-4">Background</h2>
          </div>
          
          <div className="md:col-span-8 space-y-8">
            <div className="space-y-6 text-lg text-muted-foreground/80 leading-relaxed">
              <p>
                I'm a Business Analyst at Porter with a strong background in data science and analytics. 
                I specialize in building end-to-end analytical workflows, designing real-time dashboards, 
                and conducting A/B testing to drive data-driven decision-making.
              </p>
              
              <p>
                I hold a B.Tech in Data Science Engineering from Manipal Institute of Technology with a 
                minor in Finance. My expertise spans SQL, Python, machine learning, and data visualization 
                tools like Tableau and Streamlit.
              </p>
              
              <p>
                I'm passionate about turning complex data into actionable insights and building tools that 
                empower teams to make better decisions. My work has contributed to significant performance 
                improvements and enhanced experimental measurement coverage.
              </p>
            </div>

            <div className="pt-12 border-t border-border/40">
              <div className="text-xs uppercase tracking-wider text-muted-foreground/60 mb-6">Core Skills</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill}
                    className={`stagger-item ${isVisible ? 'visible' : ''} text-sm py-2 border-l-2 border-border/40 pl-4 hover:border-foreground hover:text-foreground transition-all duration-300 animated-underline`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
