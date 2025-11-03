const Experience = () => {
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
    <section id="experience" className="py-24 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl font-semibold mb-12">Experience</h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group hover-lift"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-medium group-hover:text-foreground transition-colors">
                    {exp.company}
                  </h3>
                  <p className="text-muted-foreground">{exp.role}</p>
                </div>
                <span className="text-sm text-muted-foreground/70">{exp.period}</span>
              </div>
              <p className="text-muted-foreground/80 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
