import {
  SEND_POLL_REQUEST,
  SEND_POLL_SUCCESS,
  SEND_POLL_ERROR
} from './../actions/pollActions';

const initialState = {
  selected: [],
  unselected: [],
  username: '',
  isSubmitting: false,
  pollErrorMessage: ''
}

export default function pollReducer(state = initialState, action){
  switch(action.type){
    case SEND_POLL_REQUEST:
      return Object.assign({}, state, {
        selected: action.info.selected,
        unselected: action.info.unselected,
        username: action.info.username,
        isSubmitting: true
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
    default:
      return state;
  }
}
