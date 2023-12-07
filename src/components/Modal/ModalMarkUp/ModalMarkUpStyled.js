import styled from "styled-components";

export const ModalContainer = styled.div`
  outline: 1px solid red;
  height: 100%;
  width: 100%;
  position: relative;
`;

export const ImgThumb = styled.div`
outline: 1px solid green;
  width: 100%;
  height: 100%;
  img {
    outline: 1px solid green;
    width: 100%;
    height: 100%;
    object-fit: contain;
    /* object-fit: cover; */
  }
`;
