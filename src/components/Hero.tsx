const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-end px-6 pb-32">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12 animate-fade-in">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none">
              [Your Name]
            </h1>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-border/40">
            <div>
              <p className="text-lg text-muted-foreground/90 leading-relaxed">
                Tech professional building innovative solutions with modern web technologies.
              </p>
            </div>
            <div className="flex items-start gap-8">
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground/60 mb-2">Based in</div>
                <div className="text-sm">Your Location</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
