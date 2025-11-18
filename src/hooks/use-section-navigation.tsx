import { useEffect, useState } from "react";

export const useSectionNavigation = () => {
  const [isNavigating, setIsNavigating] = useState(false);
  const [targetSection, setTargetSection] = useState<string | null>(null);

  const navigateToSection = (sectionId: string) => {
    setIsNavigating(true);
    setTargetSection(sectionId);

    // Add exit animation class to current section
    const allSections = document.querySelectorAll('section[id]');
    allSections.forEach(section => {
      section.classList.remove('section-transition', 'active');
      section.classList.add('section-transition');
    });

    // Small delay for exit animation
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });

        // Add entry animation to target section
        setTimeout(() => {
          element.classList.add('active');
          setIsNavigating(false);
          setTargetSection(null);
        }, 300);
      }
    }, 150);
  };

  useEffect(() => {
    // Initialize sections with transition class
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      section.classList.add('section-transition', 'active');
    });
  }, []);

  return { navigateToSection, isNavigating, targetSection };
};
