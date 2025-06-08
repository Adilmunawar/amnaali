
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
          <div className="relative">
            <Aurora
              colorStops={["#8B5CF6", "#EC4899", "#06B6D4", "#8B5CF6"]}
              blend={0.5}
              amplitude={1.1}
              speed={0.4}
            />
            <div className="relative z-10">
              <About />
            </div>
          </div>
          <Tools />
          <div className="relative">
            <Aurora
              colorStops={["#06B6D4", "#8B5CF6", "#EC4899", "#06B6D4"]}
              blend={0.6}
              amplitude={1.2}
              speed={0.5}
            />
            <div className="relative z-10">
              <Gallery />
            </div>
          </div>
          <div className="relative">
            <Aurora
              colorStops={["#EC4899", "#FF69B4", "#8B5CF6", "#EC4899"]}
              blend={0.6}
              amplitude={1.0}
              speed={0.7}
            />
            <div className="relative z-10">
              <Portfolio />
            </div>
          </div>
          <Services />
          <div className="relative">
            <Aurora
              colorStops={["#FF69B4", "#EC4899", "#06B6D4", "#FF69B4"]}
              blend={0.5}
              amplitude={1.3}
              speed={0.6}
            />
            <div className="relative z-10">
              <Contact />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
