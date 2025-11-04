import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();
  const experiences = [
    {
      company: "Porter",
      role: "Business Analyst",
      period: "Oct 2024 - Present",
      description:
        "Engineered end-to-end analytical workflows using SQL, Python, and Streamlit. Designed real-time Fulfillment & Allocation Rate Dashboards and built an Experiment Monitoring System for A/B testing. Performed root-cause analysis contributing to a 7% uplift in fulfillment rate.",
    },
    {
      company: "Porter",
      role: "Data Science Intern",
      period: "Apr 2024 - Sep 2024",
      description:
        "Performed correlation and causation experiments to assess performance metrics. Engineered new features and utilized clustering algorithms to enhance model accuracy. Developed a Streamlit dashboard for real-time monitoring and data-driven decision-making.",
    },
    {
      company: "ShePays Financial Services Pvt Ltd",
      role: "Junior Data Analyst",
      period: "Jun 2023 - Aug 2023",
      description:
        "Utilized Moengage and AppsFlyer to create dashboards for user funnel activity. Developed a survey to understand financial behavior in women and created visualizations that informed significant application changes.",
    },
    {
      company: "Tiny Prism Labs Pvt Ltd",
      role: "Junior Data Scientist",
      period: "Jan 2023",
      description:
        "Utilized librosa library with FFT and MFCC techniques for audio analysis. Achieved 91% accuracy in noise differentiation through visualization charts and collaborative model optimization.",
    },
  ];

  return (
    <section ref={ref} id="experience" className="py-20 px-6">
      <div className={`container mx-auto max-w-6xl section-reveal ${isVisible ? 'visible' : ''}`}>
        <div className="mb-20">
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground/60">Career Path</span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mt-4">Experience</h2>
        </div>

        <div className="space-y-1">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`stagger-item ${isVisible ? 'visible' : ''} group border-t border-border/40 last:border-b py-10 hover:bg-accent/5 transition-all duration-500 px-6 -mx-6 magnetic-hover`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-3">
                  <span className="text-xs font-mono text-foreground">{exp.period}</span>
                </div>
                
                <div className="md:col-span-9">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-foreground transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-muted-foreground/70 mb-4">{exp.company}</p>
                  <p className="text-muted-foreground/60 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
