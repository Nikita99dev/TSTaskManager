import { call, put, StrictEffect, takeEvery, takeLatest } from "redux-saga/effects";
import { actions } from "../app/rooReducer";
import { TodosI } from "../app/types/TodosTypes";
import { createTodoTool, changeTodoStatus, fetchTodosTool, delTodo } from "./tools";

function* createTodo({ payload }: any): Generator<StrictEffect> {
  console.log("payload from", payload);
  let todo: any
  try {
    todo = yield call(
      createTodoTool,
      "http://localhost:3001/todos/addTodos",
      payload
    );
      yield put(actions.createTodoFulfilled(todo));
  } catch (error) {
    yield put(actions.createTodoRejected(error));
  }
}

function* changeTodoS({ payload }: any): Generator<StrictEffect> {
  let val: any
  try {
     val = yield call(
      changeTodoStatus,
      "http://localhost:3001/todos/changeTodo",
      payload
    );
    console.log("id from saga to change todo", val);

      yield put(actions.changeTodoStatusFulfilled({...payload, isComplited: val}));

  } catch (error) {
    yield put(actions.changeTodoStatusRejected(error));
  }
}

function* fetchTodos({ payload }: any): Generator<StrictEffect> {
  try {
    const todos = yield call(
      fetchTodosTool,
      `http://localhost:3001/todos/fetchAll/${payload}`
    );
    console.log("todos", todos);
    if (todos) {
      yield put(actions.fetchTodosFulfilled(todos));
    }
  } catch (error) {
    yield put(actions.fetchTodosRejected(error));
  }
}


function* deleteTodo({payload}: any): Generator<StrictEffect> {
  console.log(payload)
  try {
    const res = yield call (delTodo, 'http://localhost:3001/todos/delete', payload )
    yield put(actions.deleteTodoFulfilled(res))
  } catch (error) {
    yield put(actions.deleteTodoRejected(error))
  }
}

export default function* SagaTodos() {
  yield takeLatest(`${actions.createTodoPending}`, createTodo);
  yield takeLatest(`${actions.changeTodoStatusPending}`, changeTodoS);
  yield takeLatest(`${actions.fetchTodosPending}`, fetchTodos);
  yield takeEvery(`${actions.deleteTodoPending}`, deleteTodo)
}
