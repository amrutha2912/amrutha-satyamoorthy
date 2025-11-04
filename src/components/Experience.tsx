import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();
  const experiences = [
    {
      company: "Porter",
      role: "Business Analyst",
      period: "Oct 2024 - Present",
      description:
        "Engineered end-to-end analytical workflows using SQL, Python, and Streamlit to monitor key business metrics including fulfillment rate, allocation accuracy, cancellations, and driver utilization across multiple geographies. Designed and deployed real-time Fulfillment & Allocation Rate Dashboards with dynamic filters and cohort-level drill-downs, enhancing visibility for operations and product teams. Built a dedicated Experiment Monitoring System to evaluate A/B test rollouts of dispatch models through control–test analysis, cohort segmentation, and temporal trend comparisons. Implemented automated SQL pipelines and metric refresh scheduling to improve reporting efficiency, while introducing new goal-tracking KPIs such as Effective Fulfillment Rate and Allocation Efficiency, increasing experimental measurement coverage by 40%. Performed root-cause analysis using statistical validation and feature correlation to identify performance bottlenecks, contributing to a 7% uplift in fulfillment rate.",
    },
    {
      company: "Porter",
      role: "Data Science Intern",
      period: "Apr 2024 - Sep 2024",
      description:
        "Performed correlation and causation experiments to assess the 'Completion Score' metric, revealing it as a poor performance indicator through statistical analysis. Engineered new features and utilized clustering algorithms to segment notification level data, enhancing model accuracy and generating actionable insights. Developed a Streamlit dashboard to visualize key organizational metrics, enabling real-time monitoring and data-driven decision-making across teams.",
    },
    {
      company: "ShePays Financial Services Pvt Ltd",
      role: "Junior Data Analyst",
      period: "Jun 2023 - Aug 2023",
      description:
        "Utilized Moengage and AppsFlyer to create comprehensive dashboards for user funnel activity during the testing period. Developed a survey to understand financial behavior patterns in women and created visualizations to communicate findings effectively to stakeholders. Survey results informed significant changes in the application design and feature prioritization.",
    },
    {
      company: "Tiny Prism Labs Pvt Ltd",
      role: "Junior Data Scientist",
      period: "Jan 2023",
      description:
        "Utilized librosa library and techniques like FFT and MFCC for audio signal processing and analysis. Employed visualization charts to distinguish noise from meaningful data patterns. Achieved 91% accuracy in noise differentiation and collaborated with the team to optimize model performance through iterative testing and refinement.",
    },
  ];

  return (
    <section ref={ref} id="experience" className="py-12 px-6">
      <div className={`container mx-auto max-w-6xl section-reveal ${isVisible ? 'visible' : ''}`}>
        <div className="mb-20">
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground/60">Career Path</span>
          <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tight mt-4">Experience</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`stagger-item ${isVisible ? 'visible' : ''} group bg-card/50 backdrop-blur-sm border border-border/40 rounded-lg p-8 transition-all duration-500 hover:bg-muted/30 hover:border-border/80 hover:-translate-y-2 hover:shadow-xl cursor-pointer`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-mono text-white tracking-wider">
                    {exp.period}
                  </span>
                  <h3 className="text-2xl font-bold group-hover:text-foreground transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-muted-foreground/80">{exp.company}</p>
                </div>
                
                <p className="text-muted-foreground/70 leading-relaxed text-sm">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
