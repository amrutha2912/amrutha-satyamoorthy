import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="home" className="min-h-screen relative flex items-end px-6 pb-32 animated-gradient-bg">
      <div className={`container mx-auto max-w-6xl section-reveal ${isVisible ? 'visible' : ''}`}>
        <div className="space-y-12 animate-fade-in">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none text-gradient-shift">
              Amrutha Satyamoorthy
            </h1>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-border/40">
            <div>
              <p className="text-lg text-muted-foreground/90 leading-relaxed">
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
