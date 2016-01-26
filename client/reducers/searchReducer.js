import { FETCH_RESTAURANTS } from '../actions/searchActions';

export default function searchReducer(state = [], action) {
	console.log('Action received in searchReducer:', action);
 	switch(action.type) {
 	case FETCH_RESTAURANTS:
 		let newState = state.concat(action.info.businesses);
 		return newState;
 	default:
 		return state;
 	}
}
