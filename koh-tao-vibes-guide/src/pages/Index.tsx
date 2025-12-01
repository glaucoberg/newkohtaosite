import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import DiveSites from "@/components/DiveSites";
import Destinations from "@/components/Destinations";
import Activities from "@/components/Activities";
import Accommodations from "@/components/Accommodations";
import BusinessDirectory from "@/components/BusinessDirectory";
import InteractiveMapSection from "@/components/InteractiveMapSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div id="dive-sites" className="scroll-mt-20">
        <DiveSites />
      </div>
      <div id="destinations" className="scroll-mt-20">
        <Destinations />
      </div>
      <div id="activities" className="scroll-mt-20">
        <Activities />
      </div>
      <div id="accommodations" className="scroll-mt-20">
        <Accommodations />
      </div>
      <div id="directory" className="scroll-mt-20">
        <BusinessDirectory />
      </div>
      <div id="map" className="scroll-mt-20">
        <InteractiveMapSection />
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
