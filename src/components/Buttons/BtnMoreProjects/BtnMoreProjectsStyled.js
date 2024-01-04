import styled from "styled-components";

export const BtnBox = styled.div`
  text-align: center;
  padding: 25px 0 0;
`;

export const BtnMoreStyled = styled.button`
  padding: 10px 15px;
  border-radius: 10px;
  border: 1px solid var(--background-project-item);
  background-color: var(--background-projects);
  color: var(--background-project-item);
  transition: color var(--transition-general), border var(--transition-general);
  &:hover {
    scale: 1.01;
    border: 1px solid var(--text-color-red);
    color: var(--text-color-red);
  }
`;
