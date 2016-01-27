import {
  FETCH_RES_SUCCESS,
  FETCH_RES_ERR
 } from '../actions/searchActions';

 const initialState = {
   businesses: [],
   searchErrorMsg: ''
 }

export default function searchReducer(state = initialState, action) {
 	switch(action.type) {
 	case FETCH_RES_SUCCESS:
    return Object.assign({}, state, {
      businesses: action.info.businesses,
    })
  case FETCH_RES_ERR:
 		return Object.assign({}, state, {
      searchErrorMsg: action.err.id
    })
 	default:
 		return state;
 	}
}
