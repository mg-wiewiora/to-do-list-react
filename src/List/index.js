const List = (props) => {
  <ul className="list"></ul>;
  {
    props.tasks.map((task) => <li>{task.content}</li>);
  }
};

export default List;
