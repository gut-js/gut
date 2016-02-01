import {
  LOAD_SNAPPEA_DATA,
  SET_TOP_RESTAURANT,
  CHANGE_TOP_RESTAURANT,
  UPDATE_DINERS,
  LOADING_RESULTS
} from './../actions/dinerActions';

const initialState = {
  diners:[],
  recommendations:[],
  dinerErrorMessage: '',
  topRestaurant: {},
  isLoadingResults: false,
  index: 0
}

export default function dinerReducer(state = initialState, action){
  switch(action.type){
    case LOAD_SNAPPEA_DATA:
      return Object.assign({}, state, {
        recommendations: action.info,
        isLoadingResults: false
      })
    case SET_TOP_RESTAURANT:
      let newTopRestaurant = state.recommendations[state.index]
      return Object.assign({}, state, {
        topRestaurant: newTopRestaurant
      })
    case CHANGE_TOP_RESTAURANT:
      if (state.index < 19) {
        let newIndex = state.index + 1;
        return Object.assign({}, state, {
          topRestaurant: recommendations[newIndex]
        })
      } else {
        return Object.assign({}, state, {
          index: 0
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
