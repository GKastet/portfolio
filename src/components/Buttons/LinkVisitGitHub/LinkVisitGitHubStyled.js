import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkWeb = styled(Link)`
  svg {
    width: 30px;
    height: 30px;
    fill: var(--fill-color-navy);
    transition: fill var(--transition-general);
    &:hover {
        fill: var(--fill-color-red);
    }
  }
`;
