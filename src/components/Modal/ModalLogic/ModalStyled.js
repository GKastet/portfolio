import styled from 'styled-components';

export const OverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--backdrop-background);
  backdrop-filter: blur(3.5px);
  overscroll-behavior: contain;
  div {
    outline: 1px solid lightgrey;
    position: absolute;
    left: 50%;
    top: 65%;
    transform: translate(-50%, -65%);
    background-color: var(--text-color-white);
    max-width: 100vw;
    max-height: 100vh;
    box-sizing: border-box;
    width: 400px;//перевірити///////////////////////////////
    height: 550px;//перевірити//////////////////////////////////////
    border-radius: 24px;
    padding: 20px;
  }
`;