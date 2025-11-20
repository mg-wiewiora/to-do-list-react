import { useState } from "react";
import Form from "./Form";
import List from "./List";
import Menu from "./Menu";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const initialTasks = [
  { id: 1, content: "przejsć na Reacta", done: false },
  { id: 2, content: "wypić kawę", done: true },
];

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState(initialTasks);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const deleteTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    );
  };

  const markAllAsDone = () => {
    setTasks((tasks) =>
      tasks.map((task) => ({
        ...task,
        done: true,
      }))
    );
  };

  const addTask = (content) => {
    setTasks((tasks) => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      },
    ]);
  };

  return (
    <Container className="container">
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        content={<Form addTask={addTask} />}
      />
      <Section
        title="Lista zadań"
        menu={
          <Menu
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            markAllAsDone={markAllAsDone}
          />
        }
        content={
          <List
            tasks={tasks}
            hideDone={hideDone}
            deleteTask={deleteTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
      />
    </Container>
  );
}

export default App;
