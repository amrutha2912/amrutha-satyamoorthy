import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState, useEffect, useRef } from "react";

const About = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  const cardsRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false]);

  const skillCategories = [
    {
      category: "Technical Skills",
      skills: ["SQL", "Python", "Microsoft Excel", "Data Analysis", "Data Visualization", "Google Sheets"]
    },
    {
      category: "Libraries & Frameworks",
      skills: ["Pandas", "NumPy", "Streamlit", "SciKit-Learn", "Matplotlib"]
    },
    {
      category: "Data Analysis & Visualization",
      skills: ["Data Analysis", "Data Visualization", "A/B Testing", "Statistical Modeling"]
    },
    {
      category: "Tool/Software",
      skills: ["Microsoft 365", "Jupyter Notebook", "Tableau", "Snowflake", "Metabase", "GitHub"]
    }
  ];

  useEffect(() => {
    if (isVisible) {
      skillCategories.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }, index * 100);
      });
    }
  }, [isVisible]);

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

      {/* Categorized Skills Grid */}
      <div ref={cardsRef} className="mt-24 container mx-auto max-w-6xl">
        <div className="mb-8">
          <div className="text-xs uppercase tracking-wider text-muted-foreground/60">Core Skills</div>
        </div>
        
        {/* Top 3 Cards - Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.slice(0, 3).map((category, index) => (
            <div
              key={index}
              className={`
                bg-card/40 backdrop-blur-sm border border-border/20 rounded-2xl p-8
                hover:-translate-y-1 hover:border-primary/40 hover:bg-card/50
                transition-all duration-300
                ${visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
              `}
              style={{ 
                transitionDelay: visibleCards[index] ? '0ms' : `${index * 100}ms`,
                transitionProperty: 'opacity, transform, border-color, background-color'
              }}
            >
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                {category.category}.
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex} 
                    className="text-base md:text-lg text-muted-foreground leading-relaxed
                              hover:text-foreground hover:translate-x-1 transition-all duration-200"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Last Card - Full Width */}
        <div className="mt-6">
          <div
            className={`
              bg-card/40 backdrop-blur-sm border border-border/20 rounded-2xl p-8
              hover:-translate-y-1 hover:border-primary/40 hover:bg-card/50
              transition-all duration-300
              ${visibleCards[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
            `}
            style={{ 
              transitionDelay: visibleCards[3] ? '0ms' : '300ms',
              transitionProperty: 'opacity, transform, border-color, background-color'
            }}
          >
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              {skillCategories[3].category}.
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-3">
              {skillCategories[3].skills.map((skill, skillIndex) => (
                <div 
                  key={skillIndex} 
                  className="text-base md:text-lg text-muted-foreground leading-relaxed
                            hover:text-foreground hover:translate-x-1 transition-all duration-200"
                >
                  {skill}
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
