import { HELLO_DAISY, HELLO_SHIN, HELLO_JUSTIN, HELLO_CARL } from './../actions/actions';

const initialState = {
  text: 'DEFAULTTTT'
}

function sayHello(state = initialState, action){
  switch(action.type){
    case HELLO_DAISY:
      return Object.assign({}, state, {
        text: action.text
      })
    case HELLO_SHIN:
      return Object.assign({}, state, {
        text: action.text
      })
    case HELLO_JUSTIN:
      return Object.assign({}, state, {
        text: action.text
      })
    case HELLO_CARL:
      return Object.assign({}, state, {
        text: action.text
      })
    default:
      return state
  }
}

export default sayHello
