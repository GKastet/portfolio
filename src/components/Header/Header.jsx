import PropTypes from "prop-types";
import { Link as ScrollLink} from "react-scroll";
import {
  HeaderS,
  HeaderBox,
  LogoLink,
  SectionS,
  NavLinkBox,
  NavLinkS,
} from "./HeaderStyled";
import LogoPortfolio from "../../images/portfolio.svg";
import SelectLang from "../SelectLang/SelectLang";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Header = ({ lang, changeLanguage }) => {
  const location = useLocation()
  const pageLocation = location.pathname === '/'
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const isDesktop = screenWidth >= 1160;

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
    <HeaderS>
      <HeaderBox>
        <LogoLink to="/">
          <div className="logo">
            <img src={LogoPortfolio} alt="logo" />
            <h2>GK</h2>
          </div>
          <div>
            {lang === "eng" && <p>Konstantin Goncharenko</p>}
            {lang === "sk" && <p>Konstantin Gončarenko</p>}
            {lang === "ua" && <p>Костянтин Гончаренко</p>}
            <p>Full-stack developer</p>
          </div>
        </LogoLink>
        {(isDesktop&&pageLocation) && (
          <SectionS>
            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}              
            >
              {lang === "eng" && "Skills"}
              {lang === "sk" && "Skily"}
              {lang === "ua" && "Скіли"}
            </ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={500}>
              {lang === "eng" && "Projects"}
              {lang === "sk" && "Projekty"}
              {lang === "ua" && "Проекти"}
            </ScrollLink>
            <ScrollLink to="docs" smooth={true} duration={500}>
              {lang === "eng" && "Docs"}
              {lang === "sk" && "Doky"}
              {lang === "ua" && "Доки"}
            </ScrollLink>
          </SectionS>
        )}
        <NavLinkBox>
          <NavLinkS to="/">
            {lang === "eng" && "Main"}
            {lang === "sk" && "Hlavná"}
            {lang === "ua" && "Головна"}
          </NavLinkS>
          <NavLinkS to="/contacts">
            {lang === "eng" && "Contacts"}
            {lang === "sk" && "Kontakty"}
            {lang === "ua" && "Контакти"}
          </NavLinkS>
          <SelectLang lang={lang} changeLanguage={changeLanguage} />
        </NavLinkBox>
      </HeaderBox>
    </HeaderS>
  );
};

Header.propTypes = {
  lang: PropTypes.string,
  changeLanguage: PropTypes.func,
};

export default Header;
