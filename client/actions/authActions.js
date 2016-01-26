export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
// export const LOGIN_REQUEST = 'LOGIN_REQUEST';
// export const LOGIN_ERROR = 'LOGIN_ERROR';
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
// export const LOGOUT_ERROR = 'LOGOUT_ERROR';
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

// Main Register Function
export const registerUser = (credentials) => {
  return dispatch => {
    dispatch(registerRequest(credentials));

    return fetch('http://localhost:5679/signup', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: credentials.username,
        password: credentials.password
      })
    })
    .then(response => {
      return response.json();
    })
    .then(response => {
      try {
        if(response.success){
          dispatch(registerSuccess(response));
        } else {
          dispatch(registerError(response));
        }
      } catch(e){
        dispatch(registerError(response.error));
      }
    })
    .catch(err => console.error('Error in Register User:', err));
  }
}

const registerRequest = (info) => {
  return {
    type: REGISTER_REQUEST,
    info
  }
}

const registerError = (err) => {
  return {
    type: REGISTER_ERROR,
    err
  }
}

const registerSuccess = (user) => {
  return {
    type: REGISTER_SUCCESS,
    user
  }
}
