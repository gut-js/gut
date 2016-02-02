import {
  LOAD_REQUEST,
  LOAD_SUCCESS,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
  ADD_REQUEST,
  ADD_SUCCESS,
  REMOVE_REQUEST,
  REMOVE_SUCCESS
} from './../actions/friendActions';

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
    case LOAD_REQUEST:
      return Object.assign({}, state, {
        isLoadingFriends: true
      })
    case LOAD_SUCCESS:
      return Object.assign({}, state, {
        userFriends: action.loadResults,
        isLoadingFriends: false
      })
    case SEARCH_REQUEST:
      return Object.assign({}, state, {
        friendSearchQuery: action.query,
        isSearching: true
      })
    case SEARCH_SUCCESS:
      return Object.assign({}, state, {
        searchResults: action.searchResults,
        isSearching: false
      })
    case SEARCH_ERROR:
      return Object.assign({}, state, {
        friendsErrorMsg: action.err,
        isSearching: false
      })
    case ADD_REQUEST:
      return Object.assign({}, state, {
        addCheck: true
      })
    case ADD_SUCCESS:
      return Object.assign({}, state, {
        addCheck: false
      })
    case REMOVE_REQUEST:
      return Object.assign({}, state, {
        removeCheck: true
      })
    case REMOVE_SUCCESS:
      return Object.assign({}, state, {
        removeCheck: false
      })
    default:
      return state;
  }
}
