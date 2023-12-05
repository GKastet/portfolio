import styled from "styled-components";

export const ContactsWrapper = styled.div`
  /* outline: 1px solid red; */
  /* width: 100%;
  max-width: 375px; */
  //margin: auto;
`;

export const AddressBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  /* width: 100%; */
  /* max-width: 375px; */
  /* margin: auto; */

  @media (min-width: 744px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 50px;
  }

  /* @media (min-width: 1160px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 50px;
  } */
`;
