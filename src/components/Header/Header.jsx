// import { Link } from "react-router-dom";
import { Link} from 'react-scroll';
import { HeaderS, HeaderBox, LogoLink, SectionS, NavLinkBox, NavLinkS } from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderS>
      <HeaderBox>        
          <LogoLink to="/">
            <img src="../../../public/portfolio.svg" alt="logo"/>
            <h2>KG</h2>
            <div>
              <p>Konstantin Goncharenko</p>
              <p>Full-stack developer</p>
            </div>
          </LogoLink>        
        <SectionS>
            <Link to="skills" smooth={true} duration={500}>Skills</Link>
            <Link to="projects" smooth={true} duration={500}>Projects</Link>
            <Link to="mailme" smooth={true} duration={500}>Mail me</Link>
        </SectionS>
        <NavLinkBox>
          <NavLinkS to='/'>Main</NavLinkS>
          <NavLinkS to='/contacts'>Contacts</NavLinkS>
        </NavLinkBox>
      </HeaderBox>
    </HeaderS>
  );
};

export default Header;
