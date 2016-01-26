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
      console.log("inside request");
      return Object.assign({}, state, {
        isFetching: true,
        isLoggedIn: false,
        username: action.info
      })
    case REGISTER_ERROR:
      console.log("inside error");
      return Object.assign({}, state, {
        isFetching: false,
        isLoggedIn: false,
        errorMessage: action.err
      })
    case REGISTER_SUCCESS:
      console.log("inside success");
      return Object.assign({}, state, {
        isFetching: false,
        isLoggedIn: true,
        errorMessage: ''
      })
    default:
      return state;
  }
}
