import {
  LOAD_SNAPPEA_DATA,
  SET_TOP_RESTAURANT,
  UPDATE_TOP_RESTAURANT,
  ADD_DINER,
  REMOVE_DINER,
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
    case ADD_DINER:
      let addDiners = state.diners.slice(0);
      if(action.diner === addDiners[0]){
        return state
      } else {
        addDiners.push(action.diner);
        return Object.assign({}, state, {
          diners: addDiners
        })
      }
    case REMOVE_DINER:
      let removeDiners = state.diners.filter(username => {
        return username !== action.diner;
      });
      return Object.assign({}, state, {
        diner: removeDiners
      });
    case LOADING_RESULTS:
      return Object.assign({}, state, {
        isLoadingResults: true,
        topRestaurant: {}
      })
    default:
      return state;
  }
}
