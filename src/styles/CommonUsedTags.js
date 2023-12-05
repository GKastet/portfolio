import styled from "styled-components";

export const PageWrapper = styled.main`
  /* outline: 1px solid yellow; */
  margin-top: 50px;
  /* padding: 70px 70px; */
  padding: 70px 0px;

  &.homePage {
    display: flex;
    flex-direction: column;
    gap: 70px;
  }
  /* &.contactsPage {
    display: flex;
  } */
`;

export const SectionS = styled.section`
  /* outline: 1px solid green; */
  display: flex;
  flex-direction: column;
  padding: 0px 100px;
  &.skills,
  &.docs,
  &.projects {
    flex-direction: column;
  }
  &.projects {
    background-color: var(--background-projects);
    padding: 20px 0;
  }

  @media (min-width: 744px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const SectionTitle = styled.h2`
  /* outline: 1px solid yellow; */
  margin: auto;
  text-align: center;
  color: var(--text-color-red);
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: bold;
  &.pageContacts {
    margin-bottom: 50px;
    @media (min-width: 744px) {
      margin-bottom: 70px;
    }
  }
`;
