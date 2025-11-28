import Section from "../../common/Section";
import Header from "../../common/Header";
import { Container } from "../../common/Container/styled";

function Author() {
  return (
    <Container>
      <Header title="O autorze" />

      <Section
        title="Małgorzata Wiewióra"
        content={
          <>
            <p>Treść</p>
          </>
        }
      />
    </Container>
  );
}

export default Author;
