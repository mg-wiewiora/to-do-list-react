import "./style.css";

const List = ({ tasks, hideDone, deleteTask, toggleTaskDone }) => (
  <ul className="list">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`list__taskBody${
          task.done && hideDone ? " list__taskBody--hidden" : ""
        }`}
      >
        <button
          className={`list__taskButton list__taskButton--checkMark`}
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✓" : ""}
        </button>
        <span
          className={`list__taskContent${
            task.done ? " list__taskContent--done" : ""
          }`}
        >
          {task.content}
        </span>
        <button
          className="list__taskButton list__taskButton--delete"
          onClick={() => deleteTask(task.id)}
        >
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default List;
