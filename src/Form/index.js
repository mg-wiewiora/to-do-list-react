import { useState } from "react";
import { Wrapper, Input, Button } from "./styled";

const Form = ({ addTask }) => {
  const [taskInput, setTaskInput] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedTask = taskInput.trim();

    if (trimmedTask === "") {
      return;
    }

    addTask(trimmedTask);
    setTaskInput("");
  };

  return (
    <FormWrapper onSubmit={onFormSubmit}>
      <Input
        value={taskInput}
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setTaskInput(target.value)}
      />
      <Button>Dodaj zadanie</Button>
    </FormWrapper>
  );
};

export default Form;
