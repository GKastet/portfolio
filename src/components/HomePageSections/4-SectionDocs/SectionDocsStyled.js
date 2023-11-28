import styled from "styled-components";

export const DocsList = styled.ul`
  /* outline: 1px solid orange; */
  display: flex;
  gap: 30px;
`;

export const DocItem = styled.li`
  /* outline: 1px solid red; */
  width: 220px;
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const ImgThumb = styled.div`
  /* outline: 1px solid yellow; */
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
  /* outline: 1px solid yellow; */
  display: flex;
  gap: 70px;
`;
