import { takeEvery, call, put } from "redux-saga/effects";
import { fetchExampleTasks, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";

function* fetchExampleTasksHandler() {
  try {
   const exampeTasks = yield call(getExampleTasks);
   yield put(setTasks(exampeTasks))
  } catch (error) {
    yield call(alert, "Coś sie wyszło! Spróbuj później.")
  }
}

export function* watchFetchExampleTasks() {
  yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
}
