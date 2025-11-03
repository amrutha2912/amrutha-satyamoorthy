import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
    { icon: Github, label: "GitHub", href: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Mail, label: "Email", href: "mailto:contact@example.com" },
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl font-semibold mb-12">Get in Touch</h2>

        <div className="space-y-8">
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="flex flex-wrap gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border hover:border-foreground/20 transition-colors text-muted-foreground hover:text-foreground"
              >
                <link.icon className="w-4 h-4" />
                <span className="text-sm">{link.label}</span>
              </a>
            ))}
          </div>

          <div className="pt-12 border-t border-border">
            <p className="text-sm text-muted-foreground/60">
              © {new Date().getFullYear()} • Built with React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
