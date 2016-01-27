import { routeActions } from 'react-router-redux';

export const SEND_POLL_REQUEST = 'SEND_POLL_REQUEST';
export const SEND_POLL_SUCCESS = 'SEND_POLL_SUCCESS';
export const SEND_POLL_ERROR = 'SEND_POLL_ERROR';

export const sendPollChoices = (choices) => {
  return dispatch => {
    dispatch(sendPollRequest(choices));

    return fetch('http://localhost:5679/poll', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(choices)
    })
    .then(response => {
      return response.json();
    })
    .then(response => {
      console.log('response:', response);
    })
  }
}

const sendPollRequest = (info) => {
  return {
    type: SEND_POLL_REQUEST,
    info
  }
}

const sendPollSuccess = (info) => {
  return {
    type: SEND_POLL_SUCCESS,
    info
  }
}

const sendPollError = (err) => {
  return {
    type: SEND_POLL_ERROR,
    err
  }
}
