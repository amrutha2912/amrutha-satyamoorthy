import { ExternalLink, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import CarouselSkeleton from "@/components/CarouselSkeleton";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false,
    align: "start",
    containScroll: "trimSnaps"
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [showSwipeHint, setShowSwipeHint] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const projects = [
    {
      title: "Spotify Music Recommendation System",
      description: "Developed a hybrid recommendation engine combining collaborative filtering and content-based similarity using the Spotify Tracks dataset. Implemented matrix factorization (SVD) to learn user–item embeddings and cosine similarity on audio features (danceability, valence, tempo). Designed and deployed an interactive Streamlit web app allowing users to input a song and receive personalized recommendations in real time. Improved recommendation relevance by 18% over baseline models, demonstrating end-to-end ML deployment skills.",
      tech: ["Python", "Scikit-learn", "Streamlit"],
      link: "https://spotify-hybrid-music-recommender.streamlit.app/",
    },
    {
      title: "Quick-Commerce Consumer Behavior Analysis (Blinkit & Zepto Case Study)",
      description: "Analyzed 3M+ Instacart transactions to uncover user purchase patterns reflecting Blinkit-like quick-commerce behavior. Identified 3 distinct customer segments using K-Means clustering based on frequency, basket size, and diversity metrics. Performed market basket analysis revealing strong co-purchases (milk–bread lift = 3.1) and high-loyalty categories (snacks 65%). Simulated retention uplift from a free-delivery experiment, estimating 9.4% increase in 14-day reorder rate.",
      tech: ["Python", "SQL", "Seaborn", "Streamlit"],
      link: "#",
    },
    {
      title: "Airbnb Price Prediction",
      description: "Built regression models to predict nightly listing prices based on location, amenities, and host ratings using the Inside Airbnb dataset. Performed feature engineering, outlier handling, and cross-validation, achieving high R² and low RMSE across multiple models. Applied SHAP explainability to interpret feature importance, identifying location and room type as top price drivers. Created visual dashboards highlighting neighborhood-level pricing insights and optimal host pricing strategies.",
      tech: ["XGBoost", "RandomForest", "SHAP", "Pandas"],
      link: "https://airbnb-price-predictor-dev.streamlit.app/",
    },
    {
      title: "COVID-19 Infection Prediction",
      description: "Developed multiple classification models (Logistic Regression, Decision Tree, Random Forest) to predict infection probability based on symptom data. Conducted feature selection and correlation analysis to identify key health indicators affecting infection likelihood. Achieved over 92% model accuracy, validating results using confusion matrices and ROC curves. Demonstrated the potential of ML-based early screening systems for real-world health applications.",
      tech: ["Scikit-learn", "Pandas", "Seaborn"],
      link: "#",
    },
    {
      title: "Eating Habits & Diet Quality Analysis",
      description: "Collaborated with a professor at MIT, Manipal to analyze dietary patterns among adolescents aged 12–24 years. Performed data cleaning, normalization, and statistical analysis to study relationships between diet quality, sleep duration, and lifestyle. Visualized key dietary trends by demographic segment, supporting academic research on youth nutrition and well-being.",
      tech: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
      link: "#",
    },
    {
      title: "A/B Testing Simulator",
      description: "Developed an interactive A/B testing analysis tool to evaluate experimental data for conversion rate improvements. Implemented hypothesis testing (Z-tests, t-tests) to calculate statistical significance, confidence intervals, and lift. Built a Streamlit dashboard allowing users to upload experiment data and automatically generate significance reports and visual insights. Enabled data-driven decision-making by simulating test scenarios and quantifying variant performance differences.",
      tech: ["Python", "Statsmodels", "Scipy", "Streamlit"],
      link: "#",
    },
  ];

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    // Hide swipe hint after 3 seconds
    const timer = setTimeout(() => {
      setShowSwipeHint(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={ref} id="projects" className="py-12 px-6">
      {/* Sticky Header - Mobile */}
      <div className="md:hidden sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border/20 px-6 py-4 -mx-6 mb-8">
        <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground/60">Selected Work</span>
        <h2 className="text-3xl font-display font-bold tracking-tight mt-1">Projects</h2>
      </div>

      <div className={`container mx-auto max-w-6xl section-reveal ${isVisible ? 'visible' : ''}`}>
        <div className="mb-20 hidden md:block">
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground/60">Selected Work</span>
          <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tight mt-4">Projects</h2>
        </div>

        {/* Desktop List */}
        <div className="hidden md:block space-y-1">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`stagger-item ${isVisible ? 'visible' : ''} group relative overflow-hidden card-hover tap-effect`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block border-t border-border/40 last:border-b py-8 hover:bg-accent/5 transition-all duration-500 px-6 -mx-6"
              >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs text-muted-foreground/50 font-mono">•</span>
                    <h3 className="text-2xl md:text-3xl font-bold group-hover:translate-x-2 transition-transform duration-300">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground/70 leading-relaxed mb-4 max-w-2xl">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs tracking-wider uppercase text-muted-foreground/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <ExternalLink className="w-5 h-5 text-muted-foreground/40 group-hover:text-foreground group-hover:rotate-45 transition-all duration-300" />
              </div>
              </a>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        {isLoading ? (
          <CarouselSkeleton type="projects" count={6} />
        ) : (
          <div className="md:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="flex-[0_0_90%] min-w-0"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-card/50 backdrop-blur-sm border border-border/40 rounded-lg p-6 h-full tap-effect"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-xl font-bold leading-tight flex-1">
                          {project.title}
                        </h3>
                        <ExternalLink className="w-5 h-5 text-muted-foreground/40 flex-shrink-0 mt-1" />
                      </div>
                      
                      <p className="text-muted-foreground/70 leading-relaxed text-sm">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs tracking-wider uppercase text-muted-foreground/60 bg-muted/30 px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex 
                    ? 'w-8 bg-accent' 
                    : 'w-2 bg-border/40 hover:bg-border/60'
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
