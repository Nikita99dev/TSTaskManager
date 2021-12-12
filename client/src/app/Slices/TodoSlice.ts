import { createSlice } from "@reduxjs/toolkit";
import { TodosI } from '../types/TodosTypes'

const initialState: TodoSliceI = {
  todos: [],
  isLoading: false,
  error: null,
}

interface TodoSliceI {
  [x: string]: any;
  todos: TodosI[],
  isLoading: boolean,
  error: null
}

const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers:{
    createTodoPending: (state, action) => {
      state.isLoading = true
    },
    createTodoFulfilled: (state, action) => {
      state.todos.push(action.payload)
      state.isLoading = false;
      state.error = null
    },
    createTodoRejected: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    }

  }
})


export default TodoSlice.reducer
export const {actions: TodoAction } = TodoSlice
