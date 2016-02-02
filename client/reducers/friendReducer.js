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
  removeCheck: false
}

export default function friendReducer(state = initialState, action){
  switch(action.type){
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
    case ADD_SUCCESS:
    case REMOVE_REQUEST:
    case REMOVE_SUCCESS:
    default:
      return state;
  }
}
