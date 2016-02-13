export const LOAD_REQUEST = 'LOAD_REQUEST';
export const LOAD_SUCCESS = 'LOAD_SUCCESS';

// Main load friends function
export const loadFriends = (user) => {
  return dispatch => {
    dispatch(loadRequest());

    return fetch('/friends?username=' + user, {
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
      dispatch(loadSuccess(response));
    })
    .catch(err => console.error('Error in Friend Load:', err));
  }
}

const loadRequest = () => {
  return {
    type: LOAD_REQUEST
  }
}

const loadSuccess = (loadResults) => {
  return {
    type: LOAD_SUCCESS,
    loadResults
  }
}

export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_ERROR = 'SEARCH_ERROR';

// Main search function
export const findFriends = (query, user) => {
  let username = user;
  let searchTerm = query;

  return dispatch => {
    dispatch(searchRequest(query));

    return fetch('/users?username=' + username + '&searchTerm=' + searchTerm, {
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

export const ADD_REQUEST = 'ADD_REQUEST';
export const ADD_SUCCESS = 'ADD_SUCCESS';

// Main add friend function
export const addFriend = (credentials) => {
  return dispatch => {
    dispatch(addRequest());

    return fetch('/addfriend', {
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
      dispatch(loadSuccess(response));
    })
    .catch(err => console.error('Error in Add Friend:', err));
  }
}

const addRequest = () => {
  return {
    type: ADD_REQUEST
  }
}

const addSuccess = () => {
  return {
    type: ADD_SUCCESS
  }
}

export const REMOVE_REQUEST = 'REMOVE_REQUEST';
export const REMOVE_SUCCESS = 'REMOVE_SUCCESS';
export const CLEAR_FRIENDS = 'CLEAR_FRIENDS';

// Main remove friend Function
export const removeFriend = (credentials) => {
  return dispatch => {
    dispatch(removeRequest());

    return fetch('/removefriend', {
      method: 'DELETE',
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
      dispatch(loadSuccess(response));
    })
    .catch(err => console.error('Error in Add Friend:', err));
  }
}

const removeRequest = () => {
  return {
    type: REMOVE_REQUEST
  }
}

const removeSuccess = () => {
  return {
    type: REMOVE_SUCCESS
  }
}

export const clearFriends = () => {
  return dispatch => {
    dispatch({
      type: CLEAR_FRIENDS
    });
  }
}
