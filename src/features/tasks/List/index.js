import { useSelector } from "react-redux";
import { selectTasks } from "../tasksSlice";
import { Tasks, TaskBody, Content, Button } from "./styled";

const List = ({ deleteTask, toggleTaskDone }) => {
  const { tasks, hideDone } = useSelector(selectTasks);

  return (
    <Tasks>
      {tasks.map((task) => (
        <TaskBody key={task.id} $hidden={task.done && hideDone}>
          <Button $checkMark onClick={() => toggleTaskDone(task.id)}>
            {task.done ? "✓" : ""}
          </Button>
          <Content $done={task.done}>{task.content}</Content>
          <Button $delete onClick={() => deleteTask(task.id)}>
            🗑
          </Button>
        </TaskBody>
      ))}
    </Tasks>
  );
};

export default List;
