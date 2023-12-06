import styled from "styled-components";

export const DocItem = styled.li`
  width: 220px;
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const ImgThumb = styled.div`
  width: 100%;
  height: 80%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const DocOptionsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  p {
    font-size: 20px;
    font-weight: bold;
    color: var(--text-color-navy);
  }
`;

export const DocButtonsBox = styled.div`
  display: flex;
  gap: 70px;
`;
