import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BrandTeardowns from "@/components/BrandTeardowns";
import DataProjects from "@/components/DataProjects";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Currently from "@/components/Currently";
import Contact from "@/components/Contact";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-warm text-ink">
      <Navigation />
      <main>
        <Hero />
        <BrandTeardowns />
        <DataProjects />
        <Experience />
        <About />
        <Currently />
        <Contact />
      </main>
      <BackToTop />
    </div>
  );
};

export default Index;
