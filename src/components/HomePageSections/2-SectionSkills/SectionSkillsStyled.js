import styled from "styled-components";

export const SkillsBox = styled.div`
  outline: 1px solid green;
  width: 100%;
  max-width: var(--max-width-s);
  font-size: 16px;
  p {
    color: var(--text-color-navy);
    margin-bottom: 40px;
  }
  @media (min-width: 744px) {
    max-width: 520px;
    font-size: 18px;
  }
  @media (min-width: 1160px) {
    max-width: 500px;
  }
`;

export const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 20px;
  column-gap: 13px;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    img {
      width: 50px;
      height: 50px;
    }
    p {
      margin-bottom: 0px;
      font-size: 14px;
    }
  }
`;

export const ImgThumbSkills = styled.div`
  outline: 1px solid green;
  width: 100%;
  max-width: var(--max-width-s);
  height: 250px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media (min-width: 1160px) {
    max-width: 512px;
    height: 414px;
  }
`;
