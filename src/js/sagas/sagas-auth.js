import { put, call, takeEvery } from 'redux-saga/effects';
import rsf from '../config/config'
import {updateList, fetchUID, loginSuccess, loginError} from '../actions'

export function* executeFunctionLogin(action){
  try{
    const loginmsg = yield call(rsf.auth.signInWithEmailAndPassword, action.email, action.pw)
    yield localStorage.setItem('userProfile', JSON.stringify(loginmsg))
    yield localStorage.setItem('user', JSON.stringify(loginmsg.user))

    yield put(loginSuccess())
    yield put(updateList())
  }
  catch(error){
    yield put(loginError())
  }
}

export function* executeFunctionSignUp(action){
  try{
    const signUpmsg = yield call(rsf.auth.createUserWithEmailAndPassword, action.email, action.pw)
    yield localStorage.setItem('user', JSON.stringify(signUpmsg.user))
    yield put(fetchUID())
    yield put(loginSuccess())
    yield put(updateList())
  }
  catch(err){
    yield put(loginError())
  }
}
export function* executeFunctionLogout(){
  try{
    yield call(rsf.auth.signOut)
    yield localStorage.setItem('user', null)
    yield put(updateList())
  }
  catch(error){
  }
}

export function* executeFunctionDelProf(){
  try{
    const data = call(rsf.auth.deleteProfile)
    yield localStorage.setItem('user', null)
    yield put(updateList())
    console.log('Profile Deleted', data)
  }
  catch(error){
    yield console.log("Delete Failed", error)
  }
}

export default function* watchForAuth(){
  yield takeEvery("LOGIN", executeFunctionLogin)
  yield takeEvery("LOGOUT", executeFunctionLogout)
  yield takeEvery("SIGNUP", executeFunctionSignUp)
  yield takeEvery('DELETEPROFILE', executeFunctionDelProf)
}
