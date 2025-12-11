import DiveSites from "@/components/DiveSites";
import PageTitle from "@/components/PageTitle";
import { useLanguage } from "@/contexts/LanguageContext";

const Diving = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <PageTitle 
        title={t("diveSites.title")} 
        description={t("diveSites.description")}
      />
      <DiveSites />
    </>
  );
};

export default Diving;

