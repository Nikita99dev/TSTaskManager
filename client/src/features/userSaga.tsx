import { takeEvery, call, StrictEffect, put, takeLeading} from 'redux-saga/effects'
import { actions } from '../app/rooReducer'
import { userInteface }  from "../app/types/userTypes"
import { regUser } from "../features/tools"
 
interface IRegAction{
  type: string,
  payload: userInteface
}
function* defineUser({payload}: IRegAction): Generator<StrictEffect>{
    console.log(payload)
  try {
    const resUser = yield call(regUser, 'http://localhost:3000/signup', payload)
    yield put(actions.registersUserFullfilled(resUser))
  } catch (error) {
    yield put(actions.registerUserRejected(error))
  }
}


export default function* UserSaga() {
  yield takeLeading(`${actions.registerUserPending}`, defineUser)
}
