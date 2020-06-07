import {combineReducers } from 'redux';
import nameList from './reducer-namelist';

export default combineReducers({
  nameList: nameList
})
