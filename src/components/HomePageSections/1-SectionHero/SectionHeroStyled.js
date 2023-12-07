import styled from "styled-components";

export const TextIntroduction = styled.div`
  width: 100%;
  max-width: var(--max-width-s);
  display: flex;
  flex-direction: column;
  h1 {
    color: var(--text-color-navy);
    margin-bottom: 16px;
  }
  h3 {
    color: var(--text-color-navy);
    margin-bottom: 16px;
    span {
      font-weight: 800;
    }
  }
  a {
    margin: auto;
    padding: 10px 15px;
    text-align: center;
    background-color: var(--background-color-red);
    color: var(--text-color-white);
    border-radius: 10px;
    transition: background-color var(--transition-general),
      color var(--transition-general);
    &:hover {
      scale: 1.02;
      background-color: var(--background-projects);
      color: var(--text-color-red);
    }
  }

  @media (min-width: 1160px) {
    max-width: 500px;
  }
`;
export const FotoIntroduction = styled.div`
  position: relative;
  width: 100%;
  max-width: var(--max-width-s);
  height: 320px;
  display: flex;

  @media (min-width: 744px) {
    max-width: 412px;
    height: 495px;
  }
`;

export const ImgThumb = styled.div`
  outline: 1px solid var(--background-header);
  width: 234px;
  height: 280px;
  margin: auto;
  overflow: hidden;
  border-radius: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (min-width: 744px) {
    width: 320px;
    height: 390px;
    border-radius: 28px;
  }
`;

export const PhotoSVG = styled.div`
  position: absolute;
  &.zigZag {
    top: 15px;
    width: 22px;
    height: 60px;
    @media (min-width: 744px) {
      top: 30px;
      width: 38px;
      height: 98px;
    }
  }
  &.plus {
    left: 100px;
    width: 15px;
    height: 16px;
    @media (min-width: 744px) {
      left: 130px;
      width: 27px;
      height: 28px;
    }
  }
  &.cube {
    right: 0px;
    width: 24px;
    height: 24px;
    @media (min-width: 744px) {
      width: 41px;
      height: 41px;
    }
  }
  &.ellipse {
    left: 10px;
    bottom: 10px;
    width: 13px;
    height: 14px;
    @media (min-width: 744px) {
      left: 20px;
      bottom: 20px;
      width: 22px;
      height: 23px;
    }
  }
  &.circles {
    right: 0px;
    bottom: 0px;
    width: 105px;
    height: 66px;
    @media (min-width: 744px) {
      width: 120px;
      height: 76px;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
