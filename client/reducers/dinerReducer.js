import {
  LOAD_SNAPPEA_DATA
} from './../actions/dinerActions';

const initialState = {
  diners:[],
  recommendations:[],
  dinerErrorMessage: ''
}

export default function dinerReducer(state = initialState, action){
  switch(action.type){
    case LOAD_SNAPPEA_DATA:
      return Object.assign({}, state, {
        recommendations: action.info
      })
    default:
      return state;
  }
}
