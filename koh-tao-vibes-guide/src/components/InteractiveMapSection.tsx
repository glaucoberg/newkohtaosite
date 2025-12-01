import { MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import destinationsData from "@/data/destinations.json";
import InteractiveMap from "./InteractiveMap";

const InteractiveMapSection = () => {
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleGetDirections = (destinationName: string) => {
    toast({
      title: t("toast.gettingDirections"),
      description: `${t("toast.openingMap")} ${destinationName}...`,
    });
  };

  const destinations = destinationsData.map(dest => ({
    ...dest,
    lat: dest.lat || 10.0956,
    lng: dest.lng || 99.8404,
  }));

  return (
    <section className="py-24 bg-[hsl(220_25%_10%)] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-[hsl(220_25%_12%)] to-[hsl(220_25%_15%)] rounded-3xl p-8 md:p-12 border border-[hsl(220_25%_20%)] shadow-[0_20px_60px_hsl(220_20%_8%_/_0.5)]">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[hsl(180_70%_45%)] to-[hsl(45_85%_55%)] mb-6 shadow-[0_0_30px_hsl(180_70%_45%_/_0.3)]">
              <MapPin className="h-10 w-10 text-[hsl(220_20%_8%)]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(180_30%_98%)] mb-4">
              {t("destinations.mapTitle")}
            </h2>
            <p className="text-lg mb-8 text-[hsl(180_30%_98%_/_0.7)] max-w-2xl mx-auto leading-relaxed">
              {t("destinations.mapDescription")}
            </p>
          </div>
          <InteractiveMap
            destinations={destinations.map(dest => ({
              id: dest.id,
              nameKey: dest.nameKey,
              typeKey: dest.typeKey,
              lat: dest.lat || 10.0956,
              lng: dest.lng || 99.8404,
            }))}
            onMarkerClick={(id) => {
              const destination = destinations.find(d => d.id === id);
              if (destination) {
                handleGetDirections(t(destination.nameKey));
              }
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default InteractiveMapSection;

