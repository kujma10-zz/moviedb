import movieMiddleware from '../../middlewares/MovieMiddleware';
import {
  MOVIE_CREATE_REQUESTED
} from '../../actions/MovieActions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('MovieMiddleware', () => {
  it('creates movie when requested', () => {
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
});
