import styled from "styled-components";

export const PageWrapper = styled.main`
  outline: 1px solid yellow;
  padding: 70px 70px;
  &.homePage {
    display: flex;
    flex-direction: column;
    gap: 70px;
  }
`;

export const SectionS = styled.section`
  outline: 1px solid green;
  display: flex;
  flex-direction: column;

  &.skills{
    flex-direction: column;
  }

  @media (min-width: 744px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
