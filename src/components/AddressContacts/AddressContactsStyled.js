import styled from "styled-components";

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 310px;
  @media (min-width: 1160px) {
    width: 500px;
    gap: 20px;
  }
`;

export const ContactItem = styled.li`
  a {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--text-color-blue);
    fill: var(--fill-color-blue);
    transition: fill var(--transition-general), color var(--transition-general);
    font-size: 18px;
    svg {
      width: 30px;
      height: 30px;
    }

    &:hover {
      color: var(--text-color-red);
      fill: var(--fill-color-red);
      scale: 1.01;
    }
    @media (min-width: 1160px) {
      font-size: 22px;
    }
  }
`;
