export const HELLO_DAISY = 'HELLO_DAISY'
export const HELLO_SHIN = 'HELLO_SHIN'
export const HELLO_JUSTIN = 'HELLO_JUSTIN'
export const HELLO_CARL = 'HELLO_CARL'

export function daisy(){
  return {
    type: HELLO_DAISY,
    text: 'hello daisy'
  }
}

export function shin(){
  return {
    type: HELLO_SHIN,
    text: 'hello shin'
  }
}

export function justin(){
  return {
    type: HELLO_JUSTIN,
    text: 'hello justin'
  }
}

export function carl(){
  return {
    type: HELLO_CARL,
    text: 'hello carl'
  }
}
