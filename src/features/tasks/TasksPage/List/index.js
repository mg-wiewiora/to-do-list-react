import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  toggleTaskDone,
  deleteTask,
  selectHideDone,
  selectTasksByQuery,
} from "../../tasksSlice";
import {searchQueryParamName} from "../searchQueryParamName";
import { Tasks, TaskBody, Content, Button } from "./styled";

const List = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  const tasks = useSelector((state) => selectTasksByQuery(state, query));
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
            <Link to={`/zadania/${task.id}`}>{task.content}</Link>
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
