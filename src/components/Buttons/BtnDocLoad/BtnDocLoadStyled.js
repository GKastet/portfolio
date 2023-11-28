import styled from "styled-components";
import { FiDownload } from "react-icons/fi";

export const IconLoadDoc = styled(FiDownload)`
  width: 30px;
  height: 30px;
  stroke: var(--fill-color-blue);
  transition: stroke var(--transition-general);
  &:hover {
    stroke: var(--fill-color-red);
  }
`;
