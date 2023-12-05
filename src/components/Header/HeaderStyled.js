import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderS = styled.header`  
  width: 100%;
  display: flex;
  justify-content: center;
  color: var(--text-color-violet);
  background-color: var(--background-header-white);  
  background-image: linear-gradient(
    to bottom,
    var(--background-header),
    var(--background-main)
  );
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const HeaderBox = styled.div`  
  padding: var(--page-padding-s);
  width: 100%;
  max-width: 500px;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  color: var(--text-color-navy);
  @media (min-width: 744px) {
    padding: var(--page-padding-m);
    max-width: 910px;
    height: 83px;
  }
  @media (min-width: 1160px) {    
    max-width: 1160px;    
  }
`;

export const LogoLink = styled(Link)`  
  display: flex;
  align-items: center;  
  color: var(--text-color-blue);
  img {
    width: 30px;
    height: 30px;
    @media (min-width: 744px) {
      width: 38px;
      height: 38px;
    }
  }
  h2 {
    font-size: 22px;
    margin-right: 6px;    
    @media (min-width: 744px) {
      font-size: 34px;
      }
    
  }
  div {
    &.logo {
      display: flex;
      flex-direction: column;
      @media (min-width: 744px) {
        flex-direction: row;        
        align-items: center;
      }
    }
    transition: color var(--transition-general);
    p {
      font-size: 14px;
      @media (min-width: 744px) {
        font-size: 18px;
      }
    }
  }
  &:hover {
    div {
      color: var(--text-color-red);
    }
  }
`;

export const SectionS = styled.div`  
  display: flex;
  gap: 10px;
  a {
    cursor: pointer;    
    color: var(--text-color-blue);
    transition: color var(--transition-general);
    &:hover {
      color: var(--text-color-red);
    }
  }
  @media (min-width: 744px) {
    font-size: 18px;
  }
`;

export const NavLinkBox = styled.div`  
  display: flex;
  align-items: center;
  gap: 6px;  
  @media (min-width: 744px) {
    font-size: 18px;
    gap: 10px;
  }
`;
export const NavLinkS = styled(NavLink)`
  font-size: 14px;  
  transition: color 350ms linear;  
  color: var(--text-color-blue);
  &:hover {
    color: var(--text-color-red);
  }
  &.active {
    color: var(--text-color-red);
  }
  @media (min-width: 744px) {
    font-size: 18px;    
  }
`;
