const items = [
  {
    label: "Building",
    body: "A portfolio of metric-based teardowns for Indian consumer brands. Six down, more coming. Global brands next.",
  },
  {
    label: "Studying",
    body: "Product analytics, growth strategy, experimentation design, and structured thinking — through a 90-day self-directed curriculum.",
  },
  {
    label: "Reading",
    body: "Hacking Growth (Sean Ellis), Inspired (Marty Cagan), Lenny's Newsletter, Stratechery, First Round Review.",
  },
  {
    label: "Listening to",
    body: "The ProductLed Podcast. The Sandhya Hegde episode genuinely changed how I think about activation.",
  },
  {
    label: "Preparing for",
    body: "Masters applications in Data Science / AI (Germany, Netherlands) for the 2026 intake.",
  },
  {
    label: "Open to",
    body: "Growth analyst, product analyst, and consumer-brand strategy roles in the EU. Brand consultancy too — particularly the kind that takes data seriously.",
  },
];

const Currently = () => {
  return (
    <section id="now" className="py-24 md:py-32 border-t border-line">
      <div className="container-narrow">
        <p className="text-sm uppercase tracking-[0.22em] text-muted mb-6">
          ✺  currently
        </p>
        <h2 className="font-serif text-3xl md:text-5xl mb-4">
          What I&rsquo;m on, right now.
        </h2>
        <p className="text-muted max-w-2xl text-base md:text-lg leading-relaxed mb-14">
          A &ldquo;now page,&rdquo; in the Derek Sivers sense. Updated whenever it
          stops being true.
        </p>

        <dl className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
          {items.map((item) => (
            <div key={item.label}>
              <dt className="text-xs uppercase tracking-[0.18em] text-accent mb-2">
                {item.label}
              </dt>
              <dd className="text-ink leading-relaxed">{item.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Currently;
