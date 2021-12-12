import { takeEvery, call, StrictEffect, put, takeLeading} from 'redux-saga/effects'
import { actions } from '../app/rooReducer'
import { userInteface }  from "../app/types/userTypes"
import {  logUserTool, regUser } from "../features/tools"
import { ILogAction, IRegAction } from './types.ts/types'
 

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

function* loginUser({payload}: ILogAction): Generator<StrictEffect>{
  console.log(payload)

  try {
    const logUser = yield call(logUserTool, 'http://localhost:3001/users/login', payload)
    console.log(logUser)
    if(logUser){
      yield put(actions.loginUserFullfilled(logUser))
      payload.navigate('/A', {replace: true})
    } else {
      yield put(actions.loginUserRejected('nothing'))
    }
  } catch (error) {
    yield put(actions.loginUserRejected(error))
  }
}

export default function* UserSaga() {
  yield takeLeading(`${actions.registerUserPending}`, defineUser)
  yield takeLeading(`${actions.loginUserPending}`, loginUser)
}
