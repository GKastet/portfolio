import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterS = styled.footer`
  outline: 1px solid red;
  width: 100%;
  height: 444px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--background-main);
  background-color: transparent;
  /* background-image: linear-gradient(to bottom, var(--background-header) , var(--background-main) 50%); */
  background-image: url("../../../imgs/wave.svg");
  /* background-image: url("../../../imgs/wave-mobile.svg"); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 0%;
  /* background-image: linear-gradient(
    to bottom,
    var(--background-main),
    var(--background-header)    
  ); */
  color: var(--text-color-white);
`;

export const FooterBox = styled.div`  
  width: 100%;
  max-width: 910px;
  height: 100px;
  margin-top: 170px;
  margin-bottom: 100px;
  display: flex;
  justify-content: space-between;
`;

export const SocialBox = styled.div`  
  width: 300px;
  h3 {
    margin-bottom: 34px;
    font-size: 20px;
    font-weight: 500;
  }
`;

export const IconListUl = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const SocialLink = styled(Link)`
  width: 30px;
  height: 30px;
  svg {
    fill: var(--fill-color-white);
    color: var(--fill-color-white);
    width: 100%;
    height: 100%;
    transition: fill var(--transition-general), color var(--transition-general);
    &:hover {
      fill: var(--fill-color-red);
      color: var(--fill-color-red);
    }
  }
`;

export const GitBox = styled.div`  
  width: 300px;
  h3 {
    margin-bottom: 34px;
    font-size: 20px;
    font-weight: 500;
  }
`;

export const GitLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-color-white);
  fill: var(--fill-color-white);
  transition: fill var(--transition-general), color var(--transition-general);
  &:hover {
    fill: var(--fill-color-red);
    color: var(--fill-color-red);
  }
  svg {
    width: 30px;
    height: 30px;
  }
`;

export const BottomTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    display: inline-flex;
    gap: 10px;
    font-size: 12px;
    letter-spacing: 1px;
    a{
      color: var(--text-color-white);
      text-decoration: underline;
      transition: color var(--transition-general);
      &:hover{
        color: var(--text-color-red);
      }
    }
  }
`;
