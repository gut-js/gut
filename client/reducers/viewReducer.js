import {
  DISPLAY_FRIENDS_CHOICE,
  DISPLAY_LOCATION_CHOICE,
  DISPLAY_RESULTS,
  DISPLAY_ADD_FRIENDS,
  DISPLAY_PREFERENCES,
  DISPLAY_UBER_INFO,
  CLEAR_VIEWS
} from './../actions/viewActions';

const initialState = {
  displayFriendsChoice: false,
  displayLocationChoice: false,
  displayResults: false,
  displayAddFriends: false,
  displayUberInfo: false,
  displayPreferences: false
}

export default function viewReducer(state = initialState, action){
  switch(action.type){
    case DISPLAY_LOCATION_CHOICE:
    return Object.assign({}, state, {
      displayAddFriends: false,
      displayFriendsChoice: false,
      displayResults: false,
      displayPreferences: false,
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
        displayPreferences: false,
        displayAddFriends: true
      })
    case DISPLAY_PREFERENCES:
      return Object.assign({}, state, {
        displayFriendsChoice: false,
        displayLocationChoice: false,
        displayResults: false,
        displayAddFriends: false,
        displayUberInfo: false,
        displayPreferences: true
      })
    case DISPLAY_UBER_INFO:
      return Object.assign({}, state, {
        displayUberInfo: true
      })
    case CLEAR_VIEWS:
      return Object.assign({}, state, {
        displayFriendsChoice: false,
        displayLocationChoice: false,
        displayResults: false,
        displayAddFriends: false,
        displayUberInfo: false,
        displayPreferences: false
      })
    default:
      return state;
  }
}
