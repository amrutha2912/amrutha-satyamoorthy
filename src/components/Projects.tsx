import { ExternalLink } from "lucide-react";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack online shopping platform with real-time inventory management and payment processing.",
      tech: ["React", "Node.js", "PostgreSQL"],
      link: "#",
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates and analytics dashboard.",
      tech: ["TypeScript", "React", "MongoDB"],
      link: "#",
    },
    {
      title: "Analytics Dashboard",
      description: "Data visualization platform with interactive charts and real-time insights.",
      tech: ["React", "D3.js", "Python"],
      link: "#",
    },
  ];

  return (
    <section ref={ref} id="projects" className="py-32 px-6">
      <div className={`container mx-auto max-w-6xl section-reveal ${isVisible ? 'visible' : ''}`}>
        <div className="mb-20">
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground/60">Selected Work</span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mt-4">Projects</h2>
        </div>

        <div className="space-y-1">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`stagger-item ${isVisible ? 'visible' : ''} group relative overflow-hidden card-hover`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block border-t border-border/40 last:border-b py-8 hover:bg-accent/5 transition-all duration-500 px-6 -mx-6"
              >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs text-muted-foreground/50 font-mono">0{index + 1}</span>
                    <h3 className="text-2xl md:text-3xl font-bold group-hover:translate-x-2 transition-transform duration-300">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground/70 leading-relaxed mb-4 max-w-2xl">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs tracking-wider uppercase text-muted-foreground/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <ExternalLink className="w-5 h-5 text-muted-foreground/40 group-hover:text-foreground group-hover:rotate-45 transition-all duration-300" />
              </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
