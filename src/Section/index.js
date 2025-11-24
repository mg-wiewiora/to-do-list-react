import { SectionWrapper, MenuContainer, Title, Content } from "./styled";

const Section = ({ title, content, menu }) => (
  <SectionWrapper>
    <MenuContainer>
      <Title>{title}</Title>
      {menu}
    </MenuContainer>
    <Content>{content}</Content>
  </SectionWrapper>
);

export default Section;
