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
  width: 100%;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px; */
  /* padding: 0px 100px; */

  &.skills,
  &.docs,
  &.projects {
    flex-direction: column;
  }
  &.projects {
    background-color: var(--background-projects);
    padding: 20px 0;
  }

  /* @media (min-width: 744px) {
    flex-direction: row;
    justify-content: center;
    gap: 0px;
    justify-content: space-between;
    align-items: center;
  } */
  /* @media (min-width: 1160px) {
    gap: 20px;
    flex-direction: row;
    justify-content: center;
    justify-content: space-between;
    align-items: center;
  } */
`;

export const SectionBox = styled.div`
  outline: 1px solid red;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  @media (min-width: 744px) {
    padding: 0 10px;
    flex-direction: row;
    justify-content: space-between;
    max-width: 910px;
    gap: 0px;
    &.skillsbox{
      gap: 10px;
    }
    /* justify-content: space-between; */
    /* align-items: center; */
  }
  @media (min-width: 1160px) {
    width: 100%;
    max-width: 1280px;
    justify-content: space-around;
    gap: 20px;
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
