import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, UtensilsCrossed, ShoppingBag, Coffee, MapPin, Phone, Sparkles as SparklesIcon, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import reviewsData from "@/data/reviews.json";
import ReviewSection from "./ReviewSection";
import { useState } from "react";

const BusinessDirectory = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [reviews, setReviews] = useState(reviewsData);
  
  // Map business IDs to match reviews
  const businessIdMap: { [key: string]: string } = {
    "businesses.saireeBeachRestaurant.name": "sairee-beach-restaurant",
    "businesses.diveShopPro.name": "dive-shop-pro",
    "businesses.islandMarket.name": "island-market",
    "businesses.sunsetCafe.name": "sunset-cafe",
    "businesses.thaiMassageSpa.name": "thai-massage-spa",
    "businesses.beachBarGrill.name": "beach-bar-grill",
    "businesses.diveGearStore.name": "dive-gear-store",
    "businesses.organicJuiceBar.name": "organic-juice-bar",
  };
  
  // Calculate average rating from reviews
  const getAverageRating = (businessId: string, defaultRating: number): number => {
    const businessReviews = reviews.filter(
      (r) => r.entityType === "business" && r.entityId === businessId
    );
    if (businessReviews.length === 0) return defaultRating;
    const sum = businessReviews.reduce((acc, r) => acc + r.rating, 0);
    return Number((sum / businessReviews.length).toFixed(1));
  };
  
  // Get reviews for a business
  const getReviews = (businessId: string) => {
    return reviews.filter(
      (r) => r.entityType === "business" && r.entityId === businessId
    );
  };
  
  // Handle adding new review
  const handleAddReview = (businessId: string, review: Omit<typeof reviews[0], "id" | "date" | "entityType" | "entityId" | "verified">) => {
    const newReview = {
      id: `review-${Date.now()}`,
      entityType: "business" as const,
      entityId: businessId,
      ...review,
      date: new Date().toISOString().split('T')[0],
      verified: false,
    };
    setReviews([...reviews, newReview]);
  };

  const handleContact = (businessName: string) => {
    toast({
      title: t("toast.contactBusiness"),
      description: `${t("toast.openingContact")} ${businessName}...`,
    });
  };

  const handleViewDetails = (businessName: string) => {
    toast({
      title: businessName,
      description: t("toast.openingDetails"),
    });
  };

  const handleExploreAll = (category: string) => {
    toast({
      title: t("toast.allBusinesses"),
      description: t("toast.loadingBusinesses"),
    });
  };

  const getIconForCategory = (category: string) => {
    switch (category.toLowerCase()) {
      case "restaurant":
        return UtensilsCrossed;
      case "diveshop":
      case "dive shop":
        return Building2;
      case "shopping":
        return ShoppingBag;
      case "cafe":
      case "café":
        return Coffee;
      case "spa":
        return Building2;
      default:
        return Building2;
    }
  };

  const businesses = [
    {
      nameKey: "businesses.saireeBeachRestaurant.name",
      descriptionKey: "businesses.saireeBeachRestaurant.description",
      category: "restaurant",
      categoryKey: "businesses.category.restaurant",
      rating: 4.5,
      openHours: "11:00 AM - 10:00 PM",
      phone: "+66 77 456 7890",
      locationKey: "businesses.location.saireeBeach",
    },
    {
      nameKey: "businesses.diveShopPro.name",
      descriptionKey: "businesses.diveShopPro.description",
      category: "diveShop",
      categoryKey: "businesses.category.diveShop",
      rating: 4.8,
      openHours: "7:00 AM - 6:00 PM",
      phone: "+66 77 456 7891",
      locationKey: "businesses.location.maeHaad",
    },
    {
      nameKey: "businesses.islandMarket.name",
      descriptionKey: "businesses.islandMarket.description",
      category: "shopping",
      categoryKey: "businesses.category.shopping",
      rating: 4.2,
      openHours: "9:00 AM - 8:00 PM",
      phone: "+66 77 456 7892",
      locationKey: "businesses.location.chalokBaanKao",
    },
    {
      nameKey: "businesses.sunsetCafe.name",
      descriptionKey: "businesses.sunsetCafe.description",
      category: "cafe",
      categoryKey: "businesses.category.cafe",
      rating: 4.6,
      openHours: "7:00 AM - 9:00 PM",
      phone: "+66 77 456 7893",
      locationKey: "businesses.location.saireeBeach",
    },
    {
      nameKey: "businesses.thaiMassageSpa.name",
      descriptionKey: "businesses.thaiMassageSpa.description",
      category: "spa",
      categoryKey: "businesses.category.spa",
      rating: 4.7,
      openHours: "10:00 AM - 10:00 PM",
      phone: "+66 77 456 7894",
      locationKey: "businesses.location.maeHaad",
    },
    {
      nameKey: "businesses.beachBarGrill.name",
      descriptionKey: "businesses.beachBarGrill.description",
      category: "restaurant",
      categoryKey: "businesses.category.restaurant",
      rating: 4.4,
      openHours: "12:00 PM - 11:00 PM",
      phone: "+66 77 456 7895",
      locationKey: "businesses.location.chalokBaanKao",
    },
    {
      nameKey: "businesses.diveGearStore.name",
      descriptionKey: "businesses.diveGearStore.description",
      category: "shopping",
      categoryKey: "businesses.category.shopping",
      rating: 4.5,
      openHours: "8:00 AM - 7:00 PM",
      phone: "+66 77 456 7896",
      locationKey: "businesses.location.saireeBeach",
    },
    {
      nameKey: "businesses.organicJuiceBar.name",
      descriptionKey: "businesses.organicJuiceBar.description",
      category: "cafe",
      categoryKey: "businesses.category.cafe",
      rating: 4.3,
      openHours: "8:00 AM - 6:00 PM",
      phone: "+66 77 456 7897",
      locationKey: "businesses.location.maeHaad",
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "restaurant":
        return "bg-gradient-to-r from-[hsl(15_75%_60%)] to-[hsl(15_70%_55%)] text-[hsl(180_30%_98%)]";
      case "diveshop":
      case "dive shop":
        return "bg-gradient-to-r from-[hsl(180_70%_45%)] to-[hsl(180_65%_40%)] text-[hsl(220_20%_8%)]";
      case "shopping":
        return "bg-gradient-to-r from-[hsl(45_85%_55%)] to-[hsl(45_80%_50%)] text-[hsl(220_20%_8%)]";
      case "café":
      case "cafe":
        return "bg-gradient-to-r from-[hsl(180_70%_45%)] to-[hsl(45_85%_55%)] text-[hsl(220_20%_8%)]";
      case "spa":
        return "bg-gradient-to-r from-[hsl(45_85%_55%)] to-[hsl(15_75%_60%)] text-[hsl(220_20%_8%)]";
      default:
        return "bg-[hsl(220_25%_15%)] text-[hsl(180_30%_98%_/_0.7)]";
    }
  };

  const categories = [
    { nameKey: "businessDirectory.all", icon: Building2 },
    { nameKey: "businessDirectory.restaurants", icon: UtensilsCrossed },
    { nameKey: "businessDirectory.diveShops", icon: Building2 },
    { nameKey: "businessDirectory.shopping", icon: ShoppingBag },
    { nameKey: "businessDirectory.cafes", icon: Coffee },
  ];

  return (
    <section className="py-24 bg-[hsl(220_20%_8%)] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-[hsl(220_25%_12%)] border border-[hsl(220_25%_20%)]">
              <Building2 className="h-8 w-8 text-[hsl(15_75%_60%)]" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-[hsl(180_30%_98%)] tracking-tight">
              {t("businessDirectory.title")}
            </h2>
          </div>
          <p className="text-xl text-[hsl(180_30%_98%_/_0.7)] max-w-3xl mx-auto leading-relaxed">
            {t("businessDirectory.description")}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Button
                key={index}
                variant="outline"
                className="gap-2 border-2 border-[hsl(220_25%_20%)] text-[hsl(180_30%_98%)] hover:bg-[hsl(220_25%_15%)] hover:border-[hsl(180_70%_45%)] transition-all duration-300"
                onClick={() => handleExploreAll(t(category.nameKey))}
              >
                <Icon className="h-4 w-4" />
                {t(category.nameKey)}
              </Button>
            );
          })}
        </div>

        {/* Businesses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {businesses.map((business, index) => {
            const Icon = getIconForCategory(business.category);
            const name = t(business.nameKey);
            return (
              <Card 
                key={index} 
                className="group bg-[hsl(220_25%_12%)] border border-[hsl(220_25%_20%)] hover:border-[hsl(180_70%_45%)] hover:shadow-[0_0_30px_hsl(180_70%_45%_/_0.2)] transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2 rounded-lg bg-[hsl(220_25%_15%)] group-hover:bg-[hsl(180_70%_45%_/_0.2)] transition-colors">
                      <Icon className="h-5 w-5 text-[hsl(15_75%_60%)]" />
                    </div>
                    <Badge className={`${getCategoryColor(business.category)} border-0 font-semibold text-xs`}>
                      {t(business.categoryKey)}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-[hsl(180_30%_98%)] group-hover:text-[hsl(180_70%_45%)] transition-colors">
                    {name}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 text-sm text-[hsl(180_30%_98%_/_0.6)] mt-2">
                    <MapPin className="h-4 w-4" />
                    {t(business.locationKey)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-semibold text-[hsl(180_30%_98%)]">{business.rating}</span>
                      <SparklesIcon className="h-3 w-3 fill-[hsl(45_85%_55%)] text-[hsl(45_85%_55%)]" />
                    </div>
                    <span className="text-xs text-[hsl(180_30%_98%_/_0.5)]">•</span>
                    <div className="flex items-center gap-1 text-xs text-[hsl(180_30%_98%_/_0.6)]">
                      <Clock className="h-3 w-3" />
                      {business.openHours}
                    </div>
                  </div>
                  <p className="text-sm text-[hsl(180_30%_98%_/_0.7)] mb-4 leading-relaxed">
                    {t(business.descriptionKey)}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-[hsl(180_30%_98%_/_0.6)] mb-4 pb-4 border-b border-[hsl(220_25%_20%)]">
                    <Phone className="h-3 w-3" />
                    <span>{business.phone}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      className="flex-1 border-2 border-[hsl(220_25%_20%)] text-[hsl(180_30%_98%)] hover:bg-[hsl(15_75%_60%)] hover:text-[hsl(220_20%_8%)] hover:border-[hsl(15_75%_60%)] transition-all duration-300" 
                      onClick={() => handleViewDetails(name)}
                    >
                      {t("businessDirectory.details")}
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 border-2 border-[hsl(220_25%_20%)] text-[hsl(180_30%_98%)] hover:bg-[hsl(180_70%_45%)] hover:text-[hsl(220_20%_8%)] hover:border-[hsl(180_70%_45%)] transition-all duration-300" 
                      onClick={() => handleContact(name)}
                    >
                      {t("businessDirectory.contact")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            onClick={() => handleExploreAll(t("businessDirectory.viewAll"))}
            className="bg-gradient-to-r from-[hsl(180_70%_45%)] to-[hsl(45_85%_55%)] text-[hsl(220_20%_8%)] hover:shadow-[0_0_40px_hsl(180_70%_45%_/_0.4)] transition-all duration-300 font-semibold px-10 py-6 rounded-xl text-lg"
          >
            {t("businessDirectory.viewAll")}
          </Button>
        </div>
        
        {/* Reviews Section for Featured Business */}
        <div className="mt-16">
          <ReviewSection
            entityId="sairee-beach-restaurant"
            entityType="business"
            reviews={getReviews("sairee-beach-restaurant")}
            onAddReview={(review) => handleAddReview("sairee-beach-restaurant", review)}
          />
        </div>
      </div>
    </section>
  );
};

export default BusinessDirectory;
