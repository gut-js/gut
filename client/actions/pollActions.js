import { routeActions } from 'react-router-redux';

export const SEND_POLL_REQUEST = 'SEND_POLL_REQUEST';
export const SEND_POLL_SUCCESS = 'SEND_POLL_SUCCESS';
export const SEND_POLL_ERROR = 'SEND_POLL_ERROR';
export const UPDATE_POLL = 'UPDATE_POLL';
export const LOAD_YELP_DATA = 'LOAD_YELP_DATA';

export const fetchYelpData = () => {
  return dispatch => {

    return fetch('http://localhost:5679/yelp?location=' + 'seattle', {
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
      console.log('response:', response);
      dispatch(loadYelpData(response));
    })
  }
}

const loadYelpData = (info) => {
  return {
    type: LOAD_YELP_DATA,
    info
  }
}

export const sendPollChoices = (choices) => {
  return dispatch => {
    console.log('choices:', choices);
    dispatch(sendPollRequest(choices));

    return fetch('http://localhost:5679/preference', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: choices.username,
        selected: choices.selected,
        unselected: choices.unselected
      })
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

export const updatePoll = (info) => {
  let results = shortenPoll(info);
  return {
    type: UPDATE_POLL,
    results
  }
}

const shortenPoll = (info) => {
  console.log('info:', info);
  let results = info;
  if (info.length > 0) {
    results = info.slice(2);
  }
  return results;
}
