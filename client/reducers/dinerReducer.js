import {
  LOAD_SNAPPEA_DATA,
  SET_LOCATION,
  SET_TOP_RESTAURANT,
  UPDATE_TOP_RESTAURANT,
  ADD_DINER,
  REMOVE_DINER,
  CLEAR_DINERS,
  LOADING_RESULTS,
  LOAD_UBER_DATA,
  LOADING_UBER_DATA,
  CLEAR_UBER_DATA,
  SET_PICKUP_LOCATION
} from './../actions/dinerActions';

const initialState = {
  diners:[],
  location: '',
  recommendations:[],
  dinerErrorMessage: '',
  topRestaurant: {},
  isLoadingResults: false,
  index: 1,
  uberData: {},
  isLoadingUberData: false,
  pickupLocation: []
}

export default function dinerReducer(state = initialState, action){
  switch(action.type){
    case LOAD_SNAPPEA_DATA:
      return Object.assign({}, state, {
        recommendations: action.info,
        isLoadingResults: false
      })
    case SET_LOCATION:
      return Object.assign({}, state, {
        location: action.location
      })
    case SET_TOP_RESTAURANT:
      return Object.assign({}, state, {
        topRestaurant: action.restaurant
      })
    case UPDATE_TOP_RESTAURANT:
      if (state.index === 19) {
        return Object.assign({}, state, {
          index: 0,
          topRestaurant: state.recommendations[state.index]
        })
      } else {
        return Object.assign({}, state, {
          index: state.index + 1,
          topRestaurant: state.recommendations[state.index]
        })
      }
    case ADD_DINER:
      let addDiners = state.diners.slice(0);
      if(action.diner === addDiners[0] || addDiners.indexOf(action.diner) !== -1){
        return state;
      } else {
        addDiners.push(action.diner);
      }
      return Object.assign({}, state, {
        diners: addDiners
      })
    case REMOVE_DINER:
      let removeDiners = state.diners.filter(username => {
        return username !== action.diner;
      });
      return Object.assign({}, state, {
        diners: removeDiners
      });
    case CLEAR_DINERS:
      return Object.assign({}, state, {
        diners: []
      });
    case LOADING_RESULTS:
      return Object.assign({}, state, {
        isLoadingResults: true,
        topRestaurant: {}
      })
    case LOAD_UBER_DATA:
      return Object.assign({}, state, {
        uberData: action.data,
        isLoadingUberData: false
      })
    case LOADING_UBER_DATA:
      return Object.assign({}, state, {
        isLoadingUberData: true
      })
    case CLEAR_UBER_DATA:
      return Object.assign({}, state, {
        uberData: {}
      })
    case SET_PICKUP_LOCATION:
      return Object.assign({}, state, {
        pickupLocationLat: action.location[0],
        pickupLocationLng: action.location[1]
      })
    default:
      return state;
  }
}
