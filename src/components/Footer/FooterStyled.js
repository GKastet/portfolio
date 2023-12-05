import { Link } from "react-router-dom";
import styled from "styled-components";
import Wave from "../../images/wave.svg";
import WaveMobile from "../../images/wave-mobile.svg";

export const FooterS = styled.footer`
  /* outline: 1px solid red; */
  width: 100%;
  height: 380px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* justify-content: space-evenly; */
  justify-content: flex-end;
  align-items: center;
  background-color: var(--background-main);
  background-color: transparent;
  background-image: url(${WaveMobile});
  /* background-image: url(${Wave});     */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 100% 0%;
  color: var(--text-color-white);

  @media (min-width: 744px) {
    background-image: url(${Wave});
    /* justify-content: center; */
    justify-content: space-evenly
    /* height: 444px; */
  }
  /* @media (min-width: 1160px) {
    background-image: url(${Wave});
  } */
`;

export const FooterBox = styled.div`
  /* outline: 1px solid red;  */
  width: 100%;
  max-width: 910px;
  /* height: 100px; */
  /* margin-top: 170px; */
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 35px;

  @media (min-width: 744px) {
    flex-direction: row;
    gap: 0px;
    margin-top: 70px;
    margin-bottom: 0px;
  }
`;

export const SocialBox = styled.div`
  width: 300px;
  h3 {
    margin-bottom: 14px;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    @media (min-width: 744px) {
      margin-bottom: 34px;
    }
    @media (min-width: 744px) {
      font-size: 22px;
    }
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
    margin-bottom: 14px;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    @media (min-width: 744px) {
      margin-bottom: 34px;
      font-size: 22px;
    }
  }
`;

export const GitLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
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
  p {
    font-size: 16px;
    letter-spacing: 1px;
    @media (min-width: 744px) {
      font-size: 18px;
    }
  }
`;

export const BottomTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  p {
    display: inline-flex;
    gap: 10px;
    font-size: 12px;
    letter-spacing: 1px;
    a {
      color: var(--text-color-white);
      text-decoration: underline;
      transition: color var(--transition-general);
      &:hover {
        color: var(--text-color-red);
      }
    }
  }
  @media (min-width: 744px) {
    margin-bottom: 0px;
    }
`;
