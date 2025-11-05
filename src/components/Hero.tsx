import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import portfolioPhoto from "@/assets/portfolio-photo.jpg";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={ref} id="home" className="min-h-screen relative flex items-start pt-32 px-6 overflow-hidden">
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--background)) 0%, hsl(220 80% 15%) 50%, hsl(var(--background)) 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradient-shift 15s ease infinite',
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      />
      <div className={`container mx-auto max-w-6xl section-reveal ${isVisible ? 'visible' : ''} relative z-10`}>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start animate-fade-in">
          <div className="flex items-center justify-center md:hidden mb-4">
            <div className="w-40 h-40 rounded-2xl overflow-hidden border border-border/40">
              <img 
                src={portfolioPhoto} 
                alt="Amrutha Satyamoorthy" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-none text-gradient-shift">
                Amrutha
              </h1>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-none text-gradient-shift">
                Satyamoorthy
              </h1>
            </div>
            
            <div className="pt-8 border-t border-border/40">
              <p className="text-lg text-muted-foreground/90 leading-relaxed">
                Passionate about blending data, technology, and curiosity to make sense of complex problems.
              </p>
            </div>
          </div>
          
          <div className="hidden md:flex items-start justify-end">
            <div className="w-full aspect-square max-w-md rounded-2xl overflow-hidden border border-border/40 self-start md:-mt-2 lg:-mt-3">
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
