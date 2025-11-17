import { useState } from "react";
import Form from "./Form";
import List from "./List";
import Menu from "./Menu";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setList] = useState([
    { id: 1, content: "przejsć na Reacta", done: false },
    { id: 2, content: "wypić kawę", done: true },
  ]);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const deleteTask = (id) => {
    setList((tasks) => tasks.filter((task) => task.id != id));
  };

  return (
    <Container className="container">
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" content={<Form />} />
      <Section
        title="Lista zadań"
        menu={
          <Menu
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
          />
        }
        content={
          <List tasks={tasks} hideDone={hideDone} deleteTask={deleteTask} />
        }
      />
    </Container>
  );
}

export default App;
