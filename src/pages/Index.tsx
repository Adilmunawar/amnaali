
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Tools } from "@/components/Tools";
import { Gallery } from "@/components/Gallery";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import SplashCursor from "@/components/SplashCursor";
import Aurora from "@/components/Aurora";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Aurora Background - Fixed and covering entire viewport */}
      <Aurora
        colorStops={["#FF69B4", "#FF1493", "#FFB6C1", "#FF69B4"]}
        blend={0.7}
        amplitude={1.3}
        speed={0.6}
      />
      
      {/* Content overlay */}
      <div className="relative z-10">
        <SplashCursor />
        <Navigation />
        <main>
          <Hero />
          <About />
          <Tools />
          <Gallery />
          <Portfolio />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
