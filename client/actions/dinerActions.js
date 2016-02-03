import { routeActions } from 'react-router-redux';

export const LOAD_SNAPPEA_DATA = 'LOAD_SNAPPEA_DATA';
export const SET_TOP_RESTAURANT = 'SET_TOP_RESTAURANT';
export const UPDATE_TOP_RESTAURANT = 'UPDATE_TOP_RESTAURANT';
export const UPDATE_DINERS = 'UPDATE_DINERS';
export const LOADING_RESULTS = 'LOADING_RESULTS';

export const fetchSnapPeaData = (diners, location) => {
  let dinersString = JSON.stringify(diners);
  console.log(dinersString);

  return dispatch => {
    dispatch(loadingResults());

    if(!location){
      return fetch('http://localhost:5679/eat?diners=' + dinersString, {
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
       try {
         dispatch(loadSnapPeaData(response));
         dispatch(setTopRestaurant(response[0]));
       } catch(e){
         console.log('Error in fetching', e);
       }
     })
   } else {
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
       try {
         dispatch(loadSnapPeaData(response));
         dispatch(setTopRestaurant(response[0]));
       } catch(e){
         console.log('Error in fetching', e);
       }
     })
   }
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

export const updateTopRestaurant = () => {
  return {
    type: UPDATE_TOP_RESTAURANT
  }
}

// adds self or friends to diners array in redux state
export const addToDiners = (username) => {
  return dispatch => {
    dispatch(updateDiners(username));
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
