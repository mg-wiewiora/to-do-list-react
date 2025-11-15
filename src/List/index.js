const List = (props) => (
  <ul className="list">
    {props.tasks.map((task) => (
      <li
        key={task.id}
        className={`list__taskBody${
          task.done && props.hideDone ? " list__taskBody--hidden" : ""
        }`}
      >
        {task.content}
      </li>
    ))}
  </ul>
);

export default List;
