import styled from 'styled-components';
//111111111111111111//////////////////////////////////////////////////////////////
// export const OverlayStyled = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   background-color: var(--backdrop-background);
//   backdrop-filter: blur(3.5px);
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// export const ModalContainer = styled.div`
//   outline: 1px solid lightgrey;
//   background-color: var(--text-color-white);
//   max-width: 100vw;
//   /* max-height: 100vh; */
//   box-sizing: border-box;
//   width: 530px;
//   height: 800px;
//   border-radius: 24px;
//   padding: 20px;
//   overflow: auto;
// `;
//22222222222222222222222///////////////////////////////////////////////
// export const OverlayStyled = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   background-color: var(--backdrop-background);
//   backdrop-filter: blur(3.5px);
//   /* overscroll-behavior: contain; */
//   /* overflow: auto;   */
//   div {
//     margin-top: 100px;
//     outline: 1px solid lightgrey;
//     position: absolute;
//     left: 50%;
//     top: 50%;
//     transform: translate(-50%, -50%);    
//     background-color: var(--text-color-white);
//     max-width: 100vw;
//     max-height: 100vh;
//     box-sizing: border-box;
//     width: 460px;
//     height: 640px;
//     /* width: 600px;
//     height: 750px; */
//     border-radius: 24px;
//     padding: 15px;
//     overflow: auto;
//   }
// `;
//33333333333
export const OverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--backdrop-background);
  backdrop-filter: blur(3.5px);
  overscroll-behavior: contain;
  /* overflow: auto;   */  
  div {    
    outline: 1px solid lightgrey;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);    
    background-color: var(--text-color-white);
    max-width: 100vw;
    max-height: 100vh;
    box-sizing: border-box;
    width: 440px;
    height: 570px;    
    border-radius: 24px;
    padding: 15px;
    overflow: auto;
  }
`;