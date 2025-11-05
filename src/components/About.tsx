import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  const skillsWithSize = [
    { name: "SQL", size: "large" },
    { name: "Python", size: "large" },
    { name: "Data Analysis", size: "large" },
    { name: "Tableau", size: "medium" },
    { name: "A/B Testing", size: "medium" },
    { name: "Machine Learning", size: "large" },
    { name: "Streamlit", size: "medium" },
    { name: "Pandas", size: "small" },
    { name: "NumPy", size: "small" },
    { name: "Microsoft Excel", size: "medium" },
    { name: "Scikit-learn", size: "small" },
    { name: "Matplotlib", size: "small" },
  ];

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScroll();
      container.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      
      return () => {
        container.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, []);

  return (
    <section ref={ref} id="about" className="py-12 px-6">
      <div className={`container mx-auto max-w-6xl section-reveal ${isVisible ? 'visible' : ''}`}>
        <div className="grid md:grid-cols-12 gap-20 items-start">
          <div className="md:col-span-4">
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground/60">About Me</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mt-4">Background</h2>
          </div>
          
          <div className="md:col-span-8 space-y-8">
            <div className="space-y-6 text-lg text-muted-foreground/80 leading-relaxed">
              <p>
                I'm a Business Analyst at Porter with a strong background in data science and analytics. I specialize in building end-to-end analytical workflows, creating real-time dashboards, and conducting A/B testing to drive data-backed decision-making.
              </p>
              
              <p>
                I hold a B.Tech in Data Science Engineering with a minor in Finance from Manipal Institute of Technology. My expertise spans SQL, Python, machine learning, and data visualization tools such as Tableau and Streamlit.
              </p>
              
              <p>
                Curiosity drives my work; I enjoy exploring how data can simplify complex problems and enable smarter business outcomes. Outside of work, you'll often find me reading up on the latest in AI and analytics, keeping up with fashion trends, or exploring my long-time interest in biology.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Snap Carousel */}
      <div className="mt-24 container mx-auto max-w-6xl px-6">
        <div className="mb-8">
          <div className="text-xs uppercase tracking-wider text-muted-foreground/60">Core Skills</div>
        </div>
        
        <div className="relative">
          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 rounded-full bg-background/80 backdrop-blur-sm border border-border/40 disabled:opacity-30 hover:bg-accent/50"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 rounded-full bg-background/80 backdrop-blur-sm border border-border/40 disabled:opacity-30 hover:bg-accent/50"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
          >
            <div className="flex gap-4 pb-4">
              {skillsWithSize.map((skill, index) => (
                <div
                  key={index}
                  className={`
                    snap-start flex-shrink-0
                    ${skill.size === 'large' ? 'w-64' : skill.size === 'medium' ? 'w-48' : 'w-40'}
                    ${skill.size === 'large' ? 'h-32' : skill.size === 'medium' ? 'h-28' : 'h-24'}
                    flex items-center justify-center
                    bg-card/30 backdrop-blur-sm border border-border/40 rounded-2xl
                    hover:border-primary/50 hover:scale-[1.02] hover:bg-accent/10
                    transition-all duration-300 cursor-pointer
                  `}
                >
                  <span className={`
                    ${skill.size === 'large' ? 'text-lg font-semibold' : skill.size === 'medium' ? 'text-base font-medium' : 'text-sm font-medium'}
                    text-center px-4
                  `}>
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
