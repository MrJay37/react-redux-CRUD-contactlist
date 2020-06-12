import {combineReducers } from 'redux';
import nameList from './reducer-namelist';
import uid from './reducer-uid'
import isLoggedOut from './reducer-isloggedout'
import isSigningUp from './reducer-issigningup'
import userid from './reducer-fetchuid'
import loginAttemptStatus from './reducer-loginerror'

export default combineReducers({
  nameList: nameList,
  uid: uid,
  isLoggedOut: isLoggedOut,
  isSigningup: isSigningUp,
  loginAttemptStatus: loginAttemptStatus,
  userid: userid
})
