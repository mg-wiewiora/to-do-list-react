import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { FormWrapper, Input, Button } from "./styled";
import { addTask } from "../tasksSlice";

const Form = () => {
  const [taskInput, setTaskInput] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedTask = taskInput.trim();
    if (!trimmedTask) return;

    dispatch(
      addTask({
        content: trimmedTask,
        done: false,
        id: nanoid(),
      })
    );

    setTaskInput("");
    inputRef.current.focus();
  };

  return (
    <FormWrapper onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={taskInput}
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setTaskInput(target.value)}
      />
      <Button>Dodaj zadanie</Button>
    </FormWrapper>
  );
};

export default Form;