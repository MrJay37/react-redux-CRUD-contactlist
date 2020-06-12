import {createStore, applyMiddleware} from 'redux'
import createSageMiddleware from 'redux-saga'
//import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'
import watchForAction from '../sagas/'

//const loggerMiddleware = createLogger()


export default function configureStore() {
  const sagaMiddleware = createSageMiddleware()
  const store =  createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)//, loggerMiddleware)
  )
  sagaMiddleware.run(watchForAction);
  return store;
}
