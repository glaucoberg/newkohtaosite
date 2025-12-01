import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Sparkles } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: t("toast.success"),
        description: t("toast.subscribed"),
      });
      setEmail("");
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-[hsl(220_25%_10%)] to-[hsl(220_20%_8%)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, hsl(180_70%_45%) 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-[hsl(220_25%_12%)] to-[hsl(220_25%_15%)] rounded-3xl p-12 border border-[hsl(220_25%_20%)] shadow-[0_20px_60px_hsl(220_20%_8%_/_0.5)]">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[hsl(180_70%_45%)] to-[hsl(45_85%_55%)] mb-6 shadow-[0_0_30px_hsl(180_70%_45%_/_0.3)]">
                <Mail className="h-10 w-10 text-[hsl(220_20%_8%)]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[hsl(180_30%_98%)] mb-4 tracking-tight">
                {t("newsletter.title")}
              </h2>
              <p className="text-xl text-[hsl(180_30%_98%_/_0.7)] mb-10 leading-relaxed">
                {t("newsletter.description")}
              </p>
              
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <Input 
                  type="email"
                  placeholder={t("newsletter.placeholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-14 px-6 text-lg bg-[hsl(220_25%_15%)] border-2 border-[hsl(220_25%_20%)] text-[hsl(180_30%_98%)] placeholder:text-[hsl(180_30%_98%_/_0.4)] focus-visible:ring-2 focus-visible:ring-[hsl(180_70%_45%)] focus-visible:border-[hsl(180_70%_45%)] rounded-xl"
                />
                <Button 
                  type="submit"
                  className="h-14 px-8 text-lg bg-gradient-to-r from-[hsl(180_70%_45%)] to-[hsl(45_85%_55%)] text-[hsl(220_20%_8%)] hover:shadow-[0_0_30px_hsl(180_70%_45%_/_0.4)] transition-all duration-300 font-semibold rounded-xl"
                >
                  {t("newsletter.subscribe")}
                  <Sparkles className="ml-2 h-5 w-5" />
                </Button>
              </form>

              <p className="text-sm text-[hsl(180_30%_98%_/_0.6)] mt-6">
                {t("newsletter.subscribers")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
