import { Mail, Linkedin, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/amrutha2912" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/amrutha-satyamoorthy-92b995232" },
    { icon: Mail, label: "Email", href: "mailto:amrutha.satyamoorthy@gmail.com" },
  ];

  return (
    <section ref={ref} id="contact" className="py-12 px-6">
      {/* Sticky Header - Mobile */}
      <div className="md:hidden sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border/20 px-6 py-4 -mx-6 mb-8">
        <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground/60">Let's Talk</span>
        <h2 className="text-3xl font-display font-bold tracking-tight mt-1 text-gradient">Get in Touch</h2>
      </div>

      <div className={`container mx-auto max-w-6xl section-reveal ${isVisible ? 'visible' : ''}`}>
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5 hidden md:block">
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground/60">Let's Talk</span>
            <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tight mt-4 mb-8 text-gradient">Get in Touch</h2>
            <p className="text-lg text-muted-foreground/70 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>
          
          <div className="md:col-span-7 flex flex-col justify-between">
            <div className="space-y-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`stagger-item ${isVisible ? 'visible' : ''} group flex items-center justify-between py-4 border-b border-border/40 hover:border-accent transition-all duration-300 magnetic-hover animated-underline tap-effect`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <link.icon className="w-5 h-5 text-muted-foreground/60 group-hover:text-accent transition-all group-hover:scale-110" />
                    <span className="text-lg group-hover:translate-x-2 transition-transform duration-300">{link.label}</span>
                  </div>
                  <span className="text-xs text-muted-foreground/40 group-hover:text-accent transition-colors">→</span>
                </a>
              ))}
            </div>

            <div className="pt-16 mt-auto">
              <p className="text-xs text-muted-foreground/40 tracking-wider">
                © {new Date().getFullYear()} • Built with React & TypeScript
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
