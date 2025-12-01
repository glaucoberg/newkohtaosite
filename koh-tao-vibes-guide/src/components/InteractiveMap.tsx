import { useState, useMemo, useCallback } from "react";
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from "@react-google-maps/api";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { MapPin, ExternalLink } from "lucide-react";

interface Destination {
  id: string;
  nameKey: string;
  typeKey: string;
  lat: number;
  lng: number;
}

interface InteractiveMapProps {
  destinations: Destination[];
  onMarkerClick?: (destinationId: string) => void;
}

// Google Maps dark theme styles - Lighter version for better visibility
const darkMapStyles: google.maps.MapTypeStyle[] = [
  { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#1a1a1a" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#e0e0e0" }] },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }],
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [{ color: "#2c3e50" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#34495e" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#95a5a6" }],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#2c3e50" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#bdc3c7" }],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [{ color: "#34495e" }],
  },
  {
    featureType: "administrative",
    elementType: "labels.text.fill",
    stylers: [{ color: "#95a5a6" }],
  },
];

const InteractiveMap = ({ destinations, onMarkerClick }: InteractiveMapProps) => {
  const { t } = useLanguage();
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  // Use the provided Google Maps API key
  const GOOGLE_MAPS_API_KEY = "AIzaSyAv0mYYsjCOMy5DOFnAWB8u0vxb2LkC2m8";

  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  // Koh Tao center coordinates
  const center = useMemo(() => ({ lat: 10.0956, lng: 99.8404 }), []);
  
  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: false,
      clickableIcons: true,
      scrollwheel: true,
      // Remove dark styles - use default Google Maps appearance
      styles: undefined,
      backgroundColor: "#ffffff",
      zoomControl: true,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: true,
      zoom: 12,
    }),
    []
  );

  // Handle destination click - pan to destination and show info window
  const handleDestinationClick = useCallback((destination: Destination) => {
    setSelectedDestination(destination);
    
    // Pan map to selected destination
    if (map) {
      map.panTo({ lat: destination.lat, lng: destination.lng });
      map.setZoom(15);
    }
    
    if (onMarkerClick) {
      onMarkerClick(destination.id);
    }
  }, [map, onMarkerClick]);

  const handleMarkerClick = useCallback((destination: Destination) => {
    handleDestinationClick(destination);
  }, [handleDestinationClick]);

  const openInGoogleMaps = (destination: Destination) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${destination.lat},${destination.lng}`;
    window.open(url, "_blank");
  };

  // Create custom marker icon
  const createMarkerIcon = (isBeach: boolean) => {
    const color = isBeach ? "#2dd4bf" : "#fb923c"; // teal-400 or orange-400
    return {
      path: google.maps.SymbolPath.CIRCLE,
      fillColor: color,
      fillOpacity: 1,
      strokeColor: "#0e1626",
      strokeWeight: 3,
      scale: 12,
    };
  };

  if (loadError) {
    return (
      <div className="w-full h-[600px] rounded-2xl overflow-hidden border border-[hsl(220_25%_20%)] shadow-[0_20px_60px_hsl(220_20%_8%_/_0.5)] bg-[hsl(220_25%_12%)] flex items-center justify-center">
        <div className="text-center">
          <div className="text-[hsl(180_30%_98%)] mb-2">Error loading map</div>
          <div className="text-sm text-[hsl(180_30%_98%_/_0.6)]">{loadError.message}</div>
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="w-full h-[600px] rounded-2xl overflow-hidden border border-[hsl(220_25%_20%)] shadow-[0_20px_60px_hsl(220_20%_8%_/_0.5)] bg-[hsl(220_25%_12%)] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[hsl(180_70%_45%)] mx-auto mb-4"></div>
          <div className="text-[hsl(180_30%_98%_/_0.6)]">Loading map...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[600px] rounded-2xl overflow-hidden border border-[hsl(220_25%_20%)] shadow-[0_20px_60px_hsl(220_20%_8%_/_0.5)] relative">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={center}
        options={mapOptions}
        onLoad={(mapInstance) => setMap(mapInstance)}
      >
        {destinations.map((destination) => {
          const isBeach = destination.typeKey === "destinations.type.beach";
          
          return (
            <Marker
              key={destination.id}
              position={{ lat: destination.lat, lng: destination.lng }}
              icon={createMarkerIcon(isBeach)}
              onClick={() => handleMarkerClick(destination)}
              animation={google.maps.Animation.DROP}
            />
          );
        })}

        {selectedDestination && (
          <InfoWindow
            position={{
              lat: selectedDestination.lat,
              lng: selectedDestination.lng,
            }}
            onCloseClick={() => setSelectedDestination(null)}
          >
            <div className="p-2 min-w-[200px]">
              <h3 className="font-bold text-[hsl(220_20%_8%)] mb-2 text-lg">
                {t(selectedDestination.nameKey)}
              </h3>
              <p className="text-sm text-[hsl(220_20%_8%_/_0.7)] mb-3">
                {t(selectedDestination.typeKey)}
              </p>
              <div className="flex gap-2">
                <Button
                  onClick={() => {
                    if (onMarkerClick) {
                      onMarkerClick(selectedDestination.id);
                    }
                    setSelectedDestination(null);
                  }}
                  className="flex-1 bg-gradient-to-r from-[hsl(180_70%_45%)] to-[hsl(45_85%_55%)] text-[hsl(220_20%_8%)] hover:shadow-lg transition-all text-sm py-1.5"
                >
                  {t("destinations.viewDetails")}
                </Button>
                <Button
                  onClick={() => {
                    openInGoogleMaps(selectedDestination);
                    setSelectedDestination(null);
                  }}
                  variant="outline"
                  className="flex-1 text-sm py-1.5"
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>

      {/* Destination List Overlay */}
      <div className="absolute top-4 right-4 bg-[hsl(220_25%_12%)] backdrop-blur-xl rounded-xl p-4 border border-[hsl(220_25%_20%)] shadow-[0_20px_60px_hsl(220_20%_8%_/_0.5)] max-w-xs max-h-[500px] overflow-y-auto z-10">
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="h-5 w-5 text-[hsl(180_70%_45%)]" />
          <h3 className="font-bold text-[hsl(180_30%_98%)] text-lg">
            {t("destinations.title")}
          </h3>
        </div>
        <div className="space-y-2">
          {destinations.map((destination) => {
            const isBeach = destination.typeKey === "destinations.type.beach";
            const isSelected = selectedDestination?.id === destination.id;
            
            return (
              <button
                key={destination.id}
                onClick={() => handleDestinationClick(destination)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                  isSelected
                    ? "bg-gradient-to-r from-[hsl(180_70%_45%)] to-[hsl(45_85%_55%)] text-[hsl(220_20%_8%)]"
                    : "bg-[hsl(220_25%_15%)] hover:bg-[hsl(220_25%_20%)] text-[hsl(180_30%_98%)]"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          isBeach
                            ? "bg-[hsl(180_70%_45%)]"
                            : "bg-[hsl(15_75%_60%)]"
                        }`}
                      />
                      <div className="font-semibold text-sm">
                        {t(destination.nameKey)}
                      </div>
                    </div>
                    <div
                      className={`text-xs ${
                        isSelected
                          ? "text-[hsl(220_20%_8%_/_0.7)]"
                          : "text-[hsl(180_30%_98%_/_0.6)]"
                      }`}
                    >
                      {t(destination.typeKey)}
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openInGoogleMaps(destination);
                    }}
                    className={`p-1.5 rounded-lg transition-colors ${
                      isSelected
                        ? "hover:bg-[hsl(220_20%_8%_/_0.2)]"
                        : "hover:bg-[hsl(220_25%_20%)]"
                    }`}
                    title="Open in Google Maps"
                  >
                    <ExternalLink
                      className={`h-4 w-4 ${
                        isSelected
                          ? "text-[hsl(220_20%_8%)]"
                          : "text-[hsl(180_30%_98%_/_0.6)]"
                      }`}
                    />
                  </button>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
