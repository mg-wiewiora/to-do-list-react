import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
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
    fetchExampleTasks: (state) => {
      state.loading = true;
    },
    fetchExampleTasksSuccess: (state, { payload: tasks }) => {
      state.tasks = tasks;
      state.loading = false;
    },
    fetchExampleTasksError: (state) => {
      state.loading = false;
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  deleteTask,
  markAllAsDone,
  fetchExampleTasksSuccess,
  fetchExampleTasksError,
  fetchExampleTasks,
} = tasksSlice.actions;

const selectTasksState = (state) => state.tasks;

export const selectTasks = (state) => selectTasksState(state).tasks;
export const selectHideDone = (state) => selectTasksState(state).hideDone;
export const selectAreTasksEmpty = (state) => selectTasks(state).length === 0;
export const selectAreAllTasksDone = (state) =>
  selectTasks(state).every(({ done }) => done);

export const getTaskById = (state, taskId) =>
  selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
  const tasks = selectTasks(state);

  if (!query?.trim()) return tasks;

  const normalizedQuery = query.trim().toLowerCase();

  return tasks.filter(({ content }) =>
    content.toLowerCase().includes(normalizedQuery)
  );
};

export default tasksSlice.reducer;
