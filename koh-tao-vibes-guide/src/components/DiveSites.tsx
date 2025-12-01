import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Waves, Fish, Anchor, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import divingImage from "@/assets/diving-scene.jpg";

const DiveSites = () => {
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleBookDive = (siteName: string) => {
    toast({
      title: "Booking Dive Trip",
      description: `Opening booking for ${siteName}...`,
    });
    // In real app, would navigate to booking page
  };

  const handleViewDetails = (siteName: string) => {
    toast({
      title: siteName,
      description: "Opening detailed information...",
    });
    // In real app, would open detail modal or navigate
  };

  const handleExploreAll = () => {
    toast({
      title: t("diveSites.exploreAll"),
      description: t("toast.loadingBusinesses"), // Reusing toast message
    });
    // Could scroll to a full list or navigate to dedicated page
  };

  const diveSites = [
    {
      name: "Chumphon Pinnacle",
      difficulty: "Advanced",
      depth: "14-36m",
      highlights: "Whale sharks, barracudas, giant groupers",
      description: "One of Koh Tao's most famous dive sites, known for its rich marine life and strong currents.",
    },
    {
      name: "Sail Rock",
      difficulty: "Advanced",
      depth: "15-40m",
      highlights: "Chimney swim-through, pelagic fish",
      description: "A spectacular pinnacle with a unique vertical chimney and incredible underwater topography.",
    },
    {
      name: "Japanese Gardens",
      difficulty: "Beginner",
      depth: "8-14m",
      highlights: "Colorful coral gardens, tropical fish",
      description: "Perfect for beginners and training dives with beautiful coral formations and calm conditions.",
    },
    {
      name: "Shark Island",
      difficulty: "Intermediate",
      depth: "10-25m",
      highlights: "Blacktip reef sharks, turtles",
      description: "An exciting dive site with good chances to spot sharks and large marine creatures.",
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "beginner":
        return "bg-gradient-to-r from-[hsl(45_85%_55%)] to-[hsl(45_80%_50%)] text-[hsl(220_20%_8%)]";
      case "intermediate":
        return "bg-gradient-to-r from-[hsl(180_70%_45%)] to-[hsl(180_65%_40%)] text-[hsl(220_20%_8%)]";
      case "advanced":
        return "bg-gradient-to-r from-[hsl(15_75%_60%)] to-[hsl(15_70%_55%)] text-[hsl(180_30%_98%)]";
      default:
        return "bg-[hsl(220_25%_15%)] text-[hsl(180_30%_98%_/_0.7)]";
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "beginner":
        return t("diveSites.difficulty.beginner");
      case "intermediate":
        return t("diveSites.difficulty.intermediate");
      case "advanced":
        return t("diveSites.difficulty.advanced");
      default:
        return difficulty;
    }
  };

  return (
    <section className="py-24 bg-[hsl(220_20%_8%)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, hsl(180_70%_45%) 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-[hsl(220_25%_12%)] border border-[hsl(220_25%_20%)]">
              <Waves className="h-8 w-8 text-[hsl(180_70%_45%)]" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-[hsl(180_30%_98%)] tracking-tight">
              {t("diveSites.title")}
            </h2>
          </div>
          <p className="text-xl text-[hsl(180_30%_98%_/_0.7)] max-w-3xl mx-auto leading-relaxed">
            {t("diveSites.description")}
          </p>
        </div>

        {/* Featured Dive Site Hero */}
        <div className="mb-16 relative rounded-3xl overflow-hidden group cursor-pointer shadow-[0_20px_60px_hsl(220_20%_8%_/_0.5)]">
          <div className="absolute inset-0">
            <img 
              src={divingImage} 
              alt="Chumphon Pinnacle Dive Site" 
              className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-700"
              loading="eager"
              onError={(e) => {
                console.error(`Failed to load diving image: ${divingImage}`);
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_20%_8%_/_0.95)] via-[hsl(220_20%_8%_/_0.7)] to-transparent"></div>
          </div>
          <div className="relative p-8 md:p-12 flex items-end min-h-[500px]">
            <div className="max-w-3xl">
              <Badge className="mb-6 bg-gradient-to-r from-[hsl(180_70%_45%)] to-[hsl(45_85%_55%)] text-[hsl(220_20%_8%)] border-0 px-4 py-2 text-sm font-semibold">
                {t("diveSites.featured")}
              </Badge>
              <h3 className="text-4xl md:text-5xl font-bold text-[hsl(180_30%_98%)] mb-4">
                {t("diveSites.chumphonPinnacle")}
              </h3>
              <p className="text-lg md:text-xl text-[hsl(180_30%_98%_/_0.8)] mb-8 leading-relaxed">
                {t("diveSites.chumphonDescription")}
              </p>
              <Button 
                onClick={() => handleBookDive(t("diveSites.chumphonPinnacle"))}
                className="bg-gradient-to-r from-[hsl(180_70%_45%)] to-[hsl(45_85%_55%)] text-[hsl(220_20%_8%)] hover:shadow-[0_0_40px_hsl(180_70%_45%_/_0.5)] transition-all duration-300 font-semibold px-8 py-6 rounded-xl text-lg"
              >
                {t("diveSites.bookDiveTrip")}
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Dive Sites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {diveSites.map((site, index) => (
            <Card 
              key={index} 
              className="group bg-[hsl(220_25%_12%)] border border-[hsl(220_25%_20%)] hover:border-[hsl(180_70%_45%)] hover:shadow-[0_0_30px_hsl(180_70%_45%_/_0.2)] transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2 rounded-lg bg-[hsl(220_25%_15%)] group-hover:bg-[hsl(180_70%_45%_/_0.2)] transition-colors">
                    <Anchor className="h-5 w-5 text-[hsl(180_70%_45%)]" />
                  </div>
                  <Badge className={`${getDifficultyColor(site.difficulty)} border-0 font-semibold text-xs`}>
                    {getDifficultyLabel(site.difficulty)}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-[hsl(180_30%_98%)] group-hover:text-[hsl(180_70%_45%)] transition-colors">
                  {site.name}
                </CardTitle>
                <CardDescription className="flex items-center gap-2 text-sm text-[hsl(180_30%_98%_/_0.6)] mt-2">
                  <Fish className="h-4 w-4" />
                  {t("diveSites.depth")}: {site.depth}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[hsl(180_30%_98%_/_0.7)] mb-4 leading-relaxed">
                  {site.description}
                </p>
                <div className="bg-[hsl(220_25%_15%)] rounded-xl p-4 mb-4 border border-[hsl(220_25%_20%)]">
                  <p className="text-xs font-semibold text-[hsl(180_70%_45%)] mb-2 uppercase tracking-wide">{t("diveSites.marineLife")}:</p>
                  <p className="text-xs text-[hsl(180_30%_98%_/_0.8)] leading-relaxed">{site.highlights}</p>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-2 border-[hsl(220_25%_20%)] text-[hsl(180_30%_98%)] hover:bg-[hsl(180_70%_45%)] hover:text-[hsl(220_20%_8%)] hover:border-[hsl(180_70%_45%)] transition-all duration-300" 
                  onClick={() => handleViewDetails(site.name)}
                >
                  {t("diveSites.viewDetails")}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            onClick={handleExploreAll}
            className="bg-gradient-to-r from-[hsl(180_70%_45%)] to-[hsl(45_85%_55%)] text-[hsl(220_20%_8%)] hover:shadow-[0_0_40px_hsl(180_70%_45%_/_0.4)] transition-all duration-300 font-semibold px-10 py-6 rounded-xl text-lg"
          >
            {t("diveSites.exploreAll")}
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DiveSites;
