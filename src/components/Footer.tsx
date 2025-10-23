import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Explore",
      links: ["Dive Sites", "Beaches", "Viewpoints", "Restaurants", "Nightlife"],
    },
    {
      title: "Activities",
      links: ["Diving Courses", "Boat Tours", "Snorkeling", "Bike Rentals", "Island Hopping"],
    },
    {
      title: "Plan",
      links: ["Accommodations", "Getting There", "Best Time to Visit", "Travel Tips", "Weather"],
    },
    {
      title: "About",
      links: ["About Us", "Contact", "Business Listings", "Advertise", "Terms & Privacy"],
    },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-xl">KT</span>
              </div>
              <span className="text-xl font-bold">Koh Tao Guide</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Your comprehensive travel companion for exploring Thailand's tropical paradise.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-primary-foreground/20 pt-8 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-secondary" />
              <span className="text-sm">Koh Tao, Surat Thani, Thailand</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-secondary" />
              <a href="mailto:info@kohtaoguide.com" className="text-sm hover:text-secondary transition-colors">
                info@kohtaoguide.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-secondary" />
              <span className="text-sm">+66 (0) 123 456 789</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© 2025 Koh Tao Guide. All rights reserved. Built with love for travelers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
