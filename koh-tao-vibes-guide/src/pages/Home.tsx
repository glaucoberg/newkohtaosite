import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import PageTitle from "@/components/PageTitle";
import { useLanguage } from "@/contexts/LanguageContext";

const Home = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <PageTitle 
        title={t("hero.title")} 
        description={t("hero.description")}
      />
      <Hero />
      <Newsletter />
    </>
  );
};

export default Home;

