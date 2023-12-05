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
gap: 50px;
/* width: 100%; */
  /* max-width: 375px; */
  /* margin: auto; */

@media (min-width: 744px){
  flex-direction: row;
  gap: 70px;
}
`