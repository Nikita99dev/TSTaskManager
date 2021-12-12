import { all } from "@redux-saga/core/effects";
import SagaTodos from "./todosSga";
import UserSaga from "./userSaga";

export default function* rootSaga(){
 yield all([
   UserSaga(),
   SagaTodos()
 ])
}
