import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink).attrs(props => ({
    activeClassName: "active",
}))`
  &.active {
    color: ${({ theme }) => theme.color.red};
  }
`;
