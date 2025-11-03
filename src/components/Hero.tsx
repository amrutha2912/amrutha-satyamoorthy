const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Hi, I'm [Your Name]
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              Tech professional • Building innovative solutions • Passionate about exceptional user experiences
            </p>
          </div>
          
          <p className="text-base md:text-lg text-muted-foreground/80 max-w-2xl leading-relaxed">
            I work with modern web technologies and love creating products that make a difference. 
            Currently focused on building scalable applications and exploring new frontiers in tech.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
