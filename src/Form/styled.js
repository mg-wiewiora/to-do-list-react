import styled from "styled-components";

export const FormWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.color.grey};
  padding: 10px;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color.teal};
  color: ${({ theme }) => theme.color.white};
  border: none;
  padding: 10px;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    filter: brightness(110%);
    transform: scale(1.1);
  }

  &:active {
    filter: brightness(120%);
  }
`;
