import {
  REGISTER_REQUEST,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  SIGNIN_REQUEST,
  SIGNIN_ERROR_PW,
  SIGNIN_ERROR_USER,
  SIGNIN_SUCCESS,
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
        username: action.info
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
        authErrorMsg: '',
        showPoll: true
      })
    case SIGNIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isLoggedIn: false,
        username: action.info
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
      })
    default:
      return state;
  }
}
