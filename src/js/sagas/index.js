import { all } from 'redux-saga/effects' ;

import watchforCRUD from './sagas-contactcrud'
import watchForAuth from './sagas-auth'

export default function* rootSaga(){
  yield all([watchforCRUD(), watchForAuth()]);
}
