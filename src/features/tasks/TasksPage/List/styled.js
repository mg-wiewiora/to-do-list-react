import styled, { css } from "styled-components";

export const StyledLink = styled

export const Tasks = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const TaskBody = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  padding: 10px;
  align-items: center;
  border-bottom: 1px solid #ddd;

  ${({ $hidden }) =>
    $hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ $done }) =>
    $done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.color.white};
  border: none;
  padding: 0;
  height: 30px;
  width: 30px;
  cursor: pointer;

  ${({ $checkMark }) =>
    $checkMark &&
    css`
      background-color: ${({ theme }) => theme.color.green};
      transition: 0.5s;

      &:hover {
        filter: brightness(110%);
      }

      &:active {
        filter: brightness(120%);
      }
    `}

  ${({ $delete }) =>
    $delete &&
    css`
      background-color: ${({ theme }) => theme.color.red};
      transition: 0.5s;
      &:hover {
        filter: brightness(110%);
      }

      &:active {
        filter: brightness(120%);
      }
    `}
`;
