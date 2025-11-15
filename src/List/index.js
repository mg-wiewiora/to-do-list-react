import "./style.css"

const List = (props) => (
  <ul className="list">
    {props.tasks.map((task) => (
      <li
        key={task.id}
        className={`list__taskBody${
          task.done && props.hideDone ? " list__taskBody--hidden" : ""
        }`}
      >
        <button className={`list__taskButton list__taskButton--checkMark`}>
          {task.done ? "✓" : ""}
        </button>
        <span className={`list__taskContent${
          task.done ? " list__taskContent--done" : ""
        }`}>
          {task.content}
        </span>
        <button className="list__taskButton list__taskButton--delete">
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default List;
