import MainSection from "@/components/organism/main-section/main-section";
import SectionAttention from "@/components/organism/section-attention/section-attention";
import SectionProfessionals from "@/components/organism/section-professionals/section-professionals";
import ServicesSection from "@/components/organism/section-services/section-services";
import { getHomePageData } from "@/services/contentful-queries";

export default async function Home() {

  const {
    mainSection,
    servicesSection,
    professionalsSection,
    attentionSection
  } = await getHomePageData();

  return (
    <main>
      <MainSection sectionData={mainSection} />
      <ServicesSection sectionData={servicesSection} />
      <SectionProfessionals sectionData={professionalsSection} />
      <SectionAttention sectionData={attentionSection} />
    </main>
  )
}
