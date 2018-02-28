import movieMiddleware from '../../middlewares/MovieMiddleware';
import {
  MOVIE_CREATE_REQUESTED,
  MOVIE_EDIT_REQUESTED,
  MOVIE_DELETE_REQUESTED
} from '../../actions/MovieActions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('MovieMiddleware', () => {
  it('sends create Movie request', () => {
    const store = configureMockStore([thunk])({})
    const next = jest.fn();
    const action = {type: MOVIE_CREATE_REQUESTED};
    const api = {
      createMovie: jest.fn()
    }
    const middleware = movieMiddleware(api);
    middleware(store)(next)(action);

    expect(api.createMovie.mock.calls.length).toBe(1);
  });

  it('sends update Movie request', () => {
    const store = configureMockStore([thunk])({})
    const next = jest.fn();
    const action = {type: MOVIE_EDIT_REQUESTED};
    const api = {
      updateMovie: jest.fn()
    }
    const middleware = movieMiddleware(api);
    middleware(store)(next)(action);

    expect(api.updateMovie.mock.calls.length).toBe(1);
  });

  it('sends delete Movie request', () => {
    const store = configureMockStore([thunk])({})
    const next = jest.fn();
    const action = {type: MOVIE_DELETE_REQUESTED};
    const api = {
      deleteMovie: jest.fn()
    }
    const middleware = movieMiddleware(api);
    middleware(store)(next)(action);

    expect(api.deleteMovie.mock.calls.length).toBe(1);
  });
});
