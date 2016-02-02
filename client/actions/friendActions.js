export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_ERROR = 'SEARCH_ERROR';
export const ADD_REQUEST = 'ADD_REQUEST';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const REMOVE_REQUEST = 'REMOVE_REQUEST';
export const REMOVE_SUCCESS = 'REMOVE_SUCCESS';

// Main search function
export const findFriends = (query, user) => {
  let username = user;
  let searchTerm = query;

  return dispatch => {
    dispatch(searchRequest(query));

    return fetch('http://localhost:5679/users?username=' + username + '&searchTerm=' + searchTerm, {
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
      try {
        dispatch(searchSuccess(response));
      } catch(e){
        dispatch(searchError(e))
      }
    })
    .catch(err => console.error('Error in Friend Search:', err));
  }
}

const searchRequest = (query) => {
  return {
    type: SEARCH_REQUEST,
    query
  }
}

const searchSuccess = (searchResults) => {
  return {
    type: SEARCH_SUCCESS,
    searchResults
  }
}

const searchError = (err) => {
  return {
    type: SEARCH_ERROR,
    err
  }
}

// Main add friend function
export const addFriend = (credentials) => {
  return dispatch => {
    dispatch(addRequest());

    return fetch('http://localhost:5679/addfriend', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: credentials.username,
        friendname: credentials.friendname
      })
    })
    .then(response => {
      return response.json();
    })
    .then(response => {
      console.log('res back from add', response);
    })
    .catch(err => console.error('Error in Add Friend:', err));
  }
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
