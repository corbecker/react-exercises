import _ from 'lodash';
import {
  CREATE_STREAM,
  UPDATE_STREAM,
  DELETE_STREAM,
  GET_STREAMS,
  GET_STREAM
} from '../actions/types';

const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload }
    case UPDATE_STREAM:
      // ES6 key interpolation
      return { ...state, [action.payload.id]: action.payload }
    case DELETE_STREAM:
      return { ..._.omit(state, [action.payload]) }
    case GET_STREAM:
      return { ...state, [action.payload.id]: action.payload }
    case GET_STREAMS:
      //map keys takes an array and maps it to an object with specified key
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    default:
      return state;
  }
}

export default streamReducer;