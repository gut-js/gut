import * as ActionTypes from './../actions/friendActions';

const initialState = {
  userFriends: [],
  friendSearchQuery: '',
  searchResults: [],
  friendsErrorMsg: '',
  isSearching: false,
  addCheck: false,
  removeCheck: false,
  isLoadingFriends: false
}

export default function friendReducer(state = initialState, action){
  switch(action.type){
    case ActionTypes.LOAD_REQUEST:
      return Object.assign({}, state, {
        isLoadingFriends: true
      })
    case ActionTypes.LOAD_SUCCESS:
      return Object.assign({}, state, {
        userFriends: action.loadResults,
        isLoadingFriends: false
      })
    case ActionTypes.SEARCH_REQUEST:
      return Object.assign({}, state, {
        friendSearchQuery: action.query,
        isSearching: true
      })
    case ActionTypes.SEARCH_SUCCESS:
      return Object.assign({}, state, {
        searchResults: action.searchResults,
        isSearching: false
      })
    case ActionTypes.SEARCH_ERROR:
      return Object.assign({}, state, {
        friendsErrorMsg: action.err,
        isSearching: false
      })
    case ActionTypes.ADD_REQUEST:
      return Object.assign({}, state, {
        addCheck: true
      })
    case ActionTypes.ADD_SUCCESS:
      return Object.assign({}, state, {
        addCheck: false
      })
    case ActionTypes.REMOVE_REQUEST:
      return Object.assign({}, state, {
        removeCheck: true
      })
    case ActionTypes.REMOVE_SUCCESS:
      return Object.assign({}, state, {
        removeCheck: false
      })
    case ActionTypes.CLEAR_FRIENDS:
      return Object.assign({}, state, {
        searchResults: []
      })
    default:
      return state;
  }
}
