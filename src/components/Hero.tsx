const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      {/* Small wordmark cluster, top-left */}
      <div className="absolute top-8 left-6 md:top-12 md:left-16 z-20">
        <a
          href="#top"
          className="font-serif text-3xl md:text-[32px] leading-none text-ink block mb-6 md:mb-9"
          style={{ fontWeight: 800 }}
        >
          as<span className="text-accent">.</span>
        </a>
        <ul className="space-y-1.5 text-sm">
          <li>
            <a
              href="#work"
              className="text-ink hover:text-accent transition-colors border-b border-ink hover:border-accent pb-px"
            >
              work
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-ink hover:text-accent transition-colors border-b border-ink hover:border-accent pb-px"
            >
              about
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-ink hover:text-accent transition-colors border-b border-ink hover:border-accent pb-px"
            >
              contact
            </a>
          </li>
        </ul>
      </div>

      {/* Massive centered circle */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none z-[1]"
        style={{
          width: "min(78vh, 78vw)",
          height: "min(78vh, 78vw)",
          maxWidth: "820px",
          maxHeight: "820px",
          background:
            "radial-gradient(circle, rgba(45,106,79,0.25) 0%, rgba(45,106,79,0.13) 55%, rgba(45,106,79,0) 100%)",
        }}
      />

      {/* Hero text — overlapping circle */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-[900px] md:pl-[200px] pt-20 md:pt-0">
          <p className="text-[15px] text-ink mb-4 ml-2">
            amrutha satyamoorthy is a
          </p>

          <h1
            className="font-serif text-accent"
            style={{
              fontWeight: 800,
              lineHeight: 0.92,
              letterSpacing: "-0.02em",
            }}
          >
            <span
              className="block"
              style={{ fontSize: "clamp(56px, 9vw, 124px)" }}
            >
              data analyst,
            </span>
            <span
              className="block"
              style={{ fontSize: "clamp(56px, 9vw, 124px)" }}
            >
              storyteller,
            </span>
            <span
              className="block text-ink"
              style={{ fontSize: "clamp(56px, 9vw, 124px)" }}
            >
              &amp; metric obsessive
            </span>
          </h1>

          <div className="flex gap-6 mt-8 ml-2">
            <a
              href="#work"
              className="text-base text-ink hover:text-accent transition-colors border-b border-ink hover:border-accent pb-px"
            >
              view work
            </a>
            <a
              href="#about"
              className="text-base text-ink hover:text-accent transition-colors border-b border-ink hover:border-accent pb-px"
            >
              view about
            </a>
          </div>

          <p className="mt-4 ml-2 text-[11px] text-muted italic">
            or continue scrolling for featured projects, skills, and more
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
