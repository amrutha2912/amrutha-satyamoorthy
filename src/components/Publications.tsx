const publications = [
  {
    title:
      "explanatory analysis of habits and associated factors influencing adolescent food habits and health",
    authors: "Hegde V, Shetty NP, Ganguly M, Bhat A, Satyamoorthy A, Jain J.",
    venue: "Manipal Institute of Technology, 2022",
    doi: "10.5281/zenodo.19118017",
    href: "https://doi.org/10.5281/zenodo.19118017",
  },
  {
    title:
      "EEG motor imagery classification using frequency-domain and spatial filtering methods: a comparative study",
    authors: "Satyamoorthy A.",
    venue: "Manipal Institute of Technology, 2023",
    doi: "10.5281/zenodo.19118709",
    href: "https://doi.org/10.5281/zenodo.19118709",
  },
];

const Publications = () => {
  return (
    <section id="publications" className="py-24 md:py-32 border-t border-line">
      <div className="container-narrow">
        <p className="text-sm uppercase tracking-[0.22em] text-muted mb-6">
          ✺  publications
        </p>
        <h2 className="font-serif text-4xl md:text-6xl mb-16">
          published research.
        </h2>

        <div className="space-y-10">
          {publications.map((p, i) => (
            <a
              key={p.doi}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group block pb-10 border-b border-line last:border-0 last:pb-0 transition-transform duration-200 hover:translate-x-1"
            >
              <div className="grid grid-cols-[40px_1fr] gap-6 items-start">
                <span className="text-muted text-xs uppercase tracking-wider pt-1">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl text-ink group-hover:text-accent transition-colors mb-3 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted italic mb-1">{p.authors}</p>
                  <p className="text-sm text-muted mb-3">{p.venue}</p>
                  <span className="text-xs text-accent font-mono border-b border-accent inline-block pb-0.5">
                    DOI: {p.doi} →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
