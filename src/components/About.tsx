const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-line">
      <div className="container-narrow">
        <p className="text-sm uppercase tracking-[0.22em] text-muted mb-6">
          ✺  about
        </p>

        <h2 className="font-serif text-3xl md:text-5xl mb-12 max-w-3xl">
          A data analyst who realised the most interesting question
          isn&rsquo;t <em className="italic text-accent">what the data says</em>{" "}
          — it&rsquo;s <em className="italic text-accent">what we should do about it.</em>
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-base leading-relaxed">
          <div className="md:col-span-2 space-y-5 text-ink">
            <p>
              I currently work as a data analyst at{" "}
              <span className="text-ink font-medium">weRize</span>, a fintech in
              Bangalore, where I build predictive models for collections and dig
              through cohort data to figure out which customers are quietly
              slipping away. Before that, I was at{" "}
              <span className="text-ink font-medium">Porter</span>, working on
              logistics analytics — the kind of problems where a small change
              in unit economics rearranges the entire P&amp;L.
            </p>
            <p>
              Somewhere along the way I noticed that the people who built the
              best businesses around me weren&rsquo;t the ones with the most
              dashboards. They were the ones who could look at a retention
              curve and tell you, in one sentence, what was broken and what to
              do next. So I started learning how they think.
            </p>
            <p>
              These days I spend my evenings reading{" "}
              <span className="text-ink font-medium">Lenny&rsquo;s Newsletter</span>,{" "}
              <span className="text-ink font-medium">Stratechery</span>, and{" "}
              <span className="text-ink font-medium">Hacking Growth</span>; running
              metric-based teardowns of Indian consumer brands; and slowly
              building a portfolio that proves the rare combination I&rsquo;m
              chasing — a data analyst who can write a brand positioning
              statement, and a strategist who can read a cohort table.
            </p>
            <p>
              I&rsquo;m currently applying to growth and product roles in the
              EU, and to Masters programs in Data Science and AI in Germany and
              the Netherlands.
            </p>
          </div>

          <aside className="space-y-8 text-sm">
            <div>
              <p className="text-muted uppercase tracking-wider text-xs mb-3">
                tools
              </p>
              <ul className="space-y-1 text-ink">
                <li>SQL &amp; Snowflake</li>
                <li>Python</li>
                <li>Mixpanel, Amplitude</li>
                <li>Excel, Sheets</li>
              </ul>
            </div>
            <div>
              <p className="text-muted uppercase tracking-wider text-xs mb-3">
                thinking in
              </p>
              <ul className="space-y-1 text-ink">
                <li>AARRR &amp; growth loops</li>
                <li>Retention &amp; unit economics</li>
                <li>JTBD &amp; positioning</li>
                <li>Experiment design</li>
              </ul>
            </div>
            <div>
              <p className="text-muted uppercase tracking-wider text-xs mb-3">
                reading now
              </p>
              <ul className="space-y-1 text-ink italic">
                <li>Hacking Growth — Sean Ellis</li>
                <li>Inspired — Marty Cagan</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
