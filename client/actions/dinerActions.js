import { routeActions } from 'react-router-redux';

export const LOAD_SNAPPEA_DATA = 'LOAD_SNAPPEA_DATA';
export const SET_TOP_RESTAURANT = 'SET_TOP_RESTAURANT';
export const UPDATE_TOP_RESTAURANT = 'UPDATE_TOP_RESTAURANT';
export const UPDATE_DINERS = 'UPDATE_DINERS';
export const LOADING_RESULTS = 'LOADING_RESULTS';

export const fetchSnapPeaData = (diners, location) => {
  return dispatch => {
    dispatch(loadingResults());
    let dinersString = JSON.stringify(diners);

     return fetch('http://localhost:5679/eat?diners=' + dinersString + '&' + 'location=' + "seattle", {
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
      console.log('response inside fetchSnapPeaData', response)
      try {
        dispatch(loadSnapPeaData(response));
        dispatch(setTopRestaurant(response[0]));
      } catch(e){
        console.log('logging catch')
      }
    })
  }
}

const loadSnapPeaData = (info) => {
  return {
    type: LOAD_SNAPPEA_DATA,
    info
  }
}

const setTopRestaurant = (restaurant) => {
  return {
    type: SET_TOP_RESTAURANT,
    restaurant
  }
}

export const loadTopRestaurant = () => {
  return dispatch => {
    dispatch(setTopRestaurant());
  }
}

export const updateTopRestaurant = () => {
  return {
    type: UPDATE_TOP_RESTAURANT
  }
}

// adds self or friends to diners array in redux state
export const addToDiners = (username) => {
  return dispatch => {
    dispatch(updateDiners(username));
    // dispatch(routeActions.push('/diners'))
  }
}

const updateDiners = (diner) => {
  return {
    type: UPDATE_DINERS,
    diner
  }
}

const loadingResults = () => {
  return {
    type: LOADING_RESULTS
  }
}
