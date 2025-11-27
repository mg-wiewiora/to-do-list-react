import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    hideDone: false,
  },
  reducers: {
    addTask: (state, { payload }) => {
      state.tasks.push(payload);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
  },
});

export const { addTask, toggleHideDone } = tasksSlice.actions;
export const selectTasks = (state) => state.tasks;

export default tasksSlice.reducer;
