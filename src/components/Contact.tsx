import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
    { icon: Github, label: "GitHub", href: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Mail, label: "Email", href: "mailto:contact@example.com" },
  ];

  return (
    <section id="contact" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground/60">Let's Talk</span>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mt-4 mb-8">Get in Touch</h2>
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
                  className="group flex items-center justify-between py-4 border-b border-border/40 hover:border-foreground transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <link.icon className="w-5 h-5 text-muted-foreground/60 group-hover:text-foreground transition-colors" />
                    <span className="text-lg group-hover:translate-x-2 transition-transform duration-300">{link.label}</span>
                  </div>
                  <span className="text-xs text-muted-foreground/40 group-hover:text-foreground transition-colors">→</span>
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
