import MainSection from "@/components/organism/main-section/main-section";
import ServicesSection from "@/components/organism/section-services/section-services";
import { getHomePageData } from "@/services/contentful-queries";

export default async function Home() {

  const { mainSection, servicesSection } = await getHomePageData();

  return (
    <main>
      <MainSection sectionData={mainSection} />
      <ServicesSection sectionData={servicesSection} />
    </main>
  )
}
