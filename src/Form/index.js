import { useState } from "react";
import "./style.css";

const Form = () => {
  const [taskInput, addTask] = useState("");

  return (
    <form className="form">
      <input
        value={taskInput}
        className="form__input"
        placeholder="Co jest do zrobienia?"
        onChange={({target}) => addTask(target.value)}
      />
      <button className="form__button">Dodaj zadanie</button>
    </form>
  );
};

export default Form;
