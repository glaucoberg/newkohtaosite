import InteractiveMapSection from "@/components/InteractiveMapSection";
import PageTitle from "@/components/PageTitle";
import { useLanguage } from "@/contexts/LanguageContext";

const Map = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <PageTitle 
        title={t("destinations.mapTitle")} 
        description={t("destinations.mapDescription")}
      />
      <InteractiveMapSection />
    </>
  );
};

export default Map;

