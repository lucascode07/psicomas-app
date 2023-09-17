import MainSection from "@/components/organism/main-section/main-section";
import SectionProfessionals from "@/components/organism/section-professionals/section-professionals";
import ServicesSection from "@/components/organism/section-services/section-services";
import { getHomePageData } from "@/services/contentful-queries";

export default async function Home() {

  const { mainSection, servicesSection, professionalsSection } = await getHomePageData();

  return (
    <main>
      <MainSection sectionData={mainSection} />
      <ServicesSection sectionData={servicesSection} />
      <SectionProfessionals sectionData={professionalsSection} />
    </main>
  )
}
