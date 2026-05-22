const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-line">
      <div className="container-narrow">
        <p className="text-sm uppercase tracking-[0.22em] text-muted mb-6">
          ✺  contact
        </p>
        <h2 className="font-serif text-4xl md:text-6xl mb-10 leading-[1.05]">
          let's talk.
        </h2>

        <p className="text-ink text-lg md:text-xl leading-relaxed max-w-2xl mb-12 italic">
          i don't bite. i do, however, ask a lot of questions about your
          retention curve.
        </p>

        <div className="space-y-3 text-base">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
            <span className="text-muted uppercase tracking-wider text-xs w-20">
              email
            </span>
            <a
              href="mailto:amrutha.satyamoorthy@gmail.com"
              className="text-ink hover:text-accent transition-colors border-b border-line hover:border-accent w-fit"
            >
              amrutha.satyamoorthy@gmail.com
            </a>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
            <span className="text-muted uppercase tracking-wider text-xs w-20">
              github
            </span>
            <a
              href="https://github.com/amrutha2912"
              target="_blank"
              rel="noreferrer"
              className="text-ink hover:text-accent transition-colors border-b border-line hover:border-accent w-fit"
            >
              github.com/amrutha2912
            </a>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
            <span className="text-muted uppercase tracking-wider text-xs w-20">
              linkedin
            </span>
            <a
              href="https://www.linkedin.com/in/amrutha-satyamoorthy-92b995232/"
              target="_blank"
              rel="noreferrer"
              className="text-ink hover:text-accent transition-colors border-b border-line hover:border-accent w-fit"
            >
              linkedin.com/in/amrutha-satyamoorthy
            </a>
          </div>
        </div>

        <footer className="mt-24 pt-8 border-t border-line flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted">
          <p>© 2026 amrutha satyamoorthy</p>
          <p className="italic">built with intention.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
