import * as ActionTypes from './../actions/pollActions';

const initialState = {
  selected: [],
  unselected: [],
  username: '',
  isSubmitting: true,
  pollErrorMessage: '',
  data: []
}

export default function pollReducer(state = initialState, action){
  switch(action.type){
    case ActionTypes.LOAD_YELP_DATA:
      return Object.assign({}, state, {
        data: action.info
      })
    case ActionTypes.SEND_POLL_REQUEST:
      return Object.assign({}, state, {
        selected: action.info.selected,
        unselected: action.info.unselected,
        username: action.info.username,
      })
    case ActionTypes.SEND_POLL_SUCCESS:
      return Object.assign({}, state, {
        isSubmitting: false,
        pollErrorMessage: ''
      })
    case ActionTypes.SEND_POLL_ERROR:
      return Object.assign({}, state, {
        isSubmitting: false,
        pollErrorMessage: action.err
      })
    case ActionTypes.UPDATE_POLL:
      return Object.assign({}, state, {
        data: action.results
      })
    case ActionTypes.SYNC_POLL:
      return Object.assign({}, state, {
        data: action.info,
        username: action.username
      })
    case ActionTypes.END_POLL:
      return Object.assign({}, state, {
        isSubmitting: false,
        username: action.userInfo
      })
    case ActionTypes.CLEAR_POLL:
      return Object.assign({}, state, {
        username: '',
        isSubmitting: true,
        pollErrorMessage: '',
        data: []
      })
    case ActionTypes.RESET_SUCCESS:
      return Object.assign({}, state, {
        isSubmitting: true,
        pollErrorMessage: '',
        resetCheck: true
      })
    default:
      return state;
  }
}
