import Hero from "@/components/Hero";
import About from "@/components/About";
import TheWork from "@/components/TheWork";
import Experience from "@/components/Experience";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";
import BackToTop from "@/components/BackToTop";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  return (
    <div className="min-h-screen bg-warm text-ink">
      <CustomCursor />
      <main>
        <Hero />
        <About />
        <TheWork />
        <Experience />
        <Publications />
        <Contact />
      </main>
      <BackToTop />
    </div>
  );
};

export default Index;
