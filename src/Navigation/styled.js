import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.nav`
    background-color: ${({ theme }) => theme.color.teal};
    padding: 10px;
`;

export const StyledNavLink = styled(NavLink)`
    color: ${({ theme }) => theme.color.white};
    text-decoration: none;

    &:hover {
        border-bottom: 1px solid ${({ theme }) => theme.color.white};
    }
    &.active {
        font-weight: bold;
    }

`;

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
`;

export const Item = styled.li`
    margin: 20px;
`;