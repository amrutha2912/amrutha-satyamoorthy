const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-line">
      <div className="container-narrow">
        <p className="text-sm uppercase tracking-[0.22em] text-muted mb-6">
          ✺  about
        </p>
        <h2 className="font-serif text-4xl md:text-6xl mb-16">
          about me.
        </h2>

        <div className="max-w-2xl space-y-6 text-base md:text-lg leading-[1.75] text-ink">
          <p>
            i'm a data analyst, currently at werize, previously at porter,
            where i discovered that a metric everyone trusted to measure model
            performance turned out to be statistically useless. watching that
            finding ripple through the org, prompting a real metric redesign,
            is when i understood that what i actually like is the chaos of it.
            the hypothesis, the digging, the part where the answer surprises
            everyone.
          </p>
          <p>
            that's the kind of work i'm trying to do more of. growth, product,
            strategy. i want to be closer to the questions that shape what
            gets built, and the user journey behind the numbers.
          </p>
          <p>
            the intersection of biology, fashion, and technology is where i'm
            most curious. any two of those at once and i'm in.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
