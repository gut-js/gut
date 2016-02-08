import { routeActions } from 'react-router-redux';

export const LOAD_SNAPPEA_DATA = 'LOAD_SNAPPEA_DATA';
export const SET_TOP_RESTAURANT = 'SET_TOP_RESTAURANT';

// Fetches top recommendations for users
export const fetchSnapPeaData = (diners, location) => {
  let dinersString = JSON.stringify(diners);
  let locationString = JSON.stringify(location);

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
     return fetch('http://localhost:5679/eat?diners=' + dinersString + '&location=' + locationString, {
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

export const SET_LOCATION = 'SET_LOCATION';
export const CLEAR_LOCATION = 'CLEAR_LOCATION';
export const UPDATE_TOP_RESTAURANT = 'UPDATE_TOP_RESTAURANT';
export const ADD_DINER = 'ADD_DINER';
export const REMOVE_DINER = 'REMOVE_DINER';
export const CLEAR_DINERS = 'CLEAR_DINERS';
export const LOADING_RESULTS = 'LOADING_RESULTS';

export const setUserLocation = (location) => {
  return dispatch => {
    dispatch({
      type: SET_LOCATION,
      location
    });
  }
}

export const clearLocation = () => {
  return dispatch => {
    dispatch({
      type: CLEAR_LOCATION
    })
  }
}

export const updateTopRestaurant = () => {
  return {
    type: UPDATE_TOP_RESTAURANT
  }
}

export const addToDiners = (diner) => {
  return dispatch => {
    dispatch({
      type: ADD_DINER,
      diner
    });
  }
}

export const removeFromDiners = (diner) => {
  return dispatch => {
    dispatch({
      type: REMOVE_DINER,
      diner
    });
  }
}

export const clearDiners = () => {
  return dispatch => {
    dispatch({
      type: CLEAR_DINERS
    })
  }
}

const loadingResults = () => {
  return {
    type: LOADING_RESULTS
  }
}

export const ADD_TO_HISTORY_REQ = 'ADD_TO_HISTORY_REQ';
export const ADD_TO_HISTORY_SUCCESS = 'ADD_TO_HISTORY_SUCCESS';
export const SYNC_HISTORY = 'SYNC_HISTORY';

// Adds selected restaurant to user history
export const addToHistory = (info) => {
  console.log('added history action', info);
  return dispatch => {
    dispatch(addToHistoryRequest());

    return fetch('http://localhost:5679/history', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: info.username,
        restaurantName: info.restaurantName,
        restaurantId: info.restaurantId,
        date: info.date
      })
    })
    .then(response => {
      return response.json();
    })
    .then(response => {
      dispatch(addToHistorySuccess());
    })
    .catch(err => console.error('Error in Adding to History:', err));
  }
}

const addToHistoryRequest = () => {
  return {
    type: ADD_TO_HISTORY_REQ
  }
}

const addToHistorySuccess = () => {
  return {
    type: ADD_TO_HISTORY_SUCCESS
  }
}

export const syncHistory = (history) => {
  return {
    type: SYNC_HISTORY,
    history
  }
}

export const LOAD_UBER_DATA = 'LOAD_UBER_DATA';
export const LOADING_UBER_DATA = 'LOADING_UBER_DATA';
export const CLEAR_UBER_DATA = 'CLEAR_UBER_DATA';
export const SET_PICKUP_LOCATION = 'SET_PICKUP_LOCATION';

// Main Uber Function
// Fetches price estimates, and sets current pickup location
export const fetchUberData = (bizLatitude, bizLongitude) => {
  let userLatitude;
  let userLongitude;
  return dispatch => {
    dispatch(loadingUberData());
    navigator.geolocation.getCurrentPosition(function(position) {
      userLatitude = position.coords.latitude;
      userLongitude = position.coords.longitude;
      let coord = JSON.stringify({
        userLatitude: userLatitude,
        userLongitude: userLongitude,
        bizLatitude: bizLatitude,
        bizLongitude: bizLongitude
      })
      return fetch('http://localhost:5679/uber?' + "coord=" + coord, {
         method: 'GET',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         }
       })
       .then(response => {
          dispatch(setPickupLocation([userLatitude, userLongitude]));
          return response.json();
       })
       .then(response => {
         try {
           dispatch(loadUberData(response));
         } catch(e){
           console.log('Error in fetching', e);
         }
      })
    })
  }
}

const loadUberData = (data) => {
  return {
    type: LOAD_UBER_DATA,
    data
  }
}

const loadingUberData = () => {
  return {
    type: LOADING_UBER_DATA
  }
}

export const clearUberData = () => {
  return {
    type: CLEAR_UBER_DATA
  }
}

const setPickupLocation = (location) => {
  return {
    type: SET_PICKUP_LOCATION,
    location
  }
}
