import styled from "styled-components";

// export const SectionS = styled.section`
//   outline: 1px solid green;
//   display: flex;
//   flex-direction: column;

//   @media (min-width: 744px) {
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: center;
//   }
// `;

export const TextIntroduction = styled.div`
  outline: 1px solid red;
  width: 100%;
  max-width: 298px;

  @media (min-width: 744px) {
    max-width: 500px;
  }
`;
export const FotoIntroduction = styled.div`
  outline: 1px solid red;
  position: relative;
  width: 100%;
  max-width: 298px;
  height: 295px;
  display: flex;

  @media (min-width: 744px) {
    max-width: 412px;
    height: 495px;
  }
`;

export const ImgThumb = styled.div`
  width: 320px;
  height: 390px;
  margin: auto;
  overflow: hidden;
  border-radius: 28px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* object-fit: contain; */
    /* object-position: 0% 0%; */
  }
`;

export const PhotoSVG = styled.div`
  position: absolute;
  &.zigZag {
    top: 30px;
    width: 38px;
    height: 98px;
  }
  &.plus {
    left: 130px;
    width: 27px;
    height: 28px;
  }
  &.cube {    
    right: 0px;
    width: 41px;
    height: 41px;
  }
  &.ellipse {    
    left: 20px;
    bottom: 20px;
    width: 22px;
    height: 22px;
  }
  &.circles {    
    right: 0px;
    bottom: 0px;
    width: 120px;
    height: 76px;
  }  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
