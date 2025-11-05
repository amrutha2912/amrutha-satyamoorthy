import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  const { ref: skillsRef, isVisible: isSkillsVisible } = useScrollAnimation<HTMLDivElement>();
  
  const skillsWithSize = [
    { name: "SQL", size: "large" },
    { name: "Python", size: "large" },
    { name: "Data Analysis", size: "large" },
    { name: "Tableau", size: "medium" },
    { name: "A/B Testing", size: "medium" },
    { name: "Machine Learning", size: "large" },
    { name: "Streamlit", size: "medium" },
    { name: "Pandas", size: "small" },
    { name: "NumPy", size: "small" },
    { name: "Microsoft Excel", size: "medium" },
    { name: "Scikit-learn", size: "small" },
    { name: "Matplotlib", size: "small" },
  ];

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

      {/* Scroll-Triggered Stagger Animation */}
      <div ref={skillsRef} className="mt-24 container mx-auto max-w-6xl px-6">
        <div className="mb-8">
          <div className="text-xs uppercase tracking-wider text-muted-foreground/60">Core Skills</div>
        </div>
        
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3 auto-rows-fr">
          {skillsWithSize.map((skill, index) => (
            <div
              key={index}
              className={`
                stagger-item ${isSkillsVisible ? 'visible' : ''}
                ${skill.size === 'large' ? 'col-span-2' : skill.size === 'medium' ? 'col-span-2 md:col-span-1' : 'col-span-1'}
                flex items-center justify-center
                ${skill.size === 'large' ? 'px-6 py-5 bg-card/40' : skill.size === 'medium' ? 'px-5 py-4 bg-card/30' : 'px-4 py-3 bg-card/20'}
                backdrop-blur-sm border border-border/40 rounded-2xl
                hover:border-primary/50 hover:scale-[1.02] hover:bg-accent/10
                transition-all duration-300 cursor-default
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className={`
                ${skill.size === 'large' ? 'text-base font-semibold' : skill.size === 'medium' ? 'text-sm font-medium' : 'text-sm font-medium'}
                whitespace-nowrap text-center
              `}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
