import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Sunset, Palmtree, Navigation2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import destinationsData from "@/data/destinations.json";
import beachParadiseImage from "@/assets/beach-paradise.jpg";
import sunsetViewpointImage from "@/assets/sunset-viewpoint.jpg";

// Icon mapping - add more icons here as needed
const iconMap: { [key: string]: typeof Palmtree } = {
  beach: Palmtree,
  viewpoint: Sunset,
};

const Destinations = () => {
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleGetDirections = (destinationName: string) => {
    toast({
      title: t("toast.gettingDirections"),
      description: `${t("toast.openingMap")} ${destinationName}...`,
    });
  };

  const handleOpenMap = () => {
    toast({
      title: t("toast.interactiveMap"),
      description: t("toast.loadingMap"),
    });
  };

  // Get icon based on type
  const getIcon = (typeKey: string) => {
    if (typeKey === "destinations.type.beach") return Palmtree;
    if (typeKey === "destinations.type.viewpoint") return Sunset;
    return Palmtree; // default
  };

  // Map image paths to imported images
  const imageMap: { [key: string]: string } = {
    "/assets/beach-paradise.jpg": beachParadiseImage,
    "/assets/sunset-viewpoint.jpg": sunsetViewpointImage,
    "beach-paradise.jpg": beachParadiseImage,
    "sunset-viewpoint.jpg": sunsetViewpointImage,
  };

  const getImageUrl = (imagePath: string) => {
    // Check if we have an imported version
    if (imageMap[imagePath]) {
      return imageMap[imagePath];
    }
    // Fallback to public path
    return imagePath.startsWith('/') ? imagePath : `/assets/${imagePath}`;
  };

  const destinations = destinationsData.map(dest => ({
    ...dest,
    icon: getIcon(dest.typeKey),
    image: getImageUrl(dest.image),
    lat: dest.lat || 10.0956,
    lng: dest.lng || 99.8404,
  }));

  return (
    <section className="py-24 bg-[hsl(220_25%_10%)] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-[hsl(220_25%_12%)] border border-[hsl(220_25%_20%)]">
              <MapPin className="h-8 w-8 text-[hsl(15_75%_60%)]" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-[hsl(180_30%_98%)] tracking-tight">
              {t("destinations.title")}
            </h2>
          </div>
          <p className="text-xl text-[hsl(180_30%_98%_/_0.7)] max-w-3xl mx-auto leading-relaxed">
            {t("destinations.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {destinations.map((destination, index) => {
            const Icon = destination.icon;
            const name = t(destination.nameKey);
            return (
              <Card 
                key={index} 
                className="overflow-hidden group bg-[hsl(220_25%_12%)] border border-[hsl(220_25%_20%)] hover:border-[hsl(180_70%_45%)] hover:shadow-[0_0_40px_hsl(180_70%_45%_/_0.2)] transition-all duration-500"
              >
                <div className="relative h-72 overflow-hidden bg-[hsl(220_25%_15%)]">
                  <img 
                    src={destination.image} 
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    onError={(e) => {
                      console.error(`Failed to load image: ${destination.image}`);
                      e.currentTarget.style.opacity = '0';
                    }}
                    onLoad={() => {
                      console.log(`Successfully loaded image: ${destination.image}`);
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_20%_8%_/_0.9)] via-[hsl(220_20%_8%_/_0.5)] to-transparent pointer-events-none"></div>
                  <div className="absolute top-6 right-6 z-20">
                    <div className="bg-[hsl(220_25%_12%_/_0.9)] backdrop-blur-xl rounded-full p-3 border border-[hsl(220_25%_20%)]">
                      <Icon className="h-6 w-6 text-[hsl(15_75%_60%)]" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 z-20">
                    <span className="text-xs font-semibold text-[hsl(180_70%_45%)] uppercase tracking-wider mb-2 block">
                      {t(destination.typeKey)}
                    </span>
                    <h3 className="text-3xl font-bold text-[hsl(180_30%_98%)]">{name}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-[hsl(180_30%_98%_/_0.8)] mb-5 leading-relaxed">
                    {t(destination.descriptionKey)}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {destination.activities.map((activityKey, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-[hsl(220_25%_15%)] border border-[hsl(220_25%_20%)] px-4 py-2 rounded-full text-[hsl(180_30%_98%_/_0.8)] font-medium"
                      >
                        {t(activityKey)}
                      </span>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-[hsl(220_25%_20%)] text-[hsl(180_30%_98%)] hover:bg-[hsl(15_75%_60%)] hover:text-[hsl(220_20%_8%)] hover:border-[hsl(15_75%_60%)] transition-all duration-300"
                    onClick={() => handleGetDirections(name)}
                  >
                    <Navigation2 className="mr-2 h-4 w-4" />
                    {t("destinations.getDirections")}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
