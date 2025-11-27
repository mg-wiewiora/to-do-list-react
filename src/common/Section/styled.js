import styled from "styled-components";

export const SectionWrapper = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  margin: 10px 0;
  box-shadow: 0 0 5px ${({ theme }) => theme.color.grey};
`;

export const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.color.grey};
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 20px;

  ${({ form }) =>
    form &&
    `
      border-bottom: 1px solid ${(props) => props.theme.color.grey};
      padding: 20px;
    `}
`;

export const Content = styled.div`
  padding: 20px;
`;
