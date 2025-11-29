import { call, put, delay, takeLatest, takeEvery, select } from "redux-saga/effects";
import { fetchExampleTasks, selectTasks, fetchExampleTasksSuccess, fetchExampleTasksError } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import {saveTasksInLocalStorage} from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
  try {
    yield delay(1000);
   const exampeTasks = yield call(getExampleTasks);
   yield put(fetchExampleTasksSuccess(exampeTasks));
  } catch (error) {
    yield put(fetchExampleTasksError());
    yield call(alert, "Coś sie wyszło! Spróbuj później.");
  }
}

function* saveTasksInLocalStorageHandler(){
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks);
};

export function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}
