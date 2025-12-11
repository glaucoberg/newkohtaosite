import Activities from "@/components/Activities";
import PageTitle from "@/components/PageTitle";
import { useLanguage } from "@/contexts/LanguageContext";

const ActivitiesPage = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <PageTitle 
        title={t("activities.title")} 
        description={t("activities.description")}
      />
      <Activities />
    </>
  );
};

export default ActivitiesPage;

