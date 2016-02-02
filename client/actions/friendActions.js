export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_ERROR = 'SEARCH_ERROR';
export const ADD_REQUEST = 'ADD_REQUEST';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const REMOVE_REQUEST = 'REMOVE_REQUEST';
export const REMOVE_SUCCESS = 'REMOVE_SUCCESS';

// Main search function
export const findFriends = (credentials) => {
  // ajax call
}

const searchRequest = () => {
  // spinner when typing name in
}

const searchSuccess = () => {
  // return info from database and updates state
}

const searchError = () => {
  // if no users, trigger something on frontend
}

// Main add friend function
export const addFriend = () => {
  // ajax call
}

const addRequest = () => {
  // triggers are you sure you want to add them
}

const addSuccess = () => {
  // adds them, shows check mark
}

// Main remove friend Function
export const removeFriend = () => {
  // ajax call
}

const removeRequest = () => {
  // triggers are you sure you want to delete them
}

const removeSuccess = () => {
  // removes them, shows them off your friends list
}
