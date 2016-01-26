import { combineReducers } from 'redux';
import authReducer from './authReducer';
import searchReducer from './searchReducer';

export default combineReducers({
  authReducer, searchReducer
})
