import PropTypes from "prop-types";
import { PageWrapper } from "../../styles/CommonUsedTags";
import SectionHero from "../../components/HomePageSections/1-SectionHero/SectionHero";
import SectionSkills from "../../components/HomePageSections/2-SectionSkills/SectionSkills";
import SectionProjects from "../../components/HomePageSections/3-SectionProjects/SectionProjectsWrapper/SectionProjects";
import SectionDocs from "../../components/HomePageSections/4-SectionDocs/SectionDocs";
import { useState } from "react";
import { useEffect } from "react";


const HomePage = ({lang}) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const isTablet = screenWidth >= 744;
  const isDesktop = screenWidth >= 1160;

  console.log('isDesktop: ', isDesktop);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };  

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);    
  
  return (
    <PageWrapper className="homePage">      
      <SectionHero lang={lang} isTablet={isTablet}/>
      <SectionSkills lang={lang}/>
      {/* <SectionProjects lang={lang}/> */}
      {/* <SectionDocs lang={lang}/> */}
    </PageWrapper>
  );
};

HomePage.propTypes = {
  lang: PropTypes.string,
};

export default HomePage;