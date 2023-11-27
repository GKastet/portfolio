import styled from "styled-components";

export const SectionTitle = styled.h2`
  margin: auto;
  color: var(--text-color-red);
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: bold;
`;

export const SectionBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const SkillsBox = styled.div`
  outline: 1px solid green;
  width: 100%;
  max-width: 500px;
  p {
    color: var(--text-color-navy);
    margin-bottom: 40px;
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
  width: 511px;
  height: 414px;
`;
