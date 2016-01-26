export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const SIGNIN_REQUEST = 'SIGNIN_REQUEST';
export const SIGNIN_ERROR_PW = 'SIGNIN_ERROR_PW';
export const SIGNIN_ERROR_USER = 'SIGNIN_ERROR_USER';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
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
        console.log('response in register', response);
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

// Main Login Function
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
          dispatch(signinSuccess(response));
        } else {
          if(response === 'InvalidPassword'){
            dispatch(signinErrorPassword(response));
          } else {
            dispatch(signinErrorUsername(response));
          }
        }
      } catch(e){
        dispatch(signinError(response.error));
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
