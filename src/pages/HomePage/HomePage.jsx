import PropTypes from "prop-types";
import { PageWrapper } from "../../styles/CommonUsedTags";
import SectionHero from "../../components/HomePageSections/1-SectionHero/SectionHero";
import SectionSkills from "../../components/HomePageSections/2-SectionSkills/SectionSkills";
import SectionProjects from "../../components/HomePageSections/3-SectionProjects/SectionProjectsWrapper/SectionProjects";
import SectionDocs from "../../components/HomePageSections/4-SectionDocs/SectionDocs";


const HomePage = ({lang}) => {
  // console.log('lang: ', lang);
  
  return (
    <PageWrapper className="homePage">      
      <SectionHero lang={lang}/>
      <SectionSkills lang={lang}/>
      <SectionProjects lang={lang}/>
      <SectionDocs lang={lang}/>
    </PageWrapper>
  );
};

HomePage.propTypes = {
  lang: PropTypes.string,
};

export default HomePage;