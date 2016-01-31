import {
  REGISTER_REQUEST,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  AUTHENTICATE_REQUEST,
  AUTHENTICATE_ERROR,
  AUTHENTICATE_SUCCESS,
  SIGNIN_REQUEST,
  SIGNIN_ERROR_PW,
  SIGNIN_ERROR_USER,
  SIGNIN_SUCCESS,
  LOGOUT_SUCCESS
} from './../actions/authActions';

const initialState = {
  isFetching: false,
  isLoggedIn: false,
  username: '',
  authErrorMsg: '',
  showPoll: false
}

export default function authReducer(state = initialState, action){
  switch(action.type){
    case REGISTER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isLoggedIn: false,
      })
    case REGISTER_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        isLoggedIn: false,
        authErrorMsg: action.err
      })
    case REGISTER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isLoggedIn: true,
        username: action.info.username,
        authErrorMsg: '',
        showPoll: true
      })
    case AUTHENTICATE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isLoggedIn: false,
      })
    case AUTHENTICATE_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        isLoggedIn: false,
        authErrorMsg: action.err
      })
    case AUTHENTICATE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isLoggedIn: true,
        username: action.info.username
      })
    case SIGNIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isLoggedIn: false,
      })
    case SIGNIN_ERROR_PW:
      return Object.assign({}, state, {
        isFetching: false,
        isLoggedIn: false,
        authErrorMsg: action.err
      })
    case SIGNIN_ERROR_USER:
      return Object.assign({}, state, {
        isFetching: false,
        isLoggedIn: false,
        authErrorMsg: action.err
      })
    case SIGNIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isLoggedIn: true,
        username: action.user.username
      })
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isLoggedIn: false,
        username: '',
        showPoll: false
      })
    default:
      return state;
  }
}
