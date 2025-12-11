import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Sunset, Palmtree } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import beachImage from "@/assets/beach-paradise.jpg";
import sunsetImage from "@/assets/sunset-viewpoint.jpg";

const Destinations = () => {
  const { toast } = useToast();

  const handleGetDirections = (destinationName: string) => {
    toast({
      title: "Getting Directions",
      description: `Opening map to ${destinationName}...`,
    });
  };

  const handleOpenMap = () => {
    toast({
      title: "Interactive Map",
      description: "Loading interactive map of Koh Tao...",
    });
  };
  const destinations = [
    {
      name: "Sairee Beach",
      type: "Beach",
      icon: Palmtree,
      image: beachImage,
      description: "The longest beach on Koh Tao, perfect for swimming and sunset views",
      activities: ["Swimming", "Snorkeling", "Beach Bars"],
    },
    {
      name: "John-Suwan Viewpoint",
      type: "Viewpoint",
      icon: Sunset,
      image: sunsetImage,
      description: "Breathtaking 360° panoramic views of the island and surrounding sea",
      activities: ["Photography", "Sunset Watching", "Hiking"],
    },
    {
      name: "Shark Bay",
      type: "Beach",
      icon: Palmtree,
      image: beachImage,
      description: "Secluded bay known for blacktip reef sharks and excellent snorkeling",
      activities: ["Snorkeling", "Swimming", "Wildlife Watching"],
    },
    {
      name: "Mango Viewpoint",
      type: "Viewpoint",
      icon: Sunset,
      image: sunsetImage,
      description: "Popular viewpoint with stunning vistas and a relaxed atmosphere",
      activities: ["Relaxation", "Photography", "Sunrise Views"],
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="h-8 w-8 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Must-Visit Destinations</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From pristine beaches to breathtaking viewpoints, discover Koh Tao's most stunning locations
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {destinations.map((destination, index) => {
            const Icon = destination.icon;
            return (
              <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 hover:border-accent">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs font-semibold text-white/80 uppercase tracking-wide">
                      {destination.type}
                    </span>
                    <h3 className="text-2xl font-bold text-white">{destination.name}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">
                    {destination.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {destination.activities.map((activity, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-muted px-3 py-1 rounded-full text-foreground font-medium"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent" onClick={() => handleGetDirections(destination.name)}>
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Interactive Map CTA */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
          <MapPin className="h-16 w-16 mx-auto mb-4" />
          <h3 className="text-3xl font-bold mb-4">Explore with Interactive Map</h3>
          <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
            Navigate Koh Tao with our comprehensive map featuring all dive sites, beaches, restaurants, and activities
          </p>
          <Button variant="secondary" size="lg" className="text-lg" onClick={handleOpenMap}>
            Open Interactive Map
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
