import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import portfolioPhoto from "@/assets/portfolio-photo.jpg";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="home" className="min-h-screen relative flex items-center px-6 animated-gradient-bg">
      <div className={`container mx-auto max-w-6xl section-reveal ${isVisible ? 'visible' : ''}`}>
        <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-none">
                Amrutha
              </h1>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-none">
                Satyamoorthy
              </h1>
            </div>
            
            <div className="pt-8 border-t border-border/40">
              <p className="text-lg text-muted-foreground/90 leading-relaxed">
                Passionate about blending data, technology, and curiosity to make sense of complex problems.
              </p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center justify-center">
            <div className="w-full aspect-square max-w-md rounded-2xl overflow-hidden border border-border/40">
              <img 
                src={portfolioPhoto} 
                alt="Amrutha Satyamoorthy" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
