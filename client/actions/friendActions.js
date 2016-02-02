export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_ERROR = 'SEARCH_ERROR';
export const ADD_REQUEST = 'ADD_REQUEST';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const REMOVE_REQUEST = 'REMOVE_REQUEST';
export const REMOVE_SUCCESS = 'REMOVE_SUCCESS';

// Main search function
export const findFriends = (query) => {
  // grab query and pass it in below
  // pass in your own username as username
  // pass in searchterm after searchterm

  return dispatch => {
    dispatch(searchRequest(query));

    return fetch('http://localhost:5679/users?username=String&searchTerm=String', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      return response.json();
    })
    .then(response => {
      // fill this out
    })
    .catch(err => console.error('Error in Friend Search:', err));
  }
}

const searchRequest = (query) => {
  // spinner when typing name in
  return {
    type: SEARCH_REQUEST,
    query
  }
}

const searchSuccess = (searchResults) => {
  // return info from database and updates state
  return {
    type: SEARCH_SUCCESS,
    searchResults
  }
}

const searchError = (err) => {
  // if no users, trigger something on frontend
  return {
    type: SEARCH_ERROR,
    err
  }
}

// Main add friend function
export const addFriend = () => {
  // ajax call
}

const addRequest = () => {
  // triggers are you sure you want to add them
  return {
    type: ADD_REQUEST
  }
}

const addSuccess = () => {
  // adds them, shows check mark
  return {
    type: ADD_SUCCESS
  }
}

// Main remove friend Function
export const removeFriend = () => {
  // ajax call
}

const removeRequest = () => {
  // triggers are you sure you want to delete them
  return {
    type: REMOVE_REQUEST
  }
}

const removeSuccess = () => {
  // removes them, shows them off your friends list
  return {
    type: REMOVE_SUCCESS
  }
}
