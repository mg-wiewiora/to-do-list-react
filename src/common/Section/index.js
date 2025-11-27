import { SectionWrapper, MenuContainer, Title, Content } from "./styled";

const Section = ({ title, content, menu, formTitle }) => (
  <SectionWrapper>
    <MenuContainer>
      <Title form={formTitle}>{title}</Title>
      {menu}
    </MenuContainer>
    <Content>{content}</Content>
  </SectionWrapper>
);

export default Section;
