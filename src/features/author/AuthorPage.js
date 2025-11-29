import Section from "../../common/Section";
import Header from "../../common/Header";
import { Container } from "../../common/Container/styled";

const AuthorPage = () => {
  return (
    <Container>
      <Header title="O autorze" />

      <Section
        title="Małgorzata Wiewióra"
        content={
          <p>
            Hej! Od dawna wiedziałam, że <b>programowanie</b> i Frontend
            Develompment to obszary, które będą sprawiać mi dużo frajdy.
            Uwielbiam grzebać w szegółach i wyłapywaniu błędów, mam dużą
            uważność na detale i dobre poczucie estetyki. Ostatnio interesuję
            się także <b>analizą danych</b>, a także usprawnianiem i
            optymalizacją pracy przy użyciu <b>narzędzi AI</b>. Jeśli znajdę
            czas, zbadam też meandry testowania manualnego.
            <br />
            <strong>Ale to nie wszystko!</strong>
            <br />
            Uwielbiam przyrodę i mam pasiekę. Co za tym idzie, możesz nabyć u
            mnie pyszny, rzemieślniczo wytwarzany miód ☺️.
          </p>
        }
      />
    </Container>
  );
}

export default AuthorPage;
