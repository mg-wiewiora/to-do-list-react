import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone, deleteTask } from "../tasksSlice";
import { Tasks, TaskBody, Content, Button } from "./styled";

const List = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <Tasks>
      {tasks.map((task) => (
        <TaskBody key={task.id} $hidden={task.done && hideDone}>
          <Button $checkMark onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✓" : ""}
          </Button>
          <Content $done={task.done}>{task.content}</Content>
          <Button $delete onClick={() => dispatch(deleteTask(task.id))}>
            🗑
          </Button>
        </TaskBody>
      ))}
    </Tasks>
  );
};

export default List;
