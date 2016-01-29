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
    console.log('loadsnappeadatadinerreducer: ', state)
      return Object.assign({}, state, {
        recommendations: action.info
      })
    default:
    console.log('defaultirving: ', state)
      return state;
  }
}