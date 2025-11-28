import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    hideDone: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload: task }) => {
      tasks.push(task);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(({ id }) => id === taskId);
      tasks[index].done = !tasks[index].done;
    },
    deleteTask: (state, { payload: taskId }) => {
      state.tasks = state.tasks.filter(({ id }) => id !== taskId);
    },
    markAllAsDone: (state) => {
      state.tasks.forEach((task) => {
        task.done = true;
      });
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  deleteTask,
  markAllAsDone,
} = tasksSlice.actions;

export const selectTasks = (state) => state.tasks;

export default tasksSlice.reducer;
