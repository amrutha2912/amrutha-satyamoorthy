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
    role: "Data Analyst",
    dates: "2023 — Present",
    location: "Bangalore",
    bullets: [
      "Built a cohort-based collections model that segments customers by repayment behaviour, turning a downstream recovery problem into an upstream retention one.",
      "Designed Snowflake/SQL pipelines and cohort views that the lending and product teams now use to track decay, activation, and churn.",
      "Partnered with product on experimentation design — defining metrics, sample sizes, and what would count as evidence — for collections workflow tests.",
    ],
  },
  {
    company: "Porter",
    role: "Data Analyst",
    dates: "2021 — 2023",
    location: "Bangalore",
    bullets: [
      "Owned analytics for the driver-partner side of the marketplace, treating supply onboarding as a product funnel — from sign-up through to first trip, retention, and lifetime contribution.",
      "Identified the activation moment for new drivers (the trip-count threshold beyond which retention stabilised) and built dashboards the ops team used to course-correct in week one.",
      "Surfaced unit-economic insights that reframed how the business thought about driver acquisition cost versus contribution margin.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 border-t border-line"
    >
      <div className="container-narrow">
        <p className="text-sm uppercase tracking-[0.22em] text-muted mb-6">
          ✺  experience
        </p>
        <h2 className="font-serif text-3xl md:text-5xl mb-16">
          Where the thinking gets stress-tested.
        </h2>

        <div className="space-y-14">
          {roles.map((r) => (
            <article
              key={r.company}
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
                {r.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-accent shrink-0 mt-1.5">—</span>
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
