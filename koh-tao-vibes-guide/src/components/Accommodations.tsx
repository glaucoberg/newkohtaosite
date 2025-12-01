import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Hotel, Star, MapPin, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import beachImage from "@/assets/beach-paradise.jpg";
import reviewsData from "@/data/reviews.json";
import ReviewSection from "./ReviewSection";
import { useState } from "react";

const Accommodations = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [reviews, setReviews] = useState(reviewsData);
  
  // Map accommodation IDs to match reviews
  const accommodationIdMap: { [key: string]: string } = {
    "accommodations.taoBeach.name": "tao-beach-resort",
    "accommodations.diveInn.name": "dive-inn-bungalows",
    "accommodations.luxuryVilla.name": "luxury-beach-villa",
    "accommodations.backpackerHostel.name": "backpacker-hostel",
    "accommodations.oceanView.name": "ocean-view-resort",
  };
  
  // Calculate average rating from reviews
  const getAverageRating = (accommodationId: string): number => {
    const accommodationReviews = reviews.filter(
      (r) => r.entityType === "accommodation" && r.entityId === accommodationId
    );
    if (accommodationReviews.length === 0) return 0;
    const sum = accommodationReviews.reduce((acc, r) => acc + r.rating, 0);
    return Number((sum / accommodationReviews.length).toFixed(1));
  };
  
  // Get reviews for an accommodation
  const getReviews = (accommodationId: string) => {
    return reviews.filter(
      (r) => r.entityType === "accommodation" && r.entityId === accommodationId
    );
  };
  
  // Handle adding new review
  const handleAddReview = (accommodationId: string, review: Omit<typeof reviews[0], "id" | "date" | "entityType" | "entityId" | "verified">) => {
    const newReview = {
      id: `review-${Date.now()}`,
      entityType: "accommodation" as const,
      entityId: accommodationId,
      ...review,
      date: new Date().toISOString().split('T')[0],
      verified: false,
    };
    setReviews([...reviews, newReview]);
  };

  const handleBookNow = (accommodationName: string) => {
    toast({
      title: t("toast.bookAccommodation"),
      description: `${t("toast.openingAccommodation")} ${accommodationName}...`,
    });
  };

  const handleViewDetails = (accommodationName: string) => {
    toast({
      title: accommodationName,
      description: t("toast.openingDetails"),
    });
  };

  const handleExploreAll = () => {
    toast({
      title: t("toast.allAccommodations"),
      description: t("toast.loadingAccommodations"),
    });
  };

  const accommodations = [
    {
      nameKey: "accommodations.taoBeach.name",
      descriptionKey: "accommodations.taoBeach.description",
      rating: 4.5,
      price: "$50-80",
      locationKey: "accommodations.location.saireeBeach",
      amenities: ["accommodations.amenity.pool", "accommodations.amenity.restaurant", "accommodations.amenity.wifi", "accommodations.amenity.ac"],
      type: "resort",
    },
    {
      nameKey: "accommodations.diveInn.name",
      descriptionKey: "accommodations.diveInn.description",
      rating: 4.2,
      price: "$25-45",
      locationKey: "accommodations.location.chalokBaanKao",
      amenities: ["accommodations.amenity.wifi", "accommodations.amenity.fan", "accommodations.amenity.sharedBathroom"],
      type: "bungalow",
    },
    {
      nameKey: "accommodations.luxuryVilla.name",
      descriptionKey: "accommodations.luxuryVilla.description",
      rating: 4.8,
      price: "$150-250",
      locationKey: "accommodations.location.maeHaad",
      amenities: ["accommodations.amenity.privateBeach", "accommodations.amenity.pool", "accommodations.amenity.kitchen", "accommodations.amenity.ac", "accommodations.amenity.wifi"],
      type: "villa",
    },
    {
      nameKey: "accommodations.backpackerHostel.name",
      descriptionKey: "accommodations.backpackerHostel.description",
      rating: 4.0,
      price: "$10-20",
      locationKey: "accommodations.location.saireeBeach",
      amenities: ["accommodations.amenity.sharedKitchen", "accommodations.amenity.wifi", "accommodations.amenity.commonArea"],
      type: "hostel",
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "resort":
        return "bg-gradient-to-r from-[hsl(180_70%_45%)] to-[hsl(180_65%_40%)] text-[hsl(220_20%_8%)]";
      case "villa":
        return "bg-gradient-to-r from-[hsl(45_85%_55%)] to-[hsl(45_80%_50%)] text-[hsl(220_20%_8%)]";
      case "bungalow":
        return "bg-gradient-to-r from-[hsl(180_70%_45%)] to-[hsl(45_85%_55%)] text-[hsl(220_20%_8%)]";
      case "hostel":
        return "bg-[hsl(220_25%_15%)] text-[hsl(180_30%_98%_/_0.8)] border border-[hsl(220_25%_20%)]";
      default:
        return "bg-[hsl(220_25%_15%)] text-[hsl(180_30%_98%_/_0.7)]";
    }
  };

  return (
    <section className="py-24 bg-[hsl(220_25%_10%)] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-[hsl(220_25%_12%)] border border-[hsl(220_25%_20%)]">
              <Hotel className="h-8 w-8 text-[hsl(45_85%_55%)]" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-[hsl(180_30%_98%)] tracking-tight">
              {t("accommodations.title")}
            </h2>
          </div>
          <p className="text-xl text-[hsl(180_30%_98%_/_0.7)] max-w-3xl mx-auto leading-relaxed">
            {t("accommodations.description")}
          </p>
        </div>

        {/* Featured Accommodation Hero */}
        <div className="mb-16 relative rounded-3xl overflow-hidden group cursor-pointer shadow-[0_20px_60px_hsl(220_20%_8%_/_0.5)]">
          <div className="absolute inset-0">
            <img 
              src={beachImage} 
              alt={t("accommodations.oceanView.name")} 
              className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-700"
              loading="eager"
              onError={(e) => {
                console.error(`Failed to load beach image: ${beachImage}`);
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_20%_8%_/_0.95)] via-[hsl(220_20%_8%_/_0.7)] to-transparent"></div>
          </div>
          <div className="relative p-8 md:p-12 flex items-end min-h-[500px]">
            <div className="max-w-3xl">
              <Badge className="mb-6 bg-gradient-to-r from-[hsl(45_85%_55%)] to-[hsl(15_75%_60%)] text-[hsl(220_20%_8%)] border-0 px-4 py-2 text-sm font-semibold">
                {t("accommodations.featured")}
              </Badge>
              <h3 className="text-4xl md:text-5xl font-bold text-[hsl(180_30%_98%)] mb-4">
                {t("accommodations.oceanView.name")}
              </h3>
              <p className="text-lg md:text-xl text-[hsl(180_30%_98%_/_0.8)] mb-4 leading-relaxed">
                {t("accommodations.oceanView.description")}
              </p>
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-[hsl(45_85%_55%)] text-[hsl(45_85%_55%)]" />
                  <span className="font-semibold text-[hsl(180_30%_98%)]">
                    {getAverageRating("ocean-view-resort") || 4.7}
                  </span>
                  <span className="text-sm text-[hsl(180_30%_98%_/_0.5)]">
                    ({getReviews("ocean-view-resort").length} {t("reviews.reviews")})
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[hsl(180_30%_98%_/_0.8)]">
                  <MapPin className="h-5 w-5" />
                  <span>{t("accommodations.location.saireeBeach")}</span>
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-[hsl(45_85%_55%)] to-[hsl(180_70%_45%)] bg-clip-text text-transparent">
                  From $120{t("accommodations.pricePerNight")}
                </span>
              </div>
              <Button 
                onClick={() => handleBookNow(t("accommodations.oceanView.name"))}
                className="bg-gradient-to-r from-[hsl(180_70%_45%)] to-[hsl(45_85%_55%)] text-[hsl(220_20%_8%)] hover:shadow-[0_0_40px_hsl(180_70%_45%_/_0.5)] transition-all duration-300 font-semibold px-8 py-6 rounded-xl text-lg"
              >
                {t("accommodations.bookNow")}
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Accommodations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {accommodations.map((accommodation, index) => {
            const name = t(accommodation.nameKey);
            return (
              <Card 
                key={index} 
                className="group bg-[hsl(220_25%_12%)] border border-[hsl(220_25%_20%)] hover:border-[hsl(180_70%_45%)] hover:shadow-[0_0_30px_hsl(180_70%_45%_/_0.2)] transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2 rounded-lg bg-[hsl(220_25%_15%)] group-hover:bg-[hsl(180_70%_45%_/_0.2)] transition-colors">
                      <Hotel className="h-5 w-5 text-[hsl(45_85%_55%)]" />
                    </div>
                    <Badge className={`${getTypeColor(accommodation.type)} border-0 font-semibold text-xs`}>
                      {t(`accommodations.type.${accommodation.type}`)}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-[hsl(180_30%_98%)] group-hover:text-[hsl(180_70%_45%)] transition-colors">
                    {name}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 text-sm text-[hsl(180_30%_98%_/_0.6)] mt-2">
                    <MapPin className="h-4 w-4" />
                    {t(accommodation.locationKey)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-[hsl(45_85%_55%)] text-[hsl(45_85%_55%)]" />
                      <span className="text-sm font-semibold text-[hsl(180_30%_98%)]">{accommodation.rating}</span>
                    </div>
                    <span className="text-sm font-bold bg-gradient-to-r from-[hsl(180_70%_45%)] to-[hsl(45_85%_55%)] bg-clip-text text-transparent">
                      {accommodation.price}{t("accommodations.pricePerNight")}
                    </span>
                  </div>
                  <p className="text-sm text-[hsl(180_30%_98%_/_0.7)] mb-4 leading-relaxed">
                    {t(accommodation.descriptionKey)}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {accommodation.amenities.map((amenityKey, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-[hsl(220_25%_15%)] border border-[hsl(220_25%_20%)] px-3 py-1 rounded-lg text-[hsl(180_30%_98%_/_0.8)]"
                      >
                        {t(amenityKey)}
                      </span>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-[hsl(220_25%_20%)] text-[hsl(180_30%_98%)] hover:bg-[hsl(180_70%_45%)] hover:text-[hsl(220_20%_8%)] hover:border-[hsl(180_70%_45%)] transition-all duration-300" 
                    onClick={() => handleViewDetails(name)}
                  >
                    {t("accommodations.viewDetails")}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            onClick={handleExploreAll}
            className="bg-gradient-to-r from-[hsl(180_70%_45%)] to-[hsl(45_85%_55%)] text-[hsl(220_20%_8%)] hover:shadow-[0_0_40px_hsl(180_70%_45%_/_0.4)] transition-all duration-300 font-semibold px-10 py-6 rounded-xl text-lg"
          >
            {t("accommodations.exploreAll")}
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        {/* Reviews Section for Featured Accommodation */}
        <div className="mt-16">
          <ReviewSection
            entityId="ocean-view-resort"
            entityType="accommodation"
            reviews={getReviews("ocean-view-resort")}
            onAddReview={(review) => handleAddReview("ocean-view-resort", review)}
          />
        </div>
      </div>
    </section>
  );
};

export default Accommodations;
