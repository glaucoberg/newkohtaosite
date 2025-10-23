import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import DiveSites from "@/components/DiveSites";
import Destinations from "@/components/Destinations";
import Activities from "@/components/Activities";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <DiveSites />
      <Destinations />
      <Activities />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
