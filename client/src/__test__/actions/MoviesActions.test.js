import {
  moviesRequested,
  moviesReceived,
  moviesRequestFailed,
  MOVIES_REQUESTED,
  MOVIES_RECEIVED,
  MOVIES_REQUEST_FAILED
} from '../../actions/MoviesActions'

describe('Movies actions', () => {
  it('creates action to request movies', () => {
    const expectedAction = {
      type: MOVIES_REQUESTED
    }
    expect(moviesRequested()).toEqual(expectedAction)
  })

  it('creates action to receive movies', () => {
    const movies = [{id: 'id'}];
    const expectedAction = {
      type: MOVIES_RECEIVED,
      payload: movies
    }
    expect(moviesReceived(movies)).toEqual(expectedAction)
  })

  it('creates action to fail movies request', () => {
    const expectedAction = {
      type: MOVIES_REQUEST_FAILED
    }
    expect(moviesRequestFailed()).toEqual(expectedAction)
  })
})
