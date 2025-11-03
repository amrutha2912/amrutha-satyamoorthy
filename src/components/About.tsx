const About = () => {
  return (
    <section id="about" className="py-24 px-6 section-hover rounded-lg">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-8">About</h2>
          
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Hi, I'm a tech professional passionate about building products that solve real problems. 
              I currently work at [Company], where I focus on creating scalable solutions and improving user experiences.
            </p>
            
            <p>
              Outside of work, I enjoy exploring new technologies, contributing to open source, 
              and sharing knowledge through blog posts and mentoring. I believe in continuous learning 
              and staying curious about emerging trends in tech.
            </p>
            
            <p>
              When I'm not coding, you can find me reading tech blogs, working on side projects, 
              or collaborating with the developer community.
            </p>
          </div>

          <div className="pt-8">
            <h3 className="text-lg font-medium mb-4">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "AWS", "Docker", "Git"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
