import { routeActions } from 'react-router-redux';

export const LOAD_SNAPPEA_DATA = 'LOAD_SNAPPEA_DATA';
export const SET_TOP_RESTAURANT = 'SET_TOP_RESTAURANT';
export const CHANGE_TOP_RESTAURANT = 'CHANGE_TOP_RESTAURANT';
export const UPDATE_DINERS = 'UPDATE_DINERS';
export const LOADING_RESULTS = 'LOADING_RESULTS';

export const fetchSnapPeaData = (diners, location) => {
  return dispatch => {
    dispatch(loadingResults());
    console.log('location in FSPD: ', location);
    if (!location) {
      return fetch('http://localhost:5679/eat?username=' + diners[0], {
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
        try {
          dispatch(setTopRestaurant(response[0]));
          // dispatch(routeActions.push('/toprestaurant'));
        } catch(e){
          console.log('logging catch')
        }
      })
    }
    if (location) {
      return fetch('http://localhost:5679/eat?username=' + diners[0] + '&' + 'location=' + location, {
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
        try {
          dispatch(setTopRestaurant(response[0]));
          // dispatch(routeActions.push('/toprestaurant'));
        } catch(e){
          console.log('logging catch')
        }
      })
    }
  }
}

export const updateTopRestaurant = () => {
  return dispatch => {
    console.log('inTOP RESTARANT!');
    dispatch(changeTopRestaurant());
    // dispatch(routeActions.push('/toprestaurant2'))
  }
}

// temp hacky fix to routing prob
export const updateTopRestaurant2 = () => {
  return dispatch => {
    console.log('inTOP RESTARANT!');
    dispatch(changeTopRestaurant());
    // dispatch(routeActions.push('/toprestaurant'))
  }
}

const loadSnapPeaData = (info) => {
  return {
    type: LOAD_SNAPPEA_DATA,
    info
  }
}

export const loadTopRestaurant = () => {
  return dispatch => {
    dispatch(setTopRestaurant());
  }
}

const setTopRestaurant = (restaurant) => {
  return {
    type: SET_TOP_RESTAURANT,
    restaurant
  }
}

const changeTopRestaurant = () => {
  return {
    type: CHANGE_TOP_RESTAURANT
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
