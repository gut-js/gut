import {
  REGISTER_REQUEST,
  REGISTER_ERROR,
  REGISTER_SUCCESS
} from './../actions/authActions';

const initialState = {
  isFetching: false,
  isLoggedIn: false,
  username: '',
  errorMessage: ''
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
        errorMessage: action.err
      })
    case REGISTER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isLoggedIn: true,
        errorMessage: ''
      })
    default:
      return state;
  }
}
