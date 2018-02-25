import {
  MOVIES_REQUESTED,
  MOVIES_RECEIVED,
  MOVIES_REQUEST_FAILED
} from '../actions/MoviesActions'
import {merge} from 'ramda'

const initialState = {
  loading: false,
  data: undefined
};

export default function movies(state = initialState, action) {
  switch (action.type) {
    case MOVIES_REQUESTED:
      return merge(state, {'loading': true});
    case MOVIES_RECEIVED:
      return {loading: false, data: action.payload};
    case MOVIES_REQUEST_FAILED:
      return merge(state, {'loading': false});
    default:
      return state;
  }
}
