import styled from "styled-components";

export const ContactsWrapper = styled.div`
  /* outline: 1px solid red; */
`;

export const AddressBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media (min-width: 744px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 50px;
  }
`;
