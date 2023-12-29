import styled from "styled-components";

export const PageWrapper = styled.main`
  /* outline: 1px solid yellow; */
  margin-top: 50px;  
  padding: 70px 0px 50px;

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
  width: 100%;
  padding: 20px 0 0;
  &.skills,
  &.docs,
  &.projects {
    flex-direction: column;
  }
  &.projects {
    background-color: var(--background-projects);
    padding: 20px 0;
  }  
`;

export const SectionBox = styled.div`  
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
    &.projectsbox,
    &.docsbox {
      display: block;
    }    
  }
  @media (min-width: 1160px) {
    width: 100%;
    max-width: 1280px;
    justify-content: space-around;
    gap: 20px;
  }
`;

export const SectionTitle = styled.h2`  
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
