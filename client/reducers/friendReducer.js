import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
  ADD_REQUEST,
  ADD_SUCCESS,
  REMOVE_REQUEST,
  REMOVE_SUCCESS
} from './../actions/friendActions';

const initialState = {
  friendSearchQuery: '',
  searchResults: [],
  isSearching: false,
  addCheck: false,
  removeCheck: false
}

export default function friendReducer(state = initialState, action){
  switch(action.type){
    case SEARCH_REQUEST:
    case SEARCH_SUCCESS:
    case SEARCH_ERROR:
    case ADD_REQUEST:
    case ADD_SUCCESS:
    case REMOVE_REQUEST:
    case REMOVE_SUCCESS:
    default:
      return state;
  }
}
