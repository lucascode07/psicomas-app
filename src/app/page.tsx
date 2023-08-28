import MainSection from "@/components/organism/main-section/main-section";
import { getHomePageData } from "@/services/contentful-queries";

export default async function Home() {

  const mainSectionData = await getHomePageData();

  return (
    <main>
      <MainSection sectionData={mainSectionData} />
    </main>
  )
}
