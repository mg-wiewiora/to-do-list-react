import { useSelector, useDispatch } from "react-redux";
import {
  toggleTaskDone,
  deleteTask,
  selectHideDone,
  selectTasksByQuery,
} from "../../tasksSlice";
import {searchQueryParamName} from "../searchQueryParamName";
import { Tasks, TaskBody, Content, Button, StyledLink } from "./styled";
import { toTask } from "../../../../routes";
import { useQueryParameter } from "../queryParameters";

const List = () => {
  const query = useQueryParameter(searchQueryParamName);
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
            <StyledLink to={toTask({ id: task.id})}>{task.content}</StyledLink>
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
