import Form from "./Form";
import List from "./List";
import Menu from "./Menu";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { Container } from "../../common/Container/styled";
import { useTasks } from "../../useTasks";

function Tasks() {
  const {
    tasks,
    hideDone,
    toggleHideDone,
    deleteTask,
    toggleTaskDone,
    markAllAsDone,
    addTask,
  } = useTasks();

  return (
    <Container>
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

export default Tasks;
