import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();
  const experiences = [
    {
      company: "Tech Solutions Inc.",
      role: "Senior Software Engineer",
      period: "Jan 2022 - Present",
      description:
        "Leading development of scalable web applications and mentoring junior developers. Built features used by 100k+ users.",
    },
    {
      company: "Digital Innovations",
      role: "Full Stack Developer",
      period: "Jun 2020 - Dec 2021",
      description:
        "Built and maintained multiple client-facing applications. Improved performance and implemented modern development practices.",
    },
    {
      company: "StartUp Co.",
      role: "Frontend Developer",
      period: "Jan 2018 - May 2020",
      description:
        "Focused on creating responsive and accessible web applications. Gained experience with modern frameworks and best practices.",
    },
  ];

  return (
    <section ref={ref} id="experience" className="py-20 px-6">
      <div className={`container mx-auto max-w-6xl section-reveal ${isVisible ? 'visible' : ''}`}>
        <div className="mb-20">
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground/60">Career Path</span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mt-4">Experience</h2>
        </div>

        <div className="space-y-1">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`stagger-item ${isVisible ? 'visible' : ''} group border-t border-border/40 last:border-b py-10 hover:bg-accent/5 transition-all duration-500 px-6 -mx-6 magnetic-hover`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-3">
                  <span className="text-xs font-mono text-foreground">{exp.period}</span>
                </div>
                
                <div className="md:col-span-9">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-foreground transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-muted-foreground/70 mb-4">{exp.company}</p>
                  <p className="text-muted-foreground/60 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
