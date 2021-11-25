import { all } from "@redux-saga/core/effects";
import UserSaga from "./userSaga";

export default function* rootSaga(){
 yield all([
   UserSaga()
 ])
}
