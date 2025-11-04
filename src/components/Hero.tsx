import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="home" className="min-h-screen relative flex items-center px-6 animated-gradient-bg">
      <div className={`container mx-auto max-w-6xl section-reveal ${isVisible ? 'visible' : ''}`}>
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="inline-block">
              <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground/80 animate-fade-in">
                Welcome to my portfolio
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight">
              Amrutha Satyamoorthy
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground/80 max-w-2xl font-light">
              Turning data into actionable insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-border/40 max-w-3xl">
            <div>
              <p className="text-base text-muted-foreground/90 leading-relaxed">
                Detail oriented and versatile analyst with a proven background in data analysis, machine learning, and natural language processing.
              </p>
            </div>
            <div className="flex items-start gap-8">
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground/60 mb-2">Based in</div>
                <div className="text-sm">Bengaluru, India</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground/60 mb-2">Contact</div>
                <div className="text-sm">amrutha.satyamoorthy@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
