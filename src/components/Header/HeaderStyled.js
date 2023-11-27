import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderS = styled.header`
  /* outline: 1px solid red; */
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: var(--background-main);
  /* background-image: linear-gradient(to bottom, var(--background-header) , var(--background-main) 50%); */
  background-image: linear-gradient(
    to bottom,
    var(--background-header),
    var(--background-main)
  );
`;

export const HeaderBox = styled.div`
  outline: 1px solid red;
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
    max-width: 1440px;
    height: 83px;
  }
`;

export const LogoLink = styled(Link)`
  /* outline: 1px solid green; */
  display: flex;
  align-items: center;

  img {
    width: 38px;
    height: 38px;
  }
  h2 {
    font-size: 40px;
    margin-right: 6px;
    /* color: var(--text-color-navy); */
  }
`;

export const SectionS = styled.div`
  /* outline: 1px solid green; */
  display: flex;
  gap: 10px;
  a{
    cursor: pointer;    
  }
  @media (min-width: 744px) {
    font-size: 18px;
  }
`;

// export const SectionS = styled.div`
//   /* outline: 1px solid green; */
//   display: flex;
//   gap: 10px;
//   p{
//     cursor: pointer;
//   }
//   @media (min-width: 744px) {
//     font-size: 18px;
//   }
// `;

export const NavLinkBox = styled.div`
  /* outline: 1px solid green; */
  display: flex;
  gap: 10px;
  @media (min-width: 744px) {
    font-size: 18px;
  }
`;
export const NavLinkS = styled(NavLink)`
  /* font-size: 14px;
  font-weight: 700; */
  transition: color 350ms linear;
  //color: var(--mainNavLogo);

  &:hover {
    color: var(--text-color-red);
  }
  &.active {
    color: var(--text-color-red);
  }
  
`;
