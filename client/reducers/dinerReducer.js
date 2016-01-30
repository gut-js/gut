import {
  LOAD_SNAPPEA_DATA,
  SET_TOP_RESTAURANT,
  CHANGE_TOP_RESTAURANT,
  UPDATE_DINERS
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
      let newTopRestaurant = state.recommendations[state.index]
      console.log('NUDE TOP RESTAURANT', newTopRestaurant)
      return Object.assign({}, state, {
        topRestaurant: newTopRestaurant
      })
    case CHANGE_TOP_RESTAURANT:
      console.log('index, ', state.index)
      if (state.index < 19) {
        let newIndex = state.index + 1;
        console.log('newIndex, ', newIndex)
        return Object.assign({}, state, {
          index: newIndex
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
    default:
      return state;
  }
}
