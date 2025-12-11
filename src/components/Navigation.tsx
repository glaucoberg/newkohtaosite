import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleLanguageClick = () => {
    toast({
      title: "Language Selection",
      description: "Multilingual support coming soon! Available: EN, ES, DE, TH, CN",
    });
  };

  const handlePlanTrip = () => {
    toast({
      title: "Plan Your Trip",
      description: "Trip planning wizard coming soon!",
    });
  };

  const menuItems = [
    { label: "Dive Sites", href: "#dive-sites" },
    { label: "Destinations", href: "#destinations" },
    { label: "Activities", href: "#activities" },
    { label: "Accommodations", href: "#accommodations" },
    { label: "Business Directory", href: "#directory" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-bold text-xl">KT</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Koh Tao Guide
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <a 
                key={index}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={handleLanguageClick}>
              <Globe className="h-4 w-4 mr-2" />
              EN
            </Button>
            <Button variant="hero" onClick={handlePlanTrip}>
              Plan Your Trip
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {menuItems.map((item, index) => (
              <a 
                key={index}
                href={item.href}
                className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 space-y-2">
              <Button variant="ghost" className="w-full" onClick={handleLanguageClick}>
                <Globe className="h-4 w-4 mr-2" />
                Language
              </Button>
              <Button variant="hero" className="w-full" onClick={handlePlanTrip}>
                Plan Your Trip
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
