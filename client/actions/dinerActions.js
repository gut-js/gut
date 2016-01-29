import { routeActions } from 'react-router-redux';
export const LOAD_SNAPPEA_DATA = 'LOAD_SNAPPEA_DATA';

export const fetchSnapPeaData = (diners, location) => {
  return dispatch => {

    return fetch('http://localhost:5679/eat?username=' + "qwer" + '&' + 'location=' + "seattle", {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log('firstresponse ', response)
      return response.json();
    })
    .then(response => {
      console.log('dineractions response ', response);
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