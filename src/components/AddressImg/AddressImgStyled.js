import styled from "styled-components";

export const ImgThumb = styled.div`
  width: 310px;
  height: 210px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media (min-width: 1160px) {
    width: 500px;
    height: 370px;
  }
`;
