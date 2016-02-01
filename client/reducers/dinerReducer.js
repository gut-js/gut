import {
  LOAD_SNAPPEA_DATA,
  SET_TOP_RESTAURANT,
  UPDATE_TOP_RESTAURANT,
  UPDATE_DINERS,
  LOADING_RESULTS
} from './../actions/dinerActions';

const initialState = {
  diners:[],
  recommendations:[],
  dinerErrorMessage: '',
  topRestaurant: {},
  isLoadingResults: false,
  index: 1
}

export default function dinerReducer(state = initialState, action){
  switch(action.type){
    case LOAD_SNAPPEA_DATA:
      return Object.assign({}, state, {
        recommendations: action.info,
        isLoadingResults: false
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
    case UPDATE_DINERS:
      let newDiners = state.diners.slice(0);
      newDiners.push(action.diner);
      return Object.assign({}, state, {
        diners: newDiners
      })
    case LOADING_RESULTS:
      return Object.assign({}, state, {
        isLoadingResults: true,
        topRestaurant: {}
      })
    default:
      return state;
  }
}
