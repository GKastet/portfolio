import styled from "styled-components";

export const FooterS = styled.footer`
  outline: 1px solid red;
  width: 100%;
  height: 444px;
  display: flex;
  justify-content: center;
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
`;
