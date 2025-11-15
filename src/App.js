import Form from "./Form";
import List from "./List";
import Menu from "./Menu";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "przejsć na Reacta", done: false },
  { id: 2, content: "wypić kawę", done: true },
];

const hideDone = false;

function App() {
  return (
    <Container className="container">
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" content={<Form />} />
      <Section
        title="Lista zadań"
        menu={<Menu tasks={tasks} hideDone={hideDone} />}
        content={<List tasks={tasks} hideDone={hideDone} />}
      />
    </Container>
  );
}

export default App;
