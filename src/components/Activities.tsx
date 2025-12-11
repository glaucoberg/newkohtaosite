import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ship, Bike, UtensilsCrossed, Calendar, GraduationCap, PartyPopper } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Activities = () => {
  const { toast } = useToast();

  const handleBookActivity = (activityName: string) => {
    toast({
      title: "Booking Activity",
      description: `Preparing to book: ${activityName}`,
    });
  };

  const handleViewDeals = () => {
    toast({
      title: "Special Deals",
      description: "Loading exclusive offers and discounts...",
    });
  };
  const activities = [
    {
      icon: GraduationCap,
      title: "Diving Courses",
      description: "From beginner to professional levels",
      features: ["PADI Certified", "10% Deposit Booking", "Expert Instructors"],
      price: "From $350",
      color: "text-primary",
    },
    {
      icon: Ship,
      title: "Boat Tours",
      description: "Island hopping and snorkeling trips",
      features: ["Full Day Tours", "Snorkeling Gear", "Lunch Included"],
      price: "From $45",
      color: "text-secondary",
    },
    {
      icon: Bike,
      title: "Bike Rentals",
      description: "Explore the island at your own pace",
      features: ["Scooters & Motorcycles", "Daily & Weekly Rates", "Helmet Included"],
      price: "From $8/day",
      color: "text-accent",
    },
    {
      icon: UtensilsCrossed,
      title: "Food Tours",
      description: "Taste authentic Thai cuisine",
      features: ["Local Restaurants", "Street Food", "Cooking Classes"],
      price: "From $30",
      color: "text-primary",
    },
    {
      icon: PartyPopper,
      title: "Events & Parties",
      description: "Beach parties and cultural events",
      features: ["Full Moon Parties", "Live Music", "Fire Shows"],
      price: "Various",
      color: "text-secondary",
    },
    {
      icon: Calendar,
      title: "Activity Calendar",
      description: "Plan your perfect schedule",
      features: ["Upcoming Events", "Book in Advance", "Special Deals"],
      price: "Free to Browse",
      color: "text-accent",
    },
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Activities & Experiences
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Book unforgettable experiences and adventures on Koh Tao
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className={`p-3 rounded-xl bg-muted group-hover:bg-primary/10 transition-colors ${activity.color}`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <span className="text-lg font-bold text-primary">{activity.price}</span>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {activity.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {activity.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {activity.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-secondary"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="default" className="w-full" onClick={() => handleBookActivity(activity.title)}>
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Special Offer Banner */}
        <div className="bg-gradient-to-r from-accent to-primary rounded-3xl p-8 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Early Bird Special</h3>
          <p className="text-lg mb-6 text-white/90">
            Book your diving course or activity 7 days in advance and get 15% off
          </p>
          <Button variant="secondary" size="lg" onClick={handleViewDeals}>
            View All Deals
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Activities;
