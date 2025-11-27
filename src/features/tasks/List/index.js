import { Tasks, TaskBody, Content, Button } from "./styled";

const List = ({ tasks, hideDone, deleteTask, toggleTaskDone }) => (
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

export default List;
