import { takeEvery, call, StrictEffect, put, takeLeading} from 'redux-saga/effects'
import { actions } from '../app/rooReducer'
import { userInteface }  from "../app/types/userTypes"
import { regUser } from "../features/tools"
 
interface IRegAction{
  type: string,
  payload: {
    values: userInteface,
    navigate: (a:any, b: any )=> void
}
}
function* defineUser({payload}: IRegAction): Generator<StrictEffect>{
    console.log(payload.values)
  try {
    const resUser = yield call(regUser, 'http://localhost:3001/users/signup', payload.values)
    if(resUser){
      yield put(actions.registersUserFullfilled(resUser))
      payload.navigate("/success", { replace: true })
    }
  } catch (error) {
    yield put(actions.registerUserRejected(error))
  }
}


export default function* UserSaga() {
  yield takeLeading(`${actions.registerUserPending}`, defineUser)
}
