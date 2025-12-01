import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePlanTrip = () => {
    const element = document.getElementById("activities");
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const menuItems = [
    { label: t("nav.diveSites"), href: "#dive-sites" },
    { label: t("nav.destinations"), href: "#destinations" },
    { label: t("nav.activities"), href: "#activities" },
    { label: t("nav.accommodations"), href: "#accommodations" },
    { label: t("nav.businessDirectory"), href: "#directory" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-[hsl(220_25%_10%)]/95 backdrop-blur-xl border-b border-[hsl(220_25%_20%)] shadow-[0_20px_60px_hsl(220_20%_8%_/_0.5)]" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img 
              src="/assets/logo.png" 
              alt="Discovery Koh Tao Logo" 
              className="object-contain flex-shrink-0"
              style={{ width: '86px', height: '86px', minWidth: '86px', minHeight: '86px', marginTop: '4px' }}
              onError={(e) => {
                // Fallback to SVG if PNG doesn't exist
                const target = e.currentTarget;
                if (!target.src.includes('.svg')) {
                  target.src = '/assets/logo.svg';
                }
              }}
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-[hsl(180_70%_45%)] to-[hsl(45_85%_55%)] bg-clip-text text-transparent tracking-tight">
              Koh Tao Guide
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <a 
                key={index}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative text-[hsl(180_30%_98%)]/80 hover:text-[hsl(180_70%_45%)] transition-all duration-300 font-medium text-sm tracking-wide uppercase group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[hsl(180_70%_45%)] to-[hsl(45_85%_55%)] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              onClick={handlePlanTrip}
              className="bg-gradient-to-r from-[hsl(180_70%_45%)] to-[hsl(45_85%_55%)] text-[hsl(220_20%_8%)] hover:shadow-[0_0_30px_hsl(180_70%_45%_/_0.4)] transition-all duration-300 font-semibold px-6"
            >
              {t("nav.planTrip")}
            </Button>
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[hsl(180_30%_98%)] hover:text-[hsl(180_70%_45%)] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[hsl(220_25%_12%)] border-t border-[hsl(220_25%_20%)] backdrop-blur-xl">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {menuItems.map((item, index) => (
              <a 
                key={index}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block py-3 text-[hsl(180_30%_98%)]/80 hover:text-[hsl(180_70%_45%)] transition-colors font-medium text-sm tracking-wide uppercase border-b border-[hsl(220_25%_20%)] last:border-0"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 space-y-3 border-t border-[hsl(220_25%_20%)]">
              <Button 
                className="w-full bg-gradient-to-r from-[hsl(180_70%_45%)] to-[hsl(45_85%_55%)] text-[hsl(220_20%_8%)] hover:shadow-[0_0_30px_hsl(180_70%_45%_/_0.4)] transition-all duration-300 font-semibold"
                onClick={handlePlanTrip}
              >
                {t("nav.planTrip")}
              </Button>
              <div className="px-2">
                <LanguageSelector />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
