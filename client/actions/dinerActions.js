import { routeActions } from 'react-router-redux';

export const LOAD_SNAPPEA_DATA = 'LOAD_SNAPPEA_DATA';
export const SET_TOP_RESTAURANT = 'SET_TOP_RESTAURANT';

export const fetchSnapPeaData = (diners, location) => {
  return dispatch => {

    return fetch('http://localhost:5679/eat?username=' + diners[0] + '&' + 'location=' + "seattle", {
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
      console.log('response inside 3rd .then', response);
      try {
        dispatch(setTopRestaurant(response[0]));
        dispatch(routeActions.push('/toprestaurants'))
        
      } catch(e){
        console.log('logging catch')      
      }
    })
  }
}

export const updateTopRestaurant = () => {
  return dispatch => {
    dispatch(setTopRestaurant())
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

const changeTopRestaurant = () => {
  return {
    type: CHANGE_TOP_RESTAURANT
  }
}