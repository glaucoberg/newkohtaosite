import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Waves, Fish, Anchor } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import divingImage from "@/assets/diving-scene.jpg";

const DiveSites = () => {
  const { toast } = useToast();

  const handleBookDive = (siteName?: string) => {
    toast({
      title: "Book a Dive",
      description: siteName ? `Booking for ${siteName}` : "Dive booking coming soon!",
    });
  };

  const handleViewDetails = (siteName: string) => {
    toast({
      title: siteName,
      description: "Viewing dive site details...",
    });
  };

  const handleExploreAll = () => {
    toast({
      title: "All Dive Sites",
      description: "Loading complete dive site catalog...",
    });
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
        return "bg-secondary text-secondary-foreground";
      case "intermediate":
        return "bg-accent text-accent-foreground";
      case "advanced":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Waves className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">World-Class Dive Sites</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore over 30 incredible dive sites around Koh Tao, from beginner-friendly reefs to advanced pinnacles
          </p>
        </div>

        {/* Featured Dive Site Hero */}
        <div className="mb-12 relative rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src={divingImage} 
            alt="Diving in Koh Tao" 
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
            <div className="p-8 text-white">
              <Badge className="mb-4 bg-secondary">Featured Dive Site</Badge>
              <h3 className="text-3xl font-bold mb-2">Southwest Pinnacle</h3>
              <p className="text-lg mb-4">Experience vibrant coral formations and encounter schools of tropical fish in crystal-clear waters</p>
              <Button variant="hero" onClick={() => handleBookDive("Southwest Pinnacle")}>Book a Dive Trip</Button>
            </div>
          </div>
        </div>

        {/* Dive Sites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {diveSites.map((site, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-secondary">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Anchor className="h-6 w-6 text-secondary" />
                  <Badge className={getDifficultyColor(site.difficulty)}>
                    {site.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {site.name}
                </CardTitle>
                <CardDescription className="flex items-center gap-2 text-sm">
                  <Fish className="h-4 w-4" />
                  Depth: {site.depth}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  {site.description}
                </p>
                <div className="bg-muted/50 rounded-lg p-3 mb-4">
                  <p className="text-xs font-semibold text-foreground mb-1">Marine Life:</p>
                  <p className="text-xs text-muted-foreground">{site.highlights}</p>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground" onClick={() => handleViewDetails(site.name)}>
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" className="text-lg" onClick={handleExploreAll}>
            Explore All Dive Sites
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DiveSites;
