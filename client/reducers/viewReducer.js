import {
  DISPLAY_FRIENDS_CHOICE,
  DISPLAY_LOCATION_CHOICE,
  DISPLAY_RESULTS,
  DISPLAY_ADD_FRIENDS,
  DISPLAY_UBER_INFO
} from './../actions/viewActions';

const initialState = {
  displayFriendsChoice: false,
  displayLocationChoice: false,
  displayResults: false,
  displayAddFriends: false,
  displayUberInfo: false
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
        displayFriendsChoice: true,
      })
    case DISPLAY_RESULTS:
      return Object.assign({}, state, {
        displayResults: true
      })
    case DISPLAY_ADD_FRIENDS:
      return Object.assign({}, state, {
        displayFriendsChoice: false,
        displayLocationChoice: false,
        displayResults: false,
        displayAddFriends: true
      })
      case DISPLAY_UBER_INFO:
      return Object.assign({}, state, {
        displayUberInfo: true
      })
    default:
      return state;
  }
}
