import "./style.css";

const Menu = ({ tasks, hideDone }) =>
  tasks.length > 0 && (
    <div className="menu">
      <button className="menu__button">
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </button>
      <button
        className="menu__button"
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </button>
    </div>
  );

export default Menu;
