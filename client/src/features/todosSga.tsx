import { call, put, StrictEffect, takeLatest } from "redux-saga/effects";
import { actions } from "../app/rooReducer";
import { TodosI } from "../app/types/TodosTypes";
import { createTodoTool } from "./tools";

function* createTodo ({ payload }: any): Generator<StrictEffect> {
  console.log('payload from', payload)
  try { 
    const todo = yield call(createTodoTool, 'http://localhost:3001/todos/addTodos', payload)
    console.log(todo)
    if(todo){
      yield put(actions.createTodoFulfilled(todo))
    } 
  } catch (error) {
    yield put(actions.createTodoRejected(error))
  }
}


export default function* SagaTodos(){
  yield takeLatest(`${actions.createTodoPending}`, createTodo)
}
 