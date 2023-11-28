import PropTypes from "prop-types";
import { Link } from "react-scroll";
import {
  HeaderS,
  HeaderBox,
  LogoLink,
  SectionS,
  NavLinkBox,
  NavLinkS,
} from "./HeaderStyled";
import LogoPortfolio from "../../../public/portfolio.svg";
import SelectLang from "../SelectLang/SelectLang";

const Header = ({ lang, changeLanguage }) => {
  // console.log("lang: ", lang);
  return (
    <HeaderS>
      <HeaderBox>
        <LogoLink to="/">
          <img src={LogoPortfolio} alt="logo" />
          <h2>KG</h2>
          <div>
            {lang === "eng" && <p>Konstantin Goncharenko</p>}
            {lang === "sk" && <p>Konstantin Gončarenko</p>}
            {lang === "ua" && <p>Костянтин Гончаренко</p>}            
            <p>Full-stack developer</p>
          </div>
        </LogoLink>
        <SectionS>
          <Link to="skills" smooth={true} duration={500}>
            {lang === "eng" && "Skills"}
            {lang === "sk" && "Skily"}
            {lang === "ua" && "Скіли"}
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            {lang === "eng" && "Projects"}
            {lang === "sk" && "Projekty"}
            {lang === "ua" && "Проекти"}
          </Link>
          <Link to="docs" smooth={true} duration={500}>
            {lang === "eng" && "Docs"}
            {lang === "sk" && "Doky"}
            {lang === "ua" && "Доки"}
          </Link>
        </SectionS>
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
