import { ExternalLink, FileText } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const publications = [
  {
    title: "Explanatory Analysis of Habits and Associated Factors Influencing Adolescent Food Habits and Health",
    authors: "Dr Veeraj Hegde, Mrs Nisha P Shetty, Mitul Ganguly, Adithi Bhat, Amrutha Satyamoorthy, Jinit Jain",
    journal: "Zenodo",
    year: "2025",
    description:
      "A comprehensive cross-sectional study on health trends among 740 Indian adolescents (aged 12–24) across 20+ states, examining how snacking habits, sedentary lifestyles, sleep deprivation, peer pressure, and academic stress contribute to unhealthy behaviours and rising non-communicable diseases. Identified gender-differentiated effects of obesity and the dietary impact of leaving home for education.",
    doi: "10.5281/zenodo.19118017",
    link: "https://doi.org/10.5281/zenodo.19118017",
    tags: ["Data Analysis", "Public Health", "Cross-Sectional Study"],
  },
  {
    title: "EEG Motor Imagery Classification using Frequency-Domain and Spatial Filtering Methods: A Comparative Study",
    authors: "Amrutha Satyamoorthy",
    journal: "Zenodo",
    year: "2025",
    description:
      "A comparative study of two EEG feature-extraction pipelines — bandpower estimation and Common Spatial Patterns (CSP) — for classifying left- vs. right-hand motor imagery using the PhysioNet EEGBCI dataset. Bandpower features achieved 67.4% accuracy vs. 61.5% for CSP in a multi-subject setting, demonstrating greater robustness to inter-subject variability as a reproducible classical ML baseline for brain-computer interfaces.",
    doi: "10.5281/zenodo.19118709",
    link: "https://doi.org/10.5281/zenodo.19118709",
    tags: ["EEG", "Brain-Computer Interface", "Machine Learning"],
  },
];

const Publications = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="publications" className="py-12 px-6">
      {/* Sticky Header - Mobile */}
      <div className="md:hidden sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border/20 px-6 py-4 -mx-6 mb-8">
        <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground/60">Research</span>
        <h2 className="text-3xl font-display font-bold tracking-tight mt-1">Publications</h2>
      </div>

      <div className={`container mx-auto max-w-6xl section-reveal ${isVisible ? "visible" : ""}`}>
        <div className="mb-20 hidden md:block">
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground/60">Research</span>
          <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tight mt-4">Publications</h2>
        </div>

        <div className="space-y-1">
          {publications.map((pub, index) => (
            <div
              key={index}
              className={`stagger-item ${isVisible ? "visible" : ""} group relative overflow-hidden`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block border-t border-border/40 last:border-b py-8 hover:bg-accent/5 transition-all duration-500 px-6 -mx-6"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-3">
                      <FileText className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold group-hover:translate-x-2 transition-transform duration-300 leading-tight">
                          {pub.title}
                        </h3>
                        <p className="text-sm text-muted-foreground/60 mt-2">
                          {pub.authors} · {pub.journal}, {pub.year}
                        </p>
                      </div>
                    </div>

                    <p className="text-muted-foreground/70 leading-relaxed mb-4 max-w-3xl ml-9">
                      {pub.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 ml-9">
                      {pub.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs tracking-wider uppercase text-muted-foreground/60 bg-muted/30 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      <span className="text-xs text-accent/70 font-mono">
                        DOI: {pub.doi}
                      </span>
                    </div>
                  </div>

                  <ExternalLink className="w-5 h-5 text-muted-foreground/40 group-hover:text-foreground group-hover:rotate-45 transition-all duration-300 flex-shrink-0 hidden md:block" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
