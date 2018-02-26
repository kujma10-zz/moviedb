import {
  LOGIN_REQUESTED,
  LOGIN_SUCCEDED,
  LOGIN_REQUEST_FAILED
} from '../actions/LoginActions'

const initialState = ''

export default function movies(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUESTED:
      return 'IN_PROGRESS';
    case LOGIN_SUCCEDED:
      return 'SUCCEDED';
    case LOGIN_REQUEST_FAILED:
      return 'FAILED';
    default:
      return state;
  }
}
