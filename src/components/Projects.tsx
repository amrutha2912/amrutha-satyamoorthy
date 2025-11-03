import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured online shopping platform with real-time inventory management, payment processing, and order tracking.",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management System",
      description:
        "Collaborative project management tool with real-time updates, team chat, and advanced analytics dashboard.",
      tags: ["TypeScript", "React", "WebSockets", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Data visualization platform processing millions of data points with interactive charts and real-time insights.",
      tags: ["React", "D3.js", "Python", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "AI Content Generator",
      description:
        "Machine learning powered content creation tool that generates marketing copy and blog posts using natural language processing.",
      tags: ["Next.js", "OpenAI", "TailwindCSS", "Vercel"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Mobile Fitness App",
      description:
        "Cross-platform fitness tracking application with workout plans, progress tracking, and social features.",
      tags: ["React Native", "Firebase", "Redux", "iOS/Android"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Developer Portfolio CMS",
      description:
        "Content management system specifically designed for developers to showcase their projects and blog posts.",
      tags: ["Next.js", "Sanity", "TypeScript", "Vercel"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            A selection of my recent work and side projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-border hover:border-accent/50 flex flex-col"
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-card-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-4 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-secondary/50 text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 hover:bg-secondary"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
