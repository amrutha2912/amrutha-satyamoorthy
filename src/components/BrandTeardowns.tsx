type Teardown = {
  slug: string;
  brand: string;
  diagnosis: string;
  tags: string[];
  metric: { value: string; label: string };
  /** Brand-owned palette: bg + ink colors written as raw values (not Tailwind tokens). */
  palette: {
    bg: string;       // card background
    accent: string;   // primary brand color, used for the metric value
    ink: string;      // text on the card (usually near-black or off-white)
    inkMuted: string; // secondary text
    border: string;   // subtle border tone
  };
  href: string;       // points to public/teardowns/{slug}.html
};

const teardowns: Teardown[] = [
  {
    slug: "inde-wild",
    brand: "Inde Wild",
    diagnosis:
      "The acquisition machine that forgot to build a retention loop.",
    tags: ["Retention", "Hero SKU Risk", "Unit Economics"],
    metric: {
      value: "90-day repurchase",
      label:
        "the number that determines if Inde Wild hits 1000Cr.",
    },
    palette: {
      bg: "#f1f5ec",
      accent: "#2d6a4f",
      ink: "#1b2e23",
      inkMuted: "#506a5b",
      border: "#cfd9c8",
    },
    href: "/teardowns/inde-wild.html",
  },
  {
    slug: "fae-beauty",
    brand: "Fae Beauty",
    diagnosis:
      "The near-death pivot that turned hero-product focus into a growth engine.",
    tags: ["Activation", "Channel Strategy", "Quick Commerce"],
    metric: {
      value: "214% YoY",
      label: "growth after cutting SKUs, not adding them.",
    },
    palette: {
      bg: "#f3eefb",
      accent: "#7c3aed",
      ink: "#2a1855",
      inkMuted: "#6b5b8f",
      border: "#d8cdef",
    },
    href: "/teardowns/fae-beauty.html",
  },
  {
    slug: "dot-and-key",
    brand: "Dot & Key",
    diagnosis:
      "When the influencer playbook hits a ceiling at 500Cr.",
    tags: ["Growth Loops", "CAC/LTV", "Competitive Moats"],
    metric: {
      value: "529Cr NSV",
      label: "with 115% YoY growth — but is the engine sustainable?",
    },
    palette: {
      bg: "#fdf1e6",
      accent: "#e85d04",
      ink: "#451a03",
      inkMuted: "#8a4a1f",
      border: "#f1d6b8",
    },
    href: "/teardowns/dot-and-key.html",
  },
  {
    slug: "clinikally",
    brand: "Clinikally",
    diagnosis:
      "The activation problem hiding inside a category-creation opportunity.",
    tags: ["Aha Moment", "JTBD", "Experiment Design"],
    metric: {
      value: "30+ SKUs",
      label: "creating choice paralysis before value is ever felt.",
    },
    palette: {
      bg: "#e8f5f8",
      accent: "#0891b2",
      ink: "#0f3641",
      inkMuted: "#3d6878",
      border: "#bfdde5",
    },
    href: "/teardowns/clinikally.html",
  },
  {
    slug: "sleepy-owl",
    brand: "Sleepy Owl Coffee",
    diagnosis:
      "The subscription loop most D2C brands dream about — and the pricing trap threatening it.",
    tags: ["Growth Loops", "Retention", "Subscription Economics"],
    metric: {
      value: "40% subscription rev",
      label: "but 60% of buyers never convert.",
    },
    palette: {
      bg: "#f5ece1",
      accent: "#92400e",
      ink: "#3a1e08",
      inkMuted: "#7a5230",
      border: "#dcc6a8",
    },
    href: "/teardowns/sleepy-owl.html",
  },
  {
    slug: "bombay-shaving-co",
    brand: "Bombay Shaving Company",
    diagnosis:
      "The premium brand that went mass — and lost its moat.",
    tags: ["Porter's Five Forces", "MECE", "Competitive Strategy"],
    metric: {
      value: "50+ SKUs",
      label: "across 6 categories, no single category owned.",
    },
    palette: {
      bg: "#eaeff5",
      accent: "#1e3a5f",
      ink: "#0f1e33",
      inkMuted: "#4a5a76",
      border: "#c5d0de",
    },
    href: "/teardowns/bombay-shaving-co.html",
  },
];

const BrandTeardowns = () => {
  return (
    <section id="work" className="py-24 md:py-32 border-t border-line">
      <div className="container-narrow">
        <p className="text-sm uppercase tracking-[0.22em] text-muted mb-6">
          ✺  selected work
        </p>
        <h2 className="font-serif text-3xl md:text-5xl mb-4">
          Brand growth teardowns.
        </h2>
        <p className="text-muted max-w-2xl text-base md:text-lg leading-relaxed mb-16">
          Metric-based diagnoses of how Indian consumer brands grow, where they
          leak, and what to fix. Each piece pairs a strategy framework with the
          data analyst&rsquo;s edge — the specific number I&rsquo;d measure to
          know if it&rsquo;s working.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {teardowns.map((t, i) => (
            <a
              key={t.slug}
              href={t.href}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-sm border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(0,0,0,0.25)] overflow-hidden"
              style={{
                background: t.palette.bg,
                borderColor: t.palette.border,
                color: t.palette.ink,
              }}
            >
              <div className="p-7 md:p-8 flex flex-col h-full min-h-[320px]">
                <div className="flex items-baseline justify-between mb-6">
                  <span
                    className="text-xs uppercase tracking-[0.18em]"
                    style={{ color: t.palette.inkMuted }}
                  >
                    Teardown / 0{i + 1}
                  </span>
                  <span
                    aria-hidden="true"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: t.palette.accent }}
                  >
                    read →
                  </span>
                </div>

                <h3
                  className="font-serif text-3xl md:text-4xl mb-4"
                  style={{ color: t.palette.ink }}
                >
                  {t.brand}
                </h3>

                <p
                  className="text-base md:text-lg leading-snug mb-6 italic"
                  style={{ color: t.palette.ink }}
                >
                  &ldquo;{t.diagnosis}&rdquo;
                </p>

                <div className="mt-auto">
                  <div
                    className="border-t pt-5 mb-5"
                    style={{ borderColor: t.palette.border }}
                  >
                    <p
                      className="font-serif text-2xl mb-1"
                      style={{ color: t.palette.accent }}
                    >
                      {t.metric.value}
                    </p>
                    <p
                      className="text-sm leading-snug"
                      style={{ color: t.palette.inkMuted }}
                    >
                      {t.metric.label}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {t.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-sm border"
                        style={{
                          borderColor: t.palette.border,
                          color: t.palette.inkMuted,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <p className="text-sm text-muted mt-12 italic">
          Six Indian brands first. Global next.
        </p>
      </div>
    </section>
  );
};

export default BrandTeardowns;
