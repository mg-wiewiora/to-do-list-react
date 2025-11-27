import { useSelector } from "react-redux";
import Form from "./Form";
import List from "./List";
import Menu from "./Menu";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { Container } from "../../common/Container/styled";
import { useTasks } from "../../useTasks";
import { selectTasks } from "./tasksSlice";

function Tasks() {
  const tasksSlice = useSelector(selectTasks);
  const tasks = tasksSlice.tasks;

  const {
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
            markAllAsDone={markAllAsDone}
          />
        }
        content={
          <List
            tasks={tasks}
            deleteTask={deleteTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
      />
    </Container>
  );
}

export default Tasks;
