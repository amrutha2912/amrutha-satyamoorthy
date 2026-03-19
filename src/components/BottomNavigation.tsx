import { useState, useEffect } from "react";
import { User, Briefcase, FolderOpen, FileText, Mail } from "lucide-react";
import { useSectionNavigation } from "@/hooks/use-section-navigation";

const BottomNavigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const { navigateToSection } = useSectionNavigation();

  const navItems = [
    { id: "about", icon: User, label: "About" },
    { id: "experience", icon: Briefcase, label: "Work" },
    { id: "projects", icon: FolderOpen, label: "Projects" },
    { id: "publications", icon: FileText, label: "Papers" },
    { id: "contact", icon: Mail, label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "publications", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-border/40">
      <div className="flex items-center justify-around px-2 py-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => navigateToSection(item.id)}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all duration-300 tap-effect ${
                isActive 
                  ? "text-accent bg-accent/10" 
                  : "text-muted-foreground/60 hover:text-foreground"
              }`}
            >
              <Icon 
                size={20} 
                strokeWidth={isActive ? 2.5 : 2}
                className={`transition-transform duration-300 ${isActive ? "scale-110" : ""}`}
              />
              <span className={`text-[10px] font-medium tracking-wide transition-all duration-300 ${
                isActive ? "opacity-100" : "opacity-70"
              }`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
