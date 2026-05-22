type Project = {
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  context: string;
  href?: string;
};

const projects: Project[] = [
  {
    title: "CBC Recovery Model",
    subtitle: "weRize · Collections analytics",
    description:
      "A cohort-based collection model that predicts which bounced-cheque customers will recover, and when. The framing matters: this isn't a collections problem, it's a retention problem in disguise — the same cohort logic that tells you who's leaving a subscription tells you who's missing a payment.",
    stack: ["SQL", "Snowflake", "Python", "Cohort modelling"],
    context:
      "Reframed from a static recovery report into a rolling cohort view, so the business could see decay curves instead of monthly totals.",
  },
  {
    title: "Driver Lifecycle Analytics",
    subtitle: "Porter · Logistics analytics",
    description:
      "Built funnel and retention views for driver partners — from onboarding through to first trip, repeat activity, and churn. The unit economics of a logistics marketplace live or die on whether a driver completes their 10th trip. That's the activation question.",
    stack: ["SQL", "Funnel analysis", "Retention curves"],
    context:
      "Treated the supply side of the marketplace like a product: identified the activation moment, measured drop-off between stages.",
  },
  {
    title: "Metric Foundations Journal",
    subtitle: "Ongoing · Self-directed",
    description:
      "A working notebook of frameworks applied to live problems — NSM design, AARRR funnel mapping, retention curve diagnosis, unit economics teardowns. The point isn't to learn frameworks. It's to build the reflex of reaching for the right one in conversation.",
    stack: ["Frameworks", "Case studies", "Writing"],
    context:
      "The brand teardowns above are the public output of this. The journal is where the thinking happens first.",
  },
];

const DataProjects = () => {
  return (
    <section
      id="projects"
      className="py-24 md:py-32 border-t border-line"
    >
      <div className="container-narrow">
        <p className="text-sm uppercase tracking-[0.22em] text-muted mb-6">
          ✺  data &amp; analytics work
        </p>
        <h2 className="font-serif text-3xl md:text-5xl mb-4">
          The work behind the work.
        </h2>
        <p className="text-muted max-w-2xl text-base md:text-lg leading-relaxed mb-16">
          Day-job analytics, reframed as growth problems. Because a retention
          curve is a retention curve, whether it&rsquo;s a fintech customer or
          a D2C subscription.
        </p>

        <div className="space-y-12">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-10 pb-12 border-b border-line last:border-0 last:pb-0"
            >
              <div>
                <p className="text-muted text-xs uppercase tracking-wider mb-2">
                  0{i + 1}
                </p>
                <h3 className="font-serif text-2xl md:text-3xl text-ink mb-1">
                  {p.title}
                </h3>
                <p className="text-sm text-muted italic">{p.subtitle}</p>
              </div>
              <div className="space-y-4">
                <p className="text-ink leading-relaxed">{p.description}</p>
                <p className="text-sm text-muted italic leading-relaxed border-l-2 border-line pl-4">
                  {p.context}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 rounded-sm border border-line text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataProjects;
