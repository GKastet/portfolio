import styled from "styled-components";
import { MdZoomOutMap } from "react-icons/md";

export const ButtonS = styled.button`
  background-color: transparent;
`;

export const IconZoomDoc = styled(MdZoomOutMap)`
  width: 30px;
  height: 30px;
  fill: var(--fill-color-blue);
  transition: fill var(--transition-general);
  &:hover {
    fill: var(--fill-color-red);
  }
`;
