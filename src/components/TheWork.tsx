type Project = {
  title: string;
  description: string;
  stack: string[];
  href: string;
  hrefLabel: string;
};

type Teardown = {
  brand: string;
  tag: string;
  href: string;
};

const projects: Project[] = [
  {
    title: "spotify hybrid recommender",
    description:
      "a recommender combining collaborative filtering (SVD) with content-based similarity on audio features. 18% lift over baseline. deployed.",
    stack: ["python", "scikit-learn", "streamlit"],
    href: "https://spotify-hybrid-music-recommender.streamlit.app/",
    hrefLabel: "view live →",
  },
  {
    title: "airbnb price predictor",
    description:
      "regression models predicting nightly listing prices. SHAP surfaces neighbourhood and room type as top price drivers. deployed.",
    stack: ["xgboost", "shap", "pandas"],
    href: "https://airbnb-price-predictor-dev.streamlit.app/",
    hrefLabel: "view live →",
  },
  {
    title: "a/b testing simulator",
    description:
      "an interactive tool for evaluating experiment data. z-tests, t-tests, confidence intervals, lift, all in a streamlit dashboard.",
    stack: ["python", "statsmodels", "scipy"],
    href: "https://github.com/amrutha2912/ab-testing-simulator",
    hrefLabel: "view on github →",
  },
  {
    title: "quick-commerce consumer behaviour",
    description:
      "analysed 3M+ instacart transactions. 3 customer segments via k-means, market basket analysis, and a simulated free-delivery experiment estimating 9.4% reorder lift.",
    stack: ["python", "sql", "seaborn"],
    href: "https://github.com/amrutha2912/quick-commerce-analysis",
    hrefLabel: "view on github →",
  },
  {
    title: "covid-19 infection prediction",
    description:
      "classifiers (logistic regression, decision tree, random forest) predicting infection likelihood from symptom data. 92% accuracy, validated with ROC.",
    stack: ["scikit-learn", "pandas"],
    href: "https://github.com/amrutha2912/covid19-infection-prediction",
    hrefLabel: "view on github →",
  },
];

const teardowns: Teardown[] = [
  { brand: "Inde Wild", tag: "retention", href: "/teardowns/inde-wild.html" },
  { brand: "Fae Beauty", tag: "activation", href: "/teardowns/fae-beauty.html" },
  { brand: "Dot & Key", tag: "growth loops", href: "/teardowns/dot-and-key.html" },
  { brand: "Clinikally", tag: "aha moment", href: "/teardowns/clinikally.html" },
  { brand: "Sleepy Owl Coffee", tag: "subscription", href: "/teardowns/sleepy-owl.html" },
  { brand: "Bombay Shaving Company", tag: "competitive strategy", href: "/teardowns/bombay-shaving-co.html" },
];

const TheWork = () => {
  return (
    <section id="work" className="py-24 md:py-32 border-t border-line">
      <div className="container-narrow">
        <p className="text-sm uppercase tracking-[0.22em] text-muted mb-6">
          ✺  selected work
        </p>
        <h2 className="font-serif text-4xl md:text-6xl mb-16">
          things i've built.
        </h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* LEFT — projects */}
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-accent mb-8">
              projects
            </p>
            <ul className="space-y-8">
              {projects.map((p) => (
                <li
                  key={p.title}
                  className="group border-b border-line pb-8 last:border-b-0 last:pb-0"
                >
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block transition-all duration-200 group-hover:translate-x-1"
                  >
                    <h3 className="font-serif text-2xl md:text-[1.65rem] text-ink group-hover:text-accent transition-colors mb-2">
                      {p.title}
                    </h3>
                    <p className="text-sm text-ink leading-relaxed mb-3">
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="text-xs px-2 py-0.5 border border-line text-muted rounded-sm"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-accent border-b border-accent pb-0.5">
                      {p.hrefLabel}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — brand teardowns */}
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-accent mb-8">
              brand teardowns
            </p>
            <ul className="space-y-3">
              {teardowns.map((t) => (
                <li key={t.brand}>
                  <a
                    href={t.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block border border-line hover:border-accent rounded-sm p-5 transition-all duration-200 hover:translate-x-1 group"
                  >
                    <span className="inline-block text-xs px-2.5 py-1 border border-accent text-accent rounded-sm mb-3 lowercase">
                      {t.tag}
                    </span>
                    <h3 className="font-serif text-2xl text-ink group-hover:text-accent transition-colors mb-2">
                      {t.brand}
                    </h3>
                    <span className="text-xs text-accent border-b border-accent pb-0.5">
                      read teardown →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheWork;
