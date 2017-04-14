import { FETCH_CHEESE_REQUEST, FETCH_CHEESE_SUCCESS, FETCH_CHEESE_ERROR } from '../actions/cheese';

const initialState = {
  cheeses: [],
  loading: false,
  error: null
}

export function cheeseReducer(state = initialState, action){
  if( action.type === FETCH_CHEESE_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    })  
  }
  else if( action.type === FETCH_CHEESE_SUCCESS) {
    return Object.assign({}, state, {
      cheeses: action.cheese,
      loading: false,
      error: null

    })
  }
  else if( action.type === FETCH_CHEESE_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  }
  return state;
}