import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
      state.todos.unshift(action.payload)
      state.isLoading = false;
      state.error = null
    },
    createTodoRejected: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },
    changeTodoStatusPending: (state, action) => {
      state.isLoading = true
    },
    changeTodoStatusFulfilled: (state, action: PayloadAction<TodosI>) => {
      state.isLoading = false;
      state.error = null;
      state.todos = state.todos.map(el=>{
        if(el.id === +action.payload.id){
          el.isDone = action.payload.isComplited
          return el
        } else {
          return el
        }
      })
    },
    changeTodoStatusRejected: (state, action) => {
      state.isLoading = false;
      state.error = action.payload
    },
    fetchTodosPending: (state, action) => {
      state.isLoading = true
    },
    fetchTodosFulfilled: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.todos = [...action.payload];
    },
    fetchTodosRejected: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    deleteTodoPending: (state, action) => {
      state.isLoading = true
    },
    deleteTodoFulfilled: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.todos = state.todos.filter(el=>el.id !== +action.payload.id)
    },
    deleteTodoRejected: (state, action) => {
      state.isLoading = false;
      state.error = action.payload
    }
  }
})


export default TodoSlice.reducer
export const {actions: TodoAction } = TodoSlice
