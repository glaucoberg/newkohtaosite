import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Waves, Fish, Anchor, ExternalLink, MapPin, Clock, Thermometer, Eye, Calendar, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import divingImage from "@/assets/diving-scene.jpg";
import sailRockImage from "@/assets/sail-rock.jpg";
import southwestPinnaclesImage from "@/assets/southwest-pinnacles.jpg";
import sharkIslandImage from "@/assets/shark-island.jpg";
import whiteRockImage from "@/assets/white-rock.jpg";
import twinPeaksImage from "@/assets/twin-peaks.jpg";
import sattakutWreckImage from "@/assets/sattakut-wreck.jpg";
import greenRockImage from "@/assets/green-rock.jpg";
import nangYuanPinnacleImage from "@/assets/nang-yuan-pinnacle.jpg";
import hinWongPinnacleImage from "@/assets/hin-wong-pinnacle.jpg";
import aowLeukImage from "@/assets/aow-leuk.jpg";
import mangoBayImage from "@/assets/mango-bay.jpg";
import japaneseGardensImage from "@/assets/japanese-gardens.jpg";

// Image mapping for dive sites
const diveSiteImageMap: { [key: string]: string } = {
  "Sail Rock": sailRockImage,
  "Southwest Pinnacles": southwestPinnaclesImage,
  "Shark Island": sharkIslandImage,
  "White Rock": whiteRockImage,
  "Twin Peaks": twinPeaksImage,
  "Sattakut Wreck": sattakutWreckImage,
  "Green Rock": greenRockImage,
  "Nang Yuan Pinnacle": nangYuanPinnacleImage,
  "Hin Wong Pinnacle": hinWongPinnacleImage,
  "Aow Leuk": aowLeukImage,
  "Mango Bay": mangoBayImage,
  "Japanese Gardens": japaneseGardensImage,
};

const DiveSites = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [selectedSite, setSelectedSite] = useState<typeof diveSites[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleBookDive = (siteName: string) => {
    toast({
      title: "Booking Dive Trip",
      description: `Opening booking for ${siteName}...`,
    });
    // In real app, would navigate to booking page
  };

  const handleViewDetails = (siteName: string) => {
    const site = diveSites.find(s => s.name === siteName);
    if (site) {
      setSelectedSite(site);
      setIsDialogOpen(true);
    }
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
      name: "Sail Rock",
      difficulty: "Advanced",
      depth: "18-40m",
      highlights: "Chimney swim-through, giant green moray eel, whale sharks, bull sharks",
      description: "Widely regarded as the most beautiful dive site in the Gulf of Thailand. Enter through the magnificent chimney at 4m, exit at 18m. Keep your eyes peeled for giant green moray eels and clustering coral-banded shrimp.",
      location: "Between Koh Tao and Koh Phangan",
      bestTime: "Year-round, best visibility March-September",
      waterTemp: "28-30°C",
      visibility: "15-30 meters",
      diveDuration: "45-60 minutes",
      maxDepth: "40m",
      current: "Moderate to strong",
      specialFeatures: "Unique vertical chimney swim-through, pelagic encounters, large schools of fish",
      tips: "Best entered through the chimney at 4m depth. Watch for strong currents. Advanced divers only due to depth and current conditions.",
    },
    {
      name: "Southwest Pinnacles",
      difficulty: "Intermediate",
      depth: "17-28m",
      highlights: "Snapper, trevally, barracuda, sea anemones, gorgonians",
      description: "A row of pinnacles offering wall dives and great schooling marine life. The shallower points are carpeted with gardens of sea anemones, and the deeper gullies are filled with healthy gorgonians and whip corals.",
      location: "About 7 km Southwest of Koh Tao",
      bestTime: "Year-round, calmest conditions November-April",
      waterTemp: "27-30°C",
      visibility: "10-25 meters",
      diveDuration: "50-60 minutes",
      maxDepth: "28m",
      current: "Light to moderate",
      specialFeatures: "Multiple pinnacles, wall diving, anemone gardens, schooling fish",
      tips: "Great for intermediate divers. Explore the different pinnacles for varied marine life. Watch for barracuda schools.",
    },
    {
      name: "Shark Island",
      difficulty: "Beginner",
      depth: "15-28m",
      highlights: "Groupers, turtles, raccoon butterflyfish, nudibranchs",
      description: "Named not for carnivorous marine life but for the island's resemblance to a shark fin. The occasional currents bring nutrient-rich waters, encouraging abundant marine life. Nudibranch nurseries line the eastern coast.",
      location: "1 km off the southern tip of Koh Tao",
      bestTime: "Year-round, excellent for beginners",
      waterTemp: "28-30°C",
      visibility: "10-20 meters",
      diveDuration: "45-55 minutes",
      maxDepth: "28m",
      current: "Light, occasional moderate",
      specialFeatures: "Nudibranch nurseries, turtle sightings, beginner-friendly",
      tips: "Perfect for Open Water certification dives. Explore the eastern coast for nudibranchs. Great macro photography opportunities.",
    },
    {
      name: "White Rock",
      difficulty: "Intermediate",
      depth: "16-28m",
      highlights: "Titan triggerfish, honeycomb groupers, Christmas tree worms, sea anemones",
      description: "One of the most popular dive sites for both day and night dives. Home to titan triggerfish, which occasionally act quite aggressively. Features elevated shelves with honeycomb groupers and colorful Christmas tree worms.",
      location: "Western side of Koh Tao",
      bestTime: "Year-round, popular for night dives",
      waterTemp: "28-30°C",
      visibility: "10-25 meters",
      diveDuration: "50-60 minutes",
      maxDepth: "28m",
      current: "Light to moderate",
      specialFeatures: "Night diving, triggerfish territory, colorful corals, photography hotspot",
      tips: "Be cautious during titan triggerfish nesting season (April-June). Excellent for underwater photography. Popular night dive site.",
    },
    {
      name: "Twin Peaks",
      difficulty: "Beginner",
      depth: "10-18m",
      highlights: "Black sea cucumbers, Neptune barrel sponges, Clarks anemone fish, Buoyancy World",
      description: "Three rock pinnacles with numerous black sea cucumbers, boulder corals and Neptune barrel sponges. Features Buoyancy World, an alternative dive site with artificial structures for training novice divers.",
      location: "Western Side of Koh Nang Yuan",
      bestTime: "Year-round, ideal for training",
      waterTemp: "28-30°C",
      visibility: "8-20 meters",
      diveDuration: "45-55 minutes",
      maxDepth: "18m",
      current: "Light",
      specialFeatures: "Buoyancy World training site, anemone fish families, beginner-friendly",
      tips: "Perfect for Open Water training. Visit Buoyancy World for skill practice. Great for spotting anemone fish families.",
    },
    {
      name: "Sattakut Wreck",
      difficulty: "Advanced",
      depth: "18-30m",
      highlights: "Fusiliers, juvenile yellowtail barracudas, snappers, wrasse, groupers",
      description: "US Navy ship from WWII's Battle of Iwo Jima. The wreck's keel sits at 27-30m depth, mast reaches 18m. Large schools of fusiliers and various snappers inhabit this historic wreck site.",
      location: "30 m from Hin Pee Wee",
      bestTime: "Year-round, best visibility March-September",
      waterTemp: "27-30°C",
      visibility: "15-30 meters",
      diveDuration: "40-50 minutes",
      maxDepth: "30m",
      current: "Moderate to strong",
      specialFeatures: "Historic WWII wreck, artificial reef, large fish schools, wreck penetration possible",
      tips: "Advanced Open Water certification required. Explore the wreck structure carefully. Large schools of fusiliers often surround the wreck.",
    },
    {
      name: "Green Rock",
      difficulty: "Intermediate",
      depth: "12-30m",
      highlights: "Yellow margin triggerfish, swim-throughs, archways, caverns, caves",
      description: "Spectacular dive site northwest of Koh Nang Yuan with adventurous swim-throughs through large archways, caverns, caves and crevices. Home to yellow margin triggerfish that may become territorial during spawning season.",
      location: "North-West of Koh Nang Yuan",
      bestTime: "Year-round, avoid spawning season for triggerfish",
      waterTemp: "28-30°C",
      visibility: "10-25 meters",
      diveDuration: "50-60 minutes",
      maxDepth: "30m",
      current: "Light to moderate",
      specialFeatures: "Multiple swim-throughs, cave systems, triggerfish territory, adventurous diving",
      tips: "Be cautious during triggerfish spawning season (April-June). Explore the various swim-throughs and caves. Intermediate divers should be comfortable with overhead environments.",
    },
    {
      name: "Nang Yuan Pinnacle",
      difficulty: "Beginner",
      depth: "12-20m",
      highlights: "Stingrays, turtles, scorpion fish, titan triggerfish",
      description: "Nicknamed 'Red Rock' - a pinnacle from 18m to surface shelters stingrays, turtles and scorpion fish in crevices formed through erosion. Features a narrow cavern at 12m depth requiring cavern diving training.",
      location: "North-East of Koh Nang Yuan",
      bestTime: "Year-round, good for beginners",
      waterTemp: "28-30°C",
      visibility: "10-20 meters",
      diveDuration: "45-55 minutes",
      maxDepth: "20m",
      current: "Light",
      specialFeatures: "Cavern at 12m, stingray sightings, turtle encounters, erosion formations",
      tips: "Cavern diving training required for the 12m cavern. Great for spotting stingrays and turtles. Beginner-friendly with interesting features.",
    },
    {
      name: "Hin Wong Pinnacle",
      difficulty: "Beginner",
      depth: "12-26m",
      highlights: "Hawksbill turtle, blue soft sponge corals, sea fans, sea whips, porcupine pufferfish",
      description: "Less explored east coast dive site offering different marine life. The resident hawksbill turtle may be found hidden under ledges along with porcupine pufferfish and angel fish. Features colorful sea fans and sea whips.",
      location: "East Coast of Koh Tao",
      bestTime: "Year-round, less crowded",
      waterTemp: "28-30°C",
      visibility: "10-20 meters",
      diveDuration: "50-60 minutes",
      maxDepth: "26m",
      current: "Light",
      specialFeatures: "Resident hawksbill turtle, colorful soft corals, less crowded, east coast variety",
      tips: "Look under ledges for the resident hawksbill turtle. Less visited than west coast sites. Great for spotting colorful soft corals.",
    },
    {
      name: "Aow Leuk",
      difficulty: "Beginner",
      depth: "6-12m",
      highlights: "Garden eels, scorpion fish, butterfly fish, sergeant majors, yellow-tail barracudas",
      description: "Sheltered bay with gorgeous views, home to much juvenile marine life. Sheltered from strong winds, this shallow dive site has a sandy bottom with scattered coral boulders housing various tropical fish.",
      location: "South-East of Koh Tao",
      bestTime: "Year-round, excellent for beginners",
      waterTemp: "28-30°C",
      visibility: "8-15 meters",
      diveDuration: "45-60 minutes",
      maxDepth: "12m",
      current: "Very light to none",
      specialFeatures: "Sheltered bay, shallow depth, juvenile fish, sandy bottom, perfect for beginners",
      tips: "Ideal for first-time divers and snorkelers. Watch for garden eels in the sandy areas. Great for macro photography of small fish.",
    },
    {
      name: "Mango Bay",
      difficulty: "Beginner",
      depth: "5-16m",
      highlights: "Small fish breeding ground, coral gardens, coral boulders",
      description: "A breeding ground for all small fish, Mango Bay has reefs on the east and west coastlines with coral boulders in between, providing a natural coral garden. Perfect for snorkelers and beginner divers.",
      location: "North of Koh Tao",
      bestTime: "Year-round, perfect for training",
      waterTemp: "28-30°C",
      visibility: "8-20 meters",
      diveDuration: "50-60 minutes",
      maxDepth: "16m",
      current: "Very light",
      specialFeatures: "Natural coral garden, fish breeding ground, shallow areas, snorkeling friendly",
      tips: "Perfect for Open Water training dives. Great transition from shallow to deeper areas. Excellent for snorkeling as well.",
    },
    {
      name: "Japanese Gardens",
      difficulty: "Beginner",
      depth: "6-16m",
      highlights: "Blue-ringed angelfish, moon wrasse, damsel fish, chromis fish, porcupine pufferfish, sea snake",
      description: "Separated by one of the world's only sandbars connecting three teardrops of land. Excellent for beginner divers and snorkeling. Home to many juvenile fish and occasionally the black and white banded sea snake.",
      location: "East of Koh Nang Yuan",
      bestTime: "Year-round, popular for beginners",
      waterTemp: "28-30°C",
      visibility: "8-20 meters",
      diveDuration: "50-60 minutes",
      maxDepth: "16m",
      current: "Very light",
      specialFeatures: "Unique sandbar, juvenile fish, sea snake sightings, beginner-friendly",
      tips: "One of the best beginner dive sites. Watch for the black and white banded sea snake (venomous but docile). Great for snorkeling too.",
    },
    {
      name: "Hanhak Sattru Wreck",
      difficulty: "Advanced",
      depth: "13-24m",
      highlights: "Artificial reef, coral development, diverse marine life",
      description: "Royal Thai Navy Fast Attack Craft decommissioned in 2018 and strategically placed in 2023 to create an artificial reef. The wreck's keel lies at 22-24m, mast reaches 13m. Helps restore the natural coral reef ecosystem.",
      location: "Mao Bay, Koh Tao",
    },
    {
      name: "Suphairin Wreck",
      difficulty: "Advanced",
      depth: "16-28m",
      highlights: "Artificial reef, coral development, diverse marine life",
      description: "Royal Thai Navy Fast Attack Craft, twin to Hanhak Sattru, placed near No Name Pinnacle west of Koh Nang Yuan. The keel lies at 24-28m, mast reaches 16m. Transformed into a dive site to minimize impact on fragile natural reefs.",
      location: "West of Koh Nang Yuan",
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

  // Get image for dive site - uses individual image if available, otherwise default
  const getDiveSiteImage = (siteName: string) => {
    return diveSiteImageMap[siteName] || divingImage;
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
        <div className="grid grid-cols-3 gap-8 mb-16">
          {diveSites.slice(0, 12).map((site, index) => (
            <Card 
              key={index} 
              className="overflow-hidden group bg-[hsl(220_25%_12%)] border border-[hsl(220_25%_20%)] hover:border-[hsl(180_70%_45%)] hover:shadow-[0_0_40px_hsl(180_70%_45%_/_0.2)] transition-all duration-500"
            >
              <div className="relative h-72 overflow-hidden bg-[hsl(220_25%_15%)]">
                <img 
                  src={getDiveSiteImage(site.name)} 
                  alt={site.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.opacity = '0';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_20%_8%_/_0.9)] via-[hsl(220_20%_8%_/_0.5)] to-transparent pointer-events-none"></div>
                <div className="absolute top-6 right-6 z-20">
                  <div className="bg-[hsl(220_25%_12%_/_0.9)] backdrop-blur-xl rounded-full p-3 border border-[hsl(220_25%_20%)]">
                    <Anchor className="h-6 w-6 text-[hsl(180_70%_45%)]" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 z-20">
                  <Badge className={`${getDifficultyColor(site.difficulty)} border-0 font-semibold text-xs mb-2`}>
                    {getDifficultyLabel(site.difficulty)}
                  </Badge>
                  <h3 className="text-3xl font-bold text-[hsl(180_30%_98%)]">{site.name}</h3>
                  <div className="flex items-center gap-2 mt-2 text-sm text-[hsl(180_30%_98%_/_0.8)]">
                    <Fish className="h-4 w-4" />
                    {t("diveSites.depth")}: {site.depth}
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-[hsl(180_30%_98%_/_0.8)] mb-5 leading-relaxed">
                  {site.description}
                </p>
                <div className="bg-[hsl(220_25%_15%)] rounded-xl p-4 mb-6 border border-[hsl(220_25%_20%)]">
                  <p className="text-xs font-semibold text-[hsl(180_70%_45%)] mb-2 uppercase tracking-wide">{t("diveSites.marineLife")}:</p>
                  <p className="text-sm text-[hsl(180_30%_98%_/_0.8)] leading-relaxed">{site.highlights}</p>
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

      {/* Dive Site Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-[hsl(220_25%_12%)] border border-[hsl(220_25%_20%)] text-[hsl(180_30%_98%)]">
          {selectedSite && (
            <>
              <DialogHeader>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <DialogTitle className="text-3xl font-bold text-[hsl(180_30%_98%)] mb-2">
                      {selectedSite.name}
                    </DialogTitle>
                    <DialogDescription className="text-[hsl(180_30%_98%_/_0.7)] text-base">
                      {selectedSite.description}
                    </DialogDescription>
                  </div>
                  <Badge className={`${getDifficultyColor(selectedSite.difficulty)} border-0 font-semibold text-sm px-4 py-2`}>
                    {getDifficultyLabel(selectedSite.difficulty)}
                  </Badge>
                </div>
              </DialogHeader>

              <div className="space-y-6">
                {/* Image */}
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <img 
                    src={getDiveSiteImage(selectedSite.name)} 
                    alt={selectedSite.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_20%_8%_/_0.8)] to-transparent"></div>
                </div>

                {/* Key Information Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-[hsl(220_25%_15%)] rounded-xl p-4 border border-[hsl(220_25%_20%)]">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-5 w-5 text-[hsl(180_70%_45%)]" />
                      <span className="text-xs font-semibold text-[hsl(180_70%_45%)] uppercase">Location</span>
                    </div>
                    <p className="text-sm text-[hsl(180_30%_98%_/_0.9)]">{selectedSite.location}</p>
                  </div>

                  <div className="bg-[hsl(220_25%_15%)] rounded-xl p-4 border border-[hsl(220_25%_20%)]">
                    <div className="flex items-center gap-2 mb-2">
                      <Fish className="h-5 w-5 text-[hsl(180_70%_45%)]" />
                      <span className="text-xs font-semibold text-[hsl(180_70%_45%)] uppercase">Depth</span>
                    </div>
                    <p className="text-sm text-[hsl(180_30%_98%_/_0.9)]">{selectedSite.depth}</p>
                    <p className="text-xs text-[hsl(180_30%_98%_/_0.6)] mt-1">Max: {selectedSite.maxDepth || selectedSite.depth.split('-')[1] || selectedSite.depth}</p>
                  </div>

                  <div className="bg-[hsl(220_25%_15%)] rounded-xl p-4 border border-[hsl(220_25%_20%)]">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-5 w-5 text-[hsl(180_70%_45%)]" />
                      <span className="text-xs font-semibold text-[hsl(180_70%_45%)] uppercase">Duration</span>
                    </div>
                    <p className="text-sm text-[hsl(180_30%_98%_/_0.9)]">{selectedSite.diveDuration}</p>
                  </div>

                  <div className="bg-[hsl(220_25%_15%)] rounded-xl p-4 border border-[hsl(220_25%_20%)]">
                    <div className="flex items-center gap-2 mb-2">
                      <Thermometer className="h-5 w-5 text-[hsl(180_70%_45%)]" />
                      <span className="text-xs font-semibold text-[hsl(180_70%_45%)] uppercase">Water Temp</span>
                    </div>
                    <p className="text-sm text-[hsl(180_30%_98%_/_0.9)]">{selectedSite.waterTemp}</p>
                  </div>

                  <div className="bg-[hsl(220_25%_15%)] rounded-xl p-4 border border-[hsl(220_25%_20%)]">
                    <div className="flex items-center gap-2 mb-2">
                      <Eye className="h-5 w-5 text-[hsl(180_70%_45%)]" />
                      <span className="text-xs font-semibold text-[hsl(180_70%_45%)] uppercase">Visibility</span>
                    </div>
                    <p className="text-sm text-[hsl(180_30%_98%_/_0.9)]">{selectedSite.visibility}</p>
                  </div>

                  <div className="bg-[hsl(220_25%_15%)] rounded-xl p-4 border border-[hsl(220_25%_20%)]">
                    <div className="flex items-center gap-2 mb-2">
                      <Waves className="h-5 w-5 text-[hsl(180_70%_45%)]" />
                      <span className="text-xs font-semibold text-[hsl(180_70%_45%)] uppercase">Current</span>
                    </div>
                    <p className="text-sm text-[hsl(180_30%_98%_/_0.9)]">{selectedSite.current}</p>
                  </div>
                </div>

                {/* Best Time to Visit */}
                <div className="bg-[hsl(220_25%_15%)] rounded-xl p-4 border border-[hsl(220_25%_20%)]">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-5 w-5 text-[hsl(180_70%_45%)]" />
                    <span className="text-sm font-semibold text-[hsl(180_70%_45%)] uppercase">Best Time to Visit</span>
                  </div>
                  <p className="text-sm text-[hsl(180_30%_98%_/_0.9)]">{selectedSite.bestTime}</p>
                </div>

                {/* Marine Life Highlights */}
                <div className="bg-[hsl(220_25%_15%)] rounded-xl p-4 border border-[hsl(220_25%_20%)]">
                  <div className="flex items-center gap-2 mb-3">
                    <Fish className="h-5 w-5 text-[hsl(180_70%_45%)]" />
                    <span className="text-sm font-semibold text-[hsl(180_70%_45%)] uppercase">Marine Life</span>
                  </div>
                  <p className="text-sm text-[hsl(180_30%_98%_/_0.9)] leading-relaxed">{selectedSite.highlights}</p>
                </div>

                {/* Special Features */}
                {selectedSite.specialFeatures && (
                  <div className="bg-[hsl(220_25%_15%)] rounded-xl p-4 border border-[hsl(220_25%_20%)]">
                    <div className="flex items-center gap-2 mb-3">
                      <Anchor className="h-5 w-5 text-[hsl(180_70%_45%)]" />
                      <span className="text-sm font-semibold text-[hsl(180_70%_45%)] uppercase">Special Features</span>
                    </div>
                    <p className="text-sm text-[hsl(180_30%_98%_/_0.9)] leading-relaxed">{selectedSite.specialFeatures}</p>
                  </div>
                )}

                {/* Tips */}
                {selectedSite.tips && (
                  <div className="bg-gradient-to-r from-[hsl(180_70%_45%_/_0.1)] to-[hsl(45_85%_55%_/_0.1)] rounded-xl p-4 border border-[hsl(180_70%_45%_/_0.3)]">
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="h-5 w-5 text-[hsl(180_70%_45%)]" />
                      <span className="text-sm font-semibold text-[hsl(180_70%_45%)] uppercase">Diver Tips</span>
                    </div>
                    <p className="text-sm text-[hsl(180_30%_98%_/_0.9)] leading-relaxed">{selectedSite.tips}</p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button 
                    onClick={() => {
                      handleBookDive(selectedSite.name);
                      setIsDialogOpen(false);
                    }}
                    className="flex-1 bg-gradient-to-r from-[hsl(180_70%_45%)] to-[hsl(45_85%_55%)] text-[hsl(220_20%_8%)] hover:shadow-[0_0_40px_hsl(180_70%_45%_/_0.5)] transition-all duration-300 font-semibold"
                  >
                    {t("diveSites.bookDiveTrip")}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => setIsDialogOpen(false)}
                    className="border-2 border-[hsl(220_25%_20%)] text-[hsl(180_30%_98%)] hover:bg-[hsl(220_25%_15%)]"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default DiveSites;
