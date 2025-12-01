import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ship, Bike, UtensilsCrossed, Calendar, GraduationCap, PartyPopper, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const Activities = () => {
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleBookActivity = (activityName: string) => {
    toast({
      title: t("toast.bookingActivity"),
      description: `${t("toast.openingBooking")} ${activityName}...`,
    });
  };

  const handleViewDeals = () => {
    toast({
      title: t("toast.specialDeals"),
      description: t("toast.loadingDeals"),
    });
  };

  const activities = [
    {
      icon: GraduationCap,
      titleKey: "activities.divingCourses.title",
      descriptionKey: "activities.divingCourses.description",
      features: ["activities.divingCourses.feature.padi", "activities.divingCourses.feature.deposit", "activities.divingCourses.feature.instructors"],
      price: "From $350",
      color: "from-[hsl(180_70%_45%)] to-[hsl(180_65%_40%)]",
    },
    {
      icon: Ship,
      titleKey: "activities.boatTours.title",
      descriptionKey: "activities.boatTours.description",
      features: ["activities.boatTours.feature.fullDay", "activities.boatTours.feature.snorkelGear", "activities.boatTours.feature.lunch"],
      price: "From $45",
      color: "from-[hsl(45_85%_55%)] to-[hsl(45_80%_50%)]",
    },
    {
      icon: Bike,
      titleKey: "activities.bikeRentals.title",
      descriptionKey: "activities.bikeRentals.description",
      features: ["activities.bikeRentals.feature.vehicles", "activities.bikeRentals.feature.rates", "activities.bikeRentals.feature.helmet"],
      price: "From $8/day",
      color: "from-[hsl(15_75%_60%)] to-[hsl(15_70%_55%)]",
    },
    {
      icon: UtensilsCrossed,
      titleKey: "activities.foodTours.title",
      descriptionKey: "activities.foodTours.description",
      features: ["activities.foodTours.feature.restaurants", "activities.foodTours.feature.streetFood", "activities.foodTours.feature.cookingClasses"],
      price: "From $30",
      color: "from-[hsl(180_70%_45%)] to-[hsl(45_85%_55%)]",
    },
    {
      icon: PartyPopper,
      titleKey: "activities.eventsParties.title",
      descriptionKey: "activities.eventsParties.description",
      features: ["activities.eventsParties.feature.fullMoon", "activities.eventsParties.feature.liveMusic", "activities.eventsParties.feature.fireShows"],
      price: "Various",
      color: "from-[hsl(45_85%_55%)] to-[hsl(15_75%_60%)]",
    },
    {
      icon: Calendar,
      titleKey: "activities.activityCalendar.title",
      descriptionKey: "activities.activityCalendar.description",
      features: ["activities.activityCalendar.feature.events", "activities.activityCalendar.feature.book", "activities.activityCalendar.feature.deals"],
      price: "Free to Browse",
      color: "from-[hsl(180_70%_45%)] to-[hsl(15_75%_60%)]",
    },
  ];

  return (
    <section className="py-24 bg-[hsl(220_20%_8%)] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="h-8 w-8 text-[hsl(45_85%_55%)]" />
            <h2 className="text-5xl md:text-6xl font-bold text-[hsl(180_30%_98%)] tracking-tight">
              {t("activities.title")}
            </h2>
          </div>
          <p className="text-xl text-[hsl(180_30%_98%_/_0.7)] max-w-3xl mx-auto leading-relaxed">
            {t("activities.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            const title = t(activity.titleKey);
            return (
              <Card 
                key={index} 
                className="group bg-[hsl(220_25%_12%)] border border-[hsl(220_25%_20%)] hover:border-[hsl(180_70%_45%)] hover:shadow-[0_0_30px_hsl(180_70%_45%_/_0.2)] transition-all duration-300 hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${activity.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-[hsl(220_20%_8%)]" />
                    </div>
                    <span className="text-lg font-bold bg-gradient-to-r from-[hsl(180_70%_45%)] to-[hsl(45_85%_55%)] bg-clip-text text-transparent">
                      {activity.price}
                    </span>
                  </div>
                  <CardTitle className="text-2xl text-[hsl(180_30%_98%)] group-hover:text-[hsl(180_70%_45%)] transition-colors">
                    {title}
                  </CardTitle>
                  <CardDescription className="text-base text-[hsl(180_30%_98%_/_0.7)]">
                    {t(activity.descriptionKey)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {activity.features.map((featureKey, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-[hsl(180_30%_98%_/_0.8)]">
                        <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${activity.color}`}></div>
                        {t(featureKey)}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full bg-gradient-to-r ${activity.color} text-[hsl(220_20%_8%)] hover:shadow-[0_0_20px_hsl(180_70%_45%_/_0.3)] transition-all duration-300 font-semibold`}
                    onClick={() => handleBookActivity(title)}
                  >
                    {t("activities.bookNow")}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-[hsl(220_25%_12%)] to-[hsl(220_25%_15%)] rounded-3xl p-12 border border-[hsl(220_25%_20%)] shadow-[0_20px_60px_hsl(220_20%_8%_/_0.5)]">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[hsl(45_85%_55%)] to-[hsl(15_75%_60%)] mb-6 shadow-[0_0_30px_hsl(45_85%_55%_/_0.3)]">
              <Sparkles className="h-10 w-10 text-[hsl(220_20%_8%)]" />
            </div>
            <h3 className="text-4xl font-bold text-[hsl(180_30%_98%)] mb-4">{t("activities.specialTitle")}</h3>
            <p className="text-lg mb-8 text-[hsl(180_30%_98%_/_0.7)] max-w-2xl mx-auto leading-relaxed">
              {t("activities.specialDescription")}
            </p>
            <Button 
              onClick={handleViewDeals}
              className="bg-gradient-to-r from-[hsl(45_85%_55%)] to-[hsl(15_75%_60%)] text-[hsl(220_20%_8%)] hover:shadow-[0_0_40px_hsl(45_85%_55%_/_0.4)] transition-all duration-300 font-semibold px-10 py-6 rounded-xl text-lg"
            >
              {t("activities.viewAllDeals")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
