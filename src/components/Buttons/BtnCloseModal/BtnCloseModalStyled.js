import styled from 'styled-components';

export const BtnCloseStyled = styled.button`
  position: absolute;  
  right: 10px;
  top: 10px;
  display: flex;
  border: none;
  border-radius: 50%;
  background-color: var(--background-main);
  transition: background-color var(--transition-general), rotate var(--transition-general);
  z-index: 1;

  &:hover {
    background-color: var(--background-header);
    rotate: 180deg;
  }
`;
