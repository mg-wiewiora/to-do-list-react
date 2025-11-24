import styled, { css } from "styled-components";

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
  color: white;
  border: none;
  padding: 0;
  height: 30px;
  width: 30px;
  cursor: pointer;

  ${({ $checkMark }) =>
    $checkMark &&
    css`
      background-color: #0a8127;
      transition: 0.5s;

      &:hover {
        background-color: #0b982f;
      }

      &:active {
        background-color: #0daf36;
      }
    `}

  ${({ $delete }) =>
    $delete &&
    css`
      background-color: #e42121;
      transition: 0.5s;
      &:hover {
        background-color: #e74040;
      }

      &:active {
        background-color: #ea5757;
      }
    `}
`;
