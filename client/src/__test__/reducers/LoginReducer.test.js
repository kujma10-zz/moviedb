import reducer from '../../reducers/LoginReducer'
import {
  LOGIN_REQUESTED,
  LOGIN_SUCCEDED,
  LOGIN_REQUEST_FAILED
} from '../../actions/LoginActions'

describe('Movies Reducer', () => {
  it('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual('')
  })

  it('sets state to IN_PROGRESS when LOGIN_REQUESTED', () => {
    expect(reducer([], {type: LOGIN_REQUESTED})).toEqual('IN_PROGRESS');
  })

  it('sets state to SUCCEDED when LOGIN_SUCCEDED', () => {
    expect(reducer([], {type: LOGIN_SUCCEDED})).toEqual('SUCCEDED');
  })

  it('sets state to FAILED when LOGIN_REQUEST_FAILED', () => {
    expect(reducer([], {type: LOGIN_REQUEST_FAILED})).toEqual('FAILED');
  })
})
