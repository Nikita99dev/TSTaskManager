import { combineReducers } from "redux";
import  userReducer from './Slices/userSlice'

const rootReducer = combineReducers({
  user: userReducer
})

export default rootReducer
