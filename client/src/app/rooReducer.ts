import { combineReducers } from "redux";
import { TodoAction } from "./Slices/TodoSlice";
import  userReducer, { userActions } from './Slices/userSlice'
import TodosReducer from './Slices/TodoSlice'

const rootReducer = combineReducers({
  user: userReducer,
  todos: TodosReducer
})

export default rootReducer

export const actions = {
  ...userActions,
  ...TodoAction
}
