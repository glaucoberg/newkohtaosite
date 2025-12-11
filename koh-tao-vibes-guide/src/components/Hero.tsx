import { Button } from "@/components/ui/button";
import { Search, ArrowDown } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-koh-tao.jpg";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      toast({
        title: "Searching...",
        description: `Looking for: ${searchQuery}`,
      });
      // Could navigate to search results
    } else {
      toast({
        title: "Enter a search term",
        description: "Please enter what you're looking for",
      });
    }
  };

  const handlePlanTrip = () => {
    navigate("/activities");
  };

  const scrollToDiveSites = () => {
    navigate("/diving");
  };

  const scrollToNext = () => {
    scrollToDiveSites();
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Luxury Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${heroImage}")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220_20%_8%_/_0.85)] via-[hsl(220_20%_8%_/_0.75)] to-[hsl(220_20%_8%_/_0.9)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(220_20%_8%_/_0.8)_100%)]"></div>
      </div>

      {/* Luxury Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(180_70%_45%_/_0.05)] to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-[hsl(180_30%_98%)] mb-6 animate-fade-in tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-[hsl(180_30%_98%)] via-[hsl(180_70%_45%)] to-[hsl(45_85%_55%)] bg-clip-text text-transparent">
              {t("hero.title")}
            </span>
            <br />
            <span className="text-[hsl(180_30%_98%)]">{t("hero.subtitle")}</span>
          </h1>
          <p className="text-xl md:text-2xl text-[hsl(180_30%_98%_/_0.8)] mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            {t("hero.description")}
          </p>
          
          {/* Luxury Search Bar */}
          <div className="max-w-2xl mx-auto mb-10">
            <div className="flex gap-3 bg-[hsl(220_25%_12%_/_0.95)] backdrop-blur-xl rounded-2xl p-3 shadow-[0_20px_60px_hsl(220_20%_8%_/_0.5)] border border-[hsl(220_25%_20%)]">
              <input 
                type="text" 
                placeholder={t("hero.searchPlaceholder")}
                className="flex-1 px-6 py-4 rounded-xl bg-transparent focus:outline-none text-[hsl(180_30%_98%)] placeholder:text-[hsl(180_30%_98%_/_0.4)] text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
              <Button 
                onClick={handleSearch}
                className="bg-gradient-to-r from-[hsl(180_70%_45%)] to-[hsl(45_85%_55%)] text-[hsl(220_20%_8%)] hover:shadow-[0_0_30px_hsl(180_70%_45%_/_0.4)] transition-all duration-300 font-semibold px-8 py-4 rounded-xl"
              >
                <Search className="mr-2 h-5 w-5" />
                {t("hero.explore")}
              </Button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <Button 
              onClick={handlePlanTrip}
              className="bg-gradient-to-r from-[hsl(180_70%_45%)] to-[hsl(45_85%_55%)] text-[hsl(220_20%_8%)] hover:shadow-[0_0_40px_hsl(180_70%_45%_/_0.5)] transition-all duration-300 font-semibold text-lg px-10 py-6 rounded-xl"
            >
              {t("nav.planTrip")}
            </Button>
            <Button 
              onClick={scrollToDiveSites}
              variant="outline" 
              className="text-lg px-10 py-6 rounded-xl bg-[hsl(220_25%_12%_/_0.5)] backdrop-blur-xl border-2 border-[hsl(180_70%_45%)] text-[hsl(180_70%_45%)] hover:bg-[hsl(180_70%_45%)] hover:text-[hsl(220_20%_8%)] transition-all duration-300"
            >
              {t("hero.viewDiveSites")}
            </Button>
          </div>

          {/* Luxury Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
            {[
              { number: "30+", label: t("hero.stats.diveSites") },
              { number: "15+", label: t("hero.stats.beaches") },
              { number: "50+", label: t("hero.stats.restaurants") },
              { number: "365", label: t("hero.stats.daysOfSun") }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="bg-[hsl(220_25%_12%_/_0.6)] backdrop-blur-xl rounded-2xl p-6 border border-[hsl(220_25%_20%)] hover:border-[hsl(180_70%_45%)] hover:shadow-[0_0_30px_hsl(180_70%_45%_/_0.2)] transition-all duration-300 group"
              >
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-[hsl(180_70%_45%)] to-[hsl(45_85%_55%)] bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-[hsl(180_30%_98%_/_0.7)] text-sm uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Luxury Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center gap-2 text-[hsl(180_30%_98%_/_0.6)] hover:text-[hsl(180_70%_45%)] transition-colors group"
          aria-label="Scroll down"
        >
          <div className="w-6 h-10 rounded-full border-2 border-[hsl(180_70%_45%_/_0.5)] group-hover:border-[hsl(180_70%_45%)] flex items-start justify-center p-2 transition-colors">
            <div className="w-1.5 h-1.5 bg-[hsl(180_70%_45%)] rounded-full"></div>
          </div>
          <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
