import { ExternalLink } from "lucide-react";

const Projects = () => {
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
    <section id="projects" className="py-24 px-6 section-hover rounded-lg">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl font-semibold mb-12">Projects</h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-lg border border-border/40 hover:border-border transition-all duration-300 hover-lift hover:bg-accent/10 group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-medium group-hover:text-foreground transition-colors">
                  {project.title}
                </h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
              
              <p className="text-muted-foreground/80 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
