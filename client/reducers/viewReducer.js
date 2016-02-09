import * as ActionTypes from './../actions/viewActions';

const initialState = {
  displayFriendsChoice: false,
  displayLocationChoice: false,
  displayResults: false,
  displayAddFriends: false,
  displayUberInfo: false,
  displayPreferences: false,
  displayHistory: false,
  displayProfileHome: true
}

export default function viewReducer(state = initialState, action){
  switch(action.type){
    case ActionTypes.DISPLAY_PROFILE_HOME:
      return Object.assign({}, state, {
        displayAddFriends: false,
        displayFriendsChoice: false,
        displayResults: false,
        displayPreferences: false,
        displayLocationChoice: false,
        displayHistory: false,
        displayProfileHome: true
      })
    case ActionTypes.DISPLAY_HISTORY:
      return Object.assign({}, state, {
        displayLocationChoice: false,
        displayFriendsChoice: false,
        displayResults: false,
        displayAddFriends: false,
        displayPreferences: false,
        displayProfileHome: false,
        displayHistory: true
      })
    case ActionTypes.DISPLAY_LOCATION_CHOICE:
      return Object.assign({}, state, {
        displayAddFriends: false,
        displayFriendsChoice: false,
        displayResults: false,
        displayPreferences: false,
        displayProfileHome: false,
        displayHistory: false,
        displayLocationChoice: true
      })
    case ActionTypes.DISPLAY_FRIENDS_CHOICE:
      return Object.assign({}, state, {
        displayLocationChoice: false,
        displayProfileHome: false,
        displayHistory: false,
        displayFriendsChoice: true
      })
    case ActionTypes.DISPLAY_RESULTS:
      return Object.assign({}, state, {
        displayFriendsChoice: false,
        displayResults: true
      })
    case ActionTypes.DISPLAY_ADD_FRIENDS:
      return Object.assign({}, state, {
        displayFriendsChoice: false,
        displayLocationChoice: false,
        displayResults: false,
        displayPreferences: false,
        displayProfileHome: false,
        displayHistory: false,
        displayAddFriends: true
      })
    case ActionTypes.DISPLAY_PREFERENCES:
      return Object.assign({}, state, {
        displayFriendsChoice: false,
        displayLocationChoice: false,
        displayResults: false,
        displayAddFriends: false,
        displayUberInfo: false,
        displayProfileHome: false,
        displayHistory: false,
        displayPreferences: true
      })
    case ActionTypes.DISPLAY_UBER_INFO:
      return Object.assign({}, state, {
        displayUberInfo: true
      })
    case ActionTypes.CLEAR_VIEWS:
      return Object.assign({}, state, {
        displayFriendsChoice: false,
        displayLocationChoice: false,
        displayResults: false,
        displayAddFriends: false,
        displayUberInfo: false,
        displayHistory: false,
        displayPreferences: false
      })
    default:
      return state;
  }
}
