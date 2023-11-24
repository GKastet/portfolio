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
            <p>Skills</p>
            <p>Projects</p>
            <p>Mail me</p>
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
