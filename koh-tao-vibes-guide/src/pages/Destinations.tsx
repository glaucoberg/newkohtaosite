import Destinations from "@/components/Destinations";
import PageTitle from "@/components/PageTitle";
import { useLanguage } from "@/contexts/LanguageContext";

const DestinationsPage = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <PageTitle 
        title={t("destinations.title")} 
        description={t("destinations.description")}
      />
      <Destinations />
    </>
  );
};

export default DestinationsPage;

