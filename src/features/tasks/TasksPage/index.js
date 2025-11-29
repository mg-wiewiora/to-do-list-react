import Form from "./Form";
import List from "./List";
import Menu from "./Menu";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "../../../common/Container/styled";

function TasksPage() {
  return (
    <Container>
      <Header title="Lista zadań" />

      <Section title="Dodaj nowe zadanie" content={<Form />} />

      <Section title="Lista zadań" menu={<Menu />} content={<List />} />
    </Container>
  );
}

export default TasksPage;
