import styled from "styled-components";

export const OverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--backdrop-background);
  backdrop-filter: blur(3.5px);  
  overflow: auto;
`;

export const ModalContainer = styled.div`
  margin-top: 20px;
  outline: 1px solid lightgrey;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--text-color-white);
  max-width: 100vw;
  /* max-height: 100vw; */
  box-sizing: border-box;
  width: 440px;
  max-height: 614px;
  border-radius: 24px;
  padding: 15px;
  /* overflow: auto; */
  @media (min-width: 744px) {
    max-height: 1010px;
    margin-top: 230px;
    width: 720px;
    height: 1160px;
  }
`;
//on git do not touch!!!!!!!!!!!!!!!!
// export const OverlayStyled = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   background-color: var(--backdrop-background);
//   backdrop-filter: blur(3.5px);
//   overscroll-behavior: contain;
//   div {
//     outline: 1px solid lightgrey;
//     position: absolute;
//     left: 50%;
//     top: 50%;
//     transform: translate(-50%, -50%);
//     background-color: var(--text-color-white);
//     max-width: 100vw;
//     max-height: 100vh;
//     box-sizing: border-box;
//     width: 440px;
//     height: 570px;
//     border-radius: 24px;
//     padding: 15px;
//     overflow: auto;
//   }
// `;
