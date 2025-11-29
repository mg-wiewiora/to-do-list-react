import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.color.teal};
  margin: 0 0 0 20px;
  transition: 0.5s;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    flex-basis: 100%;
    margin: 10px;
  }

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }

  &:disabled {
    color: ${({ theme }) => theme.color.silver};
  }
`;