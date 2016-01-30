import {
  LOAD_SNAPPEA_DATA,
  SET_TOP_RESTAURANT,
  CHANGE_TOP_RESTAURANT
} from './../actions/dinerActions';

const initialState = {
  diners:[],
  recommendations:[],
  dinerErrorMessage: '',
  topRestaurant: {},
  index: 0
}

export default function dinerReducer(state = initialState, action){
  switch(action.type){
    case LOAD_SNAPPEA_DATA:
      return Object.assign({}, state, {
        recommendations: action.info
      })
    case SET_TOP_RESTAURANT:
      console.log('inside SET_TOP_RESTAURANT');
      console.log('state.recommendations', state);
      return Object.assign({}, state, {
        topRestaurant: state.recommendations[state.index]
      })
    case CHANGE_TOP_RESTAURANT:
      console.log('inside CHANGE_TOP_RESTAURANT');
      if (state.index < 20) {
        state.index = state.index + 1;
        return Object.assign({}, state, {
          index: state.index
        })
      } else {
        return Object.assign({}, state, {
          index: 0
        })
      }
    default:
      return state;
  }
}
