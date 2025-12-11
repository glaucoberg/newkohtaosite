import Accommodations from "@/components/Accommodations";
import PageTitle from "@/components/PageTitle";
import { useLanguage } from "@/contexts/LanguageContext";

const AccommodationsPage = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <PageTitle 
        title={t("accommodations.title")} 
        description={t("accommodations.description")}
      />
      <Accommodations />
    </>
  );
};

export default AccommodationsPage;

