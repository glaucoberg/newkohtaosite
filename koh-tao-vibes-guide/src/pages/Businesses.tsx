import BusinessDirectory from "@/components/BusinessDirectory";
import PageTitle from "@/components/PageTitle";
import { useLanguage } from "@/contexts/LanguageContext";

const Businesses = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <PageTitle 
        title={t("businessDirectory.title")} 
        description={t("businessDirectory.description")}
      />
      <BusinessDirectory />
    </>
  );
};

export default Businesses;

