import reducer from '../reducers/MoviesReducer'
import {
  MOVIES_REQUESTED,
  MOVIES_RECEIVED,
  MOVIES_REQUEST_FAILED
} from '../src/actions/MoviesActions'

describe('Movies Reducer', () => {
  it('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      loading: false,
      data: undefined
    })
  })

  it('sets loading to true when MOVIES_REQUESTED', () => {
    expect(
      reducer([], {type: MOVIES_REQUESTED})
    ).toEqual(
      {
        loading: true,
        data: undefined
      }
    )
  })

  it('sets movie data when MOVIES_RECEIVED', () => {
    const movies = {id: '1'}
    expect(
      reducer([], {type: MOVIES_REQUESTED, payload: movies})
    ).toEqual(
      {
        loading: true,
        data: movies
      }
    )
  })
})
