import styled from "styled-components";

export const ProjectstList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  @media (min-width: 1160px) {
    row-gap: 50px;
    column-gap: 70px;
  }
`;
