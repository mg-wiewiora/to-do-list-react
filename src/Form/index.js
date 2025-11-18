import { useState } from "react";
import "./style.css";

const Form = ({ addTask }) => {
  const [taskInput, setTaskInput] = useState("");
  const onFormSubmit = (event) => {
    event.preventDefault();
    addTask(taskInput.trim());
    setTaskInput("");
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        value={taskInput}
        className="form__input"
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setTaskInput(target.value)}
      />
      <button className="form__button">Dodaj zadanie</button>
    </form>
  );
};

export default Form;
