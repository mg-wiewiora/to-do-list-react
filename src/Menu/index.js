import "./style.css";

const Menu = ({ tasks, hideDone, toggleHideDone, markAllAsDone }) => (
  <div className="menu">
    {tasks.length > 0 && (
      <>
        <button onClick={toggleHideDone} className="menu__button">
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </button>
        <button
          onClick={markAllAsDone}
          className="menu__button"
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </button>
      </>
    )}
  </div>
);

export default Menu;
