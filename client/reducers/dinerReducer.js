import * as ActionTypes from './../actions/dinerActions';

const initialState = {
  diners:[],
  location: '',
  recommendations: [],
  beenTo: [],
  dinerErrorMessage: '',
  topRestaurant: {},
  isLoadingResults: false,
  isAddingHistory: false,
  index: 1,
  uberData: {},
  isLoadingUberData: false,
  pickupLocation: [],
  avatarUrl: 'http://54.200.133.56:8080/static/assets/default_pea.png'
}

export default function dinerReducer(state = initialState, action){
  switch(action.type){
    case ActionTypes.LOAD_SNAPPEA_DATA:
      return Object.assign({}, state, {
        recommendations: action.info,
        isLoadingResults: false
      })
    case ActionTypes.SET_LOCATION:
      return Object.assign({}, state, {
        location: action.location
      })
    case ActionTypes.CLEAR_LOCATION:
      return Object.assign({}, state, {
        location: ''
      })
    case ActionTypes.SET_TOP_RESTAURANT:
      return Object.assign({}, state, {
        topRestaurant: action.restaurant
      })
    case ActionTypes.UPDATE_TOP_RESTAURANT:
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
    case ActionTypes.ADD_DINER:
      let addDiners = state.diners.slice(0);
      if(action.diner === addDiners[0] || addDiners.indexOf(action.diner) !== -1){
        return state;
      } else {
        addDiners.push(action.diner);
      }
      return Object.assign({}, state, {
        diners: addDiners
      })
    case ActionTypes.REMOVE_DINER:
      let removeDiners = state.diners.filter(username => {
        return username !== action.diner;
      });
      return Object.assign({}, state, {
        diners: removeDiners
      });
    case ActionTypes.CLEAR_DINERS:
      return Object.assign({}, state, {
        diners: []
      });
    case ActionTypes.LOADING_RESULTS:
      return Object.assign({}, state, {
        isLoadingResults: true,
        topRestaurant: {}
      })
    case ActionTypes.ADD_TO_HISTORY_REQ:
      return Object.assign({}, state, {
        isAddingHistory: true
      })
    case ActionTypes.ADD_TO_HISTORY_SUCCESS:
      return Object.assign({}, state, {
        isAddingHistory: false,
        beenTo: action.info
      })
    case ActionTypes.SYNC_HISTORY:
      return Object.assign({}, state, {
        beenTo: action.history
      })
    case ActionTypes.SYNC_AVATARURL:
      return Object.assign({}, state, {
        avatarUrl: action.url
      })
    case ActionTypes.CLEAR_HISTORY_SUCCESS:
      return Object.assign({}, state, {
        beenTo: []
      })
    case ActionTypes.LOAD_UBER_DATA:
      return Object.assign({}, state, {
        uberData: action.data,
        isLoadingUberData: false
      })
    case ActionTypes.LOADING_UBER_DATA:
      return Object.assign({}, state, {
        isLoadingUberData: true
      })
    case ActionTypes.CLEAR_UBER_DATA:
      return Object.assign({}, state, {
        uberData: {}
      })
    case ActionTypes.SET_PICKUP_LOCATION:
      return Object.assign({}, state, {
        pickupLocationLat: action.location[0],
        pickupLocationLng: action.location[1]
      })
    default:
      return state;
  }
}
