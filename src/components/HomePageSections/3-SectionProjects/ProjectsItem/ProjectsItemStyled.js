import styled from "styled-components";

export const ProjectItem = styled.li`
  width: 300px;
  height: 440px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;  
  background-color: var(--background-project-item);
  color: var(--text-color-navy);
`;

export const ImgThumb = styled.div`
  width: 100%;
  height: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const DescriptionBox = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  letter-spacing: 0.7px;
`;

export const UsedSkillsList = styled.ul`
  /* outline: 1px solid red; */
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;  
  li {
    div {
      width: 30px;
      height: 30px;
      img {
        width: 100%;
        height: 100%;
        fill: white;
        stroke: white;
        color: white;
      }
    }
  }
`;

export const LinksBox = styled.div`
  display: flex;
  gap: 50px;
  margin-top: auto;
`;
