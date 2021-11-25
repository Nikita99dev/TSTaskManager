import { combineReducers } from "redux";
import  userReducer, { userActions } from './Slices/userSlice'

const rootReducer = combineReducers({
  user: userReducer
})

export default rootReducer

export const actions = {
  ...userActions
}
