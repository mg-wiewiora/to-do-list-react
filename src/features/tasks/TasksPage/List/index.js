import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  toggleTaskDone,
  deleteTask,
  selectTasks,
  selectHideDone,
} from "../../tasksSlice";
import { Tasks, TaskBody, Content, Button } from "./styled";

const List = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <Tasks>
      {tasks.map((task) => (
        <TaskBody key={task.id} $hidden={task.done && hideDone}>
          <Button $checkMark onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✓" : ""}
          </Button>
          <Content $done={task.done}>
            <Link to={`/zadania${task.id}`} />
            {task.content}
          </Content>
          <Button $delete onClick={() => dispatch(deleteTask(task.id))}>
            🗑
          </Button>
        </TaskBody>
      ))}
    </Tasks>
  );
};

export default List;
