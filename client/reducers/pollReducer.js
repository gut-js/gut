import {
  LOAD_YELP_DATA,
  SEND_POLL_REQUEST,
  SEND_POLL_SUCCESS,
  SEND_POLL_ERROR,
  UPDATE_POLL,
  SYNC_POLL,
  END_POLL,
  CLEAR_POLL,
  RESET_REQUEST,
  RESET_SUCCESS
} from './../actions/pollActions';

const initialState = {
  selected: [],
  unselected: [],
  username: '',
  isSubmitting: true,
  pollErrorMessage: '',
  data: [],
  resetCheck: true
}

export default function pollReducer(state = initialState, action){
  switch(action.type){
    case LOAD_YELP_DATA:
      return Object.assign({}, state, {
        data: action.info
      })
    case SEND_POLL_REQUEST:
      return Object.assign({}, state, {
        selected: action.info.selected,
        unselected: action.info.unselected,
        username: action.info.username,
      })
    case SEND_POLL_SUCCESS:
      return Object.assign({}, state, {
        isSubmitting: false,
        pollErrorMessage: ''
      })
    case SEND_POLL_ERROR:
      return Object.assign({}, state, {
        isSubmitting: false,
        pollErrorMessage: action.err
      })
    case UPDATE_POLL:
      return Object.assign({}, state, {
        data: action.results
      })
    case SYNC_POLL:
      return Object.assign({}, state, {
        data: action.info,
        username: action.username
      })
    case END_POLL:
      return Object.assign({}, state, {
        isSubmitting: false,
        username: action.userInfo
      })
    case CLEAR_POLL:
      return Object.assign({}, state, {
        username: '',
        isSubmitting: true,
        pollErrorMessage: '',
        data: []
      })
    case RESET_REQUEST:
      return Object.assign({}, state, {
        resetCheck: false
      })
    case RESET_SUCCESS:
      return Object.assign({}, state, {
        isSubmitting: true,
        pollErrorMessage: '',
        resetCheck: true
      })
    default:
      return state;
  }
}
