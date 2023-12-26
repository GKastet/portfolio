import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import SectionHero from "../../components/HomePageSections/1-SectionHero/SectionHero";
import SectionSkills from "../../components/HomePageSections/2-SectionSkills/SectionSkills";
import SectionProjects from "../../components/HomePageSections/3-SectionProjects/SectionProjectsWrapper/SectionProjects";
import SectionDocs from "../../components/HomePageSections/4-SectionDocs/SectionDocsWrapper/SectionDocs";
import BtnUp from "../../components/Buttons/BtnUp/BtnUp";
import { PageWrapper } from "../../styles/CommonUsedTags";

const HomePage = ({ lang }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showBtnUp, setShowBtnUp] = useState(false);
  const isTablet = screenWidth >= 744;
  // const isDesktop = screenWidth >= 1160;

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    //
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowBtnUp(true);
      } else {
        setShowBtnUp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    //
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <PageWrapper className="homePage">
      <SectionHero lang={lang} isTablet={isTablet} />
      <SectionSkills lang={lang} isTablet={isTablet} />
      <SectionProjects lang={lang} />
      <SectionDocs lang={lang} />
      {showBtnUp && <BtnUp />}
    </PageWrapper>
  );
};

HomePage.propTypes = {
  lang: PropTypes.string,
};

export default HomePage;
