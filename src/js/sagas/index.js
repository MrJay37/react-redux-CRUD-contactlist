//eslint-disable-next-line
import { put, call, takeEvery, take, select } from 'redux-saga/effects';
import rsf from '../config/config'
import {updateList, writeToState, checkIfLoggedOut, fetchUID, loginSuccess, loginError} from '../actions'

export const userid = state => state.userid

export function* executeFunctionAdd(action){
    const id = yield select(userid)
    yield call(rsf.database.create, '/contacts/' + id + "/", action.person)
    yield put(updateList())
  }

export function* executeFunctionDel(action){
    const id = yield select(userid)
    yield call(rsf.database.delete, '/contacts/'+ id +'/' + action.key)
    yield put(updateList())
  }

export function* executeFunctionEdit(action){
  const id = yield select(userid)
  yield call(rsf.database.update, '/contacts/' + id + '/' + action.key, action.person)
}

export function* executeFunctionLogin(action){
  try{
    const loginmsg = yield call(rsf.auth.signInWithEmailAndPassword, action.email, action.pw)
    yield localStorage.setItem('user', JSON.stringify(loginmsg.user))
    yield put(fetchUID())
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

export function* executeFunctionUpdate(){
  yield put(checkIfLoggedOut())
  yield put(fetchUID())
  const id = yield select(userid)
  const list = yield call(rsf.database.read, '/contacts/' + id)
  yield put(writeToState(list))
}

export default function* watchForAction(){
  yield takeEvery("ADD_ENTRY", executeFunctionAdd)
  yield takeEvery("UPDATE_LIST", executeFunctionUpdate)
  yield takeEvery("EDIT_ENTRY", executeFunctionEdit)
  yield takeEvery("DEL_ENTRY", executeFunctionDel)
  yield takeEvery("LOGIN", executeFunctionLogin)
  yield takeEvery("LOGOUT", executeFunctionLogout)
  yield takeEvery("SIGNUP", executeFunctionSignUp)
}
