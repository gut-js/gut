import {
  DISPLAY_FRIENDS_CHOICE,
  DISPLAY_LOCATION_CHOICE,
  DISPLAY_RESULTS,
  DISPLAY_ADD_FRIENDS
} from './../actions/viewActions';

const initialState = {
  displayFriendsChoice: false,
  displayLocationChoice: false,
  displayResults: false,
  displayAddFriends: false
}

export default function viewReducer(state = initialState, action){
  switch(action.type){
    case DISPLAY_LOCATION_CHOICE:
    return Object.assign({}, state, {
      displayAddFriends: false,
      displayLocationChoice: true
    })
    case DISPLAY_FRIENDS_CHOICE:
      return Object.assign({}, state, {
        displayLocationChoice: false,
        displayFriendsChoice: true
      })
    case DISPLAY_RESULTS:
      return Object.assign({}, state, {
        displayFriendsChoice: false,
        displayResults: true
      })
    case DISPLAY_ADD_FRIENDS:
      return Object.assign({}, state, {
        displayFriendsChoice: false,
        displayLocationChoice: false,
        displayResults: false,
        displayAddFriends: true
      })
    default:
      return state;
  }
}
