import styled from "styled-components";

export const ProjectItem = styled.li`
  width: 300px;
  height: 400px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: var(--background-projects-item);
  color: var(--text-color-white);
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

export const LinksBox = styled.div`
  display: flex;
  gap: 50px;
  margin-top: auto;
`;
