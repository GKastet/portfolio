import styled from "styled-components";

export const ContactsList = styled.ul`
display: flex;
flex-direction: column;
gap: 15px;
`

export const ContactItem = styled.li`
  a {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--fill-color-blue);
    fill: var(--fill-color-blue);
    transition: fill var(--transition-general), color var(--transition-general);
    font-size: 20px;
    svg {
      width: 30px;
      height: 30px;
    }

    &:hover {
      fill: var(--fill-color-red);
      color: var(--fill-color-red);
      scale: 1.01;
    }
  }
`;