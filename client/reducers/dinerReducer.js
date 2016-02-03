import {
  LOAD_SNAPPEA_DATA,
  SET_LOCATION,
  SET_TOP_RESTAURANT,
  UPDATE_TOP_RESTAURANT,
  LOAD_UBER_DATA,
  ADD_DINER,
  REMOVE_DINER,
  LOADING_RESULTS
} from './../actions/dinerActions';

const initialState = {
  diners:[],
  location: '',
  recommendations:[],
  dinerErrorMessage: '',
  topRestaurant: {},
  isLoadingResults: false,
  index: 1,
  uberData: {}
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
    case LOADING_RESULTS:
      return Object.assign({}, state, {
        isLoadingResults: true,
        topRestaurant: {}
      })
    case LOAD_UBER_DATA:
      return Object.assign({}, state, {
        uberData: action.data
      })
    default:
      return state;
  }
}
