import * as ActionTypes from './../actions/authActions';

const initialState = {
  isFetching: false,
  isLoggedIn: false,
  username: '',
  authErrorMsg: '',
  showPoll: false
}

export default function authReducer(state = initialState, action){
  switch(action.type){
    case ActionTypes.REGISTER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isLoggedIn: false,
      })
    case ActionTypes.REGISTER_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        isLoggedIn: false,
        authErrorMsg: action.err
      })
    case ActionTypes.REGISTER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isLoggedIn: true,
        username: action.info.username,
        authErrorMsg: '',
        showPoll: true
      })
    case ActionTypes.AUTHENTICATE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isLoggedIn: false,
      })
    case ActionTypes.AUTHENTICATE_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        isLoggedIn: false,
        authErrorMsg: action.err
      })
    case ActionTypes.AUTHENTICATE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isLoggedIn: true,
        username: action.info.username
      })
    case ActionTypes.SIGNIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isLoggedIn: false,
      })
    case ActionTypes.SIGNIN_ERROR_PW:
      return Object.assign({}, state, {
        isFetching: false,
        isLoggedIn: false,
        authErrorMsg: action.err
      })
    case ActionTypes.SIGNIN_ERROR_USER:
      return Object.assign({}, state, {
        isFetching: false,
        isLoggedIn: false,
        authErrorMsg: action.err
      })
    case ActionTypes.SIGNIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isLoggedIn: true,
        username: action.user.username
      })
    case ActionTypes.LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isLoggedIn: false,
        username: '',
        showPoll: false
      })
    case ActionTypes.CLEAR_POLL:
      return Object.assign({}, state, {
        showPoll: false
      })
    default:
      return state;
  }
}
