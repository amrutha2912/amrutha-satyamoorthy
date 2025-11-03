import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:contact@example.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Interested in collaborating or have a project in mind? 
            I'd love to hear from you.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {socialLinks.map((link, index) => (
              <Button
                key={index}
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all"
                asChild
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <link.icon className="w-5 h-5" />
                  {link.label}
                </a>
              </Button>
            ))}
          </div>

          <div className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Portfolio. Built with React & TypeScript.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
