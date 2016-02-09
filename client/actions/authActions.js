import { routeActions } from 'react-router-redux';
import { syncPoll } from './../actions/pollActions';
import { syncHistory, syncAvatarUrl } from './../actions/dinerActions';
import { displayProfileHome } from './../actions/viewActions';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

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
        firstname: credentials.firstname,
        lastname: credentials.lastname,
        username: credentials.username,
        password: credentials.password,
        email: credentials.email
      })
    })
    .then(response => {
      return response.json();
    })
    .then(response => {
      console.log('res from registration', response);
      try {
        if(response.success){
          localStorage.token = response.token;
          dispatch(registerSuccess(response));
          dispatch(syncPoll(response.businesses, response.username));
          dispatch(routeActions.push('/profile'))
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

const registerSuccess = (info) => {
  return {
    type: REGISTER_SUCCESS,
    info
  }
}

export const AUTHENTICATE_REQUEST = 'AUTHENTICATE_REQUEST';
export const AUTHENTICATE_ERROR = 'AUTHENTICATE_ERROR';
export const AUTHENTICATE_SUCCESS = 'AUTHENTICATE_SUCCESS';

// Main Authentication Function
export const authenticateUser = (token) => {
  return dispatch => {
    dispatch(registerRequest);

    return fetch('http://localhost:5679/authenticate', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: token
      })
    })
    .then(response => {
      return response.json();
    })
    .then(response => {
      try {
        if(response.username){
          dispatch(authenticateSuccess(response.username));
          dispatch(syncHistory(response.beenTo));
          dispatch(displayProfileHome());
          dispatch(routeActions.push('/profile'));
        } else {
          dispatch(authenticateError(response));
        }
      } catch(e){
        dispatch(authenticateError(response.error));
      }
    })
    .catch(err => console.error('Error in Authenticating User:', err));
  }
}

const authenticateRequest = () => {
  return {
    type: AUTHENTICATE_REQUEST
  }
}

const authenticateError = (err) => {
  return {
    type: AUTHENTICATE_ERROR,
    err
  }
}

const authenticateSuccess = (info) => {
  return {
    type: AUTHENTICATE_SUCCESS,
    info
  }
}

export const SIGNIN_REQUEST = 'SIGNIN_REQUEST';
export const SIGNIN_ERROR_PW = 'SIGNIN_ERROR_PW';
export const SIGNIN_ERROR_USER = 'SIGNIN_ERROR_USER';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';

// Main Sign in Function
export const signinUser = (credentials) => {
  return dispatch => {
    dispatch(signinRequest(credentials));

    return fetch('http://localhost:5679/login', {
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
          //save token
          localStorage.token = response.token;
          dispatch(signinSuccess(response));
          dispatch(syncHistory(response.beenTo));
          dispatch(syncAvatarUrl(response.avatarUrl));
          dispatch(routeActions.push('/profile'));
        } else {
          if(response === 'InvalidPassword'){
            dispatch(signinErrorPassword(response));
          } else {
            dispatch(signinErrorUsername(response));
          }
        }
      } catch(e){
        dispatch(signinErrorPassword(response.error));
      }
    })
    .catch(err => console.error('Error in Signing In User:', err));
  }
}

const signinRequest = (info) => {
  return {
    type: SIGNIN_REQUEST,
    info
  }
}

const signinErrorPassword = (err) => {
  return {
    type: SIGNIN_ERROR_PW,
    err
  }
}

const signinErrorUsername = (err) => {
  return {
    type: SIGNIN_ERROR_USER,
    err
  }
}

const signinSuccess = (user) => {
  return {
    type: SIGNIN_SUCCESS,
    user
  }
}

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const CLEAR_POLL = 'CLEAR_POLL';

// Main Logout Function
export const logoutUser = () => {
  return dispatch => {
    dispatch(logoutSuccess());
    dispatch(routeActions.push('/'))
  }
}

const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS
  }
}

export const clearPoll = () => {
  return {
      type: CLEAR_POLL
  }
}
