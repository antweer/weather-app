import { FETCH_WEATHER } from '../actions/index.js';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // Not mutating state, but rather returning a new instance of it - concat adds on to existing - same with ... 
      return [ action.payload.data, ...state ]; 
      // Inserts new data at top of state
  }
  return state;
}