const About = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground/60">About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-4">Background</h2>
          </div>
          
          <div className="md:col-span-8 space-y-8">
            <div className="space-y-6 text-lg text-muted-foreground/80 leading-relaxed">
              <p>
                I'm a tech professional passionate about building products that solve real problems. 
                I currently work at [Company], where I focus on creating scalable solutions and improving user experiences.
              </p>
              
              <p>
                Outside of work, I enjoy exploring new technologies, contributing to open source, 
                and sharing knowledge through blog posts and mentoring.
              </p>
              
              <p>
                When I'm not coding, you can find me reading tech blogs, working on side projects, 
                or collaborating with the developer community.
              </p>
            </div>

            <div className="pt-12 border-t border-border/40">
              <div className="text-xs uppercase tracking-wider text-muted-foreground/60 mb-6">Core Skills</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "AWS", "Docker", "Git"].map((skill) => (
                  <div
                    key={skill}
                    className="text-sm py-2 border-l-2 border-border/40 pl-4 hover:border-foreground hover:text-foreground transition-all duration-300"
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
