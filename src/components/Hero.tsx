const Hero = () => {
  return (
    <section
      id="top"
      className="min-h-screen flex items-center pt-24 pb-16"
    >
      <div className="container-narrow w-full">
        <p className="text-sm uppercase tracking-[0.22em] text-muted mb-10">
          ✺  portfolio, twenty twenty-six
        </p>

        <h1 className="font-serif text-[2.5rem] leading-[1.1] sm:text-[3.5rem] md:text-[4.25rem] md:leading-[1.08] text-ink">
          amrutha satyamoorthy is a{" "}
          <em className="italic text-accent">growth analyst</em>,{" "}
          <em className="italic text-accent">brand strategist</em>,{" "}
          and <em className="italic text-accent">data storyteller</em>{" "}
          <span className="text-muted">
            — and someone who can't stop diagnosing the brands she buys from.
          </span>
        </h1>

        <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 text-ink border-b border-ink pb-0.5 hover:text-accent hover:border-accent transition-colors"
          >
            view the work
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </a>
          <a
            href="#about"
            className="text-muted hover:text-ink transition-colors"
          >
            about her
          </a>
          <a
            href="mailto:amrutha.satyamoorthy@gmail.com"
            className="text-muted hover:text-ink transition-colors"
          >
            say hello
          </a>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm border-t border-line pt-8">
          <div>
            <p className="text-muted uppercase tracking-wider text-xs mb-1">
              based in
            </p>
            <p className="text-ink">bangalore, in</p>
          </div>
          <div>
            <p className="text-muted uppercase tracking-wider text-xs mb-1">
              currently
            </p>
            <p className="text-ink">data analyst, weRize</p>
          </div>
          <div>
            <p className="text-muted uppercase tracking-wider text-xs mb-1">
              writing about
            </p>
            <p className="text-ink">indian consumer brands</p>
          </div>
          <div>
            <p className="text-muted uppercase tracking-wider text-xs mb-1">
              open to
            </p>
            <p className="text-ink">growth & product roles, eu</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
