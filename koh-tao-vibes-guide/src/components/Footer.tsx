import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, ArrowUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerSections = [
    {
      titleKey: "footer.explore",
      links: [
        { key: "footer.link.diveSites" },
        { key: "footer.link.beaches" },
        { key: "footer.link.viewpoints" },
        { key: "footer.link.restaurants" },
        { key: "footer.link.nightlife" },
      ],
    },
    {
      titleKey: "footer.activities",
      links: [
        { key: "footer.link.divingCourses" },
        { key: "footer.link.boatTours" },
        { key: "footer.link.snorkeling" },
        { key: "footer.link.bikeRentals" },
        { key: "footer.link.islandHopping" },
      ],
    },
    {
      titleKey: "footer.plan",
      links: [
        { key: "footer.link.accommodations" },
        { key: "footer.link.gettingThere" },
        { key: "footer.link.bestTimeToVisit" },
        { key: "footer.link.travelTips" },
        { key: "footer.link.weather" },
      ],
    },
    {
      titleKey: "footer.about",
      links: [
        { key: "footer.link.aboutUs" },
        { key: "footer.link.contact" },
        { key: "footer.link.businessListings" },
        { key: "footer.link.advertise" },
        { key: "footer.link.termsPrivacy" },
      ],
    },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    // In real app, would navigate or scroll to section
    console.log(`Navigate to: ${link}`);
  };

  return (
    <footer className="bg-[hsl(220_20%_8%)] border-t border-[hsl(220_25%_20%)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, hsl(180_70%_45%) 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(180_70%_45%)] to-[hsl(45_85%_55%)] flex items-center justify-center shadow-[0_0_20px_hsl(180_70%_45%_/_0.3)]">
                <span className="text-white font-bold text-xl">KT</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[hsl(180_70%_45%)] to-[hsl(45_85%_55%)] bg-clip-text text-transparent">
                Koh Tao Guide
              </span>
            </div>
            <p className="text-[hsl(180_30%_98%_/_0.7)] mb-6 leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="text-[hsl(180_30%_98%_/_0.6)] hover:text-[hsl(180_70%_45%)] transition-colors"
                onClick={(e) => e.preventDefault()}
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-[hsl(180_30%_98%_/_0.6)] hover:text-[hsl(180_70%_45%)] transition-colors"
                onClick={(e) => e.preventDefault()}
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-[hsl(180_30%_98%_/_0.6)] hover:text-[hsl(180_70%_45%)] transition-colors"
                onClick={(e) => e.preventDefault()}
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg mb-4 text-[hsl(180_30%_98%)]">{t(section.titleKey)}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-[hsl(180_30%_98%_/_0.6)] hover:text-[hsl(180_70%_45%)] transition-colors text-sm"
                      onClick={(e) => handleLinkClick(e, t(link.key))}
                    >
                      {t(link.key)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-[hsl(220_25%_20%)] pt-8 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[hsl(220_25%_12%)] border border-[hsl(220_25%_20%)]">
                <MapPin className="h-5 w-5 text-[hsl(180_70%_45%)]" />
              </div>
              <span className="text-sm text-[hsl(180_30%_98%_/_0.7)]">{t("footer.address")}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[hsl(220_25%_12%)] border border-[hsl(220_25%_20%)]">
                <Mail className="h-5 w-5 text-[hsl(180_70%_45%)]" />
              </div>
              <a 
                href="mailto:info@kohtaoguide.com" 
                className="text-sm text-[hsl(180_30%_98%_/_0.7)] hover:text-[hsl(180_70%_45%)] transition-colors"
              >
                info@kohtaoguide.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[hsl(220_25%_12%)] border border-[hsl(220_25%_20%)]">
                <Phone className="h-5 w-5 text-[hsl(180_70%_45%)]" />
              </div>
              <span className="text-sm text-[hsl(180_30%_98%_/_0.7)]">+66 (0) 123 456 789</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[hsl(220_25%_20%)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[hsl(180_30%_98%_/_0.5)] text-center md:text-left">
            {t("footer.copyright")}
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-[hsl(180_30%_98%_/_0.6)] hover:text-[hsl(180_70%_45%)] transition-colors group"
            aria-label="Scroll to top"
          >
            {t("footer.backToTop")}
            <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
