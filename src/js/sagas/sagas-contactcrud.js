import { put, call, takeEvery, select } from 'redux-saga/effects';
import rsf from '../config/config'
import {updateList, writeToState, checkIfLoggedOut, fetchUID} from '../actions'

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

export function* executeFunctionUpdate(){
  yield put(checkIfLoggedOut())
  yield put(fetchUID())
  const id = yield select(userid)
  const list = yield call(rsf.database.read, '/contacts/' + id)
  yield put(writeToState(list))
}

export default function* watchforCRUD(){
  yield takeEvery("ADD_ENTRY", executeFunctionAdd)
  yield takeEvery("UPDATE_LIST", executeFunctionUpdate)
  yield takeEvery("EDIT_ENTRY", executeFunctionEdit)
  yield takeEvery("DEL_ENTRY", executeFunctionDel)
}
