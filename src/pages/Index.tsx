
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Tools } from "@/components/Tools";
import { Gallery } from "@/components/Gallery";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CreativeCursor } from "@/components/CreativeCursor";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 relative">
      <CreativeCursor />
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
  );
};

export default Index;
