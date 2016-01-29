import { routeActions } from 'react-router-redux';

export const fetchSnapPeaData = (diners, location) => {
  return dispatch => {

    return fetch('http://localhost:5679/eat?username=' + diners[0] + 'location=' + location, {
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
      dispatch(loadSnapPeaData(response));
    })
  }
}

const loadSnapPeaData = (info) => {
  return {
    type: LOAD_SNAPPEA_DATA,
    info
  }
}