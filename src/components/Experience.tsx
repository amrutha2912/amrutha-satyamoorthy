import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description:
        "Leading development of scalable web applications, mentoring junior developers, and implementing best practices across the engineering team.",
      achievements: [
        "Improved application performance by 40%",
        "Led migration to modern tech stack",
        "Mentored 5+ junior developers",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Digital Innovations",
      period: "2020 - 2022",
      description:
        "Developed and maintained multiple client-facing applications, collaborated with design team to implement pixel-perfect interfaces.",
      achievements: [
        "Built 10+ production applications",
        "Reduced bug reports by 35%",
        "Implemented CI/CD pipeline",
      ],
    },
    {
      role: "Frontend Developer",
      company: "StartUp Co.",
      period: "2018 - 2020",
      description:
        "Focused on creating responsive and accessible web applications using modern JavaScript frameworks.",
      achievements: [
        "Developed component library used across 5+ projects",
        "Improved mobile performance scores",
        "Collaborated with UX team on design system",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground">
            My professional journey in tech
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-8 border-l-2 border-accent/30 last:border-transparent last:pb-0 group"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent group-hover:scale-125 transition-transform" />
              
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:border-accent/50">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-card-foreground mb-1">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-accent">
                      <Briefcase className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-card-foreground">
                      <span className="text-accent mt-1">▸</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
