import { PageWrapper } from "../../styles/CommonUsedTags";
import SectionHero from "../../components/HomePageSections/1-SectionHero/SectionHero";
import SectionSkills from "../../components/HomePageSections/2-SectionSkills/SectionSkills";
import SectionProjects from "../../components/HomePageSections/3-SectionProjects/SectionProjects";


const HomePage = () => {
  
  return (
    <PageWrapper className="homePage">      
      <SectionHero/>
      <SectionSkills/>
      <SectionProjects/>
      
      
    </PageWrapper>
  );
};

export default HomePage;