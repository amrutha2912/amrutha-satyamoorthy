type Role = {
  company: string;
  role: string;
  dates: string;
  location: string;
  bullets: string[];
};

const roles: Role[] = [
  {
    company: "weRize",
    role: "data analyst, data science team",
    dates: "jan 2026 – present",
    location: "bengaluru",
    bullets: [
      "designed the NSC early indicator system to identify non-successful-connect customers in the collections pipeline by analysing calling attempt patterns, connection-rate curves, and lead-level behavioural signals, enabling early flagging of uncollectable cases.",
      "reduced wasted calling attempts by 30%, cutting per-customer contact attempts from over 30 down to 7 to 8 for identified NSC cohorts.",
      "building a bounce charges collection prioritisation system using classification and regression models to predict payment likelihood and expected recovery amount across three loan segments, integrating payment history, bounce charge data, credit bureau data, field visit history, and calling data.",
      "perform exploratory data analysis and feature engineering on large-scale loan datasets to support model development, hypothesis testing, and operational decision-making.",
    ],
  },
  {
    company: "Porter",
    role: "business analyst, decision systems",
    dates: "oct 2024 – dec 2025",
    location: "bengaluru",
    bullets: [
      "engineered end-to-end analytical workflows using SQL, python, and streamlit to monitor key business metrics including fulfilment rate, allocation accuracy, cancellations, and driver utilisation across multiple geographies.",
      "designed and deployed real-time fulfilment and allocation rate dashboards with dynamic filters and cohort-level drill-downs, enhancing visibility for operations and product teams.",
      "built a dedicated experiment monitoring system to evaluate A/B test rollouts of dispatch models through control vs test analysis, cohort segmentation, and temporal trend comparisons.",
      "implemented automated SQL pipelines and metric refresh scheduling, introducing KPIs such as effective fulfilment rate and allocation efficiency, increasing experimental measurement coverage by 40%.",
      "performed root-cause analysis using statistical validation and feature correlation, contributing to a 7% uplift in fulfilment rate.",
    ],
  },
  {
    company: "Porter",
    role: "data science intern",
    dates: "apr 2024 – sep 2024",
    location: "bengaluru",
    bullets: [
      "performed correlation and causation experiments to assess the 'completion score' metric, demonstrating through statistical analysis that it was a poor performance indicator, influencing a metric redesign decision.",
      "engineered new features and applied clustering algorithms to segment notification-level data, enhancing model accuracy and generating actionable insights for the product team.",
      "developed a streamlit dashboard to visualise key organisational metrics, enabling real-time monitoring across teams.",
    ],
  },
  {
    company: "Porter",
    role: "data analyst intern",
    dates: "jan 2024 – mar 2024",
    location: "bengaluru",
    bullets: [
      "developed multiple dashboards in metabase using SQL queries to enhance cost-to-serve visibility across key business metrics.",
      "conducted analysis of bucket thresholds in the lead score model during phase 1.5, using python for data preprocessing and statistical analysis.",
      "initiated phase 2 by analysing initial customer calls to optimise the goal cost-to-convert, enabling data-driven strategic planning.",
    ],
  },
  {
    company: "ShePays",
    role: "junior data analyst intern",
    dates: "jun 2023 – aug 2023",
    location: "bengaluru",
    bullets: [
      "leveraged moengage and appsflyer to track user funnel behaviour, analyse retention trends, and identify conversion drop-offs across the app lifecycle.",
      "developed a survey to understand financial behaviour patterns among women and created visualisations to communicate findings to stakeholders, informing significant changes in application design and feature prioritisation.",
    ],
  },
  {
    company: "Tiny Prism Labs",
    role: "junior data scientist intern",
    dates: "jan 2023",
    location: "manipal",
    bullets: [
      "applied signal processing techniques using librosa (FFT, MFCC) to differentiate noise patterns in audio datasets, achieving 91% classification accuracy.",
      "visualised spectrograms for model inspection and contributed to optimising the feature extraction pipeline through iterative testing.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 border-t border-line">
      <div className="container-narrow">
        <p className="text-sm uppercase tracking-[0.22em] text-muted mb-6">
          ✺  experience
        </p>
        <h2 className="font-serif text-4xl md:text-6xl mb-16">
          the work so far.
        </h2>

        <div className="space-y-14">
          {roles.map((r, i) => (
            <article
              key={`${r.company}-${i}`}
              className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-10"
            >
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-ink">
                  {r.company}
                </h3>
                <p className="text-ink mt-1">{r.role}</p>
                <p className="text-sm text-muted mt-1">
                  {r.dates} · {r.location}
                </p>
              </div>
              <ul className="space-y-3 text-ink leading-relaxed">
                {r.bullets.map((b, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-accent shrink-0 mt-1.5">·</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
