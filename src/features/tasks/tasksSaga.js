import { call, put, delay, takeLatest } from "redux-saga/effects";
import { fetchExampleTasks, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";

function* fetchExampleTasksHandler() {
  try {
    yield delay(1000);
   const exampeTasks = yield call(getExampleTasks);
   yield put(setTasks(exampeTasks))
  } catch (error) {
    yield call(alert, "Coś sie wyszło! Spróbuj później.")
  }
}

export function* watchFetchExampleTasks() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
}
